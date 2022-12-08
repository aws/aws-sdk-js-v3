// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { AutoScalingServiceException as __BaseException } from "./AutoScalingServiceException";

/**
 * <p>Specifies the minimum and maximum for the <code>AcceleratorCount</code> object when
 *             you specify <a>InstanceRequirements</a> for an Auto Scaling group.</p>
 */
export interface AcceleratorCountRequest {
  /**
   * <p>The minimum value.</p>
   */
  Min?: number;

  /**
   * <p>The maximum value.</p>
   */
  Max?: number;
}

export enum AcceleratorManufacturer {
  AMAZON_WEB_SERVICES = "amazon-web-services",
  AMD = "amd",
  NVIDIA = "nvidia",
  XILINX = "xilinx",
}

export enum AcceleratorName {
  A100 = "a100",
  K80 = "k80",
  M60 = "m60",
  RADEON_PRO_V520 = "radeon-pro-v520",
  T4 = "t4",
  V100 = "v100",
  VU9P = "vu9p",
}

/**
 * <p>Specifies the minimum and maximum for the <code>AcceleratorTotalMemoryMiB</code>
 *             object when you specify <a>InstanceRequirements</a> for an Auto Scaling group.</p>
 */
export interface AcceleratorTotalMemoryMiBRequest {
  /**
   * <p>The memory minimum in MiB.</p>
   */
  Min?: number;

  /**
   * <p>The memory maximum in MiB.</p>
   */
  Max?: number;
}

export enum AcceleratorType {
  FPGA = "fpga",
  GPU = "gpu",
  INFERENCE = "inference",
}

/**
 * <p>The request failed because an active instance refresh for the specified Auto Scaling group was
 *             not found. </p>
 */
export class ActiveInstanceRefreshNotFoundFault extends __BaseException {
  readonly name: "ActiveInstanceRefreshNotFoundFault" = "ActiveInstanceRefreshNotFoundFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ActiveInstanceRefreshNotFoundFault, __BaseException>) {
    super({
      name: "ActiveInstanceRefreshNotFoundFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ActiveInstanceRefreshNotFoundFault.prototype);
  }
}

export enum ScalingActivityStatusCode {
  Cancelled = "Cancelled",
  Failed = "Failed",
  InProgress = "InProgress",
  MidLifecycleAction = "MidLifecycleAction",
  PendingSpotBidPlacement = "PendingSpotBidPlacement",
  PreInService = "PreInService",
  Successful = "Successful",
  WaitingForELBConnectionDraining = "WaitingForELBConnectionDraining",
  WaitingForInstanceId = "WaitingForInstanceId",
  WaitingForInstanceWarmup = "WaitingForInstanceWarmup",
  WaitingForSpotInstanceId = "WaitingForSpotInstanceId",
  WaitingForSpotInstanceRequestId = "WaitingForSpotInstanceRequestId",
}

/**
 * <p>Describes scaling activity, which is a long-running process that represents a change
 *             to your Auto Scaling group, such as changing its size or replacing an instance.</p>
 */
export interface Activity {
  /**
   * <p>The ID of the activity.</p>
   */
  ActivityId: string | undefined;

  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>A friendly, more verbose description of the activity.</p>
   */
  Description?: string;

  /**
   * <p>The reason the activity began.</p>
   */
  Cause: string | undefined;

  /**
   * <p>The start time of the activity.</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>The end time of the activity.</p>
   */
  EndTime?: Date;

  /**
   * <p>The current status of the activity.</p>
   */
  StatusCode: ScalingActivityStatusCode | string | undefined;

  /**
   * <p>A friendly, more verbose description of the activity status.</p>
   */
  StatusMessage?: string;

  /**
   * <p>A value between 0 and 100 that indicates the progress of the activity.</p>
   */
  Progress?: number;

  /**
   * <p>The details about the activity.</p>
   */
  Details?: string;

  /**
   * <p>The state of the Auto Scaling group, which is either <code>InService</code> or
   *                 <code>Deleted</code>.</p>
   */
  AutoScalingGroupState?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Auto Scaling group.</p>
   */
  AutoScalingGroupARN?: string;
}

export interface ActivitiesType {
  /**
   * <p>The scaling activities. Activities are sorted by start time. Activities still in
   *             progress are described first.</p>
   */
  Activities: Activity[] | undefined;

  /**
   * <p>A string that indicates that the response contains more items than can be returned in
   *             a single response. To receive additional items, specify this string for the
   *                 <code>NextToken</code> value when requesting the next set of items. This value is
   *             null when there are no more items to return.</p>
   */
  NextToken?: string;
}

export interface ActivityType {
  /**
   * <p>A scaling activity.</p>
   */
  Activity?: Activity;
}

/**
 * <p>Describes a policy adjustment type.</p>
 */
export interface AdjustmentType {
  /**
   * <p>The policy adjustment type. The valid values are <code>ChangeInCapacity</code>,
   *                 <code>ExactCapacity</code>, and <code>PercentChangeInCapacity</code>.</p>
   */
  AdjustmentType?: string;
}

/**
 * <p>Describes an alarm.</p>
 */
export interface Alarm {
  /**
   * <p>The name of the alarm.</p>
   */
  AlarmName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the alarm.</p>
   */
  AlarmARN?: string;
}

/**
 * <p>You already have an Auto Scaling group or launch configuration with this name.</p>
 */
export class AlreadyExistsFault extends __BaseException {
  readonly name: "AlreadyExistsFault" = "AlreadyExistsFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AlreadyExistsFault, __BaseException>) {
    super({
      name: "AlreadyExistsFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AlreadyExistsFault.prototype);
  }
}

export interface AttachInstancesQuery {
  /**
   * <p>The IDs of the instances. You can specify up to 20 instances.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;
}

/**
 * <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 */
export class ResourceContentionFault extends __BaseException {
  readonly name: "ResourceContentionFault" = "ResourceContentionFault";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceContentionFault, __BaseException>) {
    super({
      name: "ResourceContentionFault",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceContentionFault.prototype);
  }
}

/**
 * <p>The service-linked role is not yet ready for use.</p>
 */
export class ServiceLinkedRoleFailure extends __BaseException {
  readonly name: "ServiceLinkedRoleFailure" = "ServiceLinkedRoleFailure";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceLinkedRoleFailure, __BaseException>) {
    super({
      name: "ServiceLinkedRoleFailure",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceLinkedRoleFailure.prototype);
  }
}

export interface AttachLoadBalancersResultType {}

export interface AttachLoadBalancersType {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The names of the load balancers. You can specify up to 10 load balancers.</p>
   */
  LoadBalancerNames: string[] | undefined;
}

export interface AttachLoadBalancerTargetGroupsResultType {}

export interface AttachLoadBalancerTargetGroupsType {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the target groups. You can specify up to 10 target
   *             groups. To get the ARN of a target group, use the Elastic Load Balancing <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html">DescribeTargetGroups</a> API operation.</p>
   */
  TargetGroupARNs: string[] | undefined;
}

export interface AttachTrafficSourcesResultType {}

/**
 * <p>Describes the identifier of a traffic source.</p>
 *          <p>Currently, you must specify an Amazon Resource Name (ARN) for an existing VPC Lattice
 *             target group.</p>
 */
export interface TrafficSourceIdentifier {
  /**
   * <p>The unique identifier of the traffic source.</p>
   */
  Identifier?: string;
}

export interface AttachTrafficSourcesType {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The unique identifiers of one or more traffic sources. You can specify up to 10
   *             traffic sources.</p>
   *          <p>Currently, you must specify an Amazon Resource Name (ARN) for an existing VPC Lattice
   *             target group. Amazon EC2 Auto Scaling registers the running instances with the attached target groups.
   *             The target groups receive incoming traffic and route requests to one or more registered
   *             targets.</p>
   */
  TrafficSources: TrafficSourceIdentifier[] | undefined;
}

/**
 * <p>Describes a scheduled action that could not be created, updated, or deleted.</p>
 */
export interface FailedScheduledUpdateGroupActionRequest {
  /**
   * <p>The name of the scheduled action.</p>
   */
  ScheduledActionName: string | undefined;

  /**
   * <p>The error code.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message accompanying the error code.</p>
   */
  ErrorMessage?: string;
}

export interface BatchDeleteScheduledActionAnswer {
  /**
   * <p>The names of the scheduled actions that could not be deleted, including an error
   *             message.</p>
   */
  FailedScheduledActions?: FailedScheduledUpdateGroupActionRequest[];
}

export interface BatchDeleteScheduledActionType {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The names of the scheduled actions to delete. The maximum number allowed is 50.
   *         </p>
   */
  ScheduledActionNames: string[] | undefined;
}

export interface BatchPutScheduledUpdateGroupActionAnswer {
  /**
   * <p>The names of the scheduled actions that could not be created or updated, including an
   *             error message.</p>
   */
  FailedScheduledUpdateGroupActions?: FailedScheduledUpdateGroupActionRequest[];
}

/**
 * <p>Describes information used for one or more scheduled scaling action updates in a <a>BatchPutScheduledUpdateGroupAction</a> operation.</p>
 */
export interface ScheduledUpdateGroupActionRequest {
  /**
   * <p>The name of the scaling action.</p>
   */
  ScheduledActionName: string | undefined;

  /**
   * <p>The date and time for the action to start, in YYYY-MM-DDThh:mm:ssZ format in UTC/GMT
   *             only and in quotes (for example, <code>"2019-06-01T00:00:00Z"</code>).</p>
   *          <p>If you specify <code>Recurrence</code> and <code>StartTime</code>, Amazon EC2 Auto Scaling performs
   *             the action at this time, and then performs the action based on the specified
   *             recurrence.</p>
   *          <p>If you try to schedule the action in the past, Amazon EC2 Auto Scaling returns an error
   *             message.</p>
   */
  StartTime?: Date;

  /**
   * <p>The date and time for the recurring schedule to end, in UTC.</p>
   */
  EndTime?: Date;

  /**
   * <p>The recurring schedule for the action, in Unix cron syntax format. This format
   *             consists of five fields separated by white spaces: [Minute] [Hour] [Day_of_Month]
   *             [Month_of_Year] [Day_of_Week]. The value must be in quotes (for example, <code>"30 0 1
   *                 1,6,12 *"</code>). For more information about this format, see <a href="http://crontab.org">Crontab</a>.</p>
   *          <p>When <code>StartTime</code> and <code>EndTime</code> are specified with
   *                 <code>Recurrence</code>, they form the boundaries of when the recurring action
   *             starts and stops.</p>
   *          <p>Cron expressions use Universal Coordinated Time (UTC) by default.</p>
   */
  Recurrence?: string;

  /**
   * <p>The minimum size of the Auto Scaling group.</p>
   */
  MinSize?: number;

  /**
   * <p>The maximum size of the Auto Scaling group.</p>
   */
  MaxSize?: number;

  /**
   * <p>The desired capacity is the initial capacity of the Auto Scaling group after the scheduled
   *             action runs and the capacity it attempts to maintain.</p>
   */
  DesiredCapacity?: number;

  /**
   * <p>Specifies the time zone for a cron expression. If a time zone is not provided, UTC is
   *             used by default. </p>
   *          <p>Valid values are the canonical names of the IANA time zones, derived from the IANA
   *             Time Zone Database (such as <code>Etc/GMT+9</code> or <code>Pacific/Tahiti</code>). For
   *             more information, see <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">https://en.wikipedia.org/wiki/List_of_tz_database_time_zones</a>.</p>
   */
  TimeZone?: string;
}

export interface BatchPutScheduledUpdateGroupActionType {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>One or more scheduled actions. The maximum number allowed is 50.</p>
   */
  ScheduledUpdateGroupActions: ScheduledUpdateGroupActionRequest[] | undefined;
}

/**
 * <p>You have already reached a limit for your Amazon EC2 Auto Scaling
 *             resources (for example, Auto Scaling groups, launch configurations, or lifecycle hooks). For
 *             more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeAccountLimits.html">DescribeAccountLimits</a> in the <i>Amazon EC2 Auto Scaling API
 *             Reference</i>.</p>
 */
export class LimitExceededFault extends __BaseException {
  readonly name: "LimitExceededFault" = "LimitExceededFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededFault, __BaseException>) {
    super({
      name: "LimitExceededFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededFault.prototype);
  }
}

export interface CancelInstanceRefreshAnswer {
  /**
   * <p>The instance refresh ID.</p>
   */
  InstanceRefreshId?: string;
}

export interface CancelInstanceRefreshType {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;
}

export interface CompleteLifecycleActionAnswer {}

export interface CompleteLifecycleActionType {
  /**
   * <p>The name of the lifecycle hook.</p>
   */
  LifecycleHookName: string | undefined;

  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>A universally unique identifier (UUID) that identifies a specific lifecycle action
   *             associated with an instance. Amazon EC2 Auto Scaling sends this token to the notification target you
   *             specified when you created the lifecycle hook.</p>
   */
  LifecycleActionToken?: string;

  /**
   * <p>The action for the group to take. You can specify either <code>CONTINUE</code> or
   *                 <code>ABANDON</code>.</p>
   */
  LifecycleActionResult: string | undefined;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;
}

/**
 * <p>Describes the launch template and the version of the launch template that Amazon EC2 Auto Scaling
 *             uses to launch Amazon EC2 instances. For more information about launch templates, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/LaunchTemplates.html">Launch
 *                 templates</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 */
export interface LaunchTemplateSpecification {
  /**
   * <p>The ID of the launch template. To get the template ID, use the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLaunchTemplates.html">DescribeLaunchTemplates</a> API operation. New launch templates can be created
   *             using the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html">CreateLaunchTemplate</a> API. </p>
   *          <p>Conditional: You must specify either a <code>LaunchTemplateId</code> or a
   *                 <code>LaunchTemplateName</code>.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template. To get the template name, use the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLaunchTemplates.html">DescribeLaunchTemplates</a> API operation. New launch templates can be created
   *             using the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html">CreateLaunchTemplate</a> API. </p>
   *          <p>Conditional: You must specify either a <code>LaunchTemplateId</code> or a
   *                 <code>LaunchTemplateName</code>.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version number, <code>$Latest</code>, or <code>$Default</code>. To get the version
   *             number, use the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLaunchTemplateVersions.html">DescribeLaunchTemplateVersions</a> API operation. New launch template versions
   *             can be created using the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplateVersion.html">CreateLaunchTemplateVersion</a> API. If the value is <code>$Latest</code>,
   *             Amazon EC2 Auto Scaling selects the latest version of the launch template when launching instances. If
   *             the value is <code>$Default</code>, Amazon EC2 Auto Scaling selects the default version of the launch
   *             template when launching instances. The default value is <code>$Default</code>.</p>
   */
  Version?: string;
}

/**
 * <p>Describes information used to specify a lifecycle hook for an Auto Scaling
 *             group.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle
 *                 hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 */
export interface LifecycleHookSpecification {
  /**
   * <p>The name of the lifecycle hook.</p>
   */
  LifecycleHookName: string | undefined;

  /**
   * <p>The lifecycle transition. For Auto Scaling groups, there are two major lifecycle
   *             transitions.</p>
   *          <ul>
   *             <li>
   *                <p>To create a lifecycle hook for scale-out events, specify
   *                         <code>autoscaling:EC2_INSTANCE_LAUNCHING</code>.</p>
   *             </li>
   *             <li>
   *                <p>To create a lifecycle hook for scale-in events, specify
   *                         <code>autoscaling:EC2_INSTANCE_TERMINATING</code>.</p>
   *             </li>
   *          </ul>
   */
  LifecycleTransition: string | undefined;

  /**
   * <p>Additional information that you want to include any time Amazon EC2 Auto Scaling sends a message to
   *             the notification target.</p>
   */
  NotificationMetadata?: string;

  /**
   * <p>The maximum time, in seconds, that can elapse before the lifecycle hook times out. The
   *             range is from <code>30</code> to <code>7200</code> seconds. The default value is
   *                 <code>3600</code> seconds (1 hour).</p>
   */
  HeartbeatTimeout?: number;

  /**
   * <p>The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an
   *             unexpected failure occurs. The default value is <code>ABANDON</code>.</p>
   *          <p>Valid values: <code>CONTINUE</code> | <code>ABANDON</code>
   *          </p>
   */
  DefaultResult?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the notification target that Amazon EC2 Auto Scaling sends
   *             notifications to when an instance is in a wait state for the lifecycle hook. You can
   *             specify an Amazon SNS topic or an Amazon SQS queue.</p>
   */
  NotificationTargetARN?: string;

  /**
   * <p>The ARN of the IAM role that allows the Auto Scaling group to publish to the specified
   *             notification target. For information about creating this role, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/prepare-for-lifecycle-notifications.html#lifecycle-hook-notification-target">Configure a notification target for a lifecycle hook</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *          <p>Valid only if the notification target is an Amazon SNS topic or an Amazon SQS queue.</p>
   */
  RoleARN?: string;
}

/**
 * <p>Use this structure to specify the distribution of On-Demand Instances and Spot
 *             Instances and the allocation strategies used to fulfill On-Demand and Spot capacities
 *             for a mixed instances policy.</p>
 */
export interface InstancesDistribution {
  /**
   * <p>The allocation strategy to apply to your On-Demand Instances when they are launched.
   *             Possible instance types are determined by the launch template overrides that you
   *             specify.</p>
   *          <p>The following lists the valid values:</p>
   *          <dl>
   *             <dt>lowest-price</dt>
   *             <dd>
   *                <p>Uses price to determine which instance types are the highest priority,
   *                         launching the lowest priced instance types within an Availability Zone
   *                         first. This is the default value for Auto Scaling groups that specify <a>InstanceRequirements</a>. </p>
   *             </dd>
   *             <dt>prioritized</dt>
   *             <dd>
   *                <p>You set the order of instance types for the launch template overrides from
   *                         highest to lowest priority (from first to last in the list). Amazon EC2 Auto Scaling
   *                         launches your highest priority instance types first. If all your On-Demand
   *                         capacity cannot be fulfilled using your highest priority instance type, then
   *                         Amazon EC2 Auto Scaling launches the remaining capacity using the second priority instance
   *                         type, and so on. This is the default value for Auto Scaling groups that don't
   *                         specify <a>InstanceRequirements</a> and cannot be used for groups
   *                         that do.</p>
   *             </dd>
   *          </dl>
   */
  OnDemandAllocationStrategy?: string;

  /**
   * <p>The minimum amount of the Auto Scaling group's capacity that must be fulfilled by On-Demand
   *             Instances. This base portion is launched first as your group scales.</p>
   *          <p>This number has the same unit of measurement as the group's desired capacity. If you
   *             change the default unit of measurement (number of instances) by specifying weighted
   *             capacity values in your launch template overrides list, or by changing the default
   *             desired capacity type setting of the group, you must specify this number using the same
   *             unit of measurement.</p>
   *          <p>Default: 0</p>
   */
  OnDemandBaseCapacity?: number;

  /**
   * <p>Controls the percentages of On-Demand Instances and Spot Instances for your additional
   *             capacity beyond <code>OnDemandBaseCapacity</code>. Expressed as a number (for example,
   *             20 specifies 20% On-Demand Instances, 80% Spot Instances). If set to 100, only On-Demand
   *             Instances are used.</p>
   *          <p>Default: 100</p>
   */
  OnDemandPercentageAboveBaseCapacity?: number;

  /**
   * <p>The allocation strategy to apply to your Spot Instances when they are launched.
   *             Possible instance types are determined by the launch template overrides that you
   *             specify.</p>
   *          <p>The following lists the valid values:</p>
   *          <dl>
   *             <dt>capacity-optimized</dt>
   *             <dd>
   *                <p>Requests Spot Instances using pools that are optimally chosen based on the
   *                         available Spot capacity. This strategy has the lowest risk of interruption.
   *                         To give certain instance types a higher chance of launching first, use
   *                             <code>capacity-optimized-prioritized</code>.</p>
   *             </dd>
   *             <dt>capacity-optimized-prioritized</dt>
   *             <dd>
   *                <p>You set the order of instance types for the launch template overrides from
   *                         highest to lowest priority (from first to last in the list). Amazon EC2 Auto Scaling honors
   *                         the instance type priorities on a best effort basis but optimizes for
   *                         capacity first. Note that if the On-Demand allocation strategy is set to
   *                             <code>prioritized</code>, the same priority is applied when fulfilling
   *                         On-Demand capacity. This is not a valid value for Auto Scaling groups that specify
   *                             <a>InstanceRequirements</a>.</p>
   *             </dd>
   *             <dt>lowest-price</dt>
   *             <dd>
   *                <p>Requests Spot Instances using the lowest priced pools within an
   *                         Availability Zone, across the number of Spot pools that you specify for the
   *                             <code>SpotInstancePools</code> property. To ensure that your desired
   *                         capacity is met, you might receive Spot Instances from several pools. This
   *                         is the default value, but it might lead to high interruption rates because
   *                         this strategy only considers instance price and not available
   *                         capacity.</p>
   *             </dd>
   *             <dt>price-capacity-optimized (recommended)</dt>
   *             <dd>
   *                <p>The price and capacity optimized allocation strategy looks at both price
   *                         and capacity to select the Spot Instance pools that are the least likely to
   *                         be interrupted and have the lowest possible price.</p>
   *             </dd>
   *          </dl>
   */
  SpotAllocationStrategy?: string;

  /**
   * <p>The number of Spot Instance pools across which to allocate your Spot Instances. The
   *             Spot pools are determined from the different instance types in the overrides. Valid only
   *             when the <code>SpotAllocationStrategy</code> is <code>lowest-price</code>. Value must be
   *             in the range of 1–20.</p>
   *          <p>Default: 2</p>
   */
  SpotInstancePools?: number;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. If
   *             your maximum price is lower than the Spot price for the instance types that you
   *             selected, your Spot Instances are not launched. We do not recommend specifying a maximum
   *             price because it can lead to increased interruptions. When Spot Instances launch, you
   *             pay the current Spot price. To remove a maximum price that you previously set, include
   *             the property but specify an empty string ("") for the value.</p>
   *          <important>
   *             <p>If you specify a maximum price, your instances will be interrupted more frequently
   *                 than if you do not specify one.</p>
   *          </important>
   *          <p>Valid Range: Minimum value of 0.001</p>
   */
  SpotMaxPrice?: string;
}

export enum BareMetal {
  EXCLUDED = "excluded",
  INCLUDED = "included",
  REQUIRED = "required",
}

/**
 * <p>Specifies the minimum and maximum for the <code>BaselineEbsBandwidthMbps</code> object
 *             when you specify <a>InstanceRequirements</a> for an Auto Scaling group.</p>
 */
export interface BaselineEbsBandwidthMbpsRequest {
  /**
   * <p>The minimum value in Mbps.</p>
   */
  Min?: number;

  /**
   * <p>The maximum value in Mbps.</p>
   */
  Max?: number;
}

export enum BurstablePerformance {
  EXCLUDED = "excluded",
  INCLUDED = "included",
  REQUIRED = "required",
}

export enum CpuManufacturer {
  AMAZON_WEB_SERVICES = "amazon-web-services",
  AMD = "amd",
  INTEL = "intel",
}

export enum InstanceGeneration {
  CURRENT = "current",
  PREVIOUS = "previous",
}

export enum LocalStorage {
  EXCLUDED = "excluded",
  INCLUDED = "included",
  REQUIRED = "required",
}

export enum LocalStorageType {
  HDD = "hdd",
  SSD = "ssd",
}

/**
 * <p>Specifies the minimum and maximum for the <code>MemoryGiBPerVCpu</code> object when
 *             you specify <a>InstanceRequirements</a> for an Auto Scaling group.</p>
 */
export interface MemoryGiBPerVCpuRequest {
  /**
   * <p>The memory minimum in GiB.</p>
   */
  Min?: number;

  /**
   * <p>The memory maximum in GiB.</p>
   */
  Max?: number;
}

/**
 * <p>Specifies the minimum and maximum for the <code>MemoryMiB</code> object when you
 *             specify <a>InstanceRequirements</a> for an Auto Scaling group.</p>
 */
export interface MemoryMiBRequest {
  /**
   * <p>The memory minimum in MiB.</p>
   */
  Min: number | undefined;

  /**
   * <p>The memory maximum in MiB.</p>
   */
  Max?: number;
}

/**
 * <p>Specifies the minimum and maximum for the <code>NetworkBandwidthGbps</code> object
 *             when you specify <a>InstanceRequirements</a> for an Auto Scaling group.</p>
 *          <note>
 *             <p>Setting the minimum bandwidth does not guarantee that your instance will achieve
 *                 the minimum bandwidth. Amazon EC2 will identify instance types that support the specified
 *                 minimum bandwidth, but the actual bandwidth of your instance might go below the
 *                 specified minimum at times. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-network-bandwidth.html#available-instance-bandwidth">Available instance bandwidth</a> in the
 *                 <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
 *          </note>
 */
export interface NetworkBandwidthGbpsRequest {
  /**
   * <p>The minimum amount of network bandwidth, in gigabits per second (Gbps).</p>
   */
  Min?: number;

  /**
   * <p>The maximum amount of network bandwidth, in gigabits per second (Gbps).</p>
   */
  Max?: number;
}

/**
 * <p>Specifies the minimum and maximum for the <code>NetworkInterfaceCount</code> object
 *             when you specify <a>InstanceRequirements</a> for an Auto Scaling group.</p>
 */
export interface NetworkInterfaceCountRequest {
  /**
   * <p>The minimum number of network interfaces.</p>
   */
  Min?: number;

