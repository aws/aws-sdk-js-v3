// smithy-typescript generated code
import type {
  ActionOnFailure,
  AdjustmentType,
  AuthMode,
  AutoScalingPolicyState,
  AutoScalingPolicyStateChangeReasonCode,
  CancelStepsRequestStatus,
  ClusterState,
  ClusterStateChangeReasonCode,
  ComparisonOperator,
  ComputeLimitsUnitType,
  ExecutionEngineType,
  IdcUserAssignment,
  IdentityType,
  InstanceCollectionType,
  InstanceFleetState,
  InstanceFleetStateChangeReasonCode,
  InstanceFleetType,
  InstanceGroupState,
  InstanceGroupStateChangeReasonCode,
  InstanceGroupType,
  InstanceRoleType,
  InstanceState,
  InstanceStateChangeReasonCode,
  JobFlowExecutionState,
  LogType,
  LogUploadPolicyValue,
  MarketType,
  NotebookExecutionStatus,
  OnClusterAppUIType,
  OnDemandCapacityReservationPreference,
  OnDemandCapacityReservationUsageStrategy,
  OnDemandProvisioningAllocationStrategy,
  OutputNotebookFormat,
  PersistentAppUIType,
  PlacementGroupStrategy,
  ProfilerType,
  ReconfigurationType,
  RepoUpgradeOnBoot,
  ScaleDownBehavior,
  ScalingStrategy,
  SessionState,
  SpotProvisioningAllocationStrategy,
  SpotProvisioningTimeoutAction,
  Statistic,
  StepCancellationOption,
  StepExecutionState,
  StepState,
  StepStateChangeReasonCode,
  Unit,
} from "./enums";

/**
 * EBS volume specifications such as volume type, IOPS, size (GiB) and throughput (MiB/s) that are requested for the EBS volume attached to an Amazon EC2 instance in the cluster.
 *
 * @public
 */
export interface VolumeSpecification {
  /**
   * The volume type. Volume types supported are gp3, gp2, io1, st1, sc1, and standard.
   *
   * @public
   */
  VolumeType: string | undefined;

  /**
   * The number of I/O operations per second (IOPS) that the volume supports.
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * The volume size, in gibibytes (GiB). This can be a number from 1 - 1024. If the volume type is EBS-optimized, the minimum value is 10.
   *
   * @public
   */
  SizeInGB: number | undefined;

  /**
   * The throughput, in mebibyte per second (MiB/s). This optional parameter can be a number from 125 - 1000 and is valid only for gp3 volumes.
   *
   * @public
   */
  Throughput?: number | undefined;
}

/**
 * Configuration of requested EBS block device associated with the instance group with count of volumes that are associated to every instance.
 *
 * @public
 */
export interface EbsBlockDeviceConfig {
  /**
   * EBS volume specifications such as volume type, IOPS, size (GiB) and throughput (MiB/s) that are requested for the EBS volume attached to an Amazon EC2 instance in the cluster.
   *
   * @public
   */
  VolumeSpecification: VolumeSpecification | undefined;

  /**
   * Number of EBS volumes with a specific volume configuration that are associated with every instance in the instance group
   *
   * @public
   */
  VolumesPerInstance?: number | undefined;
}

/**
 * The Amazon EBS configuration of a cluster instance.
 *
 * @public
 */
export interface EbsConfiguration {
  /**
   * An array of Amazon EBS volume specifications attached to a cluster instance.
   *
   * @public
   */
  EbsBlockDeviceConfigs?: EbsBlockDeviceConfig[] | undefined;

  /**
   * Indicates whether an Amazon EBS volume is EBS-optimized. The default is false. You should explicitly set this value to true to enable the Amazon EBS-optimized setting for an EC2 instance.
   *
   * @public
   */
  EbsOptimized?: boolean | undefined;
}

/**
 * Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand capacity.
 *
 * @public
 */
export interface OnDemandCapacityReservationOptions {
  /**
   * Indicates whether to use unused Capacity Reservations for fulfilling On-Demand capacity.
   *
   * If you specify `use-capacity-reservations-first`, the fleet uses unused Capacity Reservations to fulfill On-Demand capacity up to the target On-Demand capacity. If multiple instance pools have unused Capacity Reservations, the On-Demand allocation strategy (`lowest-price`) is applied. If the number of unused Capacity Reservations is less than the On-Demand target capacity, the remaining On-Demand target capacity is launched according to the On-Demand allocation strategy (`lowest-price`).
   *
   * If you do not specify a value, the fleet fulfills the On-Demand capacity according to the chosen On-Demand allocation strategy.
   *
   * @public
   */
  UsageStrategy?: OnDemandCapacityReservationUsageStrategy | undefined;

  /**
   * Indicates the instance's Capacity Reservation preferences. Possible preferences include:
   *
   * - `open` - The instance can run in any open Capacity Reservation that has matching attributes (instance type, platform, Availability Zone).
   * - `none` - The instance avoids running in a Capacity Reservation even if one is available. The instance runs as an On-Demand Instance.
   *
   * @public
   */
  CapacityReservationPreference?: OnDemandCapacityReservationPreference | undefined;

  /**
   * The ARN of the Capacity Reservation resource group in which to run the instance.
   *
   * @public
   */
  CapacityReservationResourceGroupArn?: string | undefined;
}

/**
 * The launch specification for On-Demand Instances in the instance fleet, which determines the allocation strategy.
 *
 * > **Note:** The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions. On-Demand Instances allocation strategy is available in Amazon EMR releases 5.12.1 and later.
 *
 * @public
 */
export interface OnDemandProvisioningSpecification {
  /**
   * Specifies the strategy to use in launching On-Demand instance fleets. Available options are `lowest-price` and `prioritized`. `lowest-price` specifies to launch the instances with the lowest price first, and `prioritized` specifies that Amazon EMR should launch the instances with the highest priority first. The default is `lowest-price`.
   *
   * @public
   */
  AllocationStrategy: OnDemandProvisioningAllocationStrategy | undefined;

  /**
   * The launch specification for On-Demand instances in the instance fleet, which determines the allocation strategy.
   *
   * @public
   */
  CapacityReservationOptions?: OnDemandCapacityReservationOptions | undefined;
}

/**
 * The launch specification for Spot Instances in the instance fleet, which determines the defined duration, provisioning timeout behavior, and allocation strategy.
 *
 * > **Note:** The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions. Spot Instance allocation strategy is available in Amazon EMR releases 5.12.1 and later.
 *
 * > **Note:** Spot Instances with a defined duration (also known as Spot blocks) are no longer available to new customers from July 1, 2021. For customers who have previously used the feature, we will continue to support Spot Instances with a defined duration until December 31, 2022.
 *
 * @public
 */
export interface SpotProvisioningSpecification {
  /**
   * The Spot provisioning timeout period in minutes. If Spot Instances are not provisioned within this time period, the `TimeOutAction` is taken. Minimum value is 5 and maximum value is 1440. The timeout applies only during initial provisioning, when the cluster is first created.
   *
   * @public
   */
  TimeoutDurationMinutes: number | undefined;

  /**
   * The action to take when `TargetSpotCapacity` has not been fulfilled when the `TimeoutDurationMinutes` has expired; that is, when all Spot Instances could not be provisioned within the Spot provisioning timeout. Valid values are `TERMINATE_CLUSTER` and `SWITCH_TO_ON_DEMAND`. SWITCH_TO_ON_DEMAND specifies that if no Spot Instances are available, On-Demand Instances should be provisioned to fulfill any remaining Spot capacity.
   *
   * @public
   */
  TimeoutAction: SpotProvisioningTimeoutAction | undefined;

  /**
   * The defined duration for Spot Instances (also known as Spot blocks) in minutes. When specified, the Spot Instance does not terminate before the defined duration expires, and defined duration pricing for Spot Instances applies. Valid values are 60, 120, 180, 240, 300, or 360. The duration period starts as soon as a Spot Instance receives its instance ID. At the end of the duration, Amazon EC2 marks the Spot Instance for termination and provides a Spot Instance termination notice, which gives the instance a two-minute warning before it terminates.
   *
   * > **Note:** Spot Instances with a defined duration (also known as Spot blocks) are no longer available to new customers from July 1, 2021. For customers who have previously used the feature, we will continue to support Spot Instances with a defined duration until December 31, 2022.
   *
   * @public
   */
  BlockDurationMinutes?: number | undefined;

  /**
   * Specifies one of the following strategies to launch Spot Instance fleets: `capacity-optimized`, `price-capacity-optimized`, `lowest-price`, or `diversified`, and `capacity-optimized-prioritized`. For more information on the provisioning strategies, see [Allocation strategies for Spot Instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-allocation-strategy.html) in the *Amazon EC2 User Guide for Linux Instances*.
   *
   * > **Note:** When you launch a Spot Instance fleet with the old console, it automatically launches with the `capacity-optimized` strategy. You can't change the allocation strategy from the old console.
   *
   * @public
   */
  AllocationStrategy?: SpotProvisioningAllocationStrategy | undefined;
}

/**
 * The launch specification for On-Demand and Spot Instances in the fleet.
 *
 * > **Note:** The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions. On-Demand and Spot instance allocation strategies are available in Amazon EMR releases 5.12.1 and later.
 *
 * @public
 */
export interface InstanceFleetProvisioningSpecifications {
  /**
   * The launch specification for Spot instances in the fleet, which determines the allocation strategy, defined duration, and provisioning timeout behavior.
   *
   * @public
   */
  SpotSpecification?: SpotProvisioningSpecification | undefined;

  /**
   * The launch specification for On-Demand Instances in the instance fleet, which determines the allocation strategy and capacity reservation options.
   *
   * > **Note:** The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions. On-Demand Instances allocation strategy is available in Amazon EMR releases 5.12.1 and later.
   *
   * @public
   */
  OnDemandSpecification?: OnDemandProvisioningSpecification | undefined;
}

/**
 * The resize specification for On-Demand Instances in the instance fleet, which contains the resize timeout period.
 *
 * @public
 */
export interface OnDemandResizingSpecification {
  /**
   * On-Demand resize timeout in minutes. If On-Demand Instances are not provisioned within this time, the resize workflow stops. The minimum value is 5 minutes, and the maximum value is 10,080 minutes (7 days). The timeout applies to all resize workflows on the Instance Fleet. The resize could be triggered by Amazon EMR Managed Scaling or by the customer (via Amazon EMR Console, Amazon EMR CLI modify-instance-fleet or Amazon EMR SDK ModifyInstanceFleet API) or by Amazon EMR due to Amazon EC2 Spot Reclamation.
   *
   * @public
   */
  TimeoutDurationMinutes?: number | undefined;

  /**
   * Specifies the allocation strategy to use to launch On-Demand instances during a resize. The default is `lowest-price`.
   *
   * @public
   */
  AllocationStrategy?: OnDemandProvisioningAllocationStrategy | undefined;

  /**
   * Describes the strategy for using unused Capacity Reservations for fulfilling On-Demand capacity.
   *
   * @public
   */
  CapacityReservationOptions?: OnDemandCapacityReservationOptions | undefined;
}

/**
 * The resize specification for Spot Instances in the instance fleet, which contains the resize timeout period.
 *
 * @public
 */
export interface SpotResizingSpecification {
  /**
   * Spot resize timeout in minutes. If Spot Instances are not provisioned within this time, the resize workflow will stop provisioning of Spot instances. Minimum value is 5 minutes and maximum value is 10,080 minutes (7 days). The timeout applies to all resize workflows on the Instance Fleet. The resize could be triggered by Amazon EMR Managed Scaling or by the customer (via Amazon EMR Console, Amazon EMR CLI modify-instance-fleet or Amazon EMR SDK ModifyInstanceFleet API) or by Amazon EMR due to Amazon EC2 Spot Reclamation.
   *
   * @public
   */
  TimeoutDurationMinutes?: number | undefined;

  /**
   * Specifies the allocation strategy to use to launch Spot instances during a resize. If you run Amazon EMR releases 6.9.0 or higher, the default is `price-capacity-optimized`. If you run Amazon EMR releases 6.8.0 or lower, the default is `capacity-optimized`.
   *
   * @public
   */
  AllocationStrategy?: SpotProvisioningAllocationStrategy | undefined;
}

/**
 * The resize specification for On-Demand and Spot Instances in the fleet.
 *
 * @public
 */
export interface InstanceFleetResizingSpecifications {
  /**
   * The resize specification for Spot Instances in the instance fleet, which contains the allocation strategy and the resize timeout period.
   *
   * @public
   */
  SpotResizeSpecification?: SpotResizingSpecification | undefined;

  /**
   * The resize specification for On-Demand Instances in the instance fleet, which contains the allocation strategy, capacity reservation options, and the resize timeout period.
   *
   * @public
   */
  OnDemandResizeSpecification?: OnDemandResizingSpecification | undefined;
}

/**
 * @public
 */
export interface AddInstanceFleetOutput {
  /**
   * The unique identifier of the cluster.
   *
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * The unique identifier of the instance fleet.
   *
   * @public
   */
  InstanceFleetId?: string | undefined;

  /**
   * The Amazon Resource Name of the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;
}

/**
 * The upper and lower Amazon EC2 instance limits for an automatic scaling policy. Automatic scaling activities triggered by automatic scaling rules will not cause an instance group to grow above or below these limits.
 *
 * @public
 */
export interface ScalingConstraints {
  /**
   * The lower boundary of Amazon EC2 instances in an instance group below which scaling activities are not allowed to shrink. Scale-in activities will not terminate instances below this boundary.
   *
   * @public
   */
  MinCapacity: number | undefined;

  /**
   * The upper boundary of Amazon EC2 instances in an instance group beyond which scaling activities are not allowed to grow. Scale-out activities will not add instances beyond this boundary.
   *
   * @public
   */
  MaxCapacity: number | undefined;
}

/**
 * An automatic scaling configuration, which describes how the policy adds or removes instances, the cooldown period, and the number of Amazon EC2 instances that will be added each time the CloudWatch metric alarm condition is satisfied.
 *
 * @public
 */
export interface SimpleScalingPolicyConfiguration {
  /**
   * The way in which Amazon EC2 instances are added (if `ScalingAdjustment` is a positive number) or terminated (if `ScalingAdjustment` is a negative number) each time the scaling activity is triggered. `CHANGE_IN_CAPACITY` is the default. `CHANGE_IN_CAPACITY` indicates that the Amazon EC2 instance count increments or decrements by `ScalingAdjustment`, which should be expressed as an integer. `PERCENT_CHANGE_IN_CAPACITY` indicates the instance count increments or decrements by the percentage specified by `ScalingAdjustment`, which should be expressed as an integer. For example, 20 indicates an increase in 20% increments of cluster capacity. `EXACT_CAPACITY` indicates the scaling activity results in an instance group with the number of Amazon EC2 instances specified by `ScalingAdjustment`, which should be expressed as a positive integer.
   *
   * @public
   */
  AdjustmentType?: AdjustmentType | undefined;

  /**
   * The amount by which to scale in or scale out, based on the specified `AdjustmentType`. A positive value adds to the instance group's Amazon EC2 instance count while a negative number removes instances. If `AdjustmentType` is set to `EXACT_CAPACITY`, the number should only be a positive integer. If `AdjustmentType` is set to `PERCENT_CHANGE_IN_CAPACITY`, the value should express the percentage as an integer. For example, -20 indicates a decrease in 20% increments of cluster capacity.
   *
   * @public
   */
  ScalingAdjustment: number | undefined;

  /**
   * The amount of time, in seconds, after a scaling activity completes before any further trigger-related scaling activities can start. The default value is 0.
   *
   * @public
   */
  CoolDown?: number | undefined;
}

/**
 * The type of adjustment the automatic scaling activity makes when triggered, and the periodicity of the adjustment.
 *
 * @public
 */
export interface ScalingAction {
  /**
   * Not available for instance groups. Instance groups use the market type specified for the group.
   *
   * @public
   */
  Market?: MarketType | undefined;

  /**
   * The type of adjustment the automatic scaling activity makes when triggered, and the periodicity of the adjustment.
   *
   * @public
   */
  SimpleScalingPolicyConfiguration: SimpleScalingPolicyConfiguration | undefined;
}

/**
 * A CloudWatch dimension, which is specified using a `Key` (known as a `Name` in CloudWatch), `Value` pair. By default, Amazon EMR uses one dimension whose `Key` is `JobFlowID` and `Value` is a variable representing the cluster ID, which is `$\{emr.clusterId\}`. This enables the rule to bootstrap when the cluster ID becomes available.
 *
 * @public
 */
export interface MetricDimension {
  /**
   * The dimension name.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The dimension value.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * The definition of a CloudWatch metric alarm, which determines when an automatic scaling activity is triggered. When the defined alarm conditions are satisfied, scaling activity begins.
 *
 * @public
 */
export interface CloudWatchAlarmDefinition {
  /**
   * Determines how the metric specified by `MetricName` is compared to the value specified by `Threshold`.
   *
   * @public
   */
  ComparisonOperator: ComparisonOperator | undefined;

  /**
   * The number of periods, in five-minute increments, during which the alarm condition must exist before the alarm triggers automatic scaling activity. The default value is `1`.
   *
   * @public
   */
  EvaluationPeriods?: number | undefined;

  /**
   * The name of the CloudWatch metric that is watched to determine an alarm condition.
   *
   * @public
   */
  MetricName: string | undefined;

  /**
   * The namespace for the CloudWatch metric. The default is `AWS/ElasticMapReduce`.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The period, in seconds, over which the statistic is applied. CloudWatch metrics for Amazon EMR are emitted every five minutes (300 seconds), so if you specify a CloudWatch metric, specify `300`.
   *
   * @public
   */
  Period: number | undefined;

  /**
   * The statistic to apply to the metric associated with the alarm. The default is `AVERAGE`.
   *
   * @public
   */
  Statistic?: Statistic | undefined;

  /**
   * The value against which the specified statistic is compared.
   *
   * @public
   */
  Threshold: number | undefined;

  /**
   * The unit of measure associated with the CloudWatch metric being watched. The value specified for `Unit` must correspond to the units specified in the CloudWatch metric.
   *
   * @public
   */
  Unit?: Unit | undefined;

  /**
   * A CloudWatch metric dimension.
   *
   * @public
   */
  Dimensions?: MetricDimension[] | undefined;
}

/**
 * The conditions that trigger an automatic scaling activity.
 *
 * @public
 */
export interface ScalingTrigger {
  /**
   * The definition of a CloudWatch metric alarm. When the defined alarm conditions are met along with other trigger parameters, scaling activity begins.
   *
   * @public
   */
  CloudWatchAlarmDefinition: CloudWatchAlarmDefinition | undefined;
}

/**
 * A scale-in or scale-out rule that defines scaling activity, including the CloudWatch metric alarm that triggers activity, how Amazon EC2 instances are added or removed, and the periodicity of adjustments. The automatic scaling policy for an instance group can comprise one or more automatic scaling rules.
 *
 * @public
 */
export interface ScalingRule {
  /**
   * The name used to identify an automatic scaling rule. Rule names must be unique within a scaling policy.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A friendly, more verbose description of the automatic scaling rule.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The conditions that trigger an automatic scaling activity.
   *
   * @public
   */
  Action: ScalingAction | undefined;

  /**
   * The CloudWatch alarm definition that determines when automatic scaling activity is triggered.
   *
   * @public
   */
  Trigger: ScalingTrigger | undefined;
}

/**
 * An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. An automatic scaling policy defines how an instance group dynamically adds and terminates Amazon EC2 instances in response to the value of a CloudWatch metric. See PutAutoScalingPolicy.
 *
 * @public
 */
export interface AutoScalingPolicy {
  /**
   * The upper and lower Amazon EC2 instance limits for an automatic scaling policy. Automatic scaling activity will not cause an instance group to grow above or below these limits.
   *
   * @public
   */
  Constraints: ScalingConstraints | undefined;

  /**
   * The scale-in and scale-out rules that comprise the automatic scaling policy.
   *
   * @public
   */
  Rules: ScalingRule[] | undefined;
}

/**
 * Output from an AddInstanceGroups call.
 *
 * @public
 */
export interface AddInstanceGroupsOutput {
  /**
   * The job flow ID in which the instance groups are added.
   *
   * @public
   */
  JobFlowId?: string | undefined;

  /**
   * Instance group IDs of the newly created instance groups.
   *
   * @public
   */
  InstanceGroupIds?: string[] | undefined;

  /**
   * The Amazon Resource Name of the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;
}

/**
 * A key-value pair.
 *
 * @public
 */
export interface KeyValue {
  /**
   * The unique identifier of a key-value pair.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The value part of the identified key.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * A job flow step consisting of a JAR file whose main function will be executed. The main function submits a job for Hadoop to execute and waits for the job to finish or fail.
 *
 * @public
 */
export interface HadoopJarStepConfig {
  /**
   * A list of Java properties that are set when the step runs. You can use these properties to pass key-value pairs to your main function.
   *
   * @public
   */
  Properties?: KeyValue[] | undefined;

  /**
   * A path to a JAR file run during the step.
   *
   * @public
   */
  Jar: string | undefined;

  /**
   * The name of the main class in the specified Java file. If not specified, the JAR file should specify a Main-Class in its manifest file.
   *
   * @public
   */
  MainClass?: string | undefined;

  /**
   * A list of command line arguments passed to the JAR file's main function when executed.
   *
   * @public
   */
  Args?: string[] | undefined;
}

/**
 * The Amazon S3 configuration for monitoring log publishing. You can configure your step to send log information to Amazon S3. When it's specified, it takes precedence over the cluster's logging configuration. If you don't specify this configuration entirely, or omit individual fields, EMR falls back to cluster-level logging behavior.
 *
 * @public
 */
export interface S3MonitoringConfiguration {
  /**
   * The Amazon S3 destination URI for log publishing.
   *
   * @public
   */
  LogUri?: string | undefined;

  /**
   * The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;
}

/**
 * Object that holds configuration properties for logging.
 *
 * @public
 */
export interface StepMonitoringConfiguration {
  /**
   * The Amazon S3 configuration for monitoring log publishing. You can configure your step to send log information to Amazon S3. When it's specified, it takes precedence over the cluster's logging configuration. If you don't specify this configuration entirely, or omit individual fields, EMR falls back to cluster-level logging behavior.
   *
   * @public
   */
  S3MonitoringConfiguration?: S3MonitoringConfiguration | undefined;
}

/**
 * Specification for a cluster (job flow) step.
 *
 * @public
 */
export interface StepConfig {
  /**
   * The name of the step.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The action to take when the step fails. Use one of the following values:
   *
   * - `TERMINATE_CLUSTER` - Shuts down the cluster.
   * - `CANCEL_AND_WAIT` - Cancels any pending steps and returns the cluster to the `WAITING` state.
   * - `CONTINUE` - Continues to the next step in the queue.
   * - `TERMINATE_JOB_FLOW` - Shuts down the cluster. `TERMINATE_JOB_FLOW` is provided for backward compatibility. We recommend using `TERMINATE_CLUSTER` instead.
   *
   * If a cluster's `StepConcurrencyLevel` is greater than `1`, do not use `AddJobFlowSteps` to submit a step with this parameter set to `CANCEL_AND_WAIT` or `TERMINATE_CLUSTER`. The step is not submitted and the action fails with a message that the `ActionOnFailure` setting is not valid.
   *
   * If you change a cluster's `StepConcurrencyLevel` to be greater than 1 while a step is running, the `ActionOnFailure` parameter may not behave as you expect. In this case, for a step that fails with this parameter set to `CANCEL_AND_WAIT`, pending steps and the running step are not canceled; for a step that fails with this parameter set to `TERMINATE_CLUSTER`, the cluster does not terminate.
   *
   * @public
   */
  ActionOnFailure?: ActionOnFailure | undefined;

