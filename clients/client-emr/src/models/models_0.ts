// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { EMRServiceException as __BaseException } from "./EMRServiceException";

/**
 * @public
 * @enum
 */
export const ActionOnFailure = {
  CANCEL_AND_WAIT: "CANCEL_AND_WAIT",
  CONTINUE: "CONTINUE",
  TERMINATE_CLUSTER: "TERMINATE_CLUSTER",
  TERMINATE_JOB_FLOW: "TERMINATE_JOB_FLOW",
} as const;

/**
 * @public
 */
export type ActionOnFailure = (typeof ActionOnFailure)[keyof typeof ActionOnFailure];

/**
 * @public
 * @enum
 */
export const InstanceFleetType = {
  CORE: "CORE",
  MASTER: "MASTER",
  TASK: "TASK",
} as const;

/**
 * @public
 */
export type InstanceFleetType = (typeof InstanceFleetType)[keyof typeof InstanceFleetType];

/**
 * @public
 * <p>EBS volume specifications such as volume type, IOPS, size (GiB) and throughput (MiB/s)
 *          that are requested for the EBS volume attached to an Amazon EC2 instance in the
 *          cluster.</p>
 */
export interface VolumeSpecification {
  /**
   * @public
   * <p>The volume type. Volume types supported are gp3, gp2, io1, st1, sc1, and
   *          standard.</p>
   */
  VolumeType: string | undefined;

  /**
   * @public
   * <p>The number of I/O operations per second (IOPS) that the volume supports.</p>
   */
  Iops?: number;

  /**
   * @public
   * <p>The volume size, in gibibytes (GiB). This can be a number from 1 - 1024. If the volume
   *          type is EBS-optimized, the minimum value is 10.</p>
   */
  SizeInGB: number | undefined;

  /**
   * @public
   * <p>The throughput, in mebibyte per second (MiB/s). This optional parameter can be a number
   *          from 125 - 1000 and is valid only for gp3 volumes.</p>
   */
  Throughput?: number;
}

/**
 * @public
 * <p>Configuration of requested EBS block device associated with the instance group with
 *          count of volumes that are associated to every instance.</p>
 */
export interface EbsBlockDeviceConfig {
  /**
   * @public
   * <p>EBS volume specifications such as volume type, IOPS, size (GiB) and throughput (MiB/s)
   *          that are requested for the EBS volume attached to an Amazon EC2 instance in the
   *          cluster.</p>
   */
  VolumeSpecification: VolumeSpecification | undefined;

  /**
   * @public
   * <p>Number of EBS volumes with a specific volume configuration that are associated with
   *          every instance in the instance group</p>
   */
  VolumesPerInstance?: number;
}

/**
 * @public
 * <p>The Amazon EBS configuration of a cluster instance.</p>
 */
export interface EbsConfiguration {
  /**
   * @public
   * <p>An array of Amazon EBS volume specifications attached to a cluster
   *          instance.</p>
   */
  EbsBlockDeviceConfigs?: EbsBlockDeviceConfig[];

  /**
   * @public
   * <p>Indicates whether an Amazon EBS volume is EBS-optimized.</p>
   */
  EbsOptimized?: boolean;
}

/**
 * @public
 * @enum
 */
export const OnDemandProvisioningAllocationStrategy = {
  LOWEST_PRICE: "lowest-price",
} as const;

/**
 * @public
 */
export type OnDemandProvisioningAllocationStrategy =
  (typeof OnDemandProvisioningAllocationStrategy)[keyof typeof OnDemandProvisioningAllocationStrategy];

/**
 * @public
 * @enum
 */
export const OnDemandCapacityReservationPreference = {
  NONE: "none",
  OPEN: "open",
} as const;

/**
 * @public
 */
export type OnDemandCapacityReservationPreference =
  (typeof OnDemandCapacityReservationPreference)[keyof typeof OnDemandCapacityReservationPreference];

/**
 * @public
 * @enum
 */
export const OnDemandCapacityReservationUsageStrategy = {
  USE_CAPACITY_RESERVATIONS_FIRST: "use-capacity-reservations-first",
} as const;

/**
 * @public
 */
export type OnDemandCapacityReservationUsageStrategy =
  (typeof OnDemandCapacityReservationUsageStrategy)[keyof typeof OnDemandCapacityReservationUsageStrategy];

/**
 * @public
 * <p>Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand
 *          capacity.</p>
 */
export interface OnDemandCapacityReservationOptions {
  /**
   * @public
   * <p>Indicates whether to use unused Capacity Reservations for fulfilling On-Demand
   *          capacity.</p>
   *          <p>If you specify <code>use-capacity-reservations-first</code>, the fleet uses unused
   *          Capacity Reservations to fulfill On-Demand capacity up to the target On-Demand capacity. If
   *          multiple instance pools have unused Capacity Reservations, the On-Demand allocation
   *          strategy (<code>lowest-price</code>) is applied. If the number of unused Capacity
   *          Reservations is less than the On-Demand target capacity, the remaining On-Demand target
   *          capacity is launched according to the On-Demand allocation strategy
   *             (<code>lowest-price</code>).</p>
   *          <p>If you do not specify a value, the fleet fulfills the On-Demand capacity according to
   *          the chosen On-Demand allocation strategy.</p>
   */
  UsageStrategy?: OnDemandCapacityReservationUsageStrategy;

  /**
   * @public
   * <p>Indicates the instance's Capacity Reservation preferences. Possible preferences
   *          include:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>open</code> - The instance can run in any open Capacity Reservation that has
   *                matching attributes (instance type, platform, Availability Zone).</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>none</code> - The instance avoids running in a Capacity Reservation even if
   *                one is available. The instance runs as an On-Demand Instance.</p>
   *             </li>
   *          </ul>
   */
  CapacityReservationPreference?: OnDemandCapacityReservationPreference;

  /**
   * @public
   * <p>The ARN of the Capacity Reservation resource group in which to run the instance.</p>
   */
  CapacityReservationResourceGroupArn?: string;
}

/**
 * @public
 * <p> The launch specification for On-Demand Instances in the instance fleet, which
 *          determines the allocation strategy. </p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR releases
 *             4.8.0 and later, excluding 5.0.x versions. On-Demand Instances allocation strategy is
 *             available in Amazon EMR releases 5.12.1 and later.</p>
 *          </note>
 */
export interface OnDemandProvisioningSpecification {
  /**
   * @public
   * <p>Specifies the strategy to use in launching On-Demand instance fleets. Currently, the
   *          only option is <code>lowest-price</code> (the default), which launches the lowest price
   *          first.</p>
   */
  AllocationStrategy: OnDemandProvisioningAllocationStrategy | undefined;

  /**
   * @public
   * <p>The launch specification for On-Demand instances in the instance fleet, which determines
   *          the allocation strategy.</p>
   */
  CapacityReservationOptions?: OnDemandCapacityReservationOptions;
}

/**
 * @public
 * @enum
 */
export const SpotProvisioningAllocationStrategy = {
  CAPACITY_OPTIMIZED: "capacity-optimized",
  DIVERSIFIED: "diversified",
  LOWEST_PRICE: "lowest-price",
  PRICE_CAPACITY_OPTIMIZED: "price-capacity-optimized",
} as const;

/**
 * @public
 */
export type SpotProvisioningAllocationStrategy =
  (typeof SpotProvisioningAllocationStrategy)[keyof typeof SpotProvisioningAllocationStrategy];

/**
 * @public
 * @enum
 */
export const SpotProvisioningTimeoutAction = {
  SWITCH_TO_ON_DEMAND: "SWITCH_TO_ON_DEMAND",
  TERMINATE_CLUSTER: "TERMINATE_CLUSTER",
} as const;

/**
 * @public
 */
export type SpotProvisioningTimeoutAction =
  (typeof SpotProvisioningTimeoutAction)[keyof typeof SpotProvisioningTimeoutAction];

/**
 * @public
 * <p>The launch specification for Spot Instances in the instance fleet, which determines the
 *          defined duration, provisioning timeout behavior, and allocation strategy.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR releases
 *             4.8.0 and later, excluding 5.0.x versions. Spot Instance allocation strategy is
 *             available in Amazon EMR releases 5.12.1 and later.</p>
 *          </note>
 *          <note>
 *             <p>Spot Instances with a defined duration (also known as Spot blocks) are no longer
 *             available to new customers from July 1, 2021. For customers who have previously used the
 *             feature, we will continue to support Spot Instances with a defined duration until
 *             December 31, 2022. </p>
 *          </note>
 */
export interface SpotProvisioningSpecification {
  /**
   * @public
   * <p>The Spot provisioning timeout period in minutes. If Spot Instances are not provisioned
   *          within this time period, the <code>TimeOutAction</code> is taken. Minimum value is 5 and
   *          maximum value is 1440. The timeout applies only during initial provisioning, when the
   *          cluster is first created.</p>
   */
  TimeoutDurationMinutes: number | undefined;

  /**
   * @public
   * <p>The action to take when <code>TargetSpotCapacity</code> has not been fulfilled when the
   *             <code>TimeoutDurationMinutes</code> has expired; that is, when all Spot Instances could
   *          not be provisioned within the Spot provisioning timeout. Valid values are
   *             <code>TERMINATE_CLUSTER</code> and <code>SWITCH_TO_ON_DEMAND</code>. SWITCH_TO_ON_DEMAND
   *          specifies that if no Spot Instances are available, On-Demand Instances should be
   *          provisioned to fulfill any remaining Spot capacity.</p>
   */
  TimeoutAction: SpotProvisioningTimeoutAction | undefined;

  /**
   * @public
   * <p>The defined duration for Spot Instances (also known as Spot blocks) in minutes. When
   *          specified, the Spot Instance does not terminate before the defined duration expires, and
   *          defined duration pricing for Spot Instances applies. Valid values are 60, 120, 180, 240,
   *          300, or 360. The duration period starts as soon as a Spot Instance receives its instance
   *          ID. At the end of the duration, Amazon EC2 marks the Spot Instance for termination
   *          and provides a Spot Instance termination notice, which gives the instance a two-minute
   *          warning before it terminates. </p>
   *          <note>
   *             <p>Spot Instances with a defined duration (also known as Spot blocks) are no longer
   *             available to new customers from July 1, 2021. For customers who have previously used the
   *             feature, we will continue to support Spot Instances with a defined duration until
   *             December 31, 2022. </p>
   *          </note>
   */
  BlockDurationMinutes?: number;

  /**
   * @public
   * <p> Specifies the strategy to use in launching Spot Instance fleets. Currently, the only
   *          option is capacity-optimized (the default), which launches instances from Spot Instance
   *          pools with optimal capacity for the number of instances that are launching. </p>
   */
  AllocationStrategy?: SpotProvisioningAllocationStrategy;
}

/**
 * @public
 * <p>The launch specification for Spot Instances in the fleet, which determines the defined
 *          duration, provisioning timeout behavior, and allocation strategy.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR releases
 *             4.8.0 and later, excluding 5.0.x versions. On-Demand and Spot instance allocation
 *             strategies are available in Amazon EMR releases 5.12.1 and later.</p>
 *          </note>
 */
export interface InstanceFleetProvisioningSpecifications {
  /**
   * @public
   * <p>The launch specification for Spot instances in the fleet, which determines the defined
   *          duration, provisioning timeout behavior, and allocation strategy.</p>
   */
  SpotSpecification?: SpotProvisioningSpecification;

  /**
   * @public
   * <p> The launch specification for On-Demand Instances in the instance fleet, which
   *          determines the allocation strategy. </p>
   *          <note>
   *             <p>The instance fleet configuration is available only in Amazon EMR releases
   *             4.8.0 and later, excluding 5.0.x versions. On-Demand Instances allocation strategy is
   *             available in Amazon EMR releases 5.12.1 and later.</p>
   *          </note>
   */
  OnDemandSpecification?: OnDemandProvisioningSpecification;
}

/**
 * @public
 * <p>The resize specification for On-Demand Instances in the instance fleet, which contains
 *          the resize timeout period. </p>
 */
export interface OnDemandResizingSpecification {
  /**
   * @public
   * <p>On-Demand resize timeout in minutes. If On-Demand Instances are not provisioned within
   *          this time, the resize workflow stops. The minimum value is 5 minutes, and the maximum value
   *          is 10,080 minutes (7 days). The timeout applies to all resize workflows on the Instance
   *          Fleet. The resize could be triggered by Amazon EMR Managed Scaling or by the
   *          customer (via Amazon EMR Console, Amazon EMR CLI modify-instance-fleet or
   *             Amazon EMR SDK ModifyInstanceFleet API) or by Amazon EMR due to Amazon EC2 Spot Reclamation.</p>
   */
  TimeoutDurationMinutes: number | undefined;
}

/**
 * @public
 * <p>The resize specification for Spot Instances in the instance fleet, which contains the
 *          resize timeout period. </p>
 */
export interface SpotResizingSpecification {
  /**
   * @public
   * <p>Spot resize timeout in minutes. If Spot Instances are not provisioned within this time,
   *          the resize workflow will stop provisioning of Spot instances. Minimum value is 5 minutes
   *          and maximum value is 10,080 minutes (7 days). The timeout applies to all resize workflows
   *          on the Instance Fleet. The resize could be triggered by Amazon EMR Managed Scaling
   *          or by the customer (via Amazon EMR Console, Amazon EMR CLI
   *          modify-instance-fleet or Amazon EMR SDK ModifyInstanceFleet API) or by Amazon EMR due to Amazon EC2 Spot Reclamation.</p>
   */
  TimeoutDurationMinutes: number | undefined;
}

/**
 * @public
 * <p>The resize specification for On-Demand and Spot Instances in the fleet.</p>
 */
export interface InstanceFleetResizingSpecifications {
  /**
   * @public
   * <p>The resize specification for Spot Instances in the instance fleet, which contains the
   *          resize timeout period. </p>
   */
  SpotResizeSpecification?: SpotResizingSpecification;

  /**
   * @public
   * <p>The resize specification for On-Demand Instances in the instance fleet, which contains
   *          the resize timeout period. </p>
   */
  OnDemandResizeSpecification?: OnDemandResizingSpecification;
}

/**
 * @public
 */
export interface AddInstanceFleetOutput {
  /**
   * @public
   * <p>The unique identifier of the cluster.</p>
   */
  ClusterId?: string;

  /**
   * @public
   * <p>The unique identifier of the instance fleet.</p>
   */
  InstanceFleetId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name of the cluster.</p>
   */
  ClusterArn?: string;
}

/**
 * @public
 * <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @public
   * <p>The message associated with the exception.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>This exception occurs when there is something wrong with user input.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The error code associated with the exception.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>The message associated with the exception.</p>
   */
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
    this.ErrorCode = opts.ErrorCode;
    this.Message = opts.Message;
  }
}

/**
 * @public
 * <p>The upper and lower Amazon EC2 instance limits for an automatic scaling policy.
 *          Automatic scaling activities triggered by automatic scaling rules will not cause an
 *          instance group to grow above or below these limits.</p>
 */
export interface ScalingConstraints {
  /**
   * @public
   * <p>The lower boundary of Amazon EC2 instances in an instance group below which
   *          scaling activities are not allowed to shrink. Scale-in activities will not terminate
   *          instances below this boundary.</p>
   */
  MinCapacity: number | undefined;

  /**
   * @public
   * <p>The upper boundary of Amazon EC2 instances in an instance group beyond which
   *          scaling activities are not allowed to grow. Scale-out activities will not add instances
   *          beyond this boundary.</p>
   */
  MaxCapacity: number | undefined;
}

/**
 * @public
 * @enum
 */
export const MarketType = {
  ON_DEMAND: "ON_DEMAND",
  SPOT: "SPOT",
} as const;

/**
 * @public
 */
export type MarketType = (typeof MarketType)[keyof typeof MarketType];

/**
 * @public
 * @enum
 */
export const AdjustmentType = {
  CHANGE_IN_CAPACITY: "CHANGE_IN_CAPACITY",
  EXACT_CAPACITY: "EXACT_CAPACITY",
  PERCENT_CHANGE_IN_CAPACITY: "PERCENT_CHANGE_IN_CAPACITY",
} as const;

/**
 * @public
 */
export type AdjustmentType = (typeof AdjustmentType)[keyof typeof AdjustmentType];

/**
 * @public
 * <p>An automatic scaling configuration, which describes how the policy adds or removes
 *          instances, the cooldown period, and the number of Amazon EC2 instances that will be
 *          added each time the CloudWatch metric alarm condition is satisfied.</p>
 */
export interface SimpleScalingPolicyConfiguration {
  /**
   * @public
   * <p>The way in which Amazon EC2 instances are added (if
   *             <code>ScalingAdjustment</code> is a positive number) or terminated (if
   *             <code>ScalingAdjustment</code> is a negative number) each time the scaling activity is
   *          triggered. <code>CHANGE_IN_CAPACITY</code> is the default. <code>CHANGE_IN_CAPACITY</code>
   *          indicates that the Amazon EC2 instance count increments or decrements by
   *             <code>ScalingAdjustment</code>, which should be expressed as an integer.
   *             <code>PERCENT_CHANGE_IN_CAPACITY</code> indicates the instance count increments or
   *          decrements by the percentage specified by <code>ScalingAdjustment</code>, which should be
   *          expressed as an integer. For example, 20 indicates an increase in 20% increments of cluster
   *          capacity. <code>EXACT_CAPACITY</code> indicates the scaling activity results in an instance
   *          group with the number of Amazon EC2 instances specified by
   *             <code>ScalingAdjustment</code>, which should be expressed as a positive integer.</p>
   */
  AdjustmentType?: AdjustmentType;

  /**
   * @public
   * <p>The amount by which to scale in or scale out, based on the specified
   *             <code>AdjustmentType</code>. A positive value adds to the instance group's Amazon EC2 instance count while a negative number removes instances. If
   *             <code>AdjustmentType</code> is set to <code>EXACT_CAPACITY</code>, the number should
   *          only be a positive integer. If <code>AdjustmentType</code> is set to
   *             <code>PERCENT_CHANGE_IN_CAPACITY</code>, the value should express the percentage as an
   *          integer. For example, -20 indicates a decrease in 20% increments of cluster
   *          capacity.</p>
   */
  ScalingAdjustment: number | undefined;

  /**
   * @public
   * <p>The amount of time, in seconds, after a scaling activity completes before any further
   *          trigger-related scaling activities can start. The default value is 0.</p>
   */
  CoolDown?: number;
}

/**
 * @public
 * <p>The type of adjustment the automatic scaling activity makes when triggered, and the
 *          periodicity of the adjustment.</p>
 */
export interface ScalingAction {
  /**
   * @public
   * <p>Not available for instance groups. Instance groups use the market type specified for the
   *          group.</p>
   */
  Market?: MarketType;

  /**
   * @public
   * <p>The type of adjustment the automatic scaling activity makes when triggered, and the
   *          periodicity of the adjustment.</p>
   */
  SimpleScalingPolicyConfiguration: SimpleScalingPolicyConfiguration | undefined;
}

/**
 * @public
 * @enum
 */
export const ComparisonOperator = {
  GREATER_THAN: "GREATER_THAN",
  GREATER_THAN_OR_EQUAL: "GREATER_THAN_OR_EQUAL",
  LESS_THAN: "LESS_THAN",
  LESS_THAN_OR_EQUAL: "LESS_THAN_OR_EQUAL",
} as const;

/**
 * @public
 */
export type ComparisonOperator = (typeof ComparisonOperator)[keyof typeof ComparisonOperator];

/**
 * @public
 * <p>A CloudWatch dimension, which is specified using a <code>Key</code> (known as a
 *             <code>Name</code> in CloudWatch), <code>Value</code> pair. By default, Amazon EMR uses one dimension whose <code>Key</code> is <code>JobFlowID</code> and
 *             <code>Value</code> is a variable representing the cluster ID, which is
 *             <code>$\{emr.clusterId\}</code>. This enables the rule to bootstrap when the cluster ID
 *          becomes available.</p>
 */
export interface MetricDimension {
  /**
   * @public
   * <p>The dimension name.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The dimension value.</p>
   */
  Value?: string;
}

/**
 * @public
 * @enum
 */
export const Statistic = {
  AVERAGE: "AVERAGE",
  MAXIMUM: "MAXIMUM",
  MINIMUM: "MINIMUM",
  SAMPLE_COUNT: "SAMPLE_COUNT",
  SUM: "SUM",
} as const;

/**
 * @public
 */
export type Statistic = (typeof Statistic)[keyof typeof Statistic];

/**
 * @public
 * @enum
 */
export const Unit = {
  BITS: "BITS",
  BITS_PER_SECOND: "BITS_PER_SECOND",
  BYTES: "BYTES",
  BYTES_PER_SECOND: "BYTES_PER_SECOND",
  COUNT: "COUNT",
  COUNT_PER_SECOND: "COUNT_PER_SECOND",
  GIGA_BITS: "GIGA_BITS",
  GIGA_BITS_PER_SECOND: "GIGA_BITS_PER_SECOND",
  GIGA_BYTES: "GIGA_BYTES",
  GIGA_BYTES_PER_SECOND: "GIGA_BYTES_PER_SECOND",
  KILO_BITS: "KILO_BITS",
  KILO_BITS_PER_SECOND: "KILO_BITS_PER_SECOND",
  KILO_BYTES: "KILO_BYTES",
  KILO_BYTES_PER_SECOND: "KILO_BYTES_PER_SECOND",
  MEGA_BITS: "MEGA_BITS",
  MEGA_BITS_PER_SECOND: "MEGA_BITS_PER_SECOND",
  MEGA_BYTES: "MEGA_BYTES",
  MEGA_BYTES_PER_SECOND: "MEGA_BYTES_PER_SECOND",
  MICRO_SECONDS: "MICRO_SECONDS",
  MILLI_SECONDS: "MILLI_SECONDS",
  NONE: "NONE",
  PERCENT: "PERCENT",
  SECONDS: "SECONDS",
  TERA_BITS: "TERA_BITS",
  TERA_BITS_PER_SECOND: "TERA_BITS_PER_SECOND",
  TERA_BYTES: "TERA_BYTES",
  TERA_BYTES_PER_SECOND: "TERA_BYTES_PER_SECOND",
} as const;

/**
 * @public
 */
export type Unit = (typeof Unit)[keyof typeof Unit];

/**
 * @public
 * <p>The definition of a CloudWatch metric alarm, which determines when an automatic scaling
 *          activity is triggered. When the defined alarm conditions are satisfied, scaling activity
 *          begins.</p>
 */
export interface CloudWatchAlarmDefinition {
  /**
   * @public
   * <p>Determines how the metric specified by <code>MetricName</code> is compared to the value
   *          specified by <code>Threshold</code>.</p>
   */
  ComparisonOperator: ComparisonOperator | undefined;

  /**
   * @public
   * <p>The number of periods, in five-minute increments, during which the alarm condition must
   *          exist before the alarm triggers automatic scaling activity. The default value is
   *             <code>1</code>.</p>
   */
  EvaluationPeriods?: number;

  /**
   * @public
   * <p>The name of the CloudWatch metric that is watched to determine an alarm
   *          condition.</p>
   */
  MetricName: string | undefined;

  /**
   * @public
   * <p>The namespace for the CloudWatch metric. The default is
   *             <code>AWS/ElasticMapReduce</code>.</p>
   */
  Namespace?: string;

  /**
   * @public
   * <p>The period, in seconds, over which the statistic is applied. CloudWatch metrics for
   *             Amazon EMR are emitted every five minutes (300 seconds), so if you specify a
   *          CloudWatch metric, specify <code>300</code>.</p>
   */
  Period: number | undefined;

  /**
   * @public
   * <p>The statistic to apply to the metric associated with the alarm. The default is
   *             <code>AVERAGE</code>.</p>
   */
  Statistic?: Statistic;

  /**
   * @public
   * <p>The value against which the specified statistic is compared.</p>
   */
  Threshold: number | undefined;

  /**
   * @public
   * <p>The unit of measure associated with the CloudWatch metric being watched. The value
   *          specified for <code>Unit</code> must correspond to the units specified in the CloudWatch
   *          metric.</p>
   */
  Unit?: Unit;

  /**
   * @public
   * <p>A CloudWatch metric dimension.</p>
   */
  Dimensions?: MetricDimension[];
}

/**
 * @public
 * <p>The conditions that trigger an automatic scaling activity.</p>
 */
export interface ScalingTrigger {
  /**
   * @public
   * <p>The definition of a CloudWatch metric alarm. When the defined alarm conditions are met
   *          along with other trigger parameters, scaling activity begins.</p>
   */
  CloudWatchAlarmDefinition: CloudWatchAlarmDefinition | undefined;
}

/**
 * @public
 * <p>A scale-in or scale-out rule that defines scaling activity, including the CloudWatch
 *          metric alarm that triggers activity, how Amazon EC2 instances are added or removed,
 *          and the periodicity of adjustments. The automatic scaling policy for an instance group can
 *          comprise one or more automatic scaling rules.</p>
 */