  /**
   * <p>The maximum number of network interfaces.</p>
   */
  Max?: number;
}

/**
 * <p>Specifies the minimum and maximum for the <code>TotalLocalStorageGB</code> object when
 *             you specify <a>InstanceRequirements</a> for an Auto Scaling group.</p>
 */
export interface TotalLocalStorageGBRequest {
  /**
   * <p>The storage minimum in GB.</p>
   */
  Min?: number;

  /**
   * <p>The storage maximum in GB.</p>
   */
  Max?: number;
}

/**
 * <p>Specifies the minimum and maximum for the <code>VCpuCount</code> object when you
 *             specify <a>InstanceRequirements</a> for an Auto Scaling group.</p>
 */
export interface VCpuCountRequest {
  /**
   * <p>The minimum number of vCPUs.</p>
   */
  Min: number | undefined;

  /**
   * <p>The maximum number of vCPUs.</p>
   */
  Max?: number;
}

/**
 * <p>The attributes for the instance types for a mixed instances policy. Amazon EC2 Auto Scaling uses your
 *             specified requirements to identify instance types. Then, it uses your On-Demand and Spot
 *             allocation strategies to launch instances from these instance types.</p>
 *          <p>When you specify multiple attributes, you get instance types that satisfy all of the
 *             specified attributes. If you specify multiple values for an attribute, you get instance
 *             types that satisfy any of the specified values.</p>
 *          <p>To limit the list of instance types from which Amazon EC2 Auto Scaling can identify matching instance
 *             types, you can use one of the following parameters, but not both in the same
 *             request:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>AllowedInstanceTypes</code> - The instance types to include in the list.
 *                     All other instance types are ignored, even if they match your specified
 *                     attributes.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ExcludedInstanceTypes</code> - The instance types to exclude from the
 *                     list, even if they match your specified attributes.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>You must specify <code>VCpuCount</code> and <code>MemoryMiB</code>. All other
 *                 attributes are optional. Any unspecified optional attribute is set to its
 *                 default.</p>
 *          </note>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-asg-instance-type-requirements.html">Creating
 *                 an Auto Scaling group using attribute-based instance type selection</a> in the
 *                 <i>Amazon EC2 Auto Scaling User Guide</i>. For help determining which instance types match
 *             your attributes before you apply them to your Auto Scaling group, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html#ec2fleet-get-instance-types-from-instance-requirements">Preview instance types with specified attributes</a> in the
 *                 <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
 */
export interface InstanceRequirements {
  /**
   * <p>The minimum and maximum number of vCPUs for an instance type.</p>
   */
  VCpuCount: VCpuCountRequest | undefined;

  /**
   * <p>The minimum and maximum instance memory size for an instance type, in MiB.</p>
   */
  MemoryMiB: MemoryMiBRequest | undefined;

  /**
   * <p>Lists which specific CPU manufacturers to include.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with Intel CPUs, specify <code>intel</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with AMD CPUs, specify <code>amd</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Amazon Web Services CPUs, specify
   *                     <code>amazon-web-services</code>.</p>
   *             </li>
   *          </ul>
   *          <note>
   *             <p>Don't confuse the CPU hardware manufacturer with the CPU hardware architecture.
   *                 Instances will be launched with a compatible CPU architecture based on the Amazon
   *                 Machine Image (AMI) that you specify in your launch template. </p>
   *          </note>
   *          <p>Default: Any manufacturer</p>
   */
  CpuManufacturers?: (CpuManufacturer | string)[];

  /**
   * <p>The minimum and maximum amount of memory per vCPU for an instance type, in GiB.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  MemoryGiBPerVCpu?: MemoryGiBPerVCpuRequest;

  /**
   * <p>The instance types to exclude. You can use strings with one or more wild cards,
   *             represented by an asterisk (<code>*</code>), to exclude an instance family, type, size,
   *             or generation. The following are examples: <code>m5.8xlarge</code>, <code>c5*.*</code>,
   *                 <code>m5a.*</code>, <code>r*</code>, <code>*3*</code>. </p>
   *          <p>For example, if you specify <code>c5*</code>, you are excluding the entire C5 instance
   *             family, which includes all C5a and C5n instance types. If you specify
   *             <code>m5a.*</code>, Amazon EC2 Auto Scaling will exclude all the M5a instance types, but not the M5n
   *             instance types.</p>
   *          <note>
   *             <p>If you specify <code>ExcludedInstanceTypes</code>, you can't specify
   *                     <code>AllowedInstanceTypes</code>.</p>
   *          </note>
   *          <p>Default: No excluded instance types</p>
   */
  ExcludedInstanceTypes?: string[];

  /**
   * <p>Indicates whether current or previous generation instance types are included.</p>
   *          <ul>
   *             <li>
   *                <p>For current generation instance types, specify <code>current</code>. The
   *                     current generation includes EC2 instance types currently recommended for use.
   *                     This typically includes the latest two to three generations in each instance
   *                     family. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in
   *                     the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   *             </li>
   *             <li>
   *                <p>For previous generation instance types, specify <code>previous</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: Any current or previous generation</p>
   */
  InstanceGenerations?: (InstanceGeneration | string)[];

  /**
   * <p>The price protection threshold for Spot Instances. This is the maximum you’ll pay for
   *             a Spot Instance, expressed as a percentage higher than the least expensive current
   *             generation M, C, or R instance type with your specified attributes. When Amazon EC2 Auto Scaling
   *             selects instance types with your attributes, we will exclude instance types whose price
   *             is higher than your threshold. The parameter accepts an integer, which Amazon EC2 Auto Scaling
   *             interprets as a percentage. To turn off price protection, specify a high value, such as
   *                 <code>999999</code>. </p>
   *          <p>If you set <code>DesiredCapacityType</code> to <code>vcpu</code> or
   *                 <code>memory-mib</code>, the price protection threshold is applied based on the per
   *             vCPU or per memory price instead of the per instance price. </p>
   *          <p>Default: <code>100</code>
   *          </p>
   */
  SpotMaxPricePercentageOverLowestPrice?: number;

  /**
   * <p>The price protection threshold for On-Demand Instances. This is the maximum you’ll pay
   *             for an On-Demand Instance, expressed as a percentage higher than the least expensive
   *             current generation M, C, or R instance type with your specified attributes. When
   *             Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types
   *             whose price is higher than your threshold. The parameter accepts an integer, which
   *             Amazon EC2 Auto Scaling interprets as a percentage. To turn off price protection, specify a high value,
   *             such as <code>999999</code>. </p>
   *          <p>If you set <code>DesiredCapacityType</code> to <code>vcpu</code> or
   *                 <code>memory-mib</code>, the price protection threshold is applied based on the per
   *             vCPU or per memory price instead of the per instance price. </p>
   *          <p>Default: <code>20</code>
   *          </p>
   */
  OnDemandMaxPricePercentageOverLowestPrice?: number;

  /**
   * <p>Indicates whether bare metal instance types are included, excluded, or
   *             required.</p>
   *          <p>Default: <code>excluded</code>
   *          </p>
   */
  BareMetal?: BareMetal | string;

  /**
   * <p>Indicates whether burstable performance instance types are included, excluded, or
   *             required. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable
   *                 performance instances</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   *          <p>Default: <code>excluded</code>
   *          </p>
   */
  BurstablePerformance?: BurstablePerformance | string;

  /**
   * <p>Indicates whether instance types must provide On-Demand Instance hibernation
   *             support.</p>
   *          <p>Default: <code>false</code>
   *          </p>
   */
  RequireHibernateSupport?: boolean;

  /**
   * <p>The minimum and maximum number of network interfaces for an instance type.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  NetworkInterfaceCount?: NetworkInterfaceCountRequest;

  /**
   * <p>Indicates whether instance types with instance store volumes are included, excluded,
   *             or required. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html">Amazon EC2 instance store</a> in
   *             the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   *          <p>Default: <code>included</code>
   *          </p>
   */
  LocalStorage?: LocalStorage | string;

  /**
   * <p>Indicates the type of local storage that is required.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with hard disk drive (HDD) storage, specify
   *                         <code>hdd</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with solid state drive (SSD) storage, specify
   *                         <code>ssd</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: Any local storage type</p>
   */
  LocalStorageTypes?: (LocalStorageType | string)[];

  /**
   * <p>The minimum and maximum total local storage size for an instance type, in GB.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  TotalLocalStorageGB?: TotalLocalStorageGBRequest;

  /**
   * <p>The minimum and maximum baseline bandwidth performance for an instance type, in Mbps.
   *             For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html">Amazon EBS–optimized instances</a>
   *             in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsRequest;

  /**
   * <p>Lists the accelerator types that must be on an instance type.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with GPU accelerators, specify <code>gpu</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with FPGA accelerators, specify <code>fpga</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with inference accelerators, specify
   *                     <code>inference</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: Any accelerator type</p>
   */
  AcceleratorTypes?: (AcceleratorType | string)[];

  /**
   * <p>The minimum and maximum number of accelerators (GPUs, FPGAs, or Amazon Web Services Inferentia
   *             chips) for an instance type.</p>
   *          <p>To exclude accelerator-enabled instance types, set <code>Max</code> to
   *             <code>0</code>.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  AcceleratorCount?: AcceleratorCountRequest;

  /**
   * <p>Indicates whether instance types must have accelerators by specific
   *             manufacturers.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with NVIDIA devices, specify <code>nvidia</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with AMD devices, specify <code>amd</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Amazon Web Services devices, specify
   *                         <code>amazon-web-services</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Xilinx devices, specify <code>xilinx</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: Any manufacturer</p>
   */
  AcceleratorManufacturers?: (AcceleratorManufacturer | string)[];

  /**
   * <p>Lists the accelerators that must be on an instance type.</p>
   *          <ul>
   *             <li>
   *                <p>For instance types with NVIDIA A100 GPUs, specify <code>a100</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA V100 GPUs, specify <code>v100</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA K80 GPUs, specify <code>k80</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA T4 GPUs, specify <code>t4</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with NVIDIA M60 GPUs, specify <code>m60</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with AMD Radeon Pro V520 GPUs, specify
   *                         <code>radeon-pro-v520</code>.</p>
   *             </li>
   *             <li>
   *                <p>For instance types with Xilinx VU9P FPGAs, specify <code>vu9p</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Default: Any accelerator</p>
   */
  AcceleratorNames?: (AcceleratorName | string)[];

  /**
   * <p>The minimum and maximum total memory size for the accelerators on an instance type, in
   *             MiB.</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRequest;

  /**
   * <p>The minimum and maximum amount of network bandwidth, in gigabits per second
   *             (Gbps).</p>
   *          <p>Default: No minimum or maximum limits</p>
   */
  NetworkBandwidthGbps?: NetworkBandwidthGbpsRequest;

  /**
   * <p>The instance types to apply your specified attributes against. All other instance
   *             types are ignored, even if they match your specified attributes.</p>
   *          <p>You can use strings with one or more wild cards, represented by an asterisk
   *                 (<code>*</code>), to allow an instance type, size, or generation. The following are
   *             examples: <code>m5.8xlarge</code>, <code>c5*.*</code>, <code>m5a.*</code>,
   *                 <code>r*</code>, <code>*3*</code>.</p>
   *          <p>For example, if you specify <code>c5*</code>, Amazon EC2 Auto Scaling will allow the entire C5
   *             instance family, which includes all C5a and C5n instance types. If you specify
   *                 <code>m5a.*</code>, Amazon EC2 Auto Scaling will allow all the M5a instance types, but not the M5n
   *             instance types.</p>
   *          <note>
   *             <p>If you specify <code>AllowedInstanceTypes</code>, you can't specify
   *                     <code>ExcludedInstanceTypes</code>.</p>
   *          </note>
   *          <p>Default: All instance types</p>
   */
  AllowedInstanceTypes?: string[];
}

/**
 * <p>Use this structure to let Amazon EC2 Auto Scaling do the following when the Auto Scaling group has a mixed
 *             instances policy:</p>
 *          <ul>
 *             <li>
 *                <p>Override the instance type that is specified in the launch template.</p>
 *             </li>
 *             <li>
 *                <p>Use multiple instance types.</p>
 *             </li>
 *          </ul>
 *          <p>Specify the instance types that you want, or define your instance requirements instead
 *             and let Amazon EC2 Auto Scaling provision the available instance types that meet your requirements.
 *             This can provide Amazon EC2 Auto Scaling with a larger selection of instance types to choose from when
 *             fulfilling Spot and On-Demand capacities. You can view which instance types are matched
 *             before you apply the instance requirements to your Auto Scaling group.</p>
 *          <p>After you define your instance requirements, you don't have to keep updating these
 *             settings to get new EC2 instance types automatically. Amazon EC2 Auto Scaling uses the instance
 *             requirements of the Auto Scaling group to determine whether a new EC2 instance type can be
 *             used.</p>
 */
export interface LaunchTemplateOverrides {
  /**
   * <p>The instance type, such as <code>m3.xlarge</code>. You must specify an instance type
   *             that is supported in your requested Region and Availability Zones. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html">Instance types</a> in the <i>Amazon Elastic Compute Cloud User
   *                 Guide</i>.</p>
   *          <p>You can specify up to 40 instance types per Auto Scaling group.</p>
   */
  InstanceType?: string;

  /**
   * <p>If you provide a list of instance types to use, you can specify the number of capacity
   *             units provided by each instance type in terms of virtual CPUs, memory, storage,
   *             throughput, or other relative performance characteristic. When a Spot or On-Demand
   *             Instance is launched, the capacity units count toward the desired capacity. Amazon EC2 Auto Scaling
   *             launches instances until the desired capacity is totally fulfilled, even if this results
   *             in an overage. For example, if there are two units remaining to fulfill capacity, and
   *             Amazon EC2 Auto Scaling can only launch an instance with a <code>WeightedCapacity</code> of five units,
   *             the instance is launched, and the desired capacity is exceeded by three units. For more
   *             information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups-instance-weighting.html">Configuring instance weighting for Amazon EC2 Auto Scaling</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>. Value must be in the range of 1–999.</p>
   *          <p>If you specify a value for <code>WeightedCapacity</code> for one instance type, you
   *             must specify a value for <code>WeightedCapacity</code> for all of them.</p>
   *          <important>
   *             <p>Every Auto Scaling group has three size parameters (<code>DesiredCapacity</code>,
   *                     <code>MaxSize</code>, and <code>MinSize</code>). Usually, you set these sizes
   *                 based on a specific number of instances. However, if you configure a mixed instances
   *                 policy that defines weights for the instance types, you must specify these sizes
   *                 with the same units that you use for weighting instances. </p>
   *          </important>
   */
  WeightedCapacity?: string;

  /**
   * <p>Provides a launch template for the specified instance type or set of instance
   *             requirements. For example, some instance types might require a launch template with a
   *             different AMI. If not provided, Amazon EC2 Auto Scaling uses the launch template that's specified in
   *             the <code>LaunchTemplate</code> definition. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups-launch-template-overrides.html">Specifying a different launch template for an instance type</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
   *          <p>You can specify up to 20 launch templates per Auto Scaling group. The launch templates
   *             specified in the overrides and in the <code>LaunchTemplate</code> definition count
   *             towards this limit.</p>
   */
  LaunchTemplateSpecification?: LaunchTemplateSpecification;

  /**
   * <p>The instance requirements. Amazon EC2 Auto Scaling uses your specified requirements to identify
   *             instance types. Then, it uses your On-Demand and Spot allocation strategies to launch
   *             instances from these instance types.</p>
   *          <p>You can specify up to four separate sets of instance requirements per Auto Scaling group. This
   *             is useful for provisioning instances from different Amazon Machine Images (AMIs) in the
   *             same Auto Scaling group. To do this, create the AMIs and create a new launch template for each
   *             AMI. Then, create a compatible set of instance requirements for each launch template.
   *             </p>
   *          <note>
   *             <p>If you specify <code>InstanceRequirements</code>, you can't specify
   *                     <code>InstanceType</code>.</p>
   *          </note>
   */
  InstanceRequirements?: InstanceRequirements;
}

/**
 * <p>Use this structure to specify the launch templates and instance types (overrides) for
 *             a mixed instances policy.</p>
 */
export interface LaunchTemplate {
  /**
   * <p>The launch template.</p>
   */
  LaunchTemplateSpecification?: LaunchTemplateSpecification;

  /**
   * <p>Any properties that you specify override the same properties in the launch
   *             template.</p>
   */
  Overrides?: LaunchTemplateOverrides[];
}

/**
 * <p>Use this structure to launch multiple instance types and On-Demand Instances and Spot
 *             Instances within a single Auto Scaling group.</p>
 *          <p>A mixed instances policy contains information that Amazon EC2 Auto Scaling can use to launch
 *             instances and help optimize your costs. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html">Auto Scaling
 *                 groups with multiple instance types and purchase options</a> in the
 *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 */
export interface MixedInstancesPolicy {
  /**
   * <p>One or more launch templates and the instance types (overrides) that are used to
   *             launch EC2 instances to fulfill On-Demand and Spot capacities.</p>
   */
  LaunchTemplate?: LaunchTemplate;

  /**
   * <p>The instances distribution.</p>
   */
  InstancesDistribution?: InstancesDistribution;
}

/**
 * <p>Describes a tag for an Auto Scaling group.</p>
 */
export interface Tag {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of resource. The only supported value is
   *             <code>auto-scaling-group</code>.</p>
   */
  ResourceType?: string;

  /**
   * <p>The tag key.</p>
   */
  Key: string | undefined;

  /**
   * <p>The tag value.</p>
   */
  Value?: string;

  /**
   * <p>Determines whether the tag is added to new instances as they are launched in the
   *             group.</p>
   */
  PropagateAtLaunch?: boolean;
}

export interface CreateAutoScalingGroupType {
  /**
   * <p>The name of the Auto Scaling group. This name must be unique per Region per account.</p>
   *          <p>The name can contain any ASCII character 33 to 126 including most punctuation
   *             characters, digits, and upper and lowercased letters.</p>
   *          <note>
   *             <p>You cannot use a colon (:) in the name.</p>
   *          </note>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The name of the launch configuration to use to launch instances. </p>
   *          <p>Conditional: You must specify either a launch template (<code>LaunchTemplate</code> or
   *                 <code>MixedInstancesPolicy</code>) or a launch configuration
   *                 (<code>LaunchConfigurationName</code> or <code>InstanceId</code>).</p>
   */
  LaunchConfigurationName?: string;

  /**
   * <p>Information used to specify the launch template and version to use to launch
   *             instances. </p>
   *          <p>Conditional: You must specify either a launch template (<code>LaunchTemplate</code> or
   *                 <code>MixedInstancesPolicy</code>) or a launch configuration
   *                 (<code>LaunchConfigurationName</code> or <code>InstanceId</code>).</p>
   *          <note>
   *             <p>The launch template that is specified must be configured for use with an Auto Scaling
   *                 group. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-template.html">Creating a launch
   *                     template for an Auto Scaling group</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *          </note>
   */
  LaunchTemplate?: LaunchTemplateSpecification;

  /**
   * <p>The mixed instances policy. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html">Auto Scaling
   *                 groups with multiple instance types and purchase options</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  MixedInstancesPolicy?: MixedInstancesPolicy;

  /**
   * <p>The ID of the instance used to base the launch configuration on. If specified, Amazon
   *             EC2 Auto Scaling uses the configuration values from the specified instance to create a
   *             new launch configuration. To get the instance ID, use the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html">DescribeInstances</a> API operation. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-asg-from-instance.html">Creating an Auto Scaling group using an EC2 instance</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  InstanceId?: string;

  /**
   * <p>The minimum size of the group.</p>
   */
  MinSize: number | undefined;

  /**
   * <p>The maximum size of the group.</p>
   *          <note>
   *             <p>With a mixed instances policy that uses instance weighting, Amazon EC2 Auto Scaling may need to
   *                 go above <code>MaxSize</code> to meet your capacity requirements. In this event,
   *                 Amazon EC2 Auto Scaling will never go above <code>MaxSize</code> by more than your largest instance
   *                 weight (weights that define how many units each instance contributes to the desired
   *                 capacity of the group).</p>
   *          </note>
   */
  MaxSize: number | undefined;

  /**
   * <p>The desired capacity is the initial capacity of the Auto Scaling group at the time of its
   *             creation and the capacity it attempts to maintain. It can scale beyond this capacity if
   *             you configure auto scaling. This number must be greater than or equal to the minimum
   *             size of the group and less than or equal to the maximum size of the group. If you do not
   *             specify a desired capacity, the default is the minimum size of the group.</p>
   */
  DesiredCapacity?: number;

  /**
   * <p>
   *             <i>Only needed if you use simple scaling policies.</i>
   *          </p>
   *          <p>The amount of time, in seconds, between one scaling activity ending and another one
   *             starting due to simple scaling policies. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/Cooldown.html">Scaling cooldowns
   *                 for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *          <p>Default: <code>300</code> seconds</p>
   */
  DefaultCooldown?: number;

  /**
   * <p>A list of Availability Zones where instances in the Auto Scaling group can be created. Used
   *             for launching into the default VPC subnet in each Availability Zone when not using the
   *                 <code>VPCZoneIdentifier</code> property, or for attaching a network interface when
   *             an existing network interface ID is specified in a launch template.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>A list of Classic Load Balancers associated with this Auto Scaling group. For Application Load Balancers, Network Load Balancers, and Gateway Load Balancer,
   *             specify the <code>TargetGroupARNs</code> property instead.</p>
   */
  LoadBalancerNames?: string[];

  /**
   * <p>The Amazon Resource Names (ARN) of the Elastic Load Balancing target groups to associate with the Auto Scaling
   *             group. Instances are registered as targets with the target groups. The target groups
   *             receive incoming traffic and route requests to one or more registered targets. For more
   *             information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Use Elastic Load Balancing to
   *                 distribute traffic across the instances in your Auto Scaling group</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  TargetGroupARNs?: string[];

  /**
   * <p>Determines whether any additional health checks are performed on the instances in this
   *             group. Amazon EC2 health checks are always on. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html">Health checks
   *                 for Auto Scaling instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *          <p>The valid values are <code>EC2</code> (default), <code>ELB</code>, and
   *                 <code>VPC_LATTICE</code>. The <code>VPC_LATTICE</code> health check type is reserved
   *             for use with VPC Lattice, which is in preview release and is subject to change.</p>
   */
  HealthCheckType?: string;

  /**
   * <p>The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before checking the health status
   *             of an EC2 instance that has come into service and marking it unhealthy due to a failed
   *             health check. This is useful if your instances do not immediately pass their health
   *             checks after they enter the <code>InService</code> state. For more information, see
   *                 <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/health-check-grace-period.html">Set the health check
   *                 grace period for an Auto Scaling group</a> in the
   *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *          <p>Default: <code>0</code> seconds</p>
   */
  HealthCheckGracePeriod?: number;

  /**
   * <p>The name of the placement group into which to launch your instances. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the
   *                 <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   *          <note>
   *             <p>A <i>cluster</i> placement group is a logical grouping of instances
   *                 within a single Availability Zone. You cannot specify multiple Availability Zones
   *                 and a cluster placement group. </p>
   *          </note>
   */
  PlacementGroup?: string;

  /**
   * <p>A comma-separated list of subnet IDs for a virtual private cloud (VPC) where instances
   *             in the Auto Scaling group can be created. If you specify <code>VPCZoneIdentifier</code> with
   *                 <code>AvailabilityZones</code>, the subnets that you specify must reside in those
   *             Availability Zones.</p>
   */
  VPCZoneIdentifier?: string;

  /**
   * <p>A policy or a list of policies that are used to select the instance to terminate.
   *             These policies are executed in the order that you list them. For more information, see
   *                 <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-termination-policies.html">Work with
   *                 Amazon EC2 Auto Scaling termination policies</a> in the
   *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *          <p>Valid values: <code>Default</code> | <code>AllocationStrategy</code> |
   *                 <code>ClosestToNextInstanceHour</code> | <code>NewestInstance</code> |
   *                 <code>OldestInstance</code> | <code>OldestLaunchConfiguration</code> |
   *                 <code>OldestLaunchTemplate</code> |
   *                 <code>arn:aws:lambda:region:account-id:function:my-function:my-alias</code>
   *          </p>
   */
  TerminationPolicies?: string[];

  /**
   * <p>Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling
   *             when scaling in. For more information about preventing instances from terminating on
   *             scale in, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-protection.html">Using
   *                 instance scale-in protection</a> in the
   *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  NewInstancesProtectedFromScaleIn?: boolean;

  /**
   * <p>Indicates whether Capacity Rebalancing is enabled. Otherwise, Capacity Rebalancing is
   *             disabled. When you turn on Capacity Rebalancing, Amazon EC2 Auto Scaling attempts to launch a Spot
   *             Instance whenever Amazon EC2 notifies that a Spot Instance is at an elevated risk of
   *             interruption. After launching a new instance, it then terminates an old instance. For
   *             more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-capacity-rebalancing.html">Use Capacity
   *                 Rebalancing to handle Amazon EC2 Spot Interruptions</a> in the in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  CapacityRebalance?: boolean;

  /**
   * <p>One or more lifecycle hooks to add to the Auto Scaling group before instances are
   *             launched.</p>
   */
  LifecycleHookSpecificationList?: LifecycleHookSpecification[];