  /**
   * The JAR file used for the step.
   *
   * @public
   */
  HadoopJarStep: HadoopJarStepConfig | undefined;

  /**
   * Object that holds configuration properties for logging.
   *
   * @public
   */
  StepMonitoringConfiguration?: StepMonitoringConfiguration | undefined;
}

/**
 * The input argument to the AddJobFlowSteps operation.
 *
 * @public
 */
export interface AddJobFlowStepsInput {
  /**
   * A string that uniquely identifies the job flow. This identifier is returned by RunJobFlow and can also be obtained from ListClusters.
   *
   * @public
   */
  JobFlowId: string | undefined;

  /**
   * A list of StepConfig to be executed by the job flow.
   *
   * @public
   */
  Steps: StepConfig[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the runtime role for a step on the cluster. The runtime role can be a cross-account IAM role. The runtime role ARN is a combination of account ID, role name, and role type using the following format: `arn:partition:service:region:account:resource`.
   *
   * For example, `arn:aws:IAM::1234567890:role/ReadOnly` is a correctly formatted runtime role ARN.
   *
   * @public
   */
  ExecutionRoleArn?: string | undefined;
}

/**
 * The output for the AddJobFlowSteps operation.
 *
 * @public
 */
export interface AddJobFlowStepsOutput {
  /**
   * The identifiers of the list of steps added to the job flow.
   *
   * @public
   */
  StepIds?: string[] | undefined;
}

/**
 * A key-value pair containing user-defined metadata that you can associate with an Amazon EMR resource. Tags make it easier to associate clusters in various ways, such as grouping clusters to track your Amazon EMR resource allocation costs. For more information, see [Tag Clusters](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html).
 *
 * @public
 */
export interface Tag {
  /**
   * A user-defined key, which is the minimum required information for a valid tag. For more information, see [Tag](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html).
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * A user-defined value, which is optional in a tag. For more information, see [Tag Clusters](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html).
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * This input identifies an Amazon EMR resource and a list of tags to attach.
 *
 * @public
 */
export interface AddTagsInput {
  /**
   * The Amazon EMR resource identifier to which tags will be added. For example, a cluster identifier or an Amazon EMR Studio ID.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * A list of tags to associate with a resource. Tags are user-defined key-value pairs that consist of a required key string with a maximum of 128 characters, and an optional value string with a maximum of 256 characters.
   *
   * @public
   */
  Tags: Tag[] | undefined;

  /**
   * The ID of the cluster that scopes the tag operation. Required when the resource being tagged is a session-scoped resource.
   *
   * @public
   */
  ClusterId?: string | undefined;
}

/**
 * This output indicates the result of adding tags to a resource.
 *
 * @public
 */
export interface AddTagsOutput {}

/**
 * With Amazon EMR release version 4.0 and later, the only accepted parameter is the application name. To pass arguments to applications, you use configuration classifications specified using configuration JSON objects. For more information, see [Configuring Applications](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html).
 *
 * With earlier Amazon EMR releases, the application is any Amazon or third-party software that you can add to the cluster. This structure contains a list of strings that indicates the software to use with the cluster and accepts a user argument list. Amazon EMR accepts and forwards the argument list to the corresponding installation script as bootstrap action argument.
 *
 * @public
 */
export interface Application {
  /**
   * The name of the application.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The version of the application.
   *
   * @public
   */
  Version?: string | undefined;

  /**
   * Arguments for Amazon EMR to pass to the application.
   *
   * @public
   */
  Args?: string[] | undefined;

  /**
   * This option is for advanced users only. This is meta information about third-party applications that third-party vendors use for testing purposes.
   *
   * @public
   */
  AdditionalInfo?: Record<string, string> | undefined;
}

/**
 * The reason for an AutoScalingPolicyStatus change.
 *
 * @public
 */
export interface AutoScalingPolicyStateChangeReason {
  /**
   * The code indicating the reason for the change in status.`USER_REQUEST` indicates that the scaling policy status was changed by a user. `PROVISION_FAILURE` indicates that the status change was because the policy failed to provision. `CLEANUP_FAILURE` indicates an error.
   *
   * @public
   */
  Code?: AutoScalingPolicyStateChangeReasonCode | undefined;

  /**
   * A friendly, more verbose message that accompanies an automatic scaling policy state change.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * The status of an automatic scaling policy.
 *
 * @public
 */
export interface AutoScalingPolicyStatus {
  /**
   * Indicates the status of the automatic scaling policy.
   *
   * @public
   */
  State?: AutoScalingPolicyState | undefined;

  /**
   * The reason for a change in status.
   *
   * @public
   */
  StateChangeReason?: AutoScalingPolicyStateChangeReason | undefined;
}

/**
 * An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates Amazon EC2 instances in response to the value of a CloudWatch metric. See PutAutoScalingPolicy.
 *
 * @public
 */
export interface AutoScalingPolicyDescription {
  /**
   * The status of an automatic scaling policy.
   *
   * @public
   */
  Status?: AutoScalingPolicyStatus | undefined;

  /**
   * The upper and lower Amazon EC2 instance limits for an automatic scaling policy. Automatic scaling activity will not cause an instance group to grow above or below these limits.
   *
   * @public
   */
  Constraints?: ScalingConstraints | undefined;

  /**
   * The scale-in and scale-out rules that comprise the automatic scaling policy.
   *
   * @public
   */
  Rules?: ScalingRule[] | undefined;
}

/**
 * An auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. For alternative cluster termination options, see [Control cluster termination](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html).
 *
 * @public
 */
export interface AutoTerminationPolicy {
  /**
   * Specifies the amount of idle time in seconds after which the cluster automatically terminates. You can specify a minimum of 60 seconds and a maximum of 604800 seconds (seven days).
   *
   * @public
   */
  IdleTimeout?: number | undefined;
}

/**
 * A list of port ranges that are permitted to allow inbound traffic from all public IP addresses. To specify a single port, use the same value for `MinRange` and `MaxRange`.
 *
 * @public
 */
export interface PortRange {
  /**
   * The smallest port number in a specified range of port numbers.
   *
   * @public
   */
  MinRange: number | undefined;

  /**
   * The smallest port number in a specified range of port numbers.
   *
   * @public
   */
  MaxRange?: number | undefined;
}

/**
 * Properties that describe the Amazon Web Services principal that created the `BlockPublicAccessConfiguration` using the `PutBlockPublicAccessConfiguration` action as well as the date and time that the configuration was created. Each time a configuration for block public access is updated, Amazon EMR updates this metadata.
 *
 * @public
 */
export interface BlockPublicAccessConfigurationMetadata {
  /**
   * The date and time that the configuration was created.
   *
   * @public
   */
  CreationDateTime: Date | undefined;

  /**
   * The Amazon Resource Name that created or last modified the configuration.
   *
   * @public
   */
  CreatedByArn: string | undefined;
}

/**
 * Configuration of the script to run during a bootstrap action.
 *
 * @public
 */
export interface ScriptBootstrapActionConfig {
  /**
   * Location in Amazon S3 of the script to run during a bootstrap action.
   *
   * @public
   */
  Path: string | undefined;

  /**
   * A list of command line arguments to pass to the bootstrap action script.
   *
   * @public
   */
  Args?: string[] | undefined;
}

/**
 * Configuration of a bootstrap action.
 *
 * @public
 */
export interface BootstrapActionConfig {
  /**
   * The name of the bootstrap action.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The script run by the bootstrap action.
   *
   * @public
   */
  ScriptBootstrapAction: ScriptBootstrapActionConfig | undefined;
}

/**
 * Reports the configuration of a bootstrap action in a cluster (job flow).
 *
 * @public
 */
export interface BootstrapActionDetail {
  /**
   * A description of the bootstrap action.
   *
   * @public
   */
  BootstrapActionConfig?: BootstrapActionConfig | undefined;
}

/**
 * The input argument to the CancelSteps operation.
 *
 * @public
 */
export interface CancelStepsInput {
  /**
   * The `ClusterID` for the specified steps that will be canceled. Use RunJobFlow and ListClusters to get ClusterIDs.
   *
   * @public
   */
  ClusterId: string | undefined;

  /**
   * The list of `StepIDs` to cancel. Use ListSteps to get steps and their states for the specified cluster.
   *
   * @public
   */
  StepIds: string[] | undefined;

  /**
   * The option to choose to cancel `RUNNING` steps. By default, the value is `SEND_INTERRUPT`.
   *
   * @public
   */
  StepCancellationOption?: StepCancellationOption | undefined;
}

/**
 * Specification of the status of a CancelSteps request. Available only in Amazon EMR version 4.8.0 and later, excluding version 5.0.0.
 *
 * @public
 */
export interface CancelStepsInfo {
  /**
   * The encrypted StepId of a step.
   *
   * @public
   */
  StepId?: string | undefined;

  /**
   * The status of a CancelSteps Request. The value may be SUBMITTED or FAILED.
   *
   * @public
   */
  Status?: CancelStepsRequestStatus | undefined;

  /**
   * The reason for the failure if the CancelSteps request fails.
   *
   * @public
   */
  Reason?: string | undefined;
}

/**
 * The output for the CancelSteps operation.
 *
 * @public
 */
export interface CancelStepsOutput {
  /**
   * A list of CancelStepsInfo, which shows the status of specified cancel requests for each `StepID` specified.
   *
   * @public
   */
  CancelStepsInfoList?: CancelStepsInfo[] | undefined;
}

/**
 * Holds CloudWatch log configuration settings and metadata that specify settings like log files to monitor and where to send them.
 *
 * @public
 */
export interface CloudWatchLogConfiguration {
  /**
   * Specifies if CloudWatch logging is enabled.
   *
   * @public
   */
  Enabled: boolean | undefined;

  /**
   * The name of the CloudWatch log group where logs are published.
   *
   * @public
   */
  LogGroupName?: string | undefined;

  /**
   * The prefix of the log stream name.
   *
   * @public
   */
  LogStreamNamePrefix?: string | undefined;

  /**
   * The ARN of the encryption key used to encrypt the logs.
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * A map of log types to file names for publishing logs to the standard output or standard error streams for CloudWatch. Valid log types include STEP_LOGS, SPARK_DRIVER, and SPARK_EXECUTOR. Valid file names for each type include STDOUT and STDERR.
   *
   * @public
   */
  LogTypes?: Record<string, string[]> | undefined;
}

/**
 * Provides information about the Amazon EC2 instances in a cluster grouped by category. For example, key name, subnet ID, IAM instance profile, and so on.
 *
 * @public
 */
export interface Ec2InstanceAttributes {
  /**
   * The name of the Amazon EC2 key pair to use when connecting with SSH into the master node as a user named "hadoop".
   *
   * @public
   */
  Ec2KeyName?: string | undefined;

  /**
   * Set this parameter to the identifier of the Amazon VPC subnet where you want the cluster to launch. If you do not specify this value, and your account supports EC2-Classic, the cluster launches in EC2-Classic.
   *
   * @public
   */
  Ec2SubnetId?: string | undefined;

  /**
   * Applies to clusters configured with the instance fleets option. Specifies the unique identifier of one or more Amazon EC2 subnets in which to launch Amazon EC2 cluster instances. Subnets must exist within the same VPC. Amazon EMR chooses the Amazon EC2 subnet with the best fit from among the list of `RequestedEc2SubnetIds`, and then launches all cluster instances within that Subnet. If this value is not specified, and the account and Region support EC2-Classic networks, the cluster launches instances in the EC2-Classic network and uses `RequestedEc2AvailabilityZones` instead of this setting. If EC2-Classic is not supported, and no Subnet is specified, Amazon EMR chooses the subnet for you. `RequestedEc2SubnetIDs` and `RequestedEc2AvailabilityZones` cannot be specified together.
   *
   * @public
   */
  RequestedEc2SubnetIds?: string[] | undefined;

  /**
   * The Availability Zone in which the cluster will run.
   *
   * @public
   */
  Ec2AvailabilityZone?: string | undefined;

  /**
   * Applies to clusters configured with the instance fleets option. Specifies one or more Availability Zones in which to launch Amazon EC2 cluster instances when the EC2-Classic network configuration is supported. Amazon EMR chooses the Availability Zone with the best fit from among the list of `RequestedEc2AvailabilityZones`, and then launches all cluster instances within that Availability Zone. If you do not specify this value, Amazon EMR chooses the Availability Zone for you. `RequestedEc2SubnetIDs` and `RequestedEc2AvailabilityZones` cannot be specified together.
   *
   * @public
   */
  RequestedEc2AvailabilityZones?: string[] | undefined;

  /**
   * The IAM role that was specified when the cluster was launched. The Amazon EC2 instances of the cluster assume this role.
   *
   * @public
   */
  IamInstanceProfile?: string | undefined;

  /**
   * The identifier of the Amazon EC2 security group for the master node.
   *
   * @public
   */
  EmrManagedMasterSecurityGroup?: string | undefined;

  /**
   * The identifier of the Amazon EC2 security group for the core and task nodes.
   *
   * @public
   */
  EmrManagedSlaveSecurityGroup?: string | undefined;

  /**
   * The identifier of the Amazon EC2 security group for the Amazon EMR service to access clusters in VPC private subnets.
   *
   * @public
   */
  ServiceAccessSecurityGroup?: string | undefined;

  /**
   * A list of additional Amazon EC2 security group IDs for the master node.
   *
   * @public
   */
  AdditionalMasterSecurityGroups?: string[] | undefined;

  /**
   * A list of additional Amazon EC2 security group IDs for the core and task nodes.
   *
   * @public
   */
  AdditionalSlaveSecurityGroups?: string[] | undefined;
}

/**
 * Attributes for Kerberos configuration when Kerberos authentication is enabled using a security configuration. For more information see [Use Kerberos Authentication](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html) in the *Amazon EMR Management Guide*.
 *
 * @public
 */
export interface KerberosAttributes {
  /**
   * The name of the Kerberos realm to which all nodes in a cluster belong. For example, `EC2.INTERNAL`.
   *
   * @public
   */
  Realm: string | undefined;

  /**
   * The password used within the cluster for the kadmin service on the cluster-dedicated KDC, which maintains Kerberos principals, password policies, and keytabs for the cluster.
   *
   * @public
   */
  KdcAdminPassword: string | undefined;

  /**
   * Required only when establishing a cross-realm trust with a KDC in a different realm. The cross-realm principal password, which must be identical across realms.
   *
   * @public
   */
  CrossRealmTrustPrincipalPassword?: string | undefined;

  /**
   * Required only when establishing a cross-realm trust with an Active Directory domain. A user with sufficient privileges to join resources to the domain.
   *
   * @public
   */
  ADDomainJoinUser?: string | undefined;

  /**
   * The Active Directory password for `ADDomainJoinUser`.
   *
   * @public
   */
  ADDomainJoinPassword?: string | undefined;
}

/**
 * Configuration for S3 logging behavior in EMR clusters. Defines how different types of logs are uploaded to S3 based on the specified upload policies for each log type.
 *
 * @public
 */
export interface S3LoggingConfiguration {
  /**
   * A map that specifies the upload policy for each log type. The key is the log type, and the value is the upload policy.
   *
   * Valid log types:
   *
   * - `system-logs`: EMR Daemon logs.
   * - `application-logs`: Framework logs from Hadoop, Spark, Hive and other applications running on the cluster.
   * - `persistent-ui-logs`: Logs required for persistent application UIs such as Spark History Server and Tez UI.
   *
   * Valid upload policies:
   *
   * - `emr-managed`: Standard behavior. Logs are uploaded to S3 bucket as configured in your LogUri, with certain logs retained by the service for operational support and troubleshooting purposes.
   * - `on-customer-s3only`: Logs are uploaded only to the customer-specified S3 bucket. This requires you to specify a LogUri when creating the cluster. Persistent-ui-logs cannot have on-customer-s3only policy. Allowed policies for persistent-ui-logs are emr-managed and disabled.
   * - `disabled`: No S3 upload for this log type.
   *
   * @public
   */
  LogTypeUploadPolicy?: Partial<Record<LogType, LogUploadPolicyValue>> | undefined;
}

/**
 * Contains CloudWatch log configuration and S3 logging configuration metadata and settings.
 *
 * @public
 */
export interface MonitoringConfiguration {
  /**
   * CloudWatch log configuration settings and metadata that specify settings like log files to monitor and where to send them.
   *
   * @public
   */
  CloudWatchLogConfiguration?: CloudWatchLogConfiguration | undefined;

  /**
   * S3 logging configuration that controls how different types of logs (system logs, application logs, and persistent UI logs) are uploaded to S3. Each log type can be configured with a specific upload policy.
   *
   * @public
   */
  S3LoggingConfiguration?: S3LoggingConfiguration | undefined;
}

/**
 * Placement group configuration for an Amazon EMR cluster. The configuration specifies the placement strategy that can be applied to instance roles during cluster creation.
 *
 * To use this configuration, consider attaching managed policy AmazonElasticMapReducePlacementGroupPolicy to the Amazon EMR role.
 *
 * @public
 */
export interface PlacementGroupConfig {
  /**
   * Role of the instance in the cluster.
   *
   * Starting with Amazon EMR release 5.23.0, the only supported instance role is `MASTER`.
   *
   * @public
   */
  InstanceRole: InstanceRoleType | undefined;

  /**
   * Amazon EC2 Placement Group strategy associated with instance role.
   *
   * Starting with Amazon EMR release 5.23.0, the only supported placement strategy is `SPREAD` for the `MASTER` instance role.
   *
   * @public
   */
  PlacementStrategy?: PlacementGroupStrategy | undefined;
}

/**
 * A tuple that provides information about an error that caused a cluster to terminate.
 *
 * @public
 */
export interface ErrorDetail {
  /**
   * The name or code associated with the error.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * A list of key value pairs that provides contextual information about why an error occured.
   *
   * @public
   */
  ErrorData?: Record<string, string>[] | undefined;

  /**
   * A message that describes the error.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * The reason that the cluster changed to its current state.
 *
 * @public
 */
export interface ClusterStateChangeReason {
  /**
   * The programmatic code for the state change reason.
   *
   * @public
   */
  Code?: ClusterStateChangeReasonCode | undefined;

  /**
   * The descriptive message for the state change reason.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Represents the timeline of the cluster's lifecycle.
 *
 * @public
 */
export interface ClusterTimeline {
  /**
   * The creation date and time of the cluster.
   *
   * @public
   */
  CreationDateTime?: Date | undefined;

  /**
   * The date and time when the cluster was ready to run steps.
   *
   * @public
   */
  ReadyDateTime?: Date | undefined;

  /**
   * The date and time when the cluster was terminated.
   *
   * @public
   */
  EndDateTime?: Date | undefined;
}

/**
 * The detailed status of the cluster.
 *
 * @public
 */
export interface ClusterStatus {
  /**
   * The current state of the cluster.
   *
   * @public
   */
  State?: ClusterState | undefined;

  /**
   * The reason for the cluster status change.
   *
   * @public
   */
  StateChangeReason?: ClusterStateChangeReason | undefined;

  /**
   * A timeline that represents the status of a cluster over the lifetime of the cluster.
   *
   * @public
   */
  Timeline?: ClusterTimeline | undefined;

  /**
   * A list of tuples that provides information about the errors that caused a cluster to terminate. This structure can contain up to 10 different `ErrorDetail` tuples.
   *
   * @public
   */
  ErrorDetails?: ErrorDetail[] | undefined;
}

/**
 * The summary description of the cluster.
 *
 * @public
 */
export interface ClusterSummary {
  /**
   * The unique identifier for the cluster.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the cluster.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The details about the current status of the cluster.
   *
   * @public
   */
  Status?: ClusterStatus | undefined;

  /**
   * An approximation of the cost of the cluster, represented in m1.small/hours. This value is incremented one time for every hour an m1.small instance runs. Larger instances are weighted more, so an Amazon EC2 instance that is roughly four times more expensive would result in the normalized instance hours being incremented by four. This result is only an approximation and does not reflect the actual billing rate.
   *
   * @public
   */
  NormalizedInstanceHours?: number | undefined;

  /**
   * The Amazon Resource Name of the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Outpost where the cluster is launched.
   *
   * @public
   */
  OutpostArn?: string | undefined;
}

/**
 * An entity describing an executable that runs on a cluster.
 *
 * @public
 */
export interface Command {
  /**
   * The name of the command.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon S3 location of the command script.
   *
   * @public
   */
  ScriptPath?: string | undefined;

  /**
   * Arguments for Amazon EMR to pass to the command for execution.
   *
   * @public
   */
  Args?: string[] | undefined;
}

/**
 * The Amazon EC2 unit limits for a managed scaling policy. The managed scaling activity of a cluster can not be above or below these limits. The limit only applies to the core and task nodes. The master node cannot be scaled after initial configuration.
 *
 * @public
 */
export interface ComputeLimits {
  /**
   * The unit type used for specifying a managed scaling policy.
   *
   * @public
   */
  UnitType: ComputeLimitsUnitType | undefined;

  /**
   * The lower boundary of Amazon EC2 units. It is measured through vCPU cores or instances for instance groups and measured through units for instance fleets. Managed scaling activities are not allowed beyond this boundary. The limit only applies to the core and task nodes. The master node cannot be scaled after initial configuration.
   *
   * @public
   */
  MinimumCapacityUnits: number | undefined;

  /**
   * The upper boundary of Amazon EC2 units. It is measured through vCPU cores or instances for instance groups and measured through units for instance fleets. Managed scaling activities are not allowed beyond this boundary. The limit only applies to the core and task nodes. The master node cannot be scaled after initial configuration.
   *
   * @public
   */
  MaximumCapacityUnits: number | undefined;

  /**
   * The upper boundary of On-Demand Amazon EC2 units. It is measured through vCPU cores or instances for instance groups and measured through units for instance fleets. The On-Demand units are not allowed to scale beyond this boundary. The parameter is used to split capacity allocation between On-Demand and Spot Instances.
   *
   * @public
   */
  MaximumOnDemandCapacityUnits?: number | undefined;

  /**
   * The upper boundary of Amazon EC2 units for core node type in a cluster. It is measured through vCPU cores or instances for instance groups and measured through units for instance fleets. The core units are not allowed to scale beyond this boundary. The parameter is used to split capacity allocation between core and task nodes.
   *
   * @public
   */
  MaximumCoreCapacityUnits?: number | undefined;
}

/**
 * The EMR container configuration.
 *
 * @public
 */
export interface EMRContainersConfig {
  /**
   * The Job run ID for the container configuration.
   *
   * @public
   */
  JobRunId?: string | undefined;
}

/**
 * @public
 */
export interface CreatePersistentAppUIInput {
  /**
   * The unique Amazon Resource Name (ARN) of the target resource.
   *
   * @public
   */
  TargetResourceArn: string | undefined;

  /**
   * The EMR containers configuration.
   *
   * @public
   */
  EMRContainersConfig?: EMRContainersConfig | undefined;

  /**
   * Tags for the persistent application user interface.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The cross reference for the persistent application user interface.
   *
   * @public
   */
  XReferer?: string | undefined;

  /**
   * The profiler type for the persistent application user interface.
   *
   * @public
   */
  ProfilerType?: ProfilerType | undefined;
}

/**
 * @public
 */
export interface CreatePersistentAppUIOutput {
  /**
   * The persistent application user interface identifier.
   *
   * @public
   */
  PersistentAppUIId?: string | undefined;

  /**
   * Represents if the EMR on EC2 cluster that the persisent application user interface is created for is a runtime role enabled cluster or not.
   *
   * @public
   */
  RuntimeRoleEnabledCluster?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateSecurityConfigurationInput {
  /**
   * The name of the security configuration.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The security configuration details in JSON format. For JSON parameters and examples, see [Use Security Configurations to Set Up Cluster Security](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-security-configurations.html) in the *Amazon EMR Management Guide*.
   *
   * @public
   */
  SecurityConfiguration: string | undefined;
}

/**
 * @public
 */
export interface CreateSecurityConfigurationOutput {
  /**
   * The name of the security configuration.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The date and time the security configuration was created.
   *
   * @public
   */
  CreationDateTime: Date | undefined;
}

/**
 * @public
 */
export interface CreateStudioInput {
  /**
   * A descriptive name for the Amazon EMR Studio.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * A detailed description of the Amazon EMR Studio.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies whether the Studio authenticates users using IAM or IAM Identity Center.
   *
   * @public
   */
  AuthMode: AuthMode | undefined;