export interface ScalingRule {
  /**
   * @public
   * <p>The name used to identify an automatic scaling rule. Rule names must be unique within a
   *          scaling policy.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A friendly, more verbose description of the automatic scaling rule.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The conditions that trigger an automatic scaling activity.</p>
   */
  Action: ScalingAction | undefined;

  /**
   * @public
   * <p>The CloudWatch alarm definition that determines when automatic scaling activity is
   *          triggered.</p>
   */
  Trigger: ScalingTrigger | undefined;
}

/**
 * @public
 * <p>An automatic scaling policy for a core instance group or task instance group in an
 *             Amazon EMR cluster. An automatic scaling policy defines how an instance group
 *          dynamically adds and terminates Amazon EC2 instances in response to the value of a
 *          CloudWatch metric. See <a>PutAutoScalingPolicy</a>.</p>
 */
export interface AutoScalingPolicy {
  /**
   * @public
   * <p>The upper and lower Amazon EC2 instance limits for an automatic scaling policy.
   *          Automatic scaling activity will not cause an instance group to grow above or below these
   *          limits.</p>
   */
  Constraints: ScalingConstraints | undefined;

  /**
   * @public
   * <p>The scale-in and scale-out rules that comprise the automatic scaling policy.</p>
   */
  Rules: ScalingRule[] | undefined;
}

/**
 * @public
 * @enum
 */
export const InstanceRoleType = {
  CORE: "CORE",
  MASTER: "MASTER",
  TASK: "TASK",
} as const;

/**
 * @public
 */
export type InstanceRoleType = (typeof InstanceRoleType)[keyof typeof InstanceRoleType];

/**
 * @public
 * <p>Output from an AddInstanceGroups call.</p>
 */
export interface AddInstanceGroupsOutput {
  /**
   * @public
   * <p>The job flow ID in which the instance groups are added.</p>
   */
  JobFlowId?: string;

  /**
   * @public
   * <p>Instance group IDs of the newly created instance groups.</p>
   */
  InstanceGroupIds?: string[];

  /**
   * @public
   * <p>The Amazon Resource Name of the cluster.</p>
   */
  ClusterArn?: string;
}

/**
 * @public
 * <p>Indicates that an error occurred while processing the request and that the request was
 *          not completed.</p>
 */