  /**
   * <p>One or more tags. You can tag your Auto Scaling group and propagate the tags to the Amazon EC2
   *             instances it launches. Tags are not propagated to Amazon EBS volumes. To add tags to Amazon EBS
   *             volumes, specify the tags in a launch template but use caution. If the launch template
   *             specifies an instance tag with a key that is also specified for the Auto Scaling group, Amazon EC2 Auto Scaling
   *             overrides the value of that instance tag with the value specified by the Auto Scaling group. For
   *             more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-tagging.html">Tag Auto Scaling groups and
   *                 instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to
   *             call other Amazon Web Services service on your behalf. By default, Amazon EC2 Auto Scaling uses a service-linked role
   *             named <code>AWSServiceRoleForAutoScaling</code>, which it creates if it does not exist.
   *             For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-service-linked-role.html">Service-linked
   *                 roles</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  ServiceLinkedRoleARN?: string;

  /**
   * <p>The maximum amount of time, in seconds, that an instance can be in service. The
   *             default is null. If specified, the value must be either 0 or a number equal to or
   *             greater than 86,400 seconds (1 day). For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-max-instance-lifetime.html">Replacing Auto Scaling instances based on maximum instance lifetime</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  MaxInstanceLifetime?: number;

  /**
   * <p>Reserved.</p>
   */
  Context?: string;

  /**
   * <p>The unit of measurement for the value specified for desired capacity. Amazon EC2 Auto Scaling
   *             supports <code>DesiredCapacityType</code> for attribute-based instance type selection
   *             only. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-asg-instance-type-requirements.html">Creating
   *                 an Auto Scaling group using attribute-based instance type selection</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *          <p>By default, Amazon EC2 Auto Scaling specifies <code>units</code>, which translates into number of
   *             instances.</p>
   *          <p>Valid values: <code>units</code> | <code>vcpu</code> | <code>memory-mib</code>
   *          </p>
   */
  DesiredCapacityType?: string;

  /**
   * <p>The amount of time, in seconds, until a newly launched instance can contribute to the
   *             Amazon CloudWatch metrics. This delay lets an instance finish initializing before Amazon EC2 Auto Scaling
   *             aggregates instance metrics, resulting in more reliable usage data. Set this value equal
   *             to the amount of time that it takes for resource consumption to become stable after an
   *             instance reaches the <code>InService</code> state. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-default-instance-warmup.html">Set
   *                 the default instance warmup for an Auto Scaling group</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *          <important>
   *             <p>To manage your warm-up settings at the group level, we recommend that you set the
   *                 default instance warmup, <i>even if its value is set to 0 seconds</i>.
   *                 This also optimizes the performance of scaling policies that scale continuously,
   *                 such as target tracking and step scaling policies. </p>
   *             <p>If you need to remove a value that you previously set, include the property but
   *                 specify <code>-1</code> for the value. However, we strongly recommend keeping the
   *                 default instance warmup enabled by specifying a minimum value of
   *                 <code>0</code>.</p>
   *          </important>
   *          <p>Default: None </p>
   */
  DefaultInstanceWarmup?: number;

  /**
   * <p>
   *             <b>Reserved for use with Amazon VPC Lattice, which is in preview release and is subject to
   *             change. Do not use this parameter for production workloads. It is also subject to change.</b>
   *          </p>
   *          <p>The unique identifiers of one or more traffic sources.</p>
   *          <p>Currently, you must specify an Amazon Resource Name (ARN) for an existing VPC Lattice
   *             target group. Amazon EC2 Auto Scaling registers the running instances with the attached target groups.
   *             The target groups receive incoming traffic and route requests to one or more registered
   *             targets.</p>
   */
  TrafficSources?: TrafficSourceIdentifier[];
}

/**
 * <p>Describes information used to set up an Amazon EBS volume specified in a block device
 *             mapping.</p>
 */
export interface Ebs {
  /**
   * <p>The snapshot ID of the volume to use.</p>
   *          <p>You must specify either a <code>VolumeSize</code> or a <code>SnapshotId</code>.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The volume size, in GiBs. The following are the supported volumes sizes for each
   *             volume type: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp2</code> and <code>gp3</code>: 1-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code>: 4-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>st1</code> and <code>sc1</code>: 125-16,384</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>standard</code>: 1-1,024</p>
   *             </li>
   *          </ul>
   *          <p>You must specify either a <code>SnapshotId</code> or a <code>VolumeSize</code>. If you
   *             specify both <code>SnapshotId</code> and <code>VolumeSize</code>, the volume size must
   *             be equal or greater than the size of the snapshot.</p>
   */
  VolumeSize?: number;

  /**
   * <p>The volume type. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS volume types</a> in the
   *                 <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   *          <p>Valid values: <code>standard</code> | <code>io1</code> | <code>gp2</code> |
   *                 <code>st1</code> | <code>sc1</code> | <code>gp3</code>
   *          </p>
   */
  VolumeType?: string;

  /**
   * <p>Indicates whether the volume is deleted on instance termination. For Amazon EC2 Auto Scaling, the
   *             default value is <code>true</code>.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>The number of input/output (I/O) operations per second (IOPS) to provision for the
   *             volume. For <code>gp3</code> and <code>io1</code> volumes, this represents the number of
   *             IOPS that are provisioned for the volume. For <code>gp2</code> volumes, this represents
   *             the baseline performance of the volume and the rate at which the volume accumulates I/O
   *             credits for bursting. </p>
   *          <p>The following are the supported values for each volume type: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>gp3</code>: 3,000-16,000 IOPS</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>io1</code>: 100-64,000 IOPS</p>
   *             </li>
   *          </ul>
   *          <p>For <code>io1</code> volumes, we guarantee 64,000 IOPS only for <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#ec2-nitro-instances">Instances
   *                 built on the Nitro System</a>. Other instance families guarantee performance up
   *             to 32,000 IOPS. </p>
   *          <p>
   *             <code>Iops</code> is supported when the volume type is <code>gp3</code> or
   *                 <code>io1</code> and required only when the volume type is <code>io1</code>. (Not
   *             used with <code>standard</code>, <code>gp2</code>, <code>st1</code>, or <code>sc1</code>
   *             volumes.) </p>
   */
  Iops?: number;

  /**
   * <p>Specifies whether the volume should be encrypted. Encrypted EBS volumes can only be
   *             attached to instances that support Amazon EBS encryption. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#EBSEncryption_supported_instances">Supported instance types</a>. If your AMI uses encrypted volumes, you can also
   *             only launch it on supported instance types.</p>
   *          <note>
   *             <p>If you are creating a volume from a snapshot, you cannot create an unencrypted
   *                 volume from an encrypted snapshot. Also, you cannot specify a KMS key ID when using
   *                 a launch configuration.</p>
   *             <p>If you enable encryption by default, the EBS volumes that you create are always
   *                 encrypted, either using the Amazon Web Services managed KMS key or a customer-managed KMS key,
   *                 regardless of whether the snapshot was encrypted. </p>
   *             <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-data-protection.html#encryption">Use Amazon Web Services KMS keys to encrypt Amazon EBS volumes</a> in the
   *                     <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *          </note>
   */
  Encrypted?: boolean;

  /**
   * <p>The throughput (MiBps) to provision for a <code>gp3</code> volume.</p>
   */
  Throughput?: number;
}

/**
 * <p>Describes a block device mapping.</p>
 */
export interface BlockDeviceMapping {
  /**
   * <p>The name of the instance store volume (virtual device) to attach to an instance at
   *             launch. The name must be in the form ephemeral<i>X</i> where
   *                 <i>X</i> is a number starting from zero (0), for example,
   *                 <code>ephemeral0</code>.</p>
   */
  VirtualName?: string;

  /**
   * <p>The device name assigned to the volume (for example, <code>/dev/sdh</code> or
   *                 <code>xvdh</code>). For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/device_naming.html">Device naming on Linux
   *                 instances</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   *          <note>
   *             <p>To define a block device mapping, set the device name and exactly one of the
   *                 following properties: <code>Ebs</code>, <code>NoDevice</code>, or
   *                     <code>VirtualName</code>.</p>
   *          </note>
   */
  DeviceName: string | undefined;

  /**
   * <p>Information to attach an EBS volume to an instance at launch.</p>
   */
  Ebs?: Ebs;

  /**
   * <p>Setting this value to <code>true</code> prevents a volume that is included in the
   *             block device mapping of the AMI from being mapped to the specified device name at
   *             launch.</p>
   *          <p>If <code>NoDevice</code> is <code>true</code> for the root device, instances might
   *             fail the EC2 health check. In that case, Amazon EC2 Auto Scaling launches replacement instances.</p>
   */
  NoDevice?: boolean;
}

/**
 * <p>Describes whether detailed monitoring is enabled for the Auto Scaling instances.</p>
 */
export interface InstanceMonitoring {
  /**
   * <p>If <code>true</code>, detailed monitoring is enabled. Otherwise, basic monitoring is
   *             enabled.</p>
   */
  Enabled?: boolean;
}

export enum InstanceMetadataEndpointState {
  Disabled = "disabled",
  Enabled = "enabled",
}

export enum InstanceMetadataHttpTokensState {
  Optional = "optional",
  Required = "required",
}

/**
 * <p>The metadata options for the instances. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-config.html#launch-configurations-imds">Configuring the Instance Metadata Options</a> in the
 *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 */
export interface InstanceMetadataOptions {
  /**
   * <p>The state of token usage for your instance metadata requests. If the parameter is not
   *             specified in the request, the default state is <code>optional</code>.</p>
   *          <p>If the state is <code>optional</code>, you can choose to retrieve instance metadata
   *             with or without a signed token header on your request. If you retrieve the IAM role
   *             credentials without a token, the version 1.0 role credentials are returned. If you
   *             retrieve the IAM role credentials using a valid signed token, the version 2.0 role
   *             credentials are returned.</p>
   *          <p>If the state is <code>required</code>, you must send a signed token header with any
   *             instance metadata retrieval requests. In this state, retrieving the IAM role credentials
   *             always returns the version 2.0 credentials; the version 1.0 credentials are not
   *             available.</p>
   */
  HttpTokens?: InstanceMetadataHttpTokensState | string;

  /**
   * <p>The desired HTTP PUT response hop limit for instance metadata requests. The larger the
   *             number, the further instance metadata requests can travel.</p>
   *          <p>Default: 1</p>
   */
  HttpPutResponseHopLimit?: number;

  /**
   * <p>This parameter enables or disables the HTTP metadata endpoint on your instances. If
   *             the parameter is not specified, the default state is <code>enabled</code>.</p>
   *          <note>
   *             <p>If you specify a value of <code>disabled</code>, you will not be able to access
   *                 your instance metadata. </p>
   *          </note>
   */
  HttpEndpoint?: InstanceMetadataEndpointState | string;
}

export interface CreateLaunchConfigurationType {
  /**
   * <p>The name of the launch configuration. This name must be unique per Region per
   *             account.</p>
   */
  LaunchConfigurationName: string | undefined;

  /**
   * <p>The ID of the Amazon Machine Image (AMI) that was assigned during registration. For
   *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/finding-an-ami.html">Finding a Linux AMI</a> in the
   *                 <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   *          <p>If you specify <code>InstanceId</code>, an <code>ImageId</code> is not
   *             required.</p>
   */
  ImageId?: string;

  /**
   * <p>The name of the key pair. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Amazon EC2 key pairs and Linux
   *                 instances</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  KeyName?: string;

  /**
   * <p>A list that contains the security group IDs to assign to the instances in the Auto Scaling
   *             group. For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html">Control traffic to
   *                 resources using security groups</a> in the <i>Amazon Virtual Private
   *                 Cloud User Guide</i>.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>Available for backward compatibility.</p>
   */
  ClassicLinkVPCId?: string;

  /**
   * <p>Available for backward compatibility.</p>
   */
  ClassicLinkVPCSecurityGroups?: string[];

  /**
   * <p>The user data to make available to the launched EC2 instances. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> (Linux) and <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-instance-metadata.html">Instance metadata and
   *                 user data</a> (Windows). If you are using a command line tool, base64-encoding
   *             is performed for you, and you can load the text from a file. Otherwise, you must provide
   *             base64-encoded text. User data is limited to 16 KB.</p>
   */
  UserData?: string;

  /**
   * <p>The ID of the instance to use to create the launch configuration. The new launch
   *             configuration derives attributes from the instance, except for the block device
   *             mapping.</p>
   *          <p>To create a launch configuration with a block device mapping or override any other
   *             instance attributes, specify them as part of the same request.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-lc-with-instanceID.html">Creating a launch
   *                 configuration using an EC2 instance</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  InstanceId?: string;

  /**
   * <p>Specifies the instance type of the EC2 instance. For information about available
   *             instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#AvailableInstanceTypes">Available
   *                 instance types</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   *          <p>If you specify <code>InstanceId</code>, an <code>InstanceType</code> is not
   *             required.</p>
   */
  InstanceType?: string;

  /**
   * <p>The ID of the kernel associated with the AMI.</p>
   *          <note>
   *             <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
   *                 information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedKernels.html">User provided
   *                     kernels</a> in the <i>Amazon EC2 User Guide for Linux
   *                     Instances</i>.</p>
   *          </note>
   */
  KernelId?: string;

  /**
   * <p>The ID of the RAM disk to select.</p>
   *          <note>
   *             <p>We recommend that you use PV-GRUB instead of kernels and RAM disks. For more
   *                 information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedKernels.html">User provided
   *                     kernels</a> in the <i>Amazon EC2 User Guide for Linux
   *                     Instances</i>.</p>
   *          </note>
   */
  RamdiskId?: string;

  /**
   * <p>The block device mapping entries that define the block devices to attach to the
   *             instances at launch. By default, the block devices specified in the block device mapping
   *             for the AMI are used. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html">Block device
   *                 mappings</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * <p>Controls whether instances in this group are launched with detailed
   *             (<code>true</code>) or basic (<code>false</code>) monitoring.</p>
   *          <p>The default value is <code>true</code> (enabled).</p>
   *          <important>
   *             <p>When detailed monitoring is enabled, Amazon CloudWatch generates metrics every minute and
   *                 your account is charged a fee. When you disable detailed monitoring, CloudWatch generates
   *                 metrics every 5 minutes. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/latest/userguide/enable-as-instance-metrics.html">Configure
   *                     Monitoring for Auto Scaling Instances</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *          </important>
   */
  InstanceMonitoring?: InstanceMonitoring;

  /**
   * <p>The maximum hourly price to be paid for any Spot Instance launched to fulfill the
   *             request. Spot Instances are launched when the price you specify exceeds the current Spot
   *             price. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/launch-template-spot-instances.html">Request Spot
   *                 Instances for fault-tolerant and flexible applications</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *          <p>Valid Range: Minimum value of 0.001</p>
   *          <note>
   *             <p>When you change your maximum price by creating a new launch configuration, running
   *                 instances will continue to run as long as the maximum price for those running
   *                 instances is higher than the current Spot price.</p>
   *          </note>
   */
  SpotPrice?: string;

  /**
   * <p>The name or the Amazon Resource Name (ARN) of the instance profile associated with the
   *             IAM role for the instance. The instance profile contains the IAM role. For more
   *             information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/us-iam-role.html">IAM role for applications that run
   *                 on Amazon EC2 instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  IamInstanceProfile?: string;

  /**
   * <p>Specifies whether the launch configuration is optimized for EBS I/O
   *             (<code>true</code>) or not (<code>false</code>). The optimization provides dedicated
   *             throughput to Amazon EBS and an optimized configuration stack to provide optimal I/O
   *             performance. This optimization is not available with all instance types. Additional fees
   *             are incurred when you enable EBS optimization for an instance type that is not
   *             EBS-optimized by default. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSOptimized.html">Amazon EBS-optimized instances</a> in
   *             the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   *          <p>The default value is <code>false</code>.</p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>Specifies whether to assign a public IPv4 address to the group's instances. If the
   *             instance is launched into a default subnet, the default is to assign a public IPv4
   *             address, unless you disabled the option to assign a public IPv4 address on the subnet.
   *             If the instance is launched into a nondefault subnet, the default is not to assign a
   *             public IPv4 address, unless you enabled the option to assign a public IPv4 address on
   *             the subnet.</p>
   *          <p>If you specify <code>true</code>, each instance in the Auto Scaling group receives a unique
   *             public IPv4 address. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-in-vpc.html">Launching Auto Scaling instances in a
   *                 VPC</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *          <p>If you specify this property, you must specify at least one subnet for
   *                 <code>VPCZoneIdentifier</code> when you create your group.</p>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * <p>The tenancy of the instance, either <code>default</code> or <code>dedicated</code>. An
   *             instance with <code>dedicated</code> tenancy runs on isolated, single-tenant hardware
   *             and can only be launched into a VPC. To launch dedicated instances into a shared tenancy
   *             VPC (a VPC with the instance placement tenancy attribute set to <code>default</code>),
   *             you must set the value of this property to <code>dedicated</code>. For more information,
   *             see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-dedicated-instances.html">Configuring
   *                 instance tenancy with Amazon EC2 Auto Scaling</a> in the
   *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *          <p>If you specify <code>PlacementTenancy</code>, you must specify at least one subnet for
   *                 <code>VPCZoneIdentifier</code> when you create your group.</p>
   *          <p>Valid values: <code>default</code> | <code>dedicated</code>
   *          </p>
   */
  PlacementTenancy?: string;

  /**
   * <p>The metadata options for the instances. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-config.html#launch-configurations-imds">Configuring the Instance Metadata Options</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  MetadataOptions?: InstanceMetadataOptions;
}

export interface CreateOrUpdateTagsType {
  /**
   * <p>One or more tags.</p>
   */
  Tags: Tag[] | undefined;
}

/**
 * <p>The operation can't be performed because the resource is in use.</p>
 */
export class ResourceInUseFault extends __BaseException {
  readonly name: "ResourceInUseFault" = "ResourceInUseFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseFault, __BaseException>) {
    super({
      name: "ResourceInUseFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseFault.prototype);
  }
}

export interface DeleteAutoScalingGroupType {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>Specifies that the group is to be deleted along with all instances associated with the
   *             group, without waiting for all instances to be terminated. This action also deletes any
   *             outstanding lifecycle actions associated with the group.</p>
   */
  ForceDelete?: boolean;
}

/**
 * <p>The operation can't be performed because there are scaling activities in
 *             progress.</p>
 */
export class ScalingActivityInProgressFault extends __BaseException {
  readonly name: "ScalingActivityInProgressFault" = "ScalingActivityInProgressFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ScalingActivityInProgressFault, __BaseException>) {
    super({
      name: "ScalingActivityInProgressFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ScalingActivityInProgressFault.prototype);
  }
}

export interface LaunchConfigurationNameType {
  /**
   * <p>The name of the launch configuration.</p>
   */
  LaunchConfigurationName: string | undefined;
}

export interface DeleteLifecycleHookAnswer {}

export interface DeleteLifecycleHookType {
  /**
   * <p>The name of the lifecycle hook.</p>
   */
  LifecycleHookName: string | undefined;

  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;
}

export interface DeleteNotificationConfigurationType {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic.</p>
   */
  TopicARN: string | undefined;
}

export interface DeletePolicyType {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName?: string;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the policy.</p>
   */
  PolicyName: string | undefined;
}

export interface DeleteScheduledActionType {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The name of the action to delete.</p>
   */
  ScheduledActionName: string | undefined;
}

export interface DeleteTagsType {
  /**
   * <p>One or more tags.</p>
   */
  Tags: Tag[] | undefined;
}

export interface DeleteWarmPoolAnswer {}

export interface DeleteWarmPoolType {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>Specifies that the warm pool is to be deleted along with all of its associated
   *             instances, without waiting for all instances to be terminated. This parameter also
   *             deletes any outstanding lifecycle actions associated with the warm pool
   *             instances.</p>
   */
  ForceDelete?: boolean;
}

export interface DescribeAccountLimitsAnswer {
  /**
   * <p>The maximum number of groups allowed for your account. The default is 200 groups per
   *             Region.</p>
   */
  MaxNumberOfAutoScalingGroups?: number;

  /**
   * <p>The maximum number of launch configurations allowed for your account. The default is
   *             200 launch configurations per Region.</p>
   */
  MaxNumberOfLaunchConfigurations?: number;

  /**
   * <p>The current number of groups for your account.</p>
   */
  NumberOfAutoScalingGroups?: number;

  /**
   * <p>The current number of launch configurations for your account.</p>
   */
  NumberOfLaunchConfigurations?: number;
}

export interface DescribeAdjustmentTypesAnswer {
  /**
   * <p>The policy adjustment types.</p>
   */
  AdjustmentTypes?: AdjustmentType[];
}

/**
 * <p>Describes a filter that is used to return a more specific list of results from a
 *             describe operation.</p>
 *          <p>If you specify multiple filters, the filters are automatically logically joined with
 *             an <code>AND</code>, and the request returns only the results that match all of the
 *             specified filters. </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-tagging.html">Tag Auto Scaling groups and
 *                 instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 */
export interface Filter {
  /**
   * <p>The name of the filter.</p>
   *          <p>The valid values for <code>Name</code> depend on which API operation you're using with
   *             the filter (<a>DescribeAutoScalingGroups</a> or <a>DescribeTags</a>).</p>
   *          <p>
   *             <b>DescribeAutoScalingGroups</b>
   *          </p>
   *          <p>Valid values for <code>Name</code> include the following: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>tag-key</code> - Accepts tag keys. The results only include information
   *                     about the Auto Scaling groups associated with these tag keys. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag-value</code> - Accepts tag values. The results only include
   *                     information about the Auto Scaling groups associated with these tag values. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>tag:<key></code> - Accepts the key/value combination of the tag.
   *                     Use the tag key in the filter name and the tag value as the filter value. The
   *                     results only include information about the Auto Scaling groups associated with the
   *                     specified key/value combination. </p>
   *             </li>
   *          </ul>
   *          <p>
   *             <b>DescribeTags</b>
   *          </p>
   *          <p>Valid values for <code>Name</code> include the following: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>auto-scaling-group</code> - Accepts the names of Auto Scaling groups. The
   *                     results only include information about the tags associated with these Auto Scaling
   *                     groups. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>key</code> - Accepts tag keys. The results only include information
   *                     about the tags associated with these tag keys. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>value</code> - Accepts tag values. The results only include information
   *                     about the tags associated with these tag values. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>propagate-at-launch</code> - Accepts a Boolean value, which specifies
   *                     whether tags propagate to instances at launch. The results only include
   *                     information about the tags associated with the specified Boolean value. </p>
   *             </li>
   *          </ul>
   */
  Name?: string;

  /**
   * <p>One or more filter values. Filter values are case-sensitive. </p>
   *          <p>If you specify multiple values for a filter, the values are automatically logically
   *             joined with an <code>OR</code>, and the request returns all results that match any of
   *             the specified values. For example, specify "tag:environment" for the filter name and
   *             "production,development" for the filter values to find Auto Scaling groups with the tag
   *             "environment=production" or "environment=development".</p>
   */
  Values?: string[];
}

export interface AutoScalingGroupNamesType {
  /**
   * <p>The names of the Auto Scaling groups. By default, you can only specify up to 50 names. You can
   *             optionally increase this limit using the <code>MaxRecords</code> property.</p>
   *          <p>If you omit this property, all Auto Scaling groups are described.</p>
   */
  AutoScalingGroupNames?: string[];

  /**
   * <p>The token for the next set of items to return. (You received this token from a
   *             previous call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return with this call. The default value is
   *                 <code>50</code> and the maximum value is <code>100</code>.</p>
   */
  MaxRecords?: number;

  /**
   * <p>One or more filters to limit the results based on specific tags.
   *             </p>
   */
  Filters?: Filter[];
}

/**
 * <p>Describes an enabled Auto Scaling group metric.</p>
 */
export interface EnabledMetric {
  /**
   * <p>One of the following metrics:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>GroupMinSize</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupMaxSize</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupDesiredCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupInServiceInstances</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupPendingInstances</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupStandbyInstances</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupTerminatingInstances</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupTotalInstances</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupInServiceCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupPendingCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupStandbyCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupTerminatingCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupTotalCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WarmPoolDesiredCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WarmPoolWarmedCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WarmPoolPendingCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WarmPoolTerminatingCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WarmPoolTotalCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupAndWarmPoolDesiredCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupAndWarmPoolTotalCapacity</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-cloudwatch-monitoring.html#as-group-metrics">Auto Scaling group metrics</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  Metric?: string;

  /**
   * <p>The granularity of the metric. The only valid value is <code>1Minute</code>.</p>
   */
  Granularity?: string;
}

export enum LifecycleState {
  DETACHED = "Detached",
  DETACHING = "Detaching",
  ENTERING_STANDBY = "EnteringStandby",
  IN_SERVICE = "InService",
  PENDING = "Pending",
  PENDING_PROCEED = "Pending:Proceed",
  PENDING_WAIT = "Pending:Wait",
  QUARANTINED = "Quarantined",
  STANDBY = "Standby",
  TERMINATED = "Terminated",
  TERMINATING = "Terminating",
  TERMINATING_PROCEED = "Terminating:Proceed",
  TERMINATING_WAIT = "Terminating:Wait",
  WARMED_HIBERNATED = "Warmed:Hibernated",
  WARMED_PENDING = "Warmed:Pending",
  WARMED_PENDING_PROCEED = "Warmed:Pending:Proceed",
  WARMED_PENDING_WAIT = "Warmed:Pending:Wait",
  WARMED_RUNNING = "Warmed:Running",
  WARMED_STOPPED = "Warmed:Stopped",
  WARMED_TERMINATED = "Warmed:Terminated",
  WARMED_TERMINATING = "Warmed:Terminating",
  WARMED_TERMINATING_PROCEED = "Warmed:Terminating:Proceed",
  WARMED_TERMINATING_WAIT = "Warmed:Terminating:Wait",
}

/**
 * <p>Describes an EC2 instance.</p>
 */
export interface Instance {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The instance type of the EC2 instance.</p>
   */
  InstanceType?: string;