  /**
   * The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the Studio.
   *
   * @public
   */
  VpcId: string | undefined;

  /**
   * A list of subnet IDs to associate with the Amazon EMR Studio. A Studio can have a maximum of 5 subnets. The subnets must belong to the VPC specified by `VpcId`. Studio users can create a Workspace in any of the specified subnets.
   *
   * @public
   */
  SubnetIds: string[] | undefined;

  /**
   * The IAM role that the Amazon EMR Studio assumes. The service role provides a way for Amazon EMR Studio to interoperate with other Amazon Web Services services.
   *
   * @public
   */
  ServiceRole: string | undefined;

  /**
   * The IAM user role that users and groups assume when logged in to an Amazon EMR Studio. Only specify a `UserRole` when you use IAM Identity Center authentication. The permissions attached to the `UserRole` can be scoped down for each user or group using session policies.
   *
   * @public
   */
  UserRole?: string | undefined;

  /**
   * The ID of the Amazon EMR Studio Workspace security group. The Workspace security group allows outbound network traffic to resources in the Engine security group, and it must be in the same VPC specified by `VpcId`.
   *
   * @public
   */
  WorkspaceSecurityGroupId: string | undefined;

  /**
   * The ID of the Amazon EMR Studio Engine security group. The Engine security group allows inbound network traffic from the Workspace security group, and it must be in the same VPC specified by `VpcId`.
   *
   * @public
   */
  EngineSecurityGroupId: string | undefined;

  /**
   * The Amazon S3 location to back up Amazon EMR Studio Workspaces and notebook files.
   *
   * @public
   */
  DefaultS3Location: string | undefined;

  /**
   * The authentication endpoint of your identity provider (IdP). Specify this value when you use IAM authentication and want to let federated users log in to a Studio with the Studio URL and credentials from your IdP. Amazon EMR Studio redirects users to this endpoint to enter credentials.
   *
   * @public
   */
  IdpAuthUrl?: string | undefined;

  /**
   * The name that your identity provider (IdP) uses for its `RelayState` parameter. For example, `RelayState` or `TargetSource`. Specify this value when you use IAM authentication and want to let federated users log in to a Studio using the Studio URL. The `RelayState` parameter differs by IdP.
   *
   * @public
   */
  IdpRelayStateParameterName?: string | undefined;

  /**
   * A list of tags to associate with the Amazon EMR Studio. Tags are user-defined key-value pairs that consist of a required key string with a maximum of 128 characters, and an optional value string with a maximum of 256 characters.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A Boolean indicating whether to enable Trusted identity propagation for the Studio. The default value is `false`.
   *
   * @public
   */
  TrustedIdentityPropagationEnabled?: boolean | undefined;

  /**
   * Specifies whether IAM Identity Center user assignment is `REQUIRED` or `OPTIONAL`. If the value is set to `REQUIRED`, users must be explicitly assigned to the Studio application to access the Studio.
   *
   * @public
   */
  IdcUserAssignment?: IdcUserAssignment | undefined;

  /**
   * The ARN of the IAM Identity Center instance to create the Studio application.
   *
   * @public
   */
  IdcInstanceArn?: string | undefined;

  /**
   * The KMS key identifier (ARN) used to encrypt Amazon EMR Studio workspace and notebook files when backed up to Amazon S3.
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface CreateStudioOutput {
  /**
   * The ID of the Amazon EMR Studio.
   *
   * @public
   */
  StudioId?: string | undefined;

  /**
   * The unique Studio access URL.
   *
   * @public
   */
  Url?: string | undefined;
}

/**
 * @public
 */
export interface CreateStudioSessionMappingInput {
  /**
   * The ID of the Amazon EMR Studio to which the user or group will be mapped.
   *
   * @public
   */
  StudioId: string | undefined;

  /**
   * The globally unique identifier (GUID) of the user or group from the IAM Identity Center Identity Store. For more information, see [UserId](https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserId) and [GroupId](https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-GroupId) in the *IAM Identity Center Identity Store API Reference*. Either `IdentityName` or `IdentityId` must be specified, but not both.
   *
   * @public
   */
  IdentityId?: string | undefined;

  /**
   * The name of the user or group. For more information, see [UserName](https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserName) and [DisplayName](https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-DisplayName) in the *IAM Identity Center Identity Store API Reference*. Either `IdentityName` or `IdentityId` must be specified, but not both.
   *
   * @public
   */
  IdentityName?: string | undefined;

  /**
   * Specifies whether the identity to map to the Amazon EMR Studio is a user or a group.
   *
   * @public
   */
  IdentityType: IdentityType | undefined;

  /**
   * The Amazon Resource Name (ARN) for the session policy that will be applied to the user or group. You should specify the ARN for the session policy that you want to apply, not the ARN of your user role. For more information, see [Create an Amazon EMR Studio User Role with Session Policies](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-studio-user-role.html).
   *
   * @public
   */
  SessionPolicyArn: string | undefined;
}

/**
 * The username and password that you use to connect to cluster endpoints.
 *
 * @public
 */
export interface UsernamePassword {
  /**
   * The username associated with the temporary credentials that you use to connect to cluster endpoints.
   *
   * @public
   */
  Username?: string | undefined;

  /**
   * The password associated with the temporary credentials that you use to connect to cluster endpoints.
   *
   * @public
   */
  Password?: string | undefined;
}

/**
 * The credentials that you can use to connect to cluster endpoints. Credentials consist of a username and a password.
 *
 * @public
 */
export type Credentials =
  | Credentials.UsernamePasswordMember
  | Credentials.$UnknownMember;

/**
 * @public
 */
export namespace Credentials {
  /**
   * The username and password that you use to connect to cluster endpoints.
   *
   * @public
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    UsernamePassword: (value: UsernamePassword) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface DeleteSecurityConfigurationInput {
  /**
   * The name of the security configuration.
   *
   * @public
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
   * The ID of the Amazon EMR Studio.
   *
   * @public
   */
  StudioId: string | undefined;
}

/**
 * @public
 */
export interface DeleteStudioSessionMappingInput {
  /**
   * The ID of the Amazon EMR Studio.
   *
   * @public
   */
  StudioId: string | undefined;

  /**
   * The globally unique identifier (GUID) of the user or group to remove from the Amazon EMR Studio. For more information, see [UserId](https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserId) and [GroupId](https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-GroupId) in the *IAM Identity Center Identity Store API Reference*. Either `IdentityName` or `IdentityId` must be specified.
   *
   * @public
   */
  IdentityId?: string | undefined;

  /**
   * The name of the user name or group to remove from the Amazon EMR Studio. For more information, see [UserName](https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserName) and [DisplayName](https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-DisplayName) in the *IAM Identity Center Store API Reference*. Either `IdentityName` or `IdentityId` must be specified.
   *
   * @public
   */
  IdentityName?: string | undefined;

  /**
   * Specifies whether the identity to delete from the Amazon EMR Studio is a user or a group.
   *
   * @public
   */
  IdentityType: IdentityType | undefined;
}

/**
 * This input determines which cluster to describe.
 *
 * @public
 */
export interface DescribeClusterInput {
  /**
   * The identifier of the cluster to describe.
   *
   * @public
   */
  ClusterId: string | undefined;
}

/**
 * The input for the DescribeJobFlows operation.
 *
 * @public
 */
export interface DescribeJobFlowsInput {
  /**
   * Return only job flows created after this date and time.
   *
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * Return only job flows created before this date and time.
   *
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * Return only job flows whose job flow ID is contained in this list.
   *
   * @public
   */
  JobFlowIds?: string[] | undefined;

  /**
   * Return only job flows whose state is contained in this list.
   *
   * @public
   */
  JobFlowStates?: JobFlowExecutionState[] | undefined;
}

/**
 * Describes the status of the cluster (job flow).
 *
 * @public
 */
export interface JobFlowExecutionStatusDetail {
  /**
   * The state of the job flow.
   *
   * @public
   */
  State: JobFlowExecutionState | undefined;

  /**
   * The creation date and time of the job flow.
   *
   * @public
   */
  CreationDateTime: Date | undefined;

  /**
   * The start date and time of the job flow.
   *
   * @public
   */
  StartDateTime?: Date | undefined;

  /**
   * The date and time when the job flow was ready to start running bootstrap actions.
   *
   * @public
   */
  ReadyDateTime?: Date | undefined;

  /**
   * The completion date and time of the job flow.
   *
   * @public
   */
  EndDateTime?: Date | undefined;

  /**
   * Description of the job flow last changed state.
   *
   * @public
   */
  LastStateChangeReason?: string | undefined;
}

/**
 * Detailed information about an instance group.
 *
 * @public
 */
export interface InstanceGroupDetail {
  /**
   * Unique identifier for the instance group.
   *
   * @public
   */
  InstanceGroupId?: string | undefined;

  /**
   * Friendly name for the instance group.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Market type of the Amazon EC2 instances used to create a cluster node.
   *
   * @public
   */
  Market: MarketType | undefined;

  /**
   * Instance group role in the cluster
   *
   * @public
   */
  InstanceRole: InstanceRoleType | undefined;

  /**
   * The bid price for each Amazon EC2 Spot Instance type as defined by `InstanceType`. Expressed in USD. If neither `BidPrice` nor `BidPriceAsPercentageOfOnDemandPrice` is provided, `BidPriceAsPercentageOfOnDemandPrice` defaults to 100%.
   *
   * @public
   */
  BidPrice?: string | undefined;

  /**
   * Amazon EC2 instance type.
   *
   * @public
   */
  InstanceType: string | undefined;

  /**
   * Target number of instances to run in the instance group.
   *
   * @public
   */
  InstanceRequestCount: number | undefined;

  /**
   * Actual count of running instances.
   *
   * @public
   */
  InstanceRunningCount: number | undefined;

  /**
   * State of instance group. The following values are no longer supported: STARTING, TERMINATED, and FAILED.
   *
   * @public
   */
  State: InstanceGroupState | undefined;

  /**
   * Details regarding the state of the instance group.
   *
   * @public
   */
  LastStateChangeReason?: string | undefined;

  /**
   * The date/time the instance group was created.
   *
   * @public
   */
  CreationDateTime: Date | undefined;

  /**
   * The date/time the instance group was started.
   *
   * @public
   */
  StartDateTime?: Date | undefined;

  /**
   * The date/time the instance group was available to the cluster.
   *
   * @public
   */
  ReadyDateTime?: Date | undefined;

  /**
   * The date/time the instance group was terminated.
   *
   * @public
   */
  EndDateTime?: Date | undefined;

  /**
   * The custom AMI ID to use for the provisioned instance group.
   *
   * @public
   */
  CustomAmiId?: string | undefined;
}

/**
 * The Amazon EC2 Availability Zone configuration of the cluster (job flow).
 *
 * @public
 */
export interface PlacementType {
  /**
   * The Amazon EC2 Availability Zone for the cluster. `AvailabilityZone` is used for uniform instance groups, while `AvailabilityZones` (plural) is used for instance fleets.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * When multiple Availability Zones are specified, Amazon EMR evaluates them and launches instances in the optimal Availability Zone. `AvailabilityZones` is used for instance fleets, while `AvailabilityZone` (singular) is used for uniform instance groups.
   *
   * > **Note:** The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;
}

/**
 * Specify the type of Amazon EC2 instances that the cluster (job flow) runs on.
 *
 * @public
 */
export interface JobFlowInstancesDetail {
  /**
   * The Amazon EC2 master node instance type.
   *
   * @public
   */
  MasterInstanceType: string | undefined;

  /**
   * The DNS name of the master node. If the cluster is on a private subnet, this is the private DNS name. On a public subnet, this is the public DNS name.
   *
   * @public
   */
  MasterPublicDnsName?: string | undefined;

  /**
   * The Amazon EC2 instance identifier of the master node.
   *
   * @public
   */
  MasterInstanceId?: string | undefined;

  /**
   * The Amazon EC2 core and task node instance type.
   *
   * @public
   */
  SlaveInstanceType: string | undefined;

  /**
   * The number of Amazon EC2 instances in the cluster. If the value is 1, the same instance serves as both the master and core and task node. If the value is greater than 1, one instance is the master node and all others are core and task nodes.
   *
   * @public
   */
  InstanceCount: number | undefined;

  /**
   * Details about the instance groups in a cluster.
   *
   * @public
   */
  InstanceGroups?: InstanceGroupDetail[] | undefined;

  /**
   * An approximation of the cost of the cluster, represented in m1.small/hours. This value is increased one time for every hour that an m1.small instance runs. Larger instances are weighted more heavily, so an Amazon EC2 instance that is roughly four times more expensive would result in the normalized instance hours being increased incrementally four times. This result is only an approximation and does not reflect the actual billing rate.
   *
   * @public
   */
  NormalizedInstanceHours?: number | undefined;

  /**
   * The name of an Amazon EC2 key pair that can be used to connect to the master node using SSH.
   *
   * @public
   */
  Ec2KeyName?: string | undefined;

  /**
   * For clusters launched within Amazon Virtual Private Cloud, this is the identifier of the subnet where the cluster was launched.
   *
   * @public
   */
  Ec2SubnetId?: string | undefined;

  /**
   * The Amazon EC2 Availability Zone for the cluster.
   *
   * @public
   */
  Placement?: PlacementType | undefined;

  /**
   * Specifies whether the cluster should remain available after completing all steps.
   *
   * @public
   */
  KeepJobFlowAliveWhenNoSteps?: boolean | undefined;

  /**
   * Specifies whether the Amazon EC2 instances in the cluster are protected from termination by API calls, user intervention, or in the event of a job-flow error.
   *
   * @public
   */
  TerminationProtected?: boolean | undefined;

  /**
   * Indicates whether Amazon EMR should gracefully replace core nodes that have degraded within the cluster.
   *
   * @public
   */
  UnhealthyNodeReplacement?: boolean | undefined;

  /**
   * The Hadoop version for the cluster.
   *
   * @public
   */
  HadoopVersion?: string | undefined;
}

/**
 * The execution state of a step.
 *
 * @public
 */
export interface StepExecutionStatusDetail {
  /**
   * The state of the step.
   *
   * @public
   */
  State: StepExecutionState | undefined;

  /**
   * The creation date and time of the step.
   *
   * @public
   */
  CreationDateTime: Date | undefined;

  /**
   * The start date and time of the step.
   *
   * @public
   */
  StartDateTime?: Date | undefined;

  /**
   * The completion date and time of the step.
   *
   * @public
   */
  EndDateTime?: Date | undefined;

  /**
   * A description of the step's current state.
   *
   * @public
   */
  LastStateChangeReason?: string | undefined;
}

/**
 * Combines the execution state and configuration of a step.
 *
 * @public
 */
export interface StepDetail {
  /**
   * The step configuration.
   *
   * @public
   */
  StepConfig: StepConfig | undefined;

  /**
   * The description of the step status.
   *
   * @public
   */
  ExecutionStatusDetail: StepExecutionStatusDetail | undefined;
}

/**
 * A description of a cluster (job flow).
 *
 * @public
 */
export interface JobFlowDetail {
  /**
   * The job flow identifier.
   *
   * @public
   */
  JobFlowId: string | undefined;

  /**
   * The name of the job flow.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The location in Amazon S3 where log files for the job are stored.
   *
   * @public
   */
  LogUri?: string | undefined;

  /**
   * The KMS key used for encrypting log files. This attribute is only available with Amazon EMR 5.30.0 and later, excluding 6.0.0.
   *
   * @public
   */
  LogEncryptionKmsKeyId?: string | undefined;

  /**
   * Applies only to Amazon EMR AMI versions 3.x and 2.x. For Amazon EMR releases 4.0 and later, `ReleaseLabel` is used. To specify a custom AMI, use `CustomAmiID`.
   *
   * @public
   */
  AmiVersion?: string | undefined;

  /**
   * Describes the execution status of the job flow.
   *
   * @public
   */
  ExecutionStatusDetail: JobFlowExecutionStatusDetail | undefined;

  /**
   * Describes the Amazon EC2 instances of the job flow.
   *
   * @public
   */
  Instances: JobFlowInstancesDetail | undefined;

  /**
   * A list of steps run by the job flow.
   *
   * @public
   */
  Steps?: StepDetail[] | undefined;

  /**
   * A list of the bootstrap actions run by the job flow.
   *
   * @public
   */
  BootstrapActions?: BootstrapActionDetail[] | undefined;

  /**
   * A list of strings set by third-party software when the job flow is launched. If you are not using third-party software to manage the job flow, this value is empty.
   *
   * @public
   */
  SupportedProducts?: string[] | undefined;

  /**
   * Indicates whether the cluster is visible to IAM principals in the Amazon Web Services account associated with the cluster. When `true`, IAM principals in the Amazon Web Services account can perform Amazon EMR cluster actions that their IAM policies allow. When `false`, only the IAM principal that created the cluster and the Amazon Web Services account root user can perform Amazon EMR actions, regardless of IAM permissions policies attached to other IAM principals.
   *
   * The default value is `true` if a value is not provided when creating a cluster using the Amazon EMR API RunJobFlow command, the CLI [create-cluster](https://docs.aws.amazon.com/cli/latest/reference/emr/create-cluster.html) command, or the Amazon Web Services Management Console.
   *
   * @public
   */
  VisibleToAllUsers?: boolean | undefined;

  /**
   * The IAM role that was specified when the job flow was launched. The Amazon EC2 instances of the job flow assume this role.
   *
   * @public
   */
  JobFlowRole?: string | undefined;

  /**
   * The IAM role that is assumed by the Amazon EMR service to access Amazon Web Services resources on your behalf.
   *
   * @public
   */
  ServiceRole?: string | undefined;

  /**
   * An IAM role for automatic scaling policies. The default role is `EMR_AutoScaling_DefaultRole`. The IAM role provides a way for the automatic scaling feature to get the required permissions it needs to launch and terminate Amazon EC2 instances in an instance group.
   *
   * @public
   */
  AutoScalingRole?: string | undefined;

  /**
   * The way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an instance group is resized. `TERMINATE_AT_INSTANCE_HOUR` indicates that Amazon EMR terminates nodes at the instance-hour boundary, regardless of when the request to terminate the instance was submitted. This option is only available with Amazon EMR 5.1.0 and later and is the default for clusters created using that version. `TERMINATE_AT_TASK_COMPLETION` indicates that Amazon EMR adds nodes to a deny list and drains tasks from nodes before terminating the Amazon EC2 instances, regardless of the instance-hour boundary. With either behavior, Amazon EMR removes the least active nodes first and blocks instance termination if it could lead to HDFS corruption. `TERMINATE_AT_TASK_COMPLETION` available only in Amazon EMR releases 4.1.0 and later, and is the default for releases of Amazon EMR earlier than 5.1.0.
   *
   * @public
   */
  ScaleDownBehavior?: ScaleDownBehavior | undefined;
}

/**
 * The output for the DescribeJobFlows operation.
 *
 * @public
 */
export interface DescribeJobFlowsOutput {
  /**
   * A list of job flows matching the parameters supplied.
   *
   * @public
   */
  JobFlows?: JobFlowDetail[] | undefined;
}

/**
 * @public
 */
export interface DescribeNotebookExecutionInput {
  /**
   * The unique identifier of the notebook execution.
   *
   * @public
   */
  NotebookExecutionId: string | undefined;
}

/**
 * Specifies the execution engine (cluster) to run the notebook and perform the notebook execution, for example, an Amazon EMR cluster.
 *
 * @public
 */
export interface ExecutionEngineConfig {
  /**
   * The unique identifier of the execution engine. For an Amazon EMR cluster, this is the cluster ID.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The type of execution engine. A value of `EMR` specifies an Amazon EMR cluster.
   *
   * @public
   */
  Type?: ExecutionEngineType | undefined;

  /**
   * An optional unique ID of an Amazon EC2 security group to associate with the master instance of the Amazon EMR cluster for this notebook execution. For more information see [Specifying Amazon EC2 Security Groups for Amazon EMR Notebooks](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-security-groups.html) in the *EMR Management Guide*.
   *
   * @public
   */
  MasterInstanceSecurityGroupId?: string | undefined;

  /**
   * The execution role ARN required for the notebook execution.
   *
   * @public
   */
  ExecutionRoleArn?: string | undefined;
}

/**
 * The Amazon S3 location that stores the notebook execution input.
 *
 * @public
 */
export interface NotebookS3LocationForOutput {
  /**
   * The Amazon S3 bucket that stores the notebook execution input.
   *
   * @public
   */
  Bucket?: string | undefined;

  /**
   * The key to the Amazon S3 location that stores the notebook execution input.
   *
   * @public
   */
  Key?: string | undefined;
}

/**
 * The Amazon S3 location that stores the notebook execution output.
 *
 * @public
 */
export interface OutputNotebookS3LocationForOutput {
  /**
   * The Amazon S3 bucket that stores the notebook execution output.
   *
   * @public
   */
  Bucket?: string | undefined;

  /**
   * The key to the Amazon S3 location that stores the notebook execution output.
   *
   * @public
   */
  Key?: string | undefined;
}

/**
 * A notebook execution. An execution is a specific instance that an Amazon EMR Notebook is run using the `StartNotebookExecution` action.
 *
 * @public
 */
export interface NotebookExecution {
  /**
   * The unique identifier of a notebook execution.
   *
   * @public
   */
  NotebookExecutionId?: string | undefined;

  /**
   * The unique identifier of the Amazon EMR Notebook that is used for the notebook execution.
   *
   * @public
   */
  EditorId?: string | undefined;

  /**
   * The execution engine, such as an Amazon EMR cluster, used to run the Amazon EMR notebook and perform the notebook execution.
   *
   * @public
   */
  ExecutionEngine?: ExecutionEngineConfig | undefined;

  /**
   * A name for the notebook execution.
   *
   * @public
   */
  NotebookExecutionName?: string | undefined;

  /**
   * Input parameters in JSON format passed to the Amazon EMR Notebook at runtime for execution.
   *
   * @public
   */
  NotebookParams?: string | undefined;

  /**
   * The status of the notebook execution.
   *
   * - `START_PENDING` indicates that the cluster has received the execution request but execution has not begun.
   * - `STARTING` indicates that the execution is starting on the cluster.
   * - `RUNNING` indicates that the execution is being processed by the cluster.
   * - `FINISHING` indicates that execution processing is in the final stages.
   * - `FINISHED` indicates that the execution has completed without error.
   * - `FAILING` indicates that the execution is failing and will not finish successfully.
   * - `FAILED` indicates that the execution failed.
   * - `STOP_PENDING` indicates that the cluster has received a `StopNotebookExecution` request and the stop is pending.
   * - `STOPPING` indicates that the cluster is in the process of stopping the execution as a result of a `StopNotebookExecution` request.
   * - `STOPPED` indicates that the execution stopped because of a `StopNotebookExecution` request.
   *
   * @public
   */
  Status?: NotebookExecutionStatus | undefined;

  /**
   * The timestamp when notebook execution started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The timestamp when notebook execution ended.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The Amazon Resource Name (ARN) of the notebook execution.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The location of the notebook execution's output file in Amazon S3.
   *
   * @public
   */
  OutputNotebookURI?: string | undefined;

  /**
   * The reason for the latest status change of the notebook execution.
   *
   * @public
   */
  LastStateChangeReason?: string | undefined;

