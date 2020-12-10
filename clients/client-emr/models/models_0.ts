import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum ActionOnFailure {
  CANCEL_AND_WAIT = "CANCEL_AND_WAIT",
  CONTINUE = "CONTINUE",
  TERMINATE_CLUSTER = "TERMINATE_CLUSTER",
  TERMINATE_JOB_FLOW = "TERMINATE_JOB_FLOW",
}

export enum InstanceFleetType {
  CORE = "CORE",
  MASTER = "MASTER",
  TASK = "TASK",
}

/**
 * <p>EBS volume specifications such as volume type, IOPS, and size (GiB) that will be
 *          requested for the EBS volume attached to an EC2 instance in the cluster.</p>
 */
export interface VolumeSpecification {
  /**
   * <p>The volume type. Volume types supported are gp2, io1, standard.</p>
   */
  VolumeType: string | undefined;

  /**
   * <p>The number of I/O operations per second (IOPS) that the volume supports.</p>
   */
  Iops?: number;

  /**
   * <p>The volume size, in gibibytes (GiB). This can be a number from 1 - 1024. If the volume
   *          type is EBS-optimized, the minimum value is 10.</p>
   */
  SizeInGB: number | undefined;
}

export namespace VolumeSpecification {
  export const filterSensitiveLog = (obj: VolumeSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration of requested EBS block device associated with the instance group with
 *          count of volumes that will be associated to every instance.</p>
 */
export interface EbsBlockDeviceConfig {
  /**
   * <p>EBS volume specifications such as volume type, IOPS, and size (GiB) that will be
   *          requested for the EBS volume attached to an EC2 instance in the cluster.</p>
   */
  VolumeSpecification: VolumeSpecification | undefined;

  /**
   * <p>Number of EBS volumes with a specific volume configuration that will be associated with
   *          every instance in the instance group</p>
   */
  VolumesPerInstance?: number;
}

export namespace EbsBlockDeviceConfig {
  export const filterSensitiveLog = (obj: EbsBlockDeviceConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon EBS configuration of a cluster instance.</p>
 */
export interface EbsConfiguration {
  /**
   * <p>An array of Amazon EBS volume specifications attached to a cluster instance.</p>
   */
  EbsBlockDeviceConfigs?: EbsBlockDeviceConfig[];

  /**
   * <p>Indicates whether an Amazon EBS volume is EBS-optimized.</p>
   */
  EbsOptimized?: boolean;
}

export namespace EbsConfiguration {
  export const filterSensitiveLog = (obj: EbsConfiguration): any => ({
    ...obj,
  });
}

export enum OnDemandProvisioningAllocationStrategy {
  LOWEST_PRICE = "lowest-price",
}

/**
 * <p> The launch specification for On-Demand Instances in the instance fleet, which
 *          determines the allocation strategy. </p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and
 *             later, excluding 5.0.x versions. On-Demand Instances allocation strategy is available in
 *             Amazon EMR version 5.12.1 and later.</p>
 *          </note>
 */
export interface OnDemandProvisioningSpecification {
  /**
   * <p> Specifies the strategy to use in launching On-Demand Instance fleets. Currently, the
   *          only option is lowest-price (the default), which launches the lowest price first. </p>
   */
  AllocationStrategy: OnDemandProvisioningAllocationStrategy | string | undefined;
}

export namespace OnDemandProvisioningSpecification {
  export const filterSensitiveLog = (obj: OnDemandProvisioningSpecification): any => ({
    ...obj,
  });
}

export enum SpotProvisioningAllocationStrategy {
  CAPACITY_OPTIMIZED = "capacity-optimized",
}

export type SpotProvisioningTimeoutAction = "SWITCH_TO_ON_DEMAND" | "TERMINATE_CLUSTER";

/**
 * <p>The launch specification for Spot Instances in the instance fleet, which determines the
 *          defined duration, provisioning timeout behavior, and allocation strategy.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and
 *             later, excluding 5.0.x versions. Spot Instance allocation strategy is available in
 *             Amazon EMR version 5.12.1 and later.</p>
 *          </note>
 */
export interface SpotProvisioningSpecification {
  /**
   * <p>The spot provisioning timeout period in minutes. If Spot Instances are not provisioned
   *          within this time period, the <code>TimeOutAction</code> is taken. Minimum value is 5 and
   *          maximum value is 1440. The timeout applies only during initial provisioning, when the
   *          cluster is first created.</p>
   */
  TimeoutDurationMinutes: number | undefined;

  /**
   * <p>The action to take when <code>TargetSpotCapacity</code> has not been fulfilled when the
   *             <code>TimeoutDurationMinutes</code> has expired; that is, when all Spot Instances could
   *          not be provisioned within the Spot provisioning timeout. Valid values are
   *             <code>TERMINATE_CLUSTER</code> and <code>SWITCH_TO_ON_DEMAND</code>. SWITCH_TO_ON_DEMAND
   *          specifies that if no Spot Instances are available, On-Demand Instances should be
   *          provisioned to fulfill any remaining Spot capacity.</p>
   */
  TimeoutAction: SpotProvisioningTimeoutAction | string | undefined;

  /**
   * <p>The defined duration for Spot Instances (also known as Spot blocks) in minutes. When
   *          specified, the Spot Instance does not terminate before the defined duration expires, and
   *          defined duration pricing for Spot instances applies. Valid values are 60, 120, 180, 240,
   *          300, or 360. The duration period starts as soon as a Spot Instance receives its instance
   *          ID. At the end of the duration, Amazon EC2 marks the Spot Instance for termination and
   *          provides a Spot Instance termination notice, which gives the instance a two-minute warning
   *          before it terminates. </p>
   */
  BlockDurationMinutes?: number;

  /**
   * <p> Specifies the strategy to use in launching Spot Instance fleets. Currently, the only
   *          option is capacity-optimized (the default), which launches instances from Spot Instance
   *          pools with optimal capacity for the number of instances that are launching. </p>
   */
  AllocationStrategy?: SpotProvisioningAllocationStrategy | string;
}

export namespace SpotProvisioningSpecification {
  export const filterSensitiveLog = (obj: SpotProvisioningSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>The launch specification for Spot Instances in the fleet, which determines the defined
 *          duration, provisioning timeout behavior, and allocation strategy.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and
 *             later, excluding 5.0.x versions. On-Demand and Spot Instance allocation strategies are
 *             available in Amazon EMR version 5.12.1 and later.</p>
 *          </note>
 */
export interface InstanceFleetProvisioningSpecifications {
  /**
   * <p>The launch specification for Spot Instances in the fleet, which determines the defined
   *          duration, provisioning timeout behavior, and allocation strategy.</p>
   */
  SpotSpecification?: SpotProvisioningSpecification;

  /**
   * <p> The launch specification for On-Demand Instances in the instance fleet, which
   *          determines the allocation strategy. </p>
   *          <note>
   *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and
   *             later, excluding 5.0.x versions. On-Demand Instances allocation strategy is available in
   *             Amazon EMR version 5.12.1 and later.</p>
   *          </note>
   */
  OnDemandSpecification?: OnDemandProvisioningSpecification;
}

export namespace InstanceFleetProvisioningSpecifications {
  export const filterSensitiveLog = (obj: InstanceFleetProvisioningSpecifications): any => ({
    ...obj,
  });
}

export interface AddInstanceFleetOutput {
  /**
   * <p>The unique identifier of the cluster.</p>
   */
  ClusterId?: string;

  /**
   * <p>The unique identifier of the instance fleet.</p>
   */
  InstanceFleetId?: string;

  /**
   * <p>The Amazon Resource Name of the cluster.</p>
   */
  ClusterArn?: string;
}

export namespace AddInstanceFleetOutput {
  export const filterSensitiveLog = (obj: AddInstanceFleetOutput): any => ({
    ...obj,
  });
}

/**
 * <p>This exception occurs when there is an internal failure in the EMR service.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  /**
   * <p>The message associated with the exception.</p>
   */
  Message?: string;
}

export namespace InternalServerException {
  export const filterSensitiveLog = (obj: InternalServerException): any => ({
    ...obj,
  });
}

/**
 * <p>This exception occurs when there is something wrong with user input.</p>
 */
export interface InvalidRequestException extends __SmithyException, $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  /**
   * <p>The error code associated with the exception.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The message associated with the exception.</p>
   */
  Message?: string;
}

export namespace InvalidRequestException {
  export const filterSensitiveLog = (obj: InvalidRequestException): any => ({
    ...obj,
  });
}

/**
 * <p>The upper and lower EC2 instance limits for an automatic scaling policy. Automatic
 *          scaling activities triggered by automatic scaling rules will not cause an instance group to
 *          grow above or below these limits.</p>
 */
export interface ScalingConstraints {
  /**
   * <p>The lower boundary of EC2 instances in an instance group below which scaling activities
   *          are not allowed to shrink. Scale-in activities will not terminate instances below this
   *          boundary.</p>
   */
  MinCapacity: number | undefined;

  /**
   * <p>The upper boundary of EC2 instances in an instance group beyond which scaling activities
   *          are not allowed to grow. Scale-out activities will not add instances beyond this
   *          boundary.</p>
   */
  MaxCapacity: number | undefined;
}

export namespace ScalingConstraints {
  export const filterSensitiveLog = (obj: ScalingConstraints): any => ({
    ...obj,
  });
}

export enum MarketType {
  ON_DEMAND = "ON_DEMAND",
  SPOT = "SPOT",
}

export enum AdjustmentType {
  CHANGE_IN_CAPACITY = "CHANGE_IN_CAPACITY",
  EXACT_CAPACITY = "EXACT_CAPACITY",
  PERCENT_CHANGE_IN_CAPACITY = "PERCENT_CHANGE_IN_CAPACITY",
}

/**
 * <p>An automatic scaling configuration, which describes how the policy adds or removes
 *          instances, the cooldown period, and the number of EC2 instances that will be added each
 *          time the CloudWatch metric alarm condition is satisfied.</p>
 */
export interface SimpleScalingPolicyConfiguration {
  /**
   * <p>The way in which EC2 instances are added (if <code>ScalingAdjustment</code> is a
   *          positive number) or terminated (if <code>ScalingAdjustment</code> is a negative number)
   *          each time the scaling activity is triggered. <code>CHANGE_IN_CAPACITY</code> is the
   *          default. <code>CHANGE_IN_CAPACITY</code> indicates that the EC2 instance count increments
   *          or decrements by <code>ScalingAdjustment</code>, which should be expressed as an integer.
   *             <code>PERCENT_CHANGE_IN_CAPACITY</code> indicates the instance count increments or
   *          decrements by the percentage specified by <code>ScalingAdjustment</code>, which should be
   *          expressed as an integer. For example, 20 indicates an increase in 20% increments of cluster
   *          capacity. <code>EXACT_CAPACITY</code> indicates the scaling activity results in an instance
   *          group with the number of EC2 instances specified by <code>ScalingAdjustment</code>, which
   *          should be expressed as a positive integer.</p>
   */
  AdjustmentType?: AdjustmentType | string;

  /**
   * <p>The amount by which to scale in or scale out, based on the specified
   *             <code>AdjustmentType</code>. A positive value adds to the instance group's EC2 instance
   *          count while a negative number removes instances. If <code>AdjustmentType</code> is set to
   *             <code>EXACT_CAPACITY</code>, the number should only be a positive integer. If
   *             <code>AdjustmentType</code> is set to <code>PERCENT_CHANGE_IN_CAPACITY</code>, the value
   *          should express the percentage as an integer. For example, -20 indicates a decrease in 20%
   *          increments of cluster capacity.</p>
   */
  ScalingAdjustment: number | undefined;

  /**
   * <p>The amount of time, in seconds, after a scaling activity completes before any further
   *          trigger-related scaling activities can start. The default value is 0.</p>
   */
  CoolDown?: number;
}

export namespace SimpleScalingPolicyConfiguration {
  export const filterSensitiveLog = (obj: SimpleScalingPolicyConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The type of adjustment the automatic scaling activity makes when triggered, and the
 *          periodicity of the adjustment.</p>
 */
export interface ScalingAction {
  /**
   * <p>Not available for instance groups. Instance groups use the market type specified for the
   *          group.</p>
   */
  Market?: MarketType | string;

  /**
   * <p>The type of adjustment the automatic scaling activity makes when triggered, and the
   *          periodicity of the adjustment.</p>
   */
  SimpleScalingPolicyConfiguration: SimpleScalingPolicyConfiguration | undefined;
}

export namespace ScalingAction {
  export const filterSensitiveLog = (obj: ScalingAction): any => ({
    ...obj,
  });
}

export enum ComparisonOperator {
  GREATER_THAN = "GREATER_THAN",
  GREATER_THAN_OR_EQUAL = "GREATER_THAN_OR_EQUAL",
  LESS_THAN = "LESS_THAN",
  LESS_THAN_OR_EQUAL = "LESS_THAN_OR_EQUAL",
}

/**
 * <p>A CloudWatch dimension, which is specified using a <code>Key</code> (known as a
 *             <code>Name</code> in CloudWatch), <code>Value</code> pair. By default, Amazon EMR uses
 *          one dimension whose <code>Key</code> is <code>JobFlowID</code> and <code>Value</code> is a
 *          variable representing the cluster ID, which is <code>${emr.clusterId}</code>. This enables
 *          the rule to bootstrap when the cluster ID becomes available.</p>
 */
export interface MetricDimension {
  /**
   * <p>The dimension name.</p>
   */
  Key?: string;

  /**
   * <p>The dimension value.</p>
   */
  Value?: string;
}

export namespace MetricDimension {
  export const filterSensitiveLog = (obj: MetricDimension): any => ({
    ...obj,
  });
}

export enum Statistic {
  AVERAGE = "AVERAGE",
  MAXIMUM = "MAXIMUM",
  MINIMUM = "MINIMUM",
  SAMPLE_COUNT = "SAMPLE_COUNT",
  SUM = "SUM",
}

export enum Unit {
  BITS = "BITS",
  BITS_PER_SECOND = "BITS_PER_SECOND",
  BYTES = "BYTES",
  BYTES_PER_SECOND = "BYTES_PER_SECOND",
  COUNT = "COUNT",
  COUNT_PER_SECOND = "COUNT_PER_SECOND",
  GIGA_BITS = "GIGA_BITS",
  GIGA_BITS_PER_SECOND = "GIGA_BITS_PER_SECOND",
  GIGA_BYTES = "GIGA_BYTES",
  GIGA_BYTES_PER_SECOND = "GIGA_BYTES_PER_SECOND",
  KILO_BITS = "KILO_BITS",
  KILO_BITS_PER_SECOND = "KILO_BITS_PER_SECOND",
  KILO_BYTES = "KILO_BYTES",
  KILO_BYTES_PER_SECOND = "KILO_BYTES_PER_SECOND",
  MEGA_BITS = "MEGA_BITS",
  MEGA_BITS_PER_SECOND = "MEGA_BITS_PER_SECOND",
  MEGA_BYTES = "MEGA_BYTES",
  MEGA_BYTES_PER_SECOND = "MEGA_BYTES_PER_SECOND",
  MICRO_SECONDS = "MICRO_SECONDS",
  MILLI_SECONDS = "MILLI_SECONDS",
  NONE = "NONE",
  PERCENT = "PERCENT",
  SECONDS = "SECONDS",
  TERA_BITS = "TERA_BITS",
  TERA_BITS_PER_SECOND = "TERA_BITS_PER_SECOND",
  TERA_BYTES = "TERA_BYTES",
  TERA_BYTES_PER_SECOND = "TERA_BYTES_PER_SECOND",
}

/**
 * <p>The definition of a CloudWatch metric alarm, which determines when an automatic scaling
 *          activity is triggered. When the defined alarm conditions are satisfied, scaling activity
 *          begins.</p>
 */
export interface CloudWatchAlarmDefinition {
  /**
   * <p>Determines how the metric specified by <code>MetricName</code> is compared to the value
   *          specified by <code>Threshold</code>.</p>
   */
  ComparisonOperator: ComparisonOperator | string | undefined;

  /**
   * <p>The number of periods, in five-minute increments, during which the alarm condition must
   *          exist before the alarm triggers automatic scaling activity. The default value is
   *             <code>1</code>.</p>
   */
  EvaluationPeriods?: number;

  /**
   * <p>The name of the CloudWatch metric that is watched to determine an alarm
   *          condition.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>The namespace for the CloudWatch metric. The default is
   *             <code>AWS/ElasticMapReduce</code>.</p>
   */
  Namespace?: string;

  /**
   * <p>The period, in seconds, over which the statistic is applied. EMR CloudWatch metrics are
   *          emitted every five minutes (300 seconds), so if an EMR CloudWatch metric is specified,
   *          specify <code>300</code>.</p>
   */
  Period: number | undefined;

  /**
   * <p>The statistic to apply to the metric associated with the alarm. The default is
   *             <code>AVERAGE</code>.</p>
   */
  Statistic?: Statistic | string;

  /**
   * <p>The value against which the specified statistic is compared.</p>
   */
  Threshold: number | undefined;

  /**
   * <p>The unit of measure associated with the CloudWatch metric being watched. The value
   *          specified for <code>Unit</code> must correspond to the units specified in the CloudWatch
   *          metric.</p>
   */
  Unit?: Unit | string;

  /**
   * <p>A CloudWatch metric dimension.</p>
   */
  Dimensions?: MetricDimension[];
}

export namespace CloudWatchAlarmDefinition {
  export const filterSensitiveLog = (obj: CloudWatchAlarmDefinition): any => ({
    ...obj,
  });
}

/**
 * <p>The conditions that trigger an automatic scaling activity.</p>
 */
export interface ScalingTrigger {
  /**
   * <p>The definition of a CloudWatch metric alarm. When the defined alarm conditions are met
   *          along with other trigger parameters, scaling activity begins.</p>
   */
  CloudWatchAlarmDefinition: CloudWatchAlarmDefinition | undefined;
}

export namespace ScalingTrigger {
  export const filterSensitiveLog = (obj: ScalingTrigger): any => ({
    ...obj,
  });
}

/**
 * <p>A scale-in or scale-out rule that defines scaling activity, including the CloudWatch
 *          metric alarm that triggers activity, how EC2 instances are added or removed, and the
 *          periodicity of adjustments. The automatic scaling policy for an instance group can comprise
 *          one or more automatic scaling rules.</p>
 */
export interface ScalingRule {
  /**
   * <p>The name used to identify an automatic scaling rule. Rule names must be unique within a
   *          scaling policy.</p>
   */
  Name: string | undefined;

  /**
   * <p>A friendly, more verbose description of the automatic scaling rule.</p>
   */
  Description?: string;

  /**
   * <p>The conditions that trigger an automatic scaling activity.</p>
   */
  Action: ScalingAction | undefined;

  /**
   * <p>The CloudWatch alarm definition that determines when automatic scaling activity is
   *          triggered.</p>
   */
  Trigger: ScalingTrigger | undefined;
}

export namespace ScalingRule {
  export const filterSensitiveLog = (obj: ScalingRule): any => ({
    ...obj,
  });
}

/**
 * <p>An automatic scaling policy for a core instance group or task instance group in an
 *          Amazon EMR cluster. An automatic scaling policy defines how an instance group dynamically
 *          adds and terminates EC2 instances in response to the value of a CloudWatch metric. See
 *             <a>PutAutoScalingPolicy</a>.</p>
 */
export interface AutoScalingPolicy {
  /**
   * <p>The upper and lower EC2 instance limits for an automatic scaling policy. Automatic
   *          scaling activity will not cause an instance group to grow above or below these
   *          limits.</p>
   */
  Constraints: ScalingConstraints | undefined;

  /**
   * <p>The scale-in and scale-out rules that comprise the automatic scaling policy.</p>
   */
  Rules: ScalingRule[] | undefined;
}

export namespace AutoScalingPolicy {
  export const filterSensitiveLog = (obj: AutoScalingPolicy): any => ({
    ...obj,
  });
}

export type InstanceRoleType = "CORE" | "MASTER" | "TASK";

/**
 * <p>Output from an AddInstanceGroups call.</p>
 */
export interface AddInstanceGroupsOutput {
  /**
   * <p>The job flow ID in which the instance groups are added.</p>
   */
  JobFlowId?: string;

  /**
   * <p>Instance group IDs of the newly created instance groups.</p>
   */
  InstanceGroupIds?: string[];

  /**
   * <p>The Amazon Resource Name of the cluster.</p>
   */
  ClusterArn?: string;
}

export namespace AddInstanceGroupsOutput {
  export const filterSensitiveLog = (obj: AddInstanceGroupsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Indicates that an error occurred while processing the request and that the request was
 *          not completed.</p>
 */
export interface InternalServerError extends __SmithyException, $MetadataBearer {
  name: "InternalServerError";
  $fault: "server";
}

export namespace InternalServerError {
  export const filterSensitiveLog = (obj: InternalServerError): any => ({
    ...obj,
  });
}

/**
 * <p>A key-value pair.</p>
 */
export interface KeyValue {
  /**
   * <p>The unique identifier of a key-value pair.</p>
   */
  Key?: string;

  /**
   * <p>The value part of the identified key.</p>
   */
  Value?: string;
}

export namespace KeyValue {
  export const filterSensitiveLog = (obj: KeyValue): any => ({
    ...obj,
  });
}

/**
 * <p>A job flow step consisting of a JAR file whose main function will be executed. The main
 *          function submits a job for Hadoop to execute and waits for the job to finish or
 *          fail.</p>
 */
export interface HadoopJarStepConfig {
  /**
   * <p>A list of Java properties that are set when the step runs. You can use these properties
   *          to pass key value pairs to your main function.</p>
   */
  Properties?: KeyValue[];

  /**
   * <p>A path to a JAR file run during the step.</p>
   */
  Jar: string | undefined;

  /**
   * <p>The name of the main class in the specified Java file. If not specified, the JAR file
   *          should specify a Main-Class in its manifest file.</p>
   */
  MainClass?: string;

  /**
   * <p>A list of command line arguments passed to the JAR file's main function when
   *          executed.</p>
   */
  Args?: string[];
}

export namespace HadoopJarStepConfig {
  export const filterSensitiveLog = (obj: HadoopJarStepConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Specification of a cluster (job flow) step.</p>
 */
export interface StepConfig {
  /**
   * <p>The name of the step.</p>
   */
  Name: string | undefined;

  /**
   * <p>The action to take when the cluster step fails. Possible values are TERMINATE_CLUSTER,
   *          CANCEL_AND_WAIT, and CONTINUE. TERMINATE_JOB_FLOW is provided for backward compatibility.
   *          We recommend using TERMINATE_CLUSTER instead.</p>
   */
  ActionOnFailure?: ActionOnFailure | string;

  /**
   * <p>The JAR file used for the step.</p>
   */
  HadoopJarStep: HadoopJarStepConfig | undefined;
}

export namespace StepConfig {
  export const filterSensitiveLog = (obj: StepConfig): any => ({
    ...obj,
  });
}

/**
 * <p> The input argument to the <a>AddJobFlowSteps</a> operation. </p>
 */
export interface AddJobFlowStepsInput {
  /**
   * <p>A string that uniquely identifies the job flow. This identifier is returned by <a>RunJobFlow</a> and can also be obtained from <a>ListClusters</a>.
   *       </p>
   */
  JobFlowId: string | undefined;

  /**
   * <p> A list of <a>StepConfig</a> to be executed by the job flow. </p>
   */
  Steps: StepConfig[] | undefined;
}

export namespace AddJobFlowStepsInput {
  export const filterSensitiveLog = (obj: AddJobFlowStepsInput): any => ({
    ...obj,
  });
}

/**
 * <p> The output for the <a>AddJobFlowSteps</a> operation. </p>
 */
export interface AddJobFlowStepsOutput {
  /**
   * <p>The identifiers of the list of steps added to the job flow.</p>
   */
  StepIds?: string[];
}

export namespace AddJobFlowStepsOutput {
  export const filterSensitiveLog = (obj: AddJobFlowStepsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>A key-value pair containing user-defined metadata that you can associate with an Amazon
 *          EMR resource. Tags make it easier to associate clusters in various ways, such as grouping
 *          clusters to track your Amazon EMR resource allocation costs. For more information, see
 *             <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag
 *             Clusters</a>. </p>
 */
export interface Tag {
  /**
   * <p>A user-defined key, which is the minimum required information for a valid tag. For more
   *          information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag </a>. </p>
   */
  Key?: string;

  /**
   * <p>A user-defined value, which is optional in a tag. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-plan-tags.html">Tag
   *             Clusters</a>. </p>
   */
  Value?: string;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj,
  });
}

/**
 * <p>This input identifies a cluster and a list of tags to attach.</p>
 */
export interface AddTagsInput {
  /**
   * <p>The Amazon EMR resource identifier to which tags will be added. This value must be a
   *          cluster identifier.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>A list of tags to associate with a cluster and propagate to EC2 instances. Tags are
   *          user-defined key-value pairs that consist of a required key string with a maximum of 128
   *          characters, and an optional value string with a maximum of 256 characters.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace AddTagsInput {
  export const filterSensitiveLog = (obj: AddTagsInput): any => ({
    ...obj,
  });
}

/**
 * <p>This output indicates the result of adding tags to a resource.</p>
 */
export interface AddTagsOutput {}

export namespace AddTagsOutput {
  export const filterSensitiveLog = (obj: AddTagsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>With Amazon EMR release version 4.0 and later, the only accepted parameter is the
 *          application name. To pass arguments to applications, you use configuration classifications
 *          specified using configuration JSON objects. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html">Configuring
 *             Applications</a>.</p>
 *          <p>With earlier Amazon EMR releases, the application is any Amazon or third-party software
 *          that you can add to the cluster. This structure contains a list of strings that indicates
 *          the software to use with the cluster and accepts a user argument list. Amazon EMR accepts
 *          and forwards the argument list to the corresponding installation script as bootstrap action
 *          argument.</p>
 */
export interface Application {
  /**
   * <p>The name of the application.</p>
   */
  Name?: string;

  /**
   * <p>The version of the application.</p>
   */
  Version?: string;

  /**
   * <p>Arguments for Amazon EMR to pass to the application.</p>
   */
  Args?: string[];

  /**
   * <p>This option is for advanced users only. This is meta information about third-party
   *          applications that third-party vendors use for testing purposes.</p>
   */
  AdditionalInfo?: { [key: string]: string };
}

export namespace Application {
  export const filterSensitiveLog = (obj: Application): any => ({
    ...obj,
  });
}

export enum AuthMode {
  IAM = "IAM",
  SSO = "SSO",
}

export enum AutoScalingPolicyState {
  ATTACHED = "ATTACHED",
  ATTACHING = "ATTACHING",
  DETACHED = "DETACHED",
  DETACHING = "DETACHING",
  FAILED = "FAILED",
  PENDING = "PENDING",
}

export enum AutoScalingPolicyStateChangeReasonCode {
  CLEANUP_FAILURE = "CLEANUP_FAILURE",
  PROVISION_FAILURE = "PROVISION_FAILURE",
  USER_REQUEST = "USER_REQUEST",
}

/**
 * <p>The reason for an <a>AutoScalingPolicyStatus</a> change.</p>
 */
export interface AutoScalingPolicyStateChangeReason {
  /**
   * <p>The code indicating the reason for the change in status.<code>USER_REQUEST</code>
   *          indicates that the scaling policy status was changed by a user.
   *             <code>PROVISION_FAILURE</code> indicates that the status change was because the policy
   *          failed to provision. <code>CLEANUP_FAILURE</code> indicates an error.</p>
   */
  Code?: AutoScalingPolicyStateChangeReasonCode | string;

  /**
   * <p>A friendly, more verbose message that accompanies an automatic scaling policy state
   *          change.</p>
   */
  Message?: string;
}

export namespace AutoScalingPolicyStateChangeReason {
  export const filterSensitiveLog = (obj: AutoScalingPolicyStateChangeReason): any => ({
    ...obj,
  });
}

/**
 * <p>The status of an automatic scaling policy.
 *          </p>
 */
export interface AutoScalingPolicyStatus {
  /**
   * <p>Indicates the status of the automatic scaling policy.</p>
   */
  State?: AutoScalingPolicyState | string;

  /**
   * <p>The reason for a change in status.</p>
   */
  StateChangeReason?: AutoScalingPolicyStateChangeReason;
}

export namespace AutoScalingPolicyStatus {
  export const filterSensitiveLog = (obj: AutoScalingPolicyStatus): any => ({
    ...obj,
  });
}

/**
 * <p>An automatic scaling policy for a core instance group or task instance group in an
 *          Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically
 *          adds and terminates EC2 instances in response to the value of a CloudWatch metric. See
 *             <a>PutAutoScalingPolicy</a>.</p>
 */
export interface AutoScalingPolicyDescription {
  /**
   * <p>The status of an automatic scaling policy. </p>
   */
  Status?: AutoScalingPolicyStatus;

  /**
   * <p>The upper and lower EC2 instance limits for an automatic scaling policy. Automatic
   *          scaling activity will not cause an instance group to grow above or below these
   *          limits.</p>
   */
  Constraints?: ScalingConstraints;

  /**
   * <p>The scale-in and scale-out rules that comprise the automatic scaling policy.</p>
   */
  Rules?: ScalingRule[];
}

export namespace AutoScalingPolicyDescription {
  export const filterSensitiveLog = (obj: AutoScalingPolicyDescription): any => ({
    ...obj,
  });
}

/**
 * <p>A list of port ranges that are permitted to allow inbound traffic from all public IP
 *          addresses. To specify a single port, use the same value for <code>MinRange</code> and
 *             <code>MaxRange</code>.</p>
 */
export interface PortRange {
  /**
   * <p>The smallest port number in a specified range of port numbers.</p>
   */
  MinRange: number | undefined;

  /**
   * <p>The smallest port number in a specified range of port numbers.</p>
   */
  MaxRange?: number;
}

export namespace PortRange {
  export const filterSensitiveLog = (obj: PortRange): any => ({
    ...obj,
  });
}

/**
 * <p>Properties that describe the AWS principal that created the
 *             <code>BlockPublicAccessConfiguration</code> using the
 *             <code>PutBlockPublicAccessConfiguration</code> action as well as the date and time that
 *          the configuration was created. Each time a configuration for block public access is
 *          updated, Amazon EMR updates this metadata.</p>
 */
export interface BlockPublicAccessConfigurationMetadata {
  /**
   * <p>The date and time that the configuration was created.</p>
   */
  CreationDateTime: Date | undefined;

  /**
   * <p>The Amazon Resource Name that created or last modified the configuration.</p>
   */
  CreatedByArn: string | undefined;
}

export namespace BlockPublicAccessConfigurationMetadata {
  export const filterSensitiveLog = (obj: BlockPublicAccessConfigurationMetadata): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration of the script to run during a bootstrap action.</p>
 */
export interface ScriptBootstrapActionConfig {
  /**
   * <p>Location of the script to run during a bootstrap action. Can be either a location in
   *          Amazon S3 or on a local file system.</p>
   */
  Path: string | undefined;

  /**
   * <p>A list of command line arguments to pass to the bootstrap action script.</p>
   */
  Args?: string[];
}

export namespace ScriptBootstrapActionConfig {
  export const filterSensitiveLog = (obj: ScriptBootstrapActionConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration of a bootstrap action.</p>
 */
export interface BootstrapActionConfig {
  /**
   * <p>The name of the bootstrap action.</p>
   */
  Name: string | undefined;

  /**
   * <p>The script run by the bootstrap action.</p>
   */
  ScriptBootstrapAction: ScriptBootstrapActionConfig | undefined;
}

export namespace BootstrapActionConfig {
  export const filterSensitiveLog = (obj: BootstrapActionConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Reports the configuration of a bootstrap action in a cluster (job flow).</p>
 */
export interface BootstrapActionDetail {
  /**
   * <p>A description of the bootstrap action.</p>
   */
  BootstrapActionConfig?: BootstrapActionConfig;
}

export namespace BootstrapActionDetail {
  export const filterSensitiveLog = (obj: BootstrapActionDetail): any => ({
    ...obj,
  });
}

export type StepCancellationOption = "SEND_INTERRUPT" | "TERMINATE_PROCESS";

/**
 * <p>The input argument to the <a>CancelSteps</a> operation.</p>
 */
export interface CancelStepsInput {
  /**
   * <p>The <code>ClusterID</code> for the specified steps that will be canceled. Use <a>RunJobFlow</a> and <a>ListClusters</a> to get ClusterIDs. </p>
   */
  ClusterId: string | undefined;

  /**
   * <p>The list of <code>StepIDs</code> to cancel. Use <a>ListSteps</a> to get steps
   *          and their states for the specified cluster.</p>
   */
  StepIds: string[] | undefined;

  /**
   * <p>The option to choose to cancel <code>RUNNING</code> steps. By default, the value is
   *             <code>SEND_INTERRUPT</code>.</p>
   */
  StepCancellationOption?: StepCancellationOption | string;
}

export namespace CancelStepsInput {
  export const filterSensitiveLog = (obj: CancelStepsInput): any => ({
    ...obj,
  });
}

export enum CancelStepsRequestStatus {
  FAILED = "FAILED",
  SUBMITTED = "SUBMITTED",
}

/**
 * <p>Specification of the status of a CancelSteps request. Available only in Amazon EMR
 *          version 4.8.0 and later, excluding version 5.0.0.</p>
 */
export interface CancelStepsInfo {
  /**
   * <p>The encrypted StepId of a step.</p>
   */
  StepId?: string;

  /**
   * <p>The status of a CancelSteps Request. The value may be SUBMITTED or FAILED.</p>
   */
  Status?: CancelStepsRequestStatus | string;

  /**
   * <p>The reason for the failure if the CancelSteps request fails.</p>
   */
  Reason?: string;
}

export namespace CancelStepsInfo {
  export const filterSensitiveLog = (obj: CancelStepsInfo): any => ({
    ...obj,
  });
}

/**
 * <p> The output for the <a>CancelSteps</a> operation. </p>
 */
export interface CancelStepsOutput {
  /**
   * <p>A list of <a>CancelStepsInfo</a>, which shows the status of specified cancel
   *          requests for each <code>StepID</code> specified.</p>
   */
  CancelStepsInfoList?: CancelStepsInfo[];
}

export namespace CancelStepsOutput {
  export const filterSensitiveLog = (obj: CancelStepsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Provides information about the EC2 instances in a cluster grouped by category. For
 *          example, key name, subnet ID, IAM instance profile, and so on.</p>
 */
export interface Ec2InstanceAttributes {
  /**
   * <p>The name of the Amazon EC2 key pair to use when connecting with SSH into the master node
   *          as a user named "hadoop".</p>
   */
  Ec2KeyName?: string;

  /**
   * <p>Set this parameter to the identifier of the Amazon VPC subnet where you want the cluster
   *          to launch. If you do not specify this value, and your account supports EC2-Classic, the
   *          cluster launches in EC2-Classic.</p>
   */
  Ec2SubnetId?: string;

  /**
   * <p>Applies to clusters configured with the instance fleets option. Specifies the unique
   *          identifier of one or more Amazon EC2 subnets in which to launch EC2 cluster instances.
   *          Subnets must exist within the same VPC. Amazon EMR chooses the EC2 subnet with the best fit
   *          from among the list of <code>RequestedEc2SubnetIds</code>, and then launches all cluster
   *          instances within that Subnet. If this value is not specified, and the account and Region
   *          support EC2-Classic networks, the cluster launches instances in the EC2-Classic network and
   *          uses <code>RequestedEc2AvailabilityZones</code> instead of this setting. If EC2-Classic is
   *          not supported, and no Subnet is specified, Amazon EMR chooses the subnet for you.
   *             <code>RequestedEc2SubnetIDs</code> and <code>RequestedEc2AvailabilityZones</code> cannot
   *          be specified together.</p>
   */
  RequestedEc2SubnetIds?: string[];

  /**
   * <p>The Availability Zone in which the cluster will run. </p>
   */
  Ec2AvailabilityZone?: string;

  /**
   * <p>Applies to clusters configured with the instance fleets option. Specifies one or more
   *          Availability Zones in which to launch EC2 cluster instances when the EC2-Classic network
   *          configuration is supported. Amazon EMR chooses the Availability Zone with the best fit from
   *          among the list of <code>RequestedEc2AvailabilityZones</code>, and then launches all cluster
   *          instances within that Availability Zone. If you do not specify this value, Amazon EMR
   *          chooses the Availability Zone for you. <code>RequestedEc2SubnetIDs</code> and
   *             <code>RequestedEc2AvailabilityZones</code> cannot be specified together.</p>
   */
  RequestedEc2AvailabilityZones?: string[];

  /**
   * <p>The IAM role that was specified when the cluster was launched. The EC2 instances of the
   *          cluster assume this role.</p>
   */
  IamInstanceProfile?: string;

  /**
   * <p>The identifier of the Amazon EC2 security group for the master node.</p>
   */
  EmrManagedMasterSecurityGroup?: string;

  /**
   * <p>The identifier of the Amazon EC2 security group for the core and task nodes.</p>
   */
  EmrManagedSlaveSecurityGroup?: string;

  /**
   * <p>The identifier of the Amazon EC2 security group for the Amazon EMR service to access
   *          clusters in VPC private subnets.</p>
   */
  ServiceAccessSecurityGroup?: string;

  /**
   * <p>A list of additional Amazon EC2 security group IDs for the master node.</p>
   */
  AdditionalMasterSecurityGroups?: string[];

  /**
   * <p>A list of additional Amazon EC2 security group IDs for the core and task nodes.</p>
   */
  AdditionalSlaveSecurityGroups?: string[];
}

export namespace Ec2InstanceAttributes {
  export const filterSensitiveLog = (obj: Ec2InstanceAttributes): any => ({
    ...obj,
  });
}

export enum InstanceCollectionType {
  INSTANCE_FLEET = "INSTANCE_FLEET",
  INSTANCE_GROUP = "INSTANCE_GROUP",
}

/**
 * <p>Attributes for Kerberos configuration when Kerberos authentication is enabled using a
 *          security configuration. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html">Use Kerberos Authentication</a>
 *          in the <i>Amazon EMR Management Guide</i>.</p>
 */
export interface KerberosAttributes {
  /**
   * <p>The name of the Kerberos realm to which all nodes in a cluster belong. For example,
   *             <code>EC2.INTERNAL</code>. </p>
   */
  Realm: string | undefined;

  /**
   * <p>The password used within the cluster for the kadmin service on the cluster-dedicated
   *          KDC, which maintains Kerberos principals, password policies, and keytabs for the
   *          cluster.</p>
   */
  KdcAdminPassword: string | undefined;

  /**
   * <p>Required only when establishing a cross-realm trust with a KDC in a different realm. The
   *          cross-realm principal password, which must be identical across realms.</p>
   */
  CrossRealmTrustPrincipalPassword?: string;

  /**
   * <p>Required only when establishing a cross-realm trust with an Active Directory domain. A
   *          user with sufficient privileges to join resources to the domain.</p>
   */
  ADDomainJoinUser?: string;

  /**
   * <p>The Active Directory password for <code>ADDomainJoinUser</code>.</p>
   */
  ADDomainJoinPassword?: string;
}

export namespace KerberosAttributes {
  export const filterSensitiveLog = (obj: KerberosAttributes): any => ({
    ...obj,
  });
}

export enum PlacementGroupStrategy {
  CLUSTER = "CLUSTER",
  NONE = "NONE",
  PARTITION = "PARTITION",
  SPREAD = "SPREAD",
}

/**
 * <p>Placement group configuration for an Amazon EMR cluster. The configuration specifies the
 *          placement strategy that can be applied to instance roles during cluster creation.</p>
 *          <p>To use this configuration, consider attaching managed policy
 *          AmazonElasticMapReducePlacementGroupPolicy to the EMR role.</p>
 */
export interface PlacementGroupConfig {
  /**
   * <p>Role of the instance in the cluster.</p>
   *          <p>Starting with Amazon EMR version 5.23.0, the only supported instance role is
   *             <code>MASTER</code>.</p>
   */
  InstanceRole: InstanceRoleType | string | undefined;

  /**
   * <p>EC2 Placement Group strategy associated with instance role.</p>
   *          <p>Starting with Amazon EMR version 5.23.0, the only supported placement strategy is
   *             <code>SPREAD</code> for the <code>MASTER</code> instance role.</p>
   */
  PlacementStrategy?: PlacementGroupStrategy | string;
}

export namespace PlacementGroupConfig {
  export const filterSensitiveLog = (obj: PlacementGroupConfig): any => ({
    ...obj,
  });
}

export enum RepoUpgradeOnBoot {
  NONE = "NONE",
  SECURITY = "SECURITY",
}

export enum ScaleDownBehavior {
  TERMINATE_AT_INSTANCE_HOUR = "TERMINATE_AT_INSTANCE_HOUR",
  TERMINATE_AT_TASK_COMPLETION = "TERMINATE_AT_TASK_COMPLETION",
}

export enum ClusterState {
  BOOTSTRAPPING = "BOOTSTRAPPING",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  TERMINATED = "TERMINATED",
  TERMINATED_WITH_ERRORS = "TERMINATED_WITH_ERRORS",
  TERMINATING = "TERMINATING",
  WAITING = "WAITING",
}

export enum ClusterStateChangeReasonCode {
  ALL_STEPS_COMPLETED = "ALL_STEPS_COMPLETED",
  BOOTSTRAP_FAILURE = "BOOTSTRAP_FAILURE",
  INSTANCE_FAILURE = "INSTANCE_FAILURE",
  INSTANCE_FLEET_TIMEOUT = "INSTANCE_FLEET_TIMEOUT",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  STEP_FAILURE = "STEP_FAILURE",
  USER_REQUEST = "USER_REQUEST",
  VALIDATION_ERROR = "VALIDATION_ERROR",
}

/**
 * <p>The reason that the cluster changed to its current state.</p>
 */
export interface ClusterStateChangeReason {
  /**
   * <p>The programmatic code for the state change reason.</p>
   */
  Code?: ClusterStateChangeReasonCode | string;

  /**
   * <p>The descriptive message for the state change reason.</p>
   */
  Message?: string;
}

export namespace ClusterStateChangeReason {
  export const filterSensitiveLog = (obj: ClusterStateChangeReason): any => ({
    ...obj,
  });
}

/**
 * <p>Represents the timeline of the cluster's lifecycle.</p>
 */
export interface ClusterTimeline {
  /**
   * <p>The creation date and time of the cluster.</p>
   */
  CreationDateTime?: Date;

  /**
   * <p>The date and time when the cluster was ready to run steps.</p>
   */
  ReadyDateTime?: Date;

  /**
   * <p>The date and time when the cluster was terminated.</p>
   */
  EndDateTime?: Date;
}

export namespace ClusterTimeline {
  export const filterSensitiveLog = (obj: ClusterTimeline): any => ({
    ...obj,
  });
}

/**
 * <p>The detailed status of the cluster.</p>
 */
export interface ClusterStatus {
  /**
   * <p>The current state of the cluster.</p>
   */
  State?: ClusterState | string;

  /**
   * <p>The reason for the cluster status change.</p>
   */
  StateChangeReason?: ClusterStateChangeReason;

  /**
   * <p>A timeline that represents the status of a cluster over the lifetime of the
   *          cluster.</p>
   */
  Timeline?: ClusterTimeline;
}

export namespace ClusterStatus {
  export const filterSensitiveLog = (obj: ClusterStatus): any => ({
    ...obj,
  });
}

/**
 * <p>The summary description of the cluster.</p>
 */
export interface ClusterSummary {
  /**
   * <p>The unique identifier for the cluster.</p>
   */
  Id?: string;

  /**
   * <p>The name of the cluster.</p>
   */
  Name?: string;

  /**
   * <p>The details about the current status of the cluster.</p>
   */
  Status?: ClusterStatus;

  /**
   * <p>An approximation of the cost of the cluster, represented in m1.small/hours. This value
   *          is incremented one time for every hour an m1.small instance runs. Larger instances are
   *          weighted more, so an EC2 instance that is roughly four times more expensive would result in
   *          the normalized instance hours being incremented by four. This result is only an
   *          approximation and does not reflect the actual billing rate.</p>
   */
  NormalizedInstanceHours?: number;

  /**
   * <p>The Amazon Resource Name of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the Outpost where the cluster is launched. </p>
   */
  OutpostArn?: string;
}

export namespace ClusterSummary {
  export const filterSensitiveLog = (obj: ClusterSummary): any => ({
    ...obj,
  });
}

/**
 * <p>An entity describing an executable that runs on a cluster.</p>
 */
export interface Command {
  /**
   * <p>The name of the command.</p>
   */
  Name?: string;

  /**
   * <p>The Amazon S3 location of the command script.</p>
   */
  ScriptPath?: string;

  /**
   * <p>Arguments for Amazon EMR to pass to the command for execution.</p>
   */
  Args?: string[];
}

export namespace Command {
  export const filterSensitiveLog = (obj: Command): any => ({
    ...obj,
  });
}

export enum ComputeLimitsUnitType {
  InstanceFleetUnits = "InstanceFleetUnits",
  Instances = "Instances",
  VCPU = "VCPU",
}

/**
 * <p> The EC2 unit limits for a managed scaling policy. The managed scaling activity of a
 *          cluster can not be above or below these limits. The limit only applies to the core and task
 *          nodes. The master node cannot be scaled after initial configuration. </p>
 */
export interface ComputeLimits {
  /**
   * <p> The unit type used for specifying a managed scaling policy. </p>
   */
  UnitType: ComputeLimitsUnitType | string | undefined;

  /**
   * <p> The lower boundary of EC2 units. It is measured through vCPU cores or instances for
   *          instance groups and measured through units for instance fleets. Managed scaling activities
   *          are not allowed beyond this boundary. The limit only applies to the core and task nodes.
   *          The master node cannot be scaled after initial configuration. </p>
   */
  MinimumCapacityUnits: number | undefined;

  /**
   * <p> The upper boundary of EC2 units. It is measured through vCPU cores or instances for
   *          instance groups and measured through units for instance fleets. Managed scaling activities
   *          are not allowed beyond this boundary. The limit only applies to the core and task nodes.
   *          The master node cannot be scaled after initial configuration. </p>
   */
  MaximumCapacityUnits: number | undefined;

  /**
   * <p> The upper boundary of On-Demand EC2 units. It is measured through vCPU cores or
   *          instances for instance groups and measured through units for instance fleets. The On-Demand
   *          units are not allowed to scale beyond this boundary. The parameter is used to split
   *          capacity allocation between On-Demand and Spot Instances. </p>
   */
  MaximumOnDemandCapacityUnits?: number;

  /**
   * <p> The upper boundary of EC2 units for core node type in a cluster. It is measured through
   *          vCPU cores or instances for instance groups and measured through units for instance fleets.
   *          The core units are not allowed to scale beyond this boundary. The parameter is used to
   *          split capacity allocation between core and task nodes. </p>
   */
  MaximumCoreCapacityUnits?: number;
}

export namespace ComputeLimits {
  export const filterSensitiveLog = (obj: ComputeLimits): any => ({
    ...obj,
  });
}

export interface CreateSecurityConfigurationInput {
  /**
   * <p>The name of the security configuration.</p>
   */
  Name: string | undefined;

  /**
   * <p>The security configuration details in JSON format. For JSON parameters and examples, see
   *             <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-security-configurations.html">Use Security
   *             Configurations to Set Up Cluster Security</a> in the <i>Amazon EMR Management
   *             Guide</i>.</p>
   */
  SecurityConfiguration: string | undefined;
}

export namespace CreateSecurityConfigurationInput {
  export const filterSensitiveLog = (obj: CreateSecurityConfigurationInput): any => ({
    ...obj,
  });
}

export interface CreateSecurityConfigurationOutput {
  /**
   * <p>The name of the security configuration.</p>
   */
  Name: string | undefined;

  /**
   * <p>The date and time the security configuration was created.</p>
   */
  CreationDateTime: Date | undefined;
}

export namespace CreateSecurityConfigurationOutput {
  export const filterSensitiveLog = (obj: CreateSecurityConfigurationOutput): any => ({
    ...obj,
  });
}

export interface CreateStudioInput {
  /**
   * <p>A descriptive name for the Amazon EMR Studio.</p>
   */
  Name: string | undefined;

  /**
   * <p>A detailed description of the Studio.</p>
   */
  Description?: string;

  /**
   * <p>Specifies whether the Studio authenticates users using single sign-on (SSO) or IAM.
   *          Amazon EMR Studio currently only supports SSO authentication.</p>
   */
  AuthMode: AuthMode | string | undefined;

  /**
   * <p>The ID of the Amazon Virtual Private Cloud (Amazon VPC) to associate with the
   *          Studio.</p>
   */
  VpcId: string | undefined;

  /**
   * <p>A list of subnet IDs to associate with the Studio. The subnets must belong to the VPC
   *          specified by <code>VpcId</code>. Studio users can create a Workspace in any of the
   *          specified subnets.</p>
   */
  SubnetIds: string[] | undefined;

  /**
   * <p>The IAM role that will be assumed by the Amazon EMR Studio. The service role provides a
   *          way for Amazon EMR Studio to interoperate with other AWS services.</p>
   */
  ServiceRole: string | undefined;

  /**
   * <p>The IAM user role that will be assumed by users and groups logged in to a Studio. The
   *          permissions attached to this IAM role can be scoped down for each user or group using
   *          session policies.</p>
   */
  UserRole: string | undefined;

  /**
   * <p>The ID of the Amazon EMR Studio Workspace security group. The Workspace security group
   *          allows outbound network traffic to resources in the Engine security group, and it must be
   *          in the same VPC specified by <code>VpcId</code>.</p>
   */
  WorkspaceSecurityGroupId: string | undefined;

  /**
   * <p>The ID of the Amazon EMR Studio Engine security group. The Engine security group allows
   *          inbound network traffic from the Workspace security group, and it must be in the same VPC
   *          specified by <code>VpcId</code>.</p>
   */
  EngineSecurityGroupId: string | undefined;

  /**
   * <p>The default Amazon S3 location to back up EMR Studio Workspaces and notebook files. A
   *          Studio user can select an alternative Amazon S3 location when creating a Workspace.</p>
   */
  DefaultS3Location?: string;

  /**
   * <p>A list of tags to associate with the Studio. Tags are user-defined key-value pairs that
   *          consist of a required key string with a maximum of 128 characters, and an optional value
   *          string with a maximum of 256 characters.</p>
   */
  Tags?: Tag[];
}

export namespace CreateStudioInput {
  export const filterSensitiveLog = (obj: CreateStudioInput): any => ({
    ...obj,
  });
}

export interface CreateStudioOutput {
  /**
   * <p>The ID of the Amazon EMR Studio.</p>
   */
  StudioId?: string;

  /**
   * <p>The unique Studio access URL.</p>
   */
  Url?: string;
}

export namespace CreateStudioOutput {
  export const filterSensitiveLog = (obj: CreateStudioOutput): any => ({
    ...obj,
  });
}

export enum IdentityType {
  GROUP = "GROUP",
  USER = "USER",
}

export interface CreateStudioSessionMappingInput {
  /**
   * <p>The ID of the Amazon EMR Studio to which the user or group will be mapped.</p>
   */
  StudioId: string | undefined;

  /**
   * <p>The globally unique identifier (GUID) of the user or group from the AWS SSO Identity
   *          Store. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserId">UserId</a> and <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-GroupId">GroupId</a> in the <i>AWS SSO Identity Store API Reference</i>.
   *          Either <code>IdentityName</code> or <code>IdentityId</code> must be specified.</p>
   */
  IdentityId?: string;

  /**
   * <p>The name of the user or group. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserId">UserName</a> and <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-DisplayName">DisplayName</a> in the <i>AWS SSO Identity Store API Reference</i>.
   *          Either <code>IdentityName</code> or <code>IdentityId</code> must be specified.</p>
   */
  IdentityName?: string;

  /**
   * <p>Specifies whether the identity to map to the Studio is a user or a group.</p>
   */
  IdentityType: IdentityType | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) for the session policy that will be applied to the user
   *          or group. Session policies refine Studio user permissions without the need to use multiple
   *          IAM user roles.</p>
   */
  SessionPolicyArn: string | undefined;
}

export namespace CreateStudioSessionMappingInput {
  export const filterSensitiveLog = (obj: CreateStudioSessionMappingInput): any => ({
    ...obj,
  });
}

export interface DeleteSecurityConfigurationInput {
  /**
   * <p>The name of the security configuration.</p>
   */
  Name: string | undefined;
}

export namespace DeleteSecurityConfigurationInput {
  export const filterSensitiveLog = (obj: DeleteSecurityConfigurationInput): any => ({
    ...obj,
  });
}

export interface DeleteSecurityConfigurationOutput {}

export namespace DeleteSecurityConfigurationOutput {
  export const filterSensitiveLog = (obj: DeleteSecurityConfigurationOutput): any => ({
    ...obj,
  });
}

export interface DeleteStudioInput {
  /**
   * <p>The ID of the Amazon EMR Studio.</p>
   */
  StudioId: string | undefined;
}

export namespace DeleteStudioInput {
  export const filterSensitiveLog = (obj: DeleteStudioInput): any => ({
    ...obj,
  });
}

export interface DeleteStudioSessionMappingInput {
  /**
   * <p>The ID of the Amazon EMR Studio.</p>
   */
  StudioId: string | undefined;

  /**
   * <p>The globally unique identifier (GUID) of the user or group to remove from the Amazon EMR
   *          Studio. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserId">UserId</a> and <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-GroupId">GroupId</a> in the <i>AWS SSO Identity Store API Reference</i>.
   *          Either <code>IdentityName</code> or <code>IdentityId</code> must be specified.</p>
   */
  IdentityId?: string;

  /**
   * <p>The name of the user name or group to remove from the Studio. For more information, see
   *             <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserId">UserName</a> and <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-DisplayName">DisplayName</a> in the <i>AWS SSO Identity Store API Reference</i>.
   *          Either <code>IdentityName</code> or <code>IdentityId</code> must be specified.</p>
   */
  IdentityName?: string;

  /**
   * <p>Specifies whether the identity to delete from the Studio is a user or a group.</p>
   */
  IdentityType: IdentityType | string | undefined;
}

export namespace DeleteStudioSessionMappingInput {
  export const filterSensitiveLog = (obj: DeleteStudioSessionMappingInput): any => ({
    ...obj,
  });
}

/**
 * <p>This input determines which cluster to describe.</p>
 */
export interface DescribeClusterInput {
  /**
   * <p>The identifier of the cluster to describe.</p>
   */
  ClusterId: string | undefined;
}

export namespace DescribeClusterInput {
  export const filterSensitiveLog = (obj: DescribeClusterInput): any => ({
    ...obj,
  });
}

export enum JobFlowExecutionState {
  BOOTSTRAPPING = "BOOTSTRAPPING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  RUNNING = "RUNNING",
  SHUTTING_DOWN = "SHUTTING_DOWN",
  STARTING = "STARTING",
  TERMINATED = "TERMINATED",
  WAITING = "WAITING",
}

/**
 * <p> The input for the <a>DescribeJobFlows</a> operation. </p>
 */
export interface DescribeJobFlowsInput {
  /**
   * <p>Return only job flows created after this date and time.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>Return only job flows created before this date and time.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>Return only job flows whose job flow ID is contained in this list.</p>
   */
  JobFlowIds?: string[];

  /**
   * <p>Return only job flows whose state is contained in this list.</p>
   */
  JobFlowStates?: (JobFlowExecutionState | string)[];
}

export namespace DescribeJobFlowsInput {
  export const filterSensitiveLog = (obj: DescribeJobFlowsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Describes the status of the cluster (job flow).</p>
 */
export interface JobFlowExecutionStatusDetail {
  /**
   * <p>The state of the job flow.</p>
   */
  State: JobFlowExecutionState | string | undefined;

  /**
   * <p>The creation date and time of the job flow.</p>
   */
  CreationDateTime: Date | undefined;

  /**
   * <p>The start date and time of the job flow.</p>
   */
  StartDateTime?: Date;

  /**
   * <p>The date and time when the job flow was ready to start running bootstrap actions.</p>
   */
  ReadyDateTime?: Date;

  /**
   * <p>The completion date and time of the job flow.</p>
   */
  EndDateTime?: Date;

  /**
   * <p>Description of the job flow last changed state.</p>
   */
  LastStateChangeReason?: string;
}

export namespace JobFlowExecutionStatusDetail {
  export const filterSensitiveLog = (obj: JobFlowExecutionStatusDetail): any => ({
    ...obj,
  });
}

export enum InstanceGroupState {
  ARRESTED = "ARRESTED",
  BOOTSTRAPPING = "BOOTSTRAPPING",
  ENDED = "ENDED",
  PROVISIONING = "PROVISIONING",
  RECONFIGURING = "RECONFIGURING",
  RESIZING = "RESIZING",
  RUNNING = "RUNNING",
  SHUTTING_DOWN = "SHUTTING_DOWN",
  SUSPENDED = "SUSPENDED",
  TERMINATED = "TERMINATED",
  TERMINATING = "TERMINATING",
}

/**
 * <p>Detailed information about an instance group.</p>
 */
export interface InstanceGroupDetail {
  /**
   * <p>Unique identifier for the instance group.</p>
   */
  InstanceGroupId?: string;

  /**
   * <p>Friendly name for the instance group.</p>
   */
  Name?: string;

  /**
   * <p>Market type of the EC2 instances used to create a cluster node.</p>
   */
  Market: MarketType | string | undefined;

  /**
   * <p>Instance group role in the cluster</p>
   */
  InstanceRole: InstanceRoleType | string | undefined;

  /**
   * <p>The bid price for each EC2 Spot Instance type as defined by <code>InstanceType</code>.
   *          Expressed in USD. If neither <code>BidPrice</code> nor
   *             <code>BidPriceAsPercentageOfOnDemandPrice</code> is provided,
   *             <code>BidPriceAsPercentageOfOnDemandPrice</code> defaults to 100%.</p>
   */
  BidPrice?: string;

  /**
   * <p>EC2 instance type.</p>
   */
  InstanceType: string | undefined;

  /**
   * <p>Target number of instances to run in the instance group.</p>
   */
  InstanceRequestCount: number | undefined;

  /**
   * <p>Actual count of running instances.</p>
   */
  InstanceRunningCount: number | undefined;

  /**
   * <p>State of instance group. The following values are deprecated: STARTING, TERMINATED, and
   *          FAILED.</p>
   */
  State: InstanceGroupState | string | undefined;

  /**
   * <p>Details regarding the state of the instance group.</p>
   */
  LastStateChangeReason?: string;

  /**
   * <p>The date/time the instance group was created.</p>
   */
  CreationDateTime: Date | undefined;

  /**
   * <p>The date/time the instance group was started.</p>
   */
  StartDateTime?: Date;

  /**
   * <p>The date/time the instance group was available to the cluster.</p>
   */
  ReadyDateTime?: Date;

  /**
   * <p>The date/time the instance group was terminated.</p>
   */
  EndDateTime?: Date;
}

export namespace InstanceGroupDetail {
  export const filterSensitiveLog = (obj: InstanceGroupDetail): any => ({
    ...obj,
  });
}

/**
 * <p>The Amazon EC2 Availability Zone configuration of the cluster (job flow).</p>
 */
export interface PlacementType {
  /**
   * <p>The Amazon EC2 Availability Zone for the cluster. <code>AvailabilityZone</code> is used
   *          for uniform instance groups, while <code>AvailabilityZones</code> (plural) is used for
   *          instance fleets.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>When multiple Availability Zones are specified, Amazon EMR evaluates them and launches
   *          instances in the optimal Availability Zone. <code>AvailabilityZones</code> is used for
   *          instance fleets, while <code>AvailabilityZone</code> (singular) is used for uniform
   *          instance groups.</p>
   *          <note>
   *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and
   *             later, excluding 5.0.x versions.</p>
   *          </note>
   */
  AvailabilityZones?: string[];
}

export namespace PlacementType {
  export const filterSensitiveLog = (obj: PlacementType): any => ({
    ...obj,
  });
}

/**
 * <p>Specify the type of Amazon EC2 instances that the cluster (job flow) runs on.</p>
 */
export interface JobFlowInstancesDetail {
  /**
   * <p>The Amazon EC2 master node instance type.</p>
   */
  MasterInstanceType: string | undefined;

  /**
   * <p>The DNS name of the master node. If the cluster is on a private subnet, this is the
   *          private DNS name. On a public subnet, this is the public DNS name.</p>
   */
  MasterPublicDnsName?: string;

  /**
   * <p>The Amazon EC2 instance identifier of the master node.</p>
   */
  MasterInstanceId?: string;

  /**
   * <p>The Amazon EC2 core and task node instance type.</p>
   */
  SlaveInstanceType: string | undefined;

  /**
   * <p>The number of Amazon EC2 instances in the cluster. If the value is 1, the same instance
   *          serves as both the master and core and task node. If the value is greater than 1, one
   *          instance is the master node and all others are core and task nodes.</p>
   */
  InstanceCount: number | undefined;

  /**
   * <p>Details about the instance groups in a cluster.</p>
   */
  InstanceGroups?: InstanceGroupDetail[];

  /**
   * <p>An approximation of the cost of the cluster, represented in m1.small/hours. This value
   *          is increased one time for every hour that an m1.small instance runs. Larger instances are
   *          weighted more heavily, so an Amazon EC2 instance that is roughly four times more expensive
   *          would result in the normalized instance hours being increased incrementally four times.
   *          This result is only an approximation and does not reflect the actual billing rate.</p>
   */
  NormalizedInstanceHours?: number;

  /**
   * <p>The name of an Amazon EC2 key pair that can be used to connect to the master node using
   *          SSH.</p>
   */
  Ec2KeyName?: string;

  /**
   * <p>For clusters launched within Amazon Virtual Private Cloud, this is the identifier of the
   *          subnet where the cluster was launched.</p>
   */
  Ec2SubnetId?: string;

  /**
   * <p>The Amazon EC2 Availability Zone for the cluster.</p>
   */
  Placement?: PlacementType;

  /**
   * <p>Specifies whether the cluster should remain available after completing all steps.</p>
   */
  KeepJobFlowAliveWhenNoSteps?: boolean;

  /**
   * <p>Specifies whether the Amazon EC2 instances in the cluster are protected from termination
   *          by API calls, user intervention, or in the event of a job-flow error.</p>
   */
  TerminationProtected?: boolean;

  /**
   * <p>The Hadoop version for the cluster.</p>
   */
  HadoopVersion?: string;
}

export namespace JobFlowInstancesDetail {
  export const filterSensitiveLog = (obj: JobFlowInstancesDetail): any => ({
    ...obj,
  });
}

export type StepExecutionState =
  | "CANCELLED"
  | "COMPLETED"
  | "CONTINUE"
  | "FAILED"
  | "INTERRUPTED"
  | "PENDING"
  | "RUNNING";

/**
 * <p>The execution state of a step.</p>
 */
export interface StepExecutionStatusDetail {
  /**
   * <p>The state of the step.</p>
   */
  State: StepExecutionState | string | undefined;

  /**
   * <p>The creation date and time of the step.</p>
   */
  CreationDateTime: Date | undefined;

  /**
   * <p>The start date and time of the step.</p>
   */
  StartDateTime?: Date;

  /**
   * <p>The completion date and time of the step.</p>
   */
  EndDateTime?: Date;

  /**
   * <p>A description of the step's current state.</p>
   */
  LastStateChangeReason?: string;
}

export namespace StepExecutionStatusDetail {
  export const filterSensitiveLog = (obj: StepExecutionStatusDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Combines the execution state and configuration of a step.</p>
 */
export interface StepDetail {
  /**
   * <p>The step configuration.</p>
   */
  StepConfig: StepConfig | undefined;

  /**
   * <p>The description of the step status.</p>
   */
  ExecutionStatusDetail: StepExecutionStatusDetail | undefined;
}

export namespace StepDetail {
  export const filterSensitiveLog = (obj: StepDetail): any => ({
    ...obj,
  });
}

/**
 * <p>A description of a cluster (job flow).</p>
 */
export interface JobFlowDetail {
  /**
   * <p>The job flow identifier.</p>
   */
  JobFlowId: string | undefined;

  /**
   * <p>The name of the job flow.</p>
   */
  Name: string | undefined;

  /**
   * <p>The location in Amazon S3 where log files for the job are stored.</p>
   */
  LogUri?: string;

  /**
   * <p>The AWS KMS customer master key (CMK) used for encrypting log files. This attribute is
   *          only available with EMR version 5.30.0 and later, excluding EMR 6.0.0.</p>
   */
  LogEncryptionKmsKeyId?: string;

  /**
   * <p>Applies only to Amazon EMR AMI versions 3.x and 2.x. For Amazon EMR releases 4.0 and
   *          later, <code>ReleaseLabel</code> is used. To specify a custom AMI, use
   *             <code>CustomAmiID</code>.</p>
   */
  AmiVersion?: string;

  /**
   * <p>Describes the execution status of the job flow.</p>
   */
  ExecutionStatusDetail: JobFlowExecutionStatusDetail | undefined;

  /**
   * <p>Describes the Amazon EC2 instances of the job flow.</p>
   */
  Instances: JobFlowInstancesDetail | undefined;

  /**
   * <p>A list of steps run by the job flow.</p>
   */
  Steps?: StepDetail[];

  /**
   * <p>A list of the bootstrap actions run by the job flow.</p>
   */
  BootstrapActions?: BootstrapActionDetail[];

  /**
   * <p>A list of strings set by third-party software when the job flow is launched. If you are
   *          not using third-party software to manage the job flow, this value is empty.</p>
   */
  SupportedProducts?: string[];

  /**
   * <p>Indicates whether the cluster is visible to all IAM users of the AWS account associated
   *          with the cluster. The default value, <code>true</code>, indicates that all IAM users in the
   *          AWS account can perform cluster actions if they have the proper IAM policy permissions. If
   *          this value is <code>false</code>, only the IAM user that created the cluster can perform
   *          actions. This value can be changed on a running cluster by using the <a>SetVisibleToAllUsers</a> action. You can override the default value of
   *             <code>true</code> when you create a cluster by using the <code>VisibleToAllUsers</code>
   *          parameter of the <code>RunJobFlow</code> action.</p>
   */
  VisibleToAllUsers?: boolean;

  /**
   * <p>The IAM role that was specified when the job flow was launched. The EC2 instances of the
   *          job flow assume this role.</p>
   */
  JobFlowRole?: string;

  /**
   * <p>The IAM role that is assumed by the Amazon EMR service to access AWS resources on your
   *          behalf.</p>
   */
  ServiceRole?: string;

  /**
   * <p>An IAM role for automatic scaling policies. The default role is
   *             <code>EMR_AutoScaling_DefaultRole</code>. The IAM role provides a way for the automatic
   *          scaling feature to get the required permissions it needs to launch and terminate EC2
   *          instances in an instance group.</p>
   */
  AutoScalingRole?: string;

  /**
   * <p>The way that individual Amazon EC2 instances terminate when an automatic scale-in
   *          activity occurs or an instance group is resized. <code>TERMINATE_AT_INSTANCE_HOUR</code>
   *          indicates that Amazon EMR terminates nodes at the instance-hour boundary, regardless of
   *          when the request to terminate the instance was submitted. This option is only available
   *          with Amazon EMR 5.1.0 and later and is the default for clusters created using that version.
   *             <code>TERMINATE_AT_TASK_COMPLETION</code> indicates that Amazon EMR adds nodes to a deny
   *          list and drains tasks from nodes before terminating the Amazon EC2 instances, regardless of
   *          the instance-hour boundary. With either behavior, Amazon EMR removes the least active nodes
   *          first and blocks instance termination if it could lead to HDFS corruption.
   *             <code>TERMINATE_AT_TASK_COMPLETION</code> available only in Amazon EMR version 4.1.0 and
   *          later, and is the default for versions of Amazon EMR earlier than 5.1.0.</p>
   */
  ScaleDownBehavior?: ScaleDownBehavior | string;
}

export namespace JobFlowDetail {
  export const filterSensitiveLog = (obj: JobFlowDetail): any => ({
    ...obj,
  });
}

/**
 * <p> The output for the <a>DescribeJobFlows</a> operation. </p>
 */
export interface DescribeJobFlowsOutput {
  /**
   * <p>A list of job flows matching the parameters supplied.</p>
   */
  JobFlows?: JobFlowDetail[];
}

export namespace DescribeJobFlowsOutput {
  export const filterSensitiveLog = (obj: DescribeJobFlowsOutput): any => ({
    ...obj,
  });
}

export interface DescribeNotebookExecutionInput {
  /**
   * <p>The unique identifier of the notebook execution.</p>
   */
  NotebookExecutionId: string | undefined;
}

export namespace DescribeNotebookExecutionInput {
  export const filterSensitiveLog = (obj: DescribeNotebookExecutionInput): any => ({
    ...obj,
  });
}

export enum ExecutionEngineType {
  EMR = "EMR",
}

/**
 * <p>Specifies the execution engine (cluster) to run the notebook and perform the notebook
 *          execution, for example, an EMR cluster.</p>
 */
export interface ExecutionEngineConfig {
  /**
   * <p>The unique identifier of the execution engine. For an EMR cluster, this is the cluster
   *          ID.</p>
   */
  Id: string | undefined;

  /**
   * <p>The type of execution engine. A value of <code>EMR</code> specifies an EMR
   *          cluster.</p>
   */
  Type?: ExecutionEngineType | string;

  /**
   * <p>An optional unique ID of an EC2 security group to associate with the master instance of
   *          the EMR cluster for this notebook execution. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-security-groups.html">Specifying
   *             EC2 Security Groups for EMR Notebooks</a> in the <i>EMR Management
   *             Guide</i>.</p>
   */
  MasterInstanceSecurityGroupId?: string;
}

export namespace ExecutionEngineConfig {
  export const filterSensitiveLog = (obj: ExecutionEngineConfig): any => ({
    ...obj,
  });
}

export enum NotebookExecutionStatus {
  FAILED = "FAILED",
  FAILING = "FAILING",
  FINISHED = "FINISHED",
  FINISHING = "FINISHING",
  RUNNING = "RUNNING",
  STARTING = "STARTING",
  START_PENDING = "START_PENDING",
  STOPPED = "STOPPED",
  STOPPING = "STOPPING",
  STOP_PENDING = "STOP_PENDING",
}

/**
 * <p>A notebook execution. An execution is a specific instance that an EMR Notebook is run
 *          using the <code>StartNotebookExecution</code> action.</p>
 */
export interface NotebookExecution {
  /**
   * <p>The unique identifier of a notebook execution.</p>
   */
  NotebookExecutionId?: string;

  /**
   * <p>The unique identifier of the EMR Notebook that is used for the notebook
   *          execution.</p>
   */
  EditorId?: string;

  /**
   * <p>The execution engine, such as an EMR cluster, used to run the EMR notebook and perform
   *          the notebook execution.</p>
   */
  ExecutionEngine?: ExecutionEngineConfig;

  /**
   * <p>A name for the notebook execution.</p>
   */
  NotebookExecutionName?: string;

  /**
   * <p>Input parameters in JSON format passed to the EMR Notebook at runtime for
   *          execution.</p>
   */
  NotebookParams?: string;

  /**
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
  Status?: NotebookExecutionStatus | string;

  /**
   * <p>The timestamp when notebook execution started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The timestamp when notebook execution ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>The Amazon Resource Name (ARN) of the notebook execution.</p>
   */
  Arn?: string;

  /**
   * <p>The location of the notebook execution's output file in Amazon S3.</p>
   */
  OutputNotebookURI?: string;

  /**
   * <p>The reason for the latest status change of the notebook execution.</p>
   */
  LastStateChangeReason?: string;

  /**
   * <p>The unique identifier of the EC2 security group associated with the EMR Notebook
   *          instance. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-managed-notebooks-security-groups.html">Specifying
   *             EC2 Security Groups for EMR Notebooks</a> in the <i>EMR Management
   *             Guide</i>.</p>
   */
  NotebookInstanceSecurityGroupId?: string;

  /**
   * <p>A list of tags associated with a notebook execution. Tags are user-defined key-value
   *          pairs that consist of a required key string with a maximum of 128 characters and an
   *          optional value string with a maximum of 256 characters.</p>
   */
  Tags?: Tag[];
}

export namespace NotebookExecution {
  export const filterSensitiveLog = (obj: NotebookExecution): any => ({
    ...obj,
  });
}

export interface DescribeNotebookExecutionOutput {
  /**
   * <p>Properties of the notebook execution.</p>
   */
  NotebookExecution?: NotebookExecution;
}

export namespace DescribeNotebookExecutionOutput {
  export const filterSensitiveLog = (obj: DescribeNotebookExecutionOutput): any => ({
    ...obj,
  });
}

export interface DescribeSecurityConfigurationInput {
  /**
   * <p>The name of the security configuration.</p>
   */
  Name: string | undefined;
}

export namespace DescribeSecurityConfigurationInput {
  export const filterSensitiveLog = (obj: DescribeSecurityConfigurationInput): any => ({
    ...obj,
  });
}

export interface DescribeSecurityConfigurationOutput {
  /**
   * <p>The name of the security configuration.</p>
   */
  Name?: string;

  /**
   * <p>The security configuration details in JSON format.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>The date and time the security configuration was created</p>
   */
  CreationDateTime?: Date;
}

export namespace DescribeSecurityConfigurationOutput {
  export const filterSensitiveLog = (obj: DescribeSecurityConfigurationOutput): any => ({
    ...obj,
  });
}

/**
 * <p>This input determines which step to describe.</p>
 */
export interface DescribeStepInput {
  /**
   * <p>The identifier of the cluster with steps to describe.</p>
   */
  ClusterId: string | undefined;

  /**
   * <p>The identifier of the step to describe.</p>
   */
  StepId: string | undefined;
}

export namespace DescribeStepInput {
  export const filterSensitiveLog = (obj: DescribeStepInput): any => ({
    ...obj,
  });
}

/**
 * <p>A cluster step consisting of a JAR file whose main function will be executed. The main
 *          function submits a job for Hadoop to execute and waits for the job to finish or
 *          fail.</p>
 */
export interface HadoopStepConfig {
  /**
   * <p>The path to the JAR file that runs during the step.</p>
   */
  Jar?: string;

  /**
   * <p>The list of Java properties that are set when the step runs. You can use these
   *          properties to pass key-value pairs to your main function.</p>
   */
  Properties?: { [key: string]: string };

  /**
   * <p>The name of the main class in the specified Java file. If not specified, the JAR file
   *          should specify a main class in its manifest file.</p>
   */
  MainClass?: string;

  /**
   * <p>The list of command line arguments to pass to the JAR file's main function for
   *          execution.</p>
   */
  Args?: string[];
}

export namespace HadoopStepConfig {
  export const filterSensitiveLog = (obj: HadoopStepConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The details of the step failure. The service attempts to detect the root cause for many
 *          common failures.</p>
 */
export interface FailureDetails {
  /**
   * <p>The reason for the step failure. In the case where the service cannot successfully
   *          determine the root cause of the failure, it returns "Unknown Error" as a reason.</p>
   */
  Reason?: string;

  /**
   * <p>The descriptive message including the error the Amazon EMR service has identified as the
   *          cause of step failure. This is text from an error log that describes the root cause of the
   *          failure.</p>
   */
  Message?: string;

  /**
   * <p>The path to the log file where the step failure root cause was originally
   *          recorded.</p>
   */
  LogFile?: string;
}

export namespace FailureDetails {
  export const filterSensitiveLog = (obj: FailureDetails): any => ({
    ...obj,
  });
}

export enum StepState {
  CANCELLED = "CANCELLED",
  CANCEL_PENDING = "CANCEL_PENDING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  INTERRUPTED = "INTERRUPTED",
  PENDING = "PENDING",
  RUNNING = "RUNNING",
}

export type StepStateChangeReasonCode = "NONE";

/**
 * <p>The details of the step state change reason.</p>
 */
export interface StepStateChangeReason {
  /**
   * <p>The programmable code for the state change reason. Note: Currently, the service provides
   *          no code for the state change.</p>
   */
  Code?: StepStateChangeReasonCode | string;

  /**
   * <p>The descriptive message for the state change reason.</p>
   */
  Message?: string;
}

export namespace StepStateChangeReason {
  export const filterSensitiveLog = (obj: StepStateChangeReason): any => ({
    ...obj,
  });
}

/**
 * <p>The timeline of the cluster step lifecycle.</p>
 */
export interface StepTimeline {
  /**
   * <p>The date and time when the cluster step was created.</p>
   */
  CreationDateTime?: Date;

  /**
   * <p>The date and time when the cluster step execution started.</p>
   */
  StartDateTime?: Date;

  /**
   * <p>The date and time when the cluster step execution completed or failed.</p>
   */
  EndDateTime?: Date;
}

export namespace StepTimeline {
  export const filterSensitiveLog = (obj: StepTimeline): any => ({
    ...obj,
  });
}

/**
 * <p>The execution status details of the cluster step.</p>
 */
export interface StepStatus {
  /**
   * <p>The execution state of the cluster step.</p>
   */
  State?: StepState | string;

  /**
   * <p>The reason for the step execution status change.</p>
   */
  StateChangeReason?: StepStateChangeReason;

  /**
   * <p>The details for the step failure including reason, message, and log file path where the
   *          root cause was identified.</p>
   */
  FailureDetails?: FailureDetails;

  /**
   * <p>The timeline of the cluster step status over time.</p>
   */
  Timeline?: StepTimeline;
}

export namespace StepStatus {
  export const filterSensitiveLog = (obj: StepStatus): any => ({
    ...obj,
  });
}

/**
 * <p>This represents a step in a cluster.</p>
 */
export interface Step {
  /**
   * <p>The identifier of the cluster step.</p>
   */
  Id?: string;

  /**
   * <p>The name of the cluster step.</p>
   */
  Name?: string;

  /**
   * <p>The Hadoop job configuration of the cluster step.</p>
   */
  Config?: HadoopStepConfig;

  /**
   * <p>The action to take when the cluster step fails. Possible values are TERMINATE_CLUSTER,
   *          CANCEL_AND_WAIT, and CONTINUE. TERMINATE_JOB_FLOW is provided for backward compatibility.
   *          We recommend using TERMINATE_CLUSTER instead.</p>
   */
  ActionOnFailure?: ActionOnFailure | string;

  /**
   * <p>The current execution status details of the cluster step.</p>
   */
  Status?: StepStatus;
}

export namespace Step {
  export const filterSensitiveLog = (obj: Step): any => ({
    ...obj,
  });
}

/**
 * <p>This output contains the description of the cluster step.</p>
 */
export interface DescribeStepOutput {
  /**
   * <p>The step details for the requested step identifier.</p>
   */
  Step?: Step;
}

export namespace DescribeStepOutput {
  export const filterSensitiveLog = (obj: DescribeStepOutput): any => ({
    ...obj,
  });
}

export interface DescribeStudioInput {
  /**
   * <p>The Amazon EMR Studio ID.</p>
   */
  StudioId: string | undefined;
}

export namespace DescribeStudioInput {
  export const filterSensitiveLog = (obj: DescribeStudioInput): any => ({
    ...obj,
  });
}

/**
 * <p>Details for an Amazon EMR Studio including ID, creation time, name, and so on.</p>
 */
export interface Studio {
  /**
   * <p>The ID of the EMR Studio.</p>
   */
  StudioId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the EMR Studio.</p>
   */
  StudioArn?: string;

  /**
   * <p>The name of the EMR Studio.</p>
   */
  Name?: string;

  /**
   * <p>The detailed description of the EMR Studio.</p>
   */
  Description?: string;

  /**
   * <p>Specifies whether the Studio authenticates users using single sign-on (SSO) or
   *          IAM.</p>
   */
  AuthMode?: AuthMode | string;

  /**
   * <p>The ID of the VPC associated with the EMR Studio.</p>
   */
  VpcId?: string;

  /**
   * <p>The list of IDs of the subnets associated with the Amazon EMR Studio.</p>
   */
  SubnetIds?: string[];

  /**
   * <p>The name of the IAM role assumed by the Amazon EMR Studio.</p>
   */
  ServiceRole?: string;

  /**
   * <p>The name of the IAM role assumed by users logged in to the Amazon EMR Studio.</p>
   */
  UserRole?: string;

  /**
   * <p>The ID of the Workspace security group associated with the Amazon EMR Studio. The
   *          Workspace security group allows outbound network traffic to resources in the Engine
   *          security group and to the internet.</p>
   */
  WorkspaceSecurityGroupId?: string;

  /**
   * <p>The ID of the Engine security group associated with the Amazon EMR Studio. The Engine
   *          security group allows inbound network traffic from resources in the Workspace security
   *          group.</p>
   */
  EngineSecurityGroupId?: string;

  /**
   * <p>The unique access URL of the Amazon EMR Studio.</p>
   */
  Url?: string;

  /**
   * <p>The time the Amazon EMR Studio was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The default Amazon S3 location to back up Amazon EMR Studio Workspaces and notebook
   *          files.</p>
   */
  DefaultS3Location?: string;

  /**
   * <p>A list of tags associated with the Amazon EMR Studio.</p>
   */
  Tags?: Tag[];
}

export namespace Studio {
  export const filterSensitiveLog = (obj: Studio): any => ({
    ...obj,
  });
}

export interface DescribeStudioOutput {
  /**
   * <p>The Amazon EMR Studio details.</p>
   */
  Studio?: Studio;
}

export namespace DescribeStudioOutput {
  export const filterSensitiveLog = (obj: DescribeStudioOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration of requested EBS block device associated with the instance group.</p>
 */
export interface EbsBlockDevice {
  /**
   * <p>EBS volume specifications such as volume type, IOPS, and size (GiB) that will be
   *          requested for the EBS volume attached to an EC2 instance in the cluster.</p>
   */
  VolumeSpecification?: VolumeSpecification;

  /**
   * <p>The device name that is exposed to the instance, such as /dev/sdh.</p>
   */
  Device?: string;
}

export namespace EbsBlockDevice {
  export const filterSensitiveLog = (obj: EbsBlockDevice): any => ({
    ...obj,
  });
}

/**
 * <p>EBS block device that's attached to an EC2 instance.</p>
 */
export interface EbsVolume {
  /**
   * <p>The device name that is exposed to the instance, such as /dev/sdh.</p>
   */
  Device?: string;

  /**
   * <p>The volume identifier of the EBS volume.</p>
   */
  VolumeId?: string;
}

export namespace EbsVolume {
  export const filterSensitiveLog = (obj: EbsVolume): any => ({
    ...obj,
  });
}

export interface GetBlockPublicAccessConfigurationInput {}

export namespace GetBlockPublicAccessConfigurationInput {
  export const filterSensitiveLog = (obj: GetBlockPublicAccessConfigurationInput): any => ({
    ...obj,
  });
}

export interface GetManagedScalingPolicyInput {
  /**
   * <p>Specifies the ID of the cluster for which the managed scaling policy will be fetched.
   *       </p>
   */
  ClusterId: string | undefined;
}

export namespace GetManagedScalingPolicyInput {
  export const filterSensitiveLog = (obj: GetManagedScalingPolicyInput): any => ({
    ...obj,
  });
}

/**
 * <p> Managed scaling policy for an Amazon EMR cluster. The policy specifies the limits for
 *          resources that can be added or terminated from a cluster. The policy only applies to the
 *          core and task nodes. The master node cannot be scaled after initial configuration. </p>
 */
export interface ManagedScalingPolicy {
  /**
   * <p>The EC2 unit limits for a managed scaling policy. The managed scaling activity of a
   *          cluster is not allowed to go above or below these limits. The limit only applies to the
   *          core and task nodes. The master node cannot be scaled after initial configuration.</p>
   */
  ComputeLimits?: ComputeLimits;
}

export namespace ManagedScalingPolicy {
  export const filterSensitiveLog = (obj: ManagedScalingPolicy): any => ({
    ...obj,
  });
}

export interface GetManagedScalingPolicyOutput {
  /**
   * <p>Specifies the managed scaling policy that is attached to an Amazon EMR cluster. </p>
   */
  ManagedScalingPolicy?: ManagedScalingPolicy;
}

export namespace GetManagedScalingPolicyOutput {
  export const filterSensitiveLog = (obj: GetManagedScalingPolicyOutput): any => ({
    ...obj,
  });
}

export interface GetStudioSessionMappingInput {
  /**
   * <p>The ID of the Amazon EMR Studio.</p>
   */
  StudioId: string | undefined;

  /**
   * <p>The globally unique identifier (GUID) of the user or group. For more information, see
   *             <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserId">UserId</a> and <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-GroupId">GroupId</a> in the <i>AWS SSO Identity Store API Reference</i>.
   *          Either <code>IdentityName</code> or <code>IdentityId</code> must be specified.</p>
   */
  IdentityId?: string;

  /**
   * <p>The name of the user or group to fetch. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserId">UserName</a> and <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-DisplayName">DisplayName</a> in the <i>AWS SSO Identity Store API Reference</i>.
   *          Either <code>IdentityName</code> or <code>IdentityId</code> must be specified.</p>
   */
  IdentityName?: string;

  /**
   * <p>Specifies whether the identity to fetch is a user or a group.</p>
   */
  IdentityType: IdentityType | string | undefined;
}

export namespace GetStudioSessionMappingInput {
  export const filterSensitiveLog = (obj: GetStudioSessionMappingInput): any => ({
    ...obj,
  });
}

/**
 * <p>Details for an Amazon EMR Studio session mapping including creation time, user or group
 *          ID, Studio ID, and so on.</p>
 */
export interface SessionMappingDetail {
  /**
   * <p>The ID of the Amazon EMR Studio.</p>
   */
  StudioId?: string;

  /**
   * <p>The globally unique identifier (GUID) of the user or group.</p>
   */
  IdentityId?: string;

  /**
   * <p>The name of the user or group. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserId">UserName</a> and <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-DisplayName">DisplayName</a> in the <i>AWS SSO Identity Store API
   *          Reference</i>.</p>
   */
  IdentityName?: string;

  /**
   * <p>Specifies whether the identity mapped to the Studio is a user or a group.</p>
   */
  IdentityType?: IdentityType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the session policy associated with the user or
   *          group.</p>
   */
  SessionPolicyArn?: string;

  /**
   * <p>The time the session mapping was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The time the session mapping was last modified.</p>
   */
  LastModifiedTime?: Date;
}

export namespace SessionMappingDetail {
  export const filterSensitiveLog = (obj: SessionMappingDetail): any => ({
    ...obj,
  });
}

export interface GetStudioSessionMappingOutput {
  /**
   * <p>The session mapping details for the specified Amazon EMR Studio and identity, including
   *          session policy ARN and creation time.</p>
   */
  SessionMapping?: SessionMappingDetail;
}

export namespace GetStudioSessionMappingOutput {
  export const filterSensitiveLog = (obj: GetStudioSessionMappingOutput): any => ({
    ...obj,
  });
}

/**
 * <p>This input determines which bootstrap actions to retrieve.</p>
 */
export interface ListBootstrapActionsInput {
  /**
   * <p>The cluster identifier for the bootstrap actions to list.</p>
   */
  ClusterId: string | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

export namespace ListBootstrapActionsInput {
  export const filterSensitiveLog = (obj: ListBootstrapActionsInput): any => ({
    ...obj,
  });
}

/**
 * <p>This output contains the bootstrap actions detail.</p>
 */
export interface ListBootstrapActionsOutput {
  /**
   * <p>The bootstrap actions associated with the cluster.</p>
   */
  BootstrapActions?: Command[];

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

export namespace ListBootstrapActionsOutput {
  export const filterSensitiveLog = (obj: ListBootstrapActionsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>This input determines how the ListClusters action filters the list of clusters that it
 *          returns.</p>
 */
export interface ListClustersInput {
  /**
   * <p>The creation date and time beginning value filter for listing clusters.</p>
   */
  CreatedAfter?: Date;

  /**
   * <p>The creation date and time end value filter for listing clusters.</p>
   */
  CreatedBefore?: Date;

  /**
   * <p>The cluster state filters to apply when listing clusters.</p>
   */
  ClusterStates?: (ClusterState | string)[];

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

export namespace ListClustersInput {
  export const filterSensitiveLog = (obj: ListClustersInput): any => ({
    ...obj,
  });
}

/**
 * <p>This contains a ClusterSummaryList with the cluster details; for example, the cluster
 *          IDs, names, and status.</p>
 */
export interface ListClustersOutput {
  /**
   * <p>The list of clusters for the account based on the given filters.</p>
   */
  Clusters?: ClusterSummary[];

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

export namespace ListClustersOutput {
  export const filterSensitiveLog = (obj: ListClustersOutput): any => ({
    ...obj,
  });
}

export interface ListInstanceFleetsInput {
  /**
   * <p>The unique identifier of the cluster.</p>
   */
  ClusterId: string | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

export namespace ListInstanceFleetsInput {
  export const filterSensitiveLog = (obj: ListInstanceFleetsInput): any => ({
    ...obj,
  });
}

export enum InstanceFleetState {
  BOOTSTRAPPING = "BOOTSTRAPPING",
  PROVISIONING = "PROVISIONING",
  RESIZING = "RESIZING",
  RUNNING = "RUNNING",
  SUSPENDED = "SUSPENDED",
  TERMINATED = "TERMINATED",
  TERMINATING = "TERMINATING",
}

export enum InstanceFleetStateChangeReasonCode {
  CLUSTER_TERMINATED = "CLUSTER_TERMINATED",
  INSTANCE_FAILURE = "INSTANCE_FAILURE",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  VALIDATION_ERROR = "VALIDATION_ERROR",
}

/**
 * <p>Provides status change reason details for the instance fleet.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and
 *             later, excluding 5.0.x versions.</p>
 *          </note>
 */
export interface InstanceFleetStateChangeReason {
  /**
   * <p>A code corresponding to the reason the state change occurred.</p>
   */
  Code?: InstanceFleetStateChangeReasonCode | string;

  /**
   * <p>An explanatory message.</p>
   */
  Message?: string;
}

export namespace InstanceFleetStateChangeReason {
  export const filterSensitiveLog = (obj: InstanceFleetStateChangeReason): any => ({
    ...obj,
  });
}

/**
 * <p>Provides historical timestamps for the instance fleet, including the time of creation,
 *          the time it became ready to run jobs, and the time of termination.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and
 *             later, excluding 5.0.x versions.</p>
 *          </note>
 */
export interface InstanceFleetTimeline {
  /**
   * <p>The time and date the instance fleet was created.</p>
   */
  CreationDateTime?: Date;

  /**
   * <p>The time and date the instance fleet was ready to run jobs.</p>
   */
  ReadyDateTime?: Date;

  /**
   * <p>The time and date the instance fleet terminated.</p>
   */
  EndDateTime?: Date;
}

export namespace InstanceFleetTimeline {
  export const filterSensitiveLog = (obj: InstanceFleetTimeline): any => ({
    ...obj,
  });
}

/**
 * <p>The status of the instance fleet.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and
 *             later, excluding 5.0.x versions.</p>
 *          </note>
 */
export interface InstanceFleetStatus {
  /**
   * <p>A code representing the instance fleet status.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>PROVISIONING</code>—The instance fleet is provisioning EC2 resources and is
   *                not yet ready to run jobs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>BOOTSTRAPPING</code>—EC2 instances and other resources have been provisioned
   *                and the bootstrap actions specified for the instances are underway.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RUNNING</code>—EC2 instances and other resources are running. They are
   *                either executing jobs or waiting to execute jobs.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>RESIZING</code>—A resize operation is underway. EC2 instances are either
   *                being added or removed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SUSPENDED</code>—A resize operation could not complete. Existing EC2
   *                instances are running, but instances can't be added or removed.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TERMINATING</code>—The instance fleet is terminating EC2 instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>TERMINATED</code>—The instance fleet is no longer active, and all EC2
   *                instances have been terminated.</p>
   *             </li>
   *          </ul>
   */
  State?: InstanceFleetState | string;

  /**
   * <p>Provides status change reason details for the instance fleet.</p>
   */
  StateChangeReason?: InstanceFleetStateChangeReason;

  /**
   * <p>Provides historical timestamps for the instance fleet, including the time of creation,
   *          the time it became ready to run jobs, and the time of termination.</p>
   */
  Timeline?: InstanceFleetTimeline;
}

export namespace InstanceFleetStatus {
  export const filterSensitiveLog = (obj: InstanceFleetStatus): any => ({
    ...obj,
  });
}

/**
 * <p>This input determines which instance groups to retrieve.</p>
 */
export interface ListInstanceGroupsInput {
  /**
   * <p>The identifier of the cluster for which to list the instance groups.</p>
   */
  ClusterId: string | undefined;

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

export namespace ListInstanceGroupsInput {
  export const filterSensitiveLog = (obj: ListInstanceGroupsInput): any => ({
    ...obj,
  });
}

export enum InstanceGroupType {
  CORE = "CORE",
  MASTER = "MASTER",
  TASK = "TASK",
}

/**
 * <p>Custom policy for requesting termination protection or termination of specific instances
 *          when shrinking an instance group.</p>
 */
export interface InstanceResizePolicy {
  /**
   * <p>Specific list of instances to be terminated when shrinking an instance group.</p>
   */
  InstancesToTerminate?: string[];

  /**
   * <p>Specific list of instances to be protected when shrinking an instance group.</p>
   */
  InstancesToProtect?: string[];

  /**
   * <p>Decommissioning timeout override for the specific list of instances to be
   *          terminated.</p>
   */
  InstanceTerminationTimeout?: number;
}

export namespace InstanceResizePolicy {
  export const filterSensitiveLog = (obj: InstanceResizePolicy): any => ({
    ...obj,
  });
}

/**
 * <p>Policy for customizing shrink operations. Allows configuration of decommissioning
 *          timeout and targeted instance shrinking.</p>
 */
export interface ShrinkPolicy {
  /**
   * <p>The desired timeout for decommissioning an instance. Overrides the default YARN
   *          decommissioning timeout.</p>
   */
  DecommissionTimeout?: number;

  /**
   * <p>Custom policy for requesting termination protection or termination of specific instances
   *          when shrinking an instance group.</p>
   */
  InstanceResizePolicy?: InstanceResizePolicy;
}

export namespace ShrinkPolicy {
  export const filterSensitiveLog = (obj: ShrinkPolicy): any => ({
    ...obj,
  });
}

export enum InstanceGroupStateChangeReasonCode {
  CLUSTER_TERMINATED = "CLUSTER_TERMINATED",
  INSTANCE_FAILURE = "INSTANCE_FAILURE",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  VALIDATION_ERROR = "VALIDATION_ERROR",
}

/**
 * <p>The status change reason details for the instance group.</p>
 */
export interface InstanceGroupStateChangeReason {
  /**
   * <p>The programmable code for the state change reason.</p>
   */
  Code?: InstanceGroupStateChangeReasonCode | string;

  /**
   * <p>The status change reason description.</p>
   */
  Message?: string;
}

export namespace InstanceGroupStateChangeReason {
  export const filterSensitiveLog = (obj: InstanceGroupStateChangeReason): any => ({
    ...obj,
  });
}

/**
 * <p>The timeline of the instance group lifecycle.</p>
 */
export interface InstanceGroupTimeline {
  /**
   * <p>The creation date and time of the instance group.</p>
   */
  CreationDateTime?: Date;

  /**
   * <p>The date and time when the instance group became ready to perform tasks.</p>
   */
  ReadyDateTime?: Date;

  /**
   * <p>The date and time when the instance group terminated.</p>
   */
  EndDateTime?: Date;
}

export namespace InstanceGroupTimeline {
  export const filterSensitiveLog = (obj: InstanceGroupTimeline): any => ({
    ...obj,
  });
}

/**
 * <p>The details of the instance group status.</p>
 */
export interface InstanceGroupStatus {
  /**
   * <p>The current state of the instance group.</p>
   */
  State?: InstanceGroupState | string;

  /**
   * <p>The status change reason details for the instance group.</p>
   */
  StateChangeReason?: InstanceGroupStateChangeReason;

  /**
   * <p>The timeline of the instance group status over time.</p>
   */
  Timeline?: InstanceGroupTimeline;
}

export namespace InstanceGroupStatus {
  export const filterSensitiveLog = (obj: InstanceGroupStatus): any => ({
    ...obj,
  });
}

export enum InstanceState {
  AWAITING_FULFILLMENT = "AWAITING_FULFILLMENT",
  BOOTSTRAPPING = "BOOTSTRAPPING",
  PROVISIONING = "PROVISIONING",
  RUNNING = "RUNNING",
  TERMINATED = "TERMINATED",
}

/**
 * <p>This input determines which instances to list.</p>
 */
export interface ListInstancesInput {
  /**
   * <p>The identifier of the cluster for which to list the instances.</p>
   */
  ClusterId: string | undefined;

  /**
   * <p>The identifier of the instance group for which to list the instances.</p>
   */
  InstanceGroupId?: string;

  /**
   * <p>The type of instance group for which to list the instances.</p>
   */
  InstanceGroupTypes?: (InstanceGroupType | string)[];

  /**
   * <p>The unique identifier of the instance fleet.</p>
   */
  InstanceFleetId?: string;

  /**
   * <p>The node type of the instance fleet. For example MASTER, CORE, or TASK.</p>
   */
  InstanceFleetType?: InstanceFleetType | string;

  /**
   * <p>A list of instance states that will filter the instances returned with this
   *          request.</p>
   */
  InstanceStates?: (InstanceState | string)[];

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

export namespace ListInstancesInput {
  export const filterSensitiveLog = (obj: ListInstancesInput): any => ({
    ...obj,
  });
}

export enum InstanceStateChangeReasonCode {
  BOOTSTRAP_FAILURE = "BOOTSTRAP_FAILURE",
  CLUSTER_TERMINATED = "CLUSTER_TERMINATED",
  INSTANCE_FAILURE = "INSTANCE_FAILURE",
  INTERNAL_ERROR = "INTERNAL_ERROR",
  VALIDATION_ERROR = "VALIDATION_ERROR",
}

/**
 * <p>The details of the status change reason for the instance.</p>
 */
export interface InstanceStateChangeReason {
  /**
   * <p>The programmable code for the state change reason.</p>
   */
  Code?: InstanceStateChangeReasonCode | string;

  /**
   * <p>The status change reason description.</p>
   */
  Message?: string;
}

export namespace InstanceStateChangeReason {
  export const filterSensitiveLog = (obj: InstanceStateChangeReason): any => ({
    ...obj,
  });
}

/**
 * <p>The timeline of the instance lifecycle.</p>
 */
export interface InstanceTimeline {
  /**
   * <p>The creation date and time of the instance.</p>
   */
  CreationDateTime?: Date;

  /**
   * <p>The date and time when the instance was ready to perform tasks.</p>
   */
  ReadyDateTime?: Date;

  /**
   * <p>The date and time when the instance was terminated.</p>
   */
  EndDateTime?: Date;
}

export namespace InstanceTimeline {
  export const filterSensitiveLog = (obj: InstanceTimeline): any => ({
    ...obj,
  });
}

/**
 * <p>The instance status details.</p>
 */
export interface InstanceStatus {
  /**
   * <p>The current state of the instance.</p>
   */
  State?: InstanceState | string;

  /**
   * <p>The details of the status change reason for the instance.</p>
   */
  StateChangeReason?: InstanceStateChangeReason;

  /**
   * <p>The timeline of the instance status over time.</p>
   */
  Timeline?: InstanceTimeline;
}

export namespace InstanceStatus {
  export const filterSensitiveLog = (obj: InstanceStatus): any => ({
    ...obj,
  });
}

/**
 * <p>Represents an EC2 instance provisioned as part of cluster.</p>
 */
export interface Instance {
  /**
   * <p>The unique identifier for the instance in Amazon EMR.</p>
   */
  Id?: string;

  /**
   * <p>The unique identifier of the instance in Amazon EC2.</p>
   */
  Ec2InstanceId?: string;

  /**
   * <p>The public DNS name of the instance.</p>
   */
  PublicDnsName?: string;

  /**
   * <p>The public IP address of the instance.</p>
   */
  PublicIpAddress?: string;

  /**
   * <p>The private DNS name of the instance.</p>
   */
  PrivateDnsName?: string;

  /**
   * <p>The private IP address of the instance.</p>
   */
  PrivateIpAddress?: string;

  /**
   * <p>The current status of the instance.</p>
   */
  Status?: InstanceStatus;

  /**
   * <p>The identifier of the instance group to which this instance belongs.</p>
   */
  InstanceGroupId?: string;

  /**
   * <p>The unique identifier of the instance fleet to which an EC2 instance belongs.</p>
   */
  InstanceFleetId?: string;

  /**
   * <p>The instance purchasing option. Valid values are <code>ON_DEMAND</code> or
   *             <code>SPOT</code>. </p>
   */
  Market?: MarketType | string;

  /**
   * <p>The EC2 instance type, for example <code>m3.xlarge</code>.</p>
   */
  InstanceType?: string;

  /**
   * <p>The list of EBS volumes that are attached to this instance.</p>
   */
  EbsVolumes?: EbsVolume[];
}

export namespace Instance {
  export const filterSensitiveLog = (obj: Instance): any => ({
    ...obj,
  });
}

/**
 * <p>This output contains the list of instances.</p>
 */
export interface ListInstancesOutput {
  /**
   * <p>The list of instances for the cluster and given filters.</p>
   */
  Instances?: Instance[];

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

export namespace ListInstancesOutput {
  export const filterSensitiveLog = (obj: ListInstancesOutput): any => ({
    ...obj,
  });
}

export interface ListNotebookExecutionsInput {
  /**
   * <p>The unique ID of the editor associated with the notebook execution.</p>
   */
  EditorId?: string;

  /**
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
  Status?: NotebookExecutionStatus | string;

  /**
   * <p>The beginning of time range filter for listing notebook executions. The default is the
   *          timestamp of 30 days ago.</p>
   */
  From?: Date;

  /**
   * <p>The end of time range filter for listing notebook executions. The default is the current
   *          timestamp.</p>
   */
  To?: Date;

  /**
   * <p>The pagination token, returned by a previous <code>ListNotebookExecutions</code> call,
   *          that indicates the start of the list for this <code>ListNotebookExecutions</code>
   *          call.</p>
   */
  Marker?: string;
}

export namespace ListNotebookExecutionsInput {
  export const filterSensitiveLog = (obj: ListNotebookExecutionsInput): any => ({
    ...obj,
  });
}

/**
 * <p></p>
 */
export interface NotebookExecutionSummary {
  /**
   * <p>The unique identifier of the notebook execution.</p>
   */
  NotebookExecutionId?: string;

  /**
   * <p>The unique identifier of the editor associated with the notebook execution.</p>
   */
  EditorId?: string;

  /**
   * <p>The name of the notebook execution.</p>
   */
  NotebookExecutionName?: string;

  /**
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
  Status?: NotebookExecutionStatus | string;

  /**
   * <p>The timestamp when notebook execution started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The timestamp when notebook execution started.</p>
   */
  EndTime?: Date;
}

export namespace NotebookExecutionSummary {
  export const filterSensitiveLog = (obj: NotebookExecutionSummary): any => ({
    ...obj,
  });
}

export interface ListNotebookExecutionsOutput {
  /**
   * <p>A list of notebook executions.</p>
   */
  NotebookExecutions?: NotebookExecutionSummary[];

  /**
   * <p>A pagination token that a subsequent <code>ListNotebookExecutions</code> can use to
   *          determine the next set of results to retrieve.</p>
   */
  Marker?: string;
}

export namespace ListNotebookExecutionsOutput {
  export const filterSensitiveLog = (obj: ListNotebookExecutionsOutput): any => ({
    ...obj,
  });
}

export interface ListSecurityConfigurationsInput {
  /**
   * <p>The pagination token that indicates the set of results to retrieve.</p>
   */
  Marker?: string;
}

export namespace ListSecurityConfigurationsInput {
  export const filterSensitiveLog = (obj: ListSecurityConfigurationsInput): any => ({
    ...obj,
  });
}

/**
 * <p>The creation date and time, and name, of a security configuration.</p>
 */
export interface SecurityConfigurationSummary {
  /**
   * <p>The name of the security configuration.</p>
   */
  Name?: string;

  /**
   * <p>The date and time the security configuration was created.</p>
   */
  CreationDateTime?: Date;
}

export namespace SecurityConfigurationSummary {
  export const filterSensitiveLog = (obj: SecurityConfigurationSummary): any => ({
    ...obj,
  });
}

export interface ListSecurityConfigurationsOutput {
  /**
   * <p>The creation date and time, and name, of each security configuration.</p>
   */
  SecurityConfigurations?: SecurityConfigurationSummary[];

  /**
   * <p>A pagination token that indicates the next set of results to retrieve. Include the
   *          marker in the next ListSecurityConfiguration call to retrieve the next page of results, if
   *          required.</p>
   */
  Marker?: string;
}

export namespace ListSecurityConfigurationsOutput {
  export const filterSensitiveLog = (obj: ListSecurityConfigurationsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>This input determines which steps to list.</p>
 */
export interface ListStepsInput {
  /**
   * <p>The identifier of the cluster for which to list the steps.</p>
   */
  ClusterId: string | undefined;

  /**
   * <p>The filter to limit the step list based on certain states.</p>
   */
  StepStates?: (StepState | string)[];

  /**
   * <p>The filter to limit the step list based on the identifier of the steps. You can specify
   *          a maximum of ten Step IDs. The character constraint applies to the overall length of the
   *          array.</p>
   */
  StepIds?: string[];

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

export namespace ListStepsInput {
  export const filterSensitiveLog = (obj: ListStepsInput): any => ({
    ...obj,
  });
}

/**
 * <p>The summary of the cluster step.</p>
 */
export interface StepSummary {
  /**
   * <p>The identifier of the cluster step.</p>
   */
  Id?: string;

  /**
   * <p>The name of the cluster step.</p>
   */
  Name?: string;

  /**
   * <p>The Hadoop job configuration of the cluster step.</p>
   */
  Config?: HadoopStepConfig;

  /**
   * <p>The action to take when the cluster step fails. Possible values are TERMINATE_CLUSTER,
   *          CANCEL_AND_WAIT, and CONTINUE. TERMINATE_JOB_FLOW is available for backward compatibility.
   *          We recommend using TERMINATE_CLUSTER instead.</p>
   */
  ActionOnFailure?: ActionOnFailure | string;

  /**
   * <p>The current execution status details of the cluster step.</p>
   */
  Status?: StepStatus;
}

export namespace StepSummary {
  export const filterSensitiveLog = (obj: StepSummary): any => ({
    ...obj,
  });
}

/**
 * <p>This output contains the list of steps returned in reverse order. This means that the
 *          last step is the first element in the list.</p>
 */
export interface ListStepsOutput {
  /**
   * <p>The filtered list of steps for the cluster.</p>
   */
  Steps?: StepSummary[];

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

export namespace ListStepsOutput {
  export const filterSensitiveLog = (obj: ListStepsOutput): any => ({
    ...obj,
  });
}

export interface ListStudiosInput {
  /**
   * <p>The pagination token that indicates the set of results to retrieve.</p>
   */
  Marker?: string;
}

export namespace ListStudiosInput {
  export const filterSensitiveLog = (obj: ListStudiosInput): any => ({
    ...obj,
  });
}

/**
 * <p>Details for an Amazon EMR Studio, including ID, Name, VPC, and Description. The details
 *          do not include subnets, IAM roles, security groups, or tags associated with the
 *          Studio.</p>
 */
export interface StudioSummary {
  /**
   * <p>The ID of the Amazon EMR Studio.</p>
   */
  StudioId?: string;

  /**
   * <p>The name of the Amazon EMR Studio.</p>
   */
  Name?: string;

  /**
   * <p>The ID of the Virtual Private Cloud (Amazon VPC) associated with the Amazon EMR
   *          Studio.</p>
   */
  VpcId?: string;

  /**
   * <p>The detailed description of the EMR Studio.</p>
   */
  Description?: string;

  /**
   * <p>The unique access URL of the Amazon EMR Studio.</p>
   */
  Url?: string;

  /**
   * <p>The time when the Amazon EMR Studio was created.</p>
   */
  CreationTime?: Date;
}

export namespace StudioSummary {
  export const filterSensitiveLog = (obj: StudioSummary): any => ({
    ...obj,
  });
}

export interface ListStudiosOutput {
  /**
   * <p>The list of Studio summary objects.</p>
   */
  Studios?: StudioSummary[];

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

export namespace ListStudiosOutput {
  export const filterSensitiveLog = (obj: ListStudiosOutput): any => ({
    ...obj,
  });
}

export interface ListStudioSessionMappingsInput {
  /**
   * <p>The ID of the Amazon EMR Studio.</p>
   */
  StudioId?: string;

  /**
   * <p>Specifies whether to return session mappings for users or groups. If not specified, the
   *          results include session mapping details for both users and groups.</p>
   */
  IdentityType?: IdentityType | string;

  /**
   * <p>The pagination token that indicates the set of results to retrieve.</p>
   */
  Marker?: string;
}

export namespace ListStudioSessionMappingsInput {
  export const filterSensitiveLog = (obj: ListStudioSessionMappingsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Details for an Amazon EMR Studio session mapping. The details do not include the time
 *          the session mapping was last modified.</p>
 */
export interface SessionMappingSummary {
  /**
   * <p>The ID of the Amazon EMR Studio.</p>
   */
  StudioId?: string;

  /**
   * <p>The globally unique identifier (GUID) of the user or group from the AWS SSO Identity
   *          Store.</p>
   */
  IdentityId?: string;

  /**
   * <p>The name of the user or group. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserId">UserName</a> and <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-DisplayName">DisplayName</a> in the <i>AWS SSO Identity Store API
   *          Reference</i>.</p>
   */
  IdentityName?: string;

  /**
   * <p>Specifies whether the identity mapped to the Studio is a user or a group.</p>
   */
  IdentityType?: IdentityType | string;

  /**
   * <p>The Amazon Resource Name (ARN) of the session policy associated with the user or
   *          group.</p>
   */
  SessionPolicyArn?: string;

  /**
   * <p>The time the session mapping was created.</p>
   */
  CreationTime?: Date;
}

export namespace SessionMappingSummary {
  export const filterSensitiveLog = (obj: SessionMappingSummary): any => ({
    ...obj,
  });
}

export interface ListStudioSessionMappingsOutput {
  /**
   * <p>A list of session mapping summary objects. Each object includes session mapping details
   *          such as creation time, identity type (user or group), and Studio ID.</p>
   */
  SessionMappings?: SessionMappingSummary[];

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

export namespace ListStudioSessionMappingsOutput {
  export const filterSensitiveLog = (obj: ListStudioSessionMappingsOutput): any => ({
    ...obj,
  });
}

export interface ModifyClusterInput {
  /**
   * <p>The unique identifier of the cluster.</p>
   */
  ClusterId: string | undefined;

  /**
   * <p>The number of steps that can be executed concurrently. You can specify a maximum of 256
   *          steps. </p>
   */
  StepConcurrencyLevel?: number;
}

export namespace ModifyClusterInput {
  export const filterSensitiveLog = (obj: ModifyClusterInput): any => ({
    ...obj,
  });
}

export interface ModifyClusterOutput {
  /**
   * <p>The number of steps that can be executed concurrently.</p>
   */
  StepConcurrencyLevel?: number;
}

export namespace ModifyClusterOutput {
  export const filterSensitiveLog = (obj: ModifyClusterOutput): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration parameters for an instance fleet modification request.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and
 *             later, excluding 5.0.x versions.</p>
 *          </note>
 */
export interface InstanceFleetModifyConfig {
  /**
   * <p>A unique identifier for the instance fleet.</p>
   */
  InstanceFleetId: string | undefined;

  /**
   * <p>The target capacity of On-Demand units for the instance fleet. For more information see
   *             <a>InstanceFleetConfig$TargetOnDemandCapacity</a>.</p>
   */
  TargetOnDemandCapacity?: number;

  /**
   * <p>The target capacity of Spot units for the instance fleet. For more information, see
   *             <a>InstanceFleetConfig$TargetSpotCapacity</a>.</p>
   */
  TargetSpotCapacity?: number;
}

export namespace InstanceFleetModifyConfig {
  export const filterSensitiveLog = (obj: InstanceFleetModifyConfig): any => ({
    ...obj,
  });
}

export interface ModifyInstanceFleetInput {
  /**
   * <p>The unique identifier of the cluster.</p>
   */
  ClusterId: string | undefined;

  /**
   * <p>The unique identifier of the instance fleet.</p>
   */
  InstanceFleet: InstanceFleetModifyConfig | undefined;
}

export namespace ModifyInstanceFleetInput {
  export const filterSensitiveLog = (obj: ModifyInstanceFleetInput): any => ({
    ...obj,
  });
}

export interface PutAutoScalingPolicyInput {
  /**
   * <p>Specifies the ID of a cluster. The instance group to which the automatic scaling policy
   *          is applied is within this cluster.</p>
   */
  ClusterId: string | undefined;

  /**
   * <p>Specifies the ID of the instance group to which the automatic scaling policy is
   *          applied.</p>
   */
  InstanceGroupId: string | undefined;

  /**
   * <p>Specifies the definition of the automatic scaling policy.</p>
   */
  AutoScalingPolicy: AutoScalingPolicy | undefined;
}

export namespace PutAutoScalingPolicyInput {
  export const filterSensitiveLog = (obj: PutAutoScalingPolicyInput): any => ({
    ...obj,
  });
}

export interface PutAutoScalingPolicyOutput {
  /**
   * <p>Specifies the ID of a cluster. The instance group to which the automatic scaling policy
   *          is applied is within this cluster.</p>
   */
  ClusterId?: string;

  /**
   * <p>Specifies the ID of the instance group to which the scaling policy is applied.</p>
   */
  InstanceGroupId?: string;

  /**
   * <p>The automatic scaling policy definition.</p>
   */
  AutoScalingPolicy?: AutoScalingPolicyDescription;

  /**
   * <p>The Amazon Resource Name of the cluster.</p>
   */
  ClusterArn?: string;
}

export namespace PutAutoScalingPolicyOutput {
  export const filterSensitiveLog = (obj: PutAutoScalingPolicyOutput): any => ({
    ...obj,
  });
}

export interface PutBlockPublicAccessConfigurationOutput {}

export namespace PutBlockPublicAccessConfigurationOutput {
  export const filterSensitiveLog = (obj: PutBlockPublicAccessConfigurationOutput): any => ({
    ...obj,
  });
}

export interface PutManagedScalingPolicyInput {
  /**
   * <p>Specifies the ID of an EMR cluster where the managed scaling policy is attached. </p>
   */
  ClusterId: string | undefined;

  /**
   * <p>Specifies the constraints for the managed scaling policy. </p>
   */
  ManagedScalingPolicy: ManagedScalingPolicy | undefined;
}

export namespace PutManagedScalingPolicyInput {
  export const filterSensitiveLog = (obj: PutManagedScalingPolicyInput): any => ({
    ...obj,
  });
}

export interface PutManagedScalingPolicyOutput {}

export namespace PutManagedScalingPolicyOutput {
  export const filterSensitiveLog = (obj: PutManagedScalingPolicyOutput): any => ({
    ...obj,
  });
}

export interface RemoveAutoScalingPolicyInput {
  /**
   * <p>Specifies the ID of a cluster. The instance group to which the automatic scaling policy
   *          is applied is within this cluster.</p>
   */
  ClusterId: string | undefined;

  /**
   * <p>Specifies the ID of the instance group to which the scaling policy is applied.</p>
   */
  InstanceGroupId: string | undefined;
}

export namespace RemoveAutoScalingPolicyInput {
  export const filterSensitiveLog = (obj: RemoveAutoScalingPolicyInput): any => ({
    ...obj,
  });
}

export interface RemoveAutoScalingPolicyOutput {}

export namespace RemoveAutoScalingPolicyOutput {
  export const filterSensitiveLog = (obj: RemoveAutoScalingPolicyOutput): any => ({
    ...obj,
  });
}

export interface RemoveManagedScalingPolicyInput {
  /**
   * <p> Specifies the ID of the cluster from which the managed scaling policy will be removed.
   *       </p>
   */
  ClusterId: string | undefined;
}

export namespace RemoveManagedScalingPolicyInput {
  export const filterSensitiveLog = (obj: RemoveManagedScalingPolicyInput): any => ({
    ...obj,
  });
}

export interface RemoveManagedScalingPolicyOutput {}

export namespace RemoveManagedScalingPolicyOutput {
  export const filterSensitiveLog = (obj: RemoveManagedScalingPolicyOutput): any => ({
    ...obj,
  });
}

/**
 * <p>This input identifies a cluster and a list of tags to remove.</p>
 */
export interface RemoveTagsInput {
  /**
   * <p>The Amazon EMR resource identifier from which tags will be removed. This value must be a
   *          cluster identifier.</p>
   */
  ResourceId: string | undefined;

  /**
   * <p>A list of tag keys to remove from a resource.</p>
   */
  TagKeys: string[] | undefined;
}

export namespace RemoveTagsInput {
  export const filterSensitiveLog = (obj: RemoveTagsInput): any => ({
    ...obj,
  });
}

/**
 * <p>This output indicates the result of removing tags from a resource.</p>
 */
export interface RemoveTagsOutput {}

export namespace RemoveTagsOutput {
  export const filterSensitiveLog = (obj: RemoveTagsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>The list of supported product configurations which allow user-supplied arguments. EMR
 *          accepts these arguments and forwards them to the corresponding installation script as
 *          bootstrap action arguments.</p>
 */
export interface SupportedProductConfig {
  /**
   * <p>The name of the product configuration.</p>
   */
  Name?: string;

  /**
   * <p>The list of user-supplied arguments.</p>
   */
  Args?: string[];
}

export namespace SupportedProductConfig {
  export const filterSensitiveLog = (obj: SupportedProductConfig): any => ({
    ...obj,
  });
}

/**
 * <p> The result of the <a>RunJobFlow</a> operation. </p>
 */
export interface RunJobFlowOutput {
  /**
   * <p>An unique identifier for the job flow.</p>
   */
  JobFlowId?: string;

  /**
   * <p>The Amazon Resource Name of the cluster.</p>
   */
  ClusterArn?: string;
}

export namespace RunJobFlowOutput {
  export const filterSensitiveLog = (obj: RunJobFlowOutput): any => ({
    ...obj,
  });
}

/**
 * <p> The input argument to the <a>TerminationProtection</a> operation. </p>
 */
export interface SetTerminationProtectionInput {
  /**
   * <p> A list of strings that uniquely identify the clusters to protect. This identifier is
   *          returned by <a>RunJobFlow</a> and can also be obtained from <a>DescribeJobFlows</a> . </p>
   */
  JobFlowIds: string[] | undefined;

  /**
   * <p>A Boolean that indicates whether to protect the cluster and prevent the Amazon EC2
   *          instances in the cluster from shutting down due to API calls, user intervention, or
   *          job-flow error.</p>
   */
  TerminationProtected: boolean | undefined;
}

export namespace SetTerminationProtectionInput {
  export const filterSensitiveLog = (obj: SetTerminationProtectionInput): any => ({
    ...obj,
  });
}

/**
 * <p>The input to the SetVisibleToAllUsers action.</p>
 */
export interface SetVisibleToAllUsersInput {
  /**
   * <p>The unique identifier of the job flow (cluster).</p>
   */
  JobFlowIds: string[] | undefined;

  /**
   * <p>A value of <code>true</code> indicates that all IAM users in the AWS account can perform
   *          cluster actions if they have the proper IAM policy permissions. This is the default. A
   *          value of <code>false</code> indicates that only the IAM user who created the cluster can
   *          perform actions.</p>
   */
  VisibleToAllUsers: boolean | undefined;
}

export namespace SetVisibleToAllUsersInput {
  export const filterSensitiveLog = (obj: SetVisibleToAllUsersInput): any => ({
    ...obj,
  });
}

export interface StartNotebookExecutionInput {
  /**
   * <p>The unique identifier of the EMR Notebook to use for notebook execution.</p>
   */
  EditorId: string | undefined;

  /**
   * <p>The path and file name of the notebook file for this execution, relative to the path
   *          specified for the EMR Notebook. For example, if you specify a path of
   *             <code>s3://MyBucket/MyNotebooks</code> when you create an EMR Notebook for a notebook
   *          with an ID of <code>e-ABCDEFGHIJK1234567890ABCD</code> (the <code>EditorID</code> of this
   *          request), and you specify a <code>RelativePath</code> of
   *             <code>my_notebook_executions/notebook_execution.ipynb</code>, the location of the file
   *          for the notebook execution is
   *             <code>s3://MyBucket/MyNotebooks/e-ABCDEFGHIJK1234567890ABCD/my_notebook_executions/notebook_execution.ipynb</code>.</p>
   */
  RelativePath: string | undefined;

  /**
   * <p>An optional name for the notebook execution.</p>
   */
  NotebookExecutionName?: string;

  /**
   * <p>Input parameters in JSON format passed to the EMR Notebook at runtime for
   *          execution.</p>
   */
  NotebookParams?: string;

  /**
   * <p>Specifies the execution engine (cluster) that runs the notebook execution.</p>
   */
  ExecutionEngine: ExecutionEngineConfig | undefined;

  /**
   * <p>The name or ARN of the IAM role that is used as the service role for Amazon EMR (the EMR
   *          role) for the notebook execution.</p>
   */
  ServiceRole: string | undefined;

  /**
   * <p>The unique identifier of the Amazon EC2 security group to associate with the EMR
   *          Notebook for this notebook execution.</p>
   */
  NotebookInstanceSecurityGroupId?: string;

  /**
   * <p>A list of tags associated with a notebook execution. Tags are user-defined key-value
   *          pairs that consist of a required key string with a maximum of 128 characters and an
   *          optional value string with a maximum of 256 characters.</p>
   */
  Tags?: Tag[];
}

export namespace StartNotebookExecutionInput {
  export const filterSensitiveLog = (obj: StartNotebookExecutionInput): any => ({
    ...obj,
  });
}

export interface StartNotebookExecutionOutput {
  /**
   * <p>The unique identifier of the notebook execution.</p>
   */
  NotebookExecutionId?: string;
}

export namespace StartNotebookExecutionOutput {
  export const filterSensitiveLog = (obj: StartNotebookExecutionOutput): any => ({
    ...obj,
  });
}

export interface StopNotebookExecutionInput {
  /**
   * <p>The unique identifier of the notebook execution.</p>
   */
  NotebookExecutionId: string | undefined;
}

export namespace StopNotebookExecutionInput {
  export const filterSensitiveLog = (obj: StopNotebookExecutionInput): any => ({
    ...obj,
  });
}

/**
 * <p> Input to the <a>TerminateJobFlows</a> operation. </p>
 */
export interface TerminateJobFlowsInput {
  /**
   * <p>A list of job flows to be shut down.</p>
   */
  JobFlowIds: string[] | undefined;
}

export namespace TerminateJobFlowsInput {
  export const filterSensitiveLog = (obj: TerminateJobFlowsInput): any => ({
    ...obj,
  });
}

export interface UpdateStudioSessionMappingInput {
  /**
   * <p>The ID of the EMR Studio.</p>
   */
  StudioId: string | undefined;

  /**
   * <p>The globally unique identifier (GUID) of the user or group. For more information, see
   *             <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserId">UserId</a> and <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-GroupId">GroupId</a> in the <i>AWS SSO Identity Store API Reference</i>.
   *          Either <code>IdentityName</code> or <code>IdentityId</code> must be specified.</p>
   */
  IdentityId?: string;

  /**
   * <p>The name of the user or group to update. For more information, see <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_User.html#singlesignon-Type-User-UserId">UserName</a> and <a href="https://docs.aws.amazon.com/singlesignon/latest/IdentityStoreAPIReference/API_Group.html#singlesignon-Type-Group-DisplayName">DisplayName</a> in the <i>AWS SSO Identity Store API Reference</i>.
   *          Either <code>IdentityName</code> or <code>IdentityId</code> must be specified.</p>
   */
  IdentityName?: string;

  /**
   * <p>Specifies whether the identity to update is a user or a group.</p>
   */
  IdentityType: IdentityType | string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the session policy to associate with the specified
   *          user or group.</p>
   */
  SessionPolicyArn: string | undefined;
}

export namespace UpdateStudioSessionMappingInput {
  export const filterSensitiveLog = (obj: UpdateStudioSessionMappingInput): any => ({
    ...obj,
  });
}

/**
 * <note>
 *             <p>Amazon EMR releases 4.x or later.</p>
 *          </note>
 *          <p>An optional configuration specification to be used when provisioning cluster instances,
 *          which can include configurations for applications and software bundled with Amazon EMR. A
 *          configuration consists of a classification, properties, and optional nested configurations.
 *          A classification refers to an application-specific configuration file. Properties are the
 *          settings you want to change in that file. For more information, see <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/emr-configure-apps.html">Configuring
 *             Applications</a>.</p>
 */
export interface Configuration {
  /**
   * <p>The classification within a configuration.</p>
   */
  Classification?: string;

  /**
   * <p>A list of additional configurations to apply within a configuration object.</p>
   */
  Configurations?: Configuration[];

  /**
   * <p>A set of properties specified within a configuration classification.</p>
   */
  Properties?: { [key: string]: string };
}

export namespace Configuration {
  export const filterSensitiveLog = (obj: Configuration): any => ({
    ...obj,
  });
}

/**
 * <p>A configuration for Amazon EMR block public access. When
 *             <code>BlockPublicSecurityGroupRules</code> is set to <code>true</code>, Amazon EMR
 *          prevents cluster creation if one of the cluster's security groups has a rule that allows
 *          inbound traffic from 0.0.0.0/0 or ::/0 on a port, unless the port is specified as an
 *          exception using <code>PermittedPublicSecurityGroupRuleRanges</code>.</p>
 */
export interface BlockPublicAccessConfiguration {
  /**
   * <p>Indicates whether Amazon EMR block public access is enabled (<code>true</code>) or
   *          disabled (<code>false</code>). By default, the value is <code>false</code> for accounts
   *          that have created EMR clusters before July 2019. For accounts created after this, the
   *          default is <code>true</code>.</p>
   */
  BlockPublicSecurityGroupRules: boolean | undefined;

  /**
   * <p>Specifies ports and port ranges that are permitted to have security group rules that
   *          allow inbound traffic from all public sources. For example, if Port 23 (Telnet) is
   *          specified for <code>PermittedPublicSecurityGroupRuleRanges</code>, Amazon EMR allows
   *          cluster creation if a security group associated with the cluster has a rule that allows
   *          inbound traffic on Port 23 from IPv4 0.0.0.0/0 or IPv6 port ::/0 as the source.</p>
   *          <p>By default, Port 22, which is used for SSH access to the cluster EC2 instances, is in
   *          the list of <code>PermittedPublicSecurityGroupRuleRanges</code>.</p>
   */
  PermittedPublicSecurityGroupRuleRanges?: PortRange[];

  /**
   * <p>The classification within a configuration.</p>
   */
  Classification?: string;

  /**
   * <p>A list of additional configurations to apply within a configuration object.</p>
   */
  Configurations?: Configuration[];

  /**
   * <p>A set of properties specified within a configuration classification.</p>
   */
  Properties?: { [key: string]: string };
}

export namespace BlockPublicAccessConfiguration {
  export const filterSensitiveLog = (obj: BlockPublicAccessConfiguration): any => ({
    ...obj,
  });
}

/**
 * <p>The detailed description of the cluster.</p>
 */
export interface Cluster {
  /**
   * <p>The unique identifier for the cluster.</p>
   */
  Id?: string;

  /**
   * <p>The name of the cluster.</p>
   */
  Name?: string;

  /**
   * <p>The current status details about the cluster.</p>
   */
  Status?: ClusterStatus;

  /**
   * <p>Provides information about the EC2 instances in a cluster grouped by category. For
   *          example, key name, subnet ID, IAM instance profile, and so on.</p>
   */
  Ec2InstanceAttributes?: Ec2InstanceAttributes;

  /**
   * <note>
   *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and
   *             later, excluding 5.0.x versions.</p>
   *          </note>
   *          <p>The instance group configuration of the cluster. A value of <code>INSTANCE_GROUP</code>
   *          indicates a uniform instance group configuration. A value of <code>INSTANCE_FLEET</code>
   *          indicates an instance fleets configuration.</p>
   */
  InstanceCollectionType?: InstanceCollectionType | string;

  /**
   * <p>The path to the Amazon S3 location where logs for this cluster are stored.</p>
   */
  LogUri?: string;

  /**
   * <p> The AWS KMS customer master key (CMK) used for encrypting log files. This attribute is
   *          only available with EMR version 5.30.0 and later, excluding EMR 6.0.0. </p>
   */
  LogEncryptionKmsKeyId?: string;

  /**
   * <p>The AMI version requested for this cluster.</p>
   */
  RequestedAmiVersion?: string;

  /**
   * <p>The AMI version running on this cluster.</p>
   */
  RunningAmiVersion?: string;

  /**
   * <p>The Amazon EMR release label, which determines the version of open-source application
   *          packages installed on the cluster. Release labels are in the form <code>emr-x.x.x</code>,
   *          where x.x.x is an Amazon EMR release version such as <code>emr-5.14.0</code>. For more
   *          information about Amazon EMR release versions and included application versions and
   *          features, see <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/">https://docs.aws.amazon.com/emr/latest/ReleaseGuide/</a>. The release
   *          label applies only to Amazon EMR releases version 4.0 and later. Earlier versions use
   *             <code>AmiVersion</code>.</p>
   */
  ReleaseLabel?: string;

  /**
   * <p>Specifies whether the cluster should terminate after completing all steps.</p>
   */
  AutoTerminate?: boolean;

  /**
   * <p>Indicates whether Amazon EMR will lock the cluster to prevent the EC2 instances from
   *          being terminated by an API call or user intervention, or in the event of a cluster
   *          error.</p>
   */
  TerminationProtected?: boolean;

  /**
   * <p>Indicates whether the cluster is visible to all IAM users of the AWS account associated
   *          with the cluster. The default value, <code>true</code>, indicates that all IAM users in the
   *          AWS account can perform cluster actions if they have the proper IAM policy permissions. If
   *          this value is <code>false</code>, only the IAM user that created the cluster can perform
   *          actions. This value can be changed on a running cluster by using the <a>SetVisibleToAllUsers</a> action. You can override the default value of
   *             <code>true</code> when you create a cluster by using the <code>VisibleToAllUsers</code>
   *          parameter of the <code>RunJobFlow</code> action.</p>
   */
  VisibleToAllUsers?: boolean;

  /**
   * <p>The applications installed on this cluster.</p>
   */
  Applications?: Application[];

  /**
   * <p>A list of tags associated with a cluster.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The IAM role that will be assumed by the Amazon EMR service to access AWS resources on
   *          your behalf.</p>
   */
  ServiceRole?: string;

  /**
   * <p>An approximation of the cost of the cluster, represented in m1.small/hours. This value
   *          is incremented one time for every hour an m1.small instance runs. Larger instances are
   *          weighted more, so an EC2 instance that is roughly four times more expensive would result in
   *          the normalized instance hours being incremented by four. This result is only an
   *          approximation and does not reflect the actual billing rate.</p>
   */
  NormalizedInstanceHours?: number;

  /**
   * <p>The DNS name of the master node. If the cluster is on a private subnet, this is the
   *          private DNS name. On a public subnet, this is the public DNS name.</p>
   */
  MasterPublicDnsName?: string;

  /**
   * <p>Applies only to Amazon EMR releases 4.x and later. The list of Configurations supplied
   *          to the EMR cluster.</p>
   */
  Configurations?: Configuration[];

  /**
   * <p>The name of the security configuration applied to the cluster.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>An IAM role for automatic scaling policies. The default role is
   *             <code>EMR_AutoScaling_DefaultRole</code>. The IAM role provides permissions that the
   *          automatic scaling feature requires to launch and terminate EC2 instances in an instance
   *          group.</p>
   */
  AutoScalingRole?: string;

  /**
   * <p>The way that individual Amazon EC2 instances terminate when an automatic scale-in
   *          activity occurs or an instance group is resized. <code>TERMINATE_AT_INSTANCE_HOUR</code>
   *          indicates that Amazon EMR terminates nodes at the instance-hour boundary, regardless of
   *          when the request to terminate the instance was submitted. This option is only available
   *          with Amazon EMR 5.1.0 and later and is the default for clusters created using that version.
   *             <code>TERMINATE_AT_TASK_COMPLETION</code> indicates that Amazon EMR adds nodes to a deny
   *          list and drains tasks from nodes before terminating the Amazon EC2 instances, regardless of
   *          the instance-hour boundary. With either behavior, Amazon EMR removes the least active nodes
   *          first and blocks instance termination if it could lead to HDFS corruption.
   *             <code>TERMINATE_AT_TASK_COMPLETION</code> is available only in Amazon EMR version 4.1.0
   *          and later, and is the default for versions of Amazon EMR earlier than 5.1.0.</p>
   */
  ScaleDownBehavior?: ScaleDownBehavior | string;

  /**
   * <p>Available only in Amazon EMR version 5.7.0 and later. The ID of a custom Amazon
   *          EBS-backed Linux AMI if the cluster uses a custom AMI.</p>
   */
  CustomAmiId?: string;

  /**
   * <p>The size, in GiB, of the Amazon EBS root device volume of the Linux AMI that is used for
   *          each EC2 instance. Available in Amazon EMR version 4.x and later.</p>
   */
  EbsRootVolumeSize?: number;

  /**
   * <p>Applies only when <code>CustomAmiID</code> is used. Specifies the type of updates that
   *          are applied from the Amazon Linux AMI package repositories when an instance boots using the
   *          AMI.</p>
   */
  RepoUpgradeOnBoot?: RepoUpgradeOnBoot | string;

  /**
   * <p>Attributes for Kerberos configuration when Kerberos authentication is enabled using a
   *          security configuration. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html">Use Kerberos Authentication</a>
   *          in the <i>Amazon EMR Management Guide</i>.</p>
   */
  KerberosAttributes?: KerberosAttributes;

  /**
   * <p>The Amazon Resource Name of the cluster.</p>
   */
  ClusterArn?: string;

  /**
   * <p> The Amazon Resource Name (ARN) of the Outpost where the cluster is launched. </p>
   */
  OutpostArn?: string;

  /**
   * <p>Specifies the number of steps that can be executed concurrently.</p>
   */
  StepConcurrencyLevel?: number;

  /**
   * <p>Placement group configured for an Amazon EMR cluster.</p>
   */
  PlacementGroups?: PlacementGroupConfig[];
}

export namespace Cluster {
  export const filterSensitiveLog = (obj: Cluster): any => ({
    ...obj,
  });
}

/**
 * <p>Configuration defining a new instance group.</p>
 */
export interface InstanceGroupConfig {
  /**
   * <p>Friendly name given to the instance group.</p>
   */
  Name?: string;

  /**
   * <p>Market type of the EC2 instances used to create a cluster node.</p>
   */
  Market?: MarketType | string;

  /**
   * <p>The role of the instance group in the cluster.</p>
   */
  InstanceRole: InstanceRoleType | string | undefined;

  /**
   * <p>The bid price for each EC2 Spot Instance type as defined by <code>InstanceType</code>.
   *          Expressed in USD. If neither <code>BidPrice</code> nor
   *             <code>BidPriceAsPercentageOfOnDemandPrice</code> is provided,
   *             <code>BidPriceAsPercentageOfOnDemandPrice</code> defaults to 100%.</p>
   */
  BidPrice?: string;

  /**
   * <p>The EC2 instance type for all instances in the instance group.</p>
   */
  InstanceType: string | undefined;

  /**
   * <p>Target number of instances for the instance group.</p>
   */
  InstanceCount: number | undefined;

  /**
   * <note>
   *             <p>Amazon EMR releases 4.x or later.</p>
   *          </note>
   *          <p>The list of configurations supplied for an EMR cluster instance group. You can specify a
   *          separate configuration for each instance group (master, core, and task).</p>
   */
  Configurations?: Configuration[];

  /**
   * <p>EBS configurations that will be attached to each EC2 instance in the instance
   *          group.</p>
   */
  EbsConfiguration?: EbsConfiguration;

  /**
   * <p>An automatic scaling policy for a core instance group or task instance group in an
   *          Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically
   *          adds and terminates EC2 instances in response to the value of a CloudWatch metric. See
   *             <a>PutAutoScalingPolicy</a>.</p>
   */
  AutoScalingPolicy?: AutoScalingPolicy;
}

export namespace InstanceGroupConfig {
  export const filterSensitiveLog = (obj: InstanceGroupConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Modify the size or configurations of an instance group.</p>
 */
export interface InstanceGroupModifyConfig {
  /**
   * <p>Unique ID of the instance group to modify.</p>
   */
  InstanceGroupId: string | undefined;

  /**
   * <p>Target size for the instance group.</p>
   */
  InstanceCount?: number;

  /**
   * <p>The EC2 InstanceIds to terminate. After you terminate the instances, the instance group
   *          will not return to its original requested size.</p>
   */
  EC2InstanceIdsToTerminate?: string[];

  /**
   * <p>Policy for customizing shrink operations.</p>
   */
  ShrinkPolicy?: ShrinkPolicy;

  /**
   * <p>A list of new or modified configurations to apply for an instance group.</p>
   */
  Configurations?: Configuration[];
}

export namespace InstanceGroupModifyConfig {
  export const filterSensitiveLog = (obj: InstanceGroupModifyConfig): any => ({
    ...obj,
  });
}

/**
 * <p>An instance type configuration for each instance type in an instance fleet, which
 *          determines the EC2 instances Amazon EMR attempts to provision to fulfill On-Demand and Spot
 *          target capacities. There can be a maximum of five instance type configurations in a
 *          fleet.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and
 *             later, excluding 5.0.x versions.</p>
 *          </note>
 */
export interface InstanceTypeConfig {
  /**
   * <p>An EC2 instance type, such as <code>m3.xlarge</code>. </p>
   */
  InstanceType: string | undefined;

  /**
   * <p>The number of units that a provisioned instance of this type provides toward fulfilling
   *          the target capacities defined in <a>InstanceFleetConfig</a>. This value is 1 for
   *          a master instance fleet, and must be 1 or greater for core and task instance fleets.
   *          Defaults to 1 if not specified. </p>
   */
  WeightedCapacity?: number;

  /**
   * <p>The bid price for each EC2 Spot Instance type as defined by <code>InstanceType</code>.
   *          Expressed in USD. If neither <code>BidPrice</code> nor
   *             <code>BidPriceAsPercentageOfOnDemandPrice</code> is provided,
   *             <code>BidPriceAsPercentageOfOnDemandPrice</code> defaults to 100%. </p>
   */
  BidPrice?: string;

  /**
   * <p>The bid price, as a percentage of On-Demand price, for each EC2 Spot Instance as defined
   *          by <code>InstanceType</code>. Expressed as a number (for example, 20 specifies 20%). If
   *          neither <code>BidPrice</code> nor <code>BidPriceAsPercentageOfOnDemandPrice</code> is
   *          provided, <code>BidPriceAsPercentageOfOnDemandPrice</code> defaults to 100%.</p>
   */
  BidPriceAsPercentageOfOnDemandPrice?: number;

  /**
   * <p>The configuration of Amazon Elastic Block Storage (Amazon EBS) attached to each instance
   *          as defined by <code>InstanceType</code>. </p>
   */
  EbsConfiguration?: EbsConfiguration;

  /**
   * <p>A configuration classification that applies when provisioning cluster instances, which
   *          can include configurations for applications and software that run on the cluster.</p>
   */
  Configurations?: Configuration[];
}

export namespace InstanceTypeConfig {
  export const filterSensitiveLog = (obj: InstanceTypeConfig): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration specification for each instance type in an instance fleet.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and
 *             later, excluding 5.0.x versions.</p>
 *          </note>
 */
export interface InstanceTypeSpecification {
  /**
   * <p>The EC2 instance type, for example <code>m3.xlarge</code>.</p>
   */
  InstanceType?: string;

  /**
   * <p>The number of units that a provisioned instance of this type provides toward fulfilling
   *          the target capacities defined in <a>InstanceFleetConfig</a>. Capacity values
   *          represent performance characteristics such as vCPUs, memory, or I/O. If not specified, the
   *          default value is 1.</p>
   */
  WeightedCapacity?: number;

  /**
   * <p>The bid price for each EC2 Spot Instance type as defined by <code>InstanceType</code>.
   *          Expressed in USD.</p>
   */
  BidPrice?: string;

  /**
   * <p>The bid price, as a percentage of On-Demand price, for each EC2 Spot Instance as defined
   *          by <code>InstanceType</code>. Expressed as a number (for example, 20 specifies 20%).</p>
   */
  BidPriceAsPercentageOfOnDemandPrice?: number;

  /**
   * <p>A configuration classification that applies when provisioning cluster instances, which
   *          can include configurations for applications and software bundled with Amazon EMR.</p>
   */
  Configurations?: Configuration[];

  /**
   * <p>The configuration of Amazon Elastic Block Storage (Amazon EBS) attached to each instance
   *          as defined by <code>InstanceType</code>.</p>
   */
  EbsBlockDevices?: EbsBlockDevice[];

  /**
   * <p>Evaluates to <code>TRUE</code> when the specified <code>InstanceType</code> is
   *          EBS-optimized.</p>
   */
  EbsOptimized?: boolean;
}

export namespace InstanceTypeSpecification {
  export const filterSensitiveLog = (obj: InstanceTypeSpecification): any => ({
    ...obj,
  });
}

/**
 * <p>This output contains the description of the cluster.</p>
 */
export interface DescribeClusterOutput {
  /**
   * <p>This output contains the details for the requested cluster.</p>
   */
  Cluster?: Cluster;
}

export namespace DescribeClusterOutput {
  export const filterSensitiveLog = (obj: DescribeClusterOutput): any => ({
    ...obj,
  });
}

export interface GetBlockPublicAccessConfigurationOutput {
  /**
   * <p>A configuration for Amazon EMR block public access. The configuration applies to all
   *          clusters created in your account for the current Region. The configuration specifies
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
   *             enable and configure it. For accounts that did not create an EMR cluster in a Region
   *             before this date, block public access is enabled by default in that Region.</p>
   *          </note>
   */
  BlockPublicAccessConfiguration: BlockPublicAccessConfiguration | undefined;

  /**
   * <p>Properties that describe the AWS principal that created the
   *             <code>BlockPublicAccessConfiguration</code> using the
   *             <code>PutBlockPublicAccessConfiguration</code> action as well as the date and time that
   *          the configuration was created. Each time a configuration for block public access is
   *          updated, Amazon EMR updates this metadata.</p>
   */
  BlockPublicAccessConfigurationMetadata: BlockPublicAccessConfigurationMetadata | undefined;
}

export namespace GetBlockPublicAccessConfigurationOutput {
  export const filterSensitiveLog = (obj: GetBlockPublicAccessConfigurationOutput): any => ({
    ...obj,
  });
}

export interface PutBlockPublicAccessConfigurationInput {
  /**
   * <p>A configuration for Amazon EMR block public access. The configuration applies to all
   *          clusters created in your account for the current Region. The configuration specifies
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
   *             enable and configure it. For accounts that did not create an EMR cluster in a Region
   *             before this date, block public access is enabled by default in that Region.</p>
   *          </note>
   */
  BlockPublicAccessConfiguration: BlockPublicAccessConfiguration | undefined;
}

export namespace PutBlockPublicAccessConfigurationInput {
  export const filterSensitiveLog = (obj: PutBlockPublicAccessConfigurationInput): any => ({
    ...obj,
  });
}

/**
 * <p>Input to an AddInstanceGroups call.</p>
 */
export interface AddInstanceGroupsInput {
  /**
   * <p>Instance groups to add.</p>
   */
  InstanceGroups: InstanceGroupConfig[] | undefined;

  /**
   * <p>Job flow in which to add the instance groups.</p>
   */
  JobFlowId: string | undefined;
}

export namespace AddInstanceGroupsInput {
  export const filterSensitiveLog = (obj: AddInstanceGroupsInput): any => ({
    ...obj,
  });
}

/**
 * <p>Describes an instance fleet, which is a group of EC2 instances that host a particular
 *          node type (master, core, or task) in an Amazon EMR cluster. Instance fleets can consist of
 *          a mix of instance types and On-Demand and Spot Instances, which are provisioned to meet a
 *          defined target capacity. </p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and
 *             later, excluding 5.0.x versions.</p>
 *          </note>
 */
export interface InstanceFleet {
  /**
   * <p>The unique identifier of the instance fleet.</p>
   */
  Id?: string;

  /**
   * <p>A friendly name for the instance fleet.</p>
   */
  Name?: string;

  /**
   * <p>The current status of the instance fleet. </p>
   */
  Status?: InstanceFleetStatus;

  /**
   * <p>The node type that the instance fleet hosts. Valid values are MASTER, CORE, or TASK.
   *       </p>
   */
  InstanceFleetType?: InstanceFleetType | string;

  /**
   * <p>The target capacity of On-Demand units for the instance fleet, which determines how many
   *          On-Demand Instances to provision. When the instance fleet launches, Amazon EMR tries to
   *          provision On-Demand Instances as specified by <a>InstanceTypeConfig</a>. Each
   *          instance configuration has a specified <code>WeightedCapacity</code>. When an On-Demand
   *          Instance is provisioned, the <code>WeightedCapacity</code> units count toward the target
   *          capacity. Amazon EMR provisions instances until the target capacity is totally fulfilled,
   *          even if this results in an overage. For example, if there are 2 units remaining to fulfill
   *          capacity, and Amazon EMR can only provision an instance with a
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
   * <p>The target capacity of Spot units for the instance fleet, which determines how many Spot
   *          instances to provision. When the instance fleet launches, Amazon EMR tries to provision
   *          Spot instances as specified by <a>InstanceTypeConfig</a>. Each instance
   *          configuration has a specified <code>WeightedCapacity</code>. When a Spot instance is
   *          provisioned, the <code>WeightedCapacity</code> units count toward the target capacity.
   *          Amazon EMR provisions instances until the target capacity is totally fulfilled, even if
   *          this results in an overage. For example, if there are 2 units remaining to fulfill
   *          capacity, and Amazon EMR can only provision an instance with a
   *             <code>WeightedCapacity</code> of 5 units, the instance is provisioned, and the target
   *          capacity is exceeded by 3 units. You can use <a>InstanceFleet$ProvisionedSpotCapacity</a> to determine the Spot capacity units
   *          that have been provisioned for the instance fleet.</p>
   *          <note>
   *             <p>If not specified or set to 0, only On-Demand instances are provisioned for the
   *             instance fleet. At least one of <code>TargetSpotCapacity</code> and
   *                <code>TargetOnDemandCapacity</code> should be greater than 0. For a master instance
   *             fleet, only one of <code>TargetSpotCapacity</code> and
   *                <code>TargetOnDemandCapacity</code> can be specified, and its value must be 1.</p>
   *          </note>
   */
  TargetSpotCapacity?: number;

  /**
   * <p>The number of On-Demand units that have been provisioned for the instance fleet to
   *          fulfill <code>TargetOnDemandCapacity</code>. This provisioned capacity might be less than
   *          or greater than <code>TargetOnDemandCapacity</code>.</p>
   */
  ProvisionedOnDemandCapacity?: number;

  /**
   * <p>The number of Spot units that have been provisioned for this instance fleet to fulfill
   *             <code>TargetSpotCapacity</code>. This provisioned capacity might be less than or greater
   *          than <code>TargetSpotCapacity</code>.</p>
   */
  ProvisionedSpotCapacity?: number;

  /**
   * <p>The specification for the instance types that comprise an instance fleet. Up to five
   *          unique instance specifications may be defined for each instance fleet. </p>
   */
  InstanceTypeSpecifications?: InstanceTypeSpecification[];

  /**
   * <p>Describes the launch specification for an instance fleet. </p>
   */
  LaunchSpecifications?: InstanceFleetProvisioningSpecifications;
}

export namespace InstanceFleet {
  export const filterSensitiveLog = (obj: InstanceFleet): any => ({
    ...obj,
  });
}

/**
 * <p>The configuration that defines an instance fleet.</p>
 *          <note>
 *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and
 *             later, excluding 5.0.x versions.</p>
 *          </note>
 */
export interface InstanceFleetConfig {
  /**
   * <p>The friendly name of the instance fleet.</p>
   */
  Name?: string;

  /**
   * <p>The node type that the instance fleet hosts. Valid values are MASTER,CORE,and
   *          TASK.</p>
   */
  InstanceFleetType: InstanceFleetType | string | undefined;

  /**
   * <p>The target capacity of On-Demand units for the instance fleet, which determines how many
   *          On-Demand Instances to provision. When the instance fleet launches, Amazon EMR tries to
   *          provision On-Demand Instances as specified by <a>InstanceTypeConfig</a>. Each
   *          instance configuration has a specified <code>WeightedCapacity</code>. When an On-Demand
   *          Instance is provisioned, the <code>WeightedCapacity</code> units count toward the target
   *          capacity. Amazon EMR provisions instances until the target capacity is totally fulfilled,
   *          even if this results in an overage. For example, if there are 2 units remaining to fulfill
   *          capacity, and Amazon EMR can only provision an instance with a
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
   * <p>The target capacity of Spot units for the instance fleet, which determines how many Spot
   *          Instances to provision. When the instance fleet launches, Amazon EMR tries to provision
   *          Spot Instances as specified by <a>InstanceTypeConfig</a>. Each instance
   *          configuration has a specified <code>WeightedCapacity</code>. When a Spot Instance is
   *          provisioned, the <code>WeightedCapacity</code> units count toward the target capacity.
   *          Amazon EMR provisions instances until the target capacity is totally fulfilled, even if
   *          this results in an overage. For example, if there are 2 units remaining to fulfill
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
   * <p>The instance type configurations that define the EC2 instances in the instance
   *          fleet.</p>
   */
  InstanceTypeConfigs?: InstanceTypeConfig[];

  /**
   * <p>The launch specification for the instance fleet.</p>
   */
  LaunchSpecifications?: InstanceFleetProvisioningSpecifications;
}

export namespace InstanceFleetConfig {
  export const filterSensitiveLog = (obj: InstanceFleetConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Change the size of some instance groups.</p>
 */
export interface ModifyInstanceGroupsInput {
  /**
   * <p>The ID of the cluster to which the instance group belongs.</p>
   */
  ClusterId?: string;

  /**
   * <p>Instance groups to change.</p>
   */
  InstanceGroups?: InstanceGroupModifyConfig[];
}

export namespace ModifyInstanceGroupsInput {
  export const filterSensitiveLog = (obj: ModifyInstanceGroupsInput): any => ({
    ...obj,
  });
}

export interface AddInstanceFleetInput {
  /**
   * <p>The unique identifier of the cluster.</p>
   */
  ClusterId: string | undefined;

  /**
   * <p>Specifies the configuration of the instance fleet.</p>
   */
  InstanceFleet: InstanceFleetConfig | undefined;
}

export namespace AddInstanceFleetInput {
  export const filterSensitiveLog = (obj: AddInstanceFleetInput): any => ({
    ...obj,
  });
}

/**
 * <p>This entity represents an instance group, which is a group of instances that have common
 *          purpose. For example, CORE instance group is used for HDFS.</p>
 */
export interface InstanceGroup {
  /**
   * <p>The identifier of the instance group.</p>
   */
  Id?: string;

  /**
   * <p>The name of the instance group.</p>
   */
  Name?: string;

  /**
   * <p>The marketplace to provision instances for this group. Valid values are ON_DEMAND or
   *          SPOT.</p>
   */
  Market?: MarketType | string;

  /**
   * <p>The type of the instance group. Valid values are MASTER, CORE or TASK.</p>
   */
  InstanceGroupType?: InstanceGroupType | string;

  /**
   * <p>The bid price for each EC2 Spot Instance type as defined by <code>InstanceType</code>.
   *          Expressed in USD. If neither <code>BidPrice</code> nor
   *             <code>BidPriceAsPercentageOfOnDemandPrice</code> is provided,
   *             <code>BidPriceAsPercentageOfOnDemandPrice</code> defaults to 100%.</p>
   */
  BidPrice?: string;

  /**
   * <p>The EC2 instance type for all instances in the instance group.</p>
   */
  InstanceType?: string;

  /**
   * <p>The target number of instances for the instance group.</p>
   */
  RequestedInstanceCount?: number;

  /**
   * <p>The number of instances currently running in this instance group.</p>
   */
  RunningInstanceCount?: number;

  /**
   * <p>The current status of the instance group.</p>
   */
  Status?: InstanceGroupStatus;

  /**
   * <note>
   *             <p>Amazon EMR releases 4.x or later.</p>
   *          </note>
   *          <p>The list of configurations supplied for an EMR cluster instance group. You can specify a
   *          separate configuration for each instance group (master, core, and task).</p>
   */
  Configurations?: Configuration[];

  /**
   * <p>The version number of the requested configuration specification for this instance
   *          group.</p>
   */
  ConfigurationsVersion?: number;

  /**
   * <p>A list of configurations that were successfully applied for an instance group last
   *          time.</p>
   */
  LastSuccessfullyAppliedConfigurations?: Configuration[];

  /**
   * <p>The version number of a configuration specification that was successfully applied for an
   *          instance group last time. </p>
   */
  LastSuccessfullyAppliedConfigurationsVersion?: number;

  /**
   * <p>The EBS block devices that are mapped to this instance group.</p>
   */
  EbsBlockDevices?: EbsBlockDevice[];

  /**
   * <p>If the instance group is EBS-optimized. An Amazon EBS-optimized instance uses an
   *          optimized configuration stack and provides additional, dedicated capacity for Amazon EBS
   *          I/O.</p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>Policy for customizing shrink operations.</p>
   */
  ShrinkPolicy?: ShrinkPolicy;

  /**
   * <p>An automatic scaling policy for a core instance group or task instance group in an
   *          Amazon EMR cluster. The automatic scaling policy defines how an instance group dynamically
   *          adds and terminates EC2 instances in response to the value of a CloudWatch metric. See
   *          PutAutoScalingPolicy.</p>
   */
  AutoScalingPolicy?: AutoScalingPolicyDescription;
}

export namespace InstanceGroup {
  export const filterSensitiveLog = (obj: InstanceGroup): any => ({
    ...obj,
  });
}

export interface ListInstanceFleetsOutput {
  /**
   * <p>The list of instance fleets for the cluster and given filters.</p>
   */
  InstanceFleets?: InstanceFleet[];

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

export namespace ListInstanceFleetsOutput {
  export const filterSensitiveLog = (obj: ListInstanceFleetsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>This input determines which instance groups to retrieve.</p>
 */
export interface ListInstanceGroupsOutput {
  /**
   * <p>The list of instance groups for the cluster and given filters.</p>
   */
  InstanceGroups?: InstanceGroup[];

  /**
   * <p>The pagination token that indicates the next set of results to retrieve.</p>
   */
  Marker?: string;
}

export namespace ListInstanceGroupsOutput {
  export const filterSensitiveLog = (obj: ListInstanceGroupsOutput): any => ({
    ...obj,
  });
}

/**
 * <p>A description of the Amazon EC2 instance on which the cluster (job flow) runs. A valid
 *          JobFlowInstancesConfig must contain either InstanceGroups or InstanceFleets. They cannot be
 *          used together. You may also have MasterInstanceType, SlaveInstanceType, and InstanceCount
 *          (all three must be present), but we don't recommend this configuration.</p>
 */
export interface JobFlowInstancesConfig {
  /**
   * <p>The EC2 instance type of the master node.</p>
   */
  MasterInstanceType?: string;

  /**
   * <p>The EC2 instance type of the core and task nodes.</p>
   */
  SlaveInstanceType?: string;

  /**
   * <p>The number of EC2 instances in the cluster.</p>
   */
  InstanceCount?: number;

  /**
   * <p>Configuration for the instance groups in a cluster.</p>
   */
  InstanceGroups?: InstanceGroupConfig[];

  /**
   * <note>
   *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and
   *             later, excluding 5.0.x versions.</p>
   *          </note>
   *          <p>Describes the EC2 instances and instance configurations for clusters that use the
   *          instance fleet configuration.</p>
   */
  InstanceFleets?: InstanceFleetConfig[];

  /**
   * <p>The name of the EC2 key pair that can be used to connect to the master node using SSH as
   *          the user called "hadoop."</p>
   */
  Ec2KeyName?: string;

  /**
   * <p>The Availability Zone in which the cluster runs.</p>
   */
  Placement?: PlacementType;

  /**
   * <p>Specifies whether the cluster should remain available after completing all steps.</p>
   */
  KeepJobFlowAliveWhenNoSteps?: boolean;

  /**
   * <p>Specifies whether to lock the cluster to prevent the Amazon EC2 instances from being
   *          terminated by API call, user intervention, or in the event of a job-flow error.</p>
   */
  TerminationProtected?: boolean;

  /**
   * <p>Applies only to Amazon EMR release versions earlier than 4.0. The Hadoop version for the
   *          cluster. Valid inputs are "0.18" (no longer maintained), "0.20" (no longer maintained),
   *          "0.20.205" (no longer maintained), "1.0.3", "2.2.0", or "2.4.0". If you do not set this
   *          value, the default of 0.18 is used, unless the <code>AmiVersion</code> parameter is set in
   *          the RunJobFlow call, in which case the default version of Hadoop for that AMI version is
   *          used.</p>
   */
  HadoopVersion?: string;

  /**
   * <p>Applies to clusters that use the uniform instance group configuration. To launch the
   *          cluster in Amazon Virtual Private Cloud (Amazon VPC), set this parameter to the identifier
   *          of the Amazon VPC subnet where you want the cluster to launch. If you do not specify this
   *          value and your account supports EC2-Classic, the cluster launches in EC2-Classic.</p>
   */
  Ec2SubnetId?: string;

  /**
   * <p>Applies to clusters that use the instance fleet configuration. When multiple EC2 subnet
   *          IDs are specified, Amazon EMR evaluates them and launches instances in the optimal
   *          subnet.</p>
   *          <note>
   *             <p>The instance fleet configuration is available only in Amazon EMR versions 4.8.0 and
   *             later, excluding 5.0.x versions.</p>
   *          </note>
   */
  Ec2SubnetIds?: string[];

  /**
   * <p>The identifier of the Amazon EC2 security group for the master node.</p>
   */
  EmrManagedMasterSecurityGroup?: string;

  /**
   * <p>The identifier of the Amazon EC2 security group for the core and task nodes.</p>
   */
  EmrManagedSlaveSecurityGroup?: string;

  /**
   * <p>The identifier of the Amazon EC2 security group for the Amazon EMR service to access
   *          clusters in VPC private subnets.</p>
   */
  ServiceAccessSecurityGroup?: string;

  /**
   * <p>A list of additional Amazon EC2 security group IDs for the master node.</p>
   */
  AdditionalMasterSecurityGroups?: string[];

  /**
   * <p>A list of additional Amazon EC2 security group IDs for the core and task nodes.</p>
   */
  AdditionalSlaveSecurityGroups?: string[];
}

export namespace JobFlowInstancesConfig {
  export const filterSensitiveLog = (obj: JobFlowInstancesConfig): any => ({
    ...obj,
  });
}

/**
 * <p> Input to the <a>RunJobFlow</a> operation. </p>
 */
export interface RunJobFlowInput {
  /**
   * <p>The name of the job flow.</p>
   */
  Name: string | undefined;

  /**
   * <p>The location in Amazon S3 to write the log files of the job flow. If a value is not
   *          provided, logs are not created.</p>
   */
  LogUri?: string;

  /**
   * <p>The AWS KMS customer master key (CMK) used for encrypting log files. If a value is not
   *          provided, the logs remain encrypted by AES-256. This attribute is only available with
   *          Amazon EMR version 5.30.0 and later, excluding Amazon EMR 6.0.0.</p>
   */
  LogEncryptionKmsKeyId?: string;

  /**
   * <p>A JSON string for selecting additional features.</p>
   */
  AdditionalInfo?: string;

  /**
   * <p>Applies only to Amazon EMR AMI versions 3.x and 2.x. For Amazon EMR releases 4.0 and
   *          later, <code>ReleaseLabel</code> is used. To specify a custom AMI, use
   *             <code>CustomAmiID</code>.</p>
   */
  AmiVersion?: string;

  /**
   * <p>The Amazon EMR release label, which determines the version of open-source application
   *          packages installed on the cluster. Release labels are in the form <code>emr-x.x.x</code>,
   *          where x.x.x is an Amazon EMR release version such as <code>emr-5.14.0</code>. For more
   *          information about Amazon EMR release versions and included application versions and
   *          features, see <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/">https://docs.aws.amazon.com/emr/latest/ReleaseGuide/</a>. The release
   *          label applies only to Amazon EMR releases version 4.0 and later. Earlier versions use
   *             <code>AmiVersion</code>.</p>
   */
  ReleaseLabel?: string;

  /**
   * <p>A specification of the number and type of Amazon EC2 instances.</p>
   */
  Instances: JobFlowInstancesConfig | undefined;

  /**
   * <p>A list of steps to run.</p>
   */
  Steps?: StepConfig[];

  /**
   * <p>A list of bootstrap actions to run before Hadoop starts on the cluster nodes.</p>
   */
  BootstrapActions?: BootstrapActionConfig[];

  /**
   * <note>
   *             <p>For Amazon EMR releases 3.x and 2.x. For Amazon EMR releases 4.x and later, use
   *             Applications.</p>
   *          </note>
   *          <p>A list of strings that indicates third-party software to use. For more information, see
   *          the <a href="https://docs.aws.amazon.com/emr/latest/DeveloperGuide/emr-dg.pdf">Amazon EMR
   *             Developer Guide</a>. Currently supported values are:</p>
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
   * <note>
   *             <p>For Amazon EMR releases 3.x and 2.x. For Amazon EMR releases 4.x and later, use
   *             Applications.</p>
   *          </note>
   *          <p>A list of strings that indicates third-party software to use with the job flow that
   *          accepts a user argument list. EMR accepts and forwards the argument list to the
   *          corresponding installation script as bootstrap action arguments. For more information, see
   *          "Launch a Job Flow on the MapR Distribution for Hadoop" in the <a href="https://docs.aws.amazon.com/emr/latest/DeveloperGuide/emr-dg.pdf">Amazon EMR Developer Guide</a>. Supported
   *          values are:</p>
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
   *                <p>"hunk" - launch the cluster with the Hunk Big Data Analtics Platform.</p>
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
   * <p>Applies to Amazon EMR releases 4.0 and later. A case-insensitive list of applications
   *          for Amazon EMR to install and configure when launching the cluster. For a list of
   *          applications available for each Amazon EMR release version, see the <a href="https://docs.aws.amazon.com/emr/latest/ReleaseGuide/">Amazon EMR Release
   *          Guide</a>.</p>
   */
  Applications?: Application[];

  /**
   * <p>For Amazon EMR releases 4.0 and later. The list of configurations supplied for the EMR
   *          cluster you are creating.</p>
   */
  Configurations?: Configuration[];

  /**
   * <p>A value of <code>true</code> indicates that all IAM users in the AWS account can perform
   *          cluster actions if they have the proper IAM policy permissions. This is the default. A
   *          value of <code>false</code> indicates that only the IAM user who created the cluster can
   *          perform actions.</p>
   */
  VisibleToAllUsers?: boolean;

  /**
   * <p>Also called instance profile and EC2 role. An IAM role for an EMR cluster. The EC2
   *          instances of the cluster assume this role. The default role is
   *             <code>EMR_EC2_DefaultRole</code>. In order to use the default role, you must have
   *          already created it using the CLI or console.</p>
   */
  JobFlowRole?: string;

  /**
   * <p>The IAM role that will be assumed by the Amazon EMR service to access AWS resources on
   *          your behalf.</p>
   */
  ServiceRole?: string;

  /**
   * <p>A list of tags to associate with a cluster and propagate to Amazon EC2 instances.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The name of a security configuration to apply to the cluster.</p>
   */
  SecurityConfiguration?: string;

  /**
   * <p>An IAM role for automatic scaling policies. The default role is
   *             <code>EMR_AutoScaling_DefaultRole</code>. The IAM role provides permissions that the
   *          automatic scaling feature requires to launch and terminate EC2 instances in an instance
   *          group.</p>
   */
  AutoScalingRole?: string;

  /**
   * <p>Specifies the way that individual Amazon EC2 instances terminate when an automatic
   *          scale-in activity occurs or an instance group is resized.
   *             <code>TERMINATE_AT_INSTANCE_HOUR</code> indicates that Amazon EMR terminates nodes at
   *          the instance-hour boundary, regardless of when the request to terminate the instance was
   *          submitted. This option is only available with Amazon EMR 5.1.0 and later and is the default
   *          for clusters created using that version. <code>TERMINATE_AT_TASK_COMPLETION</code>
   *          indicates that Amazon EMR adds nodes to a deny list and drains tasks from nodes before
   *          terminating the Amazon EC2 instances, regardless of the instance-hour boundary. With either
   *          behavior, Amazon EMR removes the least active nodes first and blocks instance termination
   *          if it could lead to HDFS corruption. <code>TERMINATE_AT_TASK_COMPLETION</code> available
   *          only in Amazon EMR version 4.1.0 and later, and is the default for versions of Amazon EMR
   *          earlier than 5.1.0.</p>
   */
  ScaleDownBehavior?: ScaleDownBehavior | string;

  /**
   * <p>Available only in Amazon EMR version 5.7.0 and later. The ID of a custom Amazon
   *          EBS-backed Linux AMI. If specified, Amazon EMR uses this AMI when it launches cluster EC2
   *          instances. For more information about custom AMIs in Amazon EMR, see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-custom-ami.html">Using a Custom
   *             AMI</a> in the <i>Amazon EMR Management Guide</i>. If omitted, the
   *          cluster uses the base Linux AMI for the <code>ReleaseLabel</code> specified. For Amazon EMR
   *          versions 2.x and 3.x, use <code>AmiVersion</code> instead.</p>
   *          <p>For information about creating a custom AMI, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/creating-an-ami-ebs.html">Creating an Amazon EBS-Backed
   *             Linux AMI</a> in the <i>Amazon Elastic Compute Cloud User Guide for Linux
   *             Instances</i>. For information about finding an AMI ID, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/finding-an-ami.html">Finding a Linux
   *             AMI</a>. </p>
   */
  CustomAmiId?: string;

  /**
   * <p>The size, in GiB, of the Amazon EBS root device volume of the Linux AMI that is used for
   *          each EC2 instance. Available in Amazon EMR version 4.x and later.</p>
   */
  EbsRootVolumeSize?: number;

  /**
   * <p>Applies only when <code>CustomAmiID</code> is used. Specifies which updates from the
   *          Amazon Linux AMI package repositories to apply automatically when the instance boots using
   *          the AMI. If omitted, the default is <code>SECURITY</code>, which indicates that only
   *          security updates are applied. If <code>NONE</code> is specified, no updates are applied,
   *          and all updates must be applied manually.</p>
   */
  RepoUpgradeOnBoot?: RepoUpgradeOnBoot | string;

  /**
   * <p>Attributes for Kerberos configuration when Kerberos authentication is enabled using a
   *          security configuration. For more information see <a href="https://docs.aws.amazon.com/emr/latest/ManagementGuide/emr-kerberos.html">Use Kerberos Authentication</a>
   *          in the <i>Amazon EMR Management Guide</i>.</p>
   */
  KerberosAttributes?: KerberosAttributes;

  /**
   * <p>Specifies the number of steps that can be executed concurrently. The default value is
   *             <code>1</code>. The maximum value is <code>256</code>.</p>
   */
  StepConcurrencyLevel?: number;

  /**
   * <p> The specified managed scaling policy for an Amazon EMR cluster. </p>
   */
  ManagedScalingPolicy?: ManagedScalingPolicy;

  /**
   * <p>The specified placement group configuration for an Amazon EMR cluster.</p>
   */
  PlacementGroupConfigs?: PlacementGroupConfig[];
}

export namespace RunJobFlowInput {
  export const filterSensitiveLog = (obj: RunJobFlowInput): any => ({
    ...obj,
  });
}