  /**
   * <p>The Availability Zone in which the instance is running.</p>
   */
  AvailabilityZone: string | undefined;

  /**
   * <p>A description of the current lifecycle state. The <code>Quarantined</code> state is
   *             not used. For information about lifecycle states, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroupLifecycle.html">Instance
   *                 lifecycle</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
   */
  LifecycleState: LifecycleState | string | undefined;

  /**
   * <p>The last reported health status of the instance. "Healthy" means that the instance is
   *             healthy and should remain in service. "Unhealthy" means that the instance is unhealthy
   *             and that Amazon EC2 Auto Scaling should terminate and replace it.</p>
   */
  HealthStatus: string | undefined;

  /**
   * <p>The launch configuration associated with the instance.</p>
   */
  LaunchConfigurationName?: string;

  /**
   * <p>The launch template for the instance.</p>
   */
  LaunchTemplate?: LaunchTemplateSpecification;

  /**
   * <p>Indicates whether the instance is protected from termination by Amazon EC2 Auto Scaling when scaling
   *             in.</p>
   */
  ProtectedFromScaleIn: boolean | undefined;

  /**
   * <p>The number of capacity units contributed by the instance based on its instance
   *             type.</p>
   *          <p>Valid Range: Minimum value of 1. Maximum value of 999.</p>
   */
  WeightedCapacity?: string;
}

/**
 * <p>Describes an auto scaling process that has been suspended.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html#process-types">Scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 */
export interface SuspendedProcess {
  /**
   * <p>The name of the suspended process.</p>
   */
  ProcessName?: string;

  /**
   * <p>The reason that the process was suspended.</p>
   */
  SuspensionReason?: string;
}

/**
 * <p>Describes a tag for an Auto Scaling group.</p>
 */
export interface TagDescription {
  /**
   * <p>The name of the group.</p>
   */
  ResourceId?: string;

  /**
   * <p>The type of resource. The only supported value is
   *             <code>auto-scaling-group</code>.</p>
   */
  ResourceType?: string;

  /**
   * <p>The tag key.</p>
   */
  Key?: string;

  /**
   * <p>The tag value.</p>
   */
  Value?: string;

  /**
   * <p>Determines whether the tag is added to new instances as they are launched in the
   *             group.</p>
   */
  PropagateAtLaunch?: boolean;
}

/**
 * <p>Describes an instance reuse policy for a warm pool. </p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html">Warm pools for
 *                 Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 */
export interface InstanceReusePolicy {
  /**
   * <p>Specifies whether instances in the Auto Scaling group can be returned to the warm pool on
   *             scale in. </p>
   */
  ReuseOnScaleIn?: boolean;
}

export enum WarmPoolState {
  Hibernated = "Hibernated",
  Running = "Running",
  Stopped = "Stopped",
}

export enum WarmPoolStatus {
  PendingDelete = "PendingDelete",
}

/**
 * <p>Describes a warm pool configuration. </p>
 */
export interface WarmPoolConfiguration {
  /**
   * <p>The maximum number of instances that are allowed to be in the warm pool or in any
   *             state except <code>Terminated</code> for the Auto Scaling group.</p>
   */
  MaxGroupPreparedCapacity?: number;

  /**
   * <p>The minimum number of instances to maintain in the warm pool.</p>
   */
  MinSize?: number;

  /**
   * <p>The instance state to transition to after the lifecycle actions are complete.</p>
   */
  PoolState?: WarmPoolState | string;

  /**
   * <p>The status of a warm pool that is marked for deletion.</p>
   */
  Status?: WarmPoolStatus | string;

  /**
   * <p>The instance reuse policy.</p>
   */
  InstanceReusePolicy?: InstanceReusePolicy;
}

/**
 * <p>Describes an Auto Scaling group.</p>
 */
export interface AutoScalingGroup {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Auto Scaling group.</p>
   */
  AutoScalingGroupARN?: string;

  /**
   * <p>The name of the associated launch configuration.</p>
   */
  LaunchConfigurationName?: string;

  /**
   * <p>The launch template for the group.</p>
   */
  LaunchTemplate?: LaunchTemplateSpecification;

  /**
   * <p>The mixed instances policy for the group.</p>
   */
  MixedInstancesPolicy?: MixedInstancesPolicy;

  /**
   * <p>The minimum size of the group.</p>
   */
  MinSize: number | undefined;

  /**
   * <p>The maximum size of the group.</p>
   */
  MaxSize: number | undefined;

  /**
   * <p>The desired size of the group.</p>
   */
  DesiredCapacity: number | undefined;

  /**
   * <p>The predicted capacity of the group when it has a predictive scaling policy.</p>
   */
  PredictedCapacity?: number;

  /**
   * <p>The duration of the default cooldown period, in seconds.</p>
   */
  DefaultCooldown: number | undefined;

  /**
   * <p>One or more Availability Zones for the group.</p>
   */
  AvailabilityZones: string[] | undefined;

  /**
   * <p>One or more load balancers associated with the group.</p>
   */
  LoadBalancerNames?: string[];

  /**
   * <p>The Amazon Resource Names (ARN) of the target groups for your load balancer.</p>
   */
  TargetGroupARNs?: string[];

  /**
   * <p>Determines whether any additional health checks are performed on the instances in this
   *             group. Amazon EC2 health checks are always on.</p>
   *          <p>The valid values are <code>EC2</code> (default), <code>ELB</code>, and
   *                 <code>VPC_LATTICE</code>. The <code>VPC_LATTICE</code> health check type is reserved
   *             for use with VPC Lattice, which is in preview release and is subject to change.</p>
   */
  HealthCheckType: string | undefined;

  /**
   * <p>The duration of the health check grace period, in seconds.</p>
   */
  HealthCheckGracePeriod?: number;

  /**
   * <p>The EC2 instances associated with the group.</p>
   */
  Instances?: Instance[];

  /**
   * <p>The date and time the group was created.</p>
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The suspended processes associated with the group.</p>
   */
  SuspendedProcesses?: SuspendedProcess[];

  /**
   * <p>The name of the placement group into which to launch your instances, if any.</p>
   */
  PlacementGroup?: string;

  /**
   * <p>One or more subnet IDs, if applicable, separated by commas.</p>
   */
  VPCZoneIdentifier?: string;

  /**
   * <p>The metrics enabled for the group.</p>
   */
  EnabledMetrics?: EnabledMetric[];

  /**
   * <p>The current state of the group when the <a>DeleteAutoScalingGroup</a>
   *             operation is in progress.</p>
   */
  Status?: string;

  /**
   * <p>The tags for the group.</p>
   */
  Tags?: TagDescription[];

  /**
   * <p>The termination policies for the group.</p>
   */
  TerminationPolicies?: string[];

  /**
   * <p>Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling
   *             when scaling in.</p>
   */
  NewInstancesProtectedFromScaleIn?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to
   *             call other Amazon Web Services on your behalf.</p>
   */
  ServiceLinkedRoleARN?: string;

  /**
   * <p>The maximum amount of time, in seconds, that an instance can be in service.</p>
   *          <p>Valid Range: Minimum value of 0.</p>
   */
  MaxInstanceLifetime?: number;

  /**
   * <p>Indicates whether Capacity Rebalancing is enabled.</p>
   */
  CapacityRebalance?: boolean;

  /**
   * <p>The warm pool for the group.</p>
   */
  WarmPoolConfiguration?: WarmPoolConfiguration;

  /**
   * <p>The current size of the warm pool.</p>
   */
  WarmPoolSize?: number;

  /**
   * <p>Reserved.</p>
   */
  Context?: string;

  /**
   * <p>The unit of measurement for the value specified for desired capacity. Amazon EC2 Auto Scaling
   *             supports <code>DesiredCapacityType</code> for attribute-based instance type selection
   *             only.</p>
   */
  DesiredCapacityType?: string;

  /**
   * <p>The duration of the default instance warmup, in seconds.</p>
   */
  DefaultInstanceWarmup?: number;

  /**
   * <p>The unique identifiers of the traffic sources.</p>
   */
  TrafficSources?: TrafficSourceIdentifier[];
}

export interface AutoScalingGroupsType {
  /**
   * <p>The groups.</p>
   */
  AutoScalingGroups: AutoScalingGroup[] | undefined;

  /**
   * <p>A string that indicates that the response contains more items than can be returned in
   *             a single response. To receive additional items, specify this string for the
   *                 <code>NextToken</code> value when requesting the next set of items. This value is
   *             null when there are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * <p>The <code>NextToken</code> value is not valid.</p>
 */
export class InvalidNextToken extends __BaseException {
  readonly name: "InvalidNextToken" = "InvalidNextToken";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidNextToken, __BaseException>) {
    super({
      name: "InvalidNextToken",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidNextToken.prototype);
  }
}

/**
 * <p>Describes an EC2 instance associated with an Auto Scaling group.</p>
 */
export interface AutoScalingInstanceDetails {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The instance type of the EC2 instance.</p>
   */
  InstanceType?: string;

  /**
   * <p>The name of the Auto Scaling group for the instance.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The Availability Zone for the instance.</p>
   */
  AvailabilityZone: string | undefined;

  /**
   * <p>The lifecycle state for the instance. The <code>Quarantined</code> state is not used.
   *             For information about lifecycle states, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/AutoScalingGroupLifecycle.html">Instance
   *                 lifecycle</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>. </p>
   *          <p>Valid values: <code>Pending</code> | <code>Pending:Wait</code> |
   *                 <code>Pending:Proceed</code> | <code>Quarantined</code> | <code>InService</code> |
   *                 <code>Terminating</code> | <code>Terminating:Wait</code> |
   *                 <code>Terminating:Proceed</code> | <code>Terminated</code> | <code>Detaching</code>
   *             | <code>Detached</code> | <code>EnteringStandby</code> | <code>Standby</code> |
   *                 <code>Warmed:Pending</code> | <code>Warmed:Pending:Wait</code> |
   *                 <code>Warmed:Pending:Proceed</code> | <code>Warmed:Terminating</code> |
   *                 <code>Warmed:Terminating:Wait</code> | <code>Warmed:Terminating:Proceed</code> |
   *                 <code>Warmed:Terminated</code> | <code>Warmed:Stopped</code> |
   *                 <code>Warmed:Running</code>
   *          </p>
   */
  LifecycleState: string | undefined;

  /**
   * <p>The last reported health status of this instance. "Healthy" means that the instance is
   *             healthy and should remain in service. "Unhealthy" means that the instance is unhealthy
   *             and Amazon EC2 Auto Scaling should terminate and replace it.</p>
   */
  HealthStatus: string | undefined;

  /**
   * <p>The launch configuration used to launch the instance. This value is not available if
   *             you attached the instance to the Auto Scaling group.</p>
   */
  LaunchConfigurationName?: string;

  /**
   * <p>The launch template for the instance.</p>
   */
  LaunchTemplate?: LaunchTemplateSpecification;

  /**
   * <p>Indicates whether the instance is protected from termination by Amazon EC2 Auto Scaling when scaling
   *             in.</p>
   */
  ProtectedFromScaleIn: boolean | undefined;

  /**
   * <p>The number of capacity units contributed by the instance based on its instance
   *             type.</p>
   *          <p>Valid Range: Minimum value of 1. Maximum value of 999.</p>
   */
  WeightedCapacity?: string;
}

export interface AutoScalingInstancesType {
  /**
   * <p>The instances.</p>
   */
  AutoScalingInstances?: AutoScalingInstanceDetails[];

  /**
   * <p>A string that indicates that the response contains more items than can be returned in
   *             a single response. To receive additional items, specify this string for the
   *                 <code>NextToken</code> value when requesting the next set of items. This value is
   *             null when there are no more items to return.</p>
   */
  NextToken?: string;
}

export interface DescribeAutoScalingInstancesType {
  /**
   * <p>The IDs of the instances. If you omit this property, all Auto Scaling instances are described.
   *             If you specify an ID that does not exist, it is ignored with no error.</p>
   *          <p>Array Members: Maximum number of 50 items.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>The maximum number of items to return with this call. The default value is
   *                 <code>50</code> and the maximum value is <code>50</code>.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a
   *             previous call.)</p>
   */
  NextToken?: string;
}

export interface DescribeAutoScalingNotificationTypesAnswer {
  /**
   * <p>The notification types.</p>
   */
  AutoScalingNotificationTypes?: string[];
}

/**
 * <p>Describes the desired configuration for an instance refresh. </p>
 *          <p>If you specify a desired configuration, you must specify either a
 *                 <code>LaunchTemplate</code> or a <code>MixedInstancesPolicy</code>. </p>
 */
export interface DesiredConfiguration {
  /**
   * <p>Describes the launch template and the version of the launch template that Amazon EC2 Auto Scaling
   *             uses to launch Amazon EC2 instances. For more information about launch templates, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/LaunchTemplates.html">Launch
   *                 templates</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  LaunchTemplate?: LaunchTemplateSpecification;

  /**
   * <p>Use this structure to launch multiple instance types and On-Demand Instances and Spot
   *             Instances within a single Auto Scaling group.</p>
   *          <p>A mixed instances policy contains information that Amazon EC2 Auto Scaling can use to launch
   *             instances and help optimize your costs. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html">Auto Scaling
   *                 groups with multiple instance types and purchase options</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  MixedInstancesPolicy?: MixedInstancesPolicy;
}

/**
 * <p>Describes the preferences for an instance refresh.</p>
 */
export interface RefreshPreferences {
  /**
   * <p>The amount of capacity in the Auto Scaling group that must pass your group's health checks to
   *             allow the operation to continue. The value is expressed as a percentage of the desired
   *             capacity of the Auto Scaling group (rounded up to the nearest integer). The default is
   *                 <code>90</code>.</p>
   *          <p>Setting the minimum healthy percentage to 100 percent limits the rate of replacement
   *             to one instance at a time. In contrast, setting it to 0 percent has the effect of
   *             replacing all instances at the same time. </p>
   */
  MinHealthyPercentage?: number;

  /**
   * <p>
   *             <i>Not needed if the default instance warmup is defined for the
   *                 group.</i>
   *          </p>
   *          <p>The duration of the instance warmup, in seconds.</p>
   *          <note>
   *             <p>The default is to use the value for the default instance warmup defined for the
   *                 group. If default instance warmup is null, then <code>InstanceWarmup</code> falls
   *                 back to the value of the health check grace period.</p>
   *          </note>
   */
  InstanceWarmup?: number;

  /**
   * <p>Threshold values for each checkpoint in ascending order. Each number must be unique.
   *             To replace all instances in the Auto Scaling group, the last number in the array must be
   *                 <code>100</code>.</p>
   *          <p>For usage examples, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-adding-checkpoints-instance-refresh.html">Adding
   *                 checkpoints to an instance refresh</a> in the
   *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  CheckpointPercentages?: number[];

  /**
   * <p>The amount of time, in seconds, to wait after a checkpoint before continuing. This
   *             property is optional, but if you specify a value for it, you must also specify a value
   *             for <code>CheckpointPercentages</code>. If you specify a value for
   *                 <code>CheckpointPercentages</code> and not for <code>CheckpointDelay</code>, the
   *                 <code>CheckpointDelay</code> defaults to <code>3600</code> (1 hour). </p>
   */
  CheckpointDelay?: number;

  /**
   * <p>A boolean value that indicates whether skip matching is enabled. If true, then
   *             Amazon EC2 Auto Scaling skips replacing instances that match the desired configuration. If no desired
   *             configuration is specified, then it skips replacing instances that have the same
   *             configuration that is already set on the group. The default is
   *             <code>false</code>.</p>
   */
  SkipMatching?: boolean;
}

/**
 * <p>Reports the progress of an instance refresh on instances that are in the Auto Scaling
 *             group.</p>
 */
export interface InstanceRefreshLivePoolProgress {
  /**
   * <p>The percentage of instances in the Auto Scaling group that have been replaced. For each
   *             instance replacement, Amazon EC2 Auto Scaling tracks the instance's health status and warm-up time.
   *             When the instance's health status changes to healthy and the specified warm-up time
   *             passes, the instance is considered updated and is added to the percentage
   *             complete.</p>
   */
  PercentageComplete?: number;

  /**
   * <p>The number of instances remaining to update.</p>
   */
  InstancesToUpdate?: number;
}

/**
 * <p>Reports the progress of an instance refresh on instances that are in the warm
 *             pool.</p>
 */
export interface InstanceRefreshWarmPoolProgress {
  /**
   * <p>The percentage of instances in the warm pool that have been replaced. For each
   *             instance replacement, Amazon EC2 Auto Scaling tracks the instance's health status and warm-up time.
   *             When the instance's health status changes to healthy and the specified warm-up time
   *             passes, the instance is considered updated and is added to the percentage
   *             complete.</p>
   */
  PercentageComplete?: number;

  /**
   * <p>The number of instances remaining to update.</p>
   */
  InstancesToUpdate?: number;
}

/**
 * <p>Reports the progress of an instance refresh on an Auto Scaling group that has a warm pool.
 *             This includes separate details for instances in the warm pool and instances in the Auto Scaling
 *             group (the live pool).</p>
 */
export interface InstanceRefreshProgressDetails {
  /**
   * <p>Indicates the progress of an instance refresh on instances that are in the Auto Scaling
   *             group.</p>
   */
  LivePoolProgress?: InstanceRefreshLivePoolProgress;

  /**
   * <p>Indicates the progress of an instance refresh on instances that are in the warm
   *             pool.</p>
   */
  WarmPoolProgress?: InstanceRefreshWarmPoolProgress;
}

export enum InstanceRefreshStatus {
  Cancelled = "Cancelled",
  Cancelling = "Cancelling",
  Failed = "Failed",
  InProgress = "InProgress",
  Pending = "Pending",
  Successful = "Successful",
}

/**
 * <p>Describes an instance refresh for an Auto Scaling group. </p>
 */
export interface InstanceRefresh {
  /**
   * <p>The instance refresh ID.</p>
   */
  InstanceRefreshId?: string;

  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName?: string;

  /**
   * <p>The current status for the instance refresh operation:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Pending</code> - The request was created, but the operation has not
   *                     started.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InProgress</code> - The operation is in progress.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Successful</code> - The operation completed successfully.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Failed</code> - The operation failed to complete. You can troubleshoot
   *                     using the status reason and the scaling activities. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Cancelling</code> - An ongoing operation is being cancelled.
   *                     Cancellation does not roll back any replacements that have already been
   *                     completed, but it prevents new replacements from being started. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Cancelled</code> - The operation is cancelled. </p>
   *             </li>
   *          </ul>
   */
  Status?: InstanceRefreshStatus | string;

  /**
   * <p>Provides more details about the current status of the instance refresh. </p>
   */
  StatusReason?: string;

  /**
   * <p>The date and time at which the instance refresh began.</p>
   */
  StartTime?: Date;

  /**
   * <p>The date and time at which the instance refresh ended.</p>
   */
  EndTime?: Date;

  /**
   * <p>The percentage of the instance refresh that is complete. For each instance
   *             replacement, Amazon EC2 Auto Scaling tracks the instance's health status and warm-up time. When the
   *             instance's health status changes to healthy and the specified warm-up time passes, the
   *             instance is considered updated and is added to the percentage complete.</p>
   */
  PercentageComplete?: number;

  /**
   * <p>The number of instances remaining to update before the instance refresh is
   *             complete.</p>
   */
  InstancesToUpdate?: number;

  /**
   * <p>Additional progress details for an Auto Scaling group that has a warm pool.</p>
   */
  ProgressDetails?: InstanceRefreshProgressDetails;

  /**
   * <p>Describes the preferences for an instance refresh.</p>
   */
  Preferences?: RefreshPreferences;

  /**
   * <p>Describes the specific update you want to deploy.</p>
   */
  DesiredConfiguration?: DesiredConfiguration;
}

export interface DescribeInstanceRefreshesAnswer {
  /**
   * <p>The instance refreshes for the specified group, sorted by creation timestamp in descending order.</p>
   */
  InstanceRefreshes?: InstanceRefresh[];

  /**
   * <p>A string that indicates that the response contains more items than can be returned in
   *             a single response. To receive additional items, specify this string for the
   *                 <code>NextToken</code> value when requesting the next set of items. This value is
   *             null when there are no more items to return.</p>
   */
  NextToken?: string;
}

export interface DescribeInstanceRefreshesType {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>One or more instance refresh IDs.</p>
   */
  InstanceRefreshIds?: string[];

  /**
   * <p>The token for the next set of items to return. (You received this token from a
   *             previous call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return with this call. The default value is
   *                 <code>50</code> and the maximum value is <code>100</code>.</p>
   */
  MaxRecords?: number;
}

export interface LaunchConfigurationNamesType {
  /**
   * <p>The launch configuration names. If you omit this property, all launch configurations
   *             are described.</p>
   *          <p>Array Members: Maximum number of 50 items.</p>
   */
  LaunchConfigurationNames?: string[];

  /**
   * <p>The token for the next set of items to return. (You received this token from a
   *             previous call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return with this call. The default value is
   *                 <code>50</code> and the maximum value is <code>100</code>.</p>
   */
  MaxRecords?: number;
}

/**
 * <p>Describes a launch configuration.</p>
 */
export interface LaunchConfiguration {
  /**
   * <p>The name of the launch configuration.</p>
   */
  LaunchConfigurationName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the launch configuration.</p>
   */
  LaunchConfigurationARN?: string;

  /**
   * <p>The ID of the Amazon Machine Image (AMI) to use to launch your EC2 instances. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/finding-an-ami.html">Find a Linux AMI</a> in the
   *                 <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>The name of the key pair.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Amazon EC2 Key Pairs</a> in the
   *                 <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  KeyName?: string;

  /**
   * <p>A list that contains the security groups to assign to the instances in the Auto Scaling group.
   *             For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html">Security Groups for Your
   *                 VPC</a> in the <i>Amazon Virtual Private Cloud User
   *             Guide</i>.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>Available for backward compatibility.</p>
   */
  ClassicLinkVPCId?: string;

  /**
   * <p>Available for backward compatibility.</p>
   */
  ClassicLinkVPCSecurityGroups?: string[];

  /**
   * <p>The user data to make available to the launched EC2 instances. For more information,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance metadata and user data</a> (Linux) and <a href="https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-instance-metadata.html">Instance metadata and
   *                 user data</a> (Windows). If you are using a command line tool, base64-encoding
   *             is performed for you, and you can load the text from a file. Otherwise, you must provide
   *             base64-encoded text. User data is limited to 16 KB.</p>
   */
  UserData?: string;

  /**
   * <p>The instance type for the instances. For information about available instance types,
   *             see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#AvailableInstanceTypes">Available
   *                 instance types</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  InstanceType: string | undefined;

  /**
   * <p>The ID of the kernel associated with the AMI.</p>
   */
  KernelId?: string;

  /**
   * <p>The ID of the RAM disk associated with the AMI.</p>
   */
  RamdiskId?: string;

  /**
   * <p>The block device mapping entries that define the block devices to attach to the
   *             instances at launch. By default, the block devices specified in the block device mapping
   *             for the AMI are used. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html">Block Device
   *                 Mapping</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * <p>Controls whether instances in this group are launched with detailed
   *             (<code>true</code>) or basic (<code>false</code>) monitoring.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/latest/userguide/enable-as-instance-metrics.html">Configure
   *                 Monitoring for Auto Scaling Instances</a> in the
   *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  InstanceMonitoring?: InstanceMonitoring;

  /**
   * <p>The maximum hourly price to be paid for any Spot Instance launched to fulfill the
   *             request. Spot Instances are launched when the price you specify exceeds the current Spot
   *             price. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-launch-spot-instances.html">Requesting Spot
   *                 Instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  SpotPrice?: string;

  /**
   * <p>The name or the Amazon Resource Name (ARN) of the instance profile associated with the
   *             IAM role for the instance. The instance profile contains the IAM role. For more
   *             information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/us-iam-role.html">IAM role for applications that run
   *                 on Amazon EC2 instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  IamInstanceProfile?: string;

  /**
   * <p>The creation date and time for the launch configuration.</p>
   */
  CreatedTime: Date | undefined;

  /**
   * <p>Specifies whether the launch configuration is optimized for EBS I/O
   *             (<code>true</code>) or not (<code>false</code>). For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSOptimized.html">Amazon
   *                 EBS-Optimized Instances</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>Specifies whether to assign a public IPv4 address to the group's instances. If the
   *             instance is launched into a default subnet, the default is to assign a public IPv4
   *             address, unless you disabled the option to assign a public IPv4 address on the subnet.
   *             If the instance is launched into a nondefault subnet, the default is not to assign a
   *             public IPv4 address, unless you enabled the option to assign a public IPv4 address on
   *             the subnet. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-in-vpc.html">Launching Auto Scaling instances in a
   *                 VPC</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * <p>The tenancy of the instance, either <code>default</code> or <code>dedicated</code>. An
   *             instance with <code>dedicated</code> tenancy runs on isolated, single-tenant hardware
   *             and can only be launched into a VPC.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/auto-scaling-dedicated-instances.html">Configuring
   *                 instance tenancy with Amazon EC2 Auto Scaling</a> in the
   *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  PlacementTenancy?: string;

  /**
   * <p>The metadata options for the instances. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-config.html#launch-configurations-imds">Configuring the Instance Metadata Options</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  MetadataOptions?: InstanceMetadataOptions;
}

export interface LaunchConfigurationsType {
  /**
   * <p>The launch configurations.</p>
   */
  LaunchConfigurations: LaunchConfiguration[] | undefined;