  /**
   * The unique identifier of the Amazon EC2 security group associated with the Amazon EMR Notebook instance. For more information see [Specifying Amazon EC2 Security Groups for Amazon EMR Notebooks](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-security-groups.html) in the *Amazon EMR Management Guide*.
   *
   * @public
   */
  NotebookInstanceSecurityGroupId?: string | undefined;

  /**
   * A list of tags associated with a notebook execution. Tags are user-defined key-value pairs that consist of a required key string with a maximum of 128 characters and an optional value string with a maximum of 256 characters.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The Amazon S3 location that stores the notebook execution input.
   *
   * @public
   */
  NotebookS3Location?: NotebookS3LocationForOutput | undefined;

  /**
   * The Amazon S3 location for the notebook execution output.
   *
   * @public
   */
  OutputNotebookS3Location?: OutputNotebookS3LocationForOutput | undefined;

  /**
   * The output format for the notebook execution.
   *
   * @public
   */
  OutputNotebookFormat?: OutputNotebookFormat | undefined;

  /**
   * The environment variables associated with the notebook execution.
   *
   * @public
   */
  EnvironmentVariables?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DescribeNotebookExecutionOutput {
  /**
   * Properties of the notebook execution.
   *
   * @public
   */
  NotebookExecution?: NotebookExecution | undefined;
}

/**
 * @public
 */
export interface DescribePersistentAppUIInput {
  /**
   * The identifier for the persistent application user interface.
   *
   * @public
   */
  PersistentAppUIId: string | undefined;
}

/**
 * Holds persistent application user interface information. Applications installed on the Amazon EMR cluster publish user interfaces as web sites to monitor cluster activity.
 *
 * @public
 */
export interface PersistentAppUI {
  /**
   * The identifier for the persistent application user interface object.
   *
   * @public
   */
  PersistentAppUIId?: string | undefined;

  /**
   * The type list for the persistent application user interface object. Valid values include SHS, YTS, or TEZ.
   *
   * @public
   */
  PersistentAppUITypeList?: PersistentAppUIType[] | undefined;

  /**
   * The status for the persistent application user interface object.
   *
   * @public
   */
  PersistentAppUIStatus?: string | undefined;

  /**
   * The author ID for the persistent application user interface object.
   *
   * @public
   */
  AuthorId?: string | undefined;

  /**
   * The creation date and time for the persistent application user interface object.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The date and time the persistent application user interface object was last changed.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;

  /**
   * The reason the persistent application user interface object was last changed.
   *
   * @public
   */
  LastStateChangeReason?: string | undefined;

  /**
   * A collection of tags for the persistent application user interface object.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface DescribePersistentAppUIOutput {
  /**
   * The persistent application user interface.
   *
   * @public
   */
  PersistentAppUI?: PersistentAppUI | undefined;
}

/**
 * @public
 */
export interface DescribeReleaseLabelInput {
  /**
   * The target release label to be described.
   *
   * @public
   */
  ReleaseLabel?: string | undefined;

  /**
   * The pagination token. Reserved for future use. Currently set to null.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Reserved for future use. Currently set to null.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * The returned release label application names or versions.
 *
 * @public
 */
export interface SimplifiedApplication {
  /**
   * The returned release label application name. For example, `hadoop`.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The returned release label application version. For example, `3.2.1`.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * The Amazon Linux release specified for a cluster in the RunJobFlow request.
 *
 * @public
 */
export interface OSRelease {
  /**
   * The Amazon Linux release specified for a cluster in the RunJobFlow request. The format is as shown in [*Amazon Linux 2 Release Notes*](https://docs.aws.amazon.com/AL2/latest/relnotes/relnotes-20220218.html). For example, 2.0.20220218.1.
   *
   * @public
   */
  Label?: string | undefined;
}

/**
 * @public
 */
export interface DescribeReleaseLabelOutput {
  /**
   * The target release label described in the response.
   *
   * @public
   */
  ReleaseLabel?: string | undefined;

  /**
   * The list of applications available for the target release label. `Name` is the name of the application. `Version` is the concise version of the application.
   *
   * @public
   */
  Applications?: SimplifiedApplication[] | undefined;

  /**
   * The pagination token. Reserved for future use. Currently set to null.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The list of available Amazon Linux release versions for an Amazon EMR release. Contains a Label field that is formatted as shown in [*Amazon Linux 2 Release Notes*](https://docs.aws.amazon.com/AL2/latest/relnotes/relnotes-al2.html). For example, [2.0.20220218.1](https://docs.aws.amazon.com/AL2/latest/relnotes/relnotes-20220218.html).
   *
   * @public
   */
  AvailableOSReleases?: OSRelease[] | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityConfigurationInput {
  /**
   * The name of the security configuration.
   *
   * @public
   */
  Name: string | undefined;
}

/**
 * @public
 */
export interface DescribeSecurityConfigurationOutput {
  /**
   * The name of the security configuration.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The security configuration details in JSON format.
   *
   * @public
   */
  SecurityConfiguration?: string | undefined;

  /**
   * The date and time the security configuration was created
   *
   * @public
   */
  CreationDateTime?: Date | undefined;
}

/**
 * This input determines which step to describe.
 *
 * @public
 */
export interface DescribeStepInput {
  /**
   * The identifier of the cluster with steps to describe.
   *
   * @public
   */
  ClusterId: string | undefined;

  /**
   * The identifier of the step to describe.
   *
   * @public
   */
  StepId: string | undefined;
}

/**
 * A cluster step consisting of a JAR file whose main function will be executed. The main function submits a job for Hadoop to execute and waits for the job to finish or fail.
 *
 * @public
 */
export interface HadoopStepConfig {
  /**
   * The path to the JAR file that runs during the step.
   *
   * @public
   */
  Jar?: string | undefined;

  /**
   * The list of Java properties that are set when the step runs. You can use these properties to pass key-value pairs to your main function.
   *
   * @public
   */
  Properties?: Record<string, string> | undefined;

  /**
   * The name of the main class in the specified Java file. If not specified, the JAR file should specify a main class in its manifest file.
   *
   * @public
   */
  MainClass?: string | undefined;

  /**
   * The list of command line arguments to pass to the JAR file's main function for execution.
   *
   * @public
   */
  Args?: string[] | undefined;
}

/**
 * The details of the step failure. The service attempts to detect the root cause for many common failures.
 *
 * @public
 */
export interface FailureDetails {
  /**
   * The reason for the step failure. In the case where the service cannot successfully determine the root cause of the failure, it returns "Unknown Error" as a reason.
   *
   * @public
   */
  Reason?: string | undefined;

  /**
   * The descriptive message including the error the Amazon EMR service has identified as the cause of step failure. This is text from an error log that describes the root cause of the failure.
   *
   * @public
   */
  Message?: string | undefined;

  /**
   * The path to the log file where the step failure root cause was originally recorded.
   *
   * @public
   */
  LogFile?: string | undefined;
}

/**
 * The details of the step state change reason.
 *
 * @public
 */
export interface StepStateChangeReason {
  /**
   * The programmable code for the state change reason. Note: Currently, the service provides no code for the state change.
   *
   * @public
   */
  Code?: StepStateChangeReasonCode | undefined;

  /**
   * The descriptive message for the state change reason.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * The timeline of the cluster step lifecycle.
 *
 * @public
 */
export interface StepTimeline {
  /**
   * The date and time when the cluster step was created.
   *
   * @public
   */
  CreationDateTime?: Date | undefined;

  /**
   * The date and time when the cluster step execution started.
   *
   * @public
   */
  StartDateTime?: Date | undefined;

  /**
   * The date and time when the cluster step execution completed or failed.
   *
   * @public
   */
  EndDateTime?: Date | undefined;
}

/**
 * The execution status details of the cluster step.
 *
 * @public
 */
export interface StepStatus {
  /**
   * The execution state of the cluster step.
   *
   * @public
   */
  State?: StepState | undefined;

  /**
   * The reason for the step execution status change.
   *
   * @public
   */
  StateChangeReason?: StepStateChangeReason | undefined;

  /**
   * The details for the step failure including reason, message, and log file path where the root cause was identified.
   *
   * @public
   */
  FailureDetails?: FailureDetails | undefined;

  /**
   * The timeline of the cluster step status over time.
   *
   * @public
   */
  Timeline?: StepTimeline | undefined;
}

/**
 * This represents a step in a cluster.
 *
 * @public
 */
export interface Step {
  /**
   * The identifier of the cluster step.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the cluster step.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Hadoop job configuration of the cluster step.
   *
   * @public
   */
  Config?: HadoopStepConfig | undefined;

  /**
   * The action to take when the cluster step fails. Possible values are `TERMINATE_CLUSTER`, `CANCEL_AND_WAIT`, and `CONTINUE`. `TERMINATE_JOB_FLOW` is provided for backward compatibility. We recommend using `TERMINATE_CLUSTER` instead.
   *
   * If a cluster's `StepConcurrencyLevel` is greater than `1`, do not use `AddJobFlowSteps` to submit a step with this parameter set to `CANCEL_AND_WAIT` or `TERMINATE_CLUSTER`. The step is not submitted and the action fails with a message that the `ActionOnFailure` setting is not valid.
   *
   * If you change a cluster's `StepConcurrencyLevel` to be greater than 1 while a step is running, the `ActionOnFailure` parameter may not behave as you expect. In this case, for a step that fails with this parameter set to `CANCEL_AND_WAIT`, pending steps and the running step are not canceled; for a step that fails with this parameter set to `TERMINATE_CLUSTER`, the cluster does not terminate.
   *
   * @public
   */
  ActionOnFailure?: ActionOnFailure | undefined;

  /**
   * The current execution status details of the cluster step.
   *
   * @public
   */
  Status?: StepStatus | undefined;

  /**
   * The Amazon Resource Name (ARN) of the runtime role for a step on the cluster. The runtime role can be a cross-account IAM role. The runtime role ARN is a combination of account ID, role name, and role type using the following format: `arn:partition:service:region:account:resource`.
   *
   * For example, `arn:aws:IAM::1234567890:role/ReadOnly` is a correctly formatted runtime role ARN.
   *
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * The Amazon S3 destination URI for log publishing.
   *
   * @public
   */
  LogUri?: string | undefined;

  /**
   * The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;
}

/**
 * This output contains the description of the cluster step.
 *
 * @public
 */
export interface DescribeStepOutput {
  /**
   * The step details for the requested step identifier.
   *
   * @public
   */
  Step?: Step | undefined;
}

/**
 * @public
 */
export interface DescribeStudioInput {
  /**
   * The Amazon EMR Studio ID.
   *
   * @public
   */
  StudioId: string | undefined;
}

/**
 * Details for an Amazon EMR Studio including ID, creation time, name, and so on.
 *
 * @public
 */
export interface Studio {
  /**
   * The ID of the Amazon EMR Studio.
   *
   * @public
   */
  StudioId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon EMR Studio.
   *
   * @public
   */
  StudioArn?: string | undefined;

  /**
   * The name of the Amazon EMR Studio.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The detailed description of the Amazon EMR Studio.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * Specifies whether the Amazon EMR Studio authenticates users with IAM or IAM Identity Center.
   *
   * @public
   */
  AuthMode?: AuthMode | undefined;

  /**
   * The ID of the VPC associated with the Amazon EMR Studio.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The list of IDs of the subnets associated with the Amazon EMR Studio.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The name of the IAM role assumed by the Amazon EMR Studio.
   *
   * @public
   */
  ServiceRole?: string | undefined;

  /**
   * The name of the IAM role assumed by users logged in to the Amazon EMR Studio. A Studio only requires a `UserRole` when you use IAM authentication.
   *
   * @public
   */
  UserRole?: string | undefined;

  /**
   * The ID of the Workspace security group associated with the Amazon EMR Studio. The Workspace security group allows outbound network traffic to resources in the Engine security group and to the internet.
   *
   * @public
   */
  WorkspaceSecurityGroupId?: string | undefined;

  /**
   * The ID of the Engine security group associated with the Amazon EMR Studio. The Engine security group allows inbound network traffic from resources in the Workspace security group.
   *
   * @public
   */
  EngineSecurityGroupId?: string | undefined;

  /**
   * The unique access URL of the Amazon EMR Studio.
   *
   * @public
   */
  Url?: string | undefined;

  /**
   * The time the Amazon EMR Studio was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The Amazon S3 location to back up Amazon EMR Studio Workspaces and notebook files.
   *
   * @public
   */
  DefaultS3Location?: string | undefined;

  /**
   * Your identity provider's authentication endpoint. Amazon EMR Studio redirects federated users to this endpoint for authentication when logging in to a Studio with the Studio URL.
   *
   * @public
   */
  IdpAuthUrl?: string | undefined;

  /**
   * The name of your identity provider's `RelayState` parameter.
   *
   * @public
   */
  IdpRelayStateParameterName?: string | undefined;

  /**
   * A list of tags associated with the Amazon EMR Studio.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The ARN of the IAM Identity Center instance the Studio application belongs to.
   *
   * @public
   */
  IdcInstanceArn?: string | undefined;

  /**
   * Indicates whether the Studio has Trusted identity propagation enabled. The default value is `false`.
   *
   * @public
   */
  TrustedIdentityPropagationEnabled?: boolean | undefined;

  /**
   * Indicates whether the Studio has `REQUIRED` or `OPTIONAL` IAM Identity Center user assignment. If the value is set to `REQUIRED`, users must be explicitly assigned to the Studio application to access the Studio.
   *
   * @public
   */
  IdcUserAssignment?: IdcUserAssignment | undefined;

  /**
   * The KMS key identifier (ARN) used to encrypt Amazon EMR Studio workspace and notebook files when backed up to Amazon S3.
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeStudioOutput {
  /**
   * The Amazon EMR Studio details.
   *
   * @public
   */
  Studio?: Studio | undefined;
}

/**
 * Configuration of requested EBS block device associated with the instance group.
 *
 * @public
 */
export interface EbsBlockDevice {
  /**
   * EBS volume specifications such as volume type, IOPS, size (GiB) and throughput (MiB/s) that are requested for the EBS volume attached to an Amazon EC2 instance in the cluster.
   *
   * @public
   */
  VolumeSpecification?: VolumeSpecification | undefined;

  /**
   * The device name that is exposed to the instance, such as /dev/sdh.
   *
   * @public
   */
  Device?: string | undefined;
}

/**
 * EBS block device that's attached to an Amazon EC2 instance.
 *
 * @public
 */
export interface EbsVolume {
  /**
   * The device name that is exposed to the instance, such as /dev/sdh.
   *
   * @public
   */
  Device?: string | undefined;

  /**
   * The volume identifier of the EBS volume.
   *
   * @public
   */
  VolumeId?: string | undefined;
}

/**
 * @public
 */
export interface GetAutoTerminationPolicyInput {
  /**
   * Specifies the ID of the Amazon EMR cluster for which the auto-termination policy will be fetched.
   *
   * @public
   */
  ClusterId: string | undefined;
}

/**
 * @public
 */
export interface GetAutoTerminationPolicyOutput {
  /**
   * Specifies the auto-termination policy that is attached to an Amazon EMR cluster.
   *
   * @public
   */
  AutoTerminationPolicy?: AutoTerminationPolicy | undefined;
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
   * The unique identifier of the cluster.
   *
   * @public
   */
  ClusterId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the runtime role for interactive workload submission on the cluster. The runtime role can be a cross-account IAM role. The runtime role ARN is a combination of account ID, role name, and role type using the following format: `arn:partition:service:region:account:resource`.
   *
   * @public
   */
  ExecutionRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface GetClusterSessionCredentialsOutput {
  /**
   * The credentials that you can use to connect to cluster endpoints that support username and password authentication.
   *
   * @public
   */
  Credentials?: Credentials | undefined;

  /**
   * The time when the credentials that are returned by the `GetClusterSessionCredentials` API expire.
   *
   * @public
   */
  ExpiresAt?: Date | undefined;
}

/**
 * @public
 */
export interface GetManagedScalingPolicyInput {
  /**
   * Specifies the ID of the cluster for which the managed scaling policy will be fetched.
   *
   * @public
   */
  ClusterId: string | undefined;
}

/**
 * Managed scaling policy for an Amazon EMR cluster. The policy specifies the limits for resources that can be added or terminated from a cluster. The policy only applies to the core and task nodes. The master node cannot be scaled after initial configuration.
 *
 * @public
 */
export interface ManagedScalingPolicy {
  /**
   * The Amazon EC2 unit limits for a managed scaling policy. The managed scaling activity of a cluster is not allowed to go above or below these limits. The limit only applies to the core and task nodes. The master node cannot be scaled after initial configuration.
   *
   * @public
   */
  ComputeLimits?: ComputeLimits | undefined;

  /**
   * An integer value that represents an advanced scaling strategy. Setting a higher value optimizes for performance. Setting a lower value optimizes for resource conservation. Setting the value to 50 balances performance and resource conservation. Possible values are 1, 25, 50, 75, and 100.
   *
   * @public
   */
  UtilizationPerformanceIndex?: number | undefined;

  /**
   * Determines whether a custom scaling utilization performance index can be set. Possible values include *ADVANCED* or *DEFAULT*.
   *
   * @public
   */
  ScalingStrategy?: ScalingStrategy | undefined;
}

/**
 * @public
 */
export interface GetManagedScalingPolicyOutput {
  /**
   * Specifies the managed scaling policy that is attached to an Amazon EMR cluster.
   *
   * @public
   */
  ManagedScalingPolicy?: ManagedScalingPolicy | undefined;
}

/**
 * @public
 */
export interface GetOnClusterAppUIPresignedURLInput {
  /**
   * The cluster ID associated with the cluster's application user interface presigned URL.
   *
   * @public
   */
  ClusterId: string | undefined;

  /**
   * The application UI type associated with the cluster's application user interface presigned URL.
   *
   * @public
   */
  OnClusterAppUIType?: OnClusterAppUIType | undefined;

  /**
   * The application ID associated with the cluster's application user interface presigned URL.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * Determines if the user interface presigned URL is for a dry run.
   *
   * @public
   */
  DryRun?: boolean | undefined;

  /**
   * The execution role ARN associated with the cluster's application user interface presigned URL.
   *
   * @public
   */
  ExecutionRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface GetOnClusterAppUIPresignedURLOutput {
  /**
   * Used to determine if the presigned URL is ready.
   *
   * @public
   */
  PresignedURLReady?: boolean | undefined;

  /**
   * The cluster's generated presigned URL.
   *
   * @public
   */
  PresignedURL?: string | undefined;
}

/**
 * @public
 */
export interface GetPersistentAppUIPresignedURLInput {
  /**
   * The persistent application user interface ID associated with the presigned URL.
   *
   * @public
   */
  PersistentAppUIId: string | undefined;

  /**
   * The persistent application user interface type associated with the presigned URL.
   *
   * @public
   */
  PersistentAppUIType?: PersistentAppUIType | undefined;

  /**
   * The application ID associated with the presigned URL.
   *
   * @public
   */
  ApplicationId?: string | undefined;

  /**
   * A boolean that represents if the caller is an authentication proxy call.
   *
   * @public
   */
  AuthProxyCall?: boolean | undefined;

  /**
   * The execution role ARN associated with the presigned URL.
   *
   * @public
   */
  ExecutionRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface GetPersistentAppUIPresignedURLOutput {
  /**
   * Used to determine if the presigned URL is ready.
   *
   * @public
   */
  PresignedURLReady?: boolean | undefined;

  /**
   * The returned presigned URL.
   *
   * @public
   */
  PresignedURL?: string | undefined;
}

/**
 * Input to the `GetSession` operation.
 *
 * @public
 */
export interface GetSessionInput {
  /**
   * The ID of the cluster that the session belongs to.
   *
   * @public
   */
  ClusterId: string | undefined;

  /**
   * The ID of the session.
   *
   * @public
   */
  SessionId: string | undefined;
}

/**
 * The CloudWatch Logs configuration for a session.
 *
 * @public
 */
export interface SessionCloudWatchLoggingConfiguration {
  /**
   * Whether CloudWatch Logs is enabled for the session.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The name of the log group where session logs are published.
   *
   * @public
   */
  LogGroup?: string | undefined;

  /**
   * The prefix applied to the log stream name where session logs are published.
   *
   * @public
   */
  LogStreamNamePrefix?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt the logs published to CloudWatch Logs.
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * A map of log component names (for example, `SPARK_DRIVER`, `SPARK_EXECUTOR`) to the list of log types to publish for that component (for example, `stdout`, `stderr`).
   *
   * @public
   */
  LogTypes?: Record<string, string[]> | undefined;
}

/**
 * The Amazon EMR-managed logging configuration for a session.
 *
 * @public
 */
export interface SessionManagedLoggingConfiguration {
  /**
   * Whether Amazon EMR-managed logging is enabled for the session.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt the managed logs.
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;
}

/**
 * The Amazon S3 logging configuration for a session.
 *
 * @public
 */
export interface SessionS3LoggingConfiguration {
  /**
   * Whether Amazon S3 logging is enabled for the session.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * The Amazon S3 destination URI where session logs are published.
   *
   * @public
   */
  LogUri?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the KMS key used to encrypt logs published to Amazon S3.
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;

  /**
   * A map of log component names (for example, `SPARK_DRIVER`, `SPARK_EXECUTOR`) to the list of log types to publish for that component (for example, `stdout`, `stderr`).
   *
   * @public
   */
  LogTypes?: Record<string, string[]> | undefined;
}

/**
 * The monitoring configuration for a session. Controls where session logs are published.
 *
 * @public
 */
export interface SessionMonitoringConfiguration {
  /**
   * The CloudWatch Logs configuration for the session.
   *
   * @public
   */
  CloudWatchLoggingConfiguration?: SessionCloudWatchLoggingConfiguration | undefined;

  /**
   * The Amazon EMR-managed logging configuration for the session.
   *
   * @public
   */
  ManagedLoggingConfiguration?: SessionManagedLoggingConfiguration | undefined;

  /**
   * The Amazon S3 logging configuration for the session.
   *
   * @public
   */
  S3LoggingConfiguration?: SessionS3LoggingConfiguration | undefined;
}

/**
 * Input to the `GetSessionEndpoint` operation.
 *
 * @public
 */
export interface GetSessionEndpointInput {
  /**
   * The ID of the cluster that the session belongs to.
   *
   * @public
   */
  ClusterId: string | undefined;

  /**
   * The ID of the session.
   *
   * @public
   */
  SessionId: string | undefined;
}

/**
 * Output of the `GetSessionEndpoint` operation.
 *
 * @public
 */
export interface GetSessionEndpointOutput {
  /**
   * The Spark Connect endpoint URL to use in the PySpark client.
   *
   * @public
   */
  Endpoint: string | undefined;

  /**
   * A time-limited authentication token used to connect to the Spark Connect endpoint.
   *
   * @public
   */
  AuthToken?: string | undefined;

  /**
   * The time at which the authentication token expires. After this time, call `GetSessionEndpoint` again to obtain a new token.
   *
   * @public
   */
  AuthTokenExpirationTime?: Date | undefined;

  /**
   * Username and password used to authenticate with the Spark Connect server when connecting directly over VPC peering.
   *
   * @public
   */
  Credentials?: Credentials | undefined;
}

/**
 * @public
 */
export interface GetStudioSessionMappingInput {
  /**
   * The ID of the Amazon EMR Studio.
   *
   * @public
   */
  StudioId: string | undefined;

  /**
   * The globally unique identifier (GUID) of the user or group. For more information, see [UserId](https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserId) and [GroupId](https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-GroupId) in the *IAM Identity Center Identity Store API Reference*. Either `IdentityName` or `IdentityId` must be specified.
   *
   * @public
   */
  IdentityId?: string | undefined;

  /**
   * The name of the user or group to fetch. For more information, see [UserName](https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserName) and [DisplayName](https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-DisplayName) in the *IAM Identity Center Identity Store API Reference*. Either `IdentityName` or `IdentityId` must be specified.
   *
   * @public
   */
  IdentityName?: string | undefined;