export class InternalServerError extends __BaseException {
  readonly name: "InternalServerError" = "InternalServerError";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerError, __BaseException>) {
    super({
      name: "InternalServerError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerError.prototype);
  }
}

/**
 * @public
 * <p>A key-value pair.</p>
 */
export interface KeyValue {
  /**
   * @public
   * <p>The unique identifier of a key-value pair.</p>
   */
  Key?: string;

  /**
   * @public
   * <p>The value part of the identified key.</p>
   */
  Value?: string;
}

/**
 * @public
 * <p>A job flow step consisting of a JAR file whose main function will be executed. The main
 *          function submits a job for Hadoop to execute and waits for the job to finish or
 *          fail.</p>
 */
export interface HadoopJarStepConfig {
  /**
   * @public
   * <p>A list of Java properties that are set when the step runs. You can use these properties
   *          to pass key-value pairs to your main function.</p>
   */
  Properties?: KeyValue[];

  /**
   * @public
   * <p>A path to a JAR file run during the step.</p>
   */
  Jar: string | undefined;

  /**
   * @public
   * <p>The name of the main class in the specified Java file. If not specified, the JAR file
   *          should specify a Main-Class in its manifest file.</p>
   */
  MainClass?: string;

  /**
   * @public
   * <p>A list of command line arguments passed to the JAR file's main function when
   *          executed.</p>
   */
  Args?: string[];
}

/**
 * @public
 * <p>Specification for a cluster (job flow) step.</p>
 */
export interface StepConfig {
  /**
   * @public
   * <p>The name of the step.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The action to take when the step fails. Use one of the following values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TERMINATE_CLUSTER</code> - Shuts down the cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CANCEL_AND_WAIT</code> - Cancels any pending steps and returns the cluster
   *                to the <code>WAITING</code> state.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>CONTINUE</code> - Continues to the next step in the queue.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TERMINATE_JOB_FLOW</code> - Shuts down the cluster.
   *                   <code>TERMINATE_JOB_FLOW</code> is provided for backward compatibility. We
   *                recommend using <code>TERMINATE_CLUSTER</code> instead.</p>
   *             </li>
   *          </ul>
   *          <p>If a cluster's <code>StepConcurrencyLevel</code> is greater than <code>1</code>, do not
   *          use <code>AddJobFlowSteps</code> to submit a step with this parameter set to
   *             <code>CANCEL_AND_WAIT</code> or <code>TERMINATE_CLUSTER</code>. The step is not
   *          submitted and the action fails with a message that the <code>ActionOnFailure</code> setting
   *          is not valid.</p>
   *          <p>If you change a cluster's <code>StepConcurrencyLevel</code> to be greater than 1 while a
   *          step is running, the <code>ActionOnFailure</code> parameter may not behave as you expect.
   *          In this case, for a step that fails with this parameter set to
   *          <code>CANCEL_AND_WAIT</code>, pending steps and the running step are not canceled; for a
   *          step that fails with this parameter set to <code>TERMINATE_CLUSTER</code>, the cluster does
   *          not terminate.</p>
   */
  ActionOnFailure?: ActionOnFailure;

  /**
   * @public
   * <p>The JAR file used for the step.</p>
   */
  HadoopJarStep: HadoopJarStepConfig | undefined;
}

/**
 * @public
 * <p> The input argument to the <a>AddJobFlowSteps</a> operation. </p>
 */
export interface AddJobFlowStepsInput {
  /**
   * @public
   * <p>A string that uniquely identifies the job flow. This identifier is returned by <a>RunJobFlow</a> and can also be obtained from <a>ListClusters</a>.
   *       </p>
   */
  JobFlowId: string | undefined;

  /**
   * @public
   * <p> A list of <a>StepConfig</a> to be executed by the job flow. </p>
   */
  Steps: StepConfig[] | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the runtime role for a step on the cluster. The
   *          runtime role can be a cross-account IAM role. The runtime role ARN is a
   *          combination of account ID, role name, and role type using the following format:
   *             <code>arn:partition:service:region:account:resource</code>. </p>
   *          <p>For example, <code>arn:aws:IAM::1234567890:role/ReadOnly</code> is a correctly formatted
   *          runtime role ARN.</p>
   */
  ExecutionRoleArn?: string;
}

/**
 * @public
 * <p> The output for the <a>AddJobFlowSteps</a> operation. </p>
 */
export interface AddJobFlowStepsOutput {
  /**
   * @public
   * <p>The identifiers of the list of steps added to the job flow.</p>
   */
  StepIds?: string[];
}

/**
 * @public
 * <p>A key-value pair containing user-defined metadata that you can associate with an Amazon EMR resource. Tags make it easier to associate clusters in various ways, such as
 *          grouping clusters to track your Amazon EMR resource allocation costs. For more
 *          information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag Clusters</a>. </p>
 */
export interface Tag {
  /**
   * @public
   * <p>A user-defined key, which is the minimum required information for a valid tag. For more
   *          information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag</a>. </p>
   */
  Key?: string;

  /**
   * @public
   * <p>A user-defined value, which is optional in a tag. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag
   *             Clusters</a>. </p>
   */
  Value?: string;
}

/**
 * @public
 * <p>This input identifies an Amazon EMR resource and a list of tags to
 *          attach.</p>
 */
export interface AddTagsInput {
  /**
   * @public
   * <p>The Amazon EMR resource identifier to which tags will be added. For example, a
   *          cluster identifier or an Amazon EMR Studio ID.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>A list of tags to associate with a resource. Tags are user-defined key-value pairs that
   *          consist of a required key string with a maximum of 128 characters, and an optional value
   *          string with a maximum of 256 characters.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 * <p>This output indicates the result of adding tags to a resource.</p>
 */
export interface AddTagsOutput {}

/**
 * @public
 * <p>With Amazon EMR release version 4.0 and later, the only accepted parameter is
 *          the application name. To pass arguments to applications, you use configuration
 *          classifications specified using configuration JSON objects. For more information, see
 *             <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html">Configuring Applications</a>.</p>
 *          <p>With earlier Amazon EMR releases, the application is any Amazon or third-party
 *          software that you can add to the cluster. This structure contains a list of strings that
 *          indicates the software to use with the cluster and accepts a user argument list. Amazon EMR accepts and forwards the argument list to the corresponding installation
 *          script as bootstrap action argument.</p>
 */
export interface Application {
  /**
   * @public
   * <p>The name of the application.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The version of the application.</p>
   */
  Version?: string;

  /**
   * @public
   * <p>Arguments for Amazon EMR to pass to the application.</p>
   */
  Args?: string[];

  /**
   * @public
   * <p>This option is for advanced users only. This is meta information about third-party
   *          applications that third-party vendors use for testing purposes.</p>
   */
  AdditionalInfo?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const AuthMode = {
  IAM: "IAM",
  SSO: "SSO",
} as const;

/**
 * @public
 */
export type AuthMode = (typeof AuthMode)[keyof typeof AuthMode];

/**
 * @public
 * @enum
 */
export const AutoScalingPolicyState = {
  ATTACHED: "ATTACHED",
  ATTACHING: "ATTACHING",
  DETACHED: "DETACHED",
  DETACHING: "DETACHING",
  FAILED: "FAILED",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type AutoScalingPolicyState = (typeof AutoScalingPolicyState)[keyof typeof AutoScalingPolicyState];

/**
 * @public
 * @enum
 */
export const AutoScalingPolicyStateChangeReasonCode = {
  CLEANUP_FAILURE: "CLEANUP_FAILURE",
  PROVISION_FAILURE: "PROVISION_FAILURE",
  USER_REQUEST: "USER_REQUEST",
} as const;

/**
 * @public
 */
export type AutoScalingPolicyStateChangeReasonCode =
  (typeof AutoScalingPolicyStateChangeReasonCode)[keyof typeof AutoScalingPolicyStateChangeReasonCode];

/**
 * @public
 * <p>The reason for an <a>AutoScalingPolicyStatus</a> change.</p>
 */
export interface AutoScalingPolicyStateChangeReason {
  /**
   * @public
   * <p>The code indicating the reason for the change in status.<code>USER_REQUEST</code>
   *          indicates that the scaling policy status was changed by a user.
   *             <code>PROVISION_FAILURE</code> indicates that the status change was because the policy
   *          failed to provision. <code>CLEANUP_FAILURE</code> indicates an error.</p>
   */
  Code?: AutoScalingPolicyStateChangeReasonCode;

  /**
   * @public
   * <p>A friendly, more verbose message that accompanies an automatic scaling policy state
   *          change.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>The status of an automatic scaling policy.
 *          </p>
 */
export interface AutoScalingPolicyStatus {
  /**
   * @public
   * <p>Indicates the status of the automatic scaling policy.</p>
   */
  State?: AutoScalingPolicyState;

  /**
   * @public
   * <p>The reason for a change in status.</p>
   */
  StateChangeReason?: AutoScalingPolicyStateChangeReason;
}

/**
 * @public
 * <p>An automatic scaling policy for a core instance group or task instance group in an
 *             Amazon EMR cluster. The automatic scaling policy defines how an instance group
 *          dynamically adds and terminates Amazon EC2 instances in response to the value of a
 *          CloudWatch metric. See <a>PutAutoScalingPolicy</a>.</p>
 */
export interface AutoScalingPolicyDescription {
  /**
   * @public
   * <p>The status of an automatic scaling policy. </p>
   */
  Status?: AutoScalingPolicyStatus;

  /**
   * @public
   * <p>The upper and lower Amazon EC2 instance limits for an automatic scaling policy.
   *          Automatic scaling activity will not cause an instance group to grow above or below these
   *          limits.</p>
   */
  Constraints?: ScalingConstraints;

  /**
   * @public
   * <p>The scale-in and scale-out rules that comprise the automatic scaling policy.</p>
   */
  Rules?: ScalingRule[];
}

/**
 * @public
 * <p>An auto-termination policy for an Amazon EMR cluster. An auto-termination policy
 *          defines the amount of idle time in seconds after which a cluster automatically terminates.
 *          For alternative cluster termination options, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html">Control cluster
 *             termination</a>.</p>
 */
export interface AutoTerminationPolicy {
  /**
   * @public
   * <p>Specifies the amount of idle time in seconds after which the cluster automatically
   *          terminates. You can specify a minimum of 60 seconds and a maximum of 604800 seconds (seven
   *          days).</p>
   */
  IdleTimeout?: number;
}

/**
 * @public
 * <p>A list of port ranges that are permitted to allow inbound traffic from all public IP
 *          addresses. To specify a single port, use the same value for <code>MinRange</code> and
 *             <code>MaxRange</code>.</p>
 */
export interface PortRange {
  /**
   * @public
   * <p>The smallest port number in a specified range of port numbers.</p>
   */
  MinRange: number | undefined;

  /**
   * @public
   * <p>The smallest port number in a specified range of port numbers.</p>
   */
  MaxRange?: number;
}

/**
 * @public
 * <p>Properties that describe the Amazon Web Services principal that created the
 *             <code>BlockPublicAccessConfiguration</code> using the
 *             <code>PutBlockPublicAccessConfiguration</code> action as well as the date and time that
 *          the configuration was created. Each time a configuration for block public access is
 *          updated, Amazon EMR updates this metadata.</p>
 */
export interface BlockPublicAccessConfigurationMetadata {
  /**
   * @public
   * <p>The date and time that the configuration was created.</p>
   */
  CreationDateTime: Date | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name that created or last modified the configuration.</p>
   */
  CreatedByArn: string | undefined;
}

/**
 * @public
 * <p>Configuration of the script to run during a bootstrap action.</p>
 */
export interface ScriptBootstrapActionConfig {
  /**
   * @public
   * <p>Location in Amazon S3 of the script to run during a bootstrap action.</p>
   */
  Path: string | undefined;

  /**
   * @public
   * <p>A list of command line arguments to pass to the bootstrap action script.</p>
   */
  Args?: string[];
}

/**
 * @public
 * <p>Configuration of a bootstrap action.</p>
 */
export interface BootstrapActionConfig {
  /**
   * @public
   * <p>The name of the bootstrap action.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The script run by the bootstrap action.</p>
   */
  ScriptBootstrapAction: ScriptBootstrapActionConfig | undefined;
}

/**
 * @public
 * <p>Reports the configuration of a bootstrap action in a cluster (job flow).</p>
 */
export interface BootstrapActionDetail {
  /**
   * @public
   * <p>A description of the bootstrap action.</p>
   */
  BootstrapActionConfig?: BootstrapActionConfig;
}

/**
 * @public
 * @enum
 */
export const StepCancellationOption = {
  SEND_INTERRUPT: "SEND_INTERRUPT",
  TERMINATE_PROCESS: "TERMINATE_PROCESS",
} as const;

/**
 * @public
 */
export type StepCancellationOption = (typeof StepCancellationOption)[keyof typeof StepCancellationOption];

/**
 * @public
 * <p>The input argument to the <a>CancelSteps</a> operation.</p>
 */
export interface CancelStepsInput {
  /**
   * @public
   * <p>The <code>ClusterID</code> for the specified steps that will be canceled. Use <a>RunJobFlow</a> and <a>ListClusters</a> to get ClusterIDs. </p>
   */
  ClusterId: string | undefined;

  /**
   * @public
   * <p>The list of <code>StepIDs</code> to cancel. Use <a>ListSteps</a> to get steps
   *          and their states for the specified cluster.</p>
   */
  StepIds: string[] | undefined;

  /**
   * @public
   * <p>The option to choose to cancel <code>RUNNING</code> steps. By default, the value is
   *             <code>SEND_INTERRUPT</code>.</p>
   */
  StepCancellationOption?: StepCancellationOption;
}

/**
 * @public
 * @enum
 */
export const CancelStepsRequestStatus = {
  FAILED: "FAILED",
  SUBMITTED: "SUBMITTED",
} as const;

/**
 * @public
 */
export type CancelStepsRequestStatus = (typeof CancelStepsRequestStatus)[keyof typeof CancelStepsRequestStatus];

/**
 * @public
 * <p>Specification of the status of a CancelSteps request. Available only in Amazon EMR version 4.8.0 and later, excluding version 5.0.0.</p>
 */
export interface CancelStepsInfo {
  /**
   * @public
   * <p>The encrypted StepId of a step.</p>
   */
  StepId?: string;

  /**
   * @public
   * <p>The status of a CancelSteps Request. The value may be SUBMITTED or FAILED.</p>
   */
  Status?: CancelStepsRequestStatus;

  /**
   * @public
   * <p>The reason for the failure if the CancelSteps request fails.</p>
   */
  Reason?: string;
}

/**
 * @public
 * <p> The output for the <a>CancelSteps</a> operation. </p>
 */
export interface CancelStepsOutput {
  /**
   * @public
   * <p>A list of <a>CancelStepsInfo</a>, which shows the status of specified cancel
   *          requests for each <code>StepID</code> specified.</p>
   */
  CancelStepsInfoList?: CancelStepsInfo[];
}

/**
 * @public
 * <p>Provides information about the Amazon EC2 instances in a cluster grouped by
 *          category. For example, key name, subnet ID, IAM instance profile, and so
 *          on.</p>
 */
export interface Ec2InstanceAttributes {
  /**
   * @public
   * <p>The name of the Amazon EC2 key pair to use when connecting with SSH into the
   *          master node as a user named "hadoop".</p>
   */
  Ec2KeyName?: string;

  /**
   * @public
   * <p>Set this parameter to the identifier of the Amazon VPC subnet where you want the
   *          cluster to launch. If you do not specify this value, and your account supports EC2-Classic,
   *          the cluster launches in EC2-Classic.</p>
   */
  Ec2SubnetId?: string;

  /**
   * @public
   * <p>Applies to clusters configured with the instance fleets option. Specifies the unique
   *          identifier of one or more Amazon EC2 subnets in which to launch Amazon EC2
   *          cluster instances. Subnets must exist within the same VPC. Amazon EMR chooses the
   *             Amazon EC2 subnet with the best fit from among the list of
   *             <code>RequestedEc2SubnetIds</code>, and then launches all cluster instances within that
   *          Subnet. If this value is not specified, and the account and Region support EC2-Classic
   *          networks, the cluster launches instances in the EC2-Classic network and uses
   *             <code>RequestedEc2AvailabilityZones</code> instead of this setting. If EC2-Classic is
   *          not supported, and no Subnet is specified, Amazon EMR chooses the subnet for you.
   *             <code>RequestedEc2SubnetIDs</code> and <code>RequestedEc2AvailabilityZones</code> cannot
   *          be specified together.</p>
   */
  RequestedEc2SubnetIds?: string[];

  /**
   * @public
   * <p>The Availability Zone in which the cluster will run. </p>
   */
  Ec2AvailabilityZone?: string;

  /**
   * @public
   * <p>Applies to clusters configured with the instance fleets option. Specifies one or more
   *          Availability Zones in which to launch Amazon EC2 cluster instances when the
   *          EC2-Classic network configuration is supported. Amazon EMR chooses the Availability
   *          Zone with the best fit from among the list of <code>RequestedEc2AvailabilityZones</code>,
   *          and then launches all cluster instances within that Availability Zone. If you do not
   *          specify this value, Amazon EMR chooses the Availability Zone for you.
   *             <code>RequestedEc2SubnetIDs</code> and <code>RequestedEc2AvailabilityZones</code> cannot
   *          be specified together.</p>
   */
  RequestedEc2AvailabilityZones?: string[];

  /**
   * @public
   * <p>The IAM role that was specified when the cluster was launched. The
   *             Amazon EC2 instances of the cluster assume this role.</p>
   */
  IamInstanceProfile?: string;

  /**
   * @public
   * <p>The identifier of the Amazon EC2 security group for the master node.</p>
   */
  EmrManagedMasterSecurityGroup?: string;

  /**
   * @public
   * <p>The identifier of the Amazon EC2 security group for the core and task
   *          nodes.</p>
   */
  EmrManagedSlaveSecurityGroup?: string;

  /**
   * @public
   * <p>The identifier of the Amazon EC2 security group for the Amazon EMR
   *          service to access clusters in VPC private subnets.</p>
   */
  ServiceAccessSecurityGroup?: string;

  /**
   * @public
   * <p>A list of additional Amazon EC2 security group IDs for the master node.</p>
   */
  AdditionalMasterSecurityGroups?: string[];

  /**
   * @public
   * <p>A list of additional Amazon EC2 security group IDs for the core and task
   *          nodes.</p>
   */
  AdditionalSlaveSecurityGroups?: string[];
}

/**
 * @public
 * @enum
 */
export const InstanceCollectionType = {
  INSTANCE_FLEET: "INSTANCE_FLEET",
  INSTANCE_GROUP: "INSTANCE_GROUP",
} as const;

/**
 * @public
 */
export type InstanceCollectionType = (typeof InstanceCollectionType)[keyof typeof InstanceCollectionType];

/**
 * @public
 * <p>Attributes for Kerberos configuration when Kerberos authentication is enabled using a
 *          security configuration. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html">Use Kerberos Authentication</a>
 *          in the <i>Amazon EMR Management Guide</i>.</p>
 */
export interface KerberosAttributes {
  /**
   * @public
   * <p>The name of the Kerberos realm to which all nodes in a cluster belong. For example,
   *             <code>EC2.INTERNAL</code>. </p>
   */
  Realm: string | undefined;

  /**
   * @public
   * <p>The password used within the cluster for the kadmin service on the cluster-dedicated
   *          KDC, which maintains Kerberos principals, password policies, and keytabs for the
   *          cluster.</p>
   */
  KdcAdminPassword: string | undefined;

  /**
   * @public
   * <p>Required only when establishing a cross-realm trust with a KDC in a different realm. The
   *          cross-realm principal password, which must be identical across realms.</p>
   */
  CrossRealmTrustPrincipalPassword?: string;

  /**
   * @public
   * <p>Required only when establishing a cross-realm trust with an Active Directory domain. A
   *          user with sufficient privileges to join resources to the domain.</p>
   */
  ADDomainJoinUser?: string;

  /**
   * @public
   * <p>The Active Directory password for <code>ADDomainJoinUser</code>.</p>
   */
  ADDomainJoinPassword?: string;
}

/**
 * @public
 * @enum
 */
export const PlacementGroupStrategy = {
  CLUSTER: "CLUSTER",
  NONE: "NONE",
  PARTITION: "PARTITION",
  SPREAD: "SPREAD",
} as const;

/**
 * @public
 */
export type PlacementGroupStrategy = (typeof PlacementGroupStrategy)[keyof typeof PlacementGroupStrategy];

/**
 * @public
 * <p>Placement group configuration for an Amazon EMR cluster. The configuration
 *          specifies the placement strategy that can be applied to instance roles during cluster
 *          creation.</p>
 *          <p>To use this configuration, consider attaching managed policy
 *          AmazonElasticMapReducePlacementGroupPolicy to the Amazon EMR role.</p>
 */
export interface PlacementGroupConfig {
  /**
   * @public
   * <p>Role of the instance in the cluster.</p>
   *          <p>Starting with Amazon EMR release 5.23.0, the only supported instance role is
   *             <code>MASTER</code>.</p>
   */
  InstanceRole: InstanceRoleType | undefined;

  /**
   * @public
   * <p>Amazon EC2 Placement Group strategy associated with instance role.</p>
   *          <p>Starting with Amazon EMR release 5.23.0, the only supported placement strategy
   *          is <code>SPREAD</code> for the <code>MASTER</code> instance role.</p>
   */
  PlacementStrategy?: PlacementGroupStrategy;
}

/**
 * @public
 * @enum
 */
export const RepoUpgradeOnBoot = {
  NONE: "NONE",
  SECURITY: "SECURITY",
} as const;

/**
 * @public
 */
export type RepoUpgradeOnBoot = (typeof RepoUpgradeOnBoot)[keyof typeof RepoUpgradeOnBoot];

/**
 * @public
 * @enum
 */
export const ScaleDownBehavior = {
  TERMINATE_AT_INSTANCE_HOUR: "TERMINATE_AT_INSTANCE_HOUR",
  TERMINATE_AT_TASK_COMPLETION: "TERMINATE_AT_TASK_COMPLETION",
} as const;

/**
 * @public
 */
export type ScaleDownBehavior = (typeof ScaleDownBehavior)[keyof typeof ScaleDownBehavior];

/**
 * @public
 * <p>A tuple that provides information about an error that caused a cluster to
 *          terminate.</p>
 */
export interface ErrorDetail {
  /**
   * @public
   * <p>The name or code associated with the error.</p>
   */
  ErrorCode?: string;

  /**
   * @public
   * <p>A list of key value pairs that provides contextual information about why an error
   *          occured.</p>
   */
  ErrorData?: Record<string, string>[];

  /**
   * @public
   * <p>A message that describes the error.</p>
   */
  ErrorMessage?: string;
}

/**
 * @public
 * @enum
 */
export const ClusterState = {
  BOOTSTRAPPING: "BOOTSTRAPPING",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  TERMINATED: "TERMINATED",
  TERMINATED_WITH_ERRORS: "TERMINATED_WITH_ERRORS",
  TERMINATING: "TERMINATING",
  WAITING: "WAITING",
} as const;

/**
 * @public
 */
export type ClusterState = (typeof ClusterState)[keyof typeof ClusterState];

/**
 * @public
 * @enum
 */
export const ClusterStateChangeReasonCode = {
  ALL_STEPS_COMPLETED: "ALL_STEPS_COMPLETED",
  BOOTSTRAP_FAILURE: "BOOTSTRAP_FAILURE",
  INSTANCE_FAILURE: "INSTANCE_FAILURE",
  INSTANCE_FLEET_TIMEOUT: "INSTANCE_FLEET_TIMEOUT",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  STEP_FAILURE: "STEP_FAILURE",
  USER_REQUEST: "USER_REQUEST",
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;

/**
 * @public
 */
export type ClusterStateChangeReasonCode =
  (typeof ClusterStateChangeReasonCode)[keyof typeof ClusterStateChangeReasonCode];

/**
 * @public
 * <p>The reason that the cluster changed to its current state.</p>
 */
export interface ClusterStateChangeReason {
  /**
   * @public
   * <p>The programmatic code for the state change reason.</p>
   */
  Code?: ClusterStateChangeReasonCode;

  /**
   * @public
   * <p>The descriptive message for the state change reason.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>Represents the timeline of the cluster's lifecycle.</p>
 */
export interface ClusterTimeline {
  /**
   * @public
   * <p>The creation date and time of the cluster.</p>
   */
  CreationDateTime?: Date;

  /**
   * @public
   * <p>The date and time when the cluster was ready to run steps.</p>
   */
  ReadyDateTime?: Date;

  /**
   * @public
   * <p>The date and time when the cluster was terminated.</p>
   */
  EndDateTime?: Date;
}

/**
 * @public
 * <p>The detailed status of the cluster.</p>
 */
export interface ClusterStatus {
  /**
   * @public
   * <p>The current state of the cluster.</p>
   */
  State?: ClusterState;

  /**
   * @public
   * <p>The reason for the cluster status change.</p>
   */
  StateChangeReason?: ClusterStateChangeReason;

  /**
   * @public
   * <p>A timeline that represents the status of a cluster over the lifetime of the
   *          cluster.</p>
   */
  Timeline?: ClusterTimeline;

  /**
   * @public
   * <p>A list of tuples that provides information about the errors that caused a cluster to
   *          terminate. This structure can contain up to 10 different <code>ErrorDetail</code>
   *          tuples.</p>
   */
  ErrorDetails?: ErrorDetail[];
}

/**
 * @public
 * <p>The summary description of the cluster.</p>
 */
export interface ClusterSummary {
  /**
   * @public
   * <p>The unique identifier for the cluster.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The name of the cluster.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The details about the current status of the cluster.</p>
   */
  Status?: ClusterStatus;

  /**
   * @public
   * <p>An approximation of the cost of the cluster, represented in m1.small/hours. This value
   *          is incremented one time for every hour an m1.small instance runs. Larger instances are
   *          weighted more, so an Amazon EC2 instance that is roughly four times more expensive
   *          would result in the normalized instance hours being incremented by four. This result is
   *          only an approximation and does not reflect the actual billing rate.</p>
   */
  NormalizedInstanceHours?: number;

  /**
   * @public
   * <p>The Amazon Resource Name of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the Outpost where the cluster is launched. </p>
   */
  OutpostArn?: string;
}

/**
 * @public
 * <p>An entity describing an executable that runs on a cluster.</p>
 */
export interface Command {
  /**
   * @public
   * <p>The name of the command.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Amazon S3 location of the command script.</p>
   */
  ScriptPath?: string;

  /**
   * @public
   * <p>Arguments for Amazon EMR to pass to the command for execution.</p>
   */
  Args?: string[];
}

/**
 * @public
 * @enum
 */
export const ComputeLimitsUnitType = {
  InstanceFleetUnits: "InstanceFleetUnits",
  Instances: "Instances",
  VCPU: "VCPU",
} as const;

/**
 * @public
 */
export type ComputeLimitsUnitType = (typeof ComputeLimitsUnitType)[keyof typeof ComputeLimitsUnitType];

/**
 * @public
 * <p> The Amazon EC2 unit limits for a managed scaling policy. The managed scaling
 *          activity of a cluster can not be above or below these limits. The limit only applies to the
 *          core and task nodes. The master node cannot be scaled after initial configuration. </p>
 */
export interface ComputeLimits {
  /**
   * @public
   * <p> The unit type used for specifying a managed scaling policy. </p>
   */
  UnitType: ComputeLimitsUnitType | undefined;

  /**
   * @public
   * <p> The lower boundary of Amazon EC2 units. It is measured through vCPU cores or
   *          instances for instance groups and measured through units for instance fleets. Managed
   *          scaling activities are not allowed beyond this boundary. The limit only applies to the core
   *          and task nodes. The master node cannot be scaled after initial configuration. </p>
   */
  MinimumCapacityUnits: number | undefined;

  /**
   * @public
   * <p> The upper boundary of Amazon EC2 units. It is measured through vCPU cores or
   *          instances for instance groups and measured through units for instance fleets. Managed
   *          scaling activities are not allowed beyond this boundary. The limit only applies to the core
   *          and task nodes. The master node cannot be scaled after initial configuration. </p>
   */
  MaximumCapacityUnits: number | undefined;

  /**
   * @public
   * <p> The upper boundary of On-Demand Amazon EC2 units. It is measured through vCPU
   *          cores or instances for instance groups and measured through units for instance fleets. The
   *          On-Demand units are not allowed to scale beyond this boundary. The parameter is used to
   *          split capacity allocation between On-Demand and Spot Instances. </p>
   */
  MaximumOnDemandCapacityUnits?: number;

  /**
   * @public
   * <p> The upper boundary of Amazon EC2 units for core node type in a cluster. It is
   *          measured through vCPU cores or instances for instance groups and measured through units for
   *          instance fleets. The core units are not allowed to scale beyond this boundary. The
   *          parameter is used to split capacity allocation between core and task nodes. </p>
   */
  MaximumCoreCapacityUnits?: number;
}

/**
 * @public
 */
export interface CreateSecurityConfigurationInput {
  /**
   * @public
   * <p>The name of the security configuration.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The security configuration details in JSON format. For JSON parameters and examples, see
   *             <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-security-configurations.html">Use Security
   *             Configurations to Set Up Cluster Security</a> in the <i>Amazon EMR
   *             Management Guide</i>.</p>
   */
  SecurityConfiguration: string | undefined;
}

/**
 * @public
 */
export interface CreateSecurityConfigurationOutput {
  /**
   * @public
   * <p>The name of the security configuration.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The date and time the security configuration was created.</p>
   */
  CreationDateTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateStudioInput {
  /**
   * @public
   * <p>A descriptive name for the Amazon EMR Studio.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>A detailed description of the Amazon EMR Studio.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Specifies whether the Studio authenticates users using IAM or IAM Identity Center.</p>
   */
  AuthMode: AuthMode | undefined;

  /**
   * @public
   * <p>The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the
   *          Studio.</p>
   */
  VpcId: string | undefined;

  /**
   * @public
   * <p>A list of subnet IDs to associate with the Amazon EMR Studio. A Studio can have
   *          a maximum of 5 subnets. The subnets must belong to the VPC specified by <code>VpcId</code>.
   *          Studio users can create a Workspace in any of the specified subnets.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * @public
   * <p>The IAM role that the Amazon EMR Studio assumes. The service role
   *          provides a way for Amazon EMR Studio to interoperate with other Amazon Web Services
   *          services.</p>
   */
  ServiceRole: string | undefined;

  /**
   * @public
   * <p>The IAM user role that users and groups assume when logged in to an
   *             Amazon EMR Studio. Only specify a <code>UserRole</code> when you use IAM Identity Center authentication. The permissions attached to the <code>UserRole</code> can be
   *          scoped down for each user or group using session policies.</p>
   */
  UserRole?: string;

  /**
   * @public
   * <p>The ID of the Amazon EMR Studio Workspace security group. The Workspace security
   *          group allows outbound network traffic to resources in the Engine security group, and it
   *          must be in the same VPC specified by <code>VpcId</code>.</p>
   */
  WorkspaceSecurityGroupId: string | undefined;

  /**
   * @public
   * <p>The ID of the Amazon EMR Studio Engine security group. The Engine security group
   *          allows inbound network traffic from the Workspace security group, and it must be in the
   *          same VPC specified by <code>VpcId</code>.</p>
   */
  EngineSecurityGroupId: string | undefined;

  /**
   * @public
   * <p>The Amazon S3 location to back up Amazon EMR Studio Workspaces and
   *          notebook files.</p>
   */
  DefaultS3Location: string | undefined;

  /**
   * @public
   * <p>The authentication endpoint of your identity provider (IdP). Specify this value when you
   *          use IAM authentication and want to let federated users log in to a Studio
   *          with the Studio URL and credentials from your IdP. Amazon EMR Studio redirects
   *          users to this endpoint to enter credentials.</p>
   */
  IdpAuthUrl?: string;

  /**
   * @public
   * <p>The name that your identity provider (IdP) uses for its <code>RelayState</code>
   *          parameter. For example, <code>RelayState</code> or <code>TargetSource</code>. Specify this
   *          value when you use IAM authentication and want to let federated users log in
   *          to a Studio using the Studio URL. The <code>RelayState</code> parameter differs by
   *          IdP.</p>
   */
  IdpRelayStateParameterName?: string;

  /**
   * @public
   * <p>A list of tags to associate with the Amazon EMR Studio. Tags are user-defined
   *          key-value pairs that consist of a required key string with a maximum of 128 characters, and
   *          an optional value string with a maximum of 256 characters.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateStudioOutput {
  /**
   * @public
   * <p>The ID of the Amazon EMR Studio.</p>
   */
  StudioId?: string;

  /**
   * @public
   * <p>The unique Studio access URL.</p>
   */
  Url?: string;
}

/**
 * @public
 * @enum
 */
export const IdentityType = {
  GROUP: "GROUP",
  USER: "USER",
} as const;

/**
 * @public
 */
export type IdentityType = (typeof IdentityType)[keyof typeof IdentityType];

/**
 * @public
 */
export interface CreateStudioSessionMappingInput {
  /**
   * @public
   * <p>The ID of the Amazon EMR Studio to which the user or group will be
   *          mapped.</p>
   */
  StudioId: string | undefined;

  /**
   * @public
   * <p>The globally unique identifier (GUID) of the user or group from the IAM Identity Center
   *          Identity Store. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserId">UserId</a> and <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-GroupId">GroupId</a> in the <i>IAM Identity Center Identity Store API
   *             Reference</i>. Either <code>IdentityName</code> or <code>IdentityId</code> must
   *          be specified, but not both.</p>
   */
  IdentityId?: string;

  /**
   * @public
   * <p>The name of the user or group. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserName">UserName</a> and <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-DisplayName">DisplayName</a> in the <i>IAM Identity Center Identity Store API
   *             Reference</i>. Either <code>IdentityName</code> or <code>IdentityId</code> must
   *          be specified, but not both.</p>
   */
  IdentityName?: string;

  /**
   * @public
   * <p>Specifies whether the identity to map to the Amazon EMR Studio is a user or a
   *          group.</p>
   */
  IdentityType: IdentityType | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) for the session policy that will be applied to the user
   *          or group. You should specify the ARN for the session policy that you want to apply, not the
   *          ARN of your user role. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-user-role.html">Create an Amazon EMR
   *             Studio User Role with Session Policies</a>.</p>
   */
  SessionPolicyArn: string | undefined;
}

/**
 * @public
 * <p>The username and password that you use to connect to cluster endpoints.</p>
 */
export interface UsernamePassword {
  /**
   * @public
   * <p>The username associated with the temporary credentials that you use to connect to
   *          cluster endpoints.</p>
   */
  Username?: string;

  /**
   * @public
   * <p>The password associated with the temporary credentials that you use to connect to
   *          cluster endpoints.</p>
   */
  Password?: string;
}

/**
 * @public
 * <p>The credentials that you can use to connect to cluster endpoints. Credentials consist of
 *          a username and a password.</p>
 */
export type Credentials = Credentials.UsernamePasswordMember | Credentials.$UnknownMember;

/**
 * @public
 */
export namespace Credentials {
  /**
   * @public
   * <p>The username and password that you use to connect to cluster endpoints.</p>
   */
  export interface UsernamePasswordMember {
    UsernamePassword: UsernamePassword;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    UsernamePassword?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    UsernamePassword: (value: UsernamePassword) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: Credentials, visitor: Visitor<T>): T => {
    if (value.UsernamePassword !== undefined) return visitor.UsernamePassword(value.UsernamePassword);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface DeleteSecurityConfigurationInput {
  /**
   * @public
   * <p>The name of the security configuration.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DeleteSecurityConfigurationOutput {}

/**
 * @public
 */
export interface DeleteStudioInput {
  /**
   * @public
   * <p>The ID of the Amazon EMR Studio.</p>
   */
  StudioId: string | undefined;
}

/**
 * @public
 */
export interface DeleteStudioSessionMappingInput {
  /**
   * @public
   * <p>The ID of the Amazon EMR Studio.</p>
   */
  StudioId: string | undefined;

  /**
   * @public
   * <p>The globally unique identifier (GUID) of the user or group to remove from the Amazon EMR Studio. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserId">UserId</a> and <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-GroupId">GroupId</a> in the <i>IAM Identity Center Identity Store API
   *             Reference</i>. Either <code>IdentityName</code> or <code>IdentityId</code> must
   *          be specified.</p>
   */
  IdentityId?: string;

  /**
   * @public
   * <p>The name of the user name or group to remove from the Amazon EMR Studio. For
   *          more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserName">UserName</a> and <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-DisplayName">DisplayName</a> in the <i>IAM Identity Center Store API Reference</i>.
   *          Either <code>IdentityName</code> or <code>IdentityId</code> must be specified.</p>
   */
  IdentityName?: string;

  /**
   * @public
   * <p>Specifies whether the identity to delete from the Amazon EMR Studio is a user or
   *          a group.</p>
   */
  IdentityType: IdentityType | undefined;
}

/**
 * @public
 * <p>This input determines which cluster to describe.</p>
 */
export interface DescribeClusterInput {
  /**
   * @public
   * <p>The identifier of the cluster to describe.</p>
   */
  ClusterId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const JobFlowExecutionState = {
  BOOTSTRAPPING: "BOOTSTRAPPING",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  RUNNING: "RUNNING",
  SHUTTING_DOWN: "SHUTTING_DOWN",
  STARTING: "STARTING",
  TERMINATED: "TERMINATED",
  WAITING: "WAITING",
} as const;

/**
 * @public
 */
export type JobFlowExecutionState = (typeof JobFlowExecutionState)[keyof typeof JobFlowExecutionState];

/**
 * @public
 * <p> The input for the <a>DescribeJobFlows</a> operation. </p>
 */
export interface DescribeJobFlowsInput {
  /**
   * @public
   * <p>Return only job flows created after this date and time.</p>
   */
  CreatedAfter?: Date;

  /**
   * @public
   * <p>Return only job flows created before this date and time.</p>
   */
  CreatedBefore?: Date;

  /**
   * @public
   * <p>Return only job flows whose job flow ID is contained in this list.</p>
   */
  JobFlowIds?: string[];

  /**
   * @public
   * <p>Return only job flows whose state is contained in this list.</p>
   */
  JobFlowStates?: JobFlowExecutionState[];
}

/**
 * @public
 * <p>Describes the status of the cluster (job flow).</p>
 */
export interface JobFlowExecutionStatusDetail {
  /**
   * @public
   * <p>The state of the job flow.</p>
   */
  State: JobFlowExecutionState | undefined;

  /**
   * @public
   * <p>The creation date and time of the job flow.</p>
   */
  CreationDateTime: Date | undefined;

  /**
   * @public
   * <p>The start date and time of the job flow.</p>
   */
  StartDateTime?: Date;

  /**
   * @public
   * <p>The date and time when the job flow was ready to start running bootstrap actions.</p>
   */
  ReadyDateTime?: Date;

  /**
   * @public
   * <p>The completion date and time of the job flow.</p>
   */
  EndDateTime?: Date;

  /**
   * @public
   * <p>Description of the job flow last changed state.</p>
   */
  LastStateChangeReason?: string;
}

/**
 * @public
 * @enum
 */
export const InstanceGroupState = {
  ARRESTED: "ARRESTED",
  BOOTSTRAPPING: "BOOTSTRAPPING",
  ENDED: "ENDED",
  PROVISIONING: "PROVISIONING",
  RECONFIGURING: "RECONFIGURING",
  RESIZING: "RESIZING",
  RUNNING: "RUNNING",
  SHUTTING_DOWN: "SHUTTING_DOWN",
  SUSPENDED: "SUSPENDED",
  TERMINATED: "TERMINATED",
  TERMINATING: "TERMINATING",
} as const;

/**
 * @public
 */
export type InstanceGroupState = (typeof InstanceGroupState)[keyof typeof InstanceGroupState];

/**
 * @public
 * <p>Detailed information about an instance group.</p>
 */
export interface InstanceGroupDetail {
  /**
   * @public
   * <p>Unique identifier for the instance group.</p>
   */
  InstanceGroupId?: string;

  /**
   * @public
   * <p>Friendly name for the instance group.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Market type of the Amazon EC2 instances used to create a cluster node.</p>
   */
  Market: MarketType | undefined;

  /**
   * @public
   * <p>Instance group role in the cluster</p>
   */
  InstanceRole: InstanceRoleType | undefined;

  /**
   * @public
   * <p>If specified, indicates that the instance group uses Spot Instances. This is the maximum
   *          price you are willing to pay for Spot Instances. Specify <code>OnDemandPrice</code> to set
   *          the amount equal to the On-Demand price, or specify an amount in USD.</p>
   */
  BidPrice?: string;

  /**
   * @public
   * <p>Amazon EC2 instance type.</p>
   */
  InstanceType: string | undefined;

  /**
   * @public
   * <p>Target number of instances to run in the instance group.</p>
   */
  InstanceRequestCount: number | undefined;

  /**
   * @public
   * <p>Actual count of running instances.</p>
   */
  InstanceRunningCount: number | undefined;

  /**
   * @public
   * <p>State of instance group. The following values are no longer supported: STARTING,
   *          TERMINATED, and FAILED.</p>
   */
  State: InstanceGroupState | undefined;

  /**
   * @public
   * <p>Details regarding the state of the instance group.</p>
   */
  LastStateChangeReason?: string;

  /**
   * @public
   * <p>The date/time the instance group was created.</p>
   */
  CreationDateTime: Date | undefined;

  /**
   * @public
   * <p>The date/time the instance group was started.</p>
   */
  StartDateTime?: Date;

  /**
   * @public
   * <p>The date/time the instance group was available to the cluster.</p>
   */
  ReadyDateTime?: Date;

  /**
   * @public
   * <p>The date/time the instance group was terminated.</p>
   */
  EndDateTime?: Date;

  /**
   * @public
   * <p>The custom AMI ID to use for the provisioned instance group.</p>
   */
  CustomAmiId?: string;
}

/**
 * @public
 * <p>The Amazon EC2 Availability Zone configuration of the cluster (job flow).</p>
 */
export interface PlacementType {
  /**
   * @public
   * <p>The Amazon EC2 Availability Zone for the cluster. <code>AvailabilityZone</code>
   *          is used for uniform instance groups, while <code>AvailabilityZones</code> (plural) is used
   *          for instance fleets.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>When multiple Availability Zones are specified, Amazon EMR evaluates them and
   *          launches instances in the optimal Availability Zone. <code>AvailabilityZones</code> is used
   *          for instance fleets, while <code>AvailabilityZone</code> (singular) is used for uniform
   *          instance groups.</p>
   *          <note>
   *             <p>The instance fleet configuration is available only in Amazon EMR releases
   *             4.8.0 and later, excluding 5.0.x versions.</p>
   *          </note>
   */
  AvailabilityZones?: string[];
}

/**
 * @public
 * <p>Specify the type of Amazon EC2 instances that the cluster (job flow) runs
 *          on.</p>
 */
export interface JobFlowInstancesDetail {
  /**
   * @public
   * <p>The Amazon EC2 master node instance type.</p>
   */
  MasterInstanceType: string | undefined;

  /**
   * @public
   * <p>The DNS name of the master node. If the cluster is on a private subnet, this is the
   *          private DNS name. On a public subnet, this is the public DNS name.</p>
   */
  MasterPublicDnsName?: string;

  /**
   * @public
   * <p>The Amazon EC2 instance identifier of the master node.</p>
   */
  MasterInstanceId?: string;

  /**
   * @public
   * <p>The Amazon EC2 core and task node instance type.</p>
   */
  SlaveInstanceType: string | undefined;

  /**
   * @public
   * <p>The number of Amazon EC2 instances in the cluster. If the value is 1, the same
   *          instance serves as both the master and core and task node. If the value is greater than 1,
   *          one instance is the master node and all others are core and task nodes.</p>
   */
  InstanceCount: number | undefined;

  /**
   * @public
   * <p>Details about the instance groups in a cluster.</p>
   */
  InstanceGroups?: InstanceGroupDetail[];

  /**
   * @public
   * <p>An approximation of the cost of the cluster, represented in m1.small/hours. This value
   *          is increased one time for every hour that an m1.small instance runs. Larger instances are
   *          weighted more heavily, so an Amazon EC2 instance that is roughly four times more
   *          expensive would result in the normalized instance hours being increased incrementally four
   *          times. This result is only an approximation and does not reflect the actual billing
   *          rate.</p>
   */
  NormalizedInstanceHours?: number;

  /**
   * @public
   * <p>The name of an Amazon EC2 key pair that can be used to connect to the master
   *          node using SSH.</p>
   */
  Ec2KeyName?: string;

  /**
   * @public
   * <p>For clusters launched within Amazon Virtual Private Cloud, this is the identifier of the
   *          subnet where the cluster was launched.</p>
   */
  Ec2SubnetId?: string;

  /**
   * @public
   * <p>The Amazon EC2 Availability Zone for the cluster.</p>
   */
  Placement?: PlacementType;

  /**
   * @public
   * <p>Specifies whether the cluster should remain available after completing all steps.</p>
   */
  KeepJobFlowAliveWhenNoSteps?: boolean;

  /**
   * @public
   * <p>Specifies whether the Amazon EC2 instances in the cluster are protected from
   *          termination by API calls, user intervention, or in the event of a job-flow error.</p>
   */
  TerminationProtected?: boolean;

  /**
   * @public
   * <p>The Hadoop version for the cluster.</p>
   */
  HadoopVersion?: string;
}

/**
 * @public
 * @enum
 */
export const StepExecutionState = {
  CANCELLED: "CANCELLED",
  COMPLETED: "COMPLETED",
  CONTINUE: "CONTINUE",
  FAILED: "FAILED",
  INTERRUPTED: "INTERRUPTED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type StepExecutionState = (typeof StepExecutionState)[keyof typeof StepExecutionState];

/**
 * @public
 * <p>The execution state of a step.</p>
 */
export interface StepExecutionStatusDetail {
  /**
   * @public
   * <p>The state of the step.</p>
   */
  State: StepExecutionState | undefined;

  /**
   * @public
   * <p>The creation date and time of the step.</p>
   */
  CreationDateTime: Date | undefined;

  /**
   * @public
   * <p>The start date and time of the step.</p>
   */
  StartDateTime?: Date;

  /**
   * @public
   * <p>The completion date and time of the step.</p>
   */
  EndDateTime?: Date;

  /**
   * @public
   * <p>A description of the step's current state.</p>
   */
  LastStateChangeReason?: string;
}

/**
 * @public
 * <p>Combines the execution state and configuration of a step.</p>
 */
export interface StepDetail {
  /**
   * @public
   * <p>The step configuration.</p>
   */
  StepConfig: StepConfig | undefined;

  /**
   * @public
   * <p>The description of the step status.</p>
   */
  ExecutionStatusDetail: StepExecutionStatusDetail | undefined;
}

/**
 * @public
 * <p>A description of a cluster (job flow).</p>
 */
export interface JobFlowDetail {
  /**
   * @public
   * <p>The job flow identifier.</p>
   */
  JobFlowId: string | undefined;

  /**
   * @public
   * <p>The name of the job flow.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The location in Amazon S3 where log files for the job are stored.</p>
   */
  LogUri?: string;

  /**
   * @public
   * <p>The KMS key used for encrypting log files. This attribute is only
   *          available with Amazon EMR 5.30.0 and later, excluding 6.0.0.</p>
   */
  LogEncryptionKmsKeyId?: string;

  /**
   * @public
   * <p>Applies only to Amazon EMR AMI versions 3.x and 2.x. For Amazon EMR
   *          releases 4.0 and later, <code>ReleaseLabel</code> is used. To specify a custom AMI, use
   *             <code>CustomAmiID</code>.</p>
   */
  AmiVersion?: string;

  /**
   * @public
   * <p>Describes the execution status of the job flow.</p>
   */
  ExecutionStatusDetail: JobFlowExecutionStatusDetail | undefined;

  /**
   * @public
   * <p>Describes the Amazon EC2 instances of the job flow.</p>
   */
  Instances: JobFlowInstancesDetail | undefined;

  /**
   * @public
   * <p>A list of steps run by the job flow.</p>
   */
  Steps?: StepDetail[];

  /**
   * @public
   * <p>A list of the bootstrap actions run by the job flow.</p>
   */
  BootstrapActions?: BootstrapActionDetail[];

  /**
   * @public
   * <p>A list of strings set by third-party software when the job flow is launched. If you are
   *          not using third-party software to manage the job flow, this value is empty.</p>
   */
  SupportedProducts?: string[];

  /**
   * @public
   * <p>Indicates whether the cluster is visible to IAM principals in the Amazon Web Services account associated with the cluster. When <code>true</code>, IAM principals in the Amazon Web Services account can perform Amazon EMR cluster
   *          actions that their IAM policies allow. When <code>false</code>, only the
   *             IAM principal that created the cluster and the Amazon Web Services account
   *          root user can perform Amazon EMR actions, regardless of IAM
   *          permissions policies attached to other IAM principals.</p>
   *          <p>The default value is <code>true</code> if a value is not provided when creating a
   *          cluster using the Amazon EMR API <a>RunJobFlow</a> command, the CLI
   *          <a href="https://docs.aws.amazon.com/cli/latest/reference/emr/create-cluster.html">create-cluster</a> command, or the Amazon Web Services Management Console.</p>
   */
  VisibleToAllUsers?: boolean;

  /**
   * @public
   * <p>The IAM role that was specified when the job flow was launched. The
   *             Amazon EC2 instances of the job flow assume this role.</p>
   */
  JobFlowRole?: string;

  /**
   * @public
   * <p>The IAM role that is assumed by the Amazon EMR service to access
   *             Amazon Web Services resources on your behalf.</p>
   */
  ServiceRole?: string;

  /**
   * @public
   * <p>An IAM role for automatic scaling policies. The default role is
   *             <code>EMR_AutoScaling_DefaultRole</code>. The IAM role provides a way for
   *          the automatic scaling feature to get the required permissions it needs to launch and
   *          terminate Amazon EC2 instances in an instance group.</p>
   */
  AutoScalingRole?: string;

  /**
   * @public
   * <p>The way that individual Amazon EC2 instances terminate when an automatic
   *          scale-in activity occurs or an instance group is resized.
   *             <code>TERMINATE_AT_INSTANCE_HOUR</code> indicates that Amazon EMR terminates
   *          nodes at the instance-hour boundary, regardless of when the request to terminate the
   *          instance was submitted. This option is only available with Amazon EMR 5.1.0 and
   *          later and is the default for clusters created using that version.
   *             <code>TERMINATE_AT_TASK_COMPLETION</code> indicates that Amazon EMR adds nodes
   *          to a deny list and drains tasks from nodes before terminating the Amazon EC2
   *          instances, regardless of the instance-hour boundary. With either behavior, Amazon EMR removes the least active nodes first and blocks instance termination if it could lead to
   *          HDFS corruption. <code>TERMINATE_AT_TASK_COMPLETION</code> available only in Amazon EMR releases 4.1.0 and later, and is the default for releases of Amazon EMR earlier than 5.1.0.</p>
   */
  ScaleDownBehavior?: ScaleDownBehavior;
}

/**
 * @public
 * <p> The output for the <a>DescribeJobFlows</a> operation. </p>
 */
export interface DescribeJobFlowsOutput {
  /**
   * @public
   * <p>A list of job flows matching the parameters supplied.</p>
   */
  JobFlows?: JobFlowDetail[];
}

/**
 * @public
 */
export interface DescribeNotebookExecutionInput {
  /**
   * @public
   * <p>The unique identifier of the notebook execution.</p>
   */
  NotebookExecutionId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ExecutionEngineType = {
  EMR: "EMR",
} as const;

/**
 * @public
 */
export type ExecutionEngineType = (typeof ExecutionEngineType)[keyof typeof ExecutionEngineType];

/**
 * @public
 * <p>Specifies the execution engine (cluster) to run the notebook and perform the notebook
 *          execution, for example, an Amazon EMR cluster.</p>
 */
export interface ExecutionEngineConfig {
  /**
   * @public
   * <p>The unique identifier of the execution engine. For an Amazon EMR cluster, this
   *          is the cluster ID.</p>
   */
  Id: string | undefined;

  /**
   * @public
   * <p>The type of execution engine. A value of <code>EMR</code> specifies an Amazon EMR cluster.</p>
   */
  Type?: ExecutionEngineType;

  /**
   * @public
   * <p>An optional unique ID of an Amazon EC2 security group to associate with the
   *          master instance of the Amazon EMR cluster for this notebook execution. For more
   *          information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-security-groups.html">Specifying
   *                Amazon EC2 Security Groups for Amazon EMR Notebooks</a> in the
   *             <i>EMR Management Guide</i>.</p>
   */
  MasterInstanceSecurityGroupId?: string;

  /**
   * @public
   * <p>The execution role ARN required for the notebook execution.</p>
   */
  ExecutionRoleArn?: string;
}

/**
 * @public
 * <p>The Amazon S3 location that stores the notebook execution input.</p>
 */
export interface NotebookS3LocationForOutput {
  /**
   * @public
   * <p>The Amazon S3 bucket that stores the notebook execution input.</p>
   */
  Bucket?: string;

  /**
   * @public
   * <p>The key to the Amazon S3 location that stores the notebook execution
   *          input.</p>
   */
  Key?: string;
}

/**
 * @public
 * @enum
 */
export const OutputNotebookFormat = {
  HTML: "HTML",
} as const;

/**
 * @public
 */
export type OutputNotebookFormat = (typeof OutputNotebookFormat)[keyof typeof OutputNotebookFormat];

/**
 * @public
 * <p>The Amazon S3 location that stores the notebook execution output.</p>
 */
export interface OutputNotebookS3LocationForOutput {
  /**
   * @public
   * <p>The Amazon S3 bucket that stores the notebook execution output.</p>
   */
  Bucket?: string;

  /**
   * @public
   * <p>The key to the Amazon S3 location that stores the notebook execution
   *          output.</p>
   */
  Key?: string;
}

/**
 * @public
 * @enum
 */
export const NotebookExecutionStatus = {
  FAILED: "FAILED",
  FAILING: "FAILING",
  FINISHED: "FINISHED",
  FINISHING: "FINISHING",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  START_PENDING: "START_PENDING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
  STOP_PENDING: "STOP_PENDING",
} as const;

/**
 * @public
 */
export type NotebookExecutionStatus = (typeof NotebookExecutionStatus)[keyof typeof NotebookExecutionStatus];

/**
 * @public
 * <p>A notebook execution. An execution is a specific instance that an Amazon EMR
 *          Notebook is run using the <code>StartNotebookExecution</code> action.</p>
 */
export interface NotebookExecution {
  /**
   * @public
   * <p>The unique identifier of a notebook execution.</p>
   */
  NotebookExecutionId?: string;

  /**
   * @public
   * <p>The unique identifier of the Amazon EMR Notebook that is used for the notebook
   *          execution.</p>
   */
  EditorId?: string;

  /**
   * @public
   * <p>The execution engine, such as an Amazon EMR cluster, used to run the Amazon EMR notebook and perform the notebook execution.</p>
   */
  ExecutionEngine?: ExecutionEngineConfig;

  /**
   * @public
   * <p>A name for the notebook execution.</p>
   */
  NotebookExecutionName?: string;

  /**
   * @public
   * <p>Input parameters in JSON format passed to the Amazon EMR Notebook at runtime for
   *          execution.</p>
   */
  NotebookParams?: string;

  /**
   * @public
   * <p>The status of the notebook execution.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>START_PENDING</code> indicates that the cluster has received the execution
   *                request but execution has not begun.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STARTING</code> indicates that the execution is starting on the
   *                cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code> indicates that the execution is being processed by the
   *                cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FINISHING</code> indicates that execution processing is in the final
   *                stages.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FINISHED</code> indicates that the execution has completed without
   *                error.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILING</code> indicates that the execution is failing and will not finish
   *                successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> indicates that the execution failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOP_PENDING</code> indicates that the cluster has received a
   *                   <code>StopNotebookExecution</code> request and the stop is pending.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPING</code> indicates that the cluster is in the process of stopping the
   *                execution as a result of a <code>StopNotebookExecution</code> request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPED</code> indicates that the execution stopped because of a
   *                   <code>StopNotebookExecution</code> request.</p>
   *             </li>
   *          </ul>
   */
  Status?: NotebookExecutionStatus;

  /**
   * @public
   * <p>The timestamp when notebook execution started.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The timestamp when notebook execution ended.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the notebook execution.</p>
   */
  Arn?: string;

  /**
   * @public
   * <p>The location of the notebook execution's output file in Amazon S3.</p>
   */
  OutputNotebookURI?: string;

  /**
   * @public
   * <p>The reason for the latest status change of the notebook execution.</p>
   */
  LastStateChangeReason?: string;

  /**
   * @public
   * <p>The unique identifier of the Amazon EC2 security group associated with the
   *             Amazon EMR Notebook instance. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-security-groups.html">Specifying
   *                Amazon EC2 Security Groups for Amazon EMR Notebooks</a> in the
   *                <i>Amazon EMR Management Guide</i>.</p>
   */
  NotebookInstanceSecurityGroupId?: string;

  /**
   * @public
   * <p>A list of tags associated with a notebook execution. Tags are user-defined key-value
   *          pairs that consist of a required key string with a maximum of 128 characters and an
   *          optional value string with a maximum of 256 characters.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The Amazon S3 location that stores the notebook execution input.</p>
   */
  NotebookS3Location?: NotebookS3LocationForOutput;

  /**
   * @public
   * <p>The Amazon S3 location for the notebook execution output.</p>
   */
  OutputNotebookS3Location?: OutputNotebookS3LocationForOutput;

  /**
   * @public
   * <p>The output format for the notebook execution.</p>
   */
  OutputNotebookFormat?: OutputNotebookFormat;

  /**
   * @public
   * <p>The environment variables associated with the notebook execution.</p>
   */
  EnvironmentVariables?: Record<string, string>;
}

/**
 * @public
 */
export interface DescribeNotebookExecutionOutput {
  /**
   * @public
   * <p>Properties of the notebook execution.</p>
   */
  NotebookExecution?: NotebookExecution;
}

/**
 * @public
 */
export interface DescribeReleaseLabelInput {
  /**
   * @public
   * <p>The target release label to be described.</p>
   */
  ReleaseLabel?: string;

  /**
   * @public
   * <p>The pagination token. Reserved for future use. Currently set to null.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Reserved for future use. Currently set to null.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 * <p>The returned release label application names or versions.</p>
 */
export interface SimplifiedApplication {
  /**
   * @public
   * <p>The returned release label application name. For example, <code>hadoop</code>.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The returned release label application version. For example, <code>3.2.1</code>.</p>
   */
  Version?: string;
}

/**
 * @public
 * <p>The Amazon Linux release specified for a cluster in the RunJobFlow request.</p>
 */
export interface OSRelease {
  /**
   * @public
   * <p>The Amazon Linux release specified for a cluster in the RunJobFlow request. The format
   *          is as shown in <a href="https://docs.aws.amazon.com/AL2/latest/relnotes/relnotes-20220218.html">
   *                <i>Amazon Linux 2 Release Notes</i>
   *             </a>. For example,
   *          2.0.20220218.1.</p>
   */
  Label?: string;
}

/**
 * @public
 */
export interface DescribeReleaseLabelOutput {
  /**
   * @public
   * <p>The target release label described in the response.</p>
   */
  ReleaseLabel?: string;

  /**
   * @public
   * <p>The list of applications available for the target release label. <code>Name</code> is
   *          the name of the application. <code>Version</code> is the concise version of the
   *          application.</p>
   */
  Applications?: SimplifiedApplication[];

  /**
   * @public
   * <p>The pagination token. Reserved for future use. Currently set to null.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>The list of available Amazon Linux release versions for an Amazon EMR release.
   *          Contains a Label field that is formatted as shown in <a href="https://docs.aws.amazon.com/AL2/latest/relnotes/relnotes-al2.html">
   *                <i>Amazon Linux 2 Release
   *                Notes</i>
   *             </a>. For example, <a href="https://docs.aws.amazon.com/AL2/latest/relnotes/relnotes-20220218.html">2.0.20220218.1</a>.</p>
   */
  AvailableOSReleases?: OSRelease[];
}

/**
 * @public
 */
export interface DescribeSecurityConfigurationInput {
  /**
   * @public
   * <p>The name of the security configuration.</p>
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityConfigurationOutput {
  /**
   * @public
   * <p>The name of the security configuration.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The security configuration details in JSON format.</p>
   */
  SecurityConfiguration?: string;

  /**
   * @public
   * <p>The date and time the security configuration was created</p>
   */
  CreationDateTime?: Date;
}

/**
 * @public
 * <p>This input determines which step to describe.</p>
 */
export interface DescribeStepInput {
  /**
   * @public
   * <p>The identifier of the cluster with steps to describe.</p>
   */
  ClusterId: string | undefined;

  /**
   * @public
   * <p>The identifier of the step to describe.</p>
   */
  StepId: string | undefined;
}

/**
 * @public
 * <p>A cluster step consisting of a JAR file whose main function will be executed. The main
 *          function submits a job for Hadoop to execute and waits for the job to finish or
 *          fail.</p>
 */
export interface HadoopStepConfig {
  /**
   * @public
   * <p>The path to the JAR file that runs during the step.</p>
   */
  Jar?: string;

  /**
   * @public
   * <p>The list of Java properties that are set when the step runs. You can use these
   *          properties to pass key-value pairs to your main function.</p>
   */
  Properties?: Record<string, string>;

  /**
   * @public
   * <p>The name of the main class in the specified Java file. If not specified, the JAR file
   *          should specify a main class in its manifest file.</p>
   */
  MainClass?: string;

  /**
   * @public
   * <p>The list of command line arguments to pass to the JAR file's main function for
   *          execution.</p>
   */
  Args?: string[];
}

/**
 * @public
 * <p>The details of the step failure. The service attempts to detect the root cause for many
 *          common failures.</p>
 */
export interface FailureDetails {
  /**
   * @public
   * <p>The reason for the step failure. In the case where the service cannot successfully
   *          determine the root cause of the failure, it returns "Unknown Error" as a reason.</p>
   */
  Reason?: string;

  /**
   * @public
   * <p>The descriptive message including the error the Amazon EMR service has
   *          identified as the cause of step failure. This is text from an error log that describes the
   *          root cause of the failure.</p>
   */
  Message?: string;

  /**
   * @public
   * <p>The path to the log file where the step failure root cause was originally
   *          recorded.</p>
   */
  LogFile?: string;
}

/**
 * @public
 * @enum
 */
export const StepState = {
  CANCELLED: "CANCELLED",
  CANCEL_PENDING: "CANCEL_PENDING",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  INTERRUPTED: "INTERRUPTED",
  PENDING: "PENDING",
  RUNNING: "RUNNING",
} as const;

/**
 * @public
 */
export type StepState = (typeof StepState)[keyof typeof StepState];

/**
 * @public
 * @enum
 */
export const StepStateChangeReasonCode = {
  NONE: "NONE",
} as const;

/**
 * @public
 */
export type StepStateChangeReasonCode = (typeof StepStateChangeReasonCode)[keyof typeof StepStateChangeReasonCode];

/**
 * @public
 * <p>The details of the step state change reason.</p>
 */
export interface StepStateChangeReason {
  /**
   * @public
   * <p>The programmable code for the state change reason. Note: Currently, the service provides
   *          no code for the state change.</p>
   */
  Code?: StepStateChangeReasonCode;

  /**
   * @public
   * <p>The descriptive message for the state change reason.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>The timeline of the cluster step lifecycle.</p>
 */
export interface StepTimeline {
  /**
   * @public
   * <p>The date and time when the cluster step was created.</p>
   */
  CreationDateTime?: Date;

  /**
   * @public
   * <p>The date and time when the cluster step execution started.</p>
   */
  StartDateTime?: Date;

  /**
   * @public
   * <p>The date and time when the cluster step execution completed or failed.</p>
   */
  EndDateTime?: Date;
}

/**
 * @public
 * <p>The execution status details of the cluster step.</p>
 */
export interface StepStatus {
  /**
   * @public
   * <p>The execution state of the cluster step.</p>
   */
  State?: StepState;

  /**
   * @public
   * <p>The reason for the step execution status change.</p>
   */
  StateChangeReason?: StepStateChangeReason;

  /**
   * @public
   * <p>The details for the step failure including reason, message, and log file path where the
   *          root cause was identified.</p>
   */
  FailureDetails?: FailureDetails;

  /**
   * @public
   * <p>The timeline of the cluster step status over time.</p>
   */
  Timeline?: StepTimeline;
}

/**
 * @public
 * <p>This represents a step in a cluster.</p>
 */
export interface Step {
  /**
   * @public
   * <p>The identifier of the cluster step.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The name of the cluster step.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Hadoop job configuration of the cluster step.</p>
   */
  Config?: HadoopStepConfig;

  /**
   * @public
   * <p>The action to take when the cluster step fails. Possible values are
   *             <code>TERMINATE_CLUSTER</code>, <code>CANCEL_AND_WAIT</code>, and <code>CONTINUE</code>.
   *             <code>TERMINATE_JOB_FLOW</code> is provided for backward compatibility. We recommend
   *          using <code>TERMINATE_CLUSTER</code> instead.</p>
   *          <p>If a cluster's <code>StepConcurrencyLevel</code> is greater than <code>1</code>, do not
   *          use <code>AddJobFlowSteps</code> to submit a step with this parameter set to
   *             <code>CANCEL_AND_WAIT</code> or <code>TERMINATE_CLUSTER</code>. The step is not
   *          submitted and the action fails with a message that the <code>ActionOnFailure</code> setting
   *          is not valid.</p>
   *          <p>If you change a cluster's <code>StepConcurrencyLevel</code> to be greater than 1 while a
   *          step is running, the <code>ActionOnFailure</code> parameter may not behave as you expect.
   *          In this case, for a step that fails with this parameter set to
   *          <code>CANCEL_AND_WAIT</code>, pending steps and the running step are not canceled; for a
   *          step that fails with this parameter set to <code>TERMINATE_CLUSTER</code>, the cluster does
   *          not terminate.</p>
   */
  ActionOnFailure?: ActionOnFailure;

  /**
   * @public
   * <p>The current execution status details of the cluster step.</p>
   */
  Status?: StepStatus;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the runtime role for a step on the cluster. The
   *          runtime role can be a cross-account IAM role. The runtime role ARN is a
   *          combination of account ID, role name, and role type using the following format:
   *             <code>arn:partition:service:region:account:resource</code>. </p>
   *          <p>For example, <code>arn:aws:IAM::1234567890:role/ReadOnly</code> is a correctly formatted
   *          runtime role ARN.</p>
   */
  ExecutionRoleArn?: string;
}

/**
 * @public
 * <p>This output contains the description of the cluster step.</p>
 */
export interface DescribeStepOutput {
  /**
   * @public
   * <p>The step details for the requested step identifier.</p>
   */
  Step?: Step;
}

/**
 * @public
 */
export interface DescribeStudioInput {
  /**
   * @public
   * <p>The Amazon EMR Studio ID.</p>
   */
  StudioId: string | undefined;
}

/**
 * @public
 * <p>Details for an Amazon EMR Studio including ID, creation time, name, and so
 *          on.</p>
 */
export interface Studio {
  /**
   * @public
   * <p>The ID of the Amazon EMR Studio.</p>
   */
  StudioId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the Amazon EMR Studio.</p>
   */
  StudioArn?: string;

  /**
   * @public
   * <p>The name of the Amazon EMR Studio.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The detailed description of the Amazon EMR Studio.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>Specifies whether the Amazon EMR Studio authenticates users with IAM or IAM Identity Center.</p>
   */
  AuthMode?: AuthMode;

  /**
   * @public
   * <p>The ID of the VPC associated with the Amazon EMR Studio.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The list of IDs of the subnets associated with the Amazon EMR Studio.</p>
   */
  SubnetIds?: string[];

  /**
   * @public
   * <p>The name of the IAM role assumed by the Amazon EMR Studio.</p>
   */
  ServiceRole?: string;

  /**
   * @public
   * <p>The name of the IAM role assumed by users logged in to the Amazon EMR Studio. A Studio only requires a <code>UserRole</code> when you use IAM authentication.</p>
   */
  UserRole?: string;

  /**
   * @public
   * <p>The ID of the Workspace security group associated with the Amazon EMR Studio.
   *          The Workspace security group allows outbound network traffic to resources in the Engine
   *          security group and to the internet.</p>
   */
  WorkspaceSecurityGroupId?: string;

  /**
   * @public
   * <p>The ID of the Engine security group associated with the Amazon EMR Studio. The
   *          Engine security group allows inbound network traffic from resources in the Workspace
   *          security group.</p>
   */
  EngineSecurityGroupId?: string;

  /**
   * @public
   * <p>The unique access URL of the Amazon EMR Studio.</p>
   */
  Url?: string;

  /**
   * @public
   * <p>The time the Amazon EMR Studio was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The Amazon S3 location to back up Amazon EMR Studio Workspaces and
   *          notebook files.</p>
   */
  DefaultS3Location?: string;

  /**
   * @public
   * <p>Your identity provider's authentication endpoint. Amazon EMR Studio redirects
   *          federated users to this endpoint for authentication when logging in to a Studio with the
   *          Studio URL.</p>
   */
  IdpAuthUrl?: string;

  /**
   * @public
   * <p>The name of your identity provider's <code>RelayState</code> parameter.</p>
   */
  IdpRelayStateParameterName?: string;

  /**
   * @public
   * <p>A list of tags associated with the Amazon EMR Studio.</p>
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface DescribeStudioOutput {
  /**
   * @public
   * <p>The Amazon EMR Studio details.</p>
   */
  Studio?: Studio;
}

/**
 * @public
 * <p>Configuration of requested EBS block device associated with the instance group.</p>
 */
export interface EbsBlockDevice {
  /**
   * @public
   * <p>EBS volume specifications such as volume type, IOPS, size (GiB) and throughput (MiB/s)
   *          that are requested for the EBS volume attached to an Amazon EC2 instance in the
   *          cluster.</p>
   */
  VolumeSpecification?: VolumeSpecification;

  /**
   * @public
   * <p>The device name that is exposed to the instance, such as /dev/sdh.</p>
   */
  Device?: string;
}

/**
 * @public
 * <p>EBS block device that's attached to an Amazon EC2 instance.</p>
 */
export interface EbsVolume {
  /**
   * @public
   * <p>The device name that is exposed to the instance, such as /dev/sdh.</p>
   */
  Device?: string;

  /**
   * @public
   * <p>The volume identifier of the EBS volume.</p>
   */
  VolumeId?: string;
}

/**
 * @public
 */
export interface GetAutoTerminationPolicyInput {
  /**
   * @public
   * <p>Specifies the ID of the Amazon EMR cluster for which the auto-termination policy
   *          will be fetched.</p>
   */
  ClusterId: string | undefined;
}

/**
 * @public
 */
export interface GetAutoTerminationPolicyOutput {
  /**
   * @public
   * <p>Specifies the auto-termination policy that is attached to an Amazon EMR cluster.
   *       </p>
   */
  AutoTerminationPolicy?: AutoTerminationPolicy;
}

/**
 * @public
 */
export interface GetBlockPublicAccessConfigurationInput {}

/**
 * @public
 */
export interface GetClusterSessionCredentialsInput {
  /**
   * @public
   * <p>The unique identifier of the cluster.</p>
   */
  ClusterId: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the runtime role for interactive workload submission
   *          on the cluster. The runtime role can be a cross-account IAM role. The
   *          runtime role ARN is a combination of account ID, role name, and role type using the
   *          following format: <code>arn:partition:service:region:account:resource</code>.</p>
   */
  ExecutionRoleArn: string | undefined;
}

/**
 * @public
 */
export interface GetClusterSessionCredentialsOutput {
  /**
   * @public
   * <p>The credentials that you can use to connect to cluster endpoints that support username
   *          and password authentication.</p>
   */
  Credentials?: Credentials;

  /**
   * @public
   * <p>The time when the credentials that are returned by the
   *             <code>GetClusterSessionCredentials</code> API expire.</p>
   */
  ExpiresAt?: Date;
}

/**
 * @public
 */
export interface GetManagedScalingPolicyInput {
  /**
   * @public
   * <p>Specifies the ID of the cluster for which the managed scaling policy will be fetched.
   *       </p>
   */
  ClusterId: string | undefined;
}

/**
 * @public
 * <p> Managed scaling policy for an Amazon EMR cluster. The policy specifies the
 *          limits for resources that can be added or terminated from a cluster. The policy only
 *          applies to the core and task nodes. The master node cannot be scaled after initial
 *          configuration. </p>
 */
export interface ManagedScalingPolicy {
  /**
   * @public
   * <p>The Amazon EC2 unit limits for a managed scaling policy. The managed scaling
   *          activity of a cluster is not allowed to go above or below these limits. The limit only
   *          applies to the core and task nodes. The master node cannot be scaled after initial
   *          configuration.</p>
   */
  ComputeLimits?: ComputeLimits;
}

/**
 * @public
 */
export interface GetManagedScalingPolicyOutput {
  /**
   * @public
   * <p>Specifies the managed scaling policy that is attached to an Amazon EMR cluster.
   *       </p>
   */
  ManagedScalingPolicy?: ManagedScalingPolicy;
}

/**
 * @public
 */
export interface GetStudioSessionMappingInput {
  /**
   * @public
   * <p>The ID of the Amazon EMR Studio.</p>
   */
  StudioId: string | undefined;

  /**
   * @public
   * <p>The globally unique identifier (GUID) of the user or group. For more information, see
   *             <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserId">UserId</a> and <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-GroupId">GroupId</a> in the <i>IAM Identity Center Identity Store API
   *             Reference</i>. Either <code>IdentityName</code> or <code>IdentityId</code> must
   *          be specified.</p>
   */
  IdentityId?: string;

  /**
   * @public
   * <p>The name of the user or group to fetch. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserName">UserName</a> and <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-DisplayName">DisplayName</a> in the <i>IAM Identity Center Identity Store API
   *             Reference</i>. Either <code>IdentityName</code> or <code>IdentityId</code> must
   *          be specified.</p>
   */
  IdentityName?: string;

  /**
   * @public
   * <p>Specifies whether the identity to fetch is a user or a group.</p>
   */
  IdentityType: IdentityType | undefined;
}

/**
 * @public
 * <p>Details for an Amazon EMR Studio session mapping including creation time, user
 *          or group ID, Studio ID, and so on.</p>
 */
export interface SessionMappingDetail {
  /**
   * @public
   * <p>The ID of the Amazon EMR Studio.</p>
   */
  StudioId?: string;

  /**
   * @public
   * <p>The globally unique identifier (GUID) of the user or group.</p>
   */
  IdentityId?: string;

  /**
   * @public
   * <p>The name of the user or group. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserName">UserName</a> and <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-DisplayName">DisplayName</a> in the <i>IAM Identity Center Identity Store API
   *             Reference</i>.</p>
   */
  IdentityName?: string;

  /**
   * @public
   * <p>Specifies whether the identity mapped to the Amazon EMR Studio is a user or a
   *          group.</p>
   */
  IdentityType?: IdentityType;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the session policy associated with the user or
   *          group.</p>
   */
  SessionPolicyArn?: string;

  /**
   * @public
   * <p>The time the session mapping was created.</p>
   */
  CreationTime?: Date;

  /**
   * @public
   * <p>The time the session mapping was last modified.</p>
   */
  LastModifiedTime?: Date;
}

/**
 * @public
 */
export interface GetStudioSessionMappingOutput {
  /**
   * @public
   * <p>The session mapping details for the specified Amazon EMR Studio and identity,
   *          including session policy ARN and creation time.</p>
   */
  SessionMapping?: SessionMappingDetail;
}

/**
 * @public
 * <p>This input determines which bootstrap actions to retrieve.</p>
 */
export interface ListBootstrapActionsInput {
  /**
   * @public
   * <p>The cluster identifier for the bootstrap actions to list.</p>
   */
  ClusterId: string | undefined;

  /**
   * @public
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>This output contains the bootstrap actions detail.</p>
 */
export interface ListBootstrapActionsOutput {
  /**
   * @public
   * <p>The bootstrap actions associated with the cluster.</p>
   */
  BootstrapActions?: Command[];

  /**
   * @public
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>This input determines how the ListClusters action filters the list of clusters that it
 *          returns.</p>
 */
export interface ListClustersInput {
  /**
   * @public
   * <p>The creation date and time beginning value filter for listing clusters.</p>
   */
  CreatedAfter?: Date;

  /**
   * @public
   * <p>The creation date and time end value filter for listing clusters.</p>
   */
  CreatedBefore?: Date;

  /**
   * @public
   * <p>The cluster state filters to apply when listing clusters. Clusters that change state
   *          while this action runs may be not be returned as expected in the list of clusters.</p>
   */
  ClusterStates?: ClusterState[];

  /**
   * @public
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>This contains a ClusterSummaryList with the cluster details; for example, the cluster
 *          IDs, names, and status.</p>
 */
export interface ListClustersOutput {
  /**
   * @public
   * <p>The list of clusters for the account based on the given filters.</p>
   */
  Clusters?: ClusterSummary[];

  /**
   * @public
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

/**
 * @public
 */
export interface ListInstanceFleetsInput {
  /**
   * @public
   * <p>The unique identifier of the cluster.</p>
   */
  ClusterId: string | undefined;

  /**
   * @public
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

/**
 * @public
 * @enum
 */
export const InstanceFleetState = {
  BOOTSTRAPPING: "BOOTSTRAPPING",
  PROVISIONING: "PROVISIONING",
  RESIZING: "RESIZING",
  RUNNING: "RUNNING",
  SUSPENDED: "SUSPENDED",
  TERMINATED: "TERMINATED",
  TERMINATING: "TERMINATING",
} as const;

/**
 * @public
 */
export type InstanceFleetState = (typeof InstanceFleetState)[keyof typeof InstanceFleetState];

/**
 * @public
 * @enum
 */
export const InstanceFleetStateChangeReasonCode = {
  CLUSTER_TERMINATED: "CLUSTER_TERMINATED",
  INSTANCE_FAILURE: "INSTANCE_FAILURE",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;

/**
 * @public
 */
export type InstanceFleetStateChangeReasonCode =
  (typeof InstanceFleetStateChangeReasonCode)[keyof typeof InstanceFleetStateChangeReasonCode];

/**
 * @public
 * <p>Provides status change reason details for the instance fleet.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR releases
 *             4.8.0 and later, excluding 5.0.x versions.</p>
 *          </note>
 */
export interface InstanceFleetStateChangeReason {
  /**
   * @public
   * <p>A code corresponding to the reason the state change occurred.</p>
   */
  Code?: InstanceFleetStateChangeReasonCode;

  /**
   * @public
   * <p>An explanatory message.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>Provides historical timestamps for the instance fleet, including the time of creation,
 *          the time it became ready to run jobs, and the time of termination.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR releases
 *             4.8.0 and later, excluding 5.0.x versions.</p>
 *          </note>
 */
export interface InstanceFleetTimeline {
  /**
   * @public
   * <p>The time and date the instance fleet was created.</p>
   */
  CreationDateTime?: Date;

  /**
   * @public
   * <p>The time and date the instance fleet was ready to run jobs.</p>
   */
  ReadyDateTime?: Date;

  /**
   * @public
   * <p>The time and date the instance fleet terminated.</p>
   */
  EndDateTime?: Date;
}

/**
 * @public
 * <p>The status of the instance fleet.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR releases
 *             4.8.0 and later, excluding 5.0.x versions.</p>
 *          </note>
 */
export interface InstanceFleetStatus {
  /**
   * @public
   * <p>A code representing the instance fleet status.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PROVISIONING</code>—The instance fleet is provisioning Amazon EC2
   *                resources and is not yet ready to run jobs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BOOTSTRAPPING</code>—Amazon EC2 instances and other resources have
   *                been provisioned and the bootstrap actions specified for the instances are
   *                underway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code>—Amazon EC2 instances and other resources are running.
   *                They are either executing jobs or waiting to execute jobs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESIZING</code>—A resize operation is underway. Amazon EC2 instances
   *                are either being added or removed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUSPENDED</code>—A resize operation could not complete. Existing Amazon EC2 instances are running, but instances can't be added or removed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TERMINATING</code>—The instance fleet is terminating Amazon EC2
   *                instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TERMINATED</code>—The instance fleet is no longer active, and all Amazon EC2 instances have been terminated.</p>
   *             </li>
   *          </ul>
   */
  State?: InstanceFleetState;

  /**
   * @public
   * <p>Provides status change reason details for the instance fleet.</p>
   */
  StateChangeReason?: InstanceFleetStateChangeReason;

  /**
   * @public
   * <p>Provides historical timestamps for the instance fleet, including the time of creation,
   *          the time it became ready to run jobs, and the time of termination.</p>
   */
  Timeline?: InstanceFleetTimeline;
}

/**
 * @public
 * <p>This input determines which instance groups to retrieve.</p>
 */
export interface ListInstanceGroupsInput {
  /**
   * @public
   * <p>The identifier of the cluster for which to list the instance groups.</p>
   */
  ClusterId: string | undefined;

  /**
   * @public
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

/**
 * @public
 * @enum
 */
export const InstanceGroupType = {
  CORE: "CORE",
  MASTER: "MASTER",
  TASK: "TASK",
} as const;

/**
 * @public
 */
export type InstanceGroupType = (typeof InstanceGroupType)[keyof typeof InstanceGroupType];

/**
 * @public
 * <p>Custom policy for requesting termination protection or termination of specific instances
 *          when shrinking an instance group.</p>
 */
export interface InstanceResizePolicy {
  /**
   * @public
   * <p>Specific list of instances to be terminated when shrinking an instance group.</p>
   */
  InstancesToTerminate?: string[];

  /**
   * @public
   * <p>Specific list of instances to be protected when shrinking an instance group.</p>
   */
  InstancesToProtect?: string[];

  /**
   * @public
   * <p>Decommissioning timeout override for the specific list of instances to be
   *          terminated.</p>
   */
  InstanceTerminationTimeout?: number;
}

/**
 * @public
 * <p>Policy for customizing shrink operations. Allows configuration of decommissioning
 *          timeout and targeted instance shrinking.</p>
 */
export interface ShrinkPolicy {
  /**
   * @public
   * <p>The desired timeout for decommissioning an instance. Overrides the default YARN
   *          decommissioning timeout.</p>
   */
  DecommissionTimeout?: number;

  /**
   * @public
   * <p>Custom policy for requesting termination protection or termination of specific instances
   *          when shrinking an instance group.</p>
   */
  InstanceResizePolicy?: InstanceResizePolicy;
}

/**
 * @public
 * @enum
 */
export const InstanceGroupStateChangeReasonCode = {
  CLUSTER_TERMINATED: "CLUSTER_TERMINATED",
  INSTANCE_FAILURE: "INSTANCE_FAILURE",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;

/**
 * @public
 */
export type InstanceGroupStateChangeReasonCode =
  (typeof InstanceGroupStateChangeReasonCode)[keyof typeof InstanceGroupStateChangeReasonCode];

/**
 * @public
 * <p>The status change reason details for the instance group.</p>
 */
export interface InstanceGroupStateChangeReason {
  /**
   * @public
   * <p>The programmable code for the state change reason.</p>
   */
  Code?: InstanceGroupStateChangeReasonCode;

  /**
   * @public
   * <p>The status change reason description.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>The timeline of the instance group lifecycle.</p>
 */
export interface InstanceGroupTimeline {
  /**
   * @public
   * <p>The creation date and time of the instance group.</p>
   */
  CreationDateTime?: Date;

  /**
   * @public
   * <p>The date and time when the instance group became ready to perform tasks.</p>
   */
  ReadyDateTime?: Date;

  /**
   * @public
   * <p>The date and time when the instance group terminated.</p>
   */
  EndDateTime?: Date;
}

/**
 * @public
 * <p>The details of the instance group status.</p>
 */
export interface InstanceGroupStatus {
  /**
   * @public
   * <p>The current state of the instance group.</p>
   */
  State?: InstanceGroupState;

  /**
   * @public
   * <p>The status change reason details for the instance group.</p>
   */
  StateChangeReason?: InstanceGroupStateChangeReason;

  /**
   * @public
   * <p>The timeline of the instance group status over time.</p>
   */
  Timeline?: InstanceGroupTimeline;
}

/**
 * @public
 * @enum
 */
export const InstanceState = {
  AWAITING_FULFILLMENT: "AWAITING_FULFILLMENT",
  BOOTSTRAPPING: "BOOTSTRAPPING",
  PROVISIONING: "PROVISIONING",
  RUNNING: "RUNNING",
  TERMINATED: "TERMINATED",
} as const;

/**
 * @public
 */
export type InstanceState = (typeof InstanceState)[keyof typeof InstanceState];

/**
 * @public
 * <p>This input determines which instances to list.</p>
 */
export interface ListInstancesInput {
  /**
   * @public
   * <p>The identifier of the cluster for which to list the instances.</p>
   */
  ClusterId: string | undefined;

  /**
   * @public
   * <p>The identifier of the instance group for which to list the instances.</p>
   */
  InstanceGroupId?: string;

  /**
   * @public
   * <p>The type of instance group for which to list the instances.</p>
   */
  InstanceGroupTypes?: InstanceGroupType[];

  /**
   * @public
   * <p>The unique identifier of the instance fleet.</p>
   */
  InstanceFleetId?: string;

  /**
   * @public
   * <p>The node type of the instance fleet. For example MASTER, CORE, or TASK.</p>
   */
  InstanceFleetType?: InstanceFleetType;

  /**
   * @public
   * <p>A list of instance states that will filter the instances returned with this
   *          request.</p>
   */
  InstanceStates?: InstanceState[];

  /**
   * @public
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

/**
 * @public
 * @enum
 */
export const InstanceStateChangeReasonCode = {
  BOOTSTRAP_FAILURE: "BOOTSTRAP_FAILURE",
  CLUSTER_TERMINATED: "CLUSTER_TERMINATED",
  INSTANCE_FAILURE: "INSTANCE_FAILURE",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;

/**
 * @public
 */
export type InstanceStateChangeReasonCode =
  (typeof InstanceStateChangeReasonCode)[keyof typeof InstanceStateChangeReasonCode];

/**
 * @public
 * <p>The details of the status change reason for the instance.</p>
 */
export interface InstanceStateChangeReason {
  /**
   * @public
   * <p>The programmable code for the state change reason.</p>
   */
  Code?: InstanceStateChangeReasonCode;

  /**
   * @public
   * <p>The status change reason description.</p>
   */
  Message?: string;
}

/**
 * @public
 * <p>The timeline of the instance lifecycle.</p>
 */
export interface InstanceTimeline {
  /**
   * @public
   * <p>The creation date and time of the instance.</p>
   */
  CreationDateTime?: Date;

  /**
   * @public
   * <p>The date and time when the instance was ready to perform tasks.</p>
   */
  ReadyDateTime?: Date;

  /**
   * @public
   * <p>The date and time when the instance was terminated.</p>
   */
  EndDateTime?: Date;
}

/**
 * @public
 * <p>The instance status details.</p>
 */
export interface InstanceStatus {
  /**
   * @public
   * <p>The current state of the instance.</p>
   */
  State?: InstanceState;

  /**
   * @public
   * <p>The details of the status change reason for the instance.</p>
   */
  StateChangeReason?: InstanceStateChangeReason;

  /**
   * @public
   * <p>The timeline of the instance status over time.</p>
   */
  Timeline?: InstanceTimeline;
}

/**
 * @public
 * <p>Represents an Amazon EC2 instance provisioned as part of cluster.</p>
 */
export interface Instance {
  /**
   * @public
   * <p>The unique identifier for the instance in Amazon EMR.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The unique identifier of the instance in Amazon EC2.</p>
   */
  Ec2InstanceId?: string;

  /**
   * @public
   * <p>The public DNS name of the instance.</p>
   */
  PublicDnsName?: string;

  /**
   * @public
   * <p>The public IP address of the instance.</p>
   */
  PublicIpAddress?: string;

  /**
   * @public
   * <p>The private DNS name of the instance.</p>
   */
  PrivateDnsName?: string;

  /**
   * @public
   * <p>The private IP address of the instance.</p>
   */
  PrivateIpAddress?: string;

  /**
   * @public
   * <p>The current status of the instance.</p>
   */
  Status?: InstanceStatus;

  /**
   * @public
   * <p>The identifier of the instance group to which this instance belongs.</p>
   */
  InstanceGroupId?: string;

  /**
   * @public
   * <p>The unique identifier of the instance fleet to which an Amazon EC2 instance
   *          belongs.</p>
   */
  InstanceFleetId?: string;

  /**
   * @public
   * <p>The instance purchasing option. Valid values are <code>ON_DEMAND</code> or
   *             <code>SPOT</code>. </p>
   */
  Market?: MarketType;

  /**
   * @public
   * <p>The Amazon EC2 instance type, for example <code>m3.xlarge</code>.</p>
   */
  InstanceType?: string;

  /**
   * @public
   * <p>The list of Amazon EBS volumes that are attached to this instance.</p>
   */
  EbsVolumes?: EbsVolume[];
}

/**
 * @public
 * <p>This output contains the list of instances.</p>
 */
export interface ListInstancesOutput {
  /**
   * @public
   * <p>The list of instances for the cluster and given filters.</p>
   */
  Instances?: Instance[];

  /**
   * @public
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

/**
 * @public
 */
export interface ListNotebookExecutionsInput {
  /**
   * @public
   * <p>The unique ID of the editor associated with the notebook execution.</p>
   */
  EditorId?: string;

  /**
   * @public
   * <p>The status filter for listing notebook executions.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>START_PENDING</code> indicates that the cluster has received the execution
   *                request but execution has not begun.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STARTING</code> indicates that the execution is starting on the
   *                cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code> indicates that the execution is being processed by the
   *                cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FINISHING</code> indicates that execution processing is in the final
   *                stages.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FINISHED</code> indicates that the execution has completed without
   *                error.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILING</code> indicates that the execution is failing and will not finish
   *                successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> indicates that the execution failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOP_PENDING</code> indicates that the cluster has received a
   *                   <code>StopNotebookExecution</code> request and the stop is pending.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPING</code> indicates that the cluster is in the process of stopping the
   *                execution as a result of a <code>StopNotebookExecution</code> request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPED</code> indicates that the execution stopped because of a
   *                   <code>StopNotebookExecution</code> request.</p>
   *             </li>
   *          </ul>
   */
  Status?: NotebookExecutionStatus;

  /**
   * @public
   * <p>The beginning of time range filter for listing notebook executions. The default is the
   *          timestamp of 30 days ago.</p>
   */
  From?: Date;

  /**
   * @public
   * <p>The end of time range filter for listing notebook executions. The default is the current
   *          timestamp.</p>
   */
  To?: Date;

  /**
   * @public
   * <p>The pagination token, returned by a previous <code>ListNotebookExecutions</code> call,
   *          that indicates the start of the list for this <code>ListNotebookExecutions</code>
   *          call.</p>
   */
  Marker?: string;

  /**
   * @public
   * <p>The unique ID of the execution engine.</p>
   */
  ExecutionEngineId?: string;
}

/**
 * @public
 * <p>Details for a notebook execution. The details include information such as the unique ID
 *          and status of the notebook execution.</p>
 */
export interface NotebookExecutionSummary {
  /**
   * @public
   * <p>The unique identifier of the notebook execution.</p>
   */
  NotebookExecutionId?: string;

  /**
   * @public
   * <p>The unique identifier of the editor associated with the notebook execution.</p>
   */
  EditorId?: string;

  /**
   * @public
   * <p>The name of the notebook execution.</p>
   */
  NotebookExecutionName?: string;

  /**
   * @public
   * <p>The status of the notebook execution.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>START_PENDING</code> indicates that the cluster has received the execution
   *                request but execution has not begun.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STARTING</code> indicates that the execution is starting on the
   *                cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code> indicates that the execution is being processed by the
   *                cluster.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FINISHING</code> indicates that execution processing is in the final
   *                stages.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FINISHED</code> indicates that the execution has completed without
   *                error.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILING</code> indicates that the execution is failing and will not finish
   *                successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>FAILED</code> indicates that the execution failed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOP_PENDING</code> indicates that the cluster has received a
   *                   <code>StopNotebookExecution</code> request and the stop is pending.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPING</code> indicates that the cluster is in the process of stopping the
   *                execution as a result of a <code>StopNotebookExecution</code> request.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>STOPPED</code> indicates that the execution stopped because of a
   *                   <code>StopNotebookExecution</code> request.</p>
   *             </li>
   *          </ul>
   */
  Status?: NotebookExecutionStatus;

  /**
   * @public
   * <p>The timestamp when notebook execution started.</p>
   */
  StartTime?: Date;

  /**
   * @public
   * <p>The timestamp when notebook execution started.</p>
   */
  EndTime?: Date;

  /**
   * @public
   * <p>The Amazon S3 location that stores the notebook execution input.</p>
   */
  NotebookS3Location?: NotebookS3LocationForOutput;

  /**
   * @public
   * <p>The unique ID of the execution engine for the notebook execution.</p>
   */
  ExecutionEngineId?: string;
}

/**
 * @public
 */
export interface ListNotebookExecutionsOutput {
  /**
   * @public
   * <p>A list of notebook executions.</p>
   */
  NotebookExecutions?: NotebookExecutionSummary[];

  /**
   * @public
   * <p>A pagination token that a subsequent <code>ListNotebookExecutions</code> can use to
   *          determine the next set of results to retrieve.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>The release label filters by application or version prefix.</p>
 */
export interface ReleaseLabelFilter {
  /**
   * @public
   * <p>Optional release label version prefix filter. For example, <code>emr-5</code>.</p>
   */
  Prefix?: string;

  /**
   * @public
   * <p>Optional release label application filter. For example, <code>spark@2.1.0</code>.</p>
   */
  Application?: string;
}

/**
 * @public
 */
export interface ListReleaseLabelsInput {
  /**
   * @public
   * <p>Filters the results of the request. <code>Prefix</code> specifies the prefix of release
   *          labels to return. <code>Application</code> specifies the application (with/without version)
   *          of release labels to return.</p>
   */
  Filters?: ReleaseLabelFilter;

  /**
   * @public
   * <p>Specifies the next page of results. If <code>NextToken</code> is not specified, which is
   *          usually the case for the first request of ListReleaseLabels, the first page of results are
   *          determined by other filtering parameters or by the latest version. The
   *             <code>ListReleaseLabels</code> request fails if the identity (Amazon Web Services account
   *          ID) and all filtering parameters are different from the original request, or if the
   *             <code>NextToken</code> is expired or tampered with.</p>
   */
  NextToken?: string;

  /**
   * @public
   * <p>Defines the maximum number of release labels to return in a single response. The default
   *          is <code>100</code>.</p>
   */
  MaxResults?: number;
}

/**
 * @public
 */
export interface ListReleaseLabelsOutput {
  /**
   * @public
   * <p>The returned release labels.</p>
   */
  ReleaseLabels?: string[];

  /**
   * @public
   * <p>Used to paginate the next page of results if specified in the next
   *             <code>ListReleaseLabels</code> request.</p>
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListSecurityConfigurationsInput {
  /**
   * @public
   * <p>The pagination token that indicates the set of results to retrieve.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>The creation date and time, and name, of a security configuration.</p>
 */
export interface SecurityConfigurationSummary {
  /**
   * @public
   * <p>The name of the security configuration.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The date and time the security configuration was created.</p>
   */
  CreationDateTime?: Date;
}

/**
 * @public
 */
export interface ListSecurityConfigurationsOutput {
  /**
   * @public
   * <p>The creation date and time, and name, of each security configuration.</p>
   */
  SecurityConfigurations?: SecurityConfigurationSummary[];

  /**
   * @public
   * <p>A pagination token that indicates the next set of results to retrieve. Include the
   *          marker in the next ListSecurityConfiguration call to retrieve the next page of results, if
   *          required.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>This input determines which steps to list.</p>
 */
export interface ListStepsInput {
  /**
   * @public
   * <p>The identifier of the cluster for which to list the steps.</p>
   */
  ClusterId: string | undefined;

  /**
   * @public
   * <p>The filter to limit the step list based on certain states.</p>
   */
  StepStates?: StepState[];

  /**
   * @public
   * <p>The filter to limit the step list based on the identifier of the steps. You can specify
   *          a maximum of ten Step IDs. The character constraint applies to the overall length of the
   *          array.</p>
   */
  StepIds?: string[];

  /**
   * @public
   * <p>The maximum number of steps that a single <code>ListSteps</code> action returns is 50.
   *          To return a longer list of steps, use multiple <code>ListSteps</code> actions along with
   *          the <code>Marker</code> parameter, which is a pagination token that indicates the next set
   *          of results to retrieve.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>The summary of the cluster step.</p>
 */
export interface StepSummary {
  /**
   * @public
   * <p>The identifier of the cluster step.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The name of the cluster step.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The Hadoop job configuration of the cluster step.</p>
   */
  Config?: HadoopStepConfig;

  /**
   * @public
   * <p>The action to take when the cluster step fails. Possible values are TERMINATE_CLUSTER,
   *          CANCEL_AND_WAIT, and CONTINUE. TERMINATE_JOB_FLOW is available for backward
   *          compatibility.</p>
   */
  ActionOnFailure?: ActionOnFailure;

  /**
   * @public
   * <p>The current execution status details of the cluster step.</p>
   */
  Status?: StepStatus;
}

/**
 * @public
 * <p>This output contains the list of steps returned in reverse order. This means that the
 *          last step is the first element in the list.</p>
 */
export interface ListStepsOutput {
  /**
   * @public
   * <p>The filtered list of steps for the cluster.</p>
   */
  Steps?: StepSummary[];

  /**
   * @public
   * <p>The maximum number of steps that a single <code>ListSteps</code> action returns is 50.
   *          To return a longer list of steps, use multiple <code>ListSteps</code> actions along with
   *          the <code>Marker</code> parameter, which is a pagination token that indicates the next set
   *          of results to retrieve.</p>
   */
  Marker?: string;
}

/**
 * @public
 */
export interface ListStudiosInput {
  /**
   * @public
   * <p>The pagination token that indicates the set of results to retrieve.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>Details for an Amazon EMR Studio, including ID, Name, VPC, and Description. The
 *          details do not include subnets, IAM roles, security groups, or tags
 *          associated with the Studio.</p>
 */
export interface StudioSummary {
  /**
   * @public
   * <p>The ID of the Amazon EMR Studio.</p>
   */
  StudioId?: string;

  /**
   * @public
   * <p>The name of the Amazon EMR Studio.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The ID of the Virtual Private Cloud (Amazon VPC) associated with the Amazon EMR Studio.</p>
   */
  VpcId?: string;

  /**
   * @public
   * <p>The detailed description of the Amazon EMR Studio.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The unique access URL of the Amazon EMR Studio.</p>
   */
  Url?: string;

  /**
   * @public
   * <p>Specifies whether the Studio authenticates users using IAM or IAM Identity Center.</p>
   */
  AuthMode?: AuthMode;

  /**
   * @public
   * <p>The time when the Amazon EMR Studio was created.</p>
   */
  CreationTime?: Date;
}

/**
 * @public
 */
export interface ListStudiosOutput {
  /**
   * @public
   * <p>The list of Studio summary objects.</p>
   */
  Studios?: StudioSummary[];

  /**
   * @public
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

/**
 * @public
 */
export interface ListStudioSessionMappingsInput {
  /**
   * @public
   * <p>The ID of the Amazon EMR Studio.</p>
   */
  StudioId?: string;

  /**
   * @public
   * <p>Specifies whether to return session mappings for users or groups. If not specified, the
   *          results include session mapping details for both users and groups.</p>
   */
  IdentityType?: IdentityType;

  /**
   * @public
   * <p>The pagination token that indicates the set of results to retrieve.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>Details for an Amazon EMR Studio session mapping. The details do not include the
 *          time the session mapping was last modified.</p>
 */
export interface SessionMappingSummary {
  /**
   * @public
   * <p>The ID of the Amazon EMR Studio.</p>
   */
  StudioId?: string;

  /**
   * @public
   * <p>The globally unique identifier (GUID) of the user or group from the IAM Identity Center
   *          Identity Store.</p>
   */
  IdentityId?: string;

  /**
   * @public
   * <p>The name of the user or group. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserName">UserName</a> and <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-DisplayName">DisplayName</a> in the <i>IAM Identity Center Identity Store API
   *             Reference</i>.</p>
   */
  IdentityName?: string;

  /**
   * @public
   * <p>Specifies whether the identity mapped to the Amazon EMR Studio is a user or a
   *          group.</p>
   */
  IdentityType?: IdentityType;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the session policy associated with the user or
   *          group.</p>
   */
  SessionPolicyArn?: string;

  /**
   * @public
   * <p>The time the session mapping was created.</p>
   */
  CreationTime?: Date;
}

/**
 * @public
 */
export interface ListStudioSessionMappingsOutput {
  /**
   * @public
   * <p>A list of session mapping summary objects. Each object includes session mapping details
   *          such as creation time, identity type (user or group), and Amazon EMR Studio
   *          ID.</p>
   */
  SessionMappings?: SessionMappingSummary[];

  /**
   * @public
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

/**
 * @public
 */
export interface ListSupportedInstanceTypesInput {
  /**
   * @public
   * <p>The Amazon EMR release label determines the <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-release-app-versions-6.x.html">versions of open-source
   *             application packages</a> that Amazon EMR has installed on the cluster.
   *          Release labels are in the format <code>emr-x.x.x</code>, where x.x.x is an Amazon EMR release number such as <code>emr-6.10.0</code>. For more information about Amazon EMR releases and their included application versions and features, see the
   *                <i>
   *                <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-release-components.html">Amazon EMR Release
   *                Guide</a>
   *             </i>.</p>
   */
  ReleaseLabel: string | undefined;

  /**
   * @public
   * <p>The pagination token that marks the next set of results to retrieve.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>An instance type that the specified Amazon EMR release supports.</p>
 */
export interface SupportedInstanceType {
  /**
   * @public
   * <p>The <a href="http://aws.amazon.com/ec2/instance-types/">Amazon EC2 instance
   *             type</a>, for example <code>m5.xlarge</code>, of the
   *             <code>SupportedInstanceType</code>.</p>
   */
  Type?: string;

  /**
   * @public
   * <p>The amount of memory that is available to Amazon EMR from the <code>SupportedInstanceType</code>. The kernel and hypervisor
   *          software consume some memory, so this value might be lower than the overall memory for the
   *          instance type.</p>
   */
  MemoryGB?: number;

  /**
   * @public
   * <p>
   *             <code>StorageGB</code> represents the storage capacity of the
   *             <code>SupportedInstanceType</code>. This value is <code>0</code> for Amazon EBS-only instance types.</p>
   */
  StorageGB?: number;

  /**
   * @public
   * <p>The number of vCPUs available for the <code>SupportedInstanceType</code>.</p>
   */
  VCPU?: number;

  /**
   * @public
   * <p>Indicates whether the <code>SupportedInstanceType</code> only supports 64-bit
   *          architecture.</p>
   */
  Is64BitsOnly?: boolean;

  /**
   * @public
   * <p>The Amazon EC2 family and generation for the
   *          <code>SupportedInstanceType</code>.</p>
   */
  InstanceFamilyId?: string;

  /**
   * @public
   * <p>Indicates whether the <code>SupportedInstanceType</code> supports Amazon EBS
   *          optimization.</p>
   */
  EbsOptimizedAvailable?: boolean;

  /**
   * @public
   * <p>Indicates whether the <code>SupportedInstanceType</code> uses Amazon EBS
   *          optimization by default.</p>
   */
  EbsOptimizedByDefault?: boolean;

  /**
   * @public
   * <p>Number of disks for the <code>SupportedInstanceType</code>. This value is <code>0</code>
   *          for Amazon EBS-only instance types.</p>
   */
  NumberOfDisks?: number;

  /**
   * @public
   * <p>Indicates whether the <code>SupportedInstanceType</code> only supports Amazon EBS.</p>
   */
  EbsStorageOnly?: boolean;

  /**
   * @public
   * <p>The CPU architecture, for example <code>X86_64</code> or <code>AARCH64</code>.</p>
   */
  Architecture?: string;
}

/**
 * @public
 */
export interface ListSupportedInstanceTypesOutput {
  /**
   * @public
   * <p>The list of instance types that the release specified in
   *             <code>ListSupportedInstanceTypesInput$ReleaseLabel</code> supports, filtered by Amazon Web Services Region.</p>
   */
  SupportedInstanceTypes?: SupportedInstanceType[];

  /**
   * @public
   * <p>The pagination token that marks the next set of results to retrieve.</p>
   */
  Marker?: string;
}

/**
 * @public
 */
export interface ModifyClusterInput {
  /**
   * @public
   * <p>The unique identifier of the cluster.</p>
   */
  ClusterId: string | undefined;

  /**
   * @public
   * <p>The number of steps that can be executed concurrently. You can specify a minimum of 1
   *          step and a maximum of 256 steps. We recommend that you do not change this parameter while
   *          steps are running or the <code>ActionOnFailure</code> setting may not behave as expected.
   *          For more information see <a>Step$ActionOnFailure</a>.</p>
   */
  StepConcurrencyLevel?: number;
}

/**
 * @public
 */
export interface ModifyClusterOutput {
  /**
   * @public
   * <p>The number of steps that can be executed concurrently.</p>
   */
  StepConcurrencyLevel?: number;
}

/**
 * @public
 * <p>Configuration parameters for an instance fleet modification request.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR releases
 *             4.8.0 and later, excluding 5.0.x versions.</p>
 *          </note>
 */
export interface InstanceFleetModifyConfig {
  /**
   * @public
   * <p>A unique identifier for the instance fleet.</p>
   */
  InstanceFleetId: string | undefined;

  /**
   * @public
   * <p>The target capacity of On-Demand units for the instance fleet. For more information see
   *             <a>InstanceFleetConfig$TargetOnDemandCapacity</a>.</p>
   */
  TargetOnDemandCapacity?: number;

  /**
   * @public
   * <p>The target capacity of Spot units for the instance fleet. For more information, see
   *             <a>InstanceFleetConfig$TargetSpotCapacity</a>.</p>
   */
  TargetSpotCapacity?: number;

  /**
   * @public
   * <p>The resize specification for the instance fleet.</p>
   */
  ResizeSpecifications?: InstanceFleetResizingSpecifications;
}

/**
 * @public
 */
export interface ModifyInstanceFleetInput {
  /**
   * @public
   * <p>The unique identifier of the cluster.</p>
   */
  ClusterId: string | undefined;

  /**
   * @public
   * <p>The configuration parameters of the instance fleet.</p>
   */
  InstanceFleet: InstanceFleetModifyConfig | undefined;
}

/**
 * @public
 * @enum
 */
export const ReconfigurationType = {
  MERGE: "MERGE",
  OVERWRITE: "OVERWRITE",
} as const;

/**
 * @public
 */
export type ReconfigurationType = (typeof ReconfigurationType)[keyof typeof ReconfigurationType];

/**
 * @public
 */
export interface PutAutoScalingPolicyInput {
  /**
   * @public
   * <p>Specifies the ID of a cluster. The instance group to which the automatic scaling policy
   *          is applied is within this cluster.</p>
   */
  ClusterId: string | undefined;

  /**
   * @public
   * <p>Specifies the ID of the instance group to which the automatic scaling policy is
   *          applied.</p>
   */
  InstanceGroupId: string | undefined;

  /**
   * @public
   * <p>Specifies the definition of the automatic scaling policy.</p>
   */
  AutoScalingPolicy: AutoScalingPolicy | undefined;
}

/**
 * @public
 */
export interface PutAutoScalingPolicyOutput {
  /**
   * @public
   * <p>Specifies the ID of a cluster. The instance group to which the automatic scaling policy
   *          is applied is within this cluster.</p>
   */
  ClusterId?: string;

  /**
   * @public
   * <p>Specifies the ID of the instance group to which the scaling policy is applied.</p>
   */
  InstanceGroupId?: string;

  /**
   * @public
   * <p>The automatic scaling policy definition.</p>
   */
  AutoScalingPolicy?: AutoScalingPolicyDescription;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;
}

/**
 * @public
 */
export interface PutAutoTerminationPolicyInput {
  /**
   * @public
   * <p>Specifies the ID of the Amazon EMR cluster to which the auto-termination policy
   *          will be attached.</p>
   */
  ClusterId: string | undefined;

  /**
   * @public
   * <p>Specifies the auto-termination policy to attach to the cluster.</p>
   */
  AutoTerminationPolicy?: AutoTerminationPolicy;
}

/**
 * @public
 */
export interface PutAutoTerminationPolicyOutput {}

/**
 * @public
 */
export interface PutBlockPublicAccessConfigurationOutput {}

/**
 * @public
 */
export interface PutManagedScalingPolicyInput {
  /**
   * @public
   * <p>Specifies the ID of an Amazon EMR cluster where the managed scaling policy is
   *          attached. </p>
   */
  ClusterId: string | undefined;

  /**
   * @public
   * <p>Specifies the constraints for the managed scaling policy. </p>
   */
  ManagedScalingPolicy: ManagedScalingPolicy | undefined;
}

/**
 * @public
 */
export interface PutManagedScalingPolicyOutput {}

/**
 * @public
 */
export interface RemoveAutoScalingPolicyInput {
  /**
   * @public
   * <p>Specifies the ID of a cluster. The instance group to which the automatic scaling policy
   *          is applied is within this cluster.</p>
   */
  ClusterId: string | undefined;

  /**
   * @public
   * <p>Specifies the ID of the instance group to which the scaling policy is applied.</p>
   */
  InstanceGroupId: string | undefined;
}

/**
 * @public
 */
export interface RemoveAutoScalingPolicyOutput {}

/**
 * @public
 */
export interface RemoveAutoTerminationPolicyInput {
  /**
   * @public
   * <p>Specifies the ID of the Amazon EMR cluster from which the auto-termination
   *          policy will be removed.</p>
   */
  ClusterId: string | undefined;
}

/**
 * @public
 */
export interface RemoveAutoTerminationPolicyOutput {}

/**
 * @public
 */
export interface RemoveManagedScalingPolicyInput {
  /**
   * @public
   * <p> Specifies the ID of the cluster from which the managed scaling policy will be removed.
   *       </p>
   */
  ClusterId: string | undefined;
}

/**
 * @public
 */
export interface RemoveManagedScalingPolicyOutput {}

/**
 * @public
 * <p>This input identifies an Amazon EMR resource and a list of tags to
 *          remove.</p>
 */
export interface RemoveTagsInput {
  /**
   * @public
   * <p>The Amazon EMR resource identifier from which tags will be removed. For example,
   *          a cluster identifier or an Amazon EMR Studio ID.</p>
   */
  ResourceId: string | undefined;

  /**
   * @public
   * <p>A list of tag keys to remove from the resource.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 * <p>This output indicates the result of removing tags from the resource.</p>
 */
export interface RemoveTagsOutput {}

/**
 * @public
 * <p>The list of supported product configurations that allow user-supplied arguments. Amazon EMR accepts these arguments and forwards them to the corresponding installation
 *          script as bootstrap action arguments.</p>
 */
export interface SupportedProductConfig {
  /**
   * @public
   * <p>The name of the product configuration.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The list of user-supplied arguments.</p>
   */
  Args?: string[];
}

/**
 * @public
 * <p> The result of the <a>RunJobFlow</a> operation. </p>
 */
export interface RunJobFlowOutput {
  /**
   * @public
   * <p>A unique identifier for the job flow.</p>
   */
  JobFlowId?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the cluster.</p>
   */
  ClusterArn?: string;
}

/**
 * @public
 * <p> The input argument to the <a>TerminationProtection</a> operation. </p>
 */
export interface SetTerminationProtectionInput {
  /**
   * @public
   * <p> A list of strings that uniquely identify the clusters to protect. This identifier is
   *          returned by <a>RunJobFlow</a> and can also be obtained from <a>DescribeJobFlows</a> . </p>
   */
  JobFlowIds: string[] | undefined;

  /**
   * @public
   * <p>A Boolean that indicates whether to protect the cluster and prevent the Amazon EC2 instances in the cluster from shutting down due to API calls, user intervention, or
   *          job-flow error.</p>
   */
  TerminationProtected: boolean | undefined;
}

/**
 * @public
 * <p>The input to the SetVisibleToAllUsers action.</p>
 */
export interface SetVisibleToAllUsersInput {
  /**
   * @public
   * <p>The unique identifier of the job flow (cluster).</p>
   */
  JobFlowIds: string[] | undefined;

  /**
   * @public
   * <p>A value of <code>true</code> indicates that an IAM principal in the
   *             Amazon Web Services account can perform Amazon EMR actions on the cluster that
   *          the IAM policies attached to the principal allow. A value of
   *             <code>false</code> indicates that only the IAM principal that created the
   *          cluster and the Amazon Web Services root user can perform Amazon EMR actions on the
   *          cluster.</p>
   */
  VisibleToAllUsers: boolean | undefined;
}

/**
 * @public
 * <p>The Amazon S3 location that stores the notebook execution input.</p>
 */
export interface NotebookS3LocationFromInput {
  /**
   * @public
   * <p>The Amazon S3 bucket that stores the notebook execution input.</p>
   */
  Bucket?: string;

  /**
   * @public
   * <p>The key to the Amazon S3 location that stores the notebook execution
   *          input.</p>
   */
  Key?: string;
}

/**
 * @public
 * <p>The Amazon S3 location that stores the notebook execution output.</p>
 */
export interface OutputNotebookS3LocationFromInput {
  /**
   * @public
   * <p>The Amazon S3 bucket that stores the notebook execution output.</p>
   */
  Bucket?: string;

  /**
   * @public
   * <p>The key to the Amazon S3 location that stores the notebook execution
   *          output.</p>
   */
  Key?: string;
}

/**
 * @public
 */
export interface StartNotebookExecutionInput {
  /**
   * @public
   * <p>The unique identifier of the Amazon EMR Notebook to use for notebook
   *          execution.</p>
   */
  EditorId?: string;

  /**
   * @public
   * <p>The path and file name of the notebook file for this execution, relative to the path
   *          specified for the Amazon EMR Notebook. For example, if you specify a path of
   *             <code>s3://MyBucket/MyNotebooks</code> when you create an Amazon EMR Notebook
   *          for a notebook with an ID of <code>e-ABCDEFGHIJK1234567890ABCD</code> (the
   *             <code>EditorID</code> of this request), and you specify a <code>RelativePath</code> of
   *             <code>my_notebook_executions/notebook_execution.ipynb</code>, the location of the file
   *          for the notebook execution is
   *             <code>s3://MyBucket/MyNotebooks/e-ABCDEFGHIJK1234567890ABCD/my_notebook_executions/notebook_execution.ipynb</code>.</p>
   */
  RelativePath?: string;

  /**
   * @public
   * <p>An optional name for the notebook execution.</p>
   */
  NotebookExecutionName?: string;

  /**
   * @public
   * <p>Input parameters in JSON format passed to the Amazon EMR Notebook at runtime for
   *          execution.</p>
   */
  NotebookParams?: string;

  /**
   * @public
   * <p>Specifies the execution engine (cluster) that runs the notebook execution.</p>
   */
  ExecutionEngine: ExecutionEngineConfig | undefined;

  /**
   * @public
   * <p>The name or ARN of the IAM role that is used as the service role for
   *             Amazon EMR (the Amazon EMR role) for the notebook execution.</p>
   */
  ServiceRole: string | undefined;

  /**
   * @public
   * <p>The unique identifier of the Amazon EC2 security group to associate with the
   *             Amazon EMR Notebook for this notebook execution.</p>
   */
  NotebookInstanceSecurityGroupId?: string;

  /**
   * @public
   * <p>A list of tags associated with a notebook execution. Tags are user-defined key-value
   *          pairs that consist of a required key string with a maximum of 128 characters and an
   *          optional value string with a maximum of 256 characters.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The Amazon S3 location for the notebook execution input.</p>
   */
  NotebookS3Location?: NotebookS3LocationFromInput;

  /**
   * @public
   * <p>The Amazon S3 location for the notebook execution output.</p>
   */
  OutputNotebookS3Location?: OutputNotebookS3LocationFromInput;

  /**
   * @public
   * <p>The output format for the notebook execution.</p>
   */
  OutputNotebookFormat?: OutputNotebookFormat;

  /**
   * @public
   * <p>The environment variables associated with the notebook execution.</p>
   */
  EnvironmentVariables?: Record<string, string>;
}

/**
 * @public
 */
export interface StartNotebookExecutionOutput {
  /**
   * @public
   * <p>The unique identifier of the notebook execution.</p>
   */
  NotebookExecutionId?: string;
}

/**
 * @public
 */
export interface StopNotebookExecutionInput {
  /**
   * @public
   * <p>The unique identifier of the notebook execution.</p>
   */
  NotebookExecutionId: string | undefined;
}

/**
 * @public
 * <p> Input to the <a>TerminateJobFlows</a> operation. </p>
 */
export interface TerminateJobFlowsInput {
  /**
   * @public
   * <p>A list of job flows to be shut down.</p>
   */
  JobFlowIds: string[] | undefined;
}

/**
 * @public
 */
export interface UpdateStudioInput {
  /**
   * @public
   * <p>The ID of the Amazon EMR Studio to update.</p>
   */
  StudioId: string | undefined;

  /**
   * @public
   * <p>A descriptive name for the Amazon EMR Studio.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>A detailed description to assign to the Amazon EMR Studio.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A list of subnet IDs to associate with the Amazon EMR Studio. The list can
   *          include new subnet IDs, but must also include all of the subnet IDs previously associated
   *          with the Studio. The list order does not matter. A Studio can have a maximum of 5 subnets.
   *          The subnets must belong to the same VPC as the Studio. </p>
   */
  SubnetIds?: string[];

  /**
   * @public
   * <p>The Amazon S3 location to back up Workspaces and notebook files for the Amazon EMR Studio.</p>
   */
  DefaultS3Location?: string;
}

/**
 * @public
 */
export interface UpdateStudioSessionMappingInput {
  /**
   * @public
   * <p>The ID of the Amazon EMR Studio.</p>
   */
  StudioId: string | undefined;

  /**
   * @public
   * <p>The globally unique identifier (GUID) of the user or group. For more information, see
   *             <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserId">UserId</a> and <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-GroupId">GroupId</a> in the <i>IAM Identity Center Identity Store API
   *             Reference</i>. Either <code>IdentityName</code> or <code>IdentityId</code> must
   *          be specified.</p>
   */
  IdentityId?: string;

  /**
   * @public
   * <p>The name of the user or group to update. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserName">UserName</a> and <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-DisplayName">DisplayName</a> in the <i>IAM Identity Center Identity Store API
   *             Reference</i>. Either <code>IdentityName</code> or <code>IdentityId</code> must
   *          be specified.</p>
   */
  IdentityName?: string;

  /**
   * @public
   * <p>Specifies whether the identity to update is a user or a group.</p>
   */
  IdentityType: IdentityType | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the session policy to associate with the specified
   *          user or group.</p>
   */
  SessionPolicyArn: string | undefined;
}

/**
 * @public
 * <note>
 *             <p>Amazon EMR releases 4.x or later.</p>
 *          </note>
 *          <p>An optional configuration specification to be used when provisioning cluster instances,
 *          which can include configurations for applications and software bundled with Amazon EMR. A configuration consists of a classification, properties, and optional
 *          nested configurations. A classification refers to an application-specific configuration
 *          file. Properties are the settings you want to change in that file. For more information,
 *          see <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html">Configuring Applications</a>.</p>
 */
export interface Configuration {
  /**
   * @public
   * <p>The classification within a configuration.</p>
   */
  Classification?: string;

  /**
   * @public
   * <p>A list of additional configurations to apply within a configuration object.</p>
   */
  Configurations?: Configuration[];

  /**
   * @public
   * <p>A set of properties specified within a configuration classification.</p>
   */
  Properties?: Record<string, string>;
}

/**
 * @public
 * <p>A configuration for Amazon EMR block public access. When
 *             <code>BlockPublicSecurityGroupRules</code> is set to <code>true</code>, Amazon EMR prevents cluster creation if one of the cluster's security groups has a rule that allows
 *          inbound traffic from 0.0.0.0/0 or ::/0 on a port, unless the port is specified as an
 *          exception using <code>PermittedPublicSecurityGroupRuleRanges</code>.</p>
 */
export interface BlockPublicAccessConfiguration {
  /**
   * @public
   * <p>Indicates whether Amazon EMR block public access is enabled (<code>true</code>)
   *          or disabled (<code>false</code>). By default, the value is <code>false</code> for accounts
   *          that have created Amazon EMR clusters before July 2019. For accounts created after
   *          this, the default is <code>true</code>.</p>
   */
  BlockPublicSecurityGroupRules: boolean | undefined;

  /**
   * @public
   * <p>Specifies ports and port ranges that are permitted to have security group rules that
   *          allow inbound traffic from all public sources. For example, if Port 23 (Telnet) is
   *          specified for <code>PermittedPublicSecurityGroupRuleRanges</code>, Amazon EMR
   *          allows cluster creation if a security group associated with the cluster has a rule that
   *          allows inbound traffic on Port 23 from IPv4 0.0.0.0/0 or IPv6 port ::/0 as the
   *          source.</p>
   *          <p>By default, Port 22, which is used for SSH access to the cluster Amazon EC2
   *          instances, is in the list of <code>PermittedPublicSecurityGroupRuleRanges</code>.</p>
   */
  PermittedPublicSecurityGroupRuleRanges?: PortRange[];

  /**
   * @public
   * <p>The classification within a configuration.</p>
   */
  Classification?: string;

  /**
   * @public
   * <p>A list of additional configurations to apply within a configuration object.</p>
   */
  Configurations?: Configuration[];

  /**
   * @public
   * <p>A set of properties specified within a configuration classification.</p>
   */
  Properties?: Record<string, string>;
}

/**
 * @public
 * <p>The detailed description of the cluster.</p>
 */
export interface Cluster {
  /**
   * @public
   * <p>The unique identifier for the cluster.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The name of the cluster.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The current status details about the cluster.</p>
   */
  Status?: ClusterStatus;

  /**
   * @public
   * <p>Provides information about the Amazon EC2 instances in a cluster grouped by
   *          category. For example, key name, subnet ID, IAM instance profile, and so
   *          on.</p>
   */
  Ec2InstanceAttributes?: Ec2InstanceAttributes;

  /**
   * @public
   * <note>
   *             <p>The instance fleet configuration is available only in Amazon EMR releases
   *             4.8.0 and later, excluding 5.0.x versions.</p>
   *          </note>
   *          <p>The instance group configuration of the cluster. A value of <code>INSTANCE_GROUP</code>
   *          indicates a uniform instance group configuration. A value of <code>INSTANCE_FLEET</code>
   *          indicates an instance fleets configuration.</p>
   */
  InstanceCollectionType?: InstanceCollectionType;

  /**
   * @public
   * <p>The path to the Amazon S3 location where logs for this cluster are
   *          stored.</p>
   */
  LogUri?: string;

  /**
   * @public
   * <p> The KMS key used for encrypting log files. This attribute is only
   *          available with Amazon EMR 5.30.0 and later, excluding Amazon EMR 6.0.0.
   *       </p>
   */
  LogEncryptionKmsKeyId?: string;

  /**
   * @public
   * <p>The AMI version requested for this cluster.</p>
   */
  RequestedAmiVersion?: string;

  /**
   * @public
   * <p>The AMI version running on this cluster.</p>
   */
  RunningAmiVersion?: string;

  /**
   * @public
   * <p>The Amazon EMR release label, which determines the version of open-source
   *          application packages installed on the cluster. Release labels are in the form
   *             <code>emr-x.x.x</code>, where x.x.x is an Amazon EMR release version such as
   *             <code>emr-5.14.0</code>. For more information about Amazon EMR release versions
   *          and included application versions and features, see <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/">https://docs.aws.amazon.com/emr/latest/ReleaseGuide/</a>. The release label applies only to Amazon EMR
   *          releases version 4.0 and later. Earlier versions use <code>AmiVersion</code>.</p>
   */
  ReleaseLabel?: string;

  /**
   * @public
   * <p>Specifies whether the cluster should terminate after completing all steps.</p>
   */
  AutoTerminate?: boolean;

  /**
   * @public
   * <p>Indicates whether Amazon EMR will lock the cluster to prevent the Amazon EC2 instances from being terminated by an API call or user intervention, or in
   *          the event of a cluster error.</p>
   */
  TerminationProtected?: boolean;

  /**
   * @public
   * <p>Indicates whether the cluster is visible to IAM principals in the Amazon Web Services account associated with the cluster. When <code>true</code>, IAM principals in the Amazon Web Services account can perform Amazon EMR cluster
   *          actions on the cluster that their IAM policies allow. When
   *             <code>false</code>, only the IAM principal that created the cluster and
   *          the Amazon Web Services account root user can perform Amazon EMR actions, regardless
   *          of IAM permissions policies attached to other IAM
   *          principals.</p>
   *          <p>The default value is <code>true</code> if a value is not provided when creating a
   *          cluster using the Amazon EMR API <a>RunJobFlow</a> command, the CLI
   *          <a href="https://docs.aws.amazon.com/cli/latest/reference/emr/create-cluster.html">create-cluster</a> command, or the Amazon Web Services Management Console.</p>
   */
  VisibleToAllUsers?: boolean;

  /**
   * @public
   * <p>The applications installed on this cluster.</p>
   */
  Applications?: Application[];

  /**
   * @public
   * <p>A list of tags associated with a cluster.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The IAM role that Amazon EMR assumes in order to access Amazon Web Services resources on your behalf.</p>
   */
  ServiceRole?: string;

  /**
   * @public
   * <p>An approximation of the cost of the cluster, represented in m1.small/hours. This value
   *          is incremented one time for every hour an m1.small instance runs. Larger instances are
   *          weighted more, so an Amazon EC2 instance that is roughly four times more expensive
   *          would result in the normalized instance hours being incremented by four. This result is
   *          only an approximation and does not reflect the actual billing rate.</p>
   */
  NormalizedInstanceHours?: number;

  /**
   * @public
   * <p>The DNS name of the master node. If the cluster is on a private subnet, this is the
   *          private DNS name. On a public subnet, this is the public DNS name.</p>
   */
  MasterPublicDnsName?: string;

  /**
   * @public
   * <p>Applies only to Amazon EMR releases 4.x and later. The list of configurations
   *          that are supplied to the Amazon EMR cluster.</p>
   */
  Configurations?: Configuration[];

  /**
   * @public
   * <p>The name of the security configuration applied to the cluster.</p>
   */
  SecurityConfiguration?: string;

  /**
   * @public
   * <p>An IAM role for automatic scaling policies. The default role is
   *             <code>EMR_AutoScaling_DefaultRole</code>. The IAM role provides
   *          permissions that the automatic scaling feature requires to launch and terminate Amazon EC2 instances in an instance group.</p>
   */
  AutoScalingRole?: string;

  /**
   * @public
   * <p>The way that individual Amazon EC2 instances terminate when an automatic
   *          scale-in activity occurs or an instance group is resized.
   *             <code>TERMINATE_AT_INSTANCE_HOUR</code> indicates that Amazon EMR terminates
   *          nodes at the instance-hour boundary, regardless of when the request to terminate the
   *          instance was submitted. This option is only available with Amazon EMR 5.1.0 and
   *          later and is the default for clusters created using that version.
   *             <code>TERMINATE_AT_TASK_COMPLETION</code> indicates that Amazon EMR adds nodes
   *          to a deny list and drains tasks from nodes before terminating the Amazon EC2
   *          instances, regardless of the instance-hour boundary. With either behavior, Amazon EMR removes the least active nodes first and blocks instance termination if it could lead to
   *          HDFS corruption. <code>TERMINATE_AT_TASK_COMPLETION</code> is available only in Amazon EMR releases 4.1.0 and later, and is the default for versions of Amazon EMR earlier than 5.1.0.</p>
   */
  ScaleDownBehavior?: ScaleDownBehavior;

  /**
   * @public
   * <p>Available only in Amazon EMR releases 5.7.0 and later. The ID of a custom Amazon
   *          EBS-backed Linux AMI if the cluster uses a custom AMI.</p>
   */
  CustomAmiId?: string;

  /**
   * @public
   * <p>The size, in GiB, of the Amazon EBS root device volume of the Linux AMI that is
   *          used for each Amazon EC2 instance. Available in Amazon EMR releases 4.x and
   *          later.</p>
   */
  EbsRootVolumeSize?: number;

  /**
   * @public
   * <p>Applies only when <code>CustomAmiID</code> is used. Specifies the type of updates that
   *          the Amazon Linux AMI package repositories apply when an instance boots using the
   *          AMI.</p>
   */
  RepoUpgradeOnBoot?: RepoUpgradeOnBoot;

  /**
   * @public
   * <p>Attributes for Kerberos configuration when Kerberos authentication is enabled using a
   *          security configuration. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html">Use Kerberos Authentication</a>
   *          in the <i>Amazon EMR Management Guide</i>.</p>
   */
  KerberosAttributes?: KerberosAttributes;

  /**
   * @public
   * <p>The Amazon Resource Name of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the Outpost where the cluster is launched. </p>
   */
  OutpostArn?: string;

  /**
   * @public
   * <p>Specifies the number of steps that can be executed concurrently.</p>
   */
  StepConcurrencyLevel?: number;

  /**
   * @public
   * <p>Placement group configured for an Amazon EMR cluster.</p>
   */
  PlacementGroups?: PlacementGroupConfig[];

  /**
   * @public
   * <p>The Amazon Linux release specified in a cluster launch RunJobFlow request. If no Amazon
   *          Linux release was specified, the default Amazon Linux release is shown in the
   *          response.</p>
   */
  OSReleaseLabel?: string;
}

/**
 * @public
 * <p>Configuration defining a new instance group.</p>
 */
export interface InstanceGroupConfig {
  /**
   * @public
   * <p>Friendly name given to the instance group.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>Market type of the Amazon EC2 instances used to create a cluster node.</p>
   */
  Market?: MarketType;

  /**
   * @public
   * <p>The role of the instance group in the cluster.</p>
   */
  InstanceRole: InstanceRoleType | undefined;

  /**
   * @public
   * <p>If specified, indicates that the instance group uses Spot Instances. This is the maximum
   *          price you are willing to pay for Spot Instances. Specify <code>OnDemandPrice</code> to set
   *          the amount equal to the On-Demand price, or specify an amount in USD.</p>
   */
  BidPrice?: string;

  /**
   * @public
   * <p>The Amazon EC2 instance type for all instances in the instance group.</p>
   */
  InstanceType: string | undefined;

  /**
   * @public
   * <p>Target number of instances for the instance group.</p>
   */
  InstanceCount: number | undefined;

  /**
   * @public
   * <note>
   *             <p>Amazon EMR releases 4.x or later.</p>
   *          </note>
   *          <p>The list of configurations supplied for an Amazon EMR cluster instance group.
   *          You can specify a separate configuration for each instance group (master, core, and
   *          task).</p>
   */
  Configurations?: Configuration[];

  /**
   * @public
   * <p>EBS configurations that will be attached to each Amazon EC2 instance in the
   *          instance group.</p>
   */
  EbsConfiguration?: EbsConfiguration;

  /**
   * @public
   * <p>An automatic scaling policy for a core instance group or task instance group in an
   *             Amazon EMR cluster. The automatic scaling policy defines how an instance group
   *          dynamically adds and terminates Amazon EC2 instances in response to the value of a
   *          CloudWatch metric. See <a>PutAutoScalingPolicy</a>.</p>
   */
  AutoScalingPolicy?: AutoScalingPolicy;

  /**
   * @public
   * <p>The custom AMI ID to use for the provisioned instance group.</p>
   */
  CustomAmiId?: string;
}

/**
 * @public
 * <p>Modify the size or configurations of an instance group.</p>
 */
export interface InstanceGroupModifyConfig {
  /**
   * @public
   * <p>Unique ID of the instance group to modify.</p>
   */
  InstanceGroupId: string | undefined;

  /**
   * @public
   * <p>Target size for the instance group.</p>
   */
  InstanceCount?: number;

  /**
   * @public
   * <p>The Amazon EC2 InstanceIds to terminate. After you terminate the instances, the
   *          instance group will not return to its original requested size.</p>
   */
  EC2InstanceIdsToTerminate?: string[];

  /**
   * @public
   * <p>Policy for customizing shrink operations.</p>
   */
  ShrinkPolicy?: ShrinkPolicy;

  /**
   * @public
   * <p>Type of reconfiguration requested. Valid values are MERGE and OVERWRITE.</p>
   */
  ReconfigurationType?: ReconfigurationType;

  /**
   * @public
   * <p>A list of new or modified configurations to apply for an instance group.</p>
   */
  Configurations?: Configuration[];
}

/**
 * @public
 * <p>An instance type configuration for each instance type in an instance fleet, which
 *          determines the Amazon EC2 instances Amazon EMR attempts to provision to
 *          fulfill On-Demand and Spot target capacities. When you use an allocation strategy, you can
 *          include a maximum of 30 instance type configurations for a fleet. For more information
 *          about how to use an allocation strategy, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-fleet.html">Configure Instance
 *             Fleets</a>. Without an allocation strategy, you may specify a maximum of five
 *          instance type configurations for a fleet.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR releases
 *             4.8.0 and later, excluding 5.0.x versions.</p>
 *          </note>
 */
export interface InstanceTypeConfig {
  /**
   * @public
   * <p>An Amazon EC2 instance type, such as <code>m3.xlarge</code>. </p>
   */
  InstanceType: string | undefined;

  /**
   * @public
   * <p>The number of units that a provisioned instance of this type provides toward fulfilling
   *          the target capacities defined in <a>InstanceFleetConfig</a>. This value is 1 for
   *          a master instance fleet, and must be 1 or greater for core and task instance fleets.
   *          Defaults to 1 if not specified. </p>
   */
  WeightedCapacity?: number;

  /**
   * @public
   * <p>The bid price for each Amazon EC2 Spot Instance type as defined by
   *             <code>InstanceType</code>. Expressed in USD. If neither <code>BidPrice</code> nor
   *             <code>BidPriceAsPercentageOfOnDemandPrice</code> is provided,
   *             <code>BidPriceAsPercentageOfOnDemandPrice</code> defaults to 100%. </p>
   */
  BidPrice?: string;

  /**
   * @public
   * <p>The bid price, as a percentage of On-Demand price, for each Amazon EC2 Spot
   *          Instance as defined by <code>InstanceType</code>. Expressed as a number (for example, 20
   *          specifies 20%). If neither <code>BidPrice</code> nor
   *             <code>BidPriceAsPercentageOfOnDemandPrice</code> is provided,
   *             <code>BidPriceAsPercentageOfOnDemandPrice</code> defaults to 100%.</p>
   */
  BidPriceAsPercentageOfOnDemandPrice?: number;

  /**
   * @public
   * <p>The configuration of Amazon Elastic Block Store (Amazon EBS) attached to each
   *          instance as defined by <code>InstanceType</code>. </p>
   */
  EbsConfiguration?: EbsConfiguration;

  /**
   * @public
   * <p>A configuration classification that applies when provisioning cluster instances, which
   *          can include configurations for applications and software that run on the cluster.</p>
   */
  Configurations?: Configuration[];

  /**
   * @public
   * <p>The custom AMI ID to use for the instance type.</p>
   */
  CustomAmiId?: string;
}

/**
 * @public
 * <p>The configuration specification for each instance type in an instance fleet.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR releases
 *             4.8.0 and later, excluding 5.0.x versions.</p>
 *          </note>
 */
export interface InstanceTypeSpecification {
  /**
   * @public
   * <p>The Amazon EC2 instance type, for example <code>m3.xlarge</code>.</p>
   */
  InstanceType?: string;

  /**
   * @public
   * <p>The number of units that a provisioned instance of this type provides toward fulfilling
   *          the target capacities defined in <a>InstanceFleetConfig</a>. Capacity values
   *          represent performance characteristics such as vCPUs, memory, or I/O. If not specified, the
   *          default value is 1.</p>
   */
  WeightedCapacity?: number;

  /**
   * @public
   * <p>The bid price for each Amazon EC2 Spot Instance type as defined by
   *             <code>InstanceType</code>. Expressed in USD.</p>
   */
  BidPrice?: string;

  /**
   * @public
   * <p>The bid price, as a percentage of On-Demand price, for each Amazon EC2 Spot
   *          Instance as defined by <code>InstanceType</code>. Expressed as a number (for example, 20
   *          specifies 20%).</p>
   */
  BidPriceAsPercentageOfOnDemandPrice?: number;

  /**
   * @public
   * <p>A configuration classification that applies when provisioning cluster instances, which
   *          can include configurations for applications and software bundled with Amazon EMR.</p>
   */
  Configurations?: Configuration[];

  /**
   * @public
   * <p>The configuration of Amazon Elastic Block Store (Amazon EBS) attached to each
   *          instance as defined by <code>InstanceType</code>.</p>
   */
  EbsBlockDevices?: EbsBlockDevice[];

  /**
   * @public
   * <p>Evaluates to <code>TRUE</code> when the specified <code>InstanceType</code> is
   *          EBS-optimized.</p>
   */
  EbsOptimized?: boolean;

  /**
   * @public
   * <p>The custom AMI ID to use for the instance type.</p>
   */
  CustomAmiId?: string;
}

/**
 * @public
 * <p>This output contains the description of the cluster.</p>
 */
export interface DescribeClusterOutput {
  /**
   * @public
   * <p>This output contains the details for the requested cluster.</p>
   */
  Cluster?: Cluster;
}

/**
 * @public
 */
export interface GetBlockPublicAccessConfigurationOutput {
  /**
   * @public
   * <p>A configuration for Amazon EMR block public access. The configuration applies to
   *          all clusters created in your account for the current Region. The configuration specifies
   *          whether block public access is enabled. If block public access is enabled, security groups
   *          associated with the cluster cannot have rules that allow inbound traffic from 0.0.0.0/0 or
   *          ::/0 on a port, unless the port is specified as an exception using
   *             <code>PermittedPublicSecurityGroupRuleRanges</code> in the
   *             <code>BlockPublicAccessConfiguration</code>. By default, Port 22 (SSH) is an exception,
   *          and public access is allowed on this port. You can change this by updating the block public
   *          access configuration to remove the exception.</p>
   *          <note>
   *             <p>For accounts that created clusters in a Region before November 25, 2019, block public
   *             access is disabled by default in that Region. To use this feature, you must manually
   *             enable and configure it. For accounts that did not create an Amazon EMR cluster
   *             in a Region before this date, block public access is enabled by default in that
   *             Region.</p>
   *          </note>
   */
  BlockPublicAccessConfiguration: BlockPublicAccessConfiguration | undefined;

  /**
   * @public
   * <p>Properties that describe the Amazon Web Services principal that created the
   *             <code>BlockPublicAccessConfiguration</code> using the
   *             <code>PutBlockPublicAccessConfiguration</code> action as well as the date and time that
   *          the configuration was created. Each time a configuration for block public access is
   *          updated, Amazon EMR updates this metadata.</p>
   */
  BlockPublicAccessConfigurationMetadata: BlockPublicAccessConfigurationMetadata | undefined;
}

/**
 * @public
 */
export interface PutBlockPublicAccessConfigurationInput {
  /**
   * @public
   * <p>A configuration for Amazon EMR block public access. The configuration applies to
   *          all clusters created in your account for the current Region. The configuration specifies
   *          whether block public access is enabled. If block public access is enabled, security groups
   *          associated with the cluster cannot have rules that allow inbound traffic from 0.0.0.0/0 or
   *          ::/0 on a port, unless the port is specified as an exception using
   *             <code>PermittedPublicSecurityGroupRuleRanges</code> in the
   *             <code>BlockPublicAccessConfiguration</code>. By default, Port 22 (SSH) is an exception,
   *          and public access is allowed on this port. You can change this by updating
   *             <code>BlockPublicSecurityGroupRules</code> to remove the exception.</p>
   *          <note>
   *             <p>For accounts that created clusters in a Region before November 25, 2019, block public
   *             access is disabled by default in that Region. To use this feature, you must manually
   *             enable and configure it. For accounts that did not create an Amazon EMR cluster
   *             in a Region before this date, block public access is enabled by default in that
   *             Region.</p>
   *          </note>
   */
  BlockPublicAccessConfiguration: BlockPublicAccessConfiguration | undefined;
}

/**
 * @public
 * <p>Input to an AddInstanceGroups call.</p>
 */
export interface AddInstanceGroupsInput {
  /**
   * @public
   * <p>Instance groups to add.</p>
   */
  InstanceGroups: InstanceGroupConfig[] | undefined;

  /**
   * @public
   * <p>Job flow in which to add the instance groups.</p>
   */
  JobFlowId: string | undefined;
}

/**
 * @public
 * <p>Describes an instance fleet, which is a group of Amazon EC2 instances that host
 *          a particular node type (master, core, or task) in an Amazon EMR cluster. Instance
 *          fleets can consist of a mix of instance types and On-Demand and Spot Instances, which are
 *          provisioned to meet a defined target capacity. </p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR releases
 *             4.8.0 and later, excluding 5.0.x versions.</p>
 *          </note>
 */
export interface InstanceFleet {
  /**
   * @public
   * <p>The unique identifier of the instance fleet.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>A friendly name for the instance fleet.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The current status of the instance fleet. </p>
   */
  Status?: InstanceFleetStatus;

  /**
   * @public
   * <p>The node type that the instance fleet hosts. Valid values are MASTER, CORE, or TASK.
   *       </p>
   */
  InstanceFleetType?: InstanceFleetType;

  /**
   * @public
   * <p>The target capacity of On-Demand units for the instance fleet, which determines how many
   *          On-Demand Instances to provision. When the instance fleet launches, Amazon EMR
   *          tries to provision On-Demand Instances as specified by <a>InstanceTypeConfig</a>. Each instance configuration has a specified <code>WeightedCapacity</code>. When an
   *          On-Demand Instance is provisioned, the <code>WeightedCapacity</code> units count toward the
   *          target capacity. Amazon EMR provisions instances until the target capacity is
   *          totally fulfilled, even if this results in an overage. For example, if there are 2 units
   *          remaining to fulfill capacity, and Amazon EMR can only provision an instance with a
   *             <code>WeightedCapacity</code> of 5 units, the instance is provisioned, and the target
   *          capacity is exceeded by 3 units. You can use <a>InstanceFleet$ProvisionedOnDemandCapacity</a> to determine the Spot capacity
   *          units that have been provisioned for the instance fleet.</p>
   *          <note>
   *             <p>If not specified or set to 0, only Spot Instances are provisioned for the instance
   *             fleet using <code>TargetSpotCapacity</code>. At least one of
   *                <code>TargetSpotCapacity</code> and <code>TargetOnDemandCapacity</code> should be
   *             greater than 0. For a master instance fleet, only one of <code>TargetSpotCapacity</code>
   *             and <code>TargetOnDemandCapacity</code> can be specified, and its value must be
   *             1.</p>
   *          </note>
   */
  TargetOnDemandCapacity?: number;

  /**
   * @public
   * <p>The target capacity of Spot units for the instance fleet, which determines how many Spot
   *          Instances to provision. When the instance fleet launches, Amazon EMR tries to
   *          provision Spot Instances as specified by <a>InstanceTypeConfig</a>. Each
   *          instance configuration has a specified <code>WeightedCapacity</code>. When a Spot instance
   *          is provisioned, the <code>WeightedCapacity</code> units count toward the target capacity.
   *             Amazon EMR provisions instances until the target capacity is totally fulfilled,
   *          even if this results in an overage. For example, if there are 2 units remaining to fulfill
   *          capacity, and Amazon EMR can only provision an instance with a
   *             <code>WeightedCapacity</code> of 5 units, the instance is provisioned, and the target
   *          capacity is exceeded by 3 units. You can use <a>InstanceFleet$ProvisionedSpotCapacity</a> to determine the Spot capacity units
   *          that have been provisioned for the instance fleet.</p>
   *          <note>
   *             <p>If not specified or set to 0, only On-Demand Instances are provisioned for the
   *             instance fleet. At least one of <code>TargetSpotCapacity</code> and
   *                <code>TargetOnDemandCapacity</code> should be greater than 0. For a master instance
   *             fleet, only one of <code>TargetSpotCapacity</code> and
   *                <code>TargetOnDemandCapacity</code> can be specified, and its value must be 1.</p>
   *          </note>
   */
  TargetSpotCapacity?: number;

  /**
   * @public
   * <p>The number of On-Demand units that have been provisioned for the instance fleet to
   *          fulfill <code>TargetOnDemandCapacity</code>. This provisioned capacity might be less than
   *          or greater than <code>TargetOnDemandCapacity</code>.</p>
   */
  ProvisionedOnDemandCapacity?: number;

  /**
   * @public
   * <p>The number of Spot units that have been provisioned for this instance fleet to fulfill
   *             <code>TargetSpotCapacity</code>. This provisioned capacity might be less than or greater
   *          than <code>TargetSpotCapacity</code>.</p>
   */
  ProvisionedSpotCapacity?: number;

  /**
   * @public
   * <p>An array of specifications for the instance types that comprise an instance
   *          fleet.</p>
   */
  InstanceTypeSpecifications?: InstanceTypeSpecification[];

  /**
   * @public
   * <p>Describes the launch specification for an instance fleet. </p>
   */
  LaunchSpecifications?: InstanceFleetProvisioningSpecifications;

  /**
   * @public
   * <p>The resize specification for the instance fleet.</p>
   */
  ResizeSpecifications?: InstanceFleetResizingSpecifications;
}

/**
 * @public
 * <p>The configuration that defines an instance fleet.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR releases
 *             4.8.0 and later, excluding 5.0.x versions.</p>
 *          </note>
 */
export interface InstanceFleetConfig {
  /**
   * @public
   * <p>The friendly name of the instance fleet.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The node type that the instance fleet hosts. Valid values are MASTER, CORE, and
   *          TASK.</p>
   */
  InstanceFleetType: InstanceFleetType | undefined;

  /**
   * @public
   * <p>The target capacity of On-Demand units for the instance fleet, which determines how many
   *          On-Demand Instances to provision. When the instance fleet launches, Amazon EMR
   *          tries to provision On-Demand Instances as specified by <a>InstanceTypeConfig</a>. Each instance configuration has a specified <code>WeightedCapacity</code>. When an
   *          On-Demand Instance is provisioned, the <code>WeightedCapacity</code> units count toward the
   *          target capacity. Amazon EMR provisions instances until the target capacity is
   *          totally fulfilled, even if this results in an overage. For example, if there are 2 units
   *          remaining to fulfill capacity, and Amazon EMR can only provision an instance with a
   *             <code>WeightedCapacity</code> of 5 units, the instance is provisioned, and the target
   *          capacity is exceeded by 3 units.</p>
   *          <note>
   *             <p>If not specified or set to 0, only Spot Instances are provisioned for the instance
   *             fleet using <code>TargetSpotCapacity</code>. At least one of
   *                <code>TargetSpotCapacity</code> and <code>TargetOnDemandCapacity</code> should be
   *             greater than 0. For a master instance fleet, only one of <code>TargetSpotCapacity</code>
   *             and <code>TargetOnDemandCapacity</code> can be specified, and its value must be
   *             1.</p>
   *          </note>
   */
  TargetOnDemandCapacity?: number;

  /**
   * @public
   * <p>The target capacity of Spot units for the instance fleet, which determines how many Spot
   *          Instances to provision. When the instance fleet launches, Amazon EMR tries to
   *          provision Spot Instances as specified by <a>InstanceTypeConfig</a>. Each
   *          instance configuration has a specified <code>WeightedCapacity</code>. When a Spot Instance
   *          is provisioned, the <code>WeightedCapacity</code> units count toward the target capacity.
   *             Amazon EMR provisions instances until the target capacity is totally fulfilled,
   *          even if this results in an overage. For example, if there are 2 units remaining to fulfill
   *          capacity, and Amazon EMR can only provision an instance with a
   *             <code>WeightedCapacity</code> of 5 units, the instance is provisioned, and the target
   *          capacity is exceeded by 3 units.</p>
   *          <note>
   *             <p>If not specified or set to 0, only On-Demand Instances are provisioned for the
   *             instance fleet. At least one of <code>TargetSpotCapacity</code> and
   *                <code>TargetOnDemandCapacity</code> should be greater than 0. For a master instance
   *             fleet, only one of <code>TargetSpotCapacity</code> and
   *                <code>TargetOnDemandCapacity</code> can be specified, and its value must be 1.</p>
   *          </note>
   */
  TargetSpotCapacity?: number;

  /**
   * @public
   * <p>The instance type configurations that define the Amazon EC2 instances in the
   *          instance fleet.</p>
   */
  InstanceTypeConfigs?: InstanceTypeConfig[];

  /**
   * @public
   * <p>The launch specification for the instance fleet.</p>
   */
  LaunchSpecifications?: InstanceFleetProvisioningSpecifications;

  /**
   * @public
   * <p>The resize specification for the instance fleet.</p>
   */
  ResizeSpecifications?: InstanceFleetResizingSpecifications;
}

/**
 * @public
 * <p>Change the size of some instance groups.</p>
 */
export interface ModifyInstanceGroupsInput {
  /**
   * @public
   * <p>The ID of the cluster to which the instance group belongs.</p>
   */
  ClusterId?: string;

  /**
   * @public
   * <p>Instance groups to change.</p>
   */
  InstanceGroups?: InstanceGroupModifyConfig[];
}

/**
 * @public
 */
export interface AddInstanceFleetInput {
  /**
   * @public
   * <p>The unique identifier of the cluster.</p>
   */
  ClusterId: string | undefined;

  /**
   * @public
   * <p>Specifies the configuration of the instance fleet.</p>
   */
  InstanceFleet: InstanceFleetConfig | undefined;
}

/**
 * @public
 * <p>This entity represents an instance group, which is a group of instances that have common
 *          purpose. For example, CORE instance group is used for HDFS.</p>
 */
export interface InstanceGroup {
  /**
   * @public
   * <p>The identifier of the instance group.</p>
   */
  Id?: string;

  /**
   * @public
   * <p>The name of the instance group.</p>
   */
  Name?: string;

  /**
   * @public
   * <p>The marketplace to provision instances for this group. Valid values are ON_DEMAND or
   *          SPOT.</p>
   */
  Market?: MarketType;

  /**
   * @public
   * <p>The type of the instance group. Valid values are MASTER, CORE or TASK.</p>
   */
  InstanceGroupType?: InstanceGroupType;

  /**
   * @public
   * <p>If specified, indicates that the instance group uses Spot Instances. This is the maximum
   *          price you are willing to pay for Spot Instances. Specify <code>OnDemandPrice</code> to set
   *          the amount equal to the On-Demand price, or specify an amount in USD.</p>
   */
  BidPrice?: string;

  /**
   * @public
   * <p>The Amazon EC2 instance type for all instances in the instance group.</p>
   */
  InstanceType?: string;

  /**
   * @public
   * <p>The target number of instances for the instance group.</p>
   */
  RequestedInstanceCount?: number;

  /**
   * @public
   * <p>The number of instances currently running in this instance group.</p>
   */
  RunningInstanceCount?: number;

  /**
   * @public
   * <p>The current status of the instance group.</p>
   */
  Status?: InstanceGroupStatus;

  /**
   * @public
   * <note>
   *             <p>Amazon EMR releases 4.x or later.</p>
   *          </note>
   *          <p>The list of configurations supplied for an Amazon EMR cluster instance group.
   *          You can specify a separate configuration for each instance group (master, core, and
   *          task).</p>
   */
  Configurations?: Configuration[];

  /**
   * @public
   * <p>The version number of the requested configuration specification for this instance
   *          group.</p>
   */
  ConfigurationsVersion?: number;

  /**
   * @public
   * <p>A list of configurations that were successfully applied for an instance group last
   *          time.</p>
   */
  LastSuccessfullyAppliedConfigurations?: Configuration[];

  /**
   * @public
   * <p>The version number of a configuration specification that was successfully applied for an
   *          instance group last time. </p>
   */
  LastSuccessfullyAppliedConfigurationsVersion?: number;

  /**
   * @public
   * <p>The EBS block devices that are mapped to this instance group.</p>
   */
  EbsBlockDevices?: EbsBlockDevice[];

  /**
   * @public
   * <p>If the instance group is EBS-optimized. An Amazon EBS-optimized instance uses an
   *          optimized configuration stack and provides additional, dedicated capacity for Amazon EBS I/O.</p>
   */
  EbsOptimized?: boolean;

  /**
   * @public
   * <p>Policy for customizing shrink operations.</p>
   */
  ShrinkPolicy?: ShrinkPolicy;

  /**
   * @public
   * <p>An automatic scaling policy for a core instance group or task instance group in an
   *             Amazon EMR cluster. The automatic scaling policy defines how an instance group
   *          dynamically adds and terminates Amazon EC2 instances in response to the value of a
   *          CloudWatch metric. See PutAutoScalingPolicy.</p>
   */
  AutoScalingPolicy?: AutoScalingPolicyDescription;

  /**
   * @public
   * <p>The custom AMI ID to use for the provisioned instance group.</p>
   */
  CustomAmiId?: string;
}

/**
 * @public
 */
export interface ListInstanceFleetsOutput {
  /**
   * @public
   * <p>The list of instance fleets for the cluster and given filters.</p>
   */
  InstanceFleets?: InstanceFleet[];

  /**
   * @public
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>This input determines which instance groups to retrieve.</p>
 */
export interface ListInstanceGroupsOutput {
  /**
   * @public
   * <p>The list of instance groups for the cluster and given filters.</p>
   */
  InstanceGroups?: InstanceGroup[];

  /**
   * @public
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

/**
 * @public
 * <p>A description of the Amazon EC2 instance on which the cluster (job flow) runs. A
 *          valid JobFlowInstancesConfig must contain either InstanceGroups or InstanceFleets. They
 *          cannot be used together. You may also have MasterInstanceType, SlaveInstanceType, and
 *          InstanceCount (all three must be present), but we don't recommend this
 *          configuration.</p>
 */
export interface JobFlowInstancesConfig {
  /**
   * @public
   * <p>The Amazon EC2 instance type of the master node.</p>
   */
  MasterInstanceType?: string;

  /**
   * @public
   * <p>The Amazon EC2 instance type of the core and task nodes.</p>
   */
  SlaveInstanceType?: string;

  /**
   * @public
   * <p>The number of Amazon EC2 instances in the cluster.</p>
   */
  InstanceCount?: number;

  /**
   * @public
   * <p>Configuration for the instance groups in a cluster.</p>
   */
  InstanceGroups?: InstanceGroupConfig[];

  /**
   * @public
   * <note>
   *             <p>The instance fleet configuration is available only in Amazon EMR releases
   *             4.8.0 and later, excluding 5.0.x versions.</p>
   *          </note>
   *          <p>Describes the Amazon EC2 instances and instance configurations for clusters that
   *          use the instance fleet configuration.</p>
   */
  InstanceFleets?: InstanceFleetConfig[];

  /**
   * @public
   * <p>The name of the Amazon EC2 key pair that can be used to connect to the master
   *          node using SSH as the user called "hadoop."</p>
   */
  Ec2KeyName?: string;

  /**
   * @public
   * <p>The Availability Zone in which the cluster runs.</p>
   */
  Placement?: PlacementType;

  /**
   * @public
   * <p>Specifies whether the cluster should remain available after completing all steps.
   *          Defaults to <code>true</code>. For more information about configuring cluster termination,
   *          see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html">Control Cluster Termination</a> in the <i>EMR Management
   *          Guide</i>.</p>
   */
  KeepJobFlowAliveWhenNoSteps?: boolean;

  /**
   * @public
   * <p>Specifies whether to lock the cluster to prevent the Amazon EC2 instances from
   *          being terminated by API call, user intervention, or in the event of a job-flow
   *          error.</p>
   */
  TerminationProtected?: boolean;

  /**
   * @public
   * <p>Applies only to Amazon EMR release versions earlier than 4.0. The Hadoop version
   *          for the cluster. Valid inputs are "0.18" (no longer maintained), "0.20" (no longer
   *          maintained), "0.20.205" (no longer maintained), "1.0.3", "2.2.0", or "2.4.0". If you do not
   *          set this value, the default of 0.18 is used, unless the <code>AmiVersion</code> parameter
   *          is set in the RunJobFlow call, in which case the default version of Hadoop for that AMI
   *          version is used.</p>
   */
  HadoopVersion?: string;

  /**
   * @public
   * <p>Applies to clusters that use the uniform instance group configuration. To launch the
   *          cluster in Amazon Virtual Private Cloud (Amazon VPC), set this parameter to the
   *          identifier of the Amazon VPC subnet where you want the cluster to launch. If you do
   *          not specify this value and your account supports EC2-Classic, the cluster launches in
   *          EC2-Classic.</p>
   */
  Ec2SubnetId?: string;

  /**
   * @public
   * <p>Applies to clusters that use the instance fleet configuration. When multiple Amazon EC2 subnet IDs are specified, Amazon EMR evaluates them and launches
   *          instances in the optimal subnet.</p>
   *          <note>
   *             <p>The instance fleet configuration is available only in Amazon EMR releases
   *             4.8.0 and later, excluding 5.0.x versions.</p>
   *          </note>
   */
  Ec2SubnetIds?: string[];

  /**
   * @public
   * <p>The identifier of the Amazon EC2 security group for the master node. If you
   *          specify <code>EmrManagedMasterSecurityGroup</code>, you must also specify
   *             <code>EmrManagedSlaveSecurityGroup</code>.</p>
   */
  EmrManagedMasterSecurityGroup?: string;

  /**
   * @public
   * <p>The identifier of the Amazon EC2 security group for the core and task nodes. If
   *          you specify <code>EmrManagedSlaveSecurityGroup</code>, you must also specify
   *             <code>EmrManagedMasterSecurityGroup</code>.</p>
   */
  EmrManagedSlaveSecurityGroup?: string;

  /**
   * @public
   * <p>The identifier of the Amazon EC2 security group for the Amazon EMR
   *          service to access clusters in VPC private subnets.</p>
   */
  ServiceAccessSecurityGroup?: string;

  /**
   * @public
   * <p>A list of additional Amazon EC2 security group IDs for the master node.</p>
   */
  AdditionalMasterSecurityGroups?: string[];

  /**
   * @public
   * <p>A list of additional Amazon EC2 security group IDs for the core and task
   *          nodes.</p>
   */
  AdditionalSlaveSecurityGroups?: string[];
}

/**
 * @public
 * <p> Input to the <a>RunJobFlow</a> operation. </p>
 */
export interface RunJobFlowInput {
  /**
   * @public
   * <p>The name of the job flow.</p>
   */
  Name: string | undefined;

  /**
   * @public
   * <p>The location in Amazon S3 to write the log files of the job flow. If a value is
   *          not provided, logs are not created.</p>
   */
  LogUri?: string;

  /**
   * @public
   * <p>The KMS key used for encrypting log files. If a value is not
   *          provided, the logs remain encrypted by AES-256. This attribute is only available with
   *             Amazon EMR releases 5.30.0 and later, excluding Amazon EMR 6.0.0.</p>
   */
  LogEncryptionKmsKeyId?: string;

  /**
   * @public
   * <p>A JSON string for selecting additional features.</p>
   */
  AdditionalInfo?: string;

  /**
   * @public
   * <p>Applies only to Amazon EMR AMI versions 3.x and 2.x. For Amazon EMR
   *          releases 4.0 and later, <code>ReleaseLabel</code> is used. To specify a custom AMI, use
   *             <code>CustomAmiID</code>.</p>
   */
  AmiVersion?: string;

  /**
   * @public
   * <p>The Amazon EMR release label, which determines the version of open-source
   *          application packages installed on the cluster. Release labels are in the form
   *             <code>emr-x.x.x</code>, where x.x.x is an Amazon EMR release version such as
   *             <code>emr-5.14.0</code>. For more information about Amazon EMR release versions
   *          and included application versions and features, see <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/">https://docs.aws.amazon.com/emr/latest/ReleaseGuide/</a>. The release label applies only to Amazon EMR
   *          releases version 4.0 and later. Earlier versions use <code>AmiVersion</code>.</p>
   */
  ReleaseLabel?: string;

  /**
   * @public
   * <p>A specification of the number and type of Amazon EC2 instances.</p>
   */
  Instances: JobFlowInstancesConfig | undefined;

  /**
   * @public
   * <p>A list of steps to run.</p>
   */
  Steps?: StepConfig[];

  /**
   * @public
   * <p>A list of bootstrap actions to run before Hadoop starts on the cluster nodes.</p>
   */
  BootstrapActions?: BootstrapActionConfig[];

  /**
   * @public
   * <note>
   *             <p>For Amazon EMR releases 3.x and 2.x. For Amazon EMR releases 4.x and
   *             later, use Applications.</p>
   *          </note>
   *          <p>A list of strings that indicates third-party software to use. For more information, see
   *          the <a href="https://docs.aws.amazon.com/emr/latest/DeveloperGuide/emr-dg.pdf">Amazon EMR Developer Guide</a>. Currently supported values are:</p>
   *          <ul>
   *             <li>
   *                <p>"mapr-m3" - launch the job flow using MapR M3 Edition.</p>
   *             </li>
   *             <li>
   *                <p>"mapr-m5" - launch the job flow using MapR M5 Edition.</p>
   *             </li>
   *          </ul>
   */
  SupportedProducts?: string[];

  /**
   * @public
   * <note>
   *             <p>For Amazon EMR releases 3.x and 2.x. For Amazon EMR releases 4.x and
   *             later, use Applications.</p>
   *          </note>
   *          <p>A list of strings that indicates third-party software to use with the job flow that
   *          accepts a user argument list. Amazon EMR accepts and forwards the argument list to
   *          the corresponding installation script as bootstrap action arguments. For more information,
   *          see "Launch a Job Flow on the MapR Distribution for Hadoop" in the <a href="https://docs.aws.amazon.com/emr/latest/DeveloperGuide/emr-dg.pdf">Amazon EMR
   *             Developer Guide</a>. Supported values are:</p>
   *          <ul>
   *             <li>
   *                <p>"mapr-m3" - launch the cluster using MapR M3 Edition.</p>
   *             </li>
   *             <li>
   *                <p>"mapr-m5" - launch the cluster using MapR M5 Edition.</p>
   *             </li>
   *             <li>
   *                <p>"mapr" with the user arguments specifying "--edition,m3" or "--edition,m5" -
   *                launch the job flow using MapR M3 or M5 Edition respectively.</p>
   *             </li>
   *             <li>
   *                <p>"mapr-m7" - launch the cluster using MapR M7 Edition.</p>
   *             </li>
   *             <li>
   *                <p>"hunk" - launch the cluster with the Hunk Big Data Analytics Platform.</p>
   *             </li>
   *             <li>
   *                <p>"hue"- launch the cluster with Hue installed.</p>
   *             </li>
   *             <li>
   *                <p>"spark" - launch the cluster with Apache Spark installed.</p>
   *             </li>
   *             <li>
   *                <p>"ganglia" - launch the cluster with the Ganglia Monitoring System
   *                installed.</p>
   *             </li>
   *          </ul>
   */
  NewSupportedProducts?: SupportedProductConfig[];

  /**
   * @public
   * <p>Applies to Amazon EMR releases 4.0 and later. A case-insensitive list of
   *          applications for Amazon EMR to install and configure when launching the cluster.
   *          For a list of applications available for each Amazon EMR release version, see the
   *             <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/">Amazon EMRRelease
   *             Guide</a>.</p>
   */
  Applications?: Application[];

  /**
   * @public
   * <p>For Amazon EMR releases 4.0 and later. The list of configurations supplied for
   *          the Amazon EMR cluster that you are creating.</p>
   */
  Configurations?: Configuration[];

  /**
   * @public
   * <important>
   *             <p>The VisibleToAllUsers parameter is no longer supported. By default, the value is set
   *             to <code>true</code>. Setting it to <code>false</code> now has no effect.</p>
   *          </important>
   *          <p>Set this value to <code>true</code> so that IAM principals in the Amazon Web Services account associated with the cluster can perform Amazon EMR actions on
   *          the cluster that their IAM policies allow. This value defaults to
   *             <code>true</code> for clusters created using the Amazon EMR API or the CLI
   *          <a href="https://docs.aws.amazon.com/cli/latest/reference/emr/create-cluster.html">create-cluster</a> command.</p>
   *          <p>When set to <code>false</code>, only the IAM principal that created the
   *          cluster and the Amazon Web Services account root user can perform Amazon EMR actions
   *          for the cluster, regardless of the IAM permissions policies attached to
   *          other IAM principals. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/security_IAM_emr-with-IAM.html#security_set_visible_to_all_users">Understanding the Amazon EMR cluster VisibleToAllUsers setting</a> in the
   *                <i>Amazon EMR Management Guide</i>.</p>
   */
  VisibleToAllUsers?: boolean;

  /**
   * @public
   * <p>Also called instance profile and Amazon EC2 role. An IAM role for
   *          an Amazon EMR cluster. The Amazon EC2 instances of the cluster assume this
   *          role. The default role is <code>EMR_EC2_DefaultRole</code>. In order to use the default
   *          role, you must have already created it using the CLI or console.</p>
   */
  JobFlowRole?: string;

  /**
   * @public
   * <p>The IAM role that Amazon EMR assumes in order to access Amazon Web Services resources on your behalf. If you've created a custom service role path, you
   *          must specify it for the service role when you launch your cluster.</p>
   */
  ServiceRole?: string;

  /**
   * @public
   * <p>A list of tags to associate with a cluster and propagate to Amazon EC2
   *          instances.</p>
   */
  Tags?: Tag[];

  /**
   * @public
   * <p>The name of a security configuration to apply to the cluster.</p>
   */
  SecurityConfiguration?: string;

  /**
   * @public
   * <p>An IAM role for automatic scaling policies. The default role is
   *             <code>EMR_AutoScaling_DefaultRole</code>. The IAM role provides
   *          permissions that the automatic scaling feature requires to launch and terminate Amazon EC2 instances in an instance group.</p>
   */
  AutoScalingRole?: string;

  /**
   * @public
   * <p>Specifies the way that individual Amazon EC2 instances terminate when an
   *          automatic scale-in activity occurs or an instance group is resized.
   *             <code>TERMINATE_AT_INSTANCE_HOUR</code> indicates that Amazon EMR terminates
   *          nodes at the instance-hour boundary, regardless of when the request to terminate the
   *          instance was submitted. This option is only available with Amazon EMR 5.1.0 and
   *          later and is the default for clusters created using that version.
   *             <code>TERMINATE_AT_TASK_COMPLETION</code> indicates that Amazon EMR adds nodes
   *          to a deny list and drains tasks from nodes before terminating the Amazon EC2
   *          instances, regardless of the instance-hour boundary. With either behavior, Amazon EMR removes the least active nodes first and blocks instance termination if it could lead to
   *          HDFS corruption. <code>TERMINATE_AT_TASK_COMPLETION</code> available only in Amazon EMR releases 4.1.0 and later, and is the default for releases of Amazon EMR earlier than 5.1.0.</p>
   */
  ScaleDownBehavior?: ScaleDownBehavior;

  /**
   * @public
   * <p>Available only in Amazon EMR releases 5.7.0 and later. The ID of a custom Amazon
   *          EBS-backed Linux AMI. If specified, Amazon EMR uses this AMI when it launches
   *          cluster Amazon EC2 instances. For more information about custom AMIs in Amazon EMR, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-custom-ami.html">Using a Custom AMI</a> in the
   *                <i>Amazon EMR Management Guide</i>. If omitted, the cluster
   *          uses the base Linux AMI for the <code>ReleaseLabel</code> specified. For Amazon EMR
   *          releases 2.x and 3.x, use <code>AmiVersion</code> instead.</p>
   *          <p>For information about creating a custom AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami-ebs.html">Creating an Amazon EBS-Backed Linux AMI</a> in the <i>Amazon Elastic Compute Cloud User Guide for Linux
   *             Instances</i>. For information about finding an AMI ID, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/finding-an-ami.html">Finding a Linux
   *             AMI</a>. </p>
   */
  CustomAmiId?: string;

  /**
   * @public
   * <p>The size, in GiB, of the Amazon EBS root device volume of the Linux AMI that is
   *          used for each Amazon EC2 instance. Available in Amazon EMR releases 4.x and
   *          later.</p>
   */
  EbsRootVolumeSize?: number;

  /**
   * @public
   * <p>Applies only when <code>CustomAmiID</code> is used. Specifies which updates from the
   *          Amazon Linux AMI package repositories to apply automatically when the instance boots using
   *          the AMI. If omitted, the default is <code>SECURITY</code>, which indicates that only
   *          security updates are applied. If <code>NONE</code> is specified, no updates are applied,
   *          and all updates must be applied manually.</p>
   */
  RepoUpgradeOnBoot?: RepoUpgradeOnBoot;

  /**
   * @public
   * <p>Attributes for Kerberos configuration when Kerberos authentication is enabled using a
   *          security configuration. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html">Use Kerberos Authentication</a>
   *          in the <i>Amazon EMR Management Guide</i>.</p>
   */
  KerberosAttributes?: KerberosAttributes;

  /**
   * @public
   * <p>Specifies the number of steps that can be executed concurrently. The default value is
   *             <code>1</code>. The maximum value is <code>256</code>.</p>
   */
  StepConcurrencyLevel?: number;

  /**
   * @public
   * <p> The specified managed scaling policy for an Amazon EMR cluster. </p>
   */
  ManagedScalingPolicy?: ManagedScalingPolicy;

  /**
   * @public
   * <p>The specified placement group configuration for an Amazon EMR cluster.</p>
   */
  PlacementGroupConfigs?: PlacementGroupConfig[];

  /**
   * @public
   * <p>An auto-termination policy for an Amazon EMR cluster. An auto-termination policy
   *          defines the amount of idle time in seconds after which a cluster automatically terminates.
   *          For alternative cluster termination options, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html">Control cluster
   *             termination</a>.</p>
   */
  AutoTerminationPolicy?: AutoTerminationPolicy;

  /**
   * @public
   * <p>Specifies a particular Amazon Linux release for all nodes in a cluster launch RunJobFlow
   *          request. If a release is not specified, Amazon EMR uses the latest validated Amazon
   *          Linux release for cluster launch.</p>
   */
  OSReleaseLabel?: string;
}

/**
 * @internal
 */
export const UsernamePasswordFilterSensitiveLog = (obj: UsernamePassword): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CredentialsFilterSensitiveLog = (obj: Credentials): any => {
  if (obj.UsernamePassword !== undefined) return { UsernamePassword: SENSITIVE_STRING };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const GetClusterSessionCredentialsOutputFilterSensitiveLog = (obj: GetClusterSessionCredentialsOutput): any => ({
  ...obj,
  ...(obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }),
});