  /**
   * <p>A string that indicates that the response contains more items than can be returned in
   *             a single response. To receive additional items, specify this string for the
   *                 <code>NextToken</code> value when requesting the next set of items. This value is
   *             null when there are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * <p>Describes a lifecycle hook. A lifecycle hook lets you create solutions that are aware
 *             of events in the Auto Scaling instance lifecycle, and then perform a custom action on instances
 *             when the corresponding lifecycle event
 *             occurs.</p>
 */
export interface LifecycleHook {
  /**
   * <p>The name of the lifecycle hook.</p>
   */
  LifecycleHookName?: string;

  /**
   * <p>The name of the Auto Scaling group for the lifecycle hook.</p>
   */
  AutoScalingGroupName?: string;

  /**
   * <p>The lifecycle transition.</p>
   *          <p>Valid values: <code>autoscaling:EC2_INSTANCE_LAUNCHING</code> |
   *                 <code>autoscaling:EC2_INSTANCE_TERMINATING</code>
   *          </p>
   */
  LifecycleTransition?: string;

  /**
   * <p>The ARN of the target that Amazon EC2 Auto Scaling sends notifications to when an instance is in a
   *             wait state for the lifecycle hook.</p>
   */
  NotificationTargetARN?: string;

  /**
   * <p>The ARN of the IAM role that allows the Auto Scaling group to publish to the specified
   *             notification target (an Amazon SNS topic or an Amazon SQS queue).</p>
   */
  RoleARN?: string;

  /**
   * <p>Additional information that is included any time Amazon EC2 Auto Scaling sends a message to the
   *             notification target.</p>
   */
  NotificationMetadata?: string;

  /**
   * <p>The maximum time, in seconds, that can elapse before the lifecycle hook times out. If
   *             the lifecycle hook times out, Amazon EC2 Auto Scaling performs the action that you specified in the
   *                 <code>DefaultResult</code> property.</p>
   */
  HeartbeatTimeout?: number;

  /**
   * <p>The maximum time, in seconds, that an instance can remain in a wait state. The maximum
   *             is 172800 seconds (48 hours) or 100 times <code>HeartbeatTimeout</code>, whichever is
   *             smaller.</p>
   */
  GlobalTimeout?: number;

  /**
   * <p>The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an
   *             unexpected failure occurs.</p>
   *          <p>Valid values: <code>CONTINUE</code> | <code>ABANDON</code>
   *          </p>
   */
  DefaultResult?: string;
}

export interface DescribeLifecycleHooksAnswer {
  /**
   * <p>The lifecycle hooks for the specified group.</p>
   */
  LifecycleHooks?: LifecycleHook[];
}

export interface DescribeLifecycleHooksType {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The names of one or more lifecycle hooks. If you omit this property, all lifecycle
   *             hooks are described.</p>
   */
  LifecycleHookNames?: string[];
}

export interface DescribeLifecycleHookTypesAnswer {
  /**
   * <p>The lifecycle hook types.</p>
   */
  LifecycleHookTypes?: string[];
}

export interface DescribeLoadBalancersRequest {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a
   *             previous call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return with this call. The default value is
   *                 <code>100</code> and the maximum value is <code>100</code>.</p>
   */
  MaxRecords?: number;
}

/**
 * <p>Describes the state of a Classic Load Balancer.</p>
 */
export interface LoadBalancerState {
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName?: string;

  /**
   * <p>One of the following load balancer states:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Adding</code> - The Auto Scaling instances are being registered with the load
   *                     balancer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Added</code> - All Auto Scaling instances are registered with the load
   *                     balancer.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InService</code> - At least one Auto Scaling instance passed an <code>ELB</code>
   *                     health check.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Removing</code> - The Auto Scaling instances are being deregistered from the
   *                     load balancer. If connection draining is enabled, Elastic Load Balancing waits for in-flight
   *                     requests to complete before deregistering the instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Removed</code> - All Auto Scaling instances are deregistered from the load
   *                     balancer.</p>
   *             </li>
   *          </ul>
   */
  State?: string;
}

export interface DescribeLoadBalancersResponse {
  /**
   * <p>The load balancers.</p>
   */
  LoadBalancers?: LoadBalancerState[];

  /**
   * <p>A string that indicates that the response contains more items than can be returned in
   *             a single response. To receive additional items, specify this string for the
   *                 <code>NextToken</code> value when requesting the next set of items. This value is
   *             null when there are no more items to return.</p>
   */
  NextToken?: string;
}

export interface DescribeLoadBalancerTargetGroupsRequest {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a
   *             previous call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return with this call. The default value is
   *                 <code>100</code> and the maximum value is <code>100</code>.</p>
   */
  MaxRecords?: number;
}

/**
 * <p>Describes the state of a target group.</p>
 */
export interface LoadBalancerTargetGroupState {
  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  LoadBalancerTargetGroupARN?: string;

  /**
   * <p>The state of the target group.</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Adding</code> - The Auto Scaling instances are being registered with the target
   *                     group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Added</code> - All Auto Scaling instances are registered with the target
   *                     group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InService</code> - At least one Auto Scaling instance passed an <code>ELB</code>
   *                     health check.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Removing</code> - The Auto Scaling instances are being deregistered from the
   *                     target group. If connection draining is enabled, Elastic Load Balancing waits for in-flight
   *                     requests to complete before deregistering the instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Removed</code> - All Auto Scaling instances are deregistered from the target
   *                     group.</p>
   *             </li>
   *          </ul>
   */
  State?: string;
}

export interface DescribeLoadBalancerTargetGroupsResponse {
  /**
   * <p>Information about the target groups.</p>
   */
  LoadBalancerTargetGroups?: LoadBalancerTargetGroupState[];

  /**
   * <p>A string that indicates that the response contains more items than can be returned in
   *             a single response. To receive additional items, specify this string for the
   *                 <code>NextToken</code> value when requesting the next set of items. This value is
   *             null when there are no more items to return.</p>
   */
  NextToken?: string;
}

/**
 * <p>Describes a granularity of a metric.</p>
 */
export interface MetricGranularityType {
  /**
   * <p>The granularity. The only valid value is <code>1Minute</code>.</p>
   */
  Granularity?: string;
}

/**
 * <p>Describes a metric.</p>
 */
export interface MetricCollectionType {
  /**
   * <p>One of the following metrics:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>GroupMinSize</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupMaxSize</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupDesiredCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupInServiceInstances</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupPendingInstances</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupStandbyInstances</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupTerminatingInstances</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupTotalInstances</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupInServiceCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupPendingCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupStandbyCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupTerminatingCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupTotalCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WarmPoolDesiredCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WarmPoolWarmedCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WarmPoolPendingCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WarmPoolTerminatingCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WarmPoolTotalCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupAndWarmPoolDesiredCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupAndWarmPoolTotalCapacity</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  Metric?: string;
}

export interface DescribeMetricCollectionTypesAnswer {
  /**
   * <p>The metrics.</p>
   */
  Metrics?: MetricCollectionType[];

  /**
   * <p>The granularities for the metrics.</p>
   */
  Granularities?: MetricGranularityType[];
}

/**
 * <p>Describes a notification.</p>
 */
export interface NotificationConfiguration {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic.</p>
   */
  TopicARN?: string;

  /**
   * <p>One of the following event notification types:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>autoscaling:EC2_INSTANCE_LAUNCH</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>autoscaling:EC2_INSTANCE_LAUNCH_ERROR</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>autoscaling:EC2_INSTANCE_TERMINATE</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>autoscaling:EC2_INSTANCE_TERMINATE_ERROR</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>autoscaling:TEST_NOTIFICATION</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  NotificationType?: string;
}

export interface DescribeNotificationConfigurationsAnswer {
  /**
   * <p>The notification configurations.</p>
   */
  NotificationConfigurations: NotificationConfiguration[] | undefined;

  /**
   * <p>A string that indicates that the response contains more items than can be returned in
   *             a single response. To receive additional items, specify this string for the
   *                 <code>NextToken</code> value when requesting the next set of items. This value is
   *             null when there are no more items to return.</p>
   */
  NextToken?: string;
}

export interface DescribeNotificationConfigurationsType {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupNames?: string[];

  /**
   * <p>The token for the next set of items to return. (You received this token from a
   *             previous call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return with this call. The default value is
   *                 <code>50</code> and the maximum value is <code>100</code>.</p>
   */
  MaxRecords?: number;
}

export interface DescribePoliciesType {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName?: string;

  /**
   * <p>The names of one or more policies. If you omit this property, all policies are
   *             described. If a group name is provided, the results are limited to that group. If you
   *             specify an unknown policy name, it is ignored with no error.</p>
   *          <p>Array Members: Maximum number of 50 items.</p>
   */
  PolicyNames?: string[];

  /**
   * <p>One or more policy types. The valid values are <code>SimpleScaling</code>,
   *                 <code>StepScaling</code>, <code>TargetTrackingScaling</code>, and
   *                 <code>PredictiveScaling</code>.</p>
   */
  PolicyTypes?: string[];

  /**
   * <p>The token for the next set of items to return. (You received this token from a
   *             previous call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to be returned with each call. The default value is
   *                 <code>50</code> and the maximum value is <code>100</code>.</p>
   */
  MaxRecords?: number;
}

export enum PredictiveScalingMaxCapacityBreachBehavior {
  HonorMaxCapacity = "HonorMaxCapacity",
  IncreaseMaxCapacity = "IncreaseMaxCapacity",
}

/**
 * <p>Describes the dimension of a metric.</p>
 */
export interface MetricDimension {
  /**
   * <p>The name of the dimension.</p>
   */
  Name: string | undefined;

  /**
   * <p>The value of the dimension.</p>
   */
  Value: string | undefined;
}

/**
 * <p>Represents a specific metric. </p>
 */
export interface Metric {
  /**
   * <p>The namespace of the metric. For more information, see the table in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html">Amazon Web Services
   *                 services that publish CloudWatch metrics </a> in the <i>Amazon CloudWatch User
   *                 Guide</i>.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The name of the metric.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>The dimensions for the metric. For the list of available dimensions, see the Amazon Web Services
   *             documentation available from the table in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html">Amazon Web Services
   *                 services that publish CloudWatch metrics </a> in the <i>Amazon CloudWatch User
   *                 Guide</i>. </p>
   *          <p>Conditional: If you published your metric with dimensions, you must specify the same
   *             dimensions in your scaling policy.</p>
   */
  Dimensions?: MetricDimension[];
}

/**
 * <p>This structure defines the CloudWatch metric to return, along with the statistic, period,
 *             and unit.</p>
 *          <p>For more information about the CloudWatch terminology below, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch
 *                 concepts</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
 */
export interface MetricStat {
  /**
   * <p>The CloudWatch metric to return, including the metric name, namespace, and dimensions. To
   *             get the exact metric name, namespace, and dimensions, inspect the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Metric.html">Metric</a> object that is returned by a call to <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html">ListMetrics</a>.</p>
   */
  Metric: Metric | undefined;

  /**
   * <p>The statistic to return. It can include any CloudWatch statistic or extended statistic. For
   *             a list of valid values, see the table in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic">Statistics</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
   *          <p>The most commonly used metrics for predictive scaling are <code>Average</code> and
   *                 <code>Sum</code>.</p>
   */
  Stat: string | undefined;

  /**
   * <p>The unit to use for the returned data points. For a complete list of the units that
   *             CloudWatch supports, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html">MetricDatum</a>
   *             data type in the <i>Amazon CloudWatch API Reference</i>.</p>
   */
  Unit?: string;
}

/**
 * <p>The metric data to return. Also defines whether this call is returning data for one
 *             metric only, or whether it is performing a math expression on the values of returned
 *             metric statistics to create a new time series. A time series is a series of data points,
 *             each of which is associated with a timestamp.</p>
 *          <p>For more information and examples, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/predictive-scaling-customized-metric-specification.html">Advanced predictive scaling policy configurations using custom metrics</a> in
 *             the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 */
export interface MetricDataQuery {
  /**
   * <p>A short name that identifies the object's results in the response. This name must be
   *             unique among all <code>MetricDataQuery</code> objects specified for a single scaling
   *             policy. If you are performing math expressions on this set of data, this name represents
   *             that data and can serve as a variable in the mathematical expression. The valid
   *             characters are letters, numbers, and underscores. The first character must be a
   *             lowercase letter. </p>
   */
  Id: string | undefined;

  /**
   * <p>The math expression to perform on the returned data, if this object is performing a
   *             math expression. This expression can use the <code>Id</code> of the other metrics to
   *             refer to those metrics, and can also use the <code>Id</code> of other expressions to use
   *             the result of those expressions. </p>
   *          <p>Conditional: Within each <code>MetricDataQuery</code> object, you must specify either
   *                 <code>Expression</code> or <code>MetricStat</code>, but not both.</p>
   */
  Expression?: string;

  /**
   * <p>Information about the metric data to return.</p>
   *          <p>Conditional: Within each <code>MetricDataQuery</code> object, you must specify either
   *                 <code>Expression</code> or <code>MetricStat</code>, but not both.</p>
   */
  MetricStat?: MetricStat;

  /**
   * <p>A human-readable label for this metric or expression. This is especially useful if
   *             this is a math expression, so that you know what the value represents.</p>
   */
  Label?: string;

  /**
   * <p>Indicates whether to return the timestamps and raw data values of this metric. </p>
   *          <p>If you use any math expressions, specify <code>true</code> for this value for only the
   *             final math expression that the metric specification is based on. You must specify
   *                 <code>false</code> for <code>ReturnData</code> for all the other metrics and
   *             expressions used in the metric specification.</p>
   *          <p>If you are only retrieving metrics and not performing any math expressions, do not
   *             specify anything for <code>ReturnData</code>. This sets it to its default
   *                 (<code>true</code>).</p>
   */
  ReturnData?: boolean;
}

/**
 * <p>Describes a customized capacity metric for a predictive scaling policy.</p>
 */
export interface PredictiveScalingCustomizedCapacityMetric {
  /**
   * <p>One or more metric data queries to provide the data points for a capacity metric. Use
   *             multiple metric data queries only if you are performing a math expression on returned
   *             data. </p>
   */
  MetricDataQueries: MetricDataQuery[] | undefined;
}

/**
 * <p>Describes a custom load metric for a predictive scaling policy.</p>
 */
export interface PredictiveScalingCustomizedLoadMetric {
  /**
   * <p>One or more metric data queries to provide the data points for a load metric. Use
   *             multiple metric data queries only if you are performing a math expression on returned
   *             data. </p>
   */
  MetricDataQueries: MetricDataQuery[] | undefined;
}

/**
 * <p>Describes a custom scaling metric for a predictive scaling policy.</p>
 */
export interface PredictiveScalingCustomizedScalingMetric {
  /**
   * <p>One or more metric data queries to provide the data points for a scaling metric. Use
   *             multiple metric data queries only if you are performing a math expression on returned
   *             data. </p>
   */
  MetricDataQueries: MetricDataQuery[] | undefined;
}

export enum PredefinedLoadMetricType {
  ALBTargetGroupRequestCount = "ALBTargetGroupRequestCount",
  ASGTotalCPUUtilization = "ASGTotalCPUUtilization",
  ASGTotalNetworkIn = "ASGTotalNetworkIn",
  ASGTotalNetworkOut = "ASGTotalNetworkOut",
}

/**
 * <p>Describes a load metric for a predictive scaling policy.</p>
 *          <p>When returned in the output of <code>DescribePolicies</code>, it indicates that a
 *             predictive scaling policy uses individually specified load and scaling metrics instead
 *             of a metric pair.</p>
 */
export interface PredictiveScalingPredefinedLoadMetric {
  /**
   * <p>The metric type.</p>
   */
  PredefinedMetricType: PredefinedLoadMetricType | string | undefined;

  /**
   * <p>A label that uniquely identifies a specific Application Load Balancer target group from which to determine
   *             the request count served by your Auto Scaling group. You can't specify a resource label unless
   *             the target group is attached to the Auto Scaling group.</p>
   *          <p>You create the resource label by appending the final portion of the load balancer ARN
   *             and the final portion of the target group ARN into a single value, separated by a forward
   *             slash (/). The format of the resource label is:</p>
   *          <p>
   *             <code>app/my-alb/778d41231b141a0f/targetgroup/my-alb-target-group/943f017f100becff</code>.</p>
   *          <p>Where:</p>
   *          <ul>
   *             <li>
   *                <p>app/<load-balancer-name>/<load-balancer-id> is the final portion of
   *                     the load balancer ARN</p>
   *             </li>
   *             <li>
   *                <p>targetgroup/<target-group-name>/<target-group-id> is the final portion
   *                     of the target group ARN.</p>
   *             </li>
   *          </ul>
   *          <p>To find the ARN for an Application Load Balancer, use the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html">DescribeLoadBalancers</a> API operation. To find the ARN for the target group, use
   *             the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html">DescribeTargetGroups</a> API operation.</p>
   */
  ResourceLabel?: string;
}

export enum PredefinedMetricPairType {
  ALBRequestCount = "ALBRequestCount",
  ASGCPUUtilization = "ASGCPUUtilization",
  ASGNetworkIn = "ASGNetworkIn",
  ASGNetworkOut = "ASGNetworkOut",
}

/**
 * <p>Represents a metric pair for a predictive scaling policy. </p>
 */
export interface PredictiveScalingPredefinedMetricPair {
  /**
   * <p>Indicates which metrics to use. There are two different types of metrics for each
   *             metric type: one is a load metric and one is a scaling metric. For example, if the
   *             metric type is <code>ASGCPUUtilization</code>, the Auto Scaling group's total CPU metric is used
   *             as the load metric, and the average CPU metric is used for the scaling metric.</p>
   */
  PredefinedMetricType: PredefinedMetricPairType | string | undefined;

  /**
   * <p>A label that uniquely identifies a specific Application Load Balancer target group from which to determine
   *             the total and average request count served by your Auto Scaling group. You can't specify a
   *             resource label unless the target group is attached to the Auto Scaling group.</p>
   *          <p>You create the resource label by appending the final portion of the load balancer ARN
   *             and the final portion of the target group ARN into a single value, separated by a forward
   *             slash (/). The format of the resource label is:</p>
   *          <p>
   *             <code>app/my-alb/778d41231b141a0f/targetgroup/my-alb-target-group/943f017f100becff</code>.</p>
   *          <p>Where:</p>
   *          <ul>
   *             <li>
   *                <p>app/<load-balancer-name>/<load-balancer-id> is the final portion of
   *                     the load balancer ARN</p>
   *             </li>
   *             <li>
   *                <p>targetgroup/<target-group-name>/<target-group-id> is the final portion
   *                     of the target group ARN.</p>
   *             </li>
   *          </ul>
   *          <p>To find the ARN for an Application Load Balancer, use the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html">DescribeLoadBalancers</a> API operation. To find the ARN for the target group, use
   *             the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html">DescribeTargetGroups</a> API operation.</p>
   */
  ResourceLabel?: string;
}

export enum PredefinedScalingMetricType {
  ALBRequestCountPerTarget = "ALBRequestCountPerTarget",
  ASGAverageCPUUtilization = "ASGAverageCPUUtilization",
  ASGAverageNetworkIn = "ASGAverageNetworkIn",
  ASGAverageNetworkOut = "ASGAverageNetworkOut",
}

/**
 * <p>Describes a scaling metric for a predictive scaling policy.</p>
 *          <p>When returned in the output of <code>DescribePolicies</code>, it indicates that a
 *             predictive scaling policy uses individually specified load and scaling metrics instead
 *             of a metric pair.</p>
 */
export interface PredictiveScalingPredefinedScalingMetric {
  /**
   * <p>The metric type.</p>
   */
  PredefinedMetricType: PredefinedScalingMetricType | string | undefined;

  /**
   * <p>A label that uniquely identifies a specific Application Load Balancer target group from which to determine
   *             the average request count served by your Auto Scaling group. You can't specify a resource label
   *             unless the target group is attached to the Auto Scaling group.</p>
   *          <p>You create the resource label by appending the final portion of the load balancer ARN
   *             and the final portion of the target group ARN into a single value, separated by a forward
   *             slash (/). The format of the resource label is:</p>
   *          <p>
   *             <code>app/my-alb/778d41231b141a0f/targetgroup/my-alb-target-group/943f017f100becff</code>.</p>
   *          <p>Where:</p>
   *          <ul>
   *             <li>
   *                <p>app/<load-balancer-name>/<load-balancer-id> is the final portion of
   *                     the load balancer ARN</p>
   *             </li>
   *             <li>
   *                <p>targetgroup/<target-group-name>/<target-group-id> is the final portion
   *                     of the target group ARN.</p>
   *             </li>
   *          </ul>
   *          <p>To find the ARN for an Application Load Balancer, use the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html">DescribeLoadBalancers</a> API operation. To find the ARN for the target group, use
   *             the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html">DescribeTargetGroups</a> API operation.</p>
   */
  ResourceLabel?: string;
}

/**
 * <p>This structure specifies the metrics and target utilization settings for a predictive
 *             scaling policy. </p>
 *          <p>You must specify either a metric pair, or a load metric and a scaling metric
 *             individually. Specifying a metric pair instead of individual metrics provides a simpler
 *             way to configure metrics for a scaling policy. You choose the metric pair, and the
 *             policy automatically knows the correct sum and average statistics to use for the load
 *             metric and the scaling metric.</p>
 *          <p>Example</p>
 *          <ul>
 *             <li>
 *                <p>You create a predictive scaling policy and specify
 *                         <code>ALBRequestCount</code> as the value for the metric pair and
 *                         <code>1000.0</code> as the target value. For this type of metric, you must
 *                     provide the metric dimension for the corresponding target group, so you also
 *                     provide a resource label for the Application Load Balancer target group that is
 *                     attached to your Auto Scaling group.</p>
 *             </li>
 *             <li>
 *                <p>The number of requests the target group receives per minute provides the load
 *                     metric, and the request count averaged between the members of the target group
 *                     provides the scaling metric. In CloudWatch, this refers to the
 *                         <code>RequestCount</code> and <code>RequestCountPerTarget</code> metrics,
 *                     respectively.</p>
 *             </li>
 *             <li>
 *                <p>For optimal use of predictive scaling, you adhere to the best practice of
 *                     using a dynamic scaling policy to automatically scale between the minimum
 *                     capacity and maximum capacity in response to real-time changes in resource
 *                     utilization.</p>
 *             </li>
 *             <li>
 *                <p>Amazon EC2 Auto Scaling consumes data points for the load metric over the last 14 days and
 *                     creates an hourly load forecast for predictive scaling. (A minimum of 24 hours
 *                     of data is required.)</p>
 *             </li>
 *             <li>
 *                <p>After creating the load forecast, Amazon EC2 Auto Scaling determines when to reduce or
 *                     increase the capacity of your Auto Scaling group in each hour of the forecast period so
 *                     that the average number of requests received by each instance is as close to
 *                     1000 requests per minute as possible at all times.</p>
 *             </li>
 *          </ul>
 *          <p>For information about using custom metrics with predictive scaling, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/predictive-scaling-customized-metric-specification.html">Advanced predictive scaling policy configurations using custom metrics</a> in
 *             the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 */
export interface PredictiveScalingMetricSpecification {
  /**
   * <p>Specifies the target utilization.</p>
   *          <note>
   *             <p>Some metrics are based on a count instead of a percentage, such as the request
   *                 count for an Application Load Balancer or the number of messages in an SQS queue. If the scaling policy
   *                 specifies one of these metrics, specify the target utilization as the optimal
   *                 average request or message count per instance during any one-minute interval.
   *             </p>
   *          </note>
   */
  TargetValue: number | undefined;

  /**
   * <p>The predefined metric pair specification from which Amazon EC2 Auto Scaling determines the
   *             appropriate scaling metric and load metric to use.</p>
   */
  PredefinedMetricPairSpecification?: PredictiveScalingPredefinedMetricPair;

  /**
   * <p>The predefined scaling metric specification.</p>
   */
  PredefinedScalingMetricSpecification?: PredictiveScalingPredefinedScalingMetric;

  /**
   * <p>The predefined load metric specification.</p>
   */
  PredefinedLoadMetricSpecification?: PredictiveScalingPredefinedLoadMetric;

  /**
   * <p>The customized scaling metric specification.</p>
   */
  CustomizedScalingMetricSpecification?: PredictiveScalingCustomizedScalingMetric;

  /**
   * <p>The customized load metric specification.</p>
   */
  CustomizedLoadMetricSpecification?: PredictiveScalingCustomizedLoadMetric;

  /**
   * <p>The customized capacity metric specification.</p>
   */
  CustomizedCapacityMetricSpecification?: PredictiveScalingCustomizedCapacityMetric;
}

export enum PredictiveScalingMode {
  ForecastAndScale = "ForecastAndScale",
  ForecastOnly = "ForecastOnly",
}

/**
 * <p>Represents a predictive scaling policy configuration to use with Amazon EC2 Auto Scaling.</p>
 */
export interface PredictiveScalingConfiguration {
  /**
   * <p>This structure includes the metrics and target utilization to use for predictive
   *             scaling. </p>
   *          <p>This is an array, but we currently only support a single metric specification. That
   *             is, you can specify a target value and a single metric pair, or a target value and one
   *             scaling metric and one load metric.</p>
   */
  MetricSpecifications: PredictiveScalingMetricSpecification[] | undefined;