  /**
   * Specifies whether the identity to fetch is a user or a group.
   *
   * @public
   */
  IdentityType: IdentityType | undefined;
}

/**
 * Details for an Amazon EMR Studio session mapping including creation time, user or group ID, Studio ID, and so on.
 *
 * @public
 */
export interface SessionMappingDetail {
  /**
   * The ID of the Amazon EMR Studio.
   *
   * @public
   */
  StudioId?: string | undefined;

  /**
   * The globally unique identifier (GUID) of the user or group.
   *
   * @public
   */
  IdentityId?: string | undefined;

  /**
   * The name of the user or group. For more information, see [UserName](https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserName) and [DisplayName](https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-DisplayName) in the *IAM Identity Center Identity Store API Reference*.
   *
   * @public
   */
  IdentityName?: string | undefined;

  /**
   * Specifies whether the identity mapped to the Amazon EMR Studio is a user or a group.
   *
   * @public
   */
  IdentityType?: IdentityType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the session policy associated with the user or group.
   *
   * @public
   */
  SessionPolicyArn?: string | undefined;

  /**
   * The time the session mapping was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;

  /**
   * The time the session mapping was last modified.
   *
   * @public
   */
  LastModifiedTime?: Date | undefined;
}

/**
 * @public
 */
export interface GetStudioSessionMappingOutput {
  /**
   * The session mapping details for the specified Amazon EMR Studio and identity, including session policy ARN and creation time.
   *
   * @public
   */
  SessionMapping?: SessionMappingDetail | undefined;
}

/**
 * This input determines which bootstrap actions to retrieve.
 *
 * @public
 */
export interface ListBootstrapActionsInput {
  /**
   * The cluster identifier for the bootstrap actions to list.
   *
   * @public
   */
  ClusterId: string | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * This output contains the bootstrap actions detail.
 *
 * @public
 */
export interface ListBootstrapActionsOutput {
  /**
   * The bootstrap actions associated with the cluster.
   *
   * @public
   */
  BootstrapActions?: Command[] | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * This input determines how the ListClusters action filters the list of clusters that it returns.
 *
 * @public
 */
export interface ListClustersInput {
  /**
   * The creation date and time beginning value filter for listing clusters.
   *
   * @public
   */
  CreatedAfter?: Date | undefined;

  /**
   * The creation date and time end value filter for listing clusters.
   *
   * @public
   */
  CreatedBefore?: Date | undefined;