  /**
   * <p>The predictive scaling mode. Defaults to <code>ForecastOnly</code> if not
   *             specified.</p>
   */
  Mode?: PredictiveScalingMode | string;

  /**
   * <p>The amount of time, in seconds, by which the instance launch time can be advanced. For
   *             example, the forecast says to add capacity at 10:00 AM, and you choose to pre-launch
   *             instances by 5 minutes. In that case, the instances will be launched at 9:55 AM. The
   *             intention is to give resources time to be provisioned. It can take a few minutes to
   *             launch an EC2 instance. The actual amount of time required depends on several factors,
   *             such as the size of the instance and whether there are startup scripts to complete. </p>
   *          <p>The value must be less than the forecast interval duration of 3600 seconds (60
   *             minutes). Defaults to 300 seconds if not specified. </p>
   */
  SchedulingBufferTime?: number;

  /**
   * <p>Defines the behavior that should be applied if the forecast capacity approaches or
   *             exceeds the maximum capacity of the Auto Scaling group. Defaults to
   *                 <code>HonorMaxCapacity</code> if not specified.</p>
   *          <p>The following are possible values:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>HonorMaxCapacity</code> - Amazon EC2 Auto Scaling cannot scale out capacity higher than
   *                     the maximum capacity. The maximum capacity is enforced as a hard limit. </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>IncreaseMaxCapacity</code> - Amazon EC2 Auto Scaling can scale out capacity higher than
   *                     the maximum capacity when the forecast capacity is close to or exceeds the
   *                     maximum capacity. The upper limit is determined by the forecasted capacity and
   *                     the value for <code>MaxCapacityBuffer</code>.</p>
   *             </li>
   *          </ul>
   */
  MaxCapacityBreachBehavior?: PredictiveScalingMaxCapacityBreachBehavior | string;

  /**
   * <p>The size of the capacity buffer to use when the forecast capacity is close to or
   *             exceeds the maximum capacity. The value is specified as a percentage relative to the
   *             forecast capacity. For example, if the buffer is 10, this means a 10 percent buffer,
   *             such that if the forecast capacity is 50, and the maximum capacity is 40, then the
   *             effective maximum capacity is 55.</p>
   *          <p>If set to 0, Amazon EC2 Auto Scaling may scale capacity higher than the maximum capacity to equal but
   *             not exceed forecast capacity. </p>
   *          <p>Required if the <code>MaxCapacityBreachBehavior</code> property is set to
   *                 <code>IncreaseMaxCapacity</code>, and cannot be used otherwise.</p>
   */
  MaxCapacityBuffer?: number;
}

/**
 * <p>Describes information used to create a step adjustment for a step scaling
 *             policy.</p>
 *          <p>For the following examples, suppose that you have an alarm with a breach threshold of
 *             50:</p>
 *          <ul>
 *             <li>
 *                <p>To trigger the adjustment when the metric is greater than or equal to 50 and
 *                     less than 60, specify a lower bound of 0 and an upper bound of 10.</p>
 *             </li>
 *             <li>
 *                <p>To trigger the adjustment when the metric is greater than 40 and less than or
 *                     equal to 50, specify a lower bound of -10 and an upper bound of 0.</p>
 *             </li>
 *          </ul>
 *          <p>There are a few rules for the step adjustments for your step policy:</p>
 *          <ul>
 *             <li>
 *                <p>The ranges of your step adjustments can't overlap or have a gap.</p>
 *             </li>
 *             <li>
 *                <p>At most, one step adjustment can have a null lower bound. If one step
 *                     adjustment has a negative lower bound, then there must be a step adjustment with
 *                     a null lower bound.</p>
 *             </li>
 *             <li>
 *                <p>At most, one step adjustment can have a null upper bound. If one step
 *                     adjustment has a positive upper bound, then there must be a step adjustment with
 *                     a null upper bound.</p>
 *             </li>
 *             <li>
 *                <p>The upper and lower bound can't be null in the same step adjustment.</p>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html#as-scaling-steps">Step
 *                 adjustments</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 */
export interface StepAdjustment {
  /**
   * <p>The lower bound for the difference between the alarm threshold and the CloudWatch metric. If
   *             the metric value is above the breach threshold, the lower bound is inclusive (the metric
   *             must be greater than or equal to the threshold plus the lower bound). Otherwise, it is
   *             exclusive (the metric must be greater than the threshold plus the lower bound). A null
   *             value indicates negative infinity.</p>
   */
  MetricIntervalLowerBound?: number;

  /**
   * <p>The upper bound for the difference between the alarm threshold and the CloudWatch metric. If
   *             the metric value is above the breach threshold, the upper bound is exclusive (the metric
   *             must be less than the threshold plus the upper bound). Otherwise, it is inclusive (the
   *             metric must be less than or equal to the threshold plus the upper bound). A null value
   *             indicates positive infinity.</p>
   *          <p>The upper bound must be greater than the lower bound.</p>
   */
  MetricIntervalUpperBound?: number;

  /**
   * <p>The amount by which to scale, based on the specified adjustment type. A positive value
   *             adds to the current capacity while a negative number removes from the current
   *             capacity.</p>
   *          <p>The amount by which to scale. The adjustment is based on the value that you specified
   *             in the <code>AdjustmentType</code> property (either an absolute number or a percentage).
   *             A positive value adds to the current capacity and a negative number subtracts from the
   *             current capacity. </p>
   */
  ScalingAdjustment: number | undefined;
}

/**
 * <p>This structure defines the CloudWatch metric to return, along with the statistic, period,
 *             and unit.</p>
 *          <p>For more information about the CloudWatch terminology below, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch
 *             concepts</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
 */
export interface TargetTrackingMetricStat {
  /**
   * <p>Represents a specific metric. </p>
   */
  Metric: Metric | undefined;

  /**
   * <p>The statistic to return. It can include any CloudWatch statistic or extended statistic. For
   *             a list of valid values, see the table in <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic">Statistics</a> in the <i>Amazon CloudWatch User Guide</i>.</p>
   *          <p>The most commonly used metrics for scaling is <code>Average</code>
   *          </p>
   */
  Stat: string | undefined;

  /**
   * <p>The unit to use for the returned data points. For a complete list of the units that
   *             CloudWatch supports, see the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html">MetricDatum</a>
   *             data type in the <i>Amazon CloudWatch API Reference</i>.</p>
   */
  Unit?: string;
}

/**
 * <p>The metric data to return. Also defines whether this call is returning data for one
 *             metric only, or whether it is performing a math expression on the values of returned
 *             metric statistics to create a new time series. A time series is a series of data points,
 *             each of which is associated with a timestamp.</p>
 */
export interface TargetTrackingMetricDataQuery {
  /**
   * <p>A short name that identifies the object's results in the response. This name must be
   *             unique among all <code>TargetTrackingMetricDataQuery</code> objects specified for a
   *             single scaling policy. If you are performing math expressions on this set of data, this
   *             name represents that data and can serve as a variable in the mathematical expression.
   *             The valid characters are letters, numbers, and underscores. The first character must be
   *             a lowercase letter. </p>
   */
  Id: string | undefined;

  /**
   * <p>The math expression to perform on the returned data, if this object is performing a
   *             math expression. This expression can use the <code>Id</code> of the other metrics to
   *             refer to those metrics, and can also use the <code>Id</code> of other expressions to use
   *             the result of those expressions. </p>
   *          <p>Conditional: Within each <code>TargetTrackingMetricDataQuery</code> object, you must
   *             specify either <code>Expression</code> or <code>MetricStat</code>, but not both.</p>
   */
  Expression?: string;

  /**
   * <p>Information about the metric data to return.</p>
   *          <p>Conditional: Within each <code>TargetTrackingMetricDataQuery</code> object, you must
   *             specify either <code>Expression</code> or <code>MetricStat</code>, but not both.</p>
   */
  MetricStat?: TargetTrackingMetricStat;

  /**
   * <p>A human-readable label for this metric or expression. This is especially useful if
   *             this is a math expression, so that you know what the value represents.</p>
   */
  Label?: string;

  /**
   * <p>Indicates whether to return the timestamps and raw data values of this metric. </p>
   *          <p>If you use any math expressions, specify <code>true</code> for this value for only the
   *             final math expression that the metric specification is based on. You must specify
   *             <code>false</code> for <code>ReturnData</code> for all the other metrics and
   *             expressions used in the metric specification.</p>
   *          <p>If you are only retrieving metrics and not performing any math expressions, do not
   *             specify anything for <code>ReturnData</code>. This sets it to its default
   *             (<code>true</code>).</p>
   */
  ReturnData?: boolean;
}

export enum MetricStatistic {
  Average = "Average",
  Maximum = "Maximum",
  Minimum = "Minimum",
  SampleCount = "SampleCount",
  Sum = "Sum",
}

/**
 * <p>Represents a CloudWatch metric of your choosing for a target tracking scaling policy to use
 *             with Amazon EC2 Auto Scaling.</p>
 *          <p>To create your customized metric specification:</p>
 *          <ul>
 *             <li>
 *                <p>Add values for each required property from CloudWatch. You can use an existing
 *                     metric, or a new metric that you create. To use your own metric, you must first
 *                     publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish
 *                         custom metrics</a> in the <i>Amazon CloudWatch User
 *                     Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>Choose a metric that changes proportionally with capacity. The value of the
 *                     metric should increase or decrease in inverse proportion to the number of
 *                     capacity units. That is, the value of the metric should decrease when capacity
 *                     increases.</p>
 *             </li>
 *          </ul>
 *          <p>For more information about the CloudWatch terminology below, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch
 *                 concepts</a>.</p>
 *          <note>
 *             <p>Each individual service provides information about the metrics, namespace, and
 *                 dimensions they use. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html">Amazon Web Services services that publish CloudWatch metrics</a> in the <i>Amazon CloudWatch User
 *                     Guide</i>.</p>
 *          </note>
 */
export interface CustomizedMetricSpecification {
  /**
   * <p>The name of the metric. To get the exact metric name, namespace, and dimensions,
   *             inspect the <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Metric.html">Metric</a> object
   *             that is returned by a call to <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html">ListMetrics</a>.</p>
   */
  MetricName?: string;

  /**
   * <p>The namespace of the metric.</p>
   */
  Namespace?: string;

  /**
   * <p>The dimensions of the metric.</p>
   *          <p>Conditional: If you published your metric with dimensions, you must specify the same
   *             dimensions in your scaling policy.</p>
   */
  Dimensions?: MetricDimension[];

  /**
   * <p>The statistic of the metric.</p>
   */
  Statistic?: MetricStatistic | string;

  /**
   * <p>The unit of the metric. For a complete list of the units that CloudWatch supports, see the
   *                 <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html">MetricDatum</a>
   *             data type in the <i>Amazon CloudWatch API Reference</i>.</p>
   */
  Unit?: string;

  /**
   * <p>The metrics to include in the target tracking scaling policy, as a metric data query.
   *             This can include both raw metric and metric math expressions.</p>
   */
  Metrics?: TargetTrackingMetricDataQuery[];
}

export enum MetricType {
  ALBRequestCountPerTarget = "ALBRequestCountPerTarget",
  ASGAverageCPUUtilization = "ASGAverageCPUUtilization",
  ASGAverageNetworkIn = "ASGAverageNetworkIn",
  ASGAverageNetworkOut = "ASGAverageNetworkOut",
}

/**
 * <p>Represents a predefined metric for a target tracking scaling policy to use with
 *             Amazon EC2 Auto Scaling.</p>
 */
export interface PredefinedMetricSpecification {
  /**
   * <p>The metric type. The following predefined metrics are available:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ASGAverageCPUUtilization</code> - Average CPU utilization of the Auto Scaling
   *                     group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ASGAverageNetworkIn</code> - Average number of bytes received on all
   *                     network interfaces by the Auto Scaling group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ASGAverageNetworkOut</code> - Average number of bytes sent out on all
   *                     network interfaces by the Auto Scaling group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALBRequestCountPerTarget</code> - Average Application Load Balancer request count per target
   *                     for your Auto Scaling group.</p>
   *             </li>
   *          </ul>
   */
  PredefinedMetricType: MetricType | string | undefined;

  /**
   * <p>A label that uniquely identifies a specific Application Load Balancer target group
   *             from which to determine the average request count served by your Auto Scaling group. You can't
   *             specify a resource label unless the target group is attached to the Auto Scaling group.</p>
   *          <p>You create the resource label by appending the final portion of the load balancer ARN
   *             and the final portion of the target group ARN into a single value, separated by a forward
   *             slash (/). The format of the resource label is:</p>
   *          <p>
   *             <code>app/my-alb/778d41231b141a0f/targetgroup/my-alb-target-group/943f017f100becff</code>.</p>
   *          <p>Where:</p>
   *          <ul>
   *             <li>
   *                <p>app/<load-balancer-name>/<load-balancer-id> is the final portion of
   *                     the load balancer ARN</p>
   *             </li>
   *             <li>
   *                <p>targetgroup/<target-group-name>/<target-group-id> is the final portion
   *                     of the target group ARN.</p>
   *             </li>
   *          </ul>
   *          <p>To find the ARN for an Application Load Balancer, use the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html">DescribeLoadBalancers</a> API operation. To find the ARN for the target group, use
   *             the <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html">DescribeTargetGroups</a> API operation.</p>
   */
  ResourceLabel?: string;
}

/**
 * <p>Represents a target tracking scaling policy configuration to use with Amazon EC2 Auto Scaling.</p>
 */
export interface TargetTrackingConfiguration {
  /**
   * <p>A predefined metric. You must specify either a predefined metric or a customized
   *             metric.</p>
   */
  PredefinedMetricSpecification?: PredefinedMetricSpecification;

  /**
   * <p>A customized metric. You must specify either a predefined metric or a customized
   *             metric.</p>
   */
  CustomizedMetricSpecification?: CustomizedMetricSpecification;

  /**
   * <p>The target value for the metric.</p>
   *          <note>
   *             <p>Some metrics are based on a count instead of a percentage, such as the request
   *                 count for an Application Load Balancer or the number of messages in an SQS queue. If the scaling policy
   *                 specifies one of these metrics, specify the target utilization as the optimal
   *                 average request or message count per instance during any one-minute interval.
   *             </p>
   *          </note>
   */
  TargetValue: number | undefined;

  /**
   * <p>Indicates whether scaling in by the target tracking scaling policy is disabled. If
   *             scaling in is disabled, the target tracking scaling policy doesn't remove instances from
   *             the Auto Scaling group. Otherwise, the target tracking scaling policy can remove instances from
   *             the Auto Scaling group. The default is <code>false</code>.</p>
   */
  DisableScaleIn?: boolean;
}

/**
 * <p>Describes a scaling policy.</p>
 */
export interface ScalingPolicy {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName?: string;

  /**
   * <p>The name of the scaling policy.</p>
   */
  PolicyName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy.</p>
   */
  PolicyARN?: string;

  /**
   * <p>One of the following policy types: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TargetTrackingScaling</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>StepScaling</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SimpleScaling</code> (default)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PredictiveScaling</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html">Target tracking
   *                 scaling policies</a> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html">Step and simple scaling
   *                 policies</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  PolicyType?: string;

  /**
   * <p>Specifies how the scaling adjustment is interpreted (for example, an absolute number
   *             or a percentage). The valid values are <code>ChangeInCapacity</code>,
   *                 <code>ExactCapacity</code>, and <code>PercentChangeInCapacity</code>.</p>
   */
  AdjustmentType?: string;

  /**
   * @deprecated
   *
   * <p>Available for backward compatibility. Use <code>MinAdjustmentMagnitude</code>
   *             instead.</p>
   */
  MinAdjustmentStep?: number;

  /**
   * <p>The minimum value to scale by when the adjustment type is
   *                 <code>PercentChangeInCapacity</code>. </p>
   */
  MinAdjustmentMagnitude?: number;

  /**
   * <p>The amount by which to scale, based on the specified adjustment type. A positive value
   *             adds to the current capacity while a negative number removes from the current
   *             capacity.</p>
   */
  ScalingAdjustment?: number;

  /**
   * <p>The duration of the policy's cooldown period, in seconds.</p>
   */
  Cooldown?: number;

  /**
   * <p>A set of adjustments that enable you to scale based on the size of the alarm
   *             breach.</p>
   */
  StepAdjustments?: StepAdjustment[];

  /**
   * <p>The aggregation type for the CloudWatch metrics. The valid values are <code>Minimum</code>,
   *                 <code>Maximum</code>, and <code>Average</code>.</p>
   */
  MetricAggregationType?: string;

  /**
   * <p>The estimated time, in seconds, until a newly launched instance can contribute to the
   *             CloudWatch metrics.</p>
   */
  EstimatedInstanceWarmup?: number;

  /**
   * <p>The CloudWatch alarms related to the policy.</p>
   */
  Alarms?: Alarm[];

  /**
   * <p>A target tracking scaling policy.</p>
   */
  TargetTrackingConfiguration?: TargetTrackingConfiguration;

  /**
   * <p>Indicates whether the policy is enabled (<code>true</code>) or disabled
   *                 (<code>false</code>).</p>
   */
  Enabled?: boolean;

  /**
   * <p>A predictive scaling policy.</p>
   */
  PredictiveScalingConfiguration?: PredictiveScalingConfiguration;
}

export interface PoliciesType {
  /**
   * <p>The scaling policies.</p>
   */
  ScalingPolicies?: ScalingPolicy[];

  /**
   * <p>A string that indicates that the response contains more items than can be returned in
   *             a single response. To receive additional items, specify this string for the
   *                 <code>NextToken</code> value when requesting the next set of items. This value is
   *             null when there are no more items to return.</p>
   */
  NextToken?: string;
}

export interface DescribeScalingActivitiesType {
  /**
   * <p>The activity IDs of the desired scaling activities. If you omit this property, all
   *             activities for the past six weeks are described. If unknown activities are requested,
   *             they are ignored with no error. If you specify an Auto Scaling group, the results are limited to
   *             that group.</p>
   *          <p>Array Members: Maximum number of 50 IDs.</p>
   */
  ActivityIds?: string[];

  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName?: string;

  /**
   * <p>Indicates whether to include scaling activity from deleted Auto Scaling groups.</p>
   */
  IncludeDeletedGroups?: boolean;

  /**
   * <p>The maximum number of items to return with this call. The default value is
   *                 <code>100</code> and the maximum value is <code>100</code>.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a
   *             previous call.)</p>
   */
  NextToken?: string;
}

/**
 * <p>Describes a process type.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html#process-types">Scaling processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 */
export interface ProcessType {
  /**
   * <p>One of the following processes:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Launch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Terminate</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AddToLoadBalancer</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AlarmNotification</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AZRebalance</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HealthCheck</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InstanceRefresh</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ReplaceUnhealthy</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ScheduledActions</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  ProcessName: string | undefined;
}

export interface ProcessesType {
  /**
   * <p>The names of the process types.</p>
   */
  Processes?: ProcessType[];
}

export interface DescribeScheduledActionsType {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName?: string;

  /**
   * <p>The names of one or more scheduled actions. If you omit this property, all scheduled
   *             actions are described. If you specify an unknown scheduled action, it is ignored with no
   *             error.</p>
   *          <p>Array Members: Maximum number of 50 actions.</p>
   */
  ScheduledActionNames?: string[];

  /**
   * <p>The earliest scheduled start time to return. If scheduled action names are provided,
   *             this property is ignored.</p>
   */
  StartTime?: Date;

  /**
   * <p>The latest scheduled start time to return. If scheduled action names are provided,
   *             this property is ignored.</p>
   */
  EndTime?: Date;

  /**
   * <p>The token for the next set of items to return. (You received this token from a
   *             previous call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return with this call. The default value is
   *                 <code>50</code> and the maximum value is <code>100</code>.</p>
   */
  MaxRecords?: number;
}

/**
 * <p>Describes a scheduled scaling
 *             action.</p>
 */
export interface ScheduledUpdateGroupAction {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName?: string;

  /**
   * <p>The name of the scheduled action.</p>
   */
  ScheduledActionName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the scheduled action.</p>
   */
  ScheduledActionARN?: string;

  /**
   * <p>This property is no longer used.</p>
   */
  Time?: Date;

  /**
   * <p>The date and time in UTC for this action to start. For example,
   *                 <code>"2019-06-01T00:00:00Z"</code>. </p>
   */
  StartTime?: Date;

  /**
   * <p>The date and time in UTC for the recurring schedule to end. For example,
   *                 <code>"2019-06-01T00:00:00Z"</code>. </p>
   */
  EndTime?: Date;

  /**
   * <p>The recurring schedule for the action, in Unix cron syntax format.</p>
   *          <p>When <code>StartTime</code> and <code>EndTime</code> are specified with
   *                 <code>Recurrence</code>, they form the boundaries of when the recurring action
   *             starts and stops.</p>
   */
  Recurrence?: string;

  /**
   * <p>The minimum size of the Auto Scaling group.</p>
   */
  MinSize?: number;

  /**
   * <p>The maximum size of the Auto Scaling group.</p>
   */
  MaxSize?: number;

  /**
   * <p>The desired capacity is the initial capacity of the Auto Scaling group after the scheduled
   *             action runs and the capacity it attempts to maintain.</p>
   */
  DesiredCapacity?: number;

  /**
   * <p>The time zone for the cron expression.</p>
   */
  TimeZone?: string;
}

export interface ScheduledActionsType {
  /**
   * <p>The scheduled actions.</p>
   */
  ScheduledUpdateGroupActions?: ScheduledUpdateGroupAction[];

  /**
   * <p>A string that indicates that the response contains more items than can be returned in
   *             a single response. To receive additional items, specify this string for the
   *                 <code>NextToken</code> value when requesting the next set of items. This value is
   *             null when there are no more items to return.</p>
   */
  NextToken?: string;
}

export interface DescribeTagsType {
  /**
   * <p>One or more filters to scope the tags to return. The maximum number of filters per
   *             filter type (for example, <code>auto-scaling-group</code>) is 1000.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The token for the next set of items to return. (You received this token from a
   *             previous call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return with this call. The default value is
   *                 <code>50</code> and the maximum value is <code>100</code>.</p>
   */
  MaxRecords?: number;
}

export interface TagsType {
  /**
   * <p>One or more tags.</p>
   */
  Tags?: TagDescription[];

  /**
   * <p>A string that indicates that the response contains more items than can be returned in
   *             a single response. To receive additional items, specify this string for the
   *                 <code>NextToken</code> value when requesting the next set of items. This value is
   *             null when there are no more items to return.</p>
   */
  NextToken?: string;
}

export interface DescribeTerminationPolicyTypesAnswer {
  /**
   * <p>The termination policies supported by Amazon EC2 Auto Scaling: <code>OldestInstance</code>,
   *                 <code>OldestLaunchConfiguration</code>, <code>NewestInstance</code>,
   *                 <code>ClosestToNextInstanceHour</code>, <code>Default</code>,
   *                 <code>OldestLaunchTemplate</code>, and <code>AllocationStrategy</code>.</p>
   */
  TerminationPolicyTypes?: string[];
}

export interface DescribeTrafficSourcesRequest {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The type of traffic source you are describing. Currently, the only valid value is
   *                 <code>vpc-lattice</code>.</p>
   */
  TrafficSourceType: string | undefined;

  /**
   * <p>The token for the next set of items to return. (You received this token from a
   *             previous call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The maximum number of items to return with this call. The maximum value is
   *                 <code>50</code>.</p>
   */
  MaxRecords?: number;
}

/**
 * <p>Describes the state of a traffic source.</p>
 */
export interface TrafficSourceState {
  /**
   * <p>The unique identifier of the traffic source. Currently, this is the Amazon Resource
   *             Name (ARN) for a VPC Lattice target group.</p>
   */
  TrafficSource?: string;

  /**
   * <p>The following are the possible states for a VPC Lattice target group:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Adding</code> - The Auto Scaling instances are being registered with the target
   *                     group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Added</code> - All Auto Scaling instances are registered with the target
   *                     group.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InService</code> - At least one Auto Scaling instance passed the
   *                         <code>VPC_LATTICE</code> health check.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Removing</code> - The Auto Scaling instances are being deregistered from the
   *                     target group. If connection draining is enabled, VPC Lattice waits for in-flight
   *                     requests to complete before deregistering the instances.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Removed</code> - All Auto Scaling instances are deregistered from the target
   *                     group.</p>
   *             </li>
   *          </ul>
   */
  State?: string;
}

export interface DescribeTrafficSourcesResponse {
  /**
   * <p>Information about the traffic sources.</p>
   */
  TrafficSources?: TrafficSourceState[];

  /**
   * <p>This string indicates that the response contains more items than can be returned in a
   *             single response. To receive additional items, specify this string for the
   *                 <code>NextToken</code> value when requesting the next set of items. This value is
   *             null when there are no more items to return.</p>
   */
  NextToken?: string;
}

export interface DescribeWarmPoolAnswer {
  /**
   * <p>The warm pool configuration details. </p>
   */
  WarmPoolConfiguration?: WarmPoolConfiguration;

  /**
   * <p>The instances that are currently in the warm pool.</p>
   */
  Instances?: Instance[];

  /**
   * <p>This string indicates that the response contains more items than can be returned in a
   *             single response. To receive additional items, specify this string for the
   *                 <code>NextToken</code> value when requesting the next set of items. This value is
   *             null when there are no more items to return.</p>
   */
  NextToken?: string;
}

export interface DescribeWarmPoolType {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The maximum number of instances to return with this call. The maximum value is
   *                 <code>50</code>.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The token for the next set of instances to return. (You received this token from a
   *             previous call.)</p>
   */
  NextToken?: string;
}

export interface DetachInstancesAnswer {
  /**
   * <p>The activities related to detaching the instances from the Auto Scaling group.</p>
   */
  Activities?: Activity[];
}

export interface DetachInstancesQuery {
  /**
   * <p>The IDs of the instances. You can specify up to 20 instances.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>Indicates whether the Auto Scaling group decrements the desired capacity value by the number
   *             of instances detached.</p>
   */
  ShouldDecrementDesiredCapacity: boolean | undefined;
}

export interface DetachLoadBalancersResultType {}

export interface DetachLoadBalancersType {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The names of the load balancers. You can specify up to 10 load balancers.</p>
   */
  LoadBalancerNames: string[] | undefined;
}

export interface DetachLoadBalancerTargetGroupsResultType {}

export interface DetachLoadBalancerTargetGroupsType {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARN) of the target groups. You can specify up to 10 target
   *             groups.</p>
   */
  TargetGroupARNs: string[] | undefined;
}

export interface DetachTrafficSourcesResultType {}

export interface DetachTrafficSourcesType {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The unique identifiers of one or more traffic sources you are detaching. You can
   *             specify up to 10 traffic sources.</p>
   *          <p>Currently, you must specify an Amazon Resource Name (ARN) for an existing VPC Lattice
   *             target group. When you detach a target group, it enters the <code>Removing</code> state
   *             while deregistering the instances in the group. When all instances are deregistered,
   *             then you can no longer describe the target group using the <a>DescribeTrafficSources</a> API call. The instances continue to run.</p>
   */
  TrafficSources: TrafficSourceIdentifier[] | undefined;
}

export interface DisableMetricsCollectionQuery {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>Identifies the metrics to disable.</p>
   *          <p>You can specify one or more of the following metrics:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>GroupMinSize</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupMaxSize</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupDesiredCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupInServiceInstances</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupPendingInstances</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupStandbyInstances</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupTerminatingInstances</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupTotalInstances</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupInServiceCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupPendingCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupStandbyCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupTerminatingCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupTotalCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WarmPoolDesiredCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WarmPoolWarmedCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WarmPoolPendingCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WarmPoolTerminatingCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WarmPoolTotalCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupAndWarmPoolDesiredCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupAndWarmPoolTotalCapacity</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If you omit this property, all metrics are disabled.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-cloudwatch-monitoring.html#as-group-metrics">Auto Scaling group metrics</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  Metrics?: string[];
}

export interface EnableMetricsCollectionQuery {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>Identifies the metrics to enable.</p>
   *          <p>You can specify one or more of the following metrics:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>GroupMinSize</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupMaxSize</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupDesiredCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupInServiceInstances</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupPendingInstances</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupStandbyInstances</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupTerminatingInstances</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupTotalInstances</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupInServiceCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupPendingCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupStandbyCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupTerminatingCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupTotalCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WarmPoolDesiredCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WarmPoolWarmedCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WarmPoolPendingCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WarmPoolTerminatingCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>WarmPoolTotalCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupAndWarmPoolDesiredCapacity</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>GroupAndWarmPoolTotalCapacity</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If you specify <code>Granularity</code> and don't specify any metrics, all metrics are
   *             enabled.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-cloudwatch-monitoring.html#as-group-metrics">Auto Scaling group metrics</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  Metrics?: string[];

  /**
   * <p>The frequency at which Amazon EC2 Auto Scaling sends aggregated data to CloudWatch. The only valid value is
   *                 <code>1Minute</code>.</p>
   */
  Granularity: string | undefined;
}

export interface EnterStandbyAnswer {
  /**
   * <p>The activities related to moving instances into <code>Standby</code> mode.</p>
   */
  Activities?: Activity[];
}

export interface EnterStandbyQuery {
  /**
   * <p>The IDs of the instances. You can specify up to 20 instances.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>Indicates whether to decrement the desired capacity of the Auto Scaling group by the number of
   *             instances moved to <code>Standby</code> mode.</p>
   */
  ShouldDecrementDesiredCapacity: boolean | undefined;
}

export interface ExecutePolicyType {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName?: string;

  /**
   * <p>The name or ARN of the policy.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>Indicates whether Amazon EC2 Auto Scaling waits for the cooldown period to complete before executing
   *             the policy.</p>
   *          <p>Valid only if the policy type is <code>SimpleScaling</code>. For more information, see
   *                 <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/Cooldown.html">Scaling
   *                 cooldowns for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  HonorCooldown?: boolean;

  /**
   * <p>The metric value to compare to <code>BreachThreshold</code>. This enables you to
   *             execute a policy of type <code>StepScaling</code> and determine which step adjustment to
   *             use. For example, if the breach threshold is 50 and you want to use a step adjustment
   *             with a lower bound of 0 and an upper bound of 10, you can set the metric value to
   *             59.</p>
   *          <p>If you specify a metric value that doesn't correspond to a step adjustment for the
   *             policy, the call returns an error.</p>
   *          <p>Required if the policy type is <code>StepScaling</code> and not supported
   *             otherwise.</p>
   */
  MetricValue?: number;

  /**
   * <p>The breach threshold for the alarm.</p>
   *          <p>Required if the policy type is <code>StepScaling</code> and not supported
   *             otherwise.</p>
   */
  BreachThreshold?: number;
}

export interface ExitStandbyAnswer {
  /**
   * <p>The activities related to moving instances out of <code>Standby</code> mode.</p>
   */
  Activities?: Activity[];
}

export interface ExitStandbyQuery {
  /**
   * <p>The IDs of the instances. You can specify up to 20 instances.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;
}

/**
 * <p>A <code>GetPredictiveScalingForecast</code> call returns the capacity forecast for a
 *             predictive scaling policy. This structure includes the data points for that capacity
 *             forecast, along with the timestamps of those data points. </p>
 */
export interface CapacityForecast {
  /**
   * <p>The timestamps for the data points, in UTC format.</p>
   */
  Timestamps: Date[] | undefined;

  /**
   * <p>The values of the data points.</p>
   */
  Values: number[] | undefined;
}

/**
 * <p>A <code>GetPredictiveScalingForecast</code> call returns the load forecast for a
 *             predictive scaling policy. This structure includes the data points for that load
 *             forecast, along with the timestamps of those data points and the metric specification.
 *         </p>
 */
export interface LoadForecast {
  /**
   * <p>The timestamps for the data points, in UTC format.</p>
   */
  Timestamps: Date[] | undefined;

  /**
   * <p>The values of the data points.</p>
   */
  Values: number[] | undefined;

  /**
   * <p>The metric specification for the load forecast.</p>
   */
  MetricSpecification: PredictiveScalingMetricSpecification | undefined;
}

export interface GetPredictiveScalingForecastAnswer {
  /**
   * <p>The load forecast.</p>
   */
  LoadForecast: LoadForecast[] | undefined;

  /**
   * <p>The capacity forecast.</p>
   */
  CapacityForecast: CapacityForecast | undefined;

  /**
   * <p>The time the forecast was made.</p>
   */
  UpdateTime: Date | undefined;
}

export interface GetPredictiveScalingForecastType {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The name of the policy.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The inclusive start time of the time range for the forecast data to get. At most, the
   *             date and time can be one year before the current date and time.</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>The exclusive end time of the time range for the forecast data to get. The maximum
   *             time duration between the start and end time is 30 days. </p>
   *          <p>Although this parameter can accept a date and time that is more than two days in the
   *             future, the availability of forecast data has limits. Amazon EC2 Auto Scaling only issues forecasts for
   *             periods of two days in advance.</p>
   */
  EndTime: Date | undefined;
}

export interface PutLifecycleHookAnswer {}

export interface PutLifecycleHookType {
  /**
   * <p>The name of the lifecycle hook.</p>
   */
  LifecycleHookName: string | undefined;

  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The lifecycle transition. For Auto Scaling groups, there are two major lifecycle
   *             transitions.</p>
   *          <ul>
   *             <li>
   *                <p>To create a lifecycle hook for scale-out events, specify
   *                         <code>autoscaling:EC2_INSTANCE_LAUNCHING</code>.</p>
   *             </li>
   *             <li>
   *                <p>To create a lifecycle hook for scale-in events, specify
   *                         <code>autoscaling:EC2_INSTANCE_TERMINATING</code>.</p>
   *             </li>
   *          </ul>
   *          <p>Required for new lifecycle hooks, but optional when updating existing hooks.</p>
   */
  LifecycleTransition?: string;

  /**
   * <p>The ARN of the IAM role that allows the Auto Scaling group to publish to the specified
   *             notification target.</p>
   *          <p>Valid only if the notification target is an Amazon SNS topic or an Amazon SQS queue. Required
   *             for new lifecycle hooks, but optional when updating existing hooks.</p>
   */
  RoleARN?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the notification target that Amazon EC2 Auto Scaling uses to notify
   *             you when an instance is in a wait state for the lifecycle hook. You can specify either
   *             an Amazon SNS topic or an Amazon SQS queue.</p>
   *          <p>If you specify an empty string, this overrides the current ARN.</p>
   *          <p>This operation uses the JSON format when sending notifications to an Amazon SQS queue, and
   *             an email key-value pair format when sending notifications to an Amazon SNS topic.</p>
   *          <p>When you specify a notification target, Amazon EC2 Auto Scaling sends it a test message. Test
   *             messages contain the following additional key-value pair: <code>"Event":
   *                 "autoscaling:TEST_NOTIFICATION"</code>.</p>
   */
  NotificationTargetARN?: string;

  /**
   * <p>Additional information that you want to include any time Amazon EC2 Auto Scaling sends a message to
   *             the notification target.</p>
   */
  NotificationMetadata?: string;

  /**
   * <p>The maximum time, in seconds, that can elapse before the lifecycle hook times out. The
   *             range is from <code>30</code> to <code>7200</code> seconds. The default value is
   *                 <code>3600</code> seconds (1 hour).</p>
   */
  HeartbeatTimeout?: number;

  /**
   * <p>The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an
   *             unexpected failure occurs. The default value is <code>ABANDON</code>.</p>
   *          <p>Valid values: <code>CONTINUE</code> | <code>ABANDON</code>
   *          </p>
   */
  DefaultResult?: string;
}

export interface PutNotificationConfigurationType {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon SNS topic.</p>
   */
  TopicARN: string | undefined;

  /**
   * <p>The type of event that causes the notification to be sent. To query the notification
   *             types supported by Amazon EC2 Auto Scaling, call the <a>DescribeAutoScalingNotificationTypes</a> API.</p>
   */
  NotificationTypes: string[] | undefined;
}

/**
 * <p>Contains the output of PutScalingPolicy.</p>
 */
export interface PolicyARNType {
  /**
   * <p>The Amazon Resource Name (ARN) of the policy.</p>
   */
  PolicyARN?: string;

  /**
   * <p>The CloudWatch alarms created for the target tracking scaling policy.</p>
   */
  Alarms?: Alarm[];
}

export interface PutScalingPolicyType {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The name of the policy.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>One of the following policy types: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>TargetTrackingScaling</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>StepScaling</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>SimpleScaling</code> (default)</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>PredictiveScaling</code>
   *                </p>
   *             </li>
   *          </ul>
   */
  PolicyType?: string;

  /**
   * <p>Specifies how the scaling adjustment is interpreted (for example, an absolute number
   *             or a percentage). The valid values are <code>ChangeInCapacity</code>,
   *                 <code>ExactCapacity</code>, and <code>PercentChangeInCapacity</code>.</p>
   *          <p>Required if the policy type is <code>StepScaling</code> or <code>SimpleScaling</code>.
   *             For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html#as-scaling-adjustment">Scaling adjustment types</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  AdjustmentType?: string;

  /**
   * @deprecated
   *
   * <p>Available for backward compatibility. Use <code>MinAdjustmentMagnitude</code>
   *             instead.</p>
   */
  MinAdjustmentStep?: number;

  /**
   * <p>The minimum value to scale by when the adjustment type is
   *                 <code>PercentChangeInCapacity</code>. For example, suppose that you create a step
   *             scaling policy to scale out an Auto Scaling group by 25 percent and you specify a
   *                 <code>MinAdjustmentMagnitude</code> of 2. If the group has 4 instances and the
   *             scaling policy is performed, 25 percent of 4 is 1. However, because you specified a
   *                 <code>MinAdjustmentMagnitude</code> of 2, Amazon EC2 Auto Scaling scales out the group by 2
   *             instances.</p>
   *          <p>Valid only if the policy type is <code>StepScaling</code> or
   *                 <code>SimpleScaling</code>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html#as-scaling-adjustment">Scaling adjustment types</a> in the <i>Amazon EC2 Auto Scaling User
   *             Guide</i>.</p>
   *          <note>
   *             <p>Some Auto Scaling groups use instance weights. In this case, set the
   *                     <code>MinAdjustmentMagnitude</code> to a value that is at least as large as your
   *                 largest instance weight.</p>
   *          </note>
   */
  MinAdjustmentMagnitude?: number;

  /**
   * <p>The amount by which to scale, based on the specified adjustment type. A positive value
   *             adds to the current capacity while a negative number removes from the current capacity.
   *             For exact capacity, you must specify a positive value.</p>
   *          <p>Required if the policy type is <code>SimpleScaling</code>. (Not used with any other
   *             policy type.) </p>
   */
  ScalingAdjustment?: number;

  /**
   * <p>A cooldown period, in seconds, that applies to a specific simple scaling policy. When
   *             a cooldown period is specified here, it overrides the default cooldown.</p>
   *          <p>Valid only if the policy type is <code>SimpleScaling</code>. For more information, see
   *                 <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/Cooldown.html">Scaling
   *                 cooldowns for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *          <p>Default: None</p>
   */
  Cooldown?: number;

  /**
   * <p>The aggregation type for the CloudWatch metrics. The valid values are <code>Minimum</code>,
   *                 <code>Maximum</code>, and <code>Average</code>. If the aggregation type is null, the
   *             value is treated as <code>Average</code>.</p>
   *          <p>Valid only if the policy type is <code>StepScaling</code>.</p>
   */
  MetricAggregationType?: string;

  /**
   * <p>A set of adjustments that enable you to scale based on the size of the alarm
   *             breach.</p>
   *          <p>Required if the policy type is <code>StepScaling</code>. (Not used with any other
   *             policy type.) </p>
   */
  StepAdjustments?: StepAdjustment[];

  /**
   * <p>
   *             <i>Not needed if the default instance warmup is defined for the
   *                 group.</i>
   *          </p>
   *          <p>The estimated time, in seconds, until a newly launched instance can contribute to the
   *             CloudWatch metrics. This warm-up period applies to instances launched due to a specific target
   *             tracking or step scaling policy. When a warm-up period is specified here, it overrides
   *             the default instance warmup.</p>
   *          <p>Valid only if the policy type is <code>TargetTrackingScaling</code> or
   *                 <code>StepScaling</code>.</p>
   *          <note>
   *             <p>The default is to use the value for the default instance warmup defined for the
   *                 group. If default instance warmup is null, then <code>EstimatedInstanceWarmup</code>
   *                 falls back to the value of default cooldown.</p>
   *          </note>
   */
  EstimatedInstanceWarmup?: number;

  /**
   * <p>A target tracking scaling policy. Provides support for predefined or custom
   *             metrics.</p>
   *          <p>The following predefined metrics are available:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>ASGAverageCPUUtilization</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ASGAverageNetworkIn</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ASGAverageNetworkOut</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ALBRequestCountPerTarget</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If you specify <code>ALBRequestCountPerTarget</code> for the metric, you must specify
   *             the <code>ResourceLabel</code> property with the
   *                 <code>PredefinedMetricSpecification</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_TargetTrackingConfiguration.html">TargetTrackingConfiguration</a> in the <i>Amazon EC2 Auto Scaling API
   *                 Reference</i>.</p>
   *          <p>Required if the policy type is <code>TargetTrackingScaling</code>.</p>
   */
  TargetTrackingConfiguration?: TargetTrackingConfiguration;

  /**
   * <p>Indicates whether the scaling policy is enabled or disabled. The default is enabled.
   *             For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enable-disable-scaling-policy.html">Disabling a
   *                 scaling policy for an Auto Scaling group</a> in the
   *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  Enabled?: boolean;

  /**
   * <p>A predictive scaling policy. Provides support for predefined and custom
   *             metrics.</p>
   *          <p>Predefined metrics include CPU utilization, network in/out, and the Application Load
   *             Balancer request count.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_PredictiveScalingConfiguration.html">PredictiveScalingConfiguration</a> in the <i>Amazon EC2 Auto Scaling API
   *                 Reference</i>.</p>
   *          <p>Required if the policy type is <code>PredictiveScaling</code>.</p>
   */
  PredictiveScalingConfiguration?: PredictiveScalingConfiguration;
}

export interface PutScheduledUpdateGroupActionType {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The name of this scaling action.</p>
   */
  ScheduledActionName: string | undefined;

  /**
   * <p>This property is no longer used.</p>
   */
  Time?: Date;

  /**
   * <p>The date and time for this action to start, in YYYY-MM-DDThh:mm:ssZ format in UTC/GMT
   *             only and in quotes (for example, <code>"2021-06-01T00:00:00Z"</code>).</p>
   *          <p>If you specify <code>Recurrence</code> and <code>StartTime</code>, Amazon EC2 Auto Scaling performs
   *             the action at this time, and then performs the action based on the specified
   *             recurrence.</p>
   */
  StartTime?: Date;

  /**
   * <p>The date and time for the recurring schedule to end, in UTC. For example,
   *                 <code>"2021-06-01T00:00:00Z"</code>.</p>
   */
  EndTime?: Date;

  /**
   * <p>The recurring schedule for this action. This format consists of five fields separated
   *             by white spaces: [Minute] [Hour] [Day_of_Month] [Month_of_Year] [Day_of_Week]. The value
   *             must be in quotes (for example, <code>"30 0 1 1,6,12 *"</code>). For more information
   *             about this format, see <a href="http://crontab.org">Crontab</a>.</p>
   *          <p>When <code>StartTime</code> and <code>EndTime</code> are specified with
   *                 <code>Recurrence</code>, they form the boundaries of when the recurring action
   *             starts and stops.</p>
   *          <p>Cron expressions use Universal Coordinated Time (UTC) by default.</p>
   */
  Recurrence?: string;

  /**
   * <p>The minimum size of the Auto Scaling group.</p>
   */
  MinSize?: number;

  /**
   * <p>The maximum size of the Auto Scaling group.</p>
   */
  MaxSize?: number;

  /**
   * <p>The desired capacity is the initial capacity of the Auto Scaling group after the scheduled
   *             action runs and the capacity it attempts to maintain. It can scale beyond this capacity
   *             if you add more scaling conditions. </p>
   *          <note>
   *             <p>You must specify at least one of the following properties: <code>MaxSize</code>,
   *                     <code>MinSize</code>, or <code>DesiredCapacity</code>. </p>
   *          </note>
   */
  DesiredCapacity?: number;

  /**
   * <p>Specifies the time zone for a cron expression. If a time zone is not provided, UTC is
   *             used by default. </p>
   *          <p>Valid values are the canonical names of the IANA time zones, derived from the IANA
   *             Time Zone Database (such as <code>Etc/GMT+9</code> or <code>Pacific/Tahiti</code>). For
   *             more information, see <a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">https://en.wikipedia.org/wiki/List_of_tz_database_time_zones</a>.</p>
   */
  TimeZone?: string;
}

export interface PutWarmPoolAnswer {}

export interface PutWarmPoolType {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>Specifies the maximum number of instances that are allowed to be in the warm pool or
   *             in any state except <code>Terminated</code> for the Auto Scaling group. This is an optional
   *             property. Specify it only if you do not want the warm pool size to be determined by the
   *             difference between the group's maximum capacity and its desired capacity. </p>
   *          <important>
   *             <p>If a value for <code>MaxGroupPreparedCapacity</code> is not specified, Amazon EC2 Auto Scaling
   *                 launches and maintains the difference between the group's maximum capacity and its
   *                 desired capacity. If you specify a value for <code>MaxGroupPreparedCapacity</code>,
   *                 Amazon EC2 Auto Scaling uses the difference between the <code>MaxGroupPreparedCapacity</code> and
   *                 the desired capacity instead. </p>
   *             <p>The size of the warm pool is dynamic. Only when
   *                     <code>MaxGroupPreparedCapacity</code> and <code>MinSize</code> are set to the
   *                 same value does the warm pool have an absolute size.</p>
   *          </important>
   *          <p>If the desired capacity of the Auto Scaling group is higher than the
   *                 <code>MaxGroupPreparedCapacity</code>, the capacity of the warm pool is 0, unless
   *             you specify a value for <code>MinSize</code>. To remove a value that you previously set,
   *             include the property but specify -1 for the value. </p>
   */
  MaxGroupPreparedCapacity?: number;

  /**
   * <p>Specifies the minimum number of instances to maintain in the warm pool. This helps you
   *             to ensure that there is always a certain number of warmed instances available to handle
   *             traffic spikes. Defaults to 0 if not specified.</p>
   */
  MinSize?: number;

  /**
   * <p>Sets the instance state to transition to after the lifecycle actions are complete.
   *             Default is <code>Stopped</code>.</p>
   */
  PoolState?: WarmPoolState | string;

  /**
   * <p>Indicates whether instances in the Auto Scaling group can be returned to the warm pool on
   *             scale in. The default is to terminate instances in the Auto Scaling group when the group scales
   *             in.</p>
   */
  InstanceReusePolicy?: InstanceReusePolicy;
}

export interface RecordLifecycleActionHeartbeatAnswer {}

export interface RecordLifecycleActionHeartbeatType {
  /**
   * <p>The name of the lifecycle hook.</p>
   */
  LifecycleHookName: string | undefined;

  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>A token that uniquely identifies a specific lifecycle action associated with an
   *             instance. Amazon EC2 Auto Scaling sends this token to the notification target that you specified when
   *             you created the lifecycle hook.</p>
   */
  LifecycleActionToken?: string;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;
}

export interface ScalingProcessQuery {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>One or more of the following processes:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>Launch</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>Terminate</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AddToLoadBalancer</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AlarmNotification</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>AZRebalance</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>HealthCheck</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>InstanceRefresh</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ReplaceUnhealthy</code>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>ScheduledActions</code>
   *                </p>
   *             </li>
   *          </ul>
   *          <p>If you omit this property, all processes are specified.</p>
   */
  ScalingProcesses?: string[];
}

export interface SetDesiredCapacityType {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The desired capacity is the initial capacity of the Auto Scaling group after this operation
   *             completes and the capacity it attempts to maintain.</p>
   */
  DesiredCapacity: number | undefined;

  /**
   * <p>Indicates whether Amazon EC2 Auto Scaling waits for the cooldown period to complete before initiating
   *             a scaling activity to set your Auto Scaling group to its new capacity. By default, Amazon EC2 Auto Scaling does
   *             not honor the cooldown period during manual scaling activities.</p>
   */
  HonorCooldown?: boolean;
}

export interface SetInstanceHealthQuery {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The health status of the instance. Set to <code>Healthy</code> to have the instance
   *             remain in service. Set to <code>Unhealthy</code> to have the instance be out of service.
   *             Amazon EC2 Auto Scaling terminates and replaces the unhealthy instance.</p>
   */
  HealthStatus: string | undefined;

  /**
   * <p>If the Auto Scaling group of the specified instance has a <code>HealthCheckGracePeriod</code>
   *             specified for the group, by default, this call respects the grace period. Set this to
   *                 <code>False</code>, to have the call not respect the grace period associated with
   *             the group.</p>
   *          <p>For more information about the health check grace
   *             period, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_CreateAutoScalingGroup.html">CreateAutoScalingGroup</a> in the <i>Amazon EC2 Auto Scaling API
   *             Reference</i>.</p>
   */
  ShouldRespectGracePeriod?: boolean;
}

export interface SetInstanceProtectionAnswer {}

export interface SetInstanceProtectionQuery {
  /**
   * <p>One or more instance IDs. You can specify up to 50 instances.</p>
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>Indicates whether the instance is protected from termination by Amazon EC2 Auto Scaling when scaling
   *             in.</p>
   */
  ProtectedFromScaleIn: boolean | undefined;
}

/**
 * <p>The request failed because an active instance refresh operation already exists for the
 *             specified Auto Scaling group.</p>
 */
export class InstanceRefreshInProgressFault extends __BaseException {
  readonly name: "InstanceRefreshInProgressFault" = "InstanceRefreshInProgressFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InstanceRefreshInProgressFault, __BaseException>) {
    super({
      name: "InstanceRefreshInProgressFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InstanceRefreshInProgressFault.prototype);
  }
}

export interface StartInstanceRefreshAnswer {
  /**
   * <p>A unique ID for tracking the progress of the request.</p>
   */
  InstanceRefreshId?: string;
}

export enum RefreshStrategy {
  Rolling = "Rolling",
}

export interface StartInstanceRefreshType {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The strategy to use for the instance refresh. The only valid value is
   *                 <code>Rolling</code>.</p>
   *          <p>A rolling update helps you update your instances gradually. A rolling update can fail
   *             due to failed health checks or if instances are on standby or are protected from scale
   *             in. If the rolling update process fails, any instances that are replaced are not rolled
   *             back to their previous configuration. </p>
   */
  Strategy?: RefreshStrategy | string;