  /**
   * The cluster state filters to apply when listing clusters. Clusters that change state while this action runs may be not be returned as expected in the list of clusters.
   *
   * @public
   */
  ClusterStates?: ClusterState[] | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * This contains a ClusterSummaryList with the cluster details; for example, the cluster IDs, names, and status.
 *
 * @public
 */
export interface ListClustersOutput {
  /**
   * The list of clusters for the account based on the given filters.
   *
   * @public
   */
  Clusters?: ClusterSummary[] | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListInstanceFleetsInput {
  /**
   * The unique identifier of the cluster.
   *
   * @public
   */
  ClusterId: string | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Provides status change reason details for the instance fleet.
 *
 * > **Note:** The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.
 *
 * @public
 */
export interface InstanceFleetStateChangeReason {
  /**
   * A code corresponding to the reason the state change occurred.
   *
   * @public
   */
  Code?: InstanceFleetStateChangeReasonCode | undefined;

  /**
   * An explanatory message.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * Provides historical timestamps for the instance fleet, including the time of creation, the time it became ready to run jobs, and the time of termination.
 *
 * > **Note:** The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.
 *
 * @public
 */
export interface InstanceFleetTimeline {
  /**
   * The time and date the instance fleet was created.
   *
   * @public
   */
  CreationDateTime?: Date | undefined;

  /**
   * The time and date the instance fleet was ready to run jobs.
   *
   * @public
   */
  ReadyDateTime?: Date | undefined;

  /**
   * The time and date the instance fleet terminated.
   *
   * @public
   */
  EndDateTime?: Date | undefined;
}

/**
 * The status of the instance fleet.
 *
 * > **Note:** The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.
 *
 * @public
 */
export interface InstanceFleetStatus {
  /**
   * A code representing the instance fleet status.
   *
   * - `PROVISIONING`—The instance fleet is provisioning Amazon EC2 resources and is not yet ready to run jobs.
   * - `BOOTSTRAPPING`—Amazon EC2 instances and other resources have been provisioned and the bootstrap actions specified for the instances are underway.
   * - `RUNNING`—Amazon EC2 instances and other resources are running. They are either executing jobs or waiting to execute jobs.
   * - `RESIZING`—A resize operation is underway. Amazon EC2 instances are either being added or removed.
   * - `SUSPENDED`—A resize operation could not complete. Existing Amazon EC2 instances are running, but instances can't be added or removed.
   * - `TERMINATING`—The instance fleet is terminating Amazon EC2 instances.
   * - `TERMINATED`—The instance fleet is no longer active, and all Amazon EC2 instances have been terminated.
   *
   * @public
   */
  State?: InstanceFleetState | undefined;

  /**
   * Provides status change reason details for the instance fleet.
   *
   * @public
   */
  StateChangeReason?: InstanceFleetStateChangeReason | undefined;

  /**
   * Provides historical timestamps for the instance fleet, including the time of creation, the time it became ready to run jobs, and the time of termination.
   *
   * @public
   */
  Timeline?: InstanceFleetTimeline | undefined;
}

/**
 * This input determines which instance groups to retrieve.
 *
 * @public
 */
export interface ListInstanceGroupsInput {
  /**
   * The identifier of the cluster for which to list the instance groups.
   *
   * @public
   */
  ClusterId: string | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Custom policy for requesting termination protection or termination of specific instances when shrinking an instance group.
 *
 * @public
 */
export interface InstanceResizePolicy {
  /**
   * Specific list of instances to be terminated when shrinking an instance group.
   *
   * @public
   */
  InstancesToTerminate?: string[] | undefined;

  /**
   * Specific list of instances to be protected when shrinking an instance group.
   *
   * @public
   */
  InstancesToProtect?: string[] | undefined;

  /**
   * Decommissioning timeout override for the specific list of instances to be terminated.
   *
   * @public
   */
  InstanceTerminationTimeout?: number | undefined;
}

/**
 * Policy for customizing shrink operations. Allows configuration of decommissioning timeout and targeted instance shrinking.
 *
 * @public
 */
export interface ShrinkPolicy {
  /**
   * The desired timeout for decommissioning an instance. Overrides the default YARN decommissioning timeout.
   *
   * @public
   */
  DecommissionTimeout?: number | undefined;

  /**
   * Custom policy for requesting termination protection or termination of specific instances when shrinking an instance group.
   *
   * @public
   */
  InstanceResizePolicy?: InstanceResizePolicy | undefined;
}

/**
 * The status change reason details for the instance group.
 *
 * @public
 */
export interface InstanceGroupStateChangeReason {
  /**
   * The programmable code for the state change reason.
   *
   * @public
   */
  Code?: InstanceGroupStateChangeReasonCode | undefined;

  /**
   * The status change reason description.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * The timeline of the instance group lifecycle.
 *
 * @public
 */
export interface InstanceGroupTimeline {
  /**
   * The creation date and time of the instance group.
   *
   * @public
   */
  CreationDateTime?: Date | undefined;

  /**
   * The date and time when the instance group became ready to perform tasks.
   *
   * @public
   */
  ReadyDateTime?: Date | undefined;

  /**
   * The date and time when the instance group terminated.
   *
   * @public
   */
  EndDateTime?: Date | undefined;
}

/**
 * The details of the instance group status.
 *
 * @public
 */
export interface InstanceGroupStatus {
  /**
   * The current state of the instance group.
   *
   * @public
   */
  State?: InstanceGroupState | undefined;

  /**
   * The status change reason details for the instance group.
   *
   * @public
   */
  StateChangeReason?: InstanceGroupStateChangeReason | undefined;

  /**
   * The timeline of the instance group status over time.
   *
   * @public
   */
  Timeline?: InstanceGroupTimeline | undefined;
}

/**
 * This input determines which instances to list.
 *
 * @public
 */
export interface ListInstancesInput {
  /**
   * The identifier of the cluster for which to list the instances.
   *
   * @public
   */
  ClusterId: string | undefined;

  /**
   * The identifier of the instance group for which to list the instances.
   *
   * @public
   */
  InstanceGroupId?: string | undefined;

  /**
   * The type of instance group for which to list the instances.
   *
   * @public
   */
  InstanceGroupTypes?: InstanceGroupType[] | undefined;

  /**
   * The unique identifier of the instance fleet.
   *
   * @public
   */
  InstanceFleetId?: string | undefined;

  /**
   * The node type of the instance fleet. For example MASTER, CORE, or TASK.
   *
   * @public
   */
  InstanceFleetType?: InstanceFleetType | undefined;

  /**
   * A list of instance states that will filter the instances returned with this request.
   *
   * @public
   */
  InstanceStates?: InstanceState[] | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * The details of the status change reason for the instance.
 *
 * @public
 */
export interface InstanceStateChangeReason {
  /**
   * The programmable code for the state change reason.
   *
   * @public
   */
  Code?: InstanceStateChangeReasonCode | undefined;

  /**
   * The status change reason description.
   *
   * @public
   */
  Message?: string | undefined;
}

/**
 * The timeline of the instance lifecycle.
 *
 * @public
 */
export interface InstanceTimeline {
  /**
   * The creation date and time of the instance.
   *
   * @public
   */
  CreationDateTime?: Date | undefined;

  /**
   * The date and time when the instance was ready to perform tasks.
   *
   * @public
   */
  ReadyDateTime?: Date | undefined;

  /**
   * The date and time when the instance was terminated.
   *
   * @public
   */
  EndDateTime?: Date | undefined;
}

/**
 * The instance status details.
 *
 * @public
 */
export interface InstanceStatus {
  /**
   * The current state of the instance.
   *
   * @public
   */
  State?: InstanceState | undefined;

  /**
   * The details of the status change reason for the instance.
   *
   * @public
   */
  StateChangeReason?: InstanceStateChangeReason | undefined;

  /**
   * The timeline of the instance status over time.
   *
   * @public
   */
  Timeline?: InstanceTimeline | undefined;
}

/**
 * Represents an Amazon EC2 instance provisioned as part of cluster.
 *
 * @public
 */
export interface Instance {
  /**
   * The unique identifier for the instance in Amazon EMR.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The unique identifier of the instance in Amazon EC2.
   *
   * @public
   */
  Ec2InstanceId?: string | undefined;

  /**
   * The public DNS name of the instance.
   *
   * @public
   */
  PublicDnsName?: string | undefined;

  /**
   * The public IP address of the instance.
   *
   * @public
   */
  PublicIpAddress?: string | undefined;

  /**
   * The private DNS name of the instance.
   *
   * @public
   */
  PrivateDnsName?: string | undefined;

  /**
   * The private IP address of the instance.
   *
   * @public
   */
  PrivateIpAddress?: string | undefined;

  /**
   * The current status of the instance.
   *
   * @public
   */
  Status?: InstanceStatus | undefined;

  /**
   * The identifier of the instance group to which this instance belongs.
   *
   * @public
   */
  InstanceGroupId?: string | undefined;

  /**
   * The unique identifier of the instance fleet to which an Amazon EC2 instance belongs.
   *
   * @public
   */
  InstanceFleetId?: string | undefined;

  /**
   * The instance purchasing option. Valid values are `ON_DEMAND` or `SPOT`.
   *
   * @public
   */
  Market?: MarketType | undefined;

  /**
   * The Amazon EC2 instance type, for example `m3.xlarge`.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The list of Amazon EBS volumes that are attached to this instance.
   *
   * @public
   */
  EbsVolumes?: EbsVolume[] | undefined;
}

/**
 * This output contains the list of instances.
 *
 * @public
 */
export interface ListInstancesOutput {
  /**
   * The list of instances for the cluster and given filters.
   *
   * @public
   */
  Instances?: Instance[] | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListNotebookExecutionsInput {
  /**
   * The unique ID of the editor associated with the notebook execution.
   *
   * @public
   */
  EditorId?: string | undefined;

  /**
   * The status filter for listing notebook executions.
   *
   * - `START_PENDING` indicates that the cluster has received the execution request but execution has not begun.
   * - `STARTING` indicates that the execution is starting on the cluster.
   * - `RUNNING` indicates that the execution is being processed by the cluster.
   * - `FINISHING` indicates that execution processing is in the final stages.
   * - `FINISHED` indicates that the execution has completed without error.
   * - `FAILING` indicates that the execution is failing and will not finish successfully.
   * - `FAILED` indicates that the execution failed.
   * - `STOP_PENDING` indicates that the cluster has received a `StopNotebookExecution` request and the stop is pending.
   * - `STOPPING` indicates that the cluster is in the process of stopping the execution as a result of a `StopNotebookExecution` request.
   * - `STOPPED` indicates that the execution stopped because of a `StopNotebookExecution` request.
   *
   * @public
   */
  Status?: NotebookExecutionStatus | undefined;

  /**
   * The beginning of time range filter for listing notebook executions. The default is the timestamp of 30 days ago.
   *
   * @public
   */
  From?: Date | undefined;

  /**
   * The end of time range filter for listing notebook executions. The default is the current timestamp.
   *
   * @public
   */
  To?: Date | undefined;

  /**
   * The pagination token, returned by a previous `ListNotebookExecutions` call, that indicates the start of the list for this `ListNotebookExecutions` call.
   *
   * @public
   */
  Marker?: string | undefined;

  /**
   * The unique ID of the execution engine.
   *
   * @public
   */
  ExecutionEngineId?: string | undefined;
}

/**
 * Details for a notebook execution. The details include information such as the unique ID and status of the notebook execution.
 *
 * @public
 */
export interface NotebookExecutionSummary {
  /**
   * The unique identifier of the notebook execution.
   *
   * @public
   */
  NotebookExecutionId?: string | undefined;

  /**
   * The unique identifier of the editor associated with the notebook execution.
   *
   * @public
   */
  EditorId?: string | undefined;

  /**
   * The name of the notebook execution.
   *
   * @public
   */
  NotebookExecutionName?: string | undefined;

  /**
   * The status of the notebook execution.
   *
   * - `START_PENDING` indicates that the cluster has received the execution request but execution has not begun.
   * - `STARTING` indicates that the execution is starting on the cluster.
   * - `RUNNING` indicates that the execution is being processed by the cluster.
   * - `FINISHING` indicates that execution processing is in the final stages.
   * - `FINISHED` indicates that the execution has completed without error.
   * - `FAILING` indicates that the execution is failing and will not finish successfully.
   * - `FAILED` indicates that the execution failed.
   * - `STOP_PENDING` indicates that the cluster has received a `StopNotebookExecution` request and the stop is pending.
   * - `STOPPING` indicates that the cluster is in the process of stopping the execution as a result of a `StopNotebookExecution` request.
   * - `STOPPED` indicates that the execution stopped because of a `StopNotebookExecution` request.
   *
   * @public
   */
  Status?: NotebookExecutionStatus | undefined;

  /**
   * The timestamp when notebook execution started.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The timestamp when notebook execution started.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The Amazon S3 location that stores the notebook execution input.
   *
   * @public
   */
  NotebookS3Location?: NotebookS3LocationForOutput | undefined;

  /**
   * The unique ID of the execution engine for the notebook execution.
   *
   * @public
   */
  ExecutionEngineId?: string | undefined;
}

/**
 * @public
 */
export interface ListNotebookExecutionsOutput {
  /**
   * A list of notebook executions.
   *
   * @public
   */
  NotebookExecutions?: NotebookExecutionSummary[] | undefined;

  /**
   * A pagination token that a subsequent `ListNotebookExecutions` can use to determine the next set of results to retrieve.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * The release label filters by application or version prefix.
 *
 * @public
 */
export interface ReleaseLabelFilter {
  /**
   * Optional release label version prefix filter. For example, `emr-5`.
   *
   * @public
   */
  Prefix?: string | undefined;

  /**
   * Optional release label application filter. For example, `spark@2.1.0`.
   *
   * @public
   */
  Application?: string | undefined;
}

/**
 * @public
 */
export interface ListReleaseLabelsInput {
  /**
   * Filters the results of the request. `Prefix` specifies the prefix of release labels to return. `Application` specifies the application (with/without version) of release labels to return.
   *
   * @public
   */
  Filters?: ReleaseLabelFilter | undefined;

  /**
   * Specifies the next page of results. If `NextToken` is not specified, which is usually the case for the first request of ListReleaseLabels, the first page of results are determined by other filtering parameters or by the latest version. The `ListReleaseLabels` request fails if the identity (Amazon Web Services account ID) and all filtering parameters are different from the original request, or if the `NextToken` is expired or tampered with.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * Defines the maximum number of release labels to return in a single response. The default is `100`.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * @public
 */
export interface ListReleaseLabelsOutput {
  /**
   * The returned release labels.
   *
   * @public
   */
  ReleaseLabels?: string[] | undefined;

  /**
   * Used to paginate the next page of results if specified in the next `ListReleaseLabels` request.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListSecurityConfigurationsInput {
  /**
   * The pagination token that indicates the set of results to retrieve.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * The creation date and time, and name, of a security configuration.
 *
 * @public
 */
export interface SecurityConfigurationSummary {
  /**
   * The name of the security configuration.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The date and time the security configuration was created.
   *
   * @public
   */
  CreationDateTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListSecurityConfigurationsOutput {
  /**
   * The creation date and time, and name, of each security configuration.
   *
   * @public
   */
  SecurityConfigurations?: SecurityConfigurationSummary[] | undefined;

  /**
   * A pagination token that indicates the next set of results to retrieve. Include the marker in the next ListSecurityConfiguration call to retrieve the next page of results, if required.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Input to the `ListSessions` operation.
 *
 * @public
 */
export interface ListSessionsInput {
  /**
   * The ID of the cluster to list sessions for.
   *
   * @public
   */
  ClusterId: string | undefined;

  /**
   * An optional filter that limits the results to sessions in the specified states.
   *
   * @public
   */
  SessionStates?: SessionState[] | undefined;

  /**
   * The pagination token returned by a previous `ListSessions` call. Use it to retrieve the next page of results.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of sessions to return in each page of results.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * This input determines which steps to list.
 *
 * @public
 */
export interface ListStepsInput {
  /**
   * The identifier of the cluster for which to list the steps.
   *
   * @public
   */
  ClusterId: string | undefined;

  /**
   * The filter to limit the step list based on certain states.
   *
   * @public
   */
  StepStates?: StepState[] | undefined;

  /**
   * The filter to limit the step list based on the identifier of the steps. You can specify a maximum of ten Step IDs. The character constraint applies to the overall length of the array.
   *
   * @public
   */
  StepIds?: string[] | undefined;

  /**
   * The maximum number of steps that a single `ListSteps` action returns is 50. To return a longer list of steps, use multiple `ListSteps` actions along with the `Marker` parameter, which is a pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * The summary of the cluster step.
 *
 * @public
 */
export interface StepSummary {
  /**
   * The identifier of the cluster step.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the cluster step.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Hadoop job configuration of the cluster step.
   *
   * @public
   */
  Config?: HadoopStepConfig | undefined;

  /**
   * The action to take when the cluster step fails. Possible values are TERMINATE_CLUSTER, CANCEL_AND_WAIT, and CONTINUE. TERMINATE_JOB_FLOW is available for backward compatibility.
   *
   * @public
   */
  ActionOnFailure?: ActionOnFailure | undefined;

  /**
   * The current execution status details of the cluster step.
   *
   * @public
   */
  Status?: StepStatus | undefined;

  /**
   * The Amazon S3 destination URI for log publishing.
   *
   * @public
   */
  LogUri?: string | undefined;

  /**
   * The KMS key ARN to encrypt the logs published to the given Amazon S3 destination.
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;
}

/**
 * This output contains the list of steps returned in reverse order. This means that the last step is the first element in the list.
 *
 * @public
 */
export interface ListStepsOutput {
  /**
   * The filtered list of steps for the cluster.
   *
   * @public
   */
  Steps?: StepSummary[] | undefined;

  /**
   * The maximum number of steps that a single `ListSteps` action returns is 50. To return a longer list of steps, use multiple `ListSteps` actions along with the `Marker` parameter, which is a pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListStudiosInput {
  /**
   * The pagination token that indicates the set of results to retrieve.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Details for an Amazon EMR Studio, including ID, Name, VPC, and Description. To fetch additional details such as subnets, IAM roles, security groups, and tags for the Studio, use the DescribeStudio API.
 *
 * @public
 */
export interface StudioSummary {
  /**
   * The ID of the Amazon EMR Studio.
   *
   * @public
   */
  StudioId?: string | undefined;

  /**
   * The name of the Amazon EMR Studio.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of the Virtual Private Cloud (Amazon VPC) associated with the Amazon EMR Studio.
   *
   * @public
   */
  VpcId?: string | undefined;

  /**
   * The detailed description of the Amazon EMR Studio.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The unique access URL of the Amazon EMR Studio.
   *
   * @public
   */
  Url?: string | undefined;

  /**
   * Specifies whether the Studio authenticates users using IAM or IAM Identity Center.
   *
   * @public
   */
  AuthMode?: AuthMode | undefined;

  /**
   * The time when the Amazon EMR Studio was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListStudiosOutput {
  /**
   * The list of Studio summary objects.
   *
   * @public
   */
  Studios?: StudioSummary[] | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListStudioSessionMappingsInput {
  /**
   * The ID of the Amazon EMR Studio.
   *
   * @public
   */
  StudioId?: string | undefined;

  /**
   * Specifies whether to return session mappings for users or groups. If not specified, the results include session mapping details for both users and groups.
   *
   * @public
   */
  IdentityType?: IdentityType | undefined;

  /**
   * The pagination token that indicates the set of results to retrieve.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * Details for an Amazon EMR Studio session mapping. The details do not include the time the session mapping was last modified.
 *
 * @public
 */
export interface SessionMappingSummary {
  /**
   * The ID of the Amazon EMR Studio.
   *
   * @public
   */
  StudioId?: string | undefined;

  /**
   * The globally unique identifier (GUID) of the user or group from the IAM Identity Center Identity Store.
   *
   * @public
   */
  IdentityId?: string | undefined;

  /**
   * The name of the user or group. For more information, see [UserName](https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserName) and [DisplayName](https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-DisplayName) in the *IAM Identity Center Identity Store API Reference*.
   *
   * @public
   */
  IdentityName?: string | undefined;

  /**
   * Specifies whether the identity mapped to the Amazon EMR Studio is a user or a group.
   *
   * @public
   */
  IdentityType?: IdentityType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the session policy associated with the user or group.
   *
   * @public
   */
  SessionPolicyArn?: string | undefined;

  /**
   * The time the session mapping was created.
   *
   * @public
   */
  CreationTime?: Date | undefined;
}

/**
 * @public
 */
export interface ListStudioSessionMappingsOutput {
  /**
   * A list of session mapping summary objects. Each object includes session mapping details such as creation time, identity type (user or group), and Amazon EMR Studio ID.
   *
   * @public
   */
  SessionMappings?: SessionMappingSummary[] | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ListSupportedInstanceTypesInput {
  /**
   * The Amazon EMR release label determines the [versions of open-source application packages](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-release-app-versions-6.x.html) that Amazon EMR has installed on the cluster. Release labels are in the format `emr-x.x.x`, where x.x.x is an Amazon EMR release number such as `emr-6.10.0`. For more information about Amazon EMR releases and their included application versions and features, see the *[Amazon EMR Release Guide](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-release-components.html)* .
   *
   * @public
   */
  ReleaseLabel: string | undefined;

  /**
   * The pagination token that marks the next set of results to retrieve.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * An instance type that the specified Amazon EMR release supports.
 *
 * @public
 */
export interface SupportedInstanceType {
  /**
   * The [Amazon EC2 instance type](http://aws.amazon.com/ec2/instance-types/), for example `m5.xlarge`, of the `SupportedInstanceType`.
   *
   * @public
   */
  Type?: string | undefined;

  /**
   * The amount of memory that is available to Amazon EMR from the `SupportedInstanceType`. The kernel and hypervisor software consume some memory, so this value might be lower than the overall memory for the instance type.
   *
   * @public
   */
  MemoryGB?: number | undefined;

  /**
   * `StorageGB` represents the storage capacity of the `SupportedInstanceType`. This value is `0` for Amazon EBS-only instance types.
   *
   * @public
   */
  StorageGB?: number | undefined;

  /**
   * The number of vCPUs available for the `SupportedInstanceType`.
   *
   * @public
   */
  VCPU?: number | undefined;

  /**
   * Indicates whether the `SupportedInstanceType` only supports 64-bit architecture.
   *
   * @public
   */
  Is64BitsOnly?: boolean | undefined;

  /**
   * The Amazon EC2 family and generation for the `SupportedInstanceType`.
   *
   * @public
   */
  InstanceFamilyId?: string | undefined;

  /**
   * Indicates whether the `SupportedInstanceType` supports Amazon EBS optimization.
   *
   * @public
   */
  EbsOptimizedAvailable?: boolean | undefined;

  /**
   * Indicates whether the `SupportedInstanceType` uses Amazon EBS optimization by default.
   *
   * @public
   */
  EbsOptimizedByDefault?: boolean | undefined;

  /**
   * Number of disks for the `SupportedInstanceType`. This value is `0` for Amazon EBS-only instance types.
   *
   * @public
   */
  NumberOfDisks?: number | undefined;

  /**
   * Indicates whether the `SupportedInstanceType` only supports Amazon EBS.
   *
   * @public
   */
  EbsStorageOnly?: boolean | undefined;

  /**
   * The CPU architecture, for example `X86_64` or `AARCH64`.
   *
   * @public
   */
  Architecture?: string | undefined;
}

/**
 * @public
 */
export interface ListSupportedInstanceTypesOutput {
  /**
   * The list of instance types that the release specified in `ListSupportedInstanceTypesInput$ReleaseLabel` supports, filtered by Amazon Web Services Region.
   *
   * @public
   */
  SupportedInstanceTypes?: SupportedInstanceType[] | undefined;

  /**
   * The pagination token that marks the next set of results to retrieve.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 */
export interface ModifyClusterInput {
  /**
   * The unique identifier of the cluster.
   *
   * @public
   */
  ClusterId: string | undefined;

  /**
   * The number of steps that can be executed concurrently. You can specify a minimum of 1 step and a maximum of 256 steps. We recommend that you do not change this parameter while steps are running or the `ActionOnFailure` setting may not behave as expected. For more information see Step$ActionOnFailure.
   *
   * @public
   */
  StepConcurrencyLevel?: number | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  ExtendedSupport?: boolean | undefined;
}

/**
 * @public
 */
export interface ModifyClusterOutput {
  /**
   * The number of steps that can be executed concurrently.
   *
   * @public
   */
  StepConcurrencyLevel?: number | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  ExtendedSupport?: boolean | undefined;
}

/**
 * @public
 */
export interface PutAutoScalingPolicyInput {
  /**
   * Specifies the ID of a cluster. The instance group to which the automatic scaling policy is applied is within this cluster.
   *
   * @public
   */
  ClusterId: string | undefined;

  /**
   * Specifies the ID of the instance group to which the automatic scaling policy is applied.
   *
   * @public
   */
  InstanceGroupId: string | undefined;

  /**
   * Specifies the definition of the automatic scaling policy.
   *
   * @public
   */
  AutoScalingPolicy: AutoScalingPolicy | undefined;
}

/**
 * @public
 */
export interface PutAutoScalingPolicyOutput {
  /**
   * Specifies the ID of a cluster. The instance group to which the automatic scaling policy is applied is within this cluster.
   *
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * Specifies the ID of the instance group to which the scaling policy is applied.
   *
   * @public
   */
  InstanceGroupId?: string | undefined;

  /**
   * The automatic scaling policy definition.
   *
   * @public
   */
  AutoScalingPolicy?: AutoScalingPolicyDescription | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;
}

/**
 * @public
 */
export interface PutAutoTerminationPolicyInput {
  /**
   * Specifies the ID of the Amazon EMR cluster to which the auto-termination policy will be attached.
   *
   * @public
   */
  ClusterId: string | undefined;

  /**
   * Specifies the auto-termination policy to attach to the cluster.
   *
   * @public
   */
  AutoTerminationPolicy?: AutoTerminationPolicy | undefined;
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
   * Specifies the ID of an Amazon EMR cluster where the managed scaling policy is attached.
   *
   * @public
   */
  ClusterId: string | undefined;

  /**
   * Specifies the constraints for the managed scaling policy.
   *
   * @public
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
   * Specifies the ID of a cluster. The instance group to which the automatic scaling policy is applied is within this cluster.
   *
   * @public
   */
  ClusterId: string | undefined;

  /**
   * Specifies the ID of the instance group to which the scaling policy is applied.
   *
   * @public
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
   * Specifies the ID of the Amazon EMR cluster from which the auto-termination policy will be removed.
   *
   * @public
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
   * Specifies the ID of the cluster from which the managed scaling policy will be removed.
   *
   * @public
   */
  ClusterId: string | undefined;
}

/**
 * @public
 */
export interface RemoveManagedScalingPolicyOutput {}

/**
 * This input identifies an Amazon EMR resource and a list of tags to remove.
 *
 * @public
 */
export interface RemoveTagsInput {
  /**
   * The Amazon EMR resource identifier from which tags will be removed. For example, a cluster identifier or an Amazon EMR Studio ID.
   *
   * @public
   */
  ResourceId: string | undefined;

  /**
   * A list of tag keys to remove from the resource.
   *
   * @public
   */
  TagKeys: string[] | undefined;

  /**
   * The ID of the cluster that scopes the tag operation. Required when the resource being untagged is a session-scoped resource.
   *
   * @public
   */
  ClusterId?: string | undefined;
}

/**
 * This output indicates the result of removing tags from the resource.
 *
 * @public
 */
export interface RemoveTagsOutput {}

/**
 * The list of supported product configurations that allow user-supplied arguments. Amazon EMR accepts these arguments and forwards them to the corresponding installation script as bootstrap action arguments.
 *
 * @public
 */
export interface SupportedProductConfig {
  /**
   * The name of the product configuration.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The list of user-supplied arguments.
   *
   * @public
   */
  Args?: string[] | undefined;
}

/**
 * The result of the RunJobFlow operation.
 *
 * @public
 */
export interface RunJobFlowOutput {
  /**
   * A unique identifier for the job flow.
   *
   * @public
   */
  JobFlowId?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;
}

/**
 * @public
 */
export interface SetKeepJobFlowAliveWhenNoStepsInput {
  /**
   * A list of strings that uniquely identify the clusters to protect. This identifier is returned by [RunJobFlow](https://docs.aws.amazon.com/emr/latest/APIReference/API_RunJobFlow.html) and can also be obtained from [DescribeJobFlows](https://docs.aws.amazon.com/emr/latest/APIReference/API_DescribeJobFlows.html).
   *
   * @public
   */
  JobFlowIds: string[] | undefined;

  /**
   * A Boolean that indicates whether to terminate the cluster after all steps are executed.
   *
   * @public
   */
  KeepJobFlowAliveWhenNoSteps: boolean | undefined;
}

/**
 * The input argument to the TerminationProtection operation.
 *
 * @public
 */
export interface SetTerminationProtectionInput {
  /**
   * A list of strings that uniquely identify the clusters to protect. This identifier is returned by RunJobFlow and can also be obtained from DescribeJobFlows .
   *
   * @public
   */
  JobFlowIds: string[] | undefined;

  /**
   * A Boolean that indicates whether to protect the cluster and prevent the Amazon EC2 instances in the cluster from shutting down due to API calls, user intervention, or job-flow error.
   *
   * @public
   */
  TerminationProtected: boolean | undefined;
}

/**
 * @public
 */
export interface SetUnhealthyNodeReplacementInput {
  /**
   * The list of strings that uniquely identify the clusters for which to turn on unhealthy node replacement. You can get these identifiers by running the RunJobFlow or the DescribeJobFlows operations.
   *
   * @public
   */
  JobFlowIds: string[] | undefined;

  /**
   * Indicates whether to turn on or turn off graceful unhealthy node replacement.
   *
   * @public
   */
  UnhealthyNodeReplacement: boolean | undefined;
}

/**
 * The input to the SetVisibleToAllUsers action.
 *
 * @public
 */
export interface SetVisibleToAllUsersInput {
  /**
   * The unique identifier of the job flow (cluster).
   *
   * @public
   */
  JobFlowIds: string[] | undefined;

  /**
   * A value of `true` indicates that an IAM principal in the Amazon Web Services account can perform Amazon EMR actions on the cluster that the IAM policies attached to the principal allow. A value of `false` indicates that only the IAM principal that created the cluster and the Amazon Web Services root user can perform Amazon EMR actions on the cluster.
   *
   * @public
   */
  VisibleToAllUsers: boolean | undefined;
}

/**
 * The Amazon S3 location that stores the notebook execution input.
 *
 * @public
 */
export interface NotebookS3LocationFromInput {
  /**
   * The Amazon S3 bucket that stores the notebook execution input.
   *
   * @public
   */
  Bucket?: string | undefined;

  /**
   * The key to the Amazon S3 location that stores the notebook execution input.
   *
   * @public
   */
  Key?: string | undefined;
}

/**
 * The Amazon S3 location that stores the notebook execution output.
 *
 * @public
 */
export interface OutputNotebookS3LocationFromInput {
  /**
   * The Amazon S3 bucket that stores the notebook execution output.
   *
   * @public
   */
  Bucket?: string | undefined;

  /**
   * The key to the Amazon S3 location that stores the notebook execution output.
   *
   * @public
   */
  Key?: string | undefined;
}

/**
 * @public
 */
export interface StartNotebookExecutionInput {
  /**
   * The unique identifier of the Amazon EMR Notebook to use for notebook execution.
   *
   * @public
   */
  EditorId?: string | undefined;

  /**
   * The path and file name of the notebook file for this execution, relative to the path specified for the Amazon EMR Notebook. For example, if you specify a path of `s3://MyBucket/MyNotebooks` when you create an Amazon EMR Notebook for a notebook with an ID of `e-ABCDEFGHIJK1234567890ABCD` (the `EditorID` of this request), and you specify a `RelativePath` of `my_notebook_executions/notebook_execution.ipynb`, the location of the file for the notebook execution is `s3://MyBucket/MyNotebooks/e-ABCDEFGHIJK1234567890ABCD/my_notebook_executions/notebook_execution.ipynb`.
   *
   * @public
   */
  RelativePath?: string | undefined;

  /**
   * An optional name for the notebook execution.
   *
   * @public
   */
  NotebookExecutionName?: string | undefined;

  /**
   * Input parameters in JSON format passed to the Amazon EMR Notebook at runtime for execution.
   *
   * @public
   */
  NotebookParams?: string | undefined;

  /**
   * Specifies the execution engine (cluster) that runs the notebook execution.
   *
   * @public
   */
  ExecutionEngine: ExecutionEngineConfig | undefined;

  /**
   * The name or ARN of the IAM role that is used as the service role for Amazon EMR (the Amazon EMR role) for the notebook execution.
   *
   * @public
   */
  ServiceRole: string | undefined;

  /**
   * The unique identifier of the Amazon EC2 security group to associate with the Amazon EMR Notebook for this notebook execution.
   *
   * @public
   */
  NotebookInstanceSecurityGroupId?: string | undefined;

  /**
   * A list of tags associated with a notebook execution. Tags are user-defined key-value pairs that consist of a required key string with a maximum of 128 characters and an optional value string with a maximum of 256 characters.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The Amazon S3 location for the notebook execution input.
   *
   * @public
   */
  NotebookS3Location?: NotebookS3LocationFromInput | undefined;

  /**
   * The Amazon S3 location for the notebook execution output.
   *
   * @public
   */
  OutputNotebookS3Location?: OutputNotebookS3LocationFromInput | undefined;

  /**
   * The output format for the notebook execution.
   *
   * @public
   */
  OutputNotebookFormat?: OutputNotebookFormat | undefined;

  /**
   * The environment variables associated with the notebook execution.
   *
   * @public
   */
  EnvironmentVariables?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface StartNotebookExecutionOutput {
  /**
   * The unique identifier of the notebook execution.
   *
   * @public
   */
  NotebookExecutionId?: string | undefined;
}

/**
 * Output of the `StartSession` operation.
 *
 * @public
 */
export interface StartSessionOutput {
  /**
   * The output contains the ID of the session.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The ID of the cluster that the session was started on.
   *
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * The output contains the ARN of the session.
   *
   * @public
   */
  Arn?: string | undefined;

  /**
   * The Amazon Web Services account ID that owns the session.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The state of the session at the time the request returned. When a session is first created, it enters the `SUBMITTED` state.
   *
   * @public
   */
  State?: SessionState | undefined;
}

/**
 * @public
 */
export interface StopNotebookExecutionInput {
  /**
   * The unique identifier of the notebook execution.
   *
   * @public
   */
  NotebookExecutionId: string | undefined;
}

/**
 * Input to the TerminateJobFlows operation.
 *
 * @public
 */
export interface TerminateJobFlowsInput {
  /**
   * A list of job flows to be shut down.
   *
   * @public
   */
  JobFlowIds: string[] | undefined;
}

/**
 * Input to the `TerminateSession` operation.
 *
 * @public
 */
export interface TerminateSessionInput {
  /**
   * The ID of the cluster that the session belongs to.
   *
   * @public
   */
  ClusterId: string | undefined;

  /**
   * The ID of the session to terminate.
   *
   * @public
   */
  SessionId: string | undefined;
}

/**
 * Output of the `TerminateSession` operation.
 *
 * @public
 */
export interface TerminateSessionOutput {
  /**
   * The ID of the cluster that the session belonged to.
   *
   * @public
   */
  ClusterId: string | undefined;

  /**
   * The ID of the terminated session.
   *
   * @public
   */
  SessionId: string | undefined;

  /**
   * The state of the session after the terminate request has been accepted.
   *
   * @public
   */
  State: SessionState | undefined;
}

/**
 * @public
 */
export interface UpdateStudioInput {
  /**
   * The ID of the Amazon EMR Studio to update.
   *
   * @public
   */
  StudioId: string | undefined;

  /**
   * A descriptive name for the Amazon EMR Studio.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * A detailed description to assign to the Amazon EMR Studio.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * A list of subnet IDs to associate with the Amazon EMR Studio. The list can include new subnet IDs, but must also include all of the subnet IDs previously associated with the Studio. The list order does not matter. A Studio can have a maximum of 5 subnets. The subnets must belong to the same VPC as the Studio.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * The Amazon S3 location to back up Workspaces and notebook files for the Amazon EMR Studio.
   *
   * @public
   */
  DefaultS3Location?: string | undefined;

  /**
   * The KMS key identifier (ARN) used to encrypt Amazon EMR Studio workspace and notebook files when backed up to Amazon S3.
   *
   * @public
   */
  EncryptionKeyArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateStudioSessionMappingInput {
  /**
   * The ID of the Amazon EMR Studio.
   *
   * @public
   */
  StudioId: string | undefined;

  /**
   * The globally unique identifier (GUID) of the user or group. For more information, see [UserId](https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserId) and [GroupId](https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-GroupId) in the *IAM Identity Center Identity Store API Reference*. Either `IdentityName` or `IdentityId` must be specified.
   *
   * @public
   */
  IdentityId?: string | undefined;

  /**
   * The name of the user or group to update. For more information, see [UserName](https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserName) and [DisplayName](https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-DisplayName) in the *IAM Identity Center Identity Store API Reference*. Either `IdentityName` or `IdentityId` must be specified.
   *
   * @public
   */
  IdentityName?: string | undefined;

  /**
   * Specifies whether the identity to update is a user or a group.
   *
   * @public
   */
  IdentityType: IdentityType | undefined;

  /**
   * The Amazon Resource Name (ARN) of the session policy to associate with the specified user or group.
   *
   * @public
   */
  SessionPolicyArn: string | undefined;
}

/**
 * > **Note:** Amazon EMR releases 4.x or later.
 *
 * An optional configuration specification to be used when provisioning cluster instances, which can include configurations for applications and software bundled with Amazon EMR. A configuration consists of a classification, properties, and optional nested configurations. A classification refers to an application-specific configuration file. Properties are the settings you want to change in that file. For more information, see [Configuring Applications](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html).
 *
 * @public
 */
export interface Configuration {
  /**
   * The classification within a configuration.
   *
   * @public
   */
  Classification?: string | undefined;

  /**
   * A list of additional configurations to apply within a configuration object.
   *
   * @public
   */
  Configurations?: Configuration[] | undefined;

  /**
   * A set of properties specified within a configuration classification.
   *
   * @public
   */
  Properties?: Record<string, string> | undefined;
}

/**
 * A configuration for Amazon EMR block public access. When `BlockPublicSecurityGroupRules` is set to `true`, Amazon EMR prevents cluster creation if one of the cluster's security groups has a rule that allows inbound traffic from 0.0.0.0/0 or ::/0 on a port, unless the port is specified as an exception using `PermittedPublicSecurityGroupRuleRanges`.
 *
 * @public
 */
export interface BlockPublicAccessConfiguration {
  /**
   * Indicates whether Amazon EMR block public access is enabled (`true`) or disabled (`false`). By default, the value is `false` for accounts that have created Amazon EMR clusters before July 2019. For accounts created after this, the default is `true`.
   *
   * @public
   */
  BlockPublicSecurityGroupRules: boolean | undefined;

  /**
   * Specifies ports and port ranges that are permitted to have security group rules that allow inbound traffic from all public sources. For example, if Port 23 (Telnet) is specified for `PermittedPublicSecurityGroupRuleRanges`, Amazon EMR allows cluster creation if a security group associated with the cluster has a rule that allows inbound traffic on Port 23 from IPv4 0.0.0.0/0 or IPv6 port ::/0 as the source.
   *
   * By default, Port 22, which is used for SSH access to the cluster Amazon EC2 instances, is in the list of `PermittedPublicSecurityGroupRuleRanges`.
   *
   * @public
   */
  PermittedPublicSecurityGroupRuleRanges?: PortRange[] | undefined;

  /**
   * The classification within a configuration.
   *
   * @public
   */
  Classification?: string | undefined;

  /**
   * A list of additional configurations to apply within a configuration object.
   *
   * @public
   */
  Configurations?: Configuration[] | undefined;

  /**
   * A set of properties specified within a configuration classification.
   *
   * @public
   */
  Properties?: Record<string, string> | undefined;
}

/**
 * The detailed description of the cluster.
 *
 * @public
 */
export interface Cluster {
  /**
   * The unique identifier for the cluster.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the cluster. This parameter can't contain the characters <, >, $, |, or ` (backtick).
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The current status details about the cluster.
   *
   * @public
   */
  Status?: ClusterStatus | undefined;

  /**
   * Provides information about the Amazon EC2 instances in a cluster grouped by category. For example, key name, subnet ID, IAM instance profile, and so on.
   *
   * @public
   */
  Ec2InstanceAttributes?: Ec2InstanceAttributes | undefined;

  /**
   * > **Note:** The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.
   *
   * The instance group configuration of the cluster. A value of `INSTANCE_GROUP` indicates a uniform instance group configuration. A value of `INSTANCE_FLEET` indicates an instance fleets configuration.
   *
   * @public
   */
  InstanceCollectionType?: InstanceCollectionType | undefined;

  /**
   * The path to the Amazon S3 location where logs for this cluster are stored.
   *
   * @public
   */
  LogUri?: string | undefined;

  /**
   * The KMS key used for encrypting log files. This attribute is only available with Amazon EMR 5.30.0 and later, excluding Amazon EMR 6.0.0.
   *
   * @public
   */
  LogEncryptionKmsKeyId?: string | undefined;

  /**
   * The AMI version requested for this cluster.
   *
   * @public
   */
  RequestedAmiVersion?: string | undefined;

  /**
   * The AMI version running on this cluster.
   *
   * @public
   */
  RunningAmiVersion?: string | undefined;

  /**
   * The Amazon EMR release label, which determines the version of open-source application packages installed on the cluster. Release labels are in the form `emr-x.x.x`, where x.x.x is an Amazon EMR release version such as `emr-5.14.0`. For more information about Amazon EMR release versions and included application versions and features, see [https://docs.aws.amazon.com/emr/latest/ReleaseGuide/](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/). The release label applies only to Amazon EMR releases version 4.0 and later. Earlier versions use `AmiVersion`.
   *
   * @public
   */
  ReleaseLabel?: string | undefined;

  /**
   * Specifies whether the cluster should terminate after completing all steps.
   *
   * @public
   */
  AutoTerminate?: boolean | undefined;

  /**
   * Indicates whether Amazon EMR will lock the cluster to prevent the Amazon EC2 instances from being terminated by an API call or user intervention, or in the event of a cluster error.
   *
   * @public
   */
  TerminationProtected?: boolean | undefined;

  /**
   * Indicates whether Amazon EMR should gracefully replace Amazon EC2 core instances that have degraded within the cluster.
   *
   * @public
   */
  UnhealthyNodeReplacement?: boolean | undefined;

  /**
   * Indicates whether the cluster is visible to IAM principals in the Amazon Web Services account associated with the cluster. When `true`, IAM principals in the Amazon Web Services account can perform Amazon EMR cluster actions on the cluster that their IAM policies allow. When `false`, only the IAM principal that created the cluster and the Amazon Web Services account root user can perform Amazon EMR actions, regardless of IAM permissions policies attached to other IAM principals.
   *
   * The default value is `true` if a value is not provided when creating a cluster using the Amazon EMR API RunJobFlow command, the CLI [create-cluster](https://docs.aws.amazon.com/cli/latest/reference/emr/create-cluster.html) command, or the Amazon Web Services Management Console.
   *
   * @public
   */
  VisibleToAllUsers?: boolean | undefined;

  /**
   * The applications installed on this cluster.
   *
   * @public
   */
  Applications?: Application[] | undefined;

  /**
   * A list of tags associated with a cluster.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The IAM role that Amazon EMR assumes in order to access Amazon Web Services resources on your behalf.
   *
   * @public
   */
  ServiceRole?: string | undefined;

  /**
   * An approximation of the cost of the cluster, represented in m1.small/hours. This value is incremented one time for every hour an m1.small instance runs. Larger instances are weighted more, so an Amazon EC2 instance that is roughly four times more expensive would result in the normalized instance hours being incremented by four. This result is only an approximation and does not reflect the actual billing rate.
   *
   * @public
   */
  NormalizedInstanceHours?: number | undefined;

  /**
   * The DNS name of the master node. If the cluster is on a private subnet, this is the private DNS name. On a public subnet, this is the public DNS name.
   *
   * @public
   */
  MasterPublicDnsName?: string | undefined;

  /**
   * Applies only to Amazon EMR releases 4.x and later. The list of configurations that are supplied to the Amazon EMR cluster.
   *
   * @public
   */
  Configurations?: Configuration[] | undefined;

  /**
   * The name of the security configuration applied to the cluster.
   *
   * @public
   */
  SecurityConfiguration?: string | undefined;

  /**
   * An IAM role for automatic scaling policies. The default role is `EMR_AutoScaling_DefaultRole`. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate Amazon EC2 instances in an instance group.
   *
   * @public
   */
  AutoScalingRole?: string | undefined;

  /**
   * The way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an instance group is resized. `TERMINATE_AT_INSTANCE_HOUR` indicates that Amazon EMR terminates nodes at the instance-hour boundary, regardless of when the request to terminate the instance was submitted. This option is only available with Amazon EMR 5.1.0 and later and is the default for clusters created using that version. `TERMINATE_AT_TASK_COMPLETION` indicates that Amazon EMR adds nodes to a deny list and drains tasks from nodes before terminating the Amazon EC2 instances, regardless of the instance-hour boundary. With either behavior, Amazon EMR removes the least active nodes first and blocks instance termination if it could lead to HDFS corruption. `TERMINATE_AT_TASK_COMPLETION` is available only in Amazon EMR releases 4.1.0 and later, and is the default for versions of Amazon EMR earlier than 5.1.0.
   *
   * @public
   */
  ScaleDownBehavior?: ScaleDownBehavior | undefined;

  /**
   * Available only in Amazon EMR releases 5.7.0 and later. The ID of a custom Amazon EBS-backed Linux AMI if the cluster uses a custom AMI.
   *
   * @public
   */
  CustomAmiId?: string | undefined;

  /**
   * The size, in GiB, of the Amazon EBS root device volume of the Linux AMI that is used for each Amazon EC2 instance. Available in Amazon EMR releases 4.x and later.
   *
   * @public
   */
  EbsRootVolumeSize?: number | undefined;

  /**
   * Applies only when `CustomAmiID` is used. Specifies the type of updates that the Amazon Linux AMI package repositories apply when an instance boots using the AMI.
   *
   * @public
   */
  RepoUpgradeOnBoot?: RepoUpgradeOnBoot | undefined;

  /**
   * Attributes for Kerberos configuration when Kerberos authentication is enabled using a security configuration. For more information see [Use Kerberos Authentication](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html) in the *Amazon EMR Management Guide*.
   *
   * @public
   */
  KerberosAttributes?: KerberosAttributes | undefined;

  /**
   * The Amazon Resource Name of the cluster.
   *
   * @public
   */
  ClusterArn?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Outpost where the cluster is launched.
   *
   * @public
   */
  OutpostArn?: string | undefined;

  /**
   * Specifies the number of steps that can be executed concurrently.
   *
   * @public
   */
  StepConcurrencyLevel?: number | undefined;

  /**
   * Placement group configured for an Amazon EMR cluster.
   *
   * @public
   */
  PlacementGroups?: PlacementGroupConfig[] | undefined;

  /**
   * The Amazon Linux release specified in a cluster launch RunJobFlow request. If no Amazon Linux release was specified, the default Amazon Linux release is shown in the response.
   *
   * @public
   */
  OSReleaseLabel?: string | undefined;

  /**
   * The IOPS, of the Amazon EBS root device volume of the Linux AMI that is used for each Amazon EC2 instance. Available in Amazon EMR releases 6.15.0 and later.
   *
   * @public
   */
  EbsRootVolumeIops?: number | undefined;

  /**
   * The throughput, in MiB/s, of the Amazon EBS root device volume of the Linux AMI that is used for each Amazon EC2 instance. Available in Amazon EMR releases 6.15.0 and later.
   *
   * @public
   */
  EbsRootVolumeThroughput?: number | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  ExtendedSupport?: boolean | undefined;

  /**
   * Contains Cloudwatch log configuration metadata and settings.
   *
   * @public
   */
  MonitoringConfiguration?: MonitoringConfiguration | undefined;

  /**
   * Indicates whether Spark Connect sessions are enabled on the cluster.
   *
   * @public
   */
  SessionEnabled?: boolean | undefined;
}

/**
 * Configuration defining a new instance group.
 *
 * @public
 */
export interface InstanceGroupConfig {
  /**
   * Friendly name given to the instance group.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * Market type of the Amazon EC2 instances used to create a cluster node.
   *
   * @public
   */
  Market?: MarketType | undefined;

  /**
   * The role of the instance group in the cluster.
   *
   * @public
   */
  InstanceRole: InstanceRoleType | undefined;

  /**
   * The bid price for each Amazon EC2 Spot Instance type as defined by `InstanceType`. Expressed in USD. If neither `BidPrice` nor `BidPriceAsPercentageOfOnDemandPrice` is provided, `BidPriceAsPercentageOfOnDemandPrice` defaults to 100%.
   *
   * @public
   */
  BidPrice?: string | undefined;

  /**
   * The Amazon EC2 instance type for all instances in the instance group.
   *
   * @public
   */
  InstanceType: string | undefined;

  /**
   * Target number of instances for the instance group.
   *
   * @public
   */
  InstanceCount: number | undefined;

  /**
   * > **Note:** Amazon EMR releases 4.x or later.
   *
   * The list of configurations supplied for an Amazon EMR cluster instance group. You can specify a separate configuration for each instance group (master, core, and task).
   *
   * @public
   */
  Configurations?: Configuration[] | undefined;

  /**
   * EBS configurations that will be attached to each Amazon EC2 instance in the instance group.
   *
   * @public
   */
  EbsConfiguration?: EbsConfiguration | undefined;

  /**
   * An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates Amazon EC2 instances in response to the value of a CloudWatch metric. See PutAutoScalingPolicy.
   *
   * @public
   */
  AutoScalingPolicy?: AutoScalingPolicy | undefined;

  /**
   * The custom AMI ID to use for the provisioned instance group.
   *
   * @public
   */
  CustomAmiId?: string | undefined;
}

/**
 * Modify the size or configurations of an instance group.
 *
 * @public
 */
export interface InstanceGroupModifyConfig {
  /**
   * Unique ID of the instance group to modify.
   *
   * @public
   */
  InstanceGroupId: string | undefined;

  /**
   * Target size for the instance group.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * The Amazon EC2 InstanceIds to terminate. After you terminate the instances, the instance group will not return to its original requested size.
   *
   * @public
   */
  EC2InstanceIdsToTerminate?: string[] | undefined;

  /**
   * Policy for customizing shrink operations.
   *
   * @public
   */
  ShrinkPolicy?: ShrinkPolicy | undefined;

  /**
   * Type of reconfiguration requested. Valid values are MERGE and OVERWRITE.
   *
   * @public
   */
  ReconfigurationType?: ReconfigurationType | undefined;

  /**
   * A list of new or modified configurations to apply for an instance group.
   *
   * @public
   */
  Configurations?: Configuration[] | undefined;
}

/**
 * An instance type configuration for each instance type in an instance fleet, which determines the Amazon EC2 instances Amazon EMR attempts to provision to fulfill On-Demand and Spot target capacities. When you use an allocation strategy, you can include a maximum of 30 instance type configurations for a fleet. For more information about how to use an allocation strategy, see [Configure Instance Fleets](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-instance-fleet.html). Without an allocation strategy, you may specify a maximum of five instance type configurations for a fleet.
 *
 * > **Note:** The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.
 *
 * @public
 */
export interface InstanceTypeConfig {
  /**
   * An Amazon EC2 instance type, such as `m3.xlarge`.
   *
   * @public
   */
  InstanceType: string | undefined;

  /**
   * The number of units that a provisioned instance of this type provides toward fulfilling the target capacities defined in InstanceFleetConfig. This value is 1 for a master instance fleet, and must be 1 or greater for core and task instance fleets. Defaults to 1 if not specified.
   *
   * @public
   */
  WeightedCapacity?: number | undefined;

  /**
   * The bid price for each Amazon EC2 Spot Instance type as defined by `InstanceType`. Expressed in USD. If neither `BidPrice` nor `BidPriceAsPercentageOfOnDemandPrice` is provided, `BidPriceAsPercentageOfOnDemandPrice` defaults to 100%.
   *
   * @public
   */
  BidPrice?: string | undefined;

  /**
   * The bid price, as a percentage of On-Demand price, for each Amazon EC2 Spot Instance as defined by `InstanceType`. Expressed as a number (for example, 20 specifies 20%). If neither `BidPrice` nor `BidPriceAsPercentageOfOnDemandPrice` is provided, `BidPriceAsPercentageOfOnDemandPrice` defaults to 100%.
   *
   * @public
   */
  BidPriceAsPercentageOfOnDemandPrice?: number | undefined;

  /**
   * The configuration of Amazon Elastic Block Store (Amazon EBS) attached to each instance as defined by `InstanceType`.
   *
   * @public
   */
  EbsConfiguration?: EbsConfiguration | undefined;

  /**
   * A configuration classification that applies when provisioning cluster instances, which can include configurations for applications and software that run on the cluster.
   *
   * @public
   */
  Configurations?: Configuration[] | undefined;

  /**
   * The custom AMI ID to use for the instance type.
   *
   * @public
   */
  CustomAmiId?: string | undefined;

  /**
   * The priority at which Amazon EMR launches the Amazon EC2 instances with this instance type. Priority starts at 0, which is the highest priority. Amazon EMR considers the highest priority first.
   *
   * @public
   */
  Priority?: number | undefined;
}

/**
 * The configuration specification for each instance type in an instance fleet.
 *
 * > **Note:** The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.
 *
 * @public
 */
export interface InstanceTypeSpecification {
  /**
   * The Amazon EC2 instance type, for example `m3.xlarge`.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The number of units that a provisioned instance of this type provides toward fulfilling the target capacities defined in InstanceFleetConfig. Capacity values represent performance characteristics such as vCPUs, memory, or I/O. If not specified, the default value is 1.
   *
   * @public
   */
  WeightedCapacity?: number | undefined;

  /**
   * The bid price for each Amazon EC2 Spot Instance type as defined by `InstanceType`. Expressed in USD. If neither `BidPrice` nor `BidPriceAsPercentageOfOnDemandPrice` is provided, `BidPriceAsPercentageOfOnDemandPrice` defaults to 100%.
   *
   * @public
   */
  BidPrice?: string | undefined;

  /**
   * The bid price, as a percentage of On-Demand price, for each Amazon EC2 Spot Instance as defined by `InstanceType`. Expressed as a number (for example, 20 specifies 20%).
   *
   * @public
   */
  BidPriceAsPercentageOfOnDemandPrice?: number | undefined;

  /**
   * A configuration classification that applies when provisioning cluster instances, which can include configurations for applications and software bundled with Amazon EMR.
   *
   * @public
   */
  Configurations?: Configuration[] | undefined;

  /**
   * The configuration of Amazon Elastic Block Store (Amazon EBS) attached to each instance as defined by `InstanceType`.
   *
   * @public
   */
  EbsBlockDevices?: EbsBlockDevice[] | undefined;

  /**
   * Evaluates to `TRUE` when the specified `InstanceType` is EBS-optimized.
   *
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * The custom AMI ID to use for the instance type.
   *
   * @public
   */
  CustomAmiId?: string | undefined;

  /**
   * The priority at which Amazon EMR launches the Amazon EC2 instances with this instance type. Priority starts at 0, which is the highest priority. Amazon EMR considers the highest priority first.
   *
   * @public
   */
  Priority?: number | undefined;
}

/**
 * Detailed information about a Spark Connect session.
 *
 * @public
 */
export interface Session {
  /**
   * The ID of the session.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The ID of the cluster that the session belongs to.
   *
   * @public
   */
  ClusterId: string | undefined;

  /**
   * The name of the session, if one was provided at creation time.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the session.
   *
   * @public
   */
  Arn: string | undefined;

  /**
   * The current state of the session. Valid values are `SUBMITTED`, `STARTING`, `STARTED`, `IDLE`, `BUSY`, `TERMINATING`, `TERMINATED`, and `FAILED`.
   *
   * @public
   */
  State: SessionState | undefined;

  /**
   * A human-readable message describing the most recent state change.
   *
   * @public
   */
  StateChangeReason?: string | undefined;

  /**
   * The Amazon EMR release label of the cluster that the session is running on.
   *
   * @public
   */
  ReleaseLabel?: string | undefined;

  /**
   * The execution role ARN for the session. Amazon EMR uses this role to access Amazon Web Services resources on your behalf during session execution.
   *
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * The Amazon Web Services account ID that owns the session.
   *
   * @public
   */
  AccountId?: string | undefined;

  /**
   * The date and time that the session was created.
   *
   * @public
   */
  CreatedAt?: Date | undefined;

  /**
   * The date and time that the session was last updated.
   *
   * @public
   */
  UpdatedAt?: Date | undefined;

  /**
   * The date and time that the session entered the `STARTED` state.
   *
   * @public
   */
  StartedAt?: Date | undefined;

  /**
   * The date and time that the session was terminated or failed.
   *
   * @public
   */
  EndedAt?: Date | undefined;

  /**
   * The date and time that the session last entered the `IDLE` state.
   *
   * @public
   */
  IdleSince?: Date | undefined;

  /**
   * The configuration overrides for the session. Only runtime configuration overrides are supported.
   *
   * @public
   */
  EngineConfigurations?: Configuration[] | undefined;

  /**
   * The monitoring configuration for the session.
   *
   * @public
   */
  MonitoringConfiguration?: SessionMonitoringConfiguration | undefined;

  /**
   * The idle timeout, in minutes. If the session is idle for this duration, Amazon EMR automatically terminates it.
   *
   * @public
   */
  SessionIdleTimeoutInMinutes?: number | undefined;

  /**
   * The Spark Connect server URL for the session. Use this URL with the `Credentials` returned by `GetSessionEndpoint` to connect directly to the session over VPC peering.
   *
   * @public
   */
  ServerUrl?: string | undefined;

  /**
   * The tags associated with the session.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * Input to the `StartSession` operation.
 *
 * @public
 */
export interface StartSessionInput {
  /**
   * An optional name for the session.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The ID of the cluster on which to start the session.
   *
   * @public
   */
  ClusterId: string | undefined;

  /**
   * The execution role ARN for the session. Amazon EMR uses this role to access Amazon Web Services resources on your behalf during session execution.
   *
   * @public
   */
  ExecutionRoleArn?: string | undefined;

  /**
   * The configuration overrides for the session. Only runtime configuration overrides are supported.
   *
   * @public
   */
  EngineConfigurations?: Configuration[] | undefined;

  /**
   * The monitoring configuration that controls where session logs are published, such as Amazon S3, CloudWatch, or managed logging.
   *
   * @public
   */
  MonitoringConfiguration?: SessionMonitoringConfiguration | undefined;

  /**
   * The idle timeout, in minutes. If the session is idle for this duration, Amazon EMR EC2 automatically terminates it.
   *
   * @public
   */
  SessionIdleTimeoutInMinutes?: number | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. If you retry a request that completed successfully using the same client request token, the service returns the original response without performing the operation again.
   *
   * @public
   */
  ClientRequestToken?: string | undefined;

  /**
   * The tags to assign to the session.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * This output contains the description of the cluster.
 *
 * @public
 */
export interface DescribeClusterOutput {
  /**
   * This output contains the details for the requested cluster.
   *
   * @public
   */
  Cluster?: Cluster | undefined;
}

/**
 * @public
 */
export interface GetBlockPublicAccessConfigurationOutput {
  /**
   * A configuration for Amazon EMR block public access. The configuration applies to all clusters created in your account for the current Region. The configuration specifies whether block public access is enabled. If block public access is enabled, security groups associated with the cluster cannot have rules that allow inbound traffic from 0.0.0.0/0 or ::/0 on a port, unless the port is specified as an exception using `PermittedPublicSecurityGroupRuleRanges` in the `BlockPublicAccessConfiguration`. By default, Port 22 (SSH) is an exception, and public access is allowed on this port. You can change this by updating the block public access configuration to remove the exception.
   *
   * > **Note:** For accounts that created clusters in a Region before November 25, 2019, block public access is disabled by default in that Region. To use this feature, you must manually enable and configure it. For accounts that did not create an Amazon EMR cluster in a Region before this date, block public access is enabled by default in that Region.
   *
   * @public
   */
  BlockPublicAccessConfiguration: BlockPublicAccessConfiguration | undefined;

  /**
   * Properties that describe the Amazon Web Services principal that created the `BlockPublicAccessConfiguration` using the `PutBlockPublicAccessConfiguration` action as well as the date and time that the configuration was created. Each time a configuration for block public access is updated, Amazon EMR updates this metadata.
   *
   * @public
   */
  BlockPublicAccessConfigurationMetadata: BlockPublicAccessConfigurationMetadata | undefined;
}

/**
 * Output of the `GetSession` operation.
 *
 * @public
 */
export interface GetSessionOutput {
  /**
   * The output displays information about the session.
   *
   * @public
   */
  Session: Session | undefined;
}

/**
 * @public
 */
export interface PutBlockPublicAccessConfigurationInput {
  /**
   * A configuration for Amazon EMR block public access. The configuration applies to all clusters created in your account for the current Region. The configuration specifies whether block public access is enabled. If block public access is enabled, security groups associated with the cluster cannot have rules that allow inbound traffic from 0.0.0.0/0 or ::/0 on a port, unless the port is specified as an exception using `PermittedPublicSecurityGroupRuleRanges` in the `BlockPublicAccessConfiguration`. By default, Port 22 (SSH) is an exception, and public access is allowed on this port. You can change this by updating `BlockPublicSecurityGroupRules` to remove the exception.
   *
   * > **Note:** For accounts that created clusters in a Region before November 25, 2019, block public access is disabled by default in that Region. To use this feature, you must manually enable and configure it. For accounts that did not create an Amazon EMR cluster in a Region before this date, block public access is enabled by default in that Region.
   *
   * @public
   */
  BlockPublicAccessConfiguration: BlockPublicAccessConfiguration | undefined;
}

/**
 * Input to an AddInstanceGroups call.
 *
 * @public
 */
export interface AddInstanceGroupsInput {
  /**
   * Instance groups to add.
   *
   * @public
   */
  InstanceGroups: InstanceGroupConfig[] | undefined;

  /**
   * Job flow in which to add the instance groups.
   *
   * @public
   */
  JobFlowId: string | undefined;
}

/**
 * Describes an instance fleet, which is a group of Amazon EC2 instances that host a particular node type (master, core, or task) in an Amazon EMR cluster. Instance fleets can consist of a mix of instance types and On-Demand and Spot Instances, which are provisioned to meet a defined target capacity.
 *
 * > **Note:** The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.
 *
 * @public
 */
export interface InstanceFleet {
  /**
   * The unique identifier of the instance fleet.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * A friendly name for the instance fleet.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The current status of the instance fleet.
   *
   * @public
   */
  Status?: InstanceFleetStatus | undefined;

  /**
   * The node type that the instance fleet hosts. Valid values are MASTER, CORE, or TASK.
   *
   * @public
   */
  InstanceFleetType?: InstanceFleetType | undefined;

  /**
   * The target capacity of On-Demand units for the instance fleet, which determines how many On-Demand Instances to provision. When the instance fleet launches, Amazon EMR tries to provision On-Demand Instances as specified by InstanceTypeConfig. Each instance configuration has a specified `WeightedCapacity`. When an On-Demand Instance is provisioned, the `WeightedCapacity` units count toward the target capacity. Amazon EMR provisions instances until the target capacity is totally fulfilled, even if this results in an overage. For example, if there are 2 units remaining to fulfill capacity, and Amazon EMR can only provision an instance with a `WeightedCapacity` of 5 units, the instance is provisioned, and the target capacity is exceeded by 3 units. You can use InstanceFleet$ProvisionedOnDemandCapacity to determine the Spot capacity units that have been provisioned for the instance fleet.
   *
   * > **Note:** If not specified or set to 0, only Spot Instances are provisioned for the instance fleet using `TargetSpotCapacity`. At least one of `TargetSpotCapacity` and `TargetOnDemandCapacity` should be greater than 0. For a master instance fleet, only one of `TargetSpotCapacity` and `TargetOnDemandCapacity` can be specified, and its value must be 1.
   *
   * @public
   */
  TargetOnDemandCapacity?: number | undefined;

  /**
   * The target capacity of Spot units for the instance fleet, which determines how many Spot Instances to provision. When the instance fleet launches, Amazon EMR tries to provision Spot Instances as specified by InstanceTypeConfig. Each instance configuration has a specified `WeightedCapacity`. When a Spot instance is provisioned, the `WeightedCapacity` units count toward the target capacity. Amazon EMR provisions instances until the target capacity is totally fulfilled, even if this results in an overage. For example, if there are 2 units remaining to fulfill capacity, and Amazon EMR can only provision an instance with a `WeightedCapacity` of 5 units, the instance is provisioned, and the target capacity is exceeded by 3 units. You can use InstanceFleet$ProvisionedSpotCapacity to determine the Spot capacity units that have been provisioned for the instance fleet.
   *
   * > **Note:** If not specified or set to 0, only On-Demand Instances are provisioned for the instance fleet. At least one of `TargetSpotCapacity` and `TargetOnDemandCapacity` should be greater than 0. For a master instance fleet, only one of `TargetSpotCapacity` and `TargetOnDemandCapacity` can be specified, and its value must be 1.
   *
   * @public
   */
  TargetSpotCapacity?: number | undefined;

  /**
   * The number of On-Demand units that have been provisioned for the instance fleet to fulfill `TargetOnDemandCapacity`. This provisioned capacity might be less than or greater than `TargetOnDemandCapacity`.
   *
   * @public
   */
  ProvisionedOnDemandCapacity?: number | undefined;

  /**
   * The number of Spot units that have been provisioned for this instance fleet to fulfill `TargetSpotCapacity`. This provisioned capacity might be less than or greater than `TargetSpotCapacity`.
   *
   * @public
   */
  ProvisionedSpotCapacity?: number | undefined;

  /**
   * An array of specifications for the instance types that comprise an instance fleet.
   *
   * @public
   */
  InstanceTypeSpecifications?: InstanceTypeSpecification[] | undefined;

  /**
   * Describes the launch specification for an instance fleet.
   *
   * @public
   */
  LaunchSpecifications?: InstanceFleetProvisioningSpecifications | undefined;

  /**
   * The resize specification for the instance fleet.
   *
   * @public
   */
  ResizeSpecifications?: InstanceFleetResizingSpecifications | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  Context?: string | undefined;
}

/**
 * The configuration that defines an instance fleet.
 *
 * > **Note:** The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.
 *
 * @public
 */
export interface InstanceFleetConfig {
  /**
   * The friendly name of the instance fleet.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The node type that the instance fleet hosts. Valid values are MASTER, CORE, and TASK.
   *
   * @public
   */
  InstanceFleetType: InstanceFleetType | undefined;

  /**
   * The target capacity of On-Demand units for the instance fleet, which determines how many On-Demand Instances to provision. When the instance fleet launches, Amazon EMR tries to provision On-Demand Instances as specified by InstanceTypeConfig. Each instance configuration has a specified `WeightedCapacity`. When an On-Demand Instance is provisioned, the `WeightedCapacity` units count toward the target capacity. Amazon EMR provisions instances until the target capacity is totally fulfilled, even if this results in an overage. For example, if there are 2 units remaining to fulfill capacity, and Amazon EMR can only provision an instance with a `WeightedCapacity` of 5 units, the instance is provisioned, and the target capacity is exceeded by 3 units.
   *
   * > **Note:** If not specified or set to 0, only Spot Instances are provisioned for the instance fleet using `TargetSpotCapacity`. At least one of `TargetSpotCapacity` and `TargetOnDemandCapacity` should be greater than 0. For a master instance fleet, only one of `TargetSpotCapacity` and `TargetOnDemandCapacity` can be specified, and its value must be 1.
   *
   * @public
   */
  TargetOnDemandCapacity?: number | undefined;

  /**
   * The target capacity of Spot units for the instance fleet, which determines how many Spot Instances to provision. When the instance fleet launches, Amazon EMR tries to provision Spot Instances as specified by InstanceTypeConfig. Each instance configuration has a specified `WeightedCapacity`. When a Spot Instance is provisioned, the `WeightedCapacity` units count toward the target capacity. Amazon EMR provisions instances until the target capacity is totally fulfilled, even if this results in an overage. For example, if there are 2 units remaining to fulfill capacity, and Amazon EMR can only provision an instance with a `WeightedCapacity` of 5 units, the instance is provisioned, and the target capacity is exceeded by 3 units.
   *
   * > **Note:** If not specified or set to 0, only On-Demand Instances are provisioned for the instance fleet. At least one of `TargetSpotCapacity` and `TargetOnDemandCapacity` should be greater than 0. For a master instance fleet, only one of `TargetSpotCapacity` and `TargetOnDemandCapacity` can be specified, and its value must be 1.
   *
   * @public
   */
  TargetSpotCapacity?: number | undefined;

  /**
   * The instance type configurations that define the Amazon EC2 instances in the instance fleet.
   *
   * @public
   */
  InstanceTypeConfigs?: InstanceTypeConfig[] | undefined;

  /**
   * The launch specification for the instance fleet.
   *
   * @public
   */
  LaunchSpecifications?: InstanceFleetProvisioningSpecifications | undefined;

  /**
   * The resize specification for the instance fleet.
   *
   * @public
   */
  ResizeSpecifications?: InstanceFleetResizingSpecifications | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  Context?: string | undefined;
}

/**
 * Configuration parameters for an instance fleet modification request.
 *
 * > **Note:** The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.
 *
 * @public
 */
export interface InstanceFleetModifyConfig {
  /**
   * A unique identifier for the instance fleet.
   *
   * @public
   */
  InstanceFleetId: string | undefined;

  /**
   * The target capacity of On-Demand units for the instance fleet. For more information see InstanceFleetConfig$TargetOnDemandCapacity.
   *
   * @public
   */
  TargetOnDemandCapacity?: number | undefined;

  /**
   * The target capacity of Spot units for the instance fleet. For more information, see InstanceFleetConfig$TargetSpotCapacity.
   *
   * @public
   */
  TargetSpotCapacity?: number | undefined;

  /**
   * The resize specification for the instance fleet.
   *
   * @public
   */
  ResizeSpecifications?: InstanceFleetResizingSpecifications | undefined;

  /**
   * An array of InstanceTypeConfig objects that specify how Amazon EMR provisions Amazon EC2 instances when it fulfills On-Demand and Spot capacities. For more information, see [InstanceTypeConfig](https://docs.aws.amazon.com/emr/latest/APIReference/API_InstanceTypeConfig.html).
   *
   * @public
   */
  InstanceTypeConfigs?: InstanceTypeConfig[] | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  Context?: string | undefined;
}

/**
 * Output of the `ListSessions` operation.
 *
 * @public
 */
export interface ListSessionsOutput {
  /**
   * The sessions that match the request.
   *
   * @public
   */
  Sessions?: Session[] | undefined;

  /**
   * The pagination token to use in a subsequent `ListSessions` call to retrieve the next page of results. This field is absent when there are no more results.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Change the size of some instance groups.
 *
 * @public
 */
export interface ModifyInstanceGroupsInput {
  /**
   * The ID of the cluster to which the instance group belongs.
   *
   * @public
   */
  ClusterId?: string | undefined;

  /**
   * Instance groups to change.
   *
   * @public
   */
  InstanceGroups?: InstanceGroupModifyConfig[] | undefined;
}

/**
 * @public
 */
export interface AddInstanceFleetInput {
  /**
   * The unique identifier of the cluster.
   *
   * @public
   */
  ClusterId: string | undefined;

  /**
   * Specifies the configuration of the instance fleet.
   *
   * @public
   */
  InstanceFleet: InstanceFleetConfig | undefined;
}

/**
 * This entity represents an instance group, which is a group of instances that have common purpose. For example, CORE instance group is used for HDFS.
 *
 * @public
 */
export interface InstanceGroup {
  /**
   * The identifier of the instance group.
   *
   * @public
   */
  Id?: string | undefined;

  /**
   * The name of the instance group.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The marketplace to provision instances for this group. Valid values are ON_DEMAND or SPOT.
   *
   * @public
   */
  Market?: MarketType | undefined;

  /**
   * The type of the instance group. Valid values are MASTER, CORE or TASK.
   *
   * @public
   */
  InstanceGroupType?: InstanceGroupType | undefined;

  /**
   * The bid price for each Amazon EC2 Spot Instance type as defined by `InstanceType`. Expressed in USD. If neither `BidPrice` nor `BidPriceAsPercentageOfOnDemandPrice` is provided, `BidPriceAsPercentageOfOnDemandPrice` defaults to 100%.
   *
   * @public
   */
  BidPrice?: string | undefined;

  /**
   * The Amazon EC2 instance type for all instances in the instance group.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The target number of instances for the instance group.
   *
   * @public
   */
  RequestedInstanceCount?: number | undefined;

  /**
   * The number of instances currently running in this instance group.
   *
   * @public
   */
  RunningInstanceCount?: number | undefined;

  /**
   * The current status of the instance group.
   *
   * @public
   */
  Status?: InstanceGroupStatus | undefined;

  /**
   * > **Note:** Amazon EMR releases 4.x or later.
   *
   * The list of configurations supplied for an Amazon EMR cluster instance group. You can specify a separate configuration for each instance group (master, core, and task).
   *
   * @public
   */
  Configurations?: Configuration[] | undefined;

  /**
   * The version number of the requested configuration specification for this instance group.
   *
   * @public
   */
  ConfigurationsVersion?: number | undefined;

  /**
   * A list of configurations that were successfully applied for an instance group last time.
   *
   * @public
   */
  LastSuccessfullyAppliedConfigurations?: Configuration[] | undefined;

  /**
   * The version number of a configuration specification that was successfully applied for an instance group last time.
   *
   * @public
   */
  LastSuccessfullyAppliedConfigurationsVersion?: number | undefined;

  /**
   * The EBS block devices that are mapped to this instance group.
   *
   * @public
   */
  EbsBlockDevices?: EbsBlockDevice[] | undefined;

  /**
   * If the instance group is EBS-optimized. An Amazon EBS-optimized instance uses an optimized configuration stack and provides additional, dedicated capacity for Amazon EBS I/O.
   *
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * Policy for customizing shrink operations.
   *
   * @public
   */
  ShrinkPolicy?: ShrinkPolicy | undefined;

  /**
   * An automatic scaling policy for a core instance group or task instance group in an Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically adds and terminates Amazon EC2 instances in response to the value of a CloudWatch metric. See PutAutoScalingPolicy.
   *
   * @public
   */
  AutoScalingPolicy?: AutoScalingPolicyDescription | undefined;

  /**
   * The custom AMI ID to use for the provisioned instance group.
   *
   * @public
   */
  CustomAmiId?: string | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceFleetInput {
  /**
   * The unique identifier of the cluster.
   *
   * @public
   */
  ClusterId: string | undefined;

  /**
   * The configuration parameters of the instance fleet.
   *
   * @public
   */
  InstanceFleet: InstanceFleetModifyConfig | undefined;
}

/**
 * @public
 */
export interface ListInstanceFleetsOutput {
  /**
   * The list of instance fleets for the cluster and given filters.
   *
   * @public
   */
  InstanceFleets?: InstanceFleet[] | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * This input determines which instance groups to retrieve.
 *
 * @public
 */
export interface ListInstanceGroupsOutput {
  /**
   * The list of instance groups for the cluster and given filters.
   *
   * @public
   */
  InstanceGroups?: InstanceGroup[] | undefined;

  /**
   * The pagination token that indicates the next set of results to retrieve.
   *
   * @public
   */
  Marker?: string | undefined;
}

/**
 * A description of the Amazon EC2 instance on which the cluster (job flow) runs. A valid JobFlowInstancesConfig must contain either InstanceGroups or InstanceFleets. They cannot be used together. You may also have MasterInstanceType, SlaveInstanceType, and InstanceCount (all three must be present), but we don't recommend this configuration.
 *
 * @public
 */
export interface JobFlowInstancesConfig {
  /**
   * The Amazon EC2 instance type of the master node.
   *
   * @public
   */
  MasterInstanceType?: string | undefined;

  /**
   * The Amazon EC2 instance type of the core and task nodes.
   *
   * @public
   */
  SlaveInstanceType?: string | undefined;

  /**
   * The number of Amazon EC2 instances in the cluster.
   *
   * @public
   */
  InstanceCount?: number | undefined;

  /**
   * Configuration for the instance groups in a cluster.
   *
   * @public
   */
  InstanceGroups?: InstanceGroupConfig[] | undefined;

  /**
   * > **Note:** The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.
   *
   * Describes the Amazon EC2 instances and instance configurations for clusters that use the instance fleet configuration.
   *
   * @public
   */
  InstanceFleets?: InstanceFleetConfig[] | undefined;

  /**
   * The name of the Amazon EC2 key pair that can be used to connect to the master node using SSH as the user called "hadoop."
   *
   * @public
   */
  Ec2KeyName?: string | undefined;

  /**
   * The Availability Zone in which the cluster runs.
   *
   * @public
   */
  Placement?: PlacementType | undefined;

  /**
   * Specifies whether the cluster should remain available after completing all steps. Defaults to `false`. For more information about configuring cluster termination, see [Control Cluster Termination](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html) in the *EMR Management Guide*.
   *
   * @public
   */
  KeepJobFlowAliveWhenNoSteps?: boolean | undefined;

  /**
   * Specifies whether to lock the cluster to prevent the Amazon EC2 instances from being terminated by API call, user intervention, or in the event of a job-flow error.
   *
   * @public
   */
  TerminationProtected?: boolean | undefined;

  /**
   * Indicates whether Amazon EMR should gracefully replace core nodes that have degraded within the cluster.
   *
   * @public
   */
  UnhealthyNodeReplacement?: boolean | undefined;

  /**
   * Applies only to Amazon EMR release versions earlier than 4.0. The Hadoop version for the cluster. Valid inputs are "0.18" (no longer maintained), "0.20" (no longer maintained), "0.20.205" (no longer maintained), "1.0.3", "2.2.0", or "2.4.0". If you do not set this value, the default of 0.18 is used, unless the `AmiVersion` parameter is set in the RunJobFlow call, in which case the default version of Hadoop for that AMI version is used.
   *
   * @public
   */
  HadoopVersion?: string | undefined;

  /**
   * Applies to clusters that use the uniform instance group configuration. To launch the cluster in Amazon Virtual Private Cloud (Amazon VPC), set this parameter to the identifier of the Amazon VPC subnet where you want the cluster to launch. If you do not specify this value and your account supports EC2-Classic, the cluster launches in EC2-Classic.
   *
   * @public
   */
  Ec2SubnetId?: string | undefined;

  /**
   * Applies to clusters that use the instance fleet configuration. When multiple Amazon EC2 subnet IDs are specified, Amazon EMR evaluates them and launches instances in the optimal subnet.
   *
   * > **Note:** The instance fleet configuration is available only in Amazon EMR releases 4.8.0 and later, excluding 5.0.x versions.
   *
   * @public
   */
  Ec2SubnetIds?: string[] | undefined;

  /**
   * The identifier of the Amazon EC2 security group for the master node. If you specify `EmrManagedMasterSecurityGroup`, you must also specify `EmrManagedSlaveSecurityGroup`.
   *
   * @public
   */
  EmrManagedMasterSecurityGroup?: string | undefined;

  /**
   * The identifier of the Amazon EC2 security group for the core and task nodes. If you specify `EmrManagedSlaveSecurityGroup`, you must also specify `EmrManagedMasterSecurityGroup`.
   *
   * @public
   */
  EmrManagedSlaveSecurityGroup?: string | undefined;

  /**
   * The identifier of the Amazon EC2 security group for the Amazon EMR service to access clusters in VPC private subnets.
   *
   * @public
   */
  ServiceAccessSecurityGroup?: string | undefined;

  /**
   * A list of additional Amazon EC2 security group IDs for the master node.
   *
   * @public
   */
  AdditionalMasterSecurityGroups?: string[] | undefined;

  /**
   * A list of additional Amazon EC2 security group IDs for the core and task nodes.
   *
   * @public
   */
  AdditionalSlaveSecurityGroups?: string[] | undefined;
}

/**
 * Input to the RunJobFlow operation.
 *
 * @public
 */
export interface RunJobFlowInput {
  /**
   * The name of the job flow.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The location in Amazon S3 to write the log files of the job flow. If a value is not provided, logs are not created.
   *
   * @public
   */
  LogUri?: string | undefined;

  /**
   * The KMS key used for encrypting log files. If a value is not provided, the logs remain encrypted by AES-256. This attribute is only available with Amazon EMR releases 5.30.0 and later, excluding Amazon EMR 6.0.0.
   *
   * @public
   */
  LogEncryptionKmsKeyId?: string | undefined;

  /**
   * A JSON string for selecting additional features.
   *
   * @public
   */
  AdditionalInfo?: string | undefined;

  /**
   * Applies only to Amazon EMR AMI versions 3.x and 2.x. For Amazon EMR releases 4.0 and later, `ReleaseLabel` is used. To specify a custom AMI, use `CustomAmiID`.
   *
   * @public
   */
  AmiVersion?: string | undefined;

  /**
   * The Amazon EMR release label, which determines the version of open-source application packages installed on the cluster. Release labels are in the form `emr-x.x.x`, where x.x.x is an Amazon EMR release version such as `emr-5.14.0`. For more information about Amazon EMR release versions and included application versions and features, see [https://docs.aws.amazon.com/emr/latest/ReleaseGuide/](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/). The release label applies only to Amazon EMR releases version 4.0 and later. Earlier versions use `AmiVersion`.
   *
   * @public
   */
  ReleaseLabel?: string | undefined;

  /**
   * A specification of the number and type of Amazon EC2 instances.
   *
   * @public
   */
  Instances: JobFlowInstancesConfig | undefined;

  /**
   * A list of steps to run.
   *
   * @public
   */
  Steps?: StepConfig[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the runtime role for steps specified in the RunJobFlow request. The runtime role can be a cross-account IAM role. The runtime role ARN is a combination of account ID, role name, and role type using the following format: `arn:partition:iam::account-id:role/role-name`.
   *
   * For example, `arn:aws:iam::1234567890:role/ReadOnly` is a correctly formatted runtime role ARN.
   *
   * This parameter applies only to steps included in the `Steps` parameter of this RunJobFlow request. It does not apply to steps added later to the cluster.
   *
   * @public
   */
  StepExecutionRoleArn?: string | undefined;

  /**
   * A list of bootstrap actions to run before Hadoop starts on the cluster nodes.
   *
   * @public
   */
  BootstrapActions?: BootstrapActionConfig[] | undefined;

  /**
   * > **Note:** For Amazon EMR releases 3.x and 2.x. For Amazon EMR releases 4.x and later, use Applications.
   *
   * A list of strings that indicates third-party software to use. For more information, see the [Amazon EMR Developer Guide](https://docs.aws.amazon.com/emr/latest/DeveloperGuide/emr-dg.pdf). Currently supported values are:
   *
   * - "mapr-m3" - launch the job flow using MapR M3 Edition.
   * - "mapr-m5" - launch the job flow using MapR M5 Edition.
   *
   * @public
   */
  SupportedProducts?: string[] | undefined;

  /**
   * > **Note:** For Amazon EMR releases 3.x and 2.x. For Amazon EMR releases 4.x and later, use Applications.
   *
   * A list of strings that indicates third-party software to use with the job flow that accepts a user argument list. Amazon EMR accepts and forwards the argument list to the corresponding installation script as bootstrap action arguments. For more information, see "Launch a Job Flow on the MapR Distribution for Hadoop" in the [Amazon EMR Developer Guide](https://docs.aws.amazon.com/emr/latest/DeveloperGuide/emr-dg.pdf). Supported values are:
   *
   * - "mapr-m3" - launch the cluster using MapR M3 Edition.
   * - "mapr-m5" - launch the cluster using MapR M5 Edition.
   * - "mapr" with the user arguments specifying "--edition,m3" or "--edition,m5" - launch the job flow using MapR M3 or M5 Edition respectively.
   * - "mapr-m7" - launch the cluster using MapR M7 Edition.
   * - "hunk" - launch the cluster with the Hunk Big Data Analytics Platform.
   * - "hue"- launch the cluster with Hue installed.
   * - "spark" - launch the cluster with Apache Spark installed.
   * - "ganglia" - launch the cluster with the Ganglia Monitoring System installed.
   *
   * @public
   */
  NewSupportedProducts?: SupportedProductConfig[] | undefined;

  /**
   * Applies to Amazon EMR releases 4.0 and later. A case-insensitive list of applications for Amazon EMR to install and configure when launching the cluster. For a list of applications available for each Amazon EMR release version, see the [Amazon EMRRelease Guide](https://docs.aws.amazon.com/emr/latest/ReleaseGuide/).
   *
   * @public
   */
  Applications?: Application[] | undefined;

  /**
   * For Amazon EMR releases 4.0 and later. The list of configurations supplied for the Amazon EMR cluster that you are creating.
   *
   * @public
   */
  Configurations?: Configuration[] | undefined;

  /**
   * > **Important:** The VisibleToAllUsers parameter is no longer supported. By default, the value is set to `true`. Setting it to `false` now has no effect.
   *
   * Set this value to `true` so that IAM principals in the Amazon Web Services account associated with the cluster can perform Amazon EMR actions on the cluster that their IAM policies allow. This value defaults to `true` for clusters created using the Amazon EMR API or the CLI [create-cluster](https://docs.aws.amazon.com/cli/latest/reference/emr/create-cluster.html) command.
   *
   * When set to `false`, only the IAM principal that created the cluster and the Amazon Web Services account root user can perform Amazon EMR actions for the cluster, regardless of the IAM permissions policies attached to other IAM principals. For more information, see [Understanding the Amazon EMR cluster VisibleToAllUsers setting](https://docs.aws.amazon.com/emr/latest/ManagementGuide/security_IAM_emr-with-IAM.html#security_set_visible_to_all_users) in the *Amazon EMR Management Guide*.
   *
   * @public
   */
  VisibleToAllUsers?: boolean | undefined;

  /**
   * Also called instance profile and Amazon EC2 role. An IAM role for an Amazon EMR cluster. The Amazon EC2 instances of the cluster assume this role. The default role is `EMR_EC2_DefaultRole`. In order to use the default role, you must have already created it using the CLI or console.
   *
   * @public
   */
  JobFlowRole?: string | undefined;

  /**
   * The IAM role that Amazon EMR assumes in order to access Amazon Web Services resources on your behalf. If you've created a custom service role path, you must specify it for the service role when you launch your cluster.
   *
   * @public
   */
  ServiceRole?: string | undefined;

  /**
   * A list of tags to associate with a cluster and propagate to Amazon EC2 instances.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The name of a security configuration to apply to the cluster.
   *
   * @public
   */
  SecurityConfiguration?: string | undefined;

  /**
   * An IAM role for automatic scaling policies. The default role is `EMR_AutoScaling_DefaultRole`. The IAM role provides permissions that the automatic scaling feature requires to launch and terminate Amazon EC2 instances in an instance group.
   *
   * @public
   */
  AutoScalingRole?: string | undefined;

  /**
   * Specifies the way that individual Amazon EC2 instances terminate when an automatic scale-in activity occurs or an instance group is resized. `TERMINATE_AT_INSTANCE_HOUR` indicates that Amazon EMR terminates nodes at the instance-hour boundary, regardless of when the request to terminate the instance was submitted. This option is only available with Amazon EMR 5.1.0 and later and is the default for clusters created using that version. `TERMINATE_AT_TASK_COMPLETION` indicates that Amazon EMR adds nodes to a deny list and drains tasks from nodes before terminating the Amazon EC2 instances, regardless of the instance-hour boundary. With either behavior, Amazon EMR removes the least active nodes first and blocks instance termination if it could lead to HDFS corruption. `TERMINATE_AT_TASK_COMPLETION` available only in Amazon EMR releases 4.1.0 and later, and is the default for releases of Amazon EMR earlier than 5.1.0.
   *
   * @public
   */
  ScaleDownBehavior?: ScaleDownBehavior | undefined;

  /**
   * Available only in Amazon EMR releases 5.7.0 and later. The ID of a custom Amazon EBS-backed Linux AMI. If specified, Amazon EMR uses this AMI when it launches cluster Amazon EC2 instances. For more information about custom AMIs in Amazon EMR, see [Using a Custom AMI](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-custom-ami.html) in the *Amazon EMR Management Guide*. If omitted, the cluster uses the base Linux AMI for the `ReleaseLabel` specified. For Amazon EMR releases 2.x and 3.x, use `AmiVersion` instead.
   *
   * For information about creating a custom AMI, see [Creating an Amazon EBS-Backed Linux AMI](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami-ebs.html) in the *Amazon Elastic Compute Cloud User Guide for Linux Instances*. For information about finding an AMI ID, see [Finding a Linux AMI](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/finding-an-ami.html).
   *
   * @public
   */
  CustomAmiId?: string | undefined;

  /**
   * The size, in GiB, of the Amazon EBS root device volume of the Linux AMI that is used for each Amazon EC2 instance. Available in Amazon EMR releases 4.x and later.
   *
   * @public
   */
  EbsRootVolumeSize?: number | undefined;

  /**
   * Applies only when `CustomAmiID` is used. Specifies which updates from the Amazon Linux AMI package repositories to apply automatically when the instance boots using the AMI. If omitted, the default is `SECURITY`, which indicates that only security updates are applied. If `NONE` is specified, no updates are applied, and all updates must be applied manually.
   *
   * @public
   */
  RepoUpgradeOnBoot?: RepoUpgradeOnBoot | undefined;

  /**
   * Attributes for Kerberos configuration when Kerberos authentication is enabled using a security configuration. For more information see [Use Kerberos Authentication](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html) in the *Amazon EMR Management Guide*.
   *
   * @public
   */
  KerberosAttributes?: KerberosAttributes | undefined;

  /**
   * Specifies the number of steps that can be executed concurrently. The default value is `1`. The maximum value is `256`.
   *
   * @public
   */
  StepConcurrencyLevel?: number | undefined;

  /**
   * The specified managed scaling policy for an Amazon EMR cluster.
   *
   * @public
   */
  ManagedScalingPolicy?: ManagedScalingPolicy | undefined;

  /**
   * The specified placement group configuration for an Amazon EMR cluster.
   *
   * @public
   */
  PlacementGroupConfigs?: PlacementGroupConfig[] | undefined;

  /**
   * An auto-termination policy for an Amazon EMR cluster. An auto-termination policy defines the amount of idle time in seconds after which a cluster automatically terminates. For alternative cluster termination options, see [Control cluster termination](https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-termination.html).
   *
   * @public
   */
  AutoTerminationPolicy?: AutoTerminationPolicy | undefined;

  /**
   * Specifies a particular Amazon Linux release for all nodes in a cluster launch RunJobFlow request. If a release is not specified, Amazon EMR uses the latest validated Amazon Linux release for cluster launch.
   *
   * @public
   */
  OSReleaseLabel?: string | undefined;

  /**
   * The IOPS, of the Amazon EBS root device volume of the Linux AMI that is used for each Amazon EC2 instance. Available in Amazon EMR releases 6.15.0 and later.
   *
   * @public
   */
  EbsRootVolumeIops?: number | undefined;

  /**
   * The throughput, in MiB/s, of the Amazon EBS root device volume of the Linux AMI that is used for each Amazon EC2 instance. Available in Amazon EMR releases 6.15.0 and later.
   *
   * @public
   */
  EbsRootVolumeThroughput?: number | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  ExtendedSupport?: boolean | undefined;

  /**
   * Contains CloudWatch log configuration metadata and settings.
   *
   * @public
   */
  MonitoringConfiguration?: MonitoringConfiguration | undefined;

  /**
   * Indicates whether Spark Connect sessions are enabled on the cluster. When set to `true`, you can start Spark Connect sessions using the `StartSession` operation.
   *
   * @public
   */
  SessionEnabled?: boolean | undefined;
}