  /**
   * <p>The desired configuration. For example, the desired configuration can specify a new
   *             launch template or a new version of the current launch template.</p>
   *          <p>Once the instance refresh succeeds, Amazon EC2 Auto Scaling updates the settings of the Auto Scaling group to
   *             reflect the new desired configuration. </p>
   *          <note>
   *             <p>When you specify a new launch template or a new version of the current launch
   *                 template for your desired configuration, consider enabling the
   *                     <code>SkipMatching</code> property in preferences. If it's enabled, Amazon EC2 Auto Scaling
   *                 skips replacing instances that already use the specified launch template and
   *                 version. This can help you reduce the number of replacements that are required to
   *                 apply updates. </p>
   *          </note>
   */
  DesiredConfiguration?: DesiredConfiguration;

  /**
   * <p>Set of preferences associated with the instance refresh request. If not provided, the
   *             default values are used.</p>
   */
  Preferences?: RefreshPreferences;
}

export interface TerminateInstanceInAutoScalingGroupType {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>Indicates whether terminating the instance also decrements the size of the Auto Scaling
   *             group.</p>
   */
  ShouldDecrementDesiredCapacity: boolean | undefined;
}

export interface UpdateAutoScalingGroupType {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The name of the launch configuration. If you specify
   *                 <code>LaunchConfigurationName</code> in your update request, you can't specify
   *                 <code>LaunchTemplate</code> or <code>MixedInstancesPolicy</code>.</p>
   */
  LaunchConfigurationName?: string;

  /**
   * <p>The launch template and version to use to specify the updates. If you specify
   *                 <code>LaunchTemplate</code> in your update request, you can't specify
   *                 <code>LaunchConfigurationName</code> or <code>MixedInstancesPolicy</code>.</p>
   */
  LaunchTemplate?: LaunchTemplateSpecification;

  /**
   * <p>The mixed instances policy. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html">Auto Scaling
   *                 groups with multiple instance types and purchase options</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  MixedInstancesPolicy?: MixedInstancesPolicy;

  /**
   * <p>The minimum size of the Auto Scaling group.</p>
   */
  MinSize?: number;

  /**
   * <p>The maximum size of the Auto Scaling group.</p>
   *          <note>
   *             <p>With a mixed instances policy that uses instance weighting, Amazon EC2 Auto Scaling may need to
   *                 go above <code>MaxSize</code> to meet your capacity requirements. In this event,
   *                 Amazon EC2 Auto Scaling will never go above <code>MaxSize</code> by more than your largest instance
   *                 weight (weights that define how many units each instance contributes to the desired
   *                 capacity of the group).</p>
   *          </note>
   */
  MaxSize?: number;

  /**
   * <p>The desired capacity is the initial capacity of the Auto Scaling group after this operation
   *             completes and the capacity it attempts to maintain. This number must be greater than or
   *             equal to the minimum size of the group and less than or equal to the maximum size of the
   *             group.</p>
   */
  DesiredCapacity?: number;

  /**
   * <p>
   *             <i>Only needed if you use simple scaling policies.</i>
   *          </p>
   *          <p>The amount of time, in seconds, between one scaling activity ending and another one
   *             starting due to simple scaling policies. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/Cooldown.html">Scaling cooldowns
   *                 for Amazon EC2 Auto Scaling</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  DefaultCooldown?: number;

  /**
   * <p>One or more Availability Zones for the group.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>Determines whether any additional health checks are performed on the instances in this
   *             group. Amazon EC2 health checks are always on.</p>
   *          <p>The valid values are <code>EC2</code> (default), <code>ELB</code>, and
   *                 <code>VPC_LATTICE</code>. The <code>VPC_LATTICE</code> health check type is reserved
   *             for use with VPC Lattice, which is in preview release and is subject to change.</p>
   */
  HealthCheckType?: string;

  /**
   * <p>The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before checking the health status
   *             of an EC2 instance that has come into service and marking it unhealthy due to a failed
   *             health check. This is useful if your instances do not immediately pass their health
   *             checks after they enter the <code>InService</code> state. For more information, see
   *                 <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/health-check-grace-period.html">Set the health check
   *                 grace period for an Auto Scaling group</a> in the
   *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  HealthCheckGracePeriod?: number;

  /**
   * <p>The name of an existing placement group into which to launch your instances. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement groups</a> in the
   *                 <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   *          <note>
   *             <p>A <i>cluster</i> placement group is a logical grouping of instances
   *                 within a single Availability Zone. You cannot specify multiple Availability Zones
   *                 and a cluster placement group. </p>
   *          </note>
   */
  PlacementGroup?: string;

  /**
   * <p>A comma-separated list of subnet IDs for a virtual private cloud (VPC). If you specify
   *                 <code>VPCZoneIdentifier</code> with <code>AvailabilityZones</code>, the subnets that
   *             you specify must reside in those Availability Zones.</p>
   */
  VPCZoneIdentifier?: string;

  /**
   * <p>A policy or a list of policies that are used to select the instances to terminate. The
   *             policies are executed in the order that you list them. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-termination-policies.html">Work with
   *                 Amazon EC2 Auto Scaling termination policies</a> in the
   *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *          <p>Valid values: <code>Default</code> | <code>AllocationStrategy</code> |
   *                 <code>ClosestToNextInstanceHour</code> | <code>NewestInstance</code> |
   *                 <code>OldestInstance</code> | <code>OldestLaunchConfiguration</code> |
   *                 <code>OldestLaunchTemplate</code> |
   *                 <code>arn:aws:lambda:region:account-id:function:my-function:my-alias</code>
   *          </p>
   */
  TerminationPolicies?: string[];

  /**
   * <p>Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling
   *             when scaling in. For more information about preventing instances from terminating on
   *             scale in, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-protection.html">Using
   *                 instance scale-in protection</a> in the
   *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  NewInstancesProtectedFromScaleIn?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to
   *             call other Amazon Web Services on your behalf. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-service-linked-role.html">Service-linked
   *                 roles</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  ServiceLinkedRoleARN?: string;

  /**
   * <p>The maximum amount of time, in seconds, that an instance can be in service. The
   *             default is null. If specified, the value must be either 0 or a number equal to or
   *             greater than 86,400 seconds (1 day). To clear a previously set value, specify a new
   *             value of 0. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-max-instance-lifetime.html">Replacing Auto Scaling
   *                 instances based on maximum instance lifetime</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  MaxInstanceLifetime?: number;

  /**
   * <p>Enables or disables Capacity Rebalancing. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-capacity-rebalancing.html">Use Capacity
   *             Rebalancing to handle Amazon EC2 Spot Interruptions</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  CapacityRebalance?: boolean;

  /**
   * <p>Reserved.</p>
   */
  Context?: string;

  /**
   * <p>The unit of measurement for the value specified for desired capacity. Amazon EC2 Auto Scaling
   *             supports <code>DesiredCapacityType</code> for attribute-based instance type selection
   *             only. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-asg-instance-type-requirements.html">Creating
   *                 an Auto Scaling group using attribute-based instance type selection</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *          <p>By default, Amazon EC2 Auto Scaling specifies <code>units</code>, which translates into number of
   *             instances.</p>
   *          <p>Valid values: <code>units</code> | <code>vcpu</code> | <code>memory-mib</code>
   *          </p>
   */
  DesiredCapacityType?: string;

  /**
   * <p>The amount of time, in seconds, until a newly launched instance can contribute to the
   *             Amazon CloudWatch metrics. This delay lets an instance finish initializing before Amazon EC2 Auto Scaling
   *             aggregates instance metrics, resulting in more reliable usage data. Set this value equal
   *             to the amount of time that it takes for resource consumption to become stable after an
   *             instance reaches the <code>InService</code> state. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-default-instance-warmup.html">Set
   *                 the default instance warmup for an Auto Scaling group</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *          <important>
   *             <p>To manage your warm-up settings at the group level, we recommend that you set the
   *                 default instance warmup, <i>even if its value is set to 0 seconds</i>.
   *                 This also optimizes the performance of scaling policies that scale continuously,
   *                 such as target tracking and step scaling policies. </p>
   *             <p>If you need to remove a value that you previously set, include the property but
   *                 specify <code>-1</code> for the value. However, we strongly recommend keeping the
   *                 default instance warmup enabled by specifying a minimum value of
   *                 <code>0</code>.</p>
   *          </important>
   */
  DefaultInstanceWarmup?: number;
}

/**
 * @internal
 */
export const AcceleratorCountRequestFilterSensitiveLog = (obj: AcceleratorCountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AcceleratorTotalMemoryMiBRequestFilterSensitiveLog = (obj: AcceleratorTotalMemoryMiBRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActivityFilterSensitiveLog = (obj: Activity): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActivitiesTypeFilterSensitiveLog = (obj: ActivitiesType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ActivityTypeFilterSensitiveLog = (obj: ActivityType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AdjustmentTypeFilterSensitiveLog = (obj: AdjustmentType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AlarmFilterSensitiveLog = (obj: Alarm): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachInstancesQueryFilterSensitiveLog = (obj: AttachInstancesQuery): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachLoadBalancersResultTypeFilterSensitiveLog = (obj: AttachLoadBalancersResultType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachLoadBalancersTypeFilterSensitiveLog = (obj: AttachLoadBalancersType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachLoadBalancerTargetGroupsResultTypeFilterSensitiveLog = (
  obj: AttachLoadBalancerTargetGroupsResultType
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachLoadBalancerTargetGroupsTypeFilterSensitiveLog = (obj: AttachLoadBalancerTargetGroupsType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachTrafficSourcesResultTypeFilterSensitiveLog = (obj: AttachTrafficSourcesResultType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrafficSourceIdentifierFilterSensitiveLog = (obj: TrafficSourceIdentifier): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AttachTrafficSourcesTypeFilterSensitiveLog = (obj: AttachTrafficSourcesType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FailedScheduledUpdateGroupActionRequestFilterSensitiveLog = (
  obj: FailedScheduledUpdateGroupActionRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDeleteScheduledActionAnswerFilterSensitiveLog = (obj: BatchDeleteScheduledActionAnswer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchDeleteScheduledActionTypeFilterSensitiveLog = (obj: BatchDeleteScheduledActionType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchPutScheduledUpdateGroupActionAnswerFilterSensitiveLog = (
  obj: BatchPutScheduledUpdateGroupActionAnswer
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduledUpdateGroupActionRequestFilterSensitiveLog = (obj: ScheduledUpdateGroupActionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BatchPutScheduledUpdateGroupActionTypeFilterSensitiveLog = (
  obj: BatchPutScheduledUpdateGroupActionType
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelInstanceRefreshAnswerFilterSensitiveLog = (obj: CancelInstanceRefreshAnswer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CancelInstanceRefreshTypeFilterSensitiveLog = (obj: CancelInstanceRefreshType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CompleteLifecycleActionAnswerFilterSensitiveLog = (obj: CompleteLifecycleActionAnswer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CompleteLifecycleActionTypeFilterSensitiveLog = (obj: CompleteLifecycleActionType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateSpecificationFilterSensitiveLog = (obj: LaunchTemplateSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LifecycleHookSpecificationFilterSensitiveLog = (obj: LifecycleHookSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstancesDistributionFilterSensitiveLog = (obj: InstancesDistribution): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BaselineEbsBandwidthMbpsRequestFilterSensitiveLog = (obj: BaselineEbsBandwidthMbpsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MemoryGiBPerVCpuRequestFilterSensitiveLog = (obj: MemoryGiBPerVCpuRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MemoryMiBRequestFilterSensitiveLog = (obj: MemoryMiBRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkBandwidthGbpsRequestFilterSensitiveLog = (obj: NetworkBandwidthGbpsRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NetworkInterfaceCountRequestFilterSensitiveLog = (obj: NetworkInterfaceCountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TotalLocalStorageGBRequestFilterSensitiveLog = (obj: TotalLocalStorageGBRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const VCpuCountRequestFilterSensitiveLog = (obj: VCpuCountRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceRequirementsFilterSensitiveLog = (obj: InstanceRequirements): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateOverridesFilterSensitiveLog = (obj: LaunchTemplateOverrides): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchTemplateFilterSensitiveLog = (obj: LaunchTemplate): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MixedInstancesPolicyFilterSensitiveLog = (obj: MixedInstancesPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagFilterSensitiveLog = (obj: Tag): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateAutoScalingGroupTypeFilterSensitiveLog = (obj: CreateAutoScalingGroupType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EbsFilterSensitiveLog = (obj: Ebs): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BlockDeviceMappingFilterSensitiveLog = (obj: BlockDeviceMapping): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceMonitoringFilterSensitiveLog = (obj: InstanceMonitoring): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceMetadataOptionsFilterSensitiveLog = (obj: InstanceMetadataOptions): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateLaunchConfigurationTypeFilterSensitiveLog = (obj: CreateLaunchConfigurationType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CreateOrUpdateTagsTypeFilterSensitiveLog = (obj: CreateOrUpdateTagsType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteAutoScalingGroupTypeFilterSensitiveLog = (obj: DeleteAutoScalingGroupType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchConfigurationNameTypeFilterSensitiveLog = (obj: LaunchConfigurationNameType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLifecycleHookAnswerFilterSensitiveLog = (obj: DeleteLifecycleHookAnswer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteLifecycleHookTypeFilterSensitiveLog = (obj: DeleteLifecycleHookType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteNotificationConfigurationTypeFilterSensitiveLog = (
  obj: DeleteNotificationConfigurationType
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeletePolicyTypeFilterSensitiveLog = (obj: DeletePolicyType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteScheduledActionTypeFilterSensitiveLog = (obj: DeleteScheduledActionType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteTagsTypeFilterSensitiveLog = (obj: DeleteTagsType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWarmPoolAnswerFilterSensitiveLog = (obj: DeleteWarmPoolAnswer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DeleteWarmPoolTypeFilterSensitiveLog = (obj: DeleteWarmPoolType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAccountLimitsAnswerFilterSensitiveLog = (obj: DescribeAccountLimitsAnswer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAdjustmentTypesAnswerFilterSensitiveLog = (obj: DescribeAdjustmentTypesAnswer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const FilterFilterSensitiveLog = (obj: Filter): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoScalingGroupNamesTypeFilterSensitiveLog = (obj: AutoScalingGroupNamesType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnabledMetricFilterSensitiveLog = (obj: EnabledMetric): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceFilterSensitiveLog = (obj: Instance): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SuspendedProcessFilterSensitiveLog = (obj: SuspendedProcess): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagDescriptionFilterSensitiveLog = (obj: TagDescription): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceReusePolicyFilterSensitiveLog = (obj: InstanceReusePolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const WarmPoolConfigurationFilterSensitiveLog = (obj: WarmPoolConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoScalingGroupFilterSensitiveLog = (obj: AutoScalingGroup): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoScalingGroupsTypeFilterSensitiveLog = (obj: AutoScalingGroupsType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoScalingInstanceDetailsFilterSensitiveLog = (obj: AutoScalingInstanceDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const AutoScalingInstancesTypeFilterSensitiveLog = (obj: AutoScalingInstancesType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAutoScalingInstancesTypeFilterSensitiveLog = (obj: DescribeAutoScalingInstancesType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeAutoScalingNotificationTypesAnswerFilterSensitiveLog = (
  obj: DescribeAutoScalingNotificationTypesAnswer
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DesiredConfigurationFilterSensitiveLog = (obj: DesiredConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RefreshPreferencesFilterSensitiveLog = (obj: RefreshPreferences): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceRefreshLivePoolProgressFilterSensitiveLog = (obj: InstanceRefreshLivePoolProgress): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceRefreshWarmPoolProgressFilterSensitiveLog = (obj: InstanceRefreshWarmPoolProgress): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceRefreshProgressDetailsFilterSensitiveLog = (obj: InstanceRefreshProgressDetails): any => ({
  ...obj,
});

/**
 * @internal
 */
export const InstanceRefreshFilterSensitiveLog = (obj: InstanceRefresh): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstanceRefreshesAnswerFilterSensitiveLog = (obj: DescribeInstanceRefreshesAnswer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeInstanceRefreshesTypeFilterSensitiveLog = (obj: DescribeInstanceRefreshesType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchConfigurationNamesTypeFilterSensitiveLog = (obj: LaunchConfigurationNamesType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchConfigurationFilterSensitiveLog = (obj: LaunchConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LaunchConfigurationsTypeFilterSensitiveLog = (obj: LaunchConfigurationsType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LifecycleHookFilterSensitiveLog = (obj: LifecycleHook): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLifecycleHooksAnswerFilterSensitiveLog = (obj: DescribeLifecycleHooksAnswer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLifecycleHooksTypeFilterSensitiveLog = (obj: DescribeLifecycleHooksType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLifecycleHookTypesAnswerFilterSensitiveLog = (obj: DescribeLifecycleHookTypesAnswer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLoadBalancersRequestFilterSensitiveLog = (obj: DescribeLoadBalancersRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoadBalancerStateFilterSensitiveLog = (obj: LoadBalancerState): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLoadBalancersResponseFilterSensitiveLog = (obj: DescribeLoadBalancersResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLoadBalancerTargetGroupsRequestFilterSensitiveLog = (
  obj: DescribeLoadBalancerTargetGroupsRequest
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoadBalancerTargetGroupStateFilterSensitiveLog = (obj: LoadBalancerTargetGroupState): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeLoadBalancerTargetGroupsResponseFilterSensitiveLog = (
  obj: DescribeLoadBalancerTargetGroupsResponse
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricGranularityTypeFilterSensitiveLog = (obj: MetricGranularityType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricCollectionTypeFilterSensitiveLog = (obj: MetricCollectionType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeMetricCollectionTypesAnswerFilterSensitiveLog = (
  obj: DescribeMetricCollectionTypesAnswer
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const NotificationConfigurationFilterSensitiveLog = (obj: NotificationConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNotificationConfigurationsAnswerFilterSensitiveLog = (
  obj: DescribeNotificationConfigurationsAnswer
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeNotificationConfigurationsTypeFilterSensitiveLog = (
  obj: DescribeNotificationConfigurationsType
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribePoliciesTypeFilterSensitiveLog = (obj: DescribePoliciesType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricDimensionFilterSensitiveLog = (obj: MetricDimension): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricFilterSensitiveLog = (obj: Metric): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricStatFilterSensitiveLog = (obj: MetricStat): any => ({
  ...obj,
});

/**
 * @internal
 */
export const MetricDataQueryFilterSensitiveLog = (obj: MetricDataQuery): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PredictiveScalingCustomizedCapacityMetricFilterSensitiveLog = (
  obj: PredictiveScalingCustomizedCapacityMetric
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PredictiveScalingCustomizedLoadMetricFilterSensitiveLog = (
  obj: PredictiveScalingCustomizedLoadMetric
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PredictiveScalingCustomizedScalingMetricFilterSensitiveLog = (
  obj: PredictiveScalingCustomizedScalingMetric
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PredictiveScalingPredefinedLoadMetricFilterSensitiveLog = (
  obj: PredictiveScalingPredefinedLoadMetric
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PredictiveScalingPredefinedMetricPairFilterSensitiveLog = (
  obj: PredictiveScalingPredefinedMetricPair
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PredictiveScalingPredefinedScalingMetricFilterSensitiveLog = (
  obj: PredictiveScalingPredefinedScalingMetric
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PredictiveScalingMetricSpecificationFilterSensitiveLog = (
  obj: PredictiveScalingMetricSpecification
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PredictiveScalingConfigurationFilterSensitiveLog = (obj: PredictiveScalingConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StepAdjustmentFilterSensitiveLog = (obj: StepAdjustment): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetTrackingMetricStatFilterSensitiveLog = (obj: TargetTrackingMetricStat): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetTrackingMetricDataQueryFilterSensitiveLog = (obj: TargetTrackingMetricDataQuery): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CustomizedMetricSpecificationFilterSensitiveLog = (obj: CustomizedMetricSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PredefinedMetricSpecificationFilterSensitiveLog = (obj: PredefinedMetricSpecification): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TargetTrackingConfigurationFilterSensitiveLog = (obj: TargetTrackingConfiguration): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScalingPolicyFilterSensitiveLog = (obj: ScalingPolicy): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PoliciesTypeFilterSensitiveLog = (obj: PoliciesType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeScalingActivitiesTypeFilterSensitiveLog = (obj: DescribeScalingActivitiesType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProcessTypeFilterSensitiveLog = (obj: ProcessType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ProcessesTypeFilterSensitiveLog = (obj: ProcessesType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeScheduledActionsTypeFilterSensitiveLog = (obj: DescribeScheduledActionsType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduledUpdateGroupActionFilterSensitiveLog = (obj: ScheduledUpdateGroupAction): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScheduledActionsTypeFilterSensitiveLog = (obj: ScheduledActionsType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTagsTypeFilterSensitiveLog = (obj: DescribeTagsType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TagsTypeFilterSensitiveLog = (obj: TagsType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTerminationPolicyTypesAnswerFilterSensitiveLog = (
  obj: DescribeTerminationPolicyTypesAnswer
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTrafficSourcesRequestFilterSensitiveLog = (obj: DescribeTrafficSourcesRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TrafficSourceStateFilterSensitiveLog = (obj: TrafficSourceState): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeTrafficSourcesResponseFilterSensitiveLog = (obj: DescribeTrafficSourcesResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWarmPoolAnswerFilterSensitiveLog = (obj: DescribeWarmPoolAnswer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DescribeWarmPoolTypeFilterSensitiveLog = (obj: DescribeWarmPoolType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetachInstancesAnswerFilterSensitiveLog = (obj: DetachInstancesAnswer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetachInstancesQueryFilterSensitiveLog = (obj: DetachInstancesQuery): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetachLoadBalancersResultTypeFilterSensitiveLog = (obj: DetachLoadBalancersResultType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetachLoadBalancersTypeFilterSensitiveLog = (obj: DetachLoadBalancersType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetachLoadBalancerTargetGroupsResultTypeFilterSensitiveLog = (
  obj: DetachLoadBalancerTargetGroupsResultType
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetachLoadBalancerTargetGroupsTypeFilterSensitiveLog = (obj: DetachLoadBalancerTargetGroupsType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetachTrafficSourcesResultTypeFilterSensitiveLog = (obj: DetachTrafficSourcesResultType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DetachTrafficSourcesTypeFilterSensitiveLog = (obj: DetachTrafficSourcesType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const DisableMetricsCollectionQueryFilterSensitiveLog = (obj: DisableMetricsCollectionQuery): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnableMetricsCollectionQueryFilterSensitiveLog = (obj: EnableMetricsCollectionQuery): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnterStandbyAnswerFilterSensitiveLog = (obj: EnterStandbyAnswer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const EnterStandbyQueryFilterSensitiveLog = (obj: EnterStandbyQuery): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExecutePolicyTypeFilterSensitiveLog = (obj: ExecutePolicyType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExitStandbyAnswerFilterSensitiveLog = (obj: ExitStandbyAnswer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ExitStandbyQueryFilterSensitiveLog = (obj: ExitStandbyQuery): any => ({
  ...obj,
});

/**
 * @internal
 */
export const CapacityForecastFilterSensitiveLog = (obj: CapacityForecast): any => ({
  ...obj,
});

/**
 * @internal
 */
export const LoadForecastFilterSensitiveLog = (obj: LoadForecast): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPredictiveScalingForecastAnswerFilterSensitiveLog = (obj: GetPredictiveScalingForecastAnswer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetPredictiveScalingForecastTypeFilterSensitiveLog = (obj: GetPredictiveScalingForecastType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutLifecycleHookAnswerFilterSensitiveLog = (obj: PutLifecycleHookAnswer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutLifecycleHookTypeFilterSensitiveLog = (obj: PutLifecycleHookType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutNotificationConfigurationTypeFilterSensitiveLog = (obj: PutNotificationConfigurationType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PolicyARNTypeFilterSensitiveLog = (obj: PolicyARNType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutScalingPolicyTypeFilterSensitiveLog = (obj: PutScalingPolicyType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutScheduledUpdateGroupActionTypeFilterSensitiveLog = (obj: PutScheduledUpdateGroupActionType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutWarmPoolAnswerFilterSensitiveLog = (obj: PutWarmPoolAnswer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const PutWarmPoolTypeFilterSensitiveLog = (obj: PutWarmPoolType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecordLifecycleActionHeartbeatAnswerFilterSensitiveLog = (
  obj: RecordLifecycleActionHeartbeatAnswer
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const RecordLifecycleActionHeartbeatTypeFilterSensitiveLog = (obj: RecordLifecycleActionHeartbeatType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const ScalingProcessQueryFilterSensitiveLog = (obj: ScalingProcessQuery): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetDesiredCapacityTypeFilterSensitiveLog = (obj: SetDesiredCapacityType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetInstanceHealthQueryFilterSensitiveLog = (obj: SetInstanceHealthQuery): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetInstanceProtectionAnswerFilterSensitiveLog = (obj: SetInstanceProtectionAnswer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const SetInstanceProtectionQueryFilterSensitiveLog = (obj: SetInstanceProtectionQuery): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartInstanceRefreshAnswerFilterSensitiveLog = (obj: StartInstanceRefreshAnswer): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartInstanceRefreshTypeFilterSensitiveLog = (obj: StartInstanceRefreshType): any => ({
  ...obj,
});

/**
 * @internal
 */
export const TerminateInstanceInAutoScalingGroupTypeFilterSensitiveLog = (
  obj: TerminateInstanceInAutoScalingGroupType
): any => ({
  ...obj,
});

/**
 * @internal
 */
export const UpdateAutoScalingGroupTypeFilterSensitiveLog = (obj: UpdateAutoScalingGroupType): any => ({
  ...obj,
});
