// smithy-typescript generated code
import type {
  AcceleratorManufacturer,
  AcceleratorName,
  AcceleratorType,
  BareMetal,
  BurstablePerformance,
  CapacityDistributionStrategy,
  CapacityReservationPreference,
  CpuManufacturer,
  DeletionProtection,
  ImpairedZoneHealthCheckBehavior,
  InstanceGeneration,
  InstanceMetadataEndpointState,
  InstanceMetadataHttpTokensState,
  InstanceRefreshStatus,
  LifecycleState,
  LocalStorage,
  LocalStorageType,
  MetricStatistic,
  MetricType,
  PredefinedLoadMetricType,
  PredefinedMetricPairType,
  PredefinedScalingMetricType,
  PredictiveScalingMaxCapacityBreachBehavior,
  PredictiveScalingMode,
  RefreshStrategy,
  RetentionAction,
  RetryStrategy,
  ScaleInProtectedInstances,
  ScalingActivityStatusCode,
  StandbyInstances,
  TargetCapacityType,
  WarmPoolState,
  WarmPoolStatus,
} from "./enums";

/**
 * Specifies the minimum and maximum for the `AcceleratorCount` object when you specify [InstanceRequirements](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_InstanceRequirements.html) for an Auto Scaling group.
 *
 * @public
 */
export interface AcceleratorCountRequest {
  /**
   * The minimum value.
   *
   * @public
   */
  Min?: number | undefined;

  /**
   * The maximum value.
   *
   * @public
   */
  Max?: number | undefined;
}

/**
 * Specifies the minimum and maximum for the `AcceleratorTotalMemoryMiB` object when you specify [InstanceRequirements](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_InstanceRequirements.html) for an Auto Scaling group.
 *
 * @public
 */
export interface AcceleratorTotalMemoryMiBRequest {
  /**
   * The memory minimum in MiB.
   *
   * @public
   */
  Min?: number | undefined;

  /**
   * The memory maximum in MiB.
   *
   * @public
   */
  Max?: number | undefined;
}

/**
 * Describes an account setting for Amazon EC2 Auto Scaling. Account settings control how certain features behave for your account. Some settings can be enforced after a specified date, meaning that after the enforcement date, you can no longer modify the setting.
 *
 * @public
 */
export interface AccountSetting {
  /**
   * The name of the account setting. Each account setting has a unique name that identifies the specific feature it controls.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The current value of the account setting.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * The type of enforcement for the account setting. Valid values include: `hard` (the setting has a hard enforcement date after which the setting will be enforced and cannot be modified), `flexible` (the setting has a flexible enforcement where you can always modify the setting value), and `none` (the setting has no enforcement and can always be modified).
   *
   * @public
   */
  EnforcementType?: string | undefined;

  /**
   * The date when the account setting will be enforced. After this date, for settings with hard enforcement type, you can no longer modify the setting value. This parameter is only returned for settings with hard or flexible enforcement types.
   *
   * @public
   */
  EnforcementDate?: Date | undefined;

  /**
   * The default value of the account setting before the enforcement date. Valid values are enabled and disabled. This parameter is only returned for settings with hard or flexible enforcement types.
   *
   * @public
   */
  DefaultValue?: string | undefined;

  /**
   * The value that will be enforced after the enforcement date. Valid values are enabled and disabled. This parameter is only returned for settings with hard or flexible enforcement types.
   *
   * @public
   */
  EnforcedValue?: string | undefined;
}

/**
 * Describes scaling activity, which is a long-running process that represents a change to your Auto Scaling group, such as changing its size or replacing an instance.
 *
 * @public
 */
export interface Activity {
  /**
   * The ID of the activity.
   *
   * @public
   */
  ActivityId: string | undefined;

  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * A friendly, more verbose description of the activity.
   *
   * @public
   */
  Description?: string | undefined;

  /**
   * The reason the activity began.
   *
   * @public
   */
  Cause: string | undefined;

  /**
   * The start time of the activity.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The end time of the activity.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The current status of the activity.
   *
   * @public
   */
  StatusCode: ScalingActivityStatusCode | undefined;

  /**
   * A friendly, more verbose description of the activity status.
   *
   * @public
   */
  StatusMessage?: string | undefined;

  /**
   * A value between 0 and 100 that indicates the progress of the activity.
   *
   * @public
   */
  Progress?: number | undefined;

  /**
   * The details about the activity.
   *
   * @public
   */
  Details?: string | undefined;

  /**
   * The state of the Auto Scaling group, which is either `InService` or `Deleted`.
   *
   * @public
   */
  AutoScalingGroupState?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupARN?: string | undefined;
}

/**
 * @public
 */
export interface ActivitiesType {
  /**
   * The scaling activities. Activities are sorted by start time. Activities still in progress are described first.
   *
   * @public
   */
  Activities: Activity[] | undefined;

  /**
   * A string that indicates that the response contains more items than can be returned in a single response. To receive additional items, specify this string for the `NextToken` value when requesting the next set of items. This value is null when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ActivityType {
  /**
   * A scaling activity.
   *
   * @public
   */
  Activity?: Activity | undefined;

  /**
   * The scaling activities related to terminating the instances from the Auto Scaling group.
   *
   * @public
   */
  Activities?: Activity[] | undefined;
}

/**
 * Describes a policy adjustment type.
 *
 * @public
 */
export interface AdjustmentType {
  /**
   * The policy adjustment type. The valid values are `ChangeInCapacity`, `ExactCapacity`, and `PercentChangeInCapacity`.
   *
   * @public
   */
  AdjustmentType?: string | undefined;
}

/**
 * Describes an alarm.
 *
 * @public
 */
export interface Alarm {
  /**
   * The name of the alarm.
   *
   * @public
   */
  AlarmName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the alarm.
   *
   * @public
   */
  AlarmARN?: string | undefined;
}

/**
 * Specifies the CloudWatch alarm specification to use in an instance refresh.
 *
 * @public
 */
export interface AlarmSpecification {
  /**
   * The names of one or more CloudWatch alarms to monitor for the instance refresh. You can specify up to 10 alarms.
   *
   * @public
   */
  Alarms?: string[] | undefined;
}

/**
 * @public
 */
export interface AttachInstancesQuery {
  /**
   * The IDs of the instances. You can specify up to 20 instances.
   *
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;
}

/**
 * @public
 */
export interface AttachLoadBalancersResultType {}

/**
 * @public
 */
export interface AttachLoadBalancersType {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * The names of the load balancers. You can specify up to 10 load balancers.
   *
   * @public
   */
  LoadBalancerNames: string[] | undefined;
}

/**
 * @public
 */
export interface AttachLoadBalancerTargetGroupsResultType {}

/**
 * @public
 */
export interface AttachLoadBalancerTargetGroupsType {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the target groups. You can specify up to 10 target groups. To get the ARN of a target group, use the Elastic Load Balancing [DescribeTargetGroups](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html) API operation.
   *
   * @public
   */
  TargetGroupARNs: string[] | undefined;
}

/**
 * @public
 */
export interface AttachTrafficSourcesResultType {}

/**
 * Identifying information for a traffic source.
 *
 * @public
 */
export interface TrafficSourceIdentifier {
  /**
   * Identifies the traffic source.
   *
   * For Application Load Balancers, Gateway Load Balancers, Network Load Balancers, and VPC Lattice, this will be the Amazon Resource Name (ARN) for a target group in this account and Region. For Classic Load Balancers, this will be the name of the Classic Load Balancer in this account and Region.
   *
   * For example:
   *
   * - Application Load Balancer ARN: `arn:aws:elasticloadbalancing:us-west-2:123456789012:targetgroup/my-targets/1234567890123456`
   * - Classic Load Balancer name: `my-classic-load-balancer`
   * - VPC Lattice ARN: `arn:aws:vpc-lattice:us-west-2:123456789012:targetgroup/tg-1234567890123456`
   *
   * To get the ARN of a target group for a Application Load Balancer, Gateway Load Balancer, or Network Load Balancer, or the name of a Classic Load Balancer, use the Elastic Load Balancing [DescribeTargetGroups](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html) and [DescribeLoadBalancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html) API operations.
   *
   * To get the ARN of a target group for VPC Lattice, use the VPC Lattice [GetTargetGroup](https://docs.aws.amazon.com/vpc-lattice/latest/APIReference/API_GetTargetGroup.html) API operation.
   *
   * @public
   */
  Identifier: string | undefined;

  /**
   * Provides additional context for the value of `Identifier`.
   *
   * The following lists the valid values:
   *
   * - `elb` if `Identifier` is the name of a Classic Load Balancer.
   * - `elbv2` if `Identifier` is the ARN of an Application Load Balancer, Gateway Load Balancer, or Network Load Balancer target group.
   * - `vpc-lattice` if `Identifier` is the ARN of a VPC Lattice target group.
   *
   * Required if the identifier is the name of a Classic Load Balancer.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * @public
 */
export interface AttachTrafficSourcesType {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * The unique identifiers of one or more traffic sources. You can specify up to 10 traffic sources.
   *
   * @public
   */
  TrafficSources: TrafficSourceIdentifier[] | undefined;

  /**
   * If you enable zonal shift with cross-zone disabled load balancers, capacity could become imbalanced across Availability Zones. To skip the validation, specify `true`. For more information, see [Auto Scaling group zonal shift](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-zonal-shift.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  SkipZonalShiftValidation?: boolean | undefined;
}

/**
 * Describes a scheduled action that could not be created, updated, or deleted.
 *
 * @public
 */
export interface FailedScheduledUpdateGroupActionRequest {
  /**
   * The name of the scheduled action.
   *
   * @public
   */
  ScheduledActionName: string | undefined;

  /**
   * The error code.
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * The error message accompanying the error code.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * @public
 */
export interface BatchDeleteScheduledActionAnswer {
  /**
   * The names of the scheduled actions that could not be deleted, including an error message.
   *
   * @public
   */
  FailedScheduledActions?: FailedScheduledUpdateGroupActionRequest[] | undefined;
}

/**
 * @public
 */
export interface BatchDeleteScheduledActionType {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * The names of the scheduled actions to delete. The maximum number allowed is 50.
   *
   * @public
   */
  ScheduledActionNames: string[] | undefined;
}

/**
 * @public
 */
export interface BatchPutScheduledUpdateGroupActionAnswer {
  /**
   * The names of the scheduled actions that could not be created or updated, including an error message.
   *
   * @public
   */
  FailedScheduledUpdateGroupActions?: FailedScheduledUpdateGroupActionRequest[] | undefined;
}

/**
 * Describes information used for one or more scheduled scaling action updates in a [BatchPutScheduledUpdateGroupAction](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_BatchPutScheduledUpdateGroupAction.html) operation.
 *
 * @public
 */
export interface ScheduledUpdateGroupActionRequest {
  /**
   * The name of the scaling action.
   *
   * @public
   */
  ScheduledActionName: string | undefined;

  /**
   * The date and time for the action to start, in YYYY-MM-DDThh:mm:ssZ format in UTC/GMT only and in quotes (for example, `"2019-06-01T00:00:00Z"`).
   *
   * If you specify `Recurrence` and `StartTime`, Amazon EC2 Auto Scaling performs the action at this time, and then performs the action based on the specified recurrence.
   *
   * If you try to schedule the action in the past, Amazon EC2 Auto Scaling returns an error message.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The date and time for the recurring schedule to end, in UTC.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The recurring schedule for the action, in Unix cron syntax format. This format consists of five fields separated by white spaces: [Minute] [Hour] [Day_of_Month] [Month_of_Year] [Day_of_Week]. The value must be in quotes (for example, `"30 0 1 1,6,12 *"`). For more information about this format, see [Crontab](http://crontab.org).
   *
   * When `StartTime` and `EndTime` are specified with `Recurrence`, they form the boundaries of when the recurring action starts and stops.
   *
   * Cron expressions use Universal Coordinated Time (UTC) by default.
   *
   * @public
   */
  Recurrence?: string | undefined;

  /**
   * The minimum size of the Auto Scaling group.
   *
   * @public
   */
  MinSize?: number | undefined;

  /**
   * The maximum size of the Auto Scaling group.
   *
   * @public
   */
  MaxSize?: number | undefined;

  /**
   * The desired capacity is the initial capacity of the Auto Scaling group after the scheduled action runs and the capacity it attempts to maintain.
   *
   * @public
   */
  DesiredCapacity?: number | undefined;

  /**
   * Specifies the time zone for a cron expression. If a time zone is not provided, UTC is used by default.
   *
   * Valid values are the canonical names of the IANA time zones, derived from the IANA Time Zone Database (such as `Etc/GMT+9` or `Pacific/Tahiti`). For more information, see [https://en.wikipedia.org/wiki/List_of_tz_database_time_zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
   *
   * @public
   */
  TimeZone?: string | undefined;
}

/**
 * @public
 */
export interface BatchPutScheduledUpdateGroupActionType {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * One or more scheduled actions. The maximum number allowed is 50.
   *
   * @public
   */
  ScheduledUpdateGroupActions: ScheduledUpdateGroupActionRequest[] | undefined;
}

/**
 * @public
 */
export interface CancelInstanceRefreshAnswer {
  /**
   * The instance refresh ID associated with the request. This is the unique ID assigned to the instance refresh when it was started.
   *
   * @public
   */
  InstanceRefreshId?: string | undefined;
}

/**
 * @public
 */
export interface CancelInstanceRefreshType {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * When cancelling an instance refresh, this indicates whether to wait for in-flight launches and terminations to complete. The default is true.
   *
   * When set to false, Amazon EC2 Auto Scaling cancels the instance refresh without waiting for any pending launches or terminations to complete.
   *
   * @public
   */
  WaitForTransitioningInstances?: boolean | undefined;
}

/**
 * @public
 */
export interface CompleteLifecycleActionAnswer {}

/**
 * @public
 */
export interface CompleteLifecycleActionType {
  /**
   * The name of the lifecycle hook.
   *
   * @public
   */
  LifecycleHookName: string | undefined;

  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * A universally unique identifier (UUID) that identifies a specific lifecycle action associated with an instance. Amazon EC2 Auto Scaling sends this token to the notification target you specified when you created the lifecycle hook.
   *
   * @public
   */
  LifecycleActionToken?: string | undefined;

  /**
   * The action for the group to take. You can specify either `CONTINUE` or `ABANDON`.
   *
   * @public
   */
  LifecycleActionResult: string | undefined;

  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;
}

/**
 * Describes an Availability Zone distribution.
 *
 * @public
 */
export interface AvailabilityZoneDistribution {
  /**
   * If launches fail in an Availability Zone, the following strategies are available. The default is `balanced-best-effort`.
   *
   * - `balanced-only` - If launches fail in an Availability Zone, Auto Scaling will continue to attempt to launch in the unhealthy zone to preserve a balanced distribution.
   * - `balanced-best-effort` - If launches fail in an Availability Zone, Auto Scaling will attempt to launch in another healthy Availability Zone instead.
   * - `reservations-then-balanced` - Auto Scaling will first attempt to launch into your Capacity Reservations, and then balance any remaining capacity across healthy Availability Zones.
   *
   * @public
   */
  CapacityDistributionStrategy?: CapacityDistributionStrategy | undefined;
}

/**
 * Describes an Availability Zone impairment policy.
 *
 * @public
 */
export interface AvailabilityZoneImpairmentPolicy {
  /**
   * If `true`, enable zonal shift for your Auto Scaling group.
   *
   * @public
   */
  ZonalShiftEnabled?: boolean | undefined;

  /**
   * Specifies the health check behavior for the impaired Availability Zone in an active zonal shift. If you select `Replace unhealthy`, instances that appear unhealthy will be replaced in all Availability Zones. If you select `Ignore unhealthy`, instances will not be replaced in the Availability Zone with the active zonal shift. For more information, see [Auto Scaling group zonal shift](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-zonal-shift.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  ImpairedZoneHealthCheckBehavior?: ImpairedZoneHealthCheckBehavior | undefined;
}

/**
 * The target for the Capacity Reservation. Specify Capacity Reservations IDs or Capacity Reservation resource group ARNs.
 *
 * @public
 */
export interface CapacityReservationTarget {
  /**
   * The Capacity Reservation IDs to launch instances into.
   *
   * @public
   */
  CapacityReservationIds?: string[] | undefined;

  /**
   * The resource group ARNs of the Capacity Reservation to launch instances into.
   *
   * @public
   */
  CapacityReservationResourceGroupArns?: string[] | undefined;
}

/**
 * Describes the Capacity Reservation preference and targeting options. If you specify `open` or `none` for `CapacityReservationPreference`, do not specify a `CapacityReservationTarget`.
 *
 * @public
 */
export interface CapacityReservationSpecification {
  /**
   * The capacity reservation preference. The following options are available:
   *
   * - `capacity-reservations-only` - Auto Scaling will only launch instances into a Capacity Reservation or Capacity Reservation resource group. If capacity isn't available, instances will fail to launch.
   * - `capacity-reservations-first` - Auto Scaling will try to launch instances into a Capacity Reservation or Capacity Reservation resource group first. If capacity isn't available, instances will run in On-Demand capacity.
   * - `none` - Auto Scaling will not launch instances into a Capacity Reservation. Instances will run in On-Demand capacity.
   * - `default` - Auto Scaling uses the Capacity Reservation preference from your launch template or an open Capacity Reservation.
   *
   * @public
   */
  CapacityReservationPreference?: CapacityReservationPreference | undefined;

  /**
   * Describes a target Capacity Reservation or Capacity Reservation resource group.
   *
   * @public
   */
  CapacityReservationTarget?: CapacityReservationTarget | undefined;
}

/**
 * Defines the specific triggers that cause instances to be retained in a Retained state rather than terminated. Each trigger corresponds to a different failure scenario during the instance lifecycle. This allows fine-grained control over when to preserve instances for manual intervention.
 *
 * @public
 */
export interface RetentionTriggers {
  /**
   * Specifies the action when a termination lifecycle hook is abandoned due to failure, timeout, or explicit abandonment (calling CompleteLifecycleAction).
   *
   * Set to `retain` to move instances to a retained state. Set to `terminate` for default termination behavior.
   *
   * Retained instances don't count toward desired capacity and remain until you call `TerminateInstanceInAutoScalingGroup`.
   *
   * @public
   */
  TerminateHookAbandon?: RetentionAction | undefined;
}

/**
 * The instance lifecycle policy for the Auto Scaling group. This policy controls instance behavior when an instance transitions through its lifecycle states. Configure retention triggers to specify when instances should move to a `Retained` state instead of automatic termination.
 *
 * For more information, see [Control instance retention with instance lifecycle policies](https://docs.aws.amazon.com/autoscaling/ec2/userguide/instance-lifecycle-policy.html) in the *Amazon EC2 Auto Scaling User Guide*.
 *
 * @public
 */
export interface InstanceLifecyclePolicy {
  /**
   * Specifies the conditions that trigger instance retention behavior. These triggers determine when instances should move to a `Retained` state instead of automatic termination. This allows you to maintain control over instance management when lifecycles transition and operations fail.
   *
   * @public
   */
  RetentionTriggers?: RetentionTriggers | undefined;
}

/**
 * Describes an instance maintenance policy.
 *
 * For more information, see [Set instance maintenance policy](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-maintenance-policy.html) in the *Amazon EC2 Auto Scaling User Guide*.
 *
 * @public
 */
export interface InstanceMaintenancePolicy {
  /**
   * Specifies the lower threshold as a percentage of the desired capacity of the Auto Scaling group. It represents the minimum percentage of the group to keep in service, healthy, and ready to use to support your workload when replacing instances. Value range is 0 to 100. To clear a previously set value, specify a value of `-1`.
   *
   * @public
   */
  MinHealthyPercentage?: number | undefined;

  /**
   * Specifies the upper threshold as a percentage of the desired capacity of the Auto Scaling group. It represents the maximum percentage of the group that can be in service and healthy, or pending, to support your workload when replacing instances. Value range is 100 to 200. To clear a previously set value, specify a value of `-1`.
   *
   * Both `MinHealthyPercentage` and `MaxHealthyPercentage` must be specified, and the difference between them cannot be greater than 100. A large range increases the number of instances that can be replaced at the same time.
   *
   * @public
   */
  MaxHealthyPercentage?: number | undefined;
}

/**
 * Describes the launch template and the version of the launch template that Amazon EC2 Auto Scaling uses to launch Amazon EC2 instances. For more information about launch templates, see [Launch templates](https://docs.aws.amazon.com/autoscaling/ec2/userguide/launch-templates.html) in the *Amazon EC2 Auto Scaling User Guide*.
 *
 * @public
 */
export interface LaunchTemplateSpecification {
  /**
   * The ID of the launch template. To get the template ID, use the Amazon EC2 [DescribeLaunchTemplates](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLaunchTemplates.html) API operation. New launch templates can be created using the Amazon EC2 [CreateLaunchTemplate](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html) API.
   *
   * Conditional: You must specify either a `LaunchTemplateId` or a `LaunchTemplateName`.
   *
   * @public
   */
  LaunchTemplateId?: string | undefined;

  /**
   * The name of the launch template. To get the template name, use the Amazon EC2 [DescribeLaunchTemplates](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLaunchTemplates.html) API operation. New launch templates can be created using the Amazon EC2 [CreateLaunchTemplate](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplate.html) API.
   *
   * Conditional: You must specify either a `LaunchTemplateId` or a `LaunchTemplateName`.
   *
   * @public
   */
  LaunchTemplateName?: string | undefined;

  /**
   * The version number, `$Latest`, or `$Default`. To get the version number, use the Amazon EC2 [DescribeLaunchTemplateVersions](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeLaunchTemplateVersions.html) API operation. New launch template versions can be created using the Amazon EC2 [CreateLaunchTemplateVersion](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_CreateLaunchTemplateVersion.html) API. If the value is `$Latest`, Amazon EC2 Auto Scaling selects the latest version of the launch template when launching instances. If the value is `$Default`, Amazon EC2 Auto Scaling selects the default version of the launch template when launching instances. The default value is `$Default`.
   *
   * @public
   */
  Version?: string | undefined;
}

/**
 * Describes information used to specify a lifecycle hook for an Auto Scaling group.
 *
 * For more information, see [Amazon EC2 Auto Scaling lifecycle hooks](https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html) in the *Amazon EC2 Auto Scaling User Guide*.
 *
 * @public
 */
export interface LifecycleHookSpecification {
  /**
   * The name of the lifecycle hook.
   *
   * @public
   */
  LifecycleHookName: string | undefined;

  /**
   * The lifecycle transition. For Auto Scaling groups, there are two major lifecycle transitions.
   *
   * - To create a lifecycle hook for scale-out events, specify `autoscaling:EC2_INSTANCE_LAUNCHING`.
   * - To create a lifecycle hook for scale-in events, specify `autoscaling:EC2_INSTANCE_TERMINATING`.
   *
   * @public
   */
  LifecycleTransition: string | undefined;

  /**
   * Additional information that you want to include any time Amazon EC2 Auto Scaling sends a message to the notification target.
   *
   * @public
   */
  NotificationMetadata?: string | undefined;

  /**
   * The maximum time, in seconds, that can elapse before the lifecycle hook times out. The range is from `30` to `7200` seconds. The default value is `3600` seconds (1 hour).
   *
   * @public
   */
  HeartbeatTimeout?: number | undefined;

  /**
   * The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an unexpected failure occurs. The default value is `ABANDON`.
   *
   * Valid values: `CONTINUE` | `ABANDON`
   *
   * @public
   */
  DefaultResult?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the notification target that Amazon EC2 Auto Scaling sends notifications to when an instance is in a wait state for the lifecycle hook. You can specify an Amazon SNS topic or an Amazon SQS queue.
   *
   * @public
   */
  NotificationTargetARN?: string | undefined;

  /**
   * The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target. For information about creating this role, see [Prepare to add a lifecycle hook to your Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/prepare-for-lifecycle-notifications.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * Valid only if the notification target is an Amazon SNS topic or an Amazon SQS queue.
   *
   * @public
   */
  RoleARN?: string | undefined;
}

/**
 * Use this structure to specify the capacity types that Amazon EC2 Auto Scaling prioritizes when it launches instances.
 *
 * @public
 */
export interface DistributionSegment {
  /**
   * The capacity types to prioritize, in order. Amazon EC2 Auto Scaling attempts to launch instances in the priority order of the capacity types, and within each capacity type, in the order of instance types listed in your launch template `Overrides`.
   *
   * The following lists the valid values:
   *
   * - **on-demand-capacity-reservation**
   *
   *   On-Demand Capacity Reservations.
   *
   * - **capacity-block**
   *
   *   Capacity Blocks.
   *
   * - **interruptible-capacity-reservation**
   *
   *   Interruptible Capacity Reservations.
   *
   * - **on-demand**
   *
   *   On-Demand capacity. Include this value to allow the group to fall back to On-Demand capacity when the preceding capacity types are unavailable.
   *
   * @public
   */
  TargetCapacityTypes?: TargetCapacityType[] | undefined;
}

/**
 * Use this structure to specify how a mixed instances policy distributes capacity across On-Demand, Spot, and supported Capacity Reservation types, and to specify the allocation strategies that are used to fulfill the capacity.
 *
 * @public
 */
export interface InstancesDistribution {
  /**
   * The allocation strategy to apply to your On-Demand Instances when they are launched. Possible instance types are determined by the launch template overrides that you specify.
   *
   * The following lists the valid values:
   *
   * - **lowest-price**
   *
   *   Uses price to determine which instance types are the highest priority, launching the lowest priced instance types within an Availability Zone first. This is the default value for Auto Scaling groups that specify [InstanceRequirements](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_InstanceRequirements.html).
   *
   * - **prioritized**
   *
   *   You set the order of instance types for the launch template overrides from highest to lowest priority (from first to last in the list). Amazon EC2 Auto Scaling launches your highest priority instance types first. If all your On-Demand capacity cannot be fulfilled using your highest priority instance type, then Amazon EC2 Auto Scaling launches the remaining capacity using the second priority instance type, and so on. This is the default value for Auto Scaling groups that don't specify [InstanceRequirements](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_InstanceRequirements.html) and cannot be used for groups that do.
   *
   * @public
   */
  OnDemandAllocationStrategy?: string | undefined;

  /**
   * The minimum amount of the Auto Scaling group's capacity that must be fulfilled by On-Demand Instances. This base portion is launched first as your group scales.
   *
   * This number has the same unit of measurement as the group's desired capacity. If you change the default unit of measurement (number of instances) by specifying weighted capacity values in your launch template overrides list, or by changing the default desired capacity type setting of the group, you must specify this number using the same unit of measurement.
   *
   * Default: 0
   *
   * @public
   */
  OnDemandBaseCapacity?: number | undefined;

  /**
   * Controls the percentages of On-Demand Instances and Spot Instances for your additional capacity beyond `OnDemandBaseCapacity`. Expressed as a number (for example, 20 specifies 20% On-Demand Instances, 80% Spot Instances). If set to 100, only On-Demand Instances are used.
   *
   * Default: 100
   *
   * @public
   */
  OnDemandPercentageAboveBaseCapacity?: number | undefined;

  /**
   * The allocation strategy to apply to your Spot Instances when they are launched. Possible instance types are determined by the launch template overrides that you specify.
   *
   * The following lists the valid values:
   *
   * - **capacity-optimized**
   *
   *   Requests Spot Instances using pools that are optimally chosen based on the available Spot capacity. This strategy has the lowest risk of interruption. To give certain instance types a higher chance of launching first, use `capacity-optimized-prioritized`.
   *
   * - **capacity-optimized-prioritized**
   *
   *   You set the order of instance types for the launch template overrides from highest to lowest priority (from first to last in the list). Amazon EC2 Auto Scaling honors the instance type priorities on a best effort basis but optimizes for capacity first. Note that if the On-Demand allocation strategy is set to `prioritized`, the same priority is applied when fulfilling On-Demand capacity. This is not a valid value for Auto Scaling groups that specify [InstanceRequirements](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_InstanceRequirements.html).
   *
   * - **lowest-price**
   *
   *   Requests Spot Instances using the lowest priced pools within an Availability Zone, across the number of Spot pools that you specify for the `SpotInstancePools` property. To ensure that your desired capacity is met, you might receive Spot Instances from several pools. This is the default value, but it might lead to high interruption rates because this strategy only considers instance price and not available capacity.
   *
   * - **price-capacity-optimized (recommended)**
   *
   *   The price and capacity optimized allocation strategy looks at both price and capacity to select the Spot Instance pools that are the least likely to be interrupted and have the lowest possible price.
   *
   * @public
   */
  SpotAllocationStrategy?: string | undefined;

  /**
   * The number of Spot Instance pools across which to allocate your Spot Instances. The Spot pools are determined from the different instance types in the overrides. Valid only when the `SpotAllocationStrategy` is `lowest-price`. Value must be in the range of 1–20.
   *
   * Default: 2
   *
   * @public
   */
  SpotInstancePools?: number | undefined;

  /**
   * The maximum price per unit hour that you are willing to pay for a Spot Instance. If your maximum price is lower than the Spot price for the instance types that you selected, your Spot Instances are not launched. We do not recommend specifying a maximum price because it can lead to increased interruptions. When Spot Instances launch, you pay the current Spot price. To remove a maximum price that you previously set, include the property but specify an empty string ("") for the value.
   *
   * > **Important:** If you specify a maximum price, your instances will be interrupted more frequently than if you do not specify one.
   *
   * Valid Range: Minimum value of 0.001
   *
   * @public
   */
  SpotMaxPrice?: string | undefined;

  /**
   * The Distribution Segments configuration. Each segment contains an ordered list of capacity types to prioritize.
   *
   * For more information, see [Use Distribution Segments to target multiple capacity types](https://docs.aws.amazon.com/autoscaling/ec2/userguide/use-distribution-segments.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  DistributionSegments?: DistributionSegment[] | undefined;
}

/**
 * Specifies the minimum and maximum for the `BaselineEbsBandwidthMbps` object when you specify [InstanceRequirements](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_InstanceRequirements.html) for an Auto Scaling group.
 *
 * @public
 */
export interface BaselineEbsBandwidthMbpsRequest {
  /**
   * The minimum value in Mbps.
   *
   * @public
   */
  Min?: number | undefined;

  /**
   * The maximum value in Mbps.
   *
   * @public
   */
  Max?: number | undefined;
}

/**
 * Specify an instance family to use as the baseline reference for CPU performance. All instance types that All instance types that match your specified attributes will be compared against the CPU performance of the referenced instance family, regardless of CPU manufacturer or architecture differences.
 *
 * > **Note:** Currently only one instance family can be specified in the list.
 *
 * @public
 */
export interface PerformanceFactorReferenceRequest {
  /**
   * The instance family to use as a baseline reference.
   *
   * > **Note:** Make sure that you specify the correct value for the instance family. The instance family is everything before the period (.) in the instance type name. For example, in the instance `c6i.large`, the instance family is `c6i`, not `c6`. For more information, see [Amazon EC2 instance type naming conventions](https://docs.aws.amazon.com/ec2/latest/instancetypes/instance-type-names.html) in *Amazon EC2 Instance Types*.
   *
   * The following instance types are *not supported* for performance protection.
   *
   * - `c1`
   * - `g3| g3s`
   * - `hpc7g`
   * - `m1| m2`
   * - `mac1 | mac2 | mac2-m1ultra | mac2-m2 | mac2-m2pro`
   * - `p3dn | p4d | p5`
   * - `t1`
   * - `u-12tb1 | u-18tb1 | u-24tb1 | u-3tb1 | u-6tb1 | u-9tb1 | u7i-12tb | u7in-16tb | u7in-24tb | u7in-32tb`
   *
   * If you performance protection by specifying a supported instance family, the returned instance types will exclude the preceding unsupported instance families.
   *
   * If you specify an unsupported instance family as a value for baseline performance, the API returns an empty response.
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
export interface CpuPerformanceFactorRequest {
  /**
   * Specify an instance family to use as the baseline reference for CPU performance. All instance types that match your specified attributes will be compared against the CPU performance of the referenced instance family, regardless of CPU manufacturer or architecture differences.
   *
   * > **Note:** Currently only one instance family can be specified in the list.
   *
   * @public
   */
  References?: PerformanceFactorReferenceRequest[] | undefined;
}

/**
 * The baseline performance to consider, using an instance family as a baseline reference. The instance family establishes the lowest acceptable level of performance. Auto Scaling uses this baseline to guide instance type selection, but there is no guarantee that the selected instance types will always exceed the baseline for every application.
 *
 * Currently, this parameter only supports CPU performance as a baseline performance factor. For example, specifying `c6i` uses the CPU performance of the `c6i` family as the baseline reference.
 *
 * @public
 */
export interface BaselinePerformanceFactorsRequest {
  /**
   * The CPU performance to consider, using an instance family as the baseline reference.
   *
   * @public
   */
  Cpu?: CpuPerformanceFactorRequest | undefined;
}

/**
 * Specifies the minimum and maximum for the `MemoryGiBPerVCpu` object when you specify [InstanceRequirements](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_InstanceRequirements.html) for an Auto Scaling group.
 *
 * @public
 */
export interface MemoryGiBPerVCpuRequest {
  /**
   * The memory minimum in GiB.
   *
   * @public
   */
  Min?: number | undefined;

  /**
   * The memory maximum in GiB.
   *
   * @public
   */
  Max?: number | undefined;
}

/**
 * Specifies the minimum and maximum for the `MemoryMiB` object when you specify [InstanceRequirements](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_InstanceRequirements.html) for an Auto Scaling group.
 *
 * @public
 */
export interface MemoryMiBRequest {
  /**
   * The memory minimum in MiB.
   *
   * @public
   */
  Min: number | undefined;

  /**
   * The memory maximum in MiB.
   *
   * @public
   */
  Max?: number | undefined;
}

/**
 * Specifies the minimum and maximum for the `NetworkBandwidthGbps` object when you specify [InstanceRequirements](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_InstanceRequirements.html) for an Auto Scaling group.
 *
 * > **Note:** Setting the minimum bandwidth does not guarantee that your instance will achieve the minimum bandwidth. Amazon EC2 will identify instance types that support the specified minimum bandwidth, but the actual bandwidth of your instance might go below the specified minimum at times. For more information, see [Available instance bandwidth](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-network-bandwidth.html#available-instance-bandwidth) in the *Amazon EC2 User Guide*.
 *
 * @public
 */
export interface NetworkBandwidthGbpsRequest {
  /**
   * The minimum amount of network bandwidth, in gigabits per second (Gbps).
   *
   * @public
   */
  Min?: number | undefined;

  /**
   * The maximum amount of network bandwidth, in gigabits per second (Gbps).
   *
   * @public
   */
  Max?: number | undefined;
}

/**
 * Specifies the minimum and maximum for the `NetworkInterfaceCount` object when you specify [InstanceRequirements](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_InstanceRequirements.html) for an Auto Scaling group.
 *
 * @public
 */
export interface NetworkInterfaceCountRequest {
  /**
   * The minimum number of network interfaces.
   *
   * @public
   */
  Min?: number | undefined;

  /**
   * The maximum number of network interfaces.
   *
   * @public
   */
  Max?: number | undefined;
}

/**
 * Specifies the minimum and maximum for the `TotalLocalStorageGB` object when you specify [InstanceRequirements](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_InstanceRequirements.html) for an Auto Scaling group.
 *
 * @public
 */
export interface TotalLocalStorageGBRequest {
  /**
   * The storage minimum in GB.
   *
   * @public
   */
  Min?: number | undefined;

  /**
   * The storage maximum in GB.
   *
   * @public
   */
  Max?: number | undefined;
}

/**
 * Specifies the minimum and maximum for the `VCpuCount` object when you specify [InstanceRequirements](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_InstanceRequirements.html) for an Auto Scaling group.
 *
 * @public
 */
export interface VCpuCountRequest {
  /**
   * The minimum number of vCPUs.
   *
   * @public
   */
  Min: number | undefined;

  /**
   * The maximum number of vCPUs.
   *
   * @public
   */
  Max?: number | undefined;
}

/**
 * The attributes for the instance types for a mixed instances policy. Amazon EC2 Auto Scaling uses your specified requirements to identify instance types. Then, it uses your On-Demand and Spot allocation strategies to launch instances from these instance types.
 *
 * When you specify multiple attributes, you get instance types that satisfy all of the specified attributes. If you specify multiple values for an attribute, you get instance types that satisfy any of the specified values.
 *
 * To limit the list of instance types from which Amazon EC2 Auto Scaling can identify matching instance types, you can use one of the following parameters, but not both in the same request:
 *
 * - `AllowedInstanceTypes` - The instance types to include in the list. All other instance types are ignored, even if they match your specified attributes.
 * - `ExcludedInstanceTypes` - The instance types to exclude from the list, even if they match your specified attributes.
 *
 * > **Note:** You must specify `VCpuCount` and `MemoryMiB`. All other attributes are optional. Any unspecified optional attribute is set to its default.
 *
 * For more information, see [Create a mixed instances group using attribute-based instance type selection](https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-mixed-instances-group-attribute-based-instance-type-selection.html) in the *Amazon EC2 Auto Scaling User Guide*. For help determining which instance types match your attributes before you apply them to your Auto Scaling group, see [Preview instance types with specified attributes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-fleet-attribute-based-instance-type-selection.html#ec2fleet-get-instance-types-from-instance-requirements) in the *Amazon EC2 User Guide*.
 *
 * @public
 */
export interface InstanceRequirements {
  /**
   * The minimum and maximum number of vCPUs for an instance type.
   *
   * @public
   */
  VCpuCount: VCpuCountRequest | undefined;

  /**
   * The minimum and maximum instance memory size for an instance type, in MiB.
   *
   * @public
   */
  MemoryMiB: MemoryMiBRequest | undefined;

  /**
   * Lists which specific CPU manufacturers to include.
   *
   * - For instance types with Intel CPUs, specify `intel`.
   * - For instance types with AMD CPUs, specify `amd`.
   * - For instance types with Amazon Web Services CPUs, specify `amazon-web-services`.
   * - For instance types with Apple CPUs, specify `apple`.
   *
   * > **Note:** Don't confuse the CPU hardware manufacturer with the CPU hardware architecture. Instances will be launched with a compatible CPU architecture based on the Amazon Machine Image (AMI) that you specify in your launch template.
   *
   * Default: Any manufacturer
   *
   * @public
   */
  CpuManufacturers?: CpuManufacturer[] | undefined;

  /**
   * The minimum and maximum amount of memory per vCPU for an instance type, in GiB.
   *
   * Default: No minimum or maximum limits
   *
   * @public
   */
  MemoryGiBPerVCpu?: MemoryGiBPerVCpuRequest | undefined;

  /**
   * The instance types to exclude. You can use strings with one or more wild cards, represented by an asterisk (`*`), to exclude an instance family, type, size, or generation. The following are examples: `m5.8xlarge`, `c5*.*`, `m5a.*`, `r*`, `*3*`.
   *
   * For example, if you specify `c5*`, you are excluding the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.*`, Amazon EC2 Auto Scaling will exclude all the M5a instance types, but not the M5n instance types.
   *
   * > **Note:** If you specify `ExcludedInstanceTypes`, you can't specify `AllowedInstanceTypes`.
   *
   * Default: No excluded instance types
   *
   * @public
   */
  ExcludedInstanceTypes?: string[] | undefined;

  /**
   * Indicates whether current or previous generation instance types are included.
   *
   * - For current generation instance types, specify `current`. The current generation includes EC2 instance types currently recommended for use. This typically includes the latest two to three generations in each instance family. For more information, see [Instance types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) in the *Amazon EC2 User Guide*.
   * - For previous generation instance types, specify `previous`.
   *
   * Default: Any current or previous generation
   *
   * @public
   */
  InstanceGenerations?: InstanceGeneration[] | undefined;

  /**
   * [Price protection] The price protection threshold for Spot Instances, as a percentage higher than an identified Spot price. The identified Spot price is the price of the lowest priced current generation C, M, or R instance type with your specified attributes. If no current generation C, M, or R instance type matches your attributes, then the identified price is from either the lowest priced current generation instance types or, failing that, the lowest priced previous generation instance types that match your attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price exceeds your specified threshold.
   *
   * The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage.
   *
   * If you set `DesiredCapacityType` to `vcpu` or `memory-mib`, the price protection threshold is based on the per-vCPU or per-memory price instead of the per instance price.
   *
   * > **Note:** Only one of `SpotMaxPricePercentageOverLowestPrice` or `MaxSpotPriceAsPercentageOfOptimalOnDemandPrice` can be specified. If you don't specify either, Amazon EC2 Auto Scaling will automatically apply optimal price protection to consistently select from a wide range of instance types. To indicate no price protection threshold for Spot Instances, meaning you want to consider all instance types that match your attributes, include one of these parameters and specify a high value, such as `999999`.
   *
   * @public
   */
  SpotMaxPricePercentageOverLowestPrice?: number | undefined;

  /**
   * [Price protection] The price protection threshold for Spot Instances, as a percentage of an identified On-Demand price. The identified On-Demand price is the price of the lowest priced current generation C, M, or R instance type with your specified attributes. If no current generation C, M, or R instance type matches your attributes, then the identified price is from either the lowest priced current generation instance types or, failing that, the lowest priced previous generation instance types that match your attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price exceeds your specified threshold.
   *
   * The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage.
   *
   * If you set `DesiredCapacityType` to `vcpu` or `memory-mib`, the price protection threshold is based on the per-vCPU or per-memory price instead of the per instance price.
   *
   * > **Note:** Only one of `SpotMaxPricePercentageOverLowestPrice` or `MaxSpotPriceAsPercentageOfOptimalOnDemandPrice` can be specified. If you don't specify either, Amazon EC2 Auto Scaling will automatically apply optimal price protection to consistently select from a wide range of instance types. To indicate no price protection threshold for Spot Instances, meaning you want to consider all instance types that match your attributes, include one of these parameters and specify a high value, such as `999999`.
   *
   * @public
   */
  MaxSpotPriceAsPercentageOfOptimalOnDemandPrice?: number | undefined;

  /**
   * [Price protection] The price protection threshold for On-Demand Instances, as a percentage higher than an identified On-Demand price. The identified On-Demand price is the price of the lowest priced current generation C, M, or R instance type with your specified attributes. If no current generation C, M, or R instance type matches your attributes, then the identified price is from either the lowest priced current generation instance types or, failing that, the lowest priced previous generation instance types that match your attributes. When Amazon EC2 Auto Scaling selects instance types with your attributes, we will exclude instance types whose price exceeds your specified threshold.
   *
   * The parameter accepts an integer, which Amazon EC2 Auto Scaling interprets as a percentage.
   *
   * To turn off price protection, specify a high value, such as `999999`.
   *
   * If you set `DesiredCapacityType` to `vcpu` or `memory-mib`, the price protection threshold is applied based on the per-vCPU or per-memory price instead of the per instance price.
   *
   * Default: `20`
   *
   * @public
   */
  OnDemandMaxPricePercentageOverLowestPrice?: number | undefined;

  /**
   * Indicates whether bare metal instance types are included, excluded, or required.
   *
   * Default: `excluded`
   *
   * @public
   */
  BareMetal?: BareMetal | undefined;

  /**
   * Indicates whether burstable performance instance types are included, excluded, or required. For more information, see [Burstable performance instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html) in the *Amazon EC2 User Guide*.
   *
   * Default: `excluded`
   *
   * @public
   */
  BurstablePerformance?: BurstablePerformance | undefined;

  /**
   * Indicates whether instance types must provide On-Demand Instance hibernation support.
   *
   * Default: `false`
   *
   * @public
   */
  RequireHibernateSupport?: boolean | undefined;

  /**
   * The minimum and maximum number of network interfaces for an instance type.
   *
   * Default: No minimum or maximum limits
   *
   * @public
   */
  NetworkInterfaceCount?: NetworkInterfaceCountRequest | undefined;

  /**
   * Indicates whether instance types with instance store volumes are included, excluded, or required. For more information, see [Amazon EC2 instance store](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/InstanceStorage.html) in the *Amazon EC2 User Guide*.
   *
   * Default: `included`
   *
   * @public
   */
  LocalStorage?: LocalStorage | undefined;

  /**
   * Indicates the type of local storage that is required.
   *
   * - For instance types with hard disk drive (HDD) storage, specify `hdd`.
   * - For instance types with solid state drive (SSD) storage, specify `ssd`.
   *
   * Default: Any local storage type
   *
   * @public
   */
  LocalStorageTypes?: LocalStorageType[] | undefined;

  /**
   * The minimum and maximum total local storage size for an instance type, in GB.
   *
   * Default: No minimum or maximum limits
   *
   * @public
   */
  TotalLocalStorageGB?: TotalLocalStorageGBRequest | undefined;

  /**
   * The minimum and maximum baseline bandwidth performance for an instance type, in Mbps. For more information, see [Amazon EBS–optimized instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html) in the *Amazon EC2 User Guide*.
   *
   * Default: No minimum or maximum limits
   *
   * @public
   */
  BaselineEbsBandwidthMbps?: BaselineEbsBandwidthMbpsRequest | undefined;

  /**
   * Lists the accelerator types that must be on an instance type.
   *
   * - For instance types with GPU accelerators, specify `gpu`.
   * - For instance types with FPGA accelerators, specify `fpga`.
   * - For instance types with inference accelerators, specify `inference`.
   *
   * Default: Any accelerator type
   *
   * @public
   */
  AcceleratorTypes?: AcceleratorType[] | undefined;

  /**
   * The minimum and maximum number of accelerators (GPUs, FPGAs, or Amazon Web Services Inferentia chips) for an instance type.
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
   * - For instance types with NVIDIA devices, specify `nvidia`.
   * - For instance types with AMD devices, specify `amd`.
   * - For instance types with Amazon Web Services devices, specify `amazon-web-services`.
   * - For instance types with Xilinx devices, specify `xilinx`.
   *
   * Default: Any manufacturer
   *
   * @public
   */
  AcceleratorManufacturers?: AcceleratorManufacturer[] | undefined;

  /**
   * Lists the accelerators that must be on an instance type.
   *
   * - For instance types with NVIDIA A100 GPUs, specify `a100`.
   * - For instance types with NVIDIA V100 GPUs, specify `v100`.
   * - For instance types with NVIDIA K80 GPUs, specify `k80`.
   * - For instance types with NVIDIA T4 GPUs, specify `t4`.
   * - For instance types with NVIDIA M60 GPUs, specify `m60`.
   * - For instance types with AMD Radeon Pro V520 GPUs, specify `radeon-pro-v520`.
   * - For instance types with Xilinx VU9P FPGAs, specify `vu9p`.
   *
   * Default: Any accelerator
   *
   * @public
   */
  AcceleratorNames?: AcceleratorName[] | undefined;

  /**
   * The minimum and maximum total memory size for the accelerators on an instance type, in MiB.
   *
   * Default: No minimum or maximum limits
   *
   * @public
   */
  AcceleratorTotalMemoryMiB?: AcceleratorTotalMemoryMiBRequest | undefined;

  /**
   * The minimum and maximum amount of network bandwidth, in gigabits per second (Gbps).
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
   * For example, if you specify `c5*`, Amazon EC2 Auto Scaling will allow the entire C5 instance family, which includes all C5a and C5n instance types. If you specify `m5a.*`, Amazon EC2 Auto Scaling will allow all the M5a instance types, but not the M5n instance types.
   *
   * > **Note:** If you specify `AllowedInstanceTypes`, you can't specify `ExcludedInstanceTypes`.
   *
   * Default: All instance types
   *
   * @public
   */
  AllowedInstanceTypes?: string[] | undefined;

  /**
   * The baseline performance factors for the instance requirements.
   *
   * @public
   */
  BaselinePerformanceFactors?: BaselinePerformanceFactorsRequest | undefined;
}

/**
 * Use this structure to let Amazon EC2 Auto Scaling do the following when the Auto Scaling group has a mixed instances policy:
 *
 * - Override the instance type that is specified in the launch template.
 * - Use multiple instance types.
 *
 * Specify the instance types that you want, or define your instance requirements instead and let Amazon EC2 Auto Scaling provision the available instance types that meet your requirements. This can provide Amazon EC2 Auto Scaling with a larger selection of instance types to choose from when fulfilling Spot and On-Demand capacities. You can view which instance types are matched before you apply the instance requirements to your Auto Scaling group.
 *
 * After you define your instance requirements, you don't have to keep updating these settings to get new EC2 instance types automatically. Amazon EC2 Auto Scaling uses the instance requirements of the Auto Scaling group to determine whether a new EC2 instance type can be used.
 *
 * @public
 */
export interface LaunchTemplateOverrides {
  /**
   * The instance type, such as `m3.xlarge`. You must specify an instance type that is supported in your requested Region and Availability Zones. For more information, see [Instance types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html) in the *Amazon EC2 User Guide*.
   *
   * You can specify up to 40 instance types per Auto Scaling group.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * If you provide a list of instance types to use, you can specify the number of capacity units provided by each instance type in terms of virtual CPUs, memory, storage, throughput, or other relative performance characteristic. When a Spot or On-Demand Instance is launched, the capacity units count toward the desired capacity. Amazon EC2 Auto Scaling launches instances until the desired capacity is totally fulfilled, even if this results in an overage. For example, if there are two units remaining to fulfill capacity, and Amazon EC2 Auto Scaling can only launch an instance with a `WeightedCapacity` of five units, the instance is launched, and the desired capacity is exceeded by three units. For more information, see [Configure an Auto Scaling group to use instance weights](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups-instance-weighting.html) in the *Amazon EC2 Auto Scaling User Guide*. Value must be in the range of 1–999.
   *
   * If you specify a value for `WeightedCapacity` for one instance type, you must specify a value for `WeightedCapacity` for all of them.
   *
   * > **Important:** Every Auto Scaling group has three size parameters (`DesiredCapacity`, `MaxSize`, and `MinSize`). Usually, you set these sizes based on a specific number of instances. However, if you configure a mixed instances policy that defines weights for the instance types, you must specify these sizes with the same units that you use for weighting instances.
   *
   * @public
   */
  WeightedCapacity?: string | undefined;

  /**
   * Provides a launch template for the specified instance type or set of instance requirements. For example, some instance types might require a launch template with a different AMI. If not provided, Amazon EC2 Auto Scaling uses the launch template that's specified in the `LaunchTemplate` definition. For more information, see [Specifying a different launch template for an instance type](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups-launch-template-overrides.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * You can specify up to 20 launch templates per Auto Scaling group. The launch templates specified in the overrides and in the `LaunchTemplate` definition count towards this limit.
   *
   * @public
   */
  LaunchTemplateSpecification?: LaunchTemplateSpecification | undefined;

  /**
   * The instance requirements. Amazon EC2 Auto Scaling uses your specified requirements to identify instance types. Then, it uses your On-Demand and Spot allocation strategies to launch instances from these instance types.
   *
   * You can specify up to four separate sets of instance requirements per Auto Scaling group. This is useful for provisioning instances from different Amazon Machine Images (AMIs) in the same Auto Scaling group. To do this, create the AMIs and create a new launch template for each AMI. Then, create a compatible set of instance requirements for each launch template.
   *
   * > **Note:** If you specify `InstanceRequirements`, you can't specify `InstanceType`.
   *
   * @public
   */
  InstanceRequirements?: InstanceRequirements | undefined;

  /**
   * The ID of the Amazon Machine Image (AMI) to use for instances launched with this override. When using Instance Refresh with `ReplaceRootVolume` strategy, this specifies the AMI for root volume replacement operations.
   *
   * For `ReplaceRootVolume` operations:
   *
   * - All overrides in the `MixedInstancesPolicy` must specify an ImageId
   * - The AMI must contain only a single root volume
   * - Root volume replacement doesn't support multi-volume AMIs
   *
   * @public
   */
  ImageId?: string | undefined;
}

/**
 * Use this structure to specify the launch templates and instance types (overrides) for a mixed instances policy.
 *
 * @public
 */
export interface LaunchTemplate {
  /**
   * The launch template.
   *
   * @public
   */
  LaunchTemplateSpecification?: LaunchTemplateSpecification | undefined;

  /**
   * Any properties that you specify override the same properties in the launch template.
   *
   * @public
   */
  Overrides?: LaunchTemplateOverrides[] | undefined;
}

/**
 * Use this structure to launch multiple instance types and configure how capacity is distributed across On-Demand, Spot, and supported Capacity Reservation types within a single Auto Scaling group.
 *
 * A mixed instances policy contains information that Amazon EC2 Auto Scaling can use to launch instances, prioritize capacity types, and help optimize your costs. For more information, see [Auto Scaling groups with multiple instance types and purchase options](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html) in the *Amazon EC2 Auto Scaling User Guide*. To learn how to prioritize multiple capacity types, see [Use Distribution Segments to target multiple capacity types](https://docs.aws.amazon.com/autoscaling/ec2/userguide/use-distribution-segments.html) in the *Amazon EC2 Auto Scaling User Guide*.
 *
 * @public
 */
export interface MixedInstancesPolicy {
  /**
   * One or more launch templates and the instance types (overrides) that are used to launch EC2 instances to fulfill the configured capacities.
   *
   * @public
   */
  LaunchTemplate?: LaunchTemplate | undefined;

  /**
   * The instances distribution.
   *
   * @public
   */
  InstancesDistribution?: InstancesDistribution | undefined;
}

/**
 * Describes the entity that manages an Auto Scaling group.
 *
 * @public
 */
export interface Operator {
  /**
   * The service principal that is authorized to manage the Auto Scaling group. When an operator is specified, only the designated operator service principal can make mutating changes to the Auto Scaling group.
   *
   * @public
   */
  Principal: string | undefined;
}

/**
 * Describes a tag for an Auto Scaling group.
 *
 * @public
 */
export interface Tag {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The type of resource. The only supported value is `auto-scaling-group`.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The tag key.
   *
   * @public
   */
  Key: string | undefined;

  /**
   * The tag value.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * Determines whether the tag is added to new instances as they are launched in the group.
   *
   * @public
   */
  PropagateAtLaunch?: boolean | undefined;
}

/**
 * @public
 */
export interface CreateAutoScalingGroupType {
  /**
   * The name of the Auto Scaling group. This name must be unique per Region per account.
   *
   * The name can contain any ASCII character 33 to 126 including most punctuation characters, digits, and upper and lowercased letters.
   *
   * > **Note:** You cannot use a colon (:) in the name.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * The name of the launch configuration to use to launch instances.
   *
   * Conditional: You must specify either a launch template (`LaunchTemplate` or `MixedInstancesPolicy`) or a launch configuration (`LaunchConfigurationName` or `InstanceId`).
   *
   * @public
   */
  LaunchConfigurationName?: string | undefined;

  /**
   * Information used to specify the launch template and version to use to launch instances.
   *
   * Conditional: You must specify either a launch template (`LaunchTemplate` or `MixedInstancesPolicy`) or a launch configuration (`LaunchConfigurationName` or `InstanceId`).
   *
   * > **Note:** The launch template that is specified must be configured for use with an Auto Scaling group. For more information, see [Create a launch template for an Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-template.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  LaunchTemplate?: LaunchTemplateSpecification | undefined;

  /**
   * The mixed instances policy. For more information, see [Auto Scaling groups with multiple instance types and purchase options](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html) in the *Amazon EC2 Auto Scaling User Guide*. To learn how to prioritize multiple capacity types, see [Use Distribution Segments to target multiple capacity types](https://docs.aws.amazon.com/autoscaling/ec2/userguide/use-distribution-segments.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  MixedInstancesPolicy?: MixedInstancesPolicy | undefined;

  /**
   * The ID of the instance used to base the launch configuration on. If specified, Amazon EC2 Auto Scaling uses the configuration values from the specified instance to create a new launch configuration. To get the instance ID, use the Amazon EC2 [DescribeInstances](https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances.html) API operation. For more information, see [Create an Auto Scaling group using parameters from an existing instance](https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-asg-from-instance.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The minimum size of the group.
   *
   * @public
   */
  MinSize: number | undefined;

  /**
   * The maximum size of the group.
   *
   * > **Note:** With a mixed instances policy that uses instance weighting, Amazon EC2 Auto Scaling may need to go above `MaxSize` to meet your capacity requirements. In this event, Amazon EC2 Auto Scaling will never go above `MaxSize` by more than your largest instance weight (weights that define how many units each instance contributes to the desired capacity of the group).
   *
   * @public
   */
  MaxSize: number | undefined;

  /**
   * The desired capacity is the initial capacity of the Auto Scaling group at the time of its creation and the capacity it attempts to maintain. It can scale beyond this capacity if you configure auto scaling. This number must be greater than or equal to the minimum size of the group and less than or equal to the maximum size of the group. If you do not specify a desired capacity, the default is the minimum size of the group.
   *
   * @public
   */
  DesiredCapacity?: number | undefined;

  /**
   * *Only needed if you use simple scaling policies.*
   *
   * The amount of time, in seconds, between one scaling activity ending and another one starting due to simple scaling policies. For more information, see [Scaling cooldowns for Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-scaling-cooldowns.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * Default: `300` seconds
   *
   * @public
   */
  DefaultCooldown?: number | undefined;

  /**
   * A list of Availability Zones where instances in the Auto Scaling group can be created. Used for launching into the default VPC subnet in each Availability Zone when not using the `VPCZoneIdentifier` property, or for attaching a network interface when an existing network interface ID is specified in a launch template.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * A list of Availability Zone IDs where the Auto Scaling group can launch instances. You cannot specify both AvailabilityZones and AvailabilityZoneIds in the same request.
   *
   * @public
   */
  AvailabilityZoneIds?: string[] | undefined;

  /**
   * A list of Classic Load Balancers associated with this Auto Scaling group. For Application Load Balancers, Network Load Balancers, and Gateway Load Balancers, specify the `TargetGroupARNs` property instead.
   *
   * @public
   */
  LoadBalancerNames?: string[] | undefined;

  /**
   * The Amazon Resource Names (ARN) of the Elastic Load Balancing target groups to associate with the Auto Scaling group. Instances are registered as targets with the target groups. The target groups receive incoming traffic and route requests to one or more registered targets. For more information, see [Use Elastic Load Balancing to distribute traffic across the instances in your Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  TargetGroupARNs?: string[] | undefined;

  /**
   * A comma-separated value string of one or more health check types.
   *
   * The valid values are `EC2`, `EBS`, `ELB`, and `VPC_LATTICE`. `EC2` is the default health check and cannot be disabled. For more information, see [Health checks for instances in an Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-health-checks.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * Only specify `EC2` if you must clear a value that was previously set.
   *
   * @public
   */
  HealthCheckType?: string | undefined;

  /**
   * The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before checking the health status of an EC2 instance that has come into service and marking it unhealthy due to a failed health check. This is useful if your instances do not immediately pass their health checks after they enter the `InService` state. For more information, see [Set the health check grace period for an Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/health-check-grace-period.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * Default: `0` seconds
   *
   * @public
   */
  HealthCheckGracePeriod?: number | undefined;

  /**
   * The name of the placement group into which to launch your instances. For more information, see [Placement groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html) in the *Amazon EC2 User Guide*.
   *
   * > **Note:** A *cluster* placement group is a logical grouping of instances within a single Availability Zone. You cannot specify multiple Availability Zones and a cluster placement group.
   *
   * @public
   */
  PlacementGroup?: string | undefined;

  /**
   * A comma-separated list of subnet IDs for a virtual private cloud (VPC) where instances in the Auto Scaling group can be created. If you specify `VPCZoneIdentifier` with `AvailabilityZones`, the subnets that you specify must reside in those Availability Zones.
   *
   * @public
   */
  VPCZoneIdentifier?: string | undefined;

  /**
   * A policy or a list of policies that are used to select the instance to terminate. These policies are executed in the order that you list them. For more information, see [Configure termination policies for Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-termination-policies.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * Valid values: `Default` | `AllocationStrategy` | `ClosestToNextInstanceHour` | `NewestInstance` | `OldestInstance` | `OldestLaunchConfiguration` | `OldestLaunchTemplate` | `arn:aws:lambda:region:account-id:function:my-function:my-alias`
   *
   * @public
   */
  TerminationPolicies?: string[] | undefined;

  /**
   * Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling when scaling in. For more information about preventing instances from terminating on scale in, see [Use instance scale-in protection](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-protection.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  NewInstancesProtectedFromScaleIn?: boolean | undefined;

  /**
   * Indicates whether Capacity Rebalancing is enabled. Otherwise, Capacity Rebalancing is disabled. When you turn on Capacity Rebalancing, Amazon EC2 Auto Scaling attempts to launch a Spot Instance whenever Amazon EC2 notifies that a Spot Instance is at an elevated risk of interruption. After launching a new instance, it then terminates an old instance. For more information, see [Use Capacity Rebalancing to handle Amazon EC2 Spot Interruptions](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-capacity-rebalancing.html) in the in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  CapacityRebalance?: boolean | undefined;

  /**
   * One or more lifecycle hooks to add to the Auto Scaling group before instances are launched.
   *
   * @public
   */
  LifecycleHookSpecificationList?: LifecycleHookSpecification[] | undefined;

  /**
   * The deletion protection setting for the Auto Scaling group. This setting helps safeguard your Auto Scaling group and its instances by controlling whether the `DeleteAutoScalingGroup` operation is allowed. When deletion protection is enabled, users cannot delete the Auto Scaling group according to the specified protection level until the setting is changed back to a less restrictive level.
   *
   * The valid values are `none`, `prevent-force-deletion`, and `prevent-all-deletion`.
   *
   * Default: `none`
   *
   * For more information, see [Configure deletion protection for your Amazon EC2 Auto Scaling resources](https://docs.aws.amazon.com/autoscaling/ec2/userguide/resource-deletion-protection.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  DeletionProtection?: DeletionProtection | undefined;

  /**
   * One or more tags. You can tag your Auto Scaling group and propagate the tags to the Amazon EC2 instances it launches. Tags are not propagated to Amazon EBS volumes. To add tags to Amazon EBS volumes, specify the tags in a launch template but use caution. If the launch template specifies an instance tag with a key that is also specified for the Auto Scaling group, Amazon EC2 Auto Scaling overrides the value of that instance tag with the value specified by the Auto Scaling group. For more information, see [Tag Auto Scaling groups and instances](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-tagging.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to call other Amazon Web Services service on your behalf. By default, Amazon EC2 Auto Scaling uses a service-linked role named `AWSServiceRoleForAutoScaling`, which it creates if it does not exist. For more information, see [Service-linked roles](https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-service-linked-role.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  ServiceLinkedRoleARN?: string | undefined;

  /**
   * The maximum amount of time, in seconds, that an instance can be in service. The default is null. If specified, the value must be either 0 or a number equal to or greater than 86,400 seconds (1 day). For more information, see [Replace Auto Scaling instances based on maximum instance lifetime](https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-max-instance-lifetime.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  MaxInstanceLifetime?: number | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  Context?: string | undefined;

  /**
   * The unit of measurement for the value specified for desired capacity. Amazon EC2 Auto Scaling supports `DesiredCapacityType` for attribute-based instance type selection only. For more information, see [Create a mixed instances group using attribute-based instance type selection](https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-mixed-instances-group-attribute-based-instance-type-selection.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * By default, Amazon EC2 Auto Scaling specifies `units`, which translates into number of instances.
   *
   * Valid values: `units` | `vcpu` | `memory-mib`
   *
   * @public
   */
  DesiredCapacityType?: string | undefined;

  /**
   * The amount of time, in seconds, until a new instance is considered to have finished initializing and resource consumption to become stable after it enters the `InService` state.
   *
   * During an instance refresh, Amazon EC2 Auto Scaling waits for the warm-up period after it replaces an instance before it moves on to replacing the next instance. Amazon EC2 Auto Scaling also waits for the warm-up period before aggregating the metrics for new instances with existing instances in the Amazon CloudWatch metrics that are used for scaling, resulting in more reliable usage data. For more information, see [Set the default instance warmup for an Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-default-instance-warmup.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * > **Important:** To manage various warm-up settings at the group level, we recommend that you set the default instance warmup, *even if it is set to 0 seconds*. To remove a value that you previously set, include the property but specify `-1` for the value. However, we strongly recommend keeping the default instance warmup enabled by specifying a value of `0` or other nominal value.
   *
   * Default: None
   *
   * @public
   */
  DefaultInstanceWarmup?: number | undefined;

  /**
   * The list of traffic sources to attach to this Auto Scaling group. You can use any of the following as traffic sources for an Auto Scaling group: Classic Load Balancer, Application Load Balancer, Gateway Load Balancer, Network Load Balancer, and VPC Lattice.
   *
   * @public
   */
  TrafficSources?: TrafficSourceIdentifier[] | undefined;

  /**
   * An instance maintenance policy. For more information, see [Set instance maintenance policy](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-maintenance-policy.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  InstanceMaintenancePolicy?: InstanceMaintenancePolicy | undefined;

  /**
   * The instance capacity distribution across Availability Zones.
   *
   * @public
   */
  AvailabilityZoneDistribution?: AvailabilityZoneDistribution | undefined;

  /**
   * The policy for Availability Zone impairment.
   *
   * @public
   */
  AvailabilityZoneImpairmentPolicy?: AvailabilityZoneImpairmentPolicy | undefined;

  /**
   * If you enable zonal shift with cross-zone disabled load balancers, capacity could become imbalanced across Availability Zones. To skip the validation, specify `true`. For more information, see [Auto Scaling group zonal shift](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-zonal-shift.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  SkipZonalShiftValidation?: boolean | undefined;

  /**
   * The capacity reservation specification for the Auto Scaling group.
   *
   * @public
   */
  CapacityReservationSpecification?: CapacityReservationSpecification | undefined;

  /**
   * The instance lifecycle policy for the Auto Scaling group. This policy controls instance behavior when an instance transitions through its lifecycle states. Configure retention triggers to specify when instances should move to a `Retained` state instead of automatic termination.
   *
   * For more information, see [Control instance retention with instance lifecycle policies](https://docs.aws.amazon.com/autoscaling/ec2/userguide/instance-lifecycle-policy.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * > **Note:** Instances in a Retained state will continue to incur standard EC2 charges until terminated.
   *
   * @public
   */
  InstanceLifecyclePolicy?: InstanceLifecyclePolicy | undefined;

  /**
   * The entity that manages the Auto Scaling group. If you specify this parameter, Amazon EC2 Auto Scaling passes the operator identity to EC2 for instance launches and only allows the designated operator to make changes to the Auto Scaling group. All mutating API calls from non-operator callers are rejected with an `AccessDenied` exception.
   *
   * @public
   */
  Operator?: Operator | undefined;
}

/**
 * Describes information used to set up an Amazon EBS volume specified in a block device mapping.
 *
 * @public
 */
export interface Ebs {
  /**
   * The snapshot ID of the volume to use.
   *
   * You must specify either a `VolumeSize` or a `SnapshotId`.
   *
   * @public
   */
  SnapshotId?: string | undefined;

  /**
   * The volume size, in GiBs. The following are the supported volumes sizes for each volume type:
   *
   * - `gp2` and `gp3`: 1-16,384
   * - `io1`: 4-16,384
   * - `st1` and `sc1`: 125-16,384
   * - `standard`: 1-1,024
   *
   * You must specify either a `SnapshotId` or a `VolumeSize`. If you specify both `SnapshotId` and `VolumeSize`, the volume size must be equal or greater than the size of the snapshot.
   *
   * @public
   */
  VolumeSize?: number | undefined;

  /**
   * The volume type. For more information, see [Amazon EBS volume types](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-volume-types.html) in the *Amazon EBS User Guide*.
   *
   * Valid values: `standard` | `io1` | `gp2` | `st1` | `sc1` | `gp3`
   *
   * @public
   */
  VolumeType?: string | undefined;

  /**
   * Indicates whether the volume is deleted on instance termination. For Amazon EC2 Auto Scaling, the default value is `true`.
   *
   * @public
   */
  DeleteOnTermination?: boolean | undefined;

  /**
   * The number of input/output (I/O) operations per second (IOPS) to provision for the volume. For `gp3` and `io1` volumes, this represents the number of IOPS that are provisioned for the volume. For `gp2` volumes, this represents the baseline performance of the volume and the rate at which the volume accumulates I/O credits for bursting.
   *
   * The following are the supported values for each volume type:
   *
   * - `gp3`: 3,000-16,000 IOPS
   * - `io1`: 100-64,000 IOPS
   *
   * For `io1` volumes, we guarantee 64,000 IOPS only for [Instances built on the Amazon Web Services Nitro System](https://docs.aws.amazon.com/ec2/latest/instancetypes/ec2-nitro-instances.html). Other instance families guarantee performance up to 32,000 IOPS.
   *
   * `Iops` is supported when the volume type is `gp3` or `io1` and required only when the volume type is `io1`. (Not used with `standard`, `gp2`, `st1`, or `sc1` volumes.)
   *
   * @public
   */
  Iops?: number | undefined;

  /**
   * Specifies whether the volume should be encrypted. Encrypted EBS volumes can only be attached to instances that support Amazon EBS encryption. For more information, see [Requirements for Amazon EBS encryption](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption-requirements.html) in the *Amazon EBS User Guide*. If your AMI uses encrypted volumes, you can also only launch it on supported instance types.
   *
   * > **Note:**
   * >
   * > If you are creating a volume from a snapshot, you cannot create an unencrypted volume from an encrypted snapshot. Also, you cannot specify a KMS key ID when using a launch configuration.
   * >
   * > If you enable encryption by default, the EBS volumes that you create are always encrypted, either using the Amazon Web Services managed KMS key or a customer-managed KMS key, regardless of whether the snapshot was encrypted.
   * >
   * > For more information, see [Use Amazon Web Services KMS keys to encrypt Amazon EBS volumes](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-data-protection.html#encryption) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  Encrypted?: boolean | undefined;

  /**
   * The throughput (MiBps) to provision for a `gp3` volume.
   *
   * @public
   */
  Throughput?: number | undefined;
}

/**
 * Describes a block device mapping.
 *
 * @public
 */
export interface BlockDeviceMapping {
  /**
   * The name of the instance store volume (virtual device) to attach to an instance at launch. The name must be in the form ephemeral*X* where *X* is a number starting from zero (0), for example, `ephemeral0`.
   *
   * @public
   */
  VirtualName?: string | undefined;

  /**
   * The device name assigned to the volume (for example, `/dev/sdh` or `xvdh`). For more information, see [Device naming on Linux instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/device_naming.html) in the *Amazon EC2 User Guide*.
   *
   * > **Note:** To define a block device mapping, set the device name and exactly one of the following properties: `Ebs`, `NoDevice`, or `VirtualName`.
   *
   * @public
   */
  DeviceName: string | undefined;

  /**
   * Information to attach an EBS volume to an instance at launch.
   *
   * @public
   */
  Ebs?: Ebs | undefined;

  /**
   * Setting this value to `true` prevents a volume that is included in the block device mapping of the AMI from being mapped to the specified device name at launch.
   *
   * If `NoDevice` is `true` for the root device, instances might fail the EC2 health check. In that case, Amazon EC2 Auto Scaling launches replacement instances.
   *
   * @public
   */
  NoDevice?: boolean | undefined;
}

/**
 * Describes whether detailed monitoring is enabled for the Auto Scaling instances.
 *
 * @public
 */
export interface InstanceMonitoring {
  /**
   * If `true`, detailed monitoring is enabled. Otherwise, basic monitoring is enabled.
   *
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * The metadata options for the instances. For more information, see [Configure the instance metadata options](https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-config.html#launch-configurations-imds) in the *Amazon EC2 Auto Scaling User Guide*.
 *
 * @public
 */
export interface InstanceMetadataOptions {
  /**
   * The state of token usage for your instance metadata requests. If the parameter is not specified in the request, the default state is `optional`.
   *
   * If the state is `optional`, you can choose to retrieve instance metadata with or without a signed token header on your request. If you retrieve the IAM role credentials without a token, the version 1.0 role credentials are returned. If you retrieve the IAM role credentials using a valid signed token, the version 2.0 role credentials are returned.
   *
   * If the state is `required`, you must send a signed token header with any instance metadata retrieval requests. In this state, retrieving the IAM role credentials always returns the version 2.0 credentials; the version 1.0 credentials are not available.
   *
   * @public
   */
  HttpTokens?: InstanceMetadataHttpTokensState | undefined;

  /**
   * The desired HTTP PUT response hop limit for instance metadata requests. The larger the number, the further instance metadata requests can travel.
   *
   * Default: 1
   *
   * @public
   */
  HttpPutResponseHopLimit?: number | undefined;

  /**
   * This parameter enables or disables the HTTP metadata endpoint on your instances. If the parameter is not specified, the default state is `enabled`.
   *
   * > **Note:** If you specify a value of `disabled`, you will not be able to access your instance metadata.
   *
   * @public
   */
  HttpEndpoint?: InstanceMetadataEndpointState | undefined;
}

/**
 * @public
 */
export interface CreateLaunchConfigurationType {
  /**
   * The name of the launch configuration. This name must be unique per Region per account.
   *
   * @public
   */
  LaunchConfigurationName: string | undefined;

  /**
   * The ID of the Amazon Machine Image (AMI) that was assigned during registration. For more information, see [Find a Linux AMI](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/finding-an-ami.html) in the *Amazon EC2 User Guide*.
   *
   * If you specify `InstanceId`, an `ImageId` is not required.
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * The name of the key pair. For more information, see [Amazon EC2 key pairs and Amazon EC2 instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  KeyName?: string | undefined;

  /**
   * A list that contains the security group IDs to assign to the instances in the Auto Scaling group. For more information, see [Control traffic to your Amazon Web Services resources using security groups](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html) in the *Amazon Virtual Private Cloud User Guide*.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * Available for backward compatibility.
   *
   * @public
   */
  ClassicLinkVPCId?: string | undefined;

  /**
   * Available for backward compatibility.
   *
   * @public
   */
  ClassicLinkVPCSecurityGroups?: string[] | undefined;

  /**
   * The user data to make available to the launched EC2 instances. For more information, see [Instance metadata and user data](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html) (Linux) and [Instance metadata and user data](https://docs.aws.amazon.com/AWSEC2/latest/WindowsGuide/ec2-instance-metadata.html) (Windows). If you are using a command line tool, base64-encoding is performed for you, and you can load the text from a file. Otherwise, you must provide base64-encoded text. User data is limited to 16 KB.
   *
   * @public
   */
  UserData?: string | undefined;

  /**
   * The ID of the instance to use to create the launch configuration. The new launch configuration derives attributes from the instance, except for the block device mapping.
   *
   * To create a launch configuration with a block device mapping or override any other instance attributes, specify them as part of the same request.
   *
   * For more information, see [Create a launch configuration](https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-config.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * Specifies the instance type of the EC2 instance. For information about available instance types, see [Available instance types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#AvailableInstanceTypes) in the *Amazon EC2 User Guide*.
   *
   * If you specify `InstanceId`, an `InstanceType` is not required.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The ID of the kernel associated with the AMI.
   *
   * > **Note:** We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see [User provided kernels](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedKernels.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  KernelId?: string | undefined;

  /**
   * The ID of the RAM disk to select.
   *
   * > **Note:** We recommend that you use PV-GRUB instead of kernels and RAM disks. For more information, see [User provided kernels](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/UserProvidedKernels.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  RamdiskId?: string | undefined;

  /**
   * The block device mapping entries that define the block devices to attach to the instances at launch. By default, the block devices specified in the block device mapping for the AMI are used. For more information, see [Block device mappings](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  BlockDeviceMappings?: BlockDeviceMapping[] | undefined;

  /**
   * Controls whether instances in this group are launched with detailed (`true`) or basic (`false`) monitoring.
   *
   * The default value is `true` (enabled).
   *
   * > **Important:** When detailed monitoring is enabled, Amazon CloudWatch generates metrics every minute and your account is charged a fee. When you disable detailed monitoring, CloudWatch generates metrics every 5 minutes. For more information, see [Configure monitoring for Auto Scaling instances](https://docs.aws.amazon.com/autoscaling/latest/userguide/enable-as-instance-metrics.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  InstanceMonitoring?: InstanceMonitoring | undefined;

  /**
   * The maximum hourly price to be paid for any Spot Instance launched to fulfill the request. Spot Instances are launched when the price you specify exceeds the current Spot price. For more information, see [Request Spot Instances for fault-tolerant and flexible applications](https://docs.aws.amazon.com/autoscaling/ec2/userguide/launch-template-spot-instances.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * Valid Range: Minimum value of 0.001
   *
   * > **Note:** When you change your maximum price by creating a new launch configuration, running instances will continue to run as long as the maximum price for those running instances is higher than the current Spot price.
   *
   * @public
   */
  SpotPrice?: string | undefined;

  /**
   * The name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance. The instance profile contains the IAM role. For more information, see [IAM role for applications that run on Amazon EC2 instances](https://docs.aws.amazon.com/autoscaling/ec2/userguide/us-iam-role.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  IamInstanceProfile?: string | undefined;

  /**
   * Specifies whether the launch configuration is optimized for EBS I/O (`true`) or not (`false`). The optimization provides dedicated throughput to Amazon EBS and an optimized configuration stack to provide optimal I/O performance. This optimization is not available with all instance types. Additional fees are incurred when you enable EBS optimization for an instance type that is not EBS-optimized by default. For more information, see [Amazon EBS-optimized instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html) in the *Amazon EC2 User Guide*.
   *
   * The default value is `false`.
   *
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * Specifies whether to assign a public IPv4 address to the group's instances. If the instance is launched into a default subnet, the default is to assign a public IPv4 address, unless you disabled the option to assign a public IPv4 address on the subnet. If the instance is launched into a nondefault subnet, the default is not to assign a public IPv4 address, unless you enabled the option to assign a public IPv4 address on the subnet.
   *
   * If you specify `true`, each instance in the Auto Scaling group receives a unique public IPv4 address. For more information, see [Provide network connectivity for your Auto Scaling instances using Amazon VPC](https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-in-vpc.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * If you specify this property, you must specify at least one subnet for `VPCZoneIdentifier` when you create your group.
   *
   * @public
   */
  AssociatePublicIpAddress?: boolean | undefined;

  /**
   * The tenancy of the instance, either `default` or `dedicated`. An instance with `dedicated` tenancy runs on isolated, single-tenant hardware and can only be launched into a VPC. To launch dedicated instances into a shared tenancy VPC (a VPC with the instance placement tenancy attribute set to `default`), you must set the value of this property to `dedicated`.
   *
   * If you specify `PlacementTenancy`, you must specify at least one subnet for `VPCZoneIdentifier` when you create your group.
   *
   * Valid values: `default` | `dedicated`
   *
   * @public
   */
  PlacementTenancy?: string | undefined;

  /**
   * The metadata options for the instances. For more information, see [Configure the instance metadata options](https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-config.html#launch-configurations-imds) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  MetadataOptions?: InstanceMetadataOptions | undefined;
}

/**
 * @public
 */
export interface CreateOrUpdateTagsType {
  /**
   * One or more tags.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface DeleteAutoScalingGroupType {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * Specifies that the group is to be deleted along with all instances associated with the group, without waiting for all instances to be terminated. This action also deletes any outstanding lifecycle actions associated with the group.
   *
   * @public
   */
  ForceDelete?: boolean | undefined;
}

/**
 * @public
 */
export interface LaunchConfigurationNameType {
  /**
   * The name of the launch configuration.
   *
   * @public
   */
  LaunchConfigurationName: string | undefined;
}

/**
 * @public
 */
export interface DeleteLifecycleHookAnswer {}

/**
 * @public
 */
export interface DeleteLifecycleHookType {
  /**
   * The name of the lifecycle hook.
   *
   * @public
   */
  LifecycleHookName: string | undefined;

  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;
}

/**
 * @public
 */
export interface DeleteNotificationConfigurationType {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic.
   *
   * @public
   */
  TopicARN: string | undefined;
}

/**
 * @public
 */
export interface DeletePolicyType {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName?: string | undefined;

  /**
   * The name or Amazon Resource Name (ARN) of the policy.
   *
   * @public
   */
  PolicyName: string | undefined;
}

/**
 * @public
 */
export interface DeleteScheduledActionType {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * The name of the action to delete.
   *
   * @public
   */
  ScheduledActionName: string | undefined;
}

/**
 * @public
 */
export interface DeleteTagsType {
  /**
   * One or more tags.
   *
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface DeleteWarmPoolAnswer {}

/**
 * @public
 */
export interface DeleteWarmPoolType {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * Specifies that the warm pool is to be deleted along with all of its associated instances, without waiting for all instances to be terminated. This parameter also deletes any outstanding lifecycle actions associated with the warm pool instances.
   *
   * @public
   */
  ForceDelete?: boolean | undefined;
}

/**
 * @public
 */
export interface DescribeAccountLimitsAnswer {
  /**
   * The maximum number of groups allowed for your account. The default is 200 groups per Region.
   *
   * @public
   */
  MaxNumberOfAutoScalingGroups?: number | undefined;

  /**
   * The maximum number of launch configurations allowed for your account. The default is 200 launch configurations per Region.
   *
   * @public
   */
  MaxNumberOfLaunchConfigurations?: number | undefined;

  /**
   * The current number of groups for your account.
   *
   * @public
   */
  NumberOfAutoScalingGroups?: number | undefined;

  /**
   * The current number of launch configurations for your account.
   *
   * @public
   */
  NumberOfLaunchConfigurations?: number | undefined;
}

/**
 * @public
 */
export interface DescribeAccountSettingsAnswer {
  /**
   * Information about the account settings.
   *
   * @public
   */
  Settings?: AccountSetting[] | undefined;

  /**
   * A string that indicates that the response contains more items than can be returned in a single response. To receive additional items, specify this string for the `NextToken` value when requesting the next set of items. This value is `null` when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAccountSettingsType {
  /**
   * The name of the account setting to describe. If you omit this parameter, all account settings are described.
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return with this call. The default value is `50` and the maximum value is `100`.
   *
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * @public
 */
export interface DescribeAdjustmentTypesAnswer {
  /**
   * The policy adjustment types.
   *
   * @public
   */
  AdjustmentTypes?: AdjustmentType[] | undefined;
}

/**
 * Describes a filter that is used to return a more specific list of results from a describe operation.
 *
 * If you specify multiple filters, the filters are automatically logically joined with an `AND`, and the request returns only the results that match all of the specified filters.
 *
 * For more information, see [Tag Auto Scaling groups and instances](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-tagging.html) in the *Amazon EC2 Auto Scaling User Guide*.
 *
 * @public
 */
export interface Filter {
  /**
   * The name of the filter.
   *
   * The valid values for `Name` depend on which API operation you're using with the filter.
   *
   * **[DescribeAutoScalingGroups](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeAutoScalingGroups.html)**
   *
   * Valid values for `Name` include the following:
   *
   * - `tag-key` - Accepts tag keys. The results only include information about the Auto Scaling groups associated with these tag keys.
   * - `tag-value` - Accepts tag values. The results only include information about the Auto Scaling groups associated with these tag values.
   * - `tag:<key>` - Accepts the key/value combination of the tag. Use the tag key in the filter name and the tag value as the filter value. The results only include information about the Auto Scaling groups associated with the specified key/value combination.
   *
   * **[DescribeTags](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeTags.html)**
   *
   * Valid values for `Name` include the following:
   *
   * - `auto-scaling-group` - Accepts the names of Auto Scaling groups. The results only include information about the tags associated with these Auto Scaling groups.
   * - `key` - Accepts tag keys. The results only include information about the tags associated with these tag keys.
   * - `value` - Accepts tag values. The results only include information about the tags associated with these tag values.
   * - `propagate-at-launch` - Accepts a Boolean value, which specifies whether tags propagate to instances at launch. The results only include information about the tags associated with the specified Boolean value.
   *
   * **[DescribeScalingActivities](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeScalingActivities.html)**
   *
   * Valid values for `Name` include the following:
   *
   * - `StartTimeLowerBound` - The earliest scaling activities to return based on the activity start time. Scaling activities with a start time earlier than this value are not included in the results. Only activities started within the last six weeks can be returned regardless of the value specified.
   * - `StartTimeUpperBound` - The latest scaling activities to return based on the activity start time. Scaling activities with a start time later than this value are not included in the results. Only activities started within the last six weeks can be returned regardless of the value specified.
   * - `Status` - The `StatusCode` value of the scaling activity. This filter can only be used in combination with the `AutoScalingGroupName` parameter. For valid `StatusCode` values, see [Activity](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_Activity.html) in the *Amazon EC2 Auto Scaling API Reference*.
   *
   * `StartTimeLowerBound` and `StartTimeUpperBound` accept ISO 8601 formatted timestamps. Timestamps without a timezone offset are assumed to be UTC.
   *
   * - `2000-01-18T08:15:00Z`
   * - `2000-01-18T16:15:00+08:00`
   *
   * @public
   */
  Name?: string | undefined;

  /**
   * One or more filter values. Filter values are case-sensitive.
   *
   * If you specify multiple values for a filter, the values are automatically logically joined with an `OR`, and the request returns all results that match any of the specified values.
   *
   * **DescribeAutoScalingGroups example:** Specify "tag:environment" for the filter name and "production,development" for the filter values to find Auto Scaling groups with the tag "environment=production" or "environment=development".
   *
   * **DescribeScalingActivities example:** Specify "Status" for the filter name and "Successful,Failed" for the filter values to find scaling activities with a status of either "Successful" or "Failed".
   *
   * @public
   */
  Values?: string[] | undefined;
}

/**
 * @public
 */
export interface AutoScalingGroupNamesType {
  /**
   * The names of the Auto Scaling groups. By default, you can only specify up to 50 names. You can optionally increase this limit using the `MaxRecords` property.
   *
   * If you omit this property, all Auto Scaling groups are described.
   *
   * @public
   */
  AutoScalingGroupNames?: string[] | undefined;

  /**
   * Specifies whether to include information about Amazon EC2 instances in the response. When set to `true` (default), the response includes instance details.
   *
   * @public
   */
  IncludeInstances?: boolean | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return with this call. The default value is `50` and the maximum value is `100`.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * One or more filters to limit the results based on specific tags.
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Describes an enabled Auto Scaling group metric.
 *
 * @public
 */
export interface EnabledMetric {
  /**
   * One of the following metrics:
   *
   * - `GroupMinSize`
   * - `GroupMaxSize`
   * - `GroupDesiredCapacity`
   * - `GroupInServiceInstances`
   * - `GroupPendingInstances`
   * - `GroupStandbyInstances`
   * - `GroupTerminatingInstances`
   * - `GroupTotalInstances`
   * - `GroupInServiceCapacity`
   * - `GroupPendingCapacity`
   * - `GroupStandbyCapacity`
   * - `GroupTerminatingCapacity`
   * - `GroupTotalCapacity`
   * - `WarmPoolDesiredCapacity`
   * - `WarmPoolWarmedCapacity`
   * - `WarmPoolPendingCapacity`
   * - `WarmPoolTerminatingCapacity`
   * - `WarmPoolTotalCapacity`
   * - `GroupAndWarmPoolDesiredCapacity`
   * - `GroupAndWarmPoolTotalCapacity`
   *
   * For more information, see [Amazon CloudWatch metrics for Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-metrics.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  Metric?: string | undefined;

  /**
   * The granularity of the metric. The only valid value is `1Minute`.
   *
   * @public
   */
  Granularity?: string | undefined;
}

/**
 * Describes an EC2 instance.
 *
 * @public
 */
export interface Instance {
  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The instance type of the EC2 instance.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The Availability Zone in which the instance is running.
   *
   * @public
   */
  AvailabilityZone: string | undefined;

  /**
   * The Availability Zone ID where the instance was launched.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * A description of the current lifecycle state. The `Quarantined` state is not used. For more information, see [Amazon EC2 Auto Scaling instance lifecycle](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-lifecycle.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  LifecycleState: LifecycleState | undefined;

  /**
   * The last reported health status of the instance. `Healthy` means that the instance is healthy and should remain in service. `Unhealthy` means that the instance is unhealthy and that Amazon EC2 Auto Scaling should terminate and replace it.
   *
   * @public
   */
  HealthStatus: string | undefined;

  /**
   * The launch configuration associated with the instance.
   *
   * @public
   */
  LaunchConfigurationName?: string | undefined;

  /**
   * The launch template for the instance.
   *
   * @public
   */
  LaunchTemplate?: LaunchTemplateSpecification | undefined;

  /**
   * The ID of the Amazon Machine Image (AMI) used for the instance's current root volume. This value reflects the most recent AMI applied to the instance, including updates made through root volume replacement operations.
   *
   * This field appears for:
   *
   * - Instances with root volume replacements through Instance Refresh
   * - Instances launched with AMI overrides
   *
   * This field won't appear for:
   *
   * - Existing instances launched from Launch Templates without overrides
   * - Existing instances that didn’t have their root volume replaced through Instance Refresh
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * Indicates whether the instance is protected from termination by Amazon EC2 Auto Scaling when scaling in.
   *
   * @public
   */
  ProtectedFromScaleIn: boolean | undefined;

  /**
   * The number of capacity units contributed by the instance based on its instance type.
   *
   * Valid Range: Minimum value of 1. Maximum value of 999.
   *
   * @public
   */
  WeightedCapacity?: string | undefined;
}

/**
 * Describes an auto scaling process that has been suspended.
 *
 * For more information, see [Types of processes](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html#process-types) in the *Amazon EC2 Auto Scaling User Guide*.
 *
 * @public
 */
export interface SuspendedProcess {
  /**
   * The name of the suspended process.
   *
   * @public
   */
  ProcessName?: string | undefined;

  /**
   * The reason that the process was suspended.
   *
   * @public
   */
  SuspensionReason?: string | undefined;
}

/**
 * Describes a tag for an Auto Scaling group.
 *
 * @public
 */
export interface TagDescription {
  /**
   * The name of the group.
   *
   * @public
   */
  ResourceId?: string | undefined;

  /**
   * The type of resource. The only supported value is `auto-scaling-group`.
   *
   * @public
   */
  ResourceType?: string | undefined;

  /**
   * The tag key.
   *
   * @public
   */
  Key?: string | undefined;

  /**
   * The tag value.
   *
   * @public
   */
  Value?: string | undefined;

  /**
   * Determines whether the tag is added to new instances as they are launched in the group.
   *
   * @public
   */
  PropagateAtLaunch?: boolean | undefined;
}

/**
 * Describes an instance reuse policy for a warm pool.
 *
 * For more information, see [Warm pools for Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-warm-pools.html) in the *Amazon EC2 Auto Scaling User Guide*.
 *
 * @public
 */
export interface InstanceReusePolicy {
  /**
   * Specifies whether instances in the Auto Scaling group can be returned to the warm pool on scale in.
   *
   * @public
   */
  ReuseOnScaleIn?: boolean | undefined;
}

/**
 * Describes a warm pool configuration.
 *
 * @public
 */
export interface WarmPoolConfiguration {
  /**
   * The maximum number of instances that are allowed to be in the warm pool or in any state except `Terminated` for the Auto Scaling group.
   *
   * @public
   */
  MaxGroupPreparedCapacity?: number | undefined;

  /**
   * The minimum number of instances to maintain in the warm pool.
   *
   * @public
   */
  MinSize?: number | undefined;

  /**
   * The instance state to transition to after the lifecycle actions are complete.
   *
   * @public
   */
  PoolState?: WarmPoolState | undefined;

  /**
   * The status of a warm pool that is marked for deletion.
   *
   * @public
   */
  Status?: WarmPoolStatus | undefined;

  /**
   * The instance reuse policy.
   *
   * @public
   */
  InstanceReusePolicy?: InstanceReusePolicy | undefined;
}

/**
 * Describes an Auto Scaling group.
 *
 * @public
 */
export interface AutoScalingGroup {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupARN?: string | undefined;

  /**
   * The name of the associated launch configuration for the Auto Scaling group.
   *
   * @public
   */
  LaunchConfigurationName?: string | undefined;

  /**
   * The launch template for the Auto Scaling group.
   *
   * @public
   */
  LaunchTemplate?: LaunchTemplateSpecification | undefined;

  /**
   * The mixed instances policy for the group.
   *
   * @public
   */
  MixedInstancesPolicy?: MixedInstancesPolicy | undefined;

  /**
   * The minimum size of the Auto Scaling group.
   *
   * @public
   */
  MinSize: number | undefined;

  /**
   * The maximum size of the Auto Scaling group.
   *
   * @public
   */
  MaxSize: number | undefined;

  /**
   * The desired size of the Auto Scaling group.
   *
   * @public
   */
  DesiredCapacity: number | undefined;

  /**
   * The predicted capacity of the group when it has a predictive scaling policy.
   *
   * @public
   */
  PredictedCapacity?: number | undefined;

  /**
   * The duration of the default cooldown period, in seconds, for the Auto Scaling group.
   *
   * @public
   */
  DefaultCooldown: number | undefined;

  /**
   * One or more Availability Zones for the Auto Scaling group.
   *
   * @public
   */
  AvailabilityZones: string[] | undefined;

  /**
   * The Availability Zone IDs where the Auto Scaling group can launch instances.
   *
   * @public
   */
  AvailabilityZoneIds?: string[] | undefined;

  /**
   * One or more load balancers associated with the group.
   *
   * @public
   */
  LoadBalancerNames?: string[] | undefined;

  /**
   * The Amazon Resource Names (ARN) of the target groups for your load balancer.
   *
   * @public
   */
  TargetGroupARNs?: string[] | undefined;

  /**
   * One or more comma-separated health check types for the Auto Scaling group.
   *
   * @public
   */
  HealthCheckType: string | undefined;

  /**
   * The duration of the health check grace period, in seconds, for the Auto Scaling group.
   *
   * @public
   */
  HealthCheckGracePeriod?: number | undefined;

  /**
   * The EC2 instances associated with the Auto Scaling group.
   *
   * @public
   */
  Instances?: Instance[] | undefined;

  /**
   * The date and time the Auto Scaling group was created.
   *
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * The suspended processes associated with the Auto Scaling group.
   *
   * @public
   */
  SuspendedProcesses?: SuspendedProcess[] | undefined;

  /**
   * The name of the placement group into which to launch EC2 instances for the Auto Scaling group.
   *
   * @public
   */
  PlacementGroup?: string | undefined;

  /**
   * One or more comma-separated subnet IDs for the Auto Scaling group.
   *
   * @public
   */
  VPCZoneIdentifier?: string | undefined;

  /**
   * The metrics enabled for the Auto Scaling group.
   *
   * @public
   */
  EnabledMetrics?: EnabledMetric[] | undefined;

  /**
   * The current state of the Auto Scaling group when the [DeleteAutoScalingGroup](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DeleteAutoScalingGroup.html) operation is in progress.
   *
   * @public
   */
  Status?: string | undefined;

  /**
   * The tags for the Auto Scaling group.
   *
   * @public
   */
  Tags?: TagDescription[] | undefined;

  /**
   * The termination policies for the Auto Scaling group.
   *
   * @public
   */
  TerminationPolicies?: string[] | undefined;

  /**
   * Indicates whether newly launched EC2 instances are protected from termination when scaling in for the Auto Scaling group.
   *
   * For more information about preventing instances from terminating on scale in, see [Use instance scale-in protection](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-protection.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  NewInstancesProtectedFromScaleIn?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to call other Amazon Web Services on your behalf.
   *
   * @public
   */
  ServiceLinkedRoleARN?: string | undefined;

  /**
   * The maximum amount of time, in seconds, that an EC2 instance can be in service for the Auto Scaling group.
   *
   * @public
   */
  MaxInstanceLifetime?: number | undefined;

  /**
   * Indicates whether Capacity Rebalancing is enabled.
   *
   * @public
   */
  CapacityRebalance?: boolean | undefined;

  /**
   * The warm pool for the group.
   *
   * @public
   */
  WarmPoolConfiguration?: WarmPoolConfiguration | undefined;

  /**
   * The current size of the warm pool.
   *
   * @public
   */
  WarmPoolSize?: number | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  Context?: string | undefined;

  /**
   * The unit of measurement for the value specified for desired capacity. Amazon EC2 Auto Scaling supports `DesiredCapacityType` for attribute-based instance type selection only.
   *
   * @public
   */
  DesiredCapacityType?: string | undefined;

  /**
   * The duration of the default EC2 instance warmup time, in seconds, for the Auto Scaling group.
   *
   * @public
   */
  DefaultInstanceWarmup?: number | undefined;

  /**
   * The traffic sources associated with this Auto Scaling group.
   *
   * @public
   */
  TrafficSources?: TrafficSourceIdentifier[] | undefined;

  /**
   * An instance maintenance policy.
   *
   * @public
   */
  InstanceMaintenancePolicy?: InstanceMaintenancePolicy | undefined;

  /**
   * The deletion protection setting for the Auto Scaling group.
   *
   * @public
   */
  DeletionProtection?: DeletionProtection | undefined;

  /**
   * The EC2 instance capacity distribution across Availability Zones for the Auto Scaling group.
   *
   * @public
   */
  AvailabilityZoneDistribution?: AvailabilityZoneDistribution | undefined;

  /**
   * The Availability Zone impairment policy for the Auto Scaling group.
   *
   * @public
   */
  AvailabilityZoneImpairmentPolicy?: AvailabilityZoneImpairmentPolicy | undefined;

  /**
   * The capacity reservation specification for the Auto Scaling group.
   *
   * @public
   */
  CapacityReservationSpecification?: CapacityReservationSpecification | undefined;

  /**
   * The instance lifecycle policy for the Auto Scaling group.
   *
   * @public
   */
  InstanceLifecyclePolicy?: InstanceLifecyclePolicy | undefined;

  /**
   * The entity that manages the Auto Scaling group, if applicable. When set, only the designated operator can make changes to the group configuration.
   *
   * @public
   */
  Operator?: Operator | undefined;
}

/**
 * @public
 */
export interface AutoScalingGroupsType {
  /**
   * The groups.
   *
   * @public
   */
  AutoScalingGroups: AutoScalingGroup[] | undefined;

  /**
   * A string that indicates that the response contains more items than can be returned in a single response. To receive additional items, specify this string for the `NextToken` value when requesting the next set of items. This value is null when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes an EC2 instance associated with an Auto Scaling group.
 *
 * @public
 */
export interface AutoScalingInstanceDetails {
  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The instance type of the EC2 instance.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The name of the Auto Scaling group for the instance.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * The Availability Zone for the instance.
   *
   * @public
   */
  AvailabilityZone: string | undefined;

  /**
   * The Availability Zone ID where the instance is located.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The lifecycle state for the instance. The `Quarantined` state is not used. For more information, see [Amazon EC2 Auto Scaling instance lifecycle](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-lifecycle.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * Valid values: `Pending` | `Pending:Wait` | `Pending:Proceed` | `Quarantined` | `InService` | `Terminating` | `Terminating:Wait` | `Terminating:Proceed` | `Terminating:Retained` | `Terminated` | `Detaching` | `Detached` | `EnteringStandby` | `Standby` | `ReplacingRootVolume` | `ReplacingRootVolume:Wait` | `ReplacingRootVolume:Proceed` | `RootVolumeReplaced` | `Warmed:Pending` | `Warmed:Pending:Wait` | `Warmed:Pending:Proceed` | `Warmed:Pending:Retained` | `Warmed:Terminating` | `Warmed:Terminating:Wait` | `Warmed:Terminating:Proceed` | `Warmed:Terminating:Retained` | `Warmed:Terminated` | `Warmed:Stopped` | `Warmed:Running` | `Warmed:Hibernated`
   *
   * @public
   */
  LifecycleState: string | undefined;

  /**
   * The last reported health status of this instance. `Healthy` means that the instance is healthy and should remain in service. `Unhealthy` means that the instance is unhealthy and Amazon EC2 Auto Scaling should terminate and replace it.
   *
   * @public
   */
  HealthStatus: string | undefined;

  /**
   * The launch configuration used to launch the instance. This value is not available if you attached the instance to the Auto Scaling group.
   *
   * @public
   */
  LaunchConfigurationName?: string | undefined;

  /**
   * The launch template for the instance.
   *
   * @public
   */
  LaunchTemplate?: LaunchTemplateSpecification | undefined;

  /**
   * The ID of the Amazon Machine Image (AMI) associated with the instance. This field shows the current AMI ID of the instance's root volume. It may differ from the original AMI used when the instance was first launched.
   *
   * This field appears for:
   *
   * - Instances with root volume replacements through Instance Refresh
   * - Instances launched with AMI overrides
   *
   * This field won't appear for:
   *
   * - Existing instances launched from Launch Templates without overrides
   * - Existing instances that didn’t have their root volume replaced through Instance Refresh
   *
   * @public
   */
  ImageId?: string | undefined;

  /**
   * Indicates whether the instance is protected from termination by Amazon EC2 Auto Scaling when scaling in.
   *
   * @public
   */
  ProtectedFromScaleIn: boolean | undefined;

  /**
   * The number of capacity units contributed by the instance based on its instance type.
   *
   * Valid Range: Minimum value of 1. Maximum value of 999.
   *
   * @public
   */
  WeightedCapacity?: string | undefined;
}

/**
 * @public
 */
export interface AutoScalingInstancesType {
  /**
   * The instances.
   *
   * @public
   */
  AutoScalingInstances?: AutoScalingInstanceDetails[] | undefined;

  /**
   * A string that indicates that the response contains more items than can be returned in a single response. To receive additional items, specify this string for the `NextToken` value when requesting the next set of items. This value is null when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAutoScalingInstancesType {
  /**
   * The IDs of the instances. If you omit this property, all Auto Scaling instances are described. If you specify an ID that does not exist, it is ignored with no error.
   *
   * Array Members: Maximum number of 50 items.
   *
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * The maximum number of items to return with this call. The default value is `50` and the maximum value is `50`.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeAutoScalingNotificationTypesAnswer {
  /**
   * The notification types.
   *
   * @public
   */
  AutoScalingNotificationTypes?: string[] | undefined;
}

/**
 * Describes the desired configuration for an instance refresh.
 *
 * If you specify a desired configuration, you must specify either a `LaunchTemplate` or a `MixedInstancesPolicy`.
 *
 * @public
 */
export interface DesiredConfiguration {
  /**
   * Describes the launch template and the version of the launch template that Amazon EC2 Auto Scaling uses to launch Amazon EC2 instances. For more information about launch templates, see [Launch templates](https://docs.aws.amazon.com/autoscaling/ec2/userguide/launch-templates.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  LaunchTemplate?: LaunchTemplateSpecification | undefined;

  /**
   * Use this structure to launch multiple instance types and configure how capacity is distributed across On-Demand, Spot, and supported Capacity Reservation types within a single Auto Scaling group.
   *
   * A mixed instances policy contains information that Amazon EC2 Auto Scaling can use to launch instances, prioritize capacity types, and help optimize your costs. For more information, see [Auto Scaling groups with multiple instance types and purchase options](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  MixedInstancesPolicy?: MixedInstancesPolicy | undefined;
}

/**
 * Describes the preferences for an instance refresh.
 *
 * @public
 */
export interface RefreshPreferences {
  /**
   * Specifies the minimum percentage of the group to keep in service, healthy, and ready to use to support your workload to allow the operation to continue. The value is expressed as a percentage of the desired capacity of the Auto Scaling group. Value range is 0 to 100.
   *
   * If you do not specify this property, the default is 90 percent, or the percentage set in the instance maintenance policy for the Auto Scaling group, if defined.
   *
   * @public
   */
  MinHealthyPercentage?: number | undefined;

  /**
   * A time period, in seconds, during which an instance refresh waits before moving on to replacing the next instance after a new instance enters the `InService` state.
   *
   * This property is not required for normal usage. Instead, use the `DefaultInstanceWarmup` property of the Auto Scaling group. The `InstanceWarmup` and `DefaultInstanceWarmup` properties work the same way. Only specify this property if you must override the `DefaultInstanceWarmup` property.
   *
   * If you do not specify this property, the instance warmup by default is the value of the `DefaultInstanceWarmup` property, if defined (which is recommended in all cases), or the `HealthCheckGracePeriod` property otherwise.
   *
   * @public
   */
  InstanceWarmup?: number | undefined;

  /**
   * (Optional) Threshold values for each checkpoint in ascending order. Each number must be unique. To replace all instances in the Auto Scaling group, the last number in the array must be `100`.
   *
   * For usage examples, see [Add checkpoints to an instance refresh](https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-adding-checkpoints-instance-refresh.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  CheckpointPercentages?: number[] | undefined;

  /**
   * (Optional) The amount of time, in seconds, to wait after a checkpoint before continuing. This property is optional, but if you specify a value for it, you must also specify a value for `CheckpointPercentages`. If you specify a value for `CheckpointPercentages` and not for `CheckpointDelay`, the `CheckpointDelay` defaults to `3600` (1 hour).
   *
   * @public
   */
  CheckpointDelay?: number | undefined;

  /**
   * (Optional) Indicates whether skip matching is enabled. If enabled (`true`), then Amazon EC2 Auto Scaling skips replacing instances that match the desired configuration. If no desired configuration is specified, then it skips replacing instances that have the same launch template and instance types that the Auto Scaling group was using before the start of the instance refresh. The default is `false`.
   *
   * For more information, see [Use an instance refresh with skip matching](https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-instance-refresh-skip-matching.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  SkipMatching?: boolean | undefined;

  /**
   * (Optional) Indicates whether to roll back the Auto Scaling group to its previous configuration if the instance refresh fails or a CloudWatch alarm threshold is met. The default is `false`.
   *
   * A rollback is not supported in the following situations:
   *
   * - There is no desired configuration specified for the instance refresh.
   * - The Auto Scaling group has a launch template that uses an Amazon Web Services Systems Manager parameter instead of an AMI ID for the `ImageId` property.
   * - The Auto Scaling group uses the launch template's `$Latest` or `$Default` version.
   *
   * For more information, see [Undo changes with a rollback](https://docs.aws.amazon.com/autoscaling/ec2/userguide/instance-refresh-rollback.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  AutoRollback?: boolean | undefined;

  /**
   * Choose the behavior that you want Amazon EC2 Auto Scaling to use if instances protected from scale in are found.
   *
   * The following lists the valid values:
   *
   * - **Refresh**
   *
   *   Amazon EC2 Auto Scaling replaces instances that are protected from scale in.
   *
   * - **Ignore**
   *
   *   Amazon EC2 Auto Scaling ignores instances that are protected from scale in and continues to replace instances that are not protected.
   *
   * - **Wait (default)**
   *
   *   Amazon EC2 Auto Scaling waits one hour for you to remove scale-in protection. Otherwise, the instance refresh will fail.
   *
   * @public
   */
  ScaleInProtectedInstances?: ScaleInProtectedInstances | undefined;

  /**
   * Choose the behavior that you want Amazon EC2 Auto Scaling to use if instances in `Standby` state are found.
   *
   * The following lists the valid values:
   *
   * - **Terminate**
   *
   *   Amazon EC2 Auto Scaling terminates instances that are in `Standby`.
   *
   * - **Ignore**
   *
   *   Amazon EC2 Auto Scaling ignores instances that are in `Standby` and continues to replace instances that are in the `InService` state.
   *
   * - **Wait (default)**
   *
   *   Amazon EC2 Auto Scaling waits one hour for you to return the instances to service. Otherwise, the instance refresh will fail.
   *
   * @public
   */
  StandbyInstances?: StandbyInstances | undefined;

  /**
   * (Optional) The CloudWatch alarm specification. CloudWatch alarms can be used to identify any issues and fail the operation if an alarm threshold is met.
   *
   * @public
   */
  AlarmSpecification?: AlarmSpecification | undefined;

  /**
   * Specifies the maximum percentage of the group that can be in service and healthy, or pending, to support your workload when replacing instances. The value is expressed as a percentage of the desired capacity of the Auto Scaling group. Value range is 100 to 200.
   *
   * If you specify `MaxHealthyPercentage`, you must also specify `MinHealthyPercentage`, and the difference between them cannot be greater than 100. A larger range increases the number of instances that can be replaced at the same time.
   *
   * If you do not specify this property, the default is 100 percent, or the percentage set in the instance maintenance policy for the Auto Scaling group, if defined.
   *
   * > **Important:** Explicitly setting `MaxHealthyPercentage` to 100 is not equivalent to omitting it. When `MaxHealthyPercentage` is explicitly set and it is mathematically impossible to replace instances while honoring both `MinHealthyPercentage` and `MaxHealthyPercentage` bounds simultaneously, Auto Scaling launches a new instance before terminating an old one (temporarily exceeding the desired capacity). When `MaxHealthyPercentage` is omitted, Auto Scaling terminates an instance and launches its replacement simultaneously. This behavioral difference can affect workflows that depend on instance replacement ordering.
   *
   * @public
   */
  MaxHealthyPercentage?: number | undefined;

  /**
   * The amount of time, in seconds, to wait at the end of an instance refresh before the instance refresh is considered complete.
   *
   * @public
   */
  BakeTime?: number | undefined;
}

/**
 * Reports progress on replacing instances that are in the Auto Scaling group.
 *
 * @public
 */
export interface InstanceRefreshLivePoolProgress {
  /**
   * The percentage of instances in the Auto Scaling group that have been replaced. For each instance replacement, Amazon EC2 Auto Scaling tracks the instance's health status and warm-up time. When the instance's health status changes to healthy and the specified warm-up time passes, the instance is considered updated and is added to the percentage complete.
   *
   * @public
   */
  PercentageComplete?: number | undefined;

  /**
   * The number of instances remaining to update.
   *
   * @public
   */
  InstancesToUpdate?: number | undefined;
}

/**
 * Reports progress on replacing instances that are in the warm pool.
 *
 * @public
 */
export interface InstanceRefreshWarmPoolProgress {
  /**
   * The percentage of instances in the warm pool that have been replaced. For each instance replacement, Amazon EC2 Auto Scaling tracks the instance's health status and warm-up time. When the instance's health status changes to healthy and the specified warm-up time passes, the instance is considered updated and is added to the percentage complete.
   *
   * @public
   */
  PercentageComplete?: number | undefined;

  /**
   * The number of instances remaining to update.
   *
   * @public
   */
  InstancesToUpdate?: number | undefined;
}

/**
 * Reports progress on replacing instances in an Auto Scaling group that has a warm pool. This includes separate details for instances in the warm pool and instances in the Auto Scaling group (the live pool).
 *
 * @public
 */
export interface InstanceRefreshProgressDetails {
  /**
   * Reports progress on replacing instances that are in the Auto Scaling group.
   *
   * @public
   */
  LivePoolProgress?: InstanceRefreshLivePoolProgress | undefined;

  /**
   * Reports progress on replacing instances that are in the warm pool.
   *
   * @public
   */
  WarmPoolProgress?: InstanceRefreshWarmPoolProgress | undefined;
}

/**
 * Details about an instance refresh rollback.
 *
 * @public
 */
export interface RollbackDetails {
  /**
   * The reason for this instance refresh rollback (for example, whether a manual or automatic rollback was initiated).
   *
   * @public
   */
  RollbackReason?: string | undefined;

  /**
   * The date and time at which the rollback began.
   *
   * @public
   */
  RollbackStartTime?: Date | undefined;

  /**
   * Indicates the value of `PercentageComplete` at the time the rollback started.
   *
   * @public
   */
  PercentageCompleteOnRollback?: number | undefined;

  /**
   * Indicates the value of `InstancesToUpdate` at the time the rollback started.
   *
   * @public
   */
  InstancesToUpdateOnRollback?: number | undefined;

  /**
   * Reports progress on replacing instances in an Auto Scaling group that has a warm pool. This includes separate details for instances in the warm pool and instances in the Auto Scaling group (the live pool).
   *
   * @public
   */
  ProgressDetailsOnRollback?: InstanceRefreshProgressDetails | undefined;
}

/**
 * Describes an instance refresh for an Auto Scaling group.
 *
 * @public
 */
export interface InstanceRefresh {
  /**
   * The instance refresh ID.
   *
   * @public
   */
  InstanceRefreshId?: string | undefined;

  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName?: string | undefined;

  /**
   * The current status for the instance refresh operation:
   *
   * - `Pending` - The request was created, but the instance refresh has not started.
   * - `InProgress` - An instance refresh is in progress.
   * - `Successful` - An instance refresh completed successfully.
   * - `Failed` - An instance refresh failed to complete. You can troubleshoot using the status reason and the scaling activities.
   * - `Cancelling` - An ongoing instance refresh is being cancelled.
   * - `Cancelled` - The instance refresh is cancelled.
   * - `RollbackInProgress` - An instance refresh is being rolled back.
   * - `RollbackFailed` - The rollback failed to complete. You can troubleshoot using the status reason and the scaling activities.
   * - `RollbackSuccessful` - The rollback completed successfully.
   * - `Baking` - Waiting the specified bake time after an instance refresh has finished updating instances.
   *
   * @public
   */
  Status?: InstanceRefreshStatus | undefined;

  /**
   * The explanation for the specific status assigned to this operation.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * The date and time at which the instance refresh began.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The date and time at which the instance refresh ended.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The percentage of the instance refresh that is complete. For each instance replacement, Amazon EC2 Auto Scaling tracks the instance's health status and warm-up time. When the instance's health status changes to healthy and the specified warm-up time passes, the instance is considered updated and is added to the percentage complete.
   *
   * > **Note:** `PercentageComplete` does not include instances that are replaced during a rollback. This value gradually goes back down to zero during a rollback.
   *
   * @public
   */
  PercentageComplete?: number | undefined;

  /**
   * The number of instances remaining to update before the instance refresh is complete.
   *
   * > **Note:** If you roll back the instance refresh, `InstancesToUpdate` shows you the number of instances that were not yet updated by the instance refresh. Therefore, these instances don't need to be replaced as part of the rollback.
   *
   * @public
   */
  InstancesToUpdate?: number | undefined;

  /**
   * Additional progress details for an Auto Scaling group that has a warm pool.
   *
   * @public
   */
  ProgressDetails?: InstanceRefreshProgressDetails | undefined;

  /**
   * The preferences for an instance refresh.
   *
   * @public
   */
  Preferences?: RefreshPreferences | undefined;

  /**
   * Describes the desired configuration for the instance refresh.
   *
   * @public
   */
  DesiredConfiguration?: DesiredConfiguration | undefined;

  /**
   * The rollback details.
   *
   * @public
   */
  RollbackDetails?: RollbackDetails | undefined;

  /**
   * The strategy to use for the instance refresh. This determines how instances in the Auto Scaling group are updated. Default is Rolling.
   *
   * - `Rolling` – Terminates instances and launches replacements in batches
   * - `ReplaceRootVolume` – Updates instances by replacing only the root volume without terminating the instance
   *
   * @public
   */
  Strategy?: RefreshStrategy | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceRefreshesAnswer {
  /**
   * The instance refreshes for the specified group, sorted by creation timestamp in descending order.
   *
   * @public
   */
  InstanceRefreshes?: InstanceRefresh[] | undefined;

  /**
   * A string that indicates that the response contains more items than can be returned in a single response. To receive additional items, specify this string for the `NextToken` value when requesting the next set of items. This value is null when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeInstanceRefreshesType {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * One or more instance refresh IDs.
   *
   * @public
   */
  InstanceRefreshIds?: string[] | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return with this call. The default value is `50` and the maximum value is `100`.
   *
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * @public
 */
export interface LaunchConfigurationNamesType {
  /**
   * The launch configuration names. If you omit this property, all launch configurations are described.
   *
   * Array Members: Maximum number of 50 items.
   *
   * @public
   */
  LaunchConfigurationNames?: string[] | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return with this call. The default value is `50` and the maximum value is `100`.
   *
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * Describes a launch configuration.
 *
 * @public
 */
export interface LaunchConfiguration {
  /**
   * The name of the launch configuration.
   *
   * @public
   */
  LaunchConfigurationName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the launch configuration.
   *
   * @public
   */
  LaunchConfigurationARN?: string | undefined;

  /**
   * The ID of the Amazon Machine Image (AMI) to use to launch your EC2 instances. For more information, see [Find a Linux AMI](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/finding-an-ami.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  ImageId: string | undefined;

  /**
   * The name of the key pair.
   *
   * For more information, see [Amazon EC2 key pairs and Amazon EC2 instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  KeyName?: string | undefined;

  /**
   * A list that contains the security groups to assign to the instances in the Auto Scaling group. For more information, see [Control traffic to your Amazon Web Services resources using security groups](https://docs.aws.amazon.com/vpc/latest/userguide/vpc-security-groups.html) in the *Amazon Virtual Private Cloud User Guide*.
   *
   * @public
   */
  SecurityGroups?: string[] | undefined;

  /**
   * Available for backward compatibility.
   *
   * @public
   */
  ClassicLinkVPCId?: string | undefined;

  /**
   * Available for backward compatibility.
   *
   * @public
   */
  ClassicLinkVPCSecurityGroups?: string[] | undefined;

  /**
   * The user data to make available to the launched EC2 instances. For more information, see [Instance metadata and user data](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html) in the *Amazon EC2 User Guide*. If you are using a command line tool, base64-encoding is performed for you, and you can load the text from a file. Otherwise, you must provide base64-encoded text. User data is limited to 16 KB.
   *
   * @public
   */
  UserData?: string | undefined;

  /**
   * The instance type for the instances. For information about available instance types, see [Available instance types](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#AvailableInstanceTypes) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  InstanceType: string | undefined;

  /**
   * The ID of the kernel associated with the AMI.
   *
   * @public
   */
  KernelId?: string | undefined;

  /**
   * The ID of the RAM disk associated with the AMI.
   *
   * @public
   */
  RamdiskId?: string | undefined;

  /**
   * The block device mapping entries that define the block devices to attach to the instances at launch. By default, the block devices specified in the block device mapping for the AMI are used. For more information, see [Block device mappings](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  BlockDeviceMappings?: BlockDeviceMapping[] | undefined;

  /**
   * Controls whether instances in this group are launched with detailed (`true`) or basic (`false`) monitoring.
   *
   * For more information, see [Configure monitoring for Auto Scaling instances](https://docs.aws.amazon.com/autoscaling/latest/userguide/enable-as-instance-metrics.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  InstanceMonitoring?: InstanceMonitoring | undefined;

  /**
   * The maximum hourly price to be paid for any Spot Instance launched to fulfill the request. Spot Instances are launched when the price you specify exceeds the current Spot price. For more information, see [Requesting Spot Instances for fault-tolerant and flexible applications](https://docs.aws.amazon.com/autoscaling/ec2/userguide/launch-template-spot-instances.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  SpotPrice?: string | undefined;

  /**
   * The name or the Amazon Resource Name (ARN) of the instance profile associated with the IAM role for the instance. The instance profile contains the IAM role. For more information, see [IAM role for applications that run on Amazon EC2 instances](https://docs.aws.amazon.com/autoscaling/ec2/userguide/us-iam-role.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  IamInstanceProfile?: string | undefined;

  /**
   * The creation date and time for the launch configuration.
   *
   * @public
   */
  CreatedTime: Date | undefined;

  /**
   * Specifies whether the launch configuration is optimized for EBS I/O (`true`) or not (`false`). For more information, see [Amazon EBS-optimized instances](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-optimized.html) in the *Amazon EC2 User Guide*.
   *
   * @public
   */
  EbsOptimized?: boolean | undefined;

  /**
   * Specifies whether to assign a public IPv4 address to the group's instances. If the instance is launched into a default subnet, the default is to assign a public IPv4 address, unless you disabled the option to assign a public IPv4 address on the subnet. If the instance is launched into a nondefault subnet, the default is not to assign a public IPv4 address, unless you enabled the option to assign a public IPv4 address on the subnet. For more information, see [Provide network connectivity for your Auto Scaling instances using Amazon VPC](https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-in-vpc.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  AssociatePublicIpAddress?: boolean | undefined;

  /**
   * The tenancy of the instance, either `default` or `dedicated`. An instance with `dedicated` tenancy runs on isolated, single-tenant hardware and can only be launched into a VPC.
   *
   * @public
   */
  PlacementTenancy?: string | undefined;

  /**
   * The metadata options for the instances. For more information, see [Configure the instance metadata options](https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-config.html#launch-configurations-imds) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  MetadataOptions?: InstanceMetadataOptions | undefined;
}

/**
 * @public
 */
export interface LaunchConfigurationsType {
  /**
   * The launch configurations.
   *
   * @public
   */
  LaunchConfigurations: LaunchConfiguration[] | undefined;

  /**
   * A string that indicates that the response contains more items than can be returned in a single response. To receive additional items, specify this string for the `NextToken` value when requesting the next set of items. This value is null when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes a lifecycle hook. A lifecycle hook lets you create solutions that are aware of events in the Auto Scaling instance lifecycle, and then perform a custom action on instances when the corresponding lifecycle event occurs.
 *
 * @public
 */
export interface LifecycleHook {
  /**
   * The name of the lifecycle hook.
   *
   * @public
   */
  LifecycleHookName?: string | undefined;

  /**
   * The name of the Auto Scaling group for the lifecycle hook.
   *
   * @public
   */
  AutoScalingGroupName?: string | undefined;

  /**
   * The lifecycle transition.
   *
   * Valid values: `autoscaling:EC2_INSTANCE_LAUNCHING` | `autoscaling:EC2_INSTANCE_TERMINATING`
   *
   * @public
   */
  LifecycleTransition?: string | undefined;

  /**
   * The ARN of the target that Amazon EC2 Auto Scaling sends notifications to when an instance is in a wait state for the lifecycle hook.
   *
   * @public
   */
  NotificationTargetARN?: string | undefined;

  /**
   * The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target (an Amazon SNS topic or an Amazon SQS queue).
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * Additional information that is included any time Amazon EC2 Auto Scaling sends a message to the notification target.
   *
   * @public
   */
  NotificationMetadata?: string | undefined;

  /**
   * The maximum time, in seconds, that can elapse before the lifecycle hook times out. If the lifecycle hook times out, Amazon EC2 Auto Scaling performs the action that you specified in the `DefaultResult` property.
   *
   * @public
   */
  HeartbeatTimeout?: number | undefined;

  /**
   * The maximum time, in seconds, that an instance can remain in a wait state. The maximum is 172800 seconds (48 hours) or 100 times `HeartbeatTimeout`, whichever is smaller.
   *
   * @public
   */
  GlobalTimeout?: number | undefined;

  /**
   * The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an unexpected failure occurs.
   *
   * Valid values: `CONTINUE` | `ABANDON`
   *
   * @public
   */
  DefaultResult?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLifecycleHooksAnswer {
  /**
   * The lifecycle hooks for the specified group.
   *
   * @public
   */
  LifecycleHooks?: LifecycleHook[] | undefined;
}

/**
 * @public
 */
export interface DescribeLifecycleHooksType {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * The names of one or more lifecycle hooks. If you omit this property, all lifecycle hooks are described.
   *
   * @public
   */
  LifecycleHookNames?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeLifecycleHookTypesAnswer {
  /**
   * The lifecycle hook types.
   *
   * @public
   */
  LifecycleHookTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeLoadBalancersRequest {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return with this call. The default value is `100` and the maximum value is `100`.
   *
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * Describes the state of a Classic Load Balancer.
 *
 * @public
 */
export interface LoadBalancerState {
  /**
   * The name of the load balancer.
   *
   * @public
   */
  LoadBalancerName?: string | undefined;

  /**
   * One of the following load balancer states:
   *
   * - `Adding` - The Auto Scaling instances are being registered with the load balancer.
   * - `Added` - All Auto Scaling instances are registered with the load balancer.
   * - `InService` - At least one Auto Scaling instance passed an `ELB` health check.
   * - `Removing` - The Auto Scaling instances are being deregistered from the load balancer. If connection draining is enabled, Elastic Load Balancing waits for in-flight requests to complete before deregistering the instances.
   * - `Removed` - All Auto Scaling instances are deregistered from the load balancer.
   *
   * @public
   */
  State?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLoadBalancersResponse {
  /**
   * The load balancers.
   *
   * @public
   */
  LoadBalancers?: LoadBalancerState[] | undefined;

  /**
   * A string that indicates that the response contains more items than can be returned in a single response. To receive additional items, specify this string for the `NextToken` value when requesting the next set of items. This value is null when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLoadBalancerTargetGroupsRequest {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return with this call. The default value is `100` and the maximum value is `100`.
   *
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * Describes the state of a target group.
 *
 * @public
 */
export interface LoadBalancerTargetGroupState {
  /**
   * The Amazon Resource Name (ARN) of the target group.
   *
   * @public
   */
  LoadBalancerTargetGroupARN?: string | undefined;

  /**
   * The state of the target group.
   *
   * - `Adding` - The Auto Scaling instances are being registered with the target group.
   * - `Added` - All Auto Scaling instances are registered with the target group.
   * - `InService` - At least one Auto Scaling instance passed an `ELB` health check.
   * - `Removing` - The Auto Scaling instances are being deregistered from the target group. If connection draining is enabled, Elastic Load Balancing waits for in-flight requests to complete before deregistering the instances.
   * - `Removed` - All Auto Scaling instances are deregistered from the target group.
   *
   * @public
   */
  State?: string | undefined;
}

/**
 * @public
 */
export interface DescribeLoadBalancerTargetGroupsResponse {
  /**
   * Information about the target groups.
   *
   * @public
   */
  LoadBalancerTargetGroups?: LoadBalancerTargetGroupState[] | undefined;

  /**
   * A string that indicates that the response contains more items than can be returned in a single response. To receive additional items, specify this string for the `NextToken` value when requesting the next set of items. This value is null when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * Describes a granularity of a metric.
 *
 * @public
 */
export interface MetricGranularityType {
  /**
   * The granularity. The only valid value is `1Minute`.
   *
   * @public
   */
  Granularity?: string | undefined;
}

/**
 * Describes a metric.
 *
 * @public
 */
export interface MetricCollectionType {
  /**
   * One of the following metrics:
   *
   * - `GroupMinSize`
   * - `GroupMaxSize`
   * - `GroupDesiredCapacity`
   * - `GroupInServiceInstances`
   * - `GroupPendingInstances`
   * - `GroupStandbyInstances`
   * - `GroupTerminatingInstances`
   * - `GroupTotalInstances`
   * - `GroupInServiceCapacity`
   * - `GroupPendingCapacity`
   * - `GroupStandbyCapacity`
   * - `GroupTerminatingCapacity`
   * - `GroupTotalCapacity`
   * - `WarmPoolDesiredCapacity`
   * - `WarmPoolWarmedCapacity`
   * - `WarmPoolPendingCapacity`
   * - `WarmPoolTerminatingCapacity`
   * - `WarmPoolTotalCapacity`
   * - `GroupAndWarmPoolDesiredCapacity`
   * - `GroupAndWarmPoolTotalCapacity`
   *
   * @public
   */
  Metric?: string | undefined;
}

/**
 * @public
 */
export interface DescribeMetricCollectionTypesAnswer {
  /**
   * The metrics.
   *
   * @public
   */
  Metrics?: MetricCollectionType[] | undefined;

  /**
   * The granularities for the metrics.
   *
   * @public
   */
  Granularities?: MetricGranularityType[] | undefined;
}

/**
 * Describes a notification.
 *
 * @public
 */
export interface NotificationConfiguration {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic.
   *
   * @public
   */
  TopicARN?: string | undefined;

  /**
   * One of the following event notification types:
   *
   * - `autoscaling:EC2_INSTANCE_LAUNCH`
   * - `autoscaling:EC2_INSTANCE_LAUNCH_ERROR`
   * - `autoscaling:EC2_INSTANCE_TERMINATE`
   * - `autoscaling:EC2_INSTANCE_TERMINATE_ERROR`
   * - `autoscaling:TEST_NOTIFICATION`
   *
   * @public
   */
  NotificationType?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNotificationConfigurationsAnswer {
  /**
   * The notification configurations.
   *
   * @public
   */
  NotificationConfigurations: NotificationConfiguration[] | undefined;

  /**
   * A string that indicates that the response contains more items than can be returned in a single response. To receive additional items, specify this string for the `NextToken` value when requesting the next set of items. This value is null when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeNotificationConfigurationsType {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupNames?: string[] | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return with this call. The default value is `50` and the maximum value is `100`.
   *
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * @public
 */
export interface DescribePoliciesType {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName?: string | undefined;

  /**
   * The names of one or more policies. If you omit this property, all policies are described. If a group name is provided, the results are limited to that group. If you specify an unknown policy name, it is ignored with no error.
   *
   * Array Members: Maximum number of 50 items.
   *
   * @public
   */
  PolicyNames?: string[] | undefined;

  /**
   * One or more policy types. The valid values are `SimpleScaling`, `StepScaling`, `TargetTrackingScaling`, and `PredictiveScaling`.
   *
   * @public
   */
  PolicyTypes?: string[] | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to be returned with each call. The default value is `50` and the maximum value is `100`.
   *
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * Describes the dimension of a metric.
 *
 * @public
 */
export interface MetricDimension {
  /**
   * The name of the dimension.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value of the dimension.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * Represents a specific metric.
 *
 * @public
 */
export interface Metric {
  /**
   * The namespace of the metric. For more information, see the table in [Amazon Web Services services that publish CloudWatch metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html) in the *Amazon CloudWatch User Guide*.
   *
   * @public
   */
  Namespace: string | undefined;

  /**
   * The name of the metric.
   *
   * @public
   */
  MetricName: string | undefined;

  /**
   * The dimensions for the metric. For the list of available dimensions, see the Amazon Web Services documentation available from the table in [Amazon Web Services services that publish CloudWatch metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html) in the *Amazon CloudWatch User Guide*.
   *
   * Conditional: If you published your metric with dimensions, you must specify the same dimensions in your scaling policy.
   *
   * @public
   */
  Dimensions?: MetricDimension[] | undefined;
}

/**
 * This structure defines the CloudWatch metric to return, along with the statistic and unit.
 *
 * For more information about the CloudWatch terminology below, see [Amazon CloudWatch concepts](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html) in the *Amazon CloudWatch User Guide*.
 *
 * @public
 */
export interface MetricStat {
  /**
   * The CloudWatch metric to return, including the metric name, namespace, and dimensions. To get the exact metric name, namespace, and dimensions, inspect the [Metric](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Metric.html) object that is returned by a call to [ListMetrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html).
   *
   * @public
   */
  Metric: Metric | undefined;

  /**
   * The statistic to return. It can include any CloudWatch statistic or extended statistic. For a list of valid values, see the table in [Statistics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic) in the *Amazon CloudWatch User Guide*.
   *
   * The most commonly used metrics for predictive scaling are `Average` and `Sum`.
   *
   * @public
   */
  Stat: string | undefined;

  /**
   * The unit to use for the returned data points. For a complete list of the units that CloudWatch supports, see the [MetricDatum](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html) data type in the *Amazon CloudWatch API Reference*.
   *
   * @public
   */
  Unit?: string | undefined;
}

/**
 * The metric data to return. Also defines whether this call is returning data for one metric only, or whether it is performing a math expression on the values of returned metric statistics to create a new time series. A time series is a series of data points, each of which is associated with a timestamp.
 *
 * For more information and examples, see [Advanced predictive scaling policy configurations using custom metrics](https://docs.aws.amazon.com/autoscaling/ec2/userguide/predictive-scaling-customized-metric-specification.html) in the *Amazon EC2 Auto Scaling User Guide*.
 *
 * @public
 */
export interface MetricDataQuery {
  /**
   * A short name that identifies the object's results in the response. This name must be unique among all `MetricDataQuery` objects specified for a single scaling policy. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscores. The first character must be a lowercase letter.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The math expression to perform on the returned data, if this object is performing a math expression. This expression can use the `Id` of the other metrics to refer to those metrics, and can also use the `Id` of other expressions to use the result of those expressions.
   *
   * Conditional: Within each `MetricDataQuery` object, you must specify either `Expression` or `MetricStat`, but not both.
   *
   * @public
   */
  Expression?: string | undefined;

  /**
   * Information about the metric data to return.
   *
   * Conditional: Within each `MetricDataQuery` object, you must specify either `Expression` or `MetricStat`, but not both.
   *
   * @public
   */
  MetricStat?: MetricStat | undefined;

  /**
   * A human-readable label for this metric or expression. This is especially useful if this is a math expression, so that you know what the value represents.
   *
   * @public
   */
  Label?: string | undefined;

  /**
   * Indicates whether to return the timestamps and raw data values of this metric.
   *
   * If you use any math expressions, specify `true` for this value for only the final math expression that the metric specification is based on. You must specify `false` for `ReturnData` for all the other metrics and expressions used in the metric specification.
   *
   * If you are only retrieving metrics and not performing any math expressions, do not specify anything for `ReturnData`. This sets it to its default (`true`).
   *
   * @public
   */
  ReturnData?: boolean | undefined;
}

/**
 * Describes a customized capacity metric for a predictive scaling policy.
 *
 * @public
 */
export interface PredictiveScalingCustomizedCapacityMetric {
  /**
   * One or more metric data queries to provide the data points for a capacity metric. Use multiple metric data queries only if you are performing a math expression on returned data.
   *
   * @public
   */
  MetricDataQueries: MetricDataQuery[] | undefined;
}

/**
 * Describes a custom load metric for a predictive scaling policy.
 *
 * @public
 */
export interface PredictiveScalingCustomizedLoadMetric {
  /**
   * One or more metric data queries to provide the data points for a load metric. Use multiple metric data queries only if you are performing a math expression on returned data.
   *
   * @public
   */
  MetricDataQueries: MetricDataQuery[] | undefined;
}

/**
 * Describes a custom scaling metric for a predictive scaling policy.
 *
 * @public
 */
export interface PredictiveScalingCustomizedScalingMetric {
  /**
   * One or more metric data queries to provide the data points for a scaling metric. Use multiple metric data queries only if you are performing a math expression on returned data.
   *
   * @public
   */
  MetricDataQueries: MetricDataQuery[] | undefined;
}

/**
 * Describes a load metric for a predictive scaling policy.
 *
 * When returned in the output of `DescribePolicies`, it indicates that a predictive scaling policy uses individually specified load and scaling metrics instead of a metric pair.
 *
 * @public
 */
export interface PredictiveScalingPredefinedLoadMetric {
  /**
   * The metric type.
   *
   * @public
   */
  PredefinedMetricType: PredefinedLoadMetricType | undefined;

  /**
   * A label that uniquely identifies a specific Application Load Balancer target group from which to determine the request count served by your Auto Scaling group. You can't specify a resource label unless the target group is attached to the Auto Scaling group.
   *
   * You create the resource label by appending the final portion of the load balancer ARN and the final portion of the target group ARN into a single value, separated by a forward slash (/). The format of the resource label is:
   *
   * `app/my-alb/778d41231b141a0f/targetgroup/my-alb-target-group/943f017f100becff`.
   *
   * Where:
   *
   * - app/<load-balancer-name>/<load-balancer-id> is the final portion of the load balancer ARN
   * - targetgroup/<target-group-name>/<target-group-id> is the final portion of the target group ARN.
   *
   * To find the ARN for an Application Load Balancer, use the [DescribeLoadBalancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html) API operation. To find the ARN for the target group, use the [DescribeTargetGroups](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html) API operation.
   *
   * @public
   */
  ResourceLabel?: string | undefined;
}

/**
 * Represents a metric pair for a predictive scaling policy.
 *
 * @public
 */
export interface PredictiveScalingPredefinedMetricPair {
  /**
   * Indicates which metrics to use. There are two different types of metrics for each metric type: one is a load metric and one is a scaling metric. For example, if the metric type is `ASGCPUUtilization`, the Auto Scaling group's total CPU metric is used as the load metric, and the average CPU metric is used for the scaling metric.
   *
   * @public
   */
  PredefinedMetricType: PredefinedMetricPairType | undefined;

  /**
   * A label that uniquely identifies a specific Application Load Balancer target group from which to determine the total and average request count served by your Auto Scaling group. You can't specify a resource label unless the target group is attached to the Auto Scaling group.
   *
   * You create the resource label by appending the final portion of the load balancer ARN and the final portion of the target group ARN into a single value, separated by a forward slash (/). The format of the resource label is:
   *
   * `app/my-alb/778d41231b141a0f/targetgroup/my-alb-target-group/943f017f100becff`.
   *
   * Where:
   *
   * - app/<load-balancer-name>/<load-balancer-id> is the final portion of the load balancer ARN
   * - targetgroup/<target-group-name>/<target-group-id> is the final portion of the target group ARN.
   *
   * To find the ARN for an Application Load Balancer, use the [DescribeLoadBalancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html) API operation. To find the ARN for the target group, use the [DescribeTargetGroups](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html) API operation.
   *
   * @public
   */
  ResourceLabel?: string | undefined;
}

/**
 * Describes a scaling metric for a predictive scaling policy.
 *
 * When returned in the output of `DescribePolicies`, it indicates that a predictive scaling policy uses individually specified load and scaling metrics instead of a metric pair.
 *
 * @public
 */
export interface PredictiveScalingPredefinedScalingMetric {
  /**
   * The metric type.
   *
   * @public
   */
  PredefinedMetricType: PredefinedScalingMetricType | undefined;

  /**
   * A label that uniquely identifies a specific Application Load Balancer target group from which to determine the average request count served by your Auto Scaling group. You can't specify a resource label unless the target group is attached to the Auto Scaling group.
   *
   * You create the resource label by appending the final portion of the load balancer ARN and the final portion of the target group ARN into a single value, separated by a forward slash (/). The format of the resource label is:
   *
   * `app/my-alb/778d41231b141a0f/targetgroup/my-alb-target-group/943f017f100becff`.
   *
   * Where:
   *
   * - app/<load-balancer-name>/<load-balancer-id> is the final portion of the load balancer ARN
   * - targetgroup/<target-group-name>/<target-group-id> is the final portion of the target group ARN.
   *
   * To find the ARN for an Application Load Balancer, use the [DescribeLoadBalancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html) API operation. To find the ARN for the target group, use the [DescribeTargetGroups](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html) API operation.
   *
   * @public
   */
  ResourceLabel?: string | undefined;
}

/**
 * This structure specifies the metrics and target utilization settings for a predictive scaling policy.
 *
 * You must specify either a metric pair, or a load metric and a scaling metric individually. Specifying a metric pair instead of individual metrics provides a simpler way to configure metrics for a scaling policy. You choose the metric pair, and the policy automatically knows the correct sum and average statistics to use for the load metric and the scaling metric.
 *
 * Example
 *
 * - You create a predictive scaling policy and specify `ALBRequestCount` as the value for the metric pair and `1000.0` as the target value. For this type of metric, you must provide the metric dimension for the corresponding target group, so you also provide a resource label for the Application Load Balancer target group that is attached to your Auto Scaling group.
 * - The number of requests the target group receives per minute provides the load metric, and the request count averaged between the members of the target group provides the scaling metric. In CloudWatch, this refers to the `RequestCount` and `RequestCountPerTarget` metrics, respectively.
 * - For optimal use of predictive scaling, you adhere to the best practice of using a dynamic scaling policy to automatically scale between the minimum capacity and maximum capacity in response to real-time changes in resource utilization.
 * - Amazon EC2 Auto Scaling consumes data points for the load metric over the last 14 days and creates an hourly load forecast for predictive scaling. (A minimum of 24 hours of data is required.)
 * - After creating the load forecast, Amazon EC2 Auto Scaling determines when to reduce or increase the capacity of your Auto Scaling group in each hour of the forecast period so that the average number of requests received by each instance is as close to 1000 requests per minute as possible at all times.
 *
 * For information about using custom metrics with predictive scaling, see [Advanced predictive scaling policy configurations using custom metrics](https://docs.aws.amazon.com/autoscaling/ec2/userguide/predictive-scaling-customized-metric-specification.html) in the *Amazon EC2 Auto Scaling User Guide*.
 *
 * @public
 */
export interface PredictiveScalingMetricSpecification {
  /**
   * Specifies the target utilization.
   *
   * > **Note:** Some metrics are based on a count instead of a percentage, such as the request count for an Application Load Balancer or the number of messages in an SQS queue. If the scaling policy specifies one of these metrics, specify the target utilization as the optimal average request or message count per instance during any one-minute interval.
   *
   * @public
   */
  TargetValue: number | undefined;

  /**
   * The predefined metric pair specification from which Amazon EC2 Auto Scaling determines the appropriate scaling metric and load metric to use.
   *
   * @public
   */
  PredefinedMetricPairSpecification?: PredictiveScalingPredefinedMetricPair | undefined;

  /**
   * The predefined scaling metric specification.
   *
   * @public
   */
  PredefinedScalingMetricSpecification?: PredictiveScalingPredefinedScalingMetric | undefined;

  /**
   * The predefined load metric specification.
   *
   * @public
   */
  PredefinedLoadMetricSpecification?: PredictiveScalingPredefinedLoadMetric | undefined;

  /**
   * The customized scaling metric specification.
   *
   * @public
   */
  CustomizedScalingMetricSpecification?: PredictiveScalingCustomizedScalingMetric | undefined;

  /**
   * The customized load metric specification.
   *
   * @public
   */
  CustomizedLoadMetricSpecification?: PredictiveScalingCustomizedLoadMetric | undefined;

  /**
   * The customized capacity metric specification.
   *
   * @public
   */
  CustomizedCapacityMetricSpecification?: PredictiveScalingCustomizedCapacityMetric | undefined;
}

/**
 * Represents a predictive scaling policy configuration to use with Amazon EC2 Auto Scaling.
 *
 * @public
 */
export interface PredictiveScalingConfiguration {
  /**
   * This structure includes the metrics and target utilization to use for predictive scaling.
   *
   * This is an array, but we currently only support a single metric specification. That is, you can specify a target value and a single metric pair, or a target value and one scaling metric and one load metric.
   *
   * @public
   */
  MetricSpecifications: PredictiveScalingMetricSpecification[] | undefined;

  /**
   * The predictive scaling mode. Defaults to `ForecastOnly` if not specified.
   *
   * @public
   */
  Mode?: PredictiveScalingMode | undefined;

  /**
   * The amount of time, in seconds, by which the instance launch time can be advanced. For example, the forecast says to add capacity at 10:00 AM, and you choose to pre-launch instances by 5 minutes. In that case, the instances will be launched at 9:55 AM. The intention is to give resources time to be provisioned. It can take a few minutes to launch an EC2 instance. The actual amount of time required depends on several factors, such as the size of the instance and whether there are startup scripts to complete.
   *
   * The value must be less than the forecast interval duration of 3600 seconds (60 minutes). Defaults to 300 seconds if not specified.
   *
   * @public
   */
  SchedulingBufferTime?: number | undefined;

  /**
   * Defines the behavior that should be applied if the forecast capacity approaches or exceeds the maximum capacity of the Auto Scaling group. Defaults to `HonorMaxCapacity` if not specified.
   *
   * The following are possible values:
   *
   * - `HonorMaxCapacity` - Amazon EC2 Auto Scaling can't increase the maximum capacity of the group when the forecast capacity is close to or exceeds the maximum capacity.
   * - `IncreaseMaxCapacity` - Amazon EC2 Auto Scaling can increase the maximum capacity of the group when the forecast capacity is close to or exceeds the maximum capacity. The upper limit is determined by the forecasted capacity and the value for `MaxCapacityBuffer`.
   *
   * > **Important:** Use caution when allowing the maximum capacity to be automatically increased. This can lead to more instances being launched than intended if the increased maximum capacity is not monitored and managed. The increased maximum capacity then becomes the new normal maximum capacity for the Auto Scaling group until you manually update it. The maximum capacity does not automatically decrease back to the original maximum.
   *
   * @public
   */
  MaxCapacityBreachBehavior?: PredictiveScalingMaxCapacityBreachBehavior | undefined;

  /**
   * The size of the capacity buffer to use when the forecast capacity is close to or exceeds the maximum capacity. The value is specified as a percentage relative to the forecast capacity. For example, if the buffer is 10, this means a 10 percent buffer, such that if the forecast capacity is 50, and the maximum capacity is 40, then the effective maximum capacity is 55.
   *
   * If set to 0, Amazon EC2 Auto Scaling may scale capacity higher than the maximum capacity to equal but not exceed forecast capacity.
   *
   * Required if the `MaxCapacityBreachBehavior` property is set to `IncreaseMaxCapacity`, and cannot be used otherwise.
   *
   * @public
   */
  MaxCapacityBuffer?: number | undefined;
}

/**
 * Describes information used to create a step adjustment for a step scaling policy.
 *
 * For the following examples, suppose that you have an alarm with a breach threshold of 50:
 *
 * - To trigger the adjustment when the metric is greater than or equal to 50 and less than 60, specify a lower bound of 0 and an upper bound of 10.
 * - To trigger the adjustment when the metric is greater than 40 and less than or equal to 50, specify a lower bound of -10 and an upper bound of 0.
 *
 * There are a few rules for the step adjustments for your step policy:
 *
 * - The ranges of your step adjustments can't overlap or have a gap.
 * - At most, one step adjustment can have a null lower bound. If one step adjustment has a negative lower bound, then there must be a step adjustment with a null lower bound.
 * - At most, one step adjustment can have a null upper bound. If one step adjustment has a positive upper bound, then there must be a step adjustment with a null upper bound.
 * - The upper and lower bound can't be null in the same step adjustment.
 *
 * For more information, see [Step adjustments](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html#as-scaling-steps) in the *Amazon EC2 Auto Scaling User Guide*.
 *
 * @public
 */
export interface StepAdjustment {
  /**
   * The lower bound for the difference between the alarm threshold and the CloudWatch metric. If the metric value is above the breach threshold, the lower bound is inclusive (the metric must be greater than or equal to the threshold plus the lower bound). Otherwise, it is exclusive (the metric must be greater than the threshold plus the lower bound). A null value indicates negative infinity.
   *
   * @public
   */
  MetricIntervalLowerBound?: number | undefined;

  /**
   * The upper bound for the difference between the alarm threshold and the CloudWatch metric. If the metric value is above the breach threshold, the upper bound is exclusive (the metric must be less than the threshold plus the upper bound). Otherwise, it is inclusive (the metric must be less than or equal to the threshold plus the upper bound). A null value indicates positive infinity.
   *
   * The upper bound must be greater than the lower bound.
   *
   * @public
   */
  MetricIntervalUpperBound?: number | undefined;

  /**
   * The amount by which to scale, based on the specified adjustment type. A positive value adds to the current capacity while a negative number removes from the current capacity. For exact capacity, you must specify a non-negative value.
   *
   * @public
   */
  ScalingAdjustment: number | undefined;
}

/**
 * This structure defines the CloudWatch metric to return, along with the statistic and unit.
 *
 * For more information about the CloudWatch terminology below, see [Amazon CloudWatch concepts](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html) in the *Amazon CloudWatch User Guide*.
 *
 * @public
 */
export interface TargetTrackingMetricStat {
  /**
   * The metric to use.
   *
   * @public
   */
  Metric: Metric | undefined;

  /**
   * The statistic to return. It can include any CloudWatch statistic or extended statistic. For a list of valid values, see the table in [Statistics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Statistic) in the *Amazon CloudWatch User Guide*.
   *
   * The most commonly used metric for scaling is `Average`.
   *
   * @public
   */
  Stat: string | undefined;

  /**
   * The unit to use for the returned data points. For a complete list of the units that CloudWatch supports, see the [MetricDatum](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html) data type in the *Amazon CloudWatch API Reference*.
   *
   * @public
   */
  Unit?: string | undefined;

  /**
   * The period of the metric in seconds. The default value is 60. Accepted values are 10, 30, and 60. For high resolution metric, set the value to less than 60. For more information, see [Create a target tracking policy using high-resolution metrics for faster response](https://docs.aws.amazon.com/autoscaling/ec2/userguide/policy-creating-high-resolution-metrics.html).
   *
   * @public
   */
  Period?: number | undefined;
}

/**
 * The metric data to return. Also defines whether this call is returning data for one metric only, or whether it is performing a math expression on the values of returned metric statistics to create a new time series. A time series is a series of data points, each of which is associated with a timestamp.
 *
 * @public
 */
export interface TargetTrackingMetricDataQuery {
  /**
   * A short name that identifies the object's results in the response. This name must be unique among all `TargetTrackingMetricDataQuery` objects specified for a single scaling policy. If you are performing math expressions on this set of data, this name represents that data and can serve as a variable in the mathematical expression. The valid characters are letters, numbers, and underscores. The first character must be a lowercase letter.
   *
   * @public
   */
  Id: string | undefined;

  /**
   * The math expression to perform on the returned data, if this object is performing a math expression. This expression can use the `Id` of the other metrics to refer to those metrics, and can also use the `Id` of other expressions to use the result of those expressions.
   *
   * Conditional: Within each `TargetTrackingMetricDataQuery` object, you must specify either `Expression` or `MetricStat`, but not both.
   *
   * @public
   */
  Expression?: string | undefined;

  /**
   * Information about the metric data to return.
   *
   * Conditional: Within each `TargetTrackingMetricDataQuery` object, you must specify either `Expression` or `MetricStat`, but not both.
   *
   * @public
   */
  MetricStat?: TargetTrackingMetricStat | undefined;

  /**
   * A human-readable label for this metric or expression. This is especially useful if this is a math expression, so that you know what the value represents.
   *
   * @public
   */
  Label?: string | undefined;

  /**
   * The period of the metric in seconds. The default value is 60. Accepted values are 10, 30, and 60. For high resolution metric, set the value to less than 60. For more information, see [Create a target tracking policy using high-resolution metrics for faster response](https://docs.aws.amazon.com/autoscaling/ec2/userguide/policy-creating-high-resolution-metrics.html).
   *
   * @public
   */
  Period?: number | undefined;

  /**
   * Indicates whether to return the timestamps and raw data values of this metric.
   *
   * If you use any math expressions, specify `true` for this value for only the final math expression that the metric specification is based on. You must specify `false` for `ReturnData` for all the other metrics and expressions used in the metric specification.
   *
   * If you are only retrieving metrics and not performing any math expressions, do not specify anything for `ReturnData`. This sets it to its default (`true`).
   *
   * @public
   */
  ReturnData?: boolean | undefined;
}

/**
 * Represents a CloudWatch metric of your choosing for a target tracking scaling policy to use with Amazon EC2 Auto Scaling.
 *
 * To create your customized metric specification:
 *
 * - Add values for each required property from CloudWatch. You can use an existing metric, or a new metric that you create. To use your own metric, you must first publish the metric to CloudWatch. For more information, see [Publish custom metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html) in the *Amazon CloudWatch User Guide*.
 * - Choose a metric that changes proportionally with capacity. The value of the metric should increase or decrease in inverse proportion to the number of capacity units. That is, the value of the metric should decrease when capacity increases.
 *
 * For more information about the CloudWatch terminology below, see [Amazon CloudWatch concepts](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html).
 *
 * > **Note:** Each individual service provides information about the metrics, namespace, and dimensions they use. For more information, see [Amazon Web Services services that publish CloudWatch metrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/aws-services-cloudwatch-metrics.html) in the *Amazon CloudWatch User Guide*.
 *
 * @public
 */
export interface CustomizedMetricSpecification {
  /**
   * The name of the metric. To get the exact metric name, namespace, and dimensions, inspect the [Metric](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_Metric.html) object that is returned by a call to [ListMetrics](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_ListMetrics.html).
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * The namespace of the metric.
   *
   * @public
   */
  Namespace?: string | undefined;

  /**
   * The dimensions of the metric.
   *
   * Conditional: If you published your metric with dimensions, you must specify the same dimensions in your scaling policy.
   *
   * @public
   */
  Dimensions?: MetricDimension[] | undefined;

  /**
   * The statistic of the metric.
   *
   * @public
   */
  Statistic?: MetricStatistic | undefined;

  /**
   * The unit of the metric. For a complete list of the units that CloudWatch supports, see the [MetricDatum](https://docs.aws.amazon.com/AmazonCloudWatch/latest/APIReference/API_MetricDatum.html) data type in the *Amazon CloudWatch API Reference*.
   *
   * @public
   */
  Unit?: string | undefined;

  /**
   * The period of the metric in seconds. The default value is 60. Accepted values are 10, 30, and 60. For high resolution metric, set the value to less than 60. For more information, see [Create a target tracking policy using high-resolution metrics for faster response](https://docs.aws.amazon.com/autoscaling/ec2/userguide/policy-creating-high-resolution-metrics.html).
   *
   * @public
   */
  Period?: number | undefined;

  /**
   * The metrics to include in the target tracking scaling policy, as a metric data query. This can include both raw metric and metric math expressions.
   *
   * @public
   */
  Metrics?: TargetTrackingMetricDataQuery[] | undefined;
}

/**
 * Represents a predefined metric for a target tracking scaling policy to use with Amazon EC2 Auto Scaling.
 *
 * @public
 */
export interface PredefinedMetricSpecification {
  /**
   * The metric type. The following predefined metrics are available:
   *
   * - `ASGAverageCPUUtilization` - Average CPU utilization of the Auto Scaling group.
   * - `ASGAverageNetworkIn` - Average number of bytes received on all network interfaces by the Auto Scaling group.
   * - `ASGAverageNetworkOut` - Average number of bytes sent out on all network interfaces by the Auto Scaling group.
   * - `ALBRequestCountPerTarget` - Average Application Load Balancer request count per target for your Auto Scaling group.
   *
   * @public
   */
  PredefinedMetricType: MetricType | undefined;

  /**
   * A label that uniquely identifies a specific Application Load Balancer target group from which to determine the average request count served by your Auto Scaling group. You can't specify a resource label unless the target group is attached to the Auto Scaling group.
   *
   * You create the resource label by appending the final portion of the load balancer ARN and the final portion of the target group ARN into a single value, separated by a forward slash (/). The format of the resource label is:
   *
   * `app/my-alb/778d41231b141a0f/targetgroup/my-alb-target-group/943f017f100becff`.
   *
   * Where:
   *
   * - app/<load-balancer-name>/<load-balancer-id> is the final portion of the load balancer ARN
   * - targetgroup/<target-group-name>/<target-group-id> is the final portion of the target group ARN.
   *
   * To find the ARN for an Application Load Balancer, use the [DescribeLoadBalancers](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeLoadBalancers.html) API operation. To find the ARN for the target group, use the [DescribeTargetGroups](https://docs.aws.amazon.com/elasticloadbalancing/latest/APIReference/API_DescribeTargetGroups.html) API operation.
   *
   * @public
   */
  ResourceLabel?: string | undefined;
}

/**
 * Represents a target tracking scaling policy configuration to use with Amazon EC2 Auto Scaling.
 *
 * @public
 */
export interface TargetTrackingConfiguration {
  /**
   * A predefined metric. You must specify either a predefined metric or a customized metric.
   *
   * @public
   */
  PredefinedMetricSpecification?: PredefinedMetricSpecification | undefined;

  /**
   * A customized metric. You must specify either a predefined metric or a customized metric.
   *
   * @public
   */
  CustomizedMetricSpecification?: CustomizedMetricSpecification | undefined;

  /**
   * The target value for the metric.
   *
   * > **Note:** Some metrics are based on a count instead of a percentage, such as the request count for an Application Load Balancer or the number of messages in an SQS queue. If the scaling policy specifies one of these metrics, specify the target utilization as the optimal average request or message count per instance during any one-minute interval.
   *
   * @public
   */
  TargetValue: number | undefined;

  /**
   * Indicates whether scaling in by the target tracking scaling policy is disabled. If scaling in is disabled, the target tracking scaling policy doesn't remove instances from the Auto Scaling group. Otherwise, the target tracking scaling policy can remove instances from the Auto Scaling group. The default is `false`.
   *
   * @public
   */
  DisableScaleIn?: boolean | undefined;
}

/**
 * Describes a scaling policy.
 *
 * @public
 */
export interface ScalingPolicy {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName?: string | undefined;

  /**
   * The name of the scaling policy.
   *
   * @public
   */
  PolicyName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the policy.
   *
   * @public
   */
  PolicyARN?: string | undefined;

  /**
   * One of the following policy types:
   *
   * - `TargetTrackingScaling`
   * - `StepScaling`
   * - `SimpleScaling` (default)
   * - `PredictiveScaling`
   *
   * For more information, see [Target tracking scaling policies](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-target-tracking.html) and [Step and simple scaling policies](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  PolicyType?: string | undefined;

  /**
   * Specifies how the scaling adjustment is interpreted (for example, an absolute number or a percentage). The valid values are `ChangeInCapacity`, `ExactCapacity`, and `PercentChangeInCapacity`.
   *
   * @public
   */
  AdjustmentType?: string | undefined;

  /**
   * Available for backward compatibility. Use `MinAdjustmentMagnitude` instead.
   *
   * @deprecated deprecated.
   * @public
   */
  MinAdjustmentStep?: number | undefined;

  /**
   * The minimum value to scale by when the adjustment type is `PercentChangeInCapacity`.
   *
   * @public
   */
  MinAdjustmentMagnitude?: number | undefined;

  /**
   * The amount by which to scale, based on the specified adjustment type. A positive value adds to the current capacity while a negative number removes from the current capacity.
   *
   * @public
   */
  ScalingAdjustment?: number | undefined;

  /**
   * The duration of the policy's cooldown period, in seconds.
   *
   * @public
   */
  Cooldown?: number | undefined;

  /**
   * A set of adjustments that enable you to scale based on the size of the alarm breach.
   *
   * @public
   */
  StepAdjustments?: StepAdjustment[] | undefined;

  /**
   * The aggregation type for the CloudWatch metrics. The valid values are `Minimum`, `Maximum`, and `Average`.
   *
   * @public
   */
  MetricAggregationType?: string | undefined;

  /**
   * The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics.
   *
   * @public
   */
  EstimatedInstanceWarmup?: number | undefined;

  /**
   * The CloudWatch alarms related to the policy.
   *
   * @public
   */
  Alarms?: Alarm[] | undefined;

  /**
   * A target tracking scaling policy.
   *
   * @public
   */
  TargetTrackingConfiguration?: TargetTrackingConfiguration | undefined;

  /**
   * Indicates whether the policy is enabled (`true`) or disabled (`false`).
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * A predictive scaling policy.
   *
   * @public
   */
  PredictiveScalingConfiguration?: PredictiveScalingConfiguration | undefined;
}

/**
 * @public
 */
export interface PoliciesType {
  /**
   * The scaling policies.
   *
   * @public
   */
  ScalingPolicies?: ScalingPolicy[] | undefined;

  /**
   * A string that indicates that the response contains more items than can be returned in a single response. To receive additional items, specify this string for the `NextToken` value when requesting the next set of items. This value is null when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeScalingActivitiesType {
  /**
   * The activity IDs of the desired scaling activities. If unknown activity IDs are requested, they are ignored with no error. Only activities started within the last six weeks can be returned regardless of the activity IDs specified. If other filters are specified with the request, only results matching all filter criteria can be returned.
   *
   * Array Members: Maximum number of 50 IDs.
   *
   * @public
   */
  ActivityIds?: string[] | undefined;

  /**
   * The name of the Auto Scaling group.
   *
   * > **Important:** Omitting this property performs an account-wide operation, which can result in slower or timed-out requests.
   *
   * @public
   */
  AutoScalingGroupName?: string | undefined;

  /**
   * Indicates whether to include scaling activity from deleted Auto Scaling groups.
   *
   * @public
   */
  IncludeDeletedGroups?: boolean | undefined;

  /**
   * The maximum number of items to return with this call. The default value is `100` and the maximum value is `100`.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * One or more filters to limit the results based on specific criteria. The following filters are supported:
   *
   * - `StartTimeLowerBound` - The earliest scaling activities to return based on the activity start time. Scaling activities with a start time earlier than this value are not included in the results. Only activities started within the last six weeks can be returned regardless of the value specified.
   * - `StartTimeUpperBound` - The latest scaling activities to return based on the activity start time. Scaling activities with a start time later than this value are not included in the results. Only activities started within the last six weeks can be returned regardless of the value specified.
   * - `Status` - The `StatusCode` value of the scaling activity. This filter can only be used in combination with the `AutoScalingGroupName` parameter. For valid `StatusCode` values, see [Activity](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_Activity.html) in the *Amazon EC2 Auto Scaling API Reference*.
   *
   * `StartTimeLowerBound` and `StartTimeUpperBound` accept ISO 8601 formatted timestamps. Timestamps without a timezone offset are assumed to be UTC.
   *
   * - `2000-01-18T08:15:00Z`
   * - `2000-01-18T16:15:00+08:00`
   *
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * Describes a process type.
 *
 * For more information, see [Types of processes](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html#process-types) in the *Amazon EC2 Auto Scaling User Guide*.
 *
 * @public
 */
export interface ProcessType {
  /**
   * One of the following processes:
   *
   * - `Launch`
   * - `Terminate`
   * - `AddToLoadBalancer`
   * - `AlarmNotification`
   * - `AZRebalance`
   * - `HealthCheck`
   * - `InstanceRefresh`
   * - `ReplaceUnhealthy`
   * - `ScheduledActions`
   *
   * @public
   */
  ProcessName: string | undefined;
}

/**
 * @public
 */
export interface ProcessesType {
  /**
   * The names of the process types.
   *
   * @public
   */
  Processes?: ProcessType[] | undefined;
}

/**
 * @public
 */
export interface DescribeScheduledActionsType {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName?: string | undefined;

  /**
   * The names of one or more scheduled actions. If you omit this property, all scheduled actions are described. If you specify an unknown scheduled action, it is ignored with no error.
   *
   * Array Members: Maximum number of 50 actions.
   *
   * @public
   */
  ScheduledActionNames?: string[] | undefined;

  /**
   * The earliest scheduled start time to return. If scheduled action names are provided, this property is ignored.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The latest scheduled start time to return. If scheduled action names are provided, this property is ignored.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return with this call. The default value is `50` and the maximum value is `100`.
   *
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * Describes a scheduled scaling action.
 *
 * @public
 */
export interface ScheduledUpdateGroupAction {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName?: string | undefined;

  /**
   * The name of the scheduled action.
   *
   * @public
   */
  ScheduledActionName?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the scheduled action.
   *
   * @public
   */
  ScheduledActionARN?: string | undefined;

  /**
   * This property is no longer used.
   *
   * @public
   */
  Time?: Date | undefined;

  /**
   * The date and time in UTC for this action to start. For example, `"2019-06-01T00:00:00Z"`.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The date and time in UTC for the recurring schedule to end. For example, `"2019-06-01T00:00:00Z"`.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The recurring schedule for the action, in Unix cron syntax format.
   *
   * When `StartTime` and `EndTime` are specified with `Recurrence`, they form the boundaries of when the recurring action starts and stops.
   *
   * @public
   */
  Recurrence?: string | undefined;

  /**
   * The minimum size of the Auto Scaling group.
   *
   * @public
   */
  MinSize?: number | undefined;

  /**
   * The maximum size of the Auto Scaling group.
   *
   * @public
   */
  MaxSize?: number | undefined;

  /**
   * The desired capacity is the initial capacity of the Auto Scaling group after the scheduled action runs and the capacity it attempts to maintain.
   *
   * @public
   */
  DesiredCapacity?: number | undefined;

  /**
   * The time zone for the cron expression.
   *
   * @public
   */
  TimeZone?: string | undefined;
}

/**
 * @public
 */
export interface ScheduledActionsType {
  /**
   * The scheduled actions.
   *
   * @public
   */
  ScheduledUpdateGroupActions?: ScheduledUpdateGroupAction[] | undefined;

  /**
   * A string that indicates that the response contains more items than can be returned in a single response. To receive additional items, specify this string for the `NextToken` value when requesting the next set of items. This value is null when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTagsType {
  /**
   * One or more filters to scope the tags to return. The maximum number of filters per filter type (for example, `auto-scaling-group`) is 1000.
   *
   * @public
   */
  Filters?: Filter[] | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return with this call. The default value is `50` and the maximum value is `100`.
   *
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * @public
 */
export interface TagsType {
  /**
   * One or more tags.
   *
   * @public
   */
  Tags?: TagDescription[] | undefined;

  /**
   * A string that indicates that the response contains more items than can be returned in a single response. To receive additional items, specify this string for the `NextToken` value when requesting the next set of items. This value is null when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTerminationPolicyTypesAnswer {
  /**
   * The termination policies supported by Amazon EC2 Auto Scaling: `OldestInstance`, `OldestLaunchConfiguration`, `NewestInstance`, `ClosestToNextInstanceHour`, `Default`, `OldestLaunchTemplate`, and `AllocationStrategy`.
   *
   * @public
   */
  TerminationPolicyTypes?: string[] | undefined;
}

/**
 * @public
 */
export interface DescribeTrafficSourcesRequest {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * The traffic source type that you want to describe.
   *
   * The following lists the valid values:
   *
   * - `elb` if the traffic source is a Classic Load Balancer.
   * - `elbv2` if the traffic source is a Application Load Balancer, Gateway Load Balancer, or Network Load Balancer.
   * - `vpc-lattice` if the traffic source is VPC Lattice.
   *
   * @public
   */
  TrafficSourceType?: string | undefined;

  /**
   * The token for the next set of items to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of items to return with this call. The maximum value is `50`.
   *
   * @public
   */
  MaxRecords?: number | undefined;
}

/**
 * Describes the state of a traffic source.
 *
 * @public
 */
export interface TrafficSourceState {
  /**
   * This is replaced by `Identifier`.
   *
   * @deprecated TrafficSource has been replaced by Identifier.
   * @public
   */
  TrafficSource?: string | undefined;

  /**
   * Describes the current state of a traffic source.
   *
   * The state values are as follows:
   *
   * - `Adding` - The Auto Scaling instances are being registered with the load balancer or target group.
   * - `Added` - All Auto Scaling instances are registered with the load balancer or target group.
   * - `InService` - For an Elastic Load Balancing load balancer or target group, at least one Auto Scaling instance passed an `ELB` health check. For VPC Lattice, at least one Auto Scaling instance passed an `VPC_LATTICE` health check.
   * - `Removing` - The Auto Scaling instances are being deregistered from the load balancer or target group. If connection draining (deregistration delay) is enabled, Elastic Load Balancing or VPC Lattice waits for in-flight requests to complete before deregistering the instances.
   * - `Removed` - All Auto Scaling instances are deregistered from the load balancer or target group.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * The unique identifier of the traffic source.
   *
   * @public
   */
  Identifier?: string | undefined;

  /**
   * Provides additional context for the value of `Identifier`.
   *
   * The following lists the valid values:
   *
   * - `elb` if `Identifier` is the name of a Classic Load Balancer.
   * - `elbv2` if `Identifier` is the ARN of an Application Load Balancer, Gateway Load Balancer, or Network Load Balancer target group.
   * - `vpc-lattice` if `Identifier` is the ARN of a VPC Lattice target group.
   *
   * Required if the identifier is the name of a Classic Load Balancer.
   *
   * @public
   */
  Type?: string | undefined;
}

/**
 * @public
 */
export interface DescribeTrafficSourcesResponse {
  /**
   * Information about the traffic sources.
   *
   * @public
   */
  TrafficSources?: TrafficSourceState[] | undefined;

  /**
   * This string indicates that the response contains more items than can be returned in a single response. To receive additional items, specify this string for the `NextToken` value when requesting the next set of items. This value is null when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeWarmPoolAnswer {
  /**
   * The warm pool configuration details.
   *
   * @public
   */
  WarmPoolConfiguration?: WarmPoolConfiguration | undefined;

  /**
   * The instances that are currently in the warm pool.
   *
   * @public
   */
  Instances?: Instance[] | undefined;

  /**
   * This string indicates that the response contains more items than can be returned in a single response. To receive additional items, specify this string for the `NextToken` value when requesting the next set of items. This value is null when there are no more items to return.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeWarmPoolType {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * The maximum number of instances to return with this call. The maximum value is `50`.
   *
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * The token for the next set of instances to return. (You received this token from a previous call.)
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DetachInstancesAnswer {
  /**
   * The activities related to detaching the instances from the Auto Scaling group.
   *
   * @public
   */
  Activities?: Activity[] | undefined;
}

/**
 * @public
 */
export interface DetachInstancesQuery {
  /**
   * The IDs of the instances. You can specify up to 20 instances.
   *
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * Indicates whether the Auto Scaling group decrements the desired capacity value by the number of instances detached.
   *
   * @public
   */
  ShouldDecrementDesiredCapacity: boolean | undefined;
}

/**
 * @public
 */
export interface DetachLoadBalancersResultType {}

/**
 * @public
 */
export interface DetachLoadBalancersType {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * The names of the load balancers. You can specify up to 10 load balancers.
   *
   * @public
   */
  LoadBalancerNames: string[] | undefined;
}

/**
 * @public
 */
export interface DetachLoadBalancerTargetGroupsResultType {}

/**
 * @public
 */
export interface DetachLoadBalancerTargetGroupsType {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * The Amazon Resource Names (ARN) of the target groups. You can specify up to 10 target groups.
   *
   * @public
   */
  TargetGroupARNs: string[] | undefined;
}

/**
 * @public
 */
export interface DetachTrafficSourcesResultType {}

/**
 * @public
 */
export interface DetachTrafficSourcesType {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * The unique identifiers of one or more traffic sources. You can specify up to 10 traffic sources.
   *
   * @public
   */
  TrafficSources: TrafficSourceIdentifier[] | undefined;
}

/**
 * @public
 */
export interface DisableMetricsCollectionQuery {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * Identifies the metrics to disable.
   *
   * You can specify one or more of the following metrics:
   *
   * - `GroupMinSize`
   * - `GroupMaxSize`
   * - `GroupDesiredCapacity`
   * - `GroupInServiceInstances`
   * - `GroupPendingInstances`
   * - `GroupStandbyInstances`
   * - `GroupTerminatingInstances`
   * - `GroupTotalInstances`
   * - `GroupInServiceCapacity`
   * - `GroupPendingCapacity`
   * - `GroupStandbyCapacity`
   * - `GroupTerminatingCapacity`
   * - `GroupTotalCapacity`
   * - `WarmPoolDesiredCapacity`
   * - `WarmPoolWarmedCapacity`
   * - `WarmPoolPendingCapacity`
   * - `WarmPoolTerminatingCapacity`
   * - `WarmPoolTotalCapacity`
   * - `GroupAndWarmPoolDesiredCapacity`
   * - `GroupAndWarmPoolTotalCapacity`
   *
   * If you omit this property, all metrics are disabled.
   *
   * For more information, see [Amazon CloudWatch metrics for Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-metrics.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  Metrics?: string[] | undefined;
}

/**
 * @public
 */
export interface EnableMetricsCollectionQuery {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * Identifies the metrics to enable.
   *
   * You can specify one or more of the following metrics:
   *
   * - `GroupMinSize`
   * - `GroupMaxSize`
   * - `GroupDesiredCapacity`
   * - `GroupInServiceInstances`
   * - `GroupPendingInstances`
   * - `GroupStandbyInstances`
   * - `GroupTerminatingInstances`
   * - `GroupTotalInstances`
   * - `GroupInServiceCapacity`
   * - `GroupPendingCapacity`
   * - `GroupStandbyCapacity`
   * - `GroupTerminatingCapacity`
   * - `GroupTotalCapacity`
   * - `WarmPoolDesiredCapacity`
   * - `WarmPoolWarmedCapacity`
   * - `WarmPoolPendingCapacity`
   * - `WarmPoolTerminatingCapacity`
   * - `WarmPoolTotalCapacity`
   * - `GroupAndWarmPoolDesiredCapacity`
   * - `GroupAndWarmPoolTotalCapacity`
   *
   * If you specify `Granularity` and don't specify any metrics, all metrics are enabled.
   *
   * For more information, see [Amazon CloudWatch metrics for Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-metrics.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  Metrics?: string[] | undefined;

  /**
   * The frequency at which Amazon EC2 Auto Scaling sends aggregated data to CloudWatch. The only valid value is `1Minute`.
   *
   * @public
   */
  Granularity: string | undefined;
}

/**
 * @public
 */
export interface EnterStandbyAnswer {
  /**
   * The activities related to moving instances into `Standby` mode.
   *
   * @public
   */
  Activities?: Activity[] | undefined;
}

/**
 * @public
 */
export interface EnterStandbyQuery {
  /**
   * The IDs of the instances. You can specify up to 20 instances.
   *
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * Indicates whether to decrement the desired capacity of the Auto Scaling group by the number of instances moved to `Standby` mode.
   *
   * @public
   */
  ShouldDecrementDesiredCapacity: boolean | undefined;
}

/**
 * @public
 */
export interface ExecutePolicyType {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName?: string | undefined;

  /**
   * The name or ARN of the policy.
   *
   * @public
   */
  PolicyName: string | undefined;

  /**
   * Indicates whether Amazon EC2 Auto Scaling waits for the cooldown period to complete before executing the policy.
   *
   * Valid only if the policy type is `SimpleScaling`. For more information, see [Scaling cooldowns for Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-scaling-cooldowns.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  HonorCooldown?: boolean | undefined;

  /**
   * The metric value to compare to `BreachThreshold`. This enables you to execute a policy of type `StepScaling` and determine which step adjustment to use. For example, if the breach threshold is 50 and you want to use a step adjustment with a lower bound of 0 and an upper bound of 10, you can set the metric value to 59.
   *
   * If you specify a metric value that doesn't correspond to a step adjustment for the policy, the call returns an error.
   *
   * Required if the policy type is `StepScaling` and not supported otherwise.
   *
   * @public
   */
  MetricValue?: number | undefined;

  /**
   * The breach threshold for the alarm.
   *
   * Required if the policy type is `StepScaling` and not supported otherwise.
   *
   * @public
   */
  BreachThreshold?: number | undefined;
}

/**
 * @public
 */
export interface ExitStandbyAnswer {
  /**
   * The activities related to moving instances out of `Standby` mode.
   *
   * @public
   */
  Activities?: Activity[] | undefined;
}

/**
 * @public
 */
export interface ExitStandbyQuery {
  /**
   * The IDs of the instances. You can specify up to 20 instances.
   *
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;
}

/**
 * A `GetPredictiveScalingForecast` call returns the capacity forecast for a predictive scaling policy. This structure includes the data points for that capacity forecast, along with the timestamps of those data points.
 *
 * @public
 */
export interface CapacityForecast {
  /**
   * The timestamps for the data points, in UTC format.
   *
   * @public
   */
  Timestamps: Date[] | undefined;

  /**
   * The values of the data points.
   *
   * @public
   */
  Values: number[] | undefined;
}

/**
 * A `GetPredictiveScalingForecast` call returns the load forecast for a predictive scaling policy. This structure includes the data points for that load forecast, along with the timestamps of those data points and the metric specification.
 *
 * @public
 */
export interface LoadForecast {
  /**
   * The timestamps for the data points, in UTC format.
   *
   * @public
   */
  Timestamps: Date[] | undefined;

  /**
   * The values of the data points.
   *
   * @public
   */
  Values: number[] | undefined;

  /**
   * The metric specification for the load forecast.
   *
   * @public
   */
  MetricSpecification: PredictiveScalingMetricSpecification | undefined;
}

/**
 * @public
 */
export interface GetPredictiveScalingForecastAnswer {
  /**
   * The load forecast.
   *
   * @public
   */
  LoadForecast: LoadForecast[] | undefined;

  /**
   * The capacity forecast.
   *
   * @public
   */
  CapacityForecast: CapacityForecast | undefined;

  /**
   * The time the forecast was made.
   *
   * @public
   */
  UpdateTime: Date | undefined;
}

/**
 * @public
 */
export interface GetPredictiveScalingForecastType {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * The name of the policy.
   *
   * @public
   */
  PolicyName: string | undefined;

  /**
   * The inclusive start time of the time range for the forecast data to get. At most, the date and time can be one year before the current date and time.
   *
   * @public
   */
  StartTime: Date | undefined;

  /**
   * The exclusive end time of the time range for the forecast data to get. The maximum time duration between the start and end time is 30 days.
   *
   * Although this parameter can accept a date and time that is more than two days in the future, the availability of forecast data has limits. Amazon EC2 Auto Scaling only issues forecasts for periods of two days in advance.
   *
   * @public
   */
  EndTime: Date | undefined;
}

/**
 * @public
 */
export interface LaunchInstancesRequest {
  /**
   * The name of the Auto Scaling group to launch instances into.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * The number of instances to launch. Although this value can exceed 100 for instance weights, the actual instance count is limited to 100 instances per launch.
   *
   * @public
   */
  RequestedCapacity: number | undefined;

  /**
   * A unique, case-sensitive identifier to ensure idempotency of the request.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The Availability Zones for the instance launch. Must match or be included in the Auto Scaling group's Availability Zone configuration. Either `AvailabilityZones` or `SubnetIds` must be specified for groups with multiple Availability Zone configurations.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * A list of Availability Zone IDs where instances should be launched. Must match or be included in the group's AZ configuration. You cannot specify both AvailabilityZones and AvailabilityZoneIds. Required for multi-AZ groups, optional for single-AZ groups.
   *
   * @public
   */
  AvailabilityZoneIds?: string[] | undefined;

  /**
   * The subnet IDs for the instance launch. Either `AvailabilityZones` or `SubnetIds` must be specified. If both are specified, the subnets must reside in the specified Availability Zones.
   *
   * @public
   */
  SubnetIds?: string[] | undefined;

  /**
   * Specifies whether to retry asynchronously if the synchronous launch fails. Valid values are NONE (default, no async retry) and RETRY_WITH_GROUP_CONFIGURATION (increase desired capacity and retry with group configuration).
   *
   * @public
   */
  RetryStrategy?: RetryStrategy | undefined;
}

/**
 * Contains details about errors encountered during instance launch attempts.
 *
 * @public
 */
export interface LaunchInstancesError {
  /**
   * The instance type that failed to launch.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The market type (On-Demand or Spot) that encountered the launch error.
   *
   * @public
   */
  MarketType?: string | undefined;

  /**
   * The subnet ID where the instance launch was attempted.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The Availability Zone where the instance launch was attempted.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The Availability Zone ID where the launch error occurred.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * The error code representing the type of error encountered (e.g., InsufficientInstanceCapacity).
   *
   * @public
   */
  ErrorCode?: string | undefined;

  /**
   * A descriptive message providing details about the error encountered during the launch attempt.
   *
   * @public
   */
  ErrorMessage?: string | undefined;
}

/**
 * Contains details about a collection of instances launched in the Auto Scaling group.
 *
 * @public
 */
export interface InstanceCollection {
  /**
   * The instance type of the launched instances.
   *
   * @public
   */
  InstanceType?: string | undefined;

  /**
   * The market type for the instances (On-Demand or Spot).
   *
   * @public
   */
  MarketType?: string | undefined;

  /**
   * The ID of the subnet where the instances were launched.
   *
   * @public
   */
  SubnetId?: string | undefined;

  /**
   * The Availability Zone where the instances were launched.
   *
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * The Availability Zone ID where the instances in this collection were launched.
   *
   * @public
   */
  AvailabilityZoneId?: string | undefined;

  /**
   * A list of instance IDs for the successfully launched instances.
   *
   * @public
   */
  InstanceIds?: string[] | undefined;
}

/**
 * @public
 */
export interface LaunchInstancesResult {
  /**
   * The name of the Auto Scaling group where the instances were launched.
   *
   * @public
   */
  AutoScalingGroupName?: string | undefined;

  /**
   * The idempotency token used for the request, either customer-specified or auto-generated.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * A list of successfully launched instances including details such as instance type, Availability Zone, subnet, lifecycle state, and instance IDs.
   *
   * @public
   */
  Instances?: InstanceCollection[] | undefined;

  /**
   * A list of errors encountered during the launch attempt including details about failed instance launches with their corresponding error codes and messages.
   *
   * @public
   */
  Errors?: LaunchInstancesError[] | undefined;
}

/**
 * @public
 */
export interface PutAccountSettingAnswer {}

/**
 * @public
 */
export interface PutAccountSettingType {
  /**
   * The name of the account setting to modify. Each account setting has a unique name that identifies the specific feature it controls.
   *
   * @public
   */
  Name: string | undefined;

  /**
   * The value for the account setting.
   *
   * @public
   */
  Value: string | undefined;
}

/**
 * @public
 */
export interface PutLifecycleHookAnswer {}

/**
 * @public
 */
export interface PutLifecycleHookType {
  /**
   * The name of the lifecycle hook.
   *
   * @public
   */
  LifecycleHookName: string | undefined;

  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * The lifecycle transition. For Auto Scaling groups, there are two major lifecycle transitions.
   *
   * - To create a lifecycle hook for scale-out events, specify `autoscaling:EC2_INSTANCE_LAUNCHING`.
   * - To create a lifecycle hook for scale-in events, specify `autoscaling:EC2_INSTANCE_TERMINATING`.
   *
   * Required for new lifecycle hooks, but optional when updating existing hooks.
   *
   * @public
   */
  LifecycleTransition?: string | undefined;

  /**
   * The ARN of the IAM role that allows the Auto Scaling group to publish to the specified notification target.
   *
   * Valid only if the notification target is an Amazon SNS topic or an Amazon SQS queue. Required for new lifecycle hooks, but optional when updating existing hooks.
   *
   * @public
   */
  RoleARN?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the notification target that Amazon EC2 Auto Scaling uses to notify you when an instance is in a wait state for the lifecycle hook. You can specify either an Amazon SNS topic or an Amazon SQS queue.
   *
   * If you specify an empty string, this overrides the current ARN.
   *
   * This operation uses the JSON format when sending notifications to an Amazon SQS queue, and an email key-value pair format when sending notifications to an Amazon SNS topic.
   *
   * When you specify a notification target, Amazon EC2 Auto Scaling sends it a test message. Test messages contain the following additional key-value pair: `"Event": "autoscaling:TEST_NOTIFICATION"`.
   *
   * @public
   */
  NotificationTargetARN?: string | undefined;

  /**
   * Additional information that you want to include any time Amazon EC2 Auto Scaling sends a message to the notification target.
   *
   * @public
   */
  NotificationMetadata?: string | undefined;

  /**
   * The maximum time, in seconds, that can elapse before the lifecycle hook times out. The range is from `30` to `7200` seconds. The default value is `3600` seconds (1 hour).
   *
   * @public
   */
  HeartbeatTimeout?: number | undefined;

  /**
   * The action the Auto Scaling group takes when the lifecycle hook timeout elapses or if an unexpected failure occurs. The default value is `ABANDON`.
   *
   * Valid values: `CONTINUE` | `ABANDON`
   *
   * @public
   */
  DefaultResult?: string | undefined;
}

/**
 * @public
 */
export interface PutNotificationConfigurationType {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the Amazon SNS topic.
   *
   * @public
   */
  TopicARN: string | undefined;

  /**
   * The type of event that causes the notification to be sent. To query the notification types supported by Amazon EC2 Auto Scaling, call the [DescribeAutoScalingNotificationTypes](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_DescribeAutoScalingNotificationTypes.html) API.
   *
   * @public
   */
  NotificationTypes: string[] | undefined;
}

/**
 * Contains the output of PutScalingPolicy.
 *
 * @public
 */
export interface PolicyARNType {
  /**
   * The Amazon Resource Name (ARN) of the policy.
   *
   * @public
   */
  PolicyARN?: string | undefined;

  /**
   * The CloudWatch alarms created for the target tracking scaling policy.
   *
   * @public
   */
  Alarms?: Alarm[] | undefined;
}

/**
 * @public
 */
export interface PutScalingPolicyType {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * The name of the policy.
   *
   * @public
   */
  PolicyName: string | undefined;

  /**
   * One of the following policy types:
   *
   * - `TargetTrackingScaling`
   * - `StepScaling`
   * - `SimpleScaling` (default)
   * - `PredictiveScaling`
   *
   * @public
   */
  PolicyType?: string | undefined;

  /**
   * Specifies how the scaling adjustment is interpreted (for example, an absolute number or a percentage). The valid values are `ChangeInCapacity`, `ExactCapacity`, and `PercentChangeInCapacity`.
   *
   * Required if the policy type is `StepScaling` or `SimpleScaling`. For more information, see [Scaling adjustment types](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html#as-scaling-adjustment) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  AdjustmentType?: string | undefined;

  /**
   * Available for backward compatibility. Use `MinAdjustmentMagnitude` instead.
   *
   * @deprecated deprecated.
   * @public
   */
  MinAdjustmentStep?: number | undefined;

  /**
   * The minimum value to scale by when the adjustment type is `PercentChangeInCapacity`. For example, suppose that you create a step scaling policy to scale out an Auto Scaling group by 25 percent and you specify a `MinAdjustmentMagnitude` of 2. If the group has 4 instances and the scaling policy is performed, 25 percent of 4 is 1. However, because you specified a `MinAdjustmentMagnitude` of 2, Amazon EC2 Auto Scaling scales out the group by 2 instances.
   *
   * Valid only if the policy type is `StepScaling` or `SimpleScaling`. For more information, see [Scaling adjustment types](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html#as-scaling-adjustment) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * > **Note:** Some Auto Scaling groups use instance weights. In this case, set the `MinAdjustmentMagnitude` to a value that is at least as large as your largest instance weight.
   *
   * @public
   */
  MinAdjustmentMagnitude?: number | undefined;

  /**
   * The amount by which to scale, based on the specified adjustment type. A positive value adds to the current capacity while a negative number removes from the current capacity. For exact capacity, you must specify a non-negative value.
   *
   * Required if the policy type is `SimpleScaling`. (Not used with any other policy type.)
   *
   * @public
   */
  ScalingAdjustment?: number | undefined;

  /**
   * A cooldown period, in seconds, that applies to a specific simple scaling policy. When a cooldown period is specified here, it overrides the default cooldown.
   *
   * Valid only if the policy type is `SimpleScaling`. For more information, see [Scaling cooldowns for Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-scaling-cooldowns.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * Default: None
   *
   * @public
   */
  Cooldown?: number | undefined;

  /**
   * The aggregation type for the CloudWatch metrics. The valid values are `Minimum`, `Maximum`, and `Average`. If the aggregation type is null, the value is treated as `Average`.
   *
   * Valid only if the policy type is `StepScaling`.
   *
   * @public
   */
  MetricAggregationType?: string | undefined;

  /**
   * A set of adjustments that enable you to scale based on the size of the alarm breach.
   *
   * Required if the policy type is `StepScaling`. (Not used with any other policy type.)
   *
   * @public
   */
  StepAdjustments?: StepAdjustment[] | undefined;

  /**
   * *Not needed if the default instance warmup is defined for the group.*
   *
   * The estimated time, in seconds, until a newly launched instance can contribute to the CloudWatch metrics. This warm-up period applies to instances launched due to a specific target tracking or step scaling policy. When a warm-up period is specified here, it overrides the default instance warmup.
   *
   * Valid only if the policy type is `TargetTrackingScaling` or `StepScaling`.
   *
   * > **Note:** The default is to use the value for the default instance warmup defined for the group. If default instance warmup is null, then `EstimatedInstanceWarmup` falls back to the value of default cooldown.
   *
   * @public
   */
  EstimatedInstanceWarmup?: number | undefined;

  /**
   * A target tracking scaling policy. Provides support for predefined or custom metrics.
   *
   * The following predefined metrics are available:
   *
   * - `ASGAverageCPUUtilization`
   * - `ASGAverageNetworkIn`
   * - `ASGAverageNetworkOut`
   * - `ALBRequestCountPerTarget`
   *
   * If you specify `ALBRequestCountPerTarget` for the metric, you must specify the `ResourceLabel` property with the `PredefinedMetricSpecification`.
   *
   * For more information, see [TargetTrackingConfiguration](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_TargetTrackingConfiguration.html) in the *Amazon EC2 Auto Scaling API Reference*.
   *
   * Required if the policy type is `TargetTrackingScaling`.
   *
   * @public
   */
  TargetTrackingConfiguration?: TargetTrackingConfiguration | undefined;

  /**
   * Indicates whether the scaling policy is enabled or disabled. The default is enabled. For more information, see [Disable a scaling policy for an Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-enable-disable-scaling-policy.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  Enabled?: boolean | undefined;

  /**
   * A predictive scaling policy. Provides support for predefined and custom metrics.
   *
   * Predefined metrics include CPU utilization, network in/out, and the Application Load Balancer request count.
   *
   * For more information, see [PredictiveScalingConfiguration](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_PredictiveScalingConfiguration.html) in the *Amazon EC2 Auto Scaling API Reference*.
   *
   * Required if the policy type is `PredictiveScaling`.
   *
   * @public
   */
  PredictiveScalingConfiguration?: PredictiveScalingConfiguration | undefined;
}

/**
 * @public
 */
export interface PutScheduledUpdateGroupActionType {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * The name of this scaling action.
   *
   * @public
   */
  ScheduledActionName: string | undefined;

  /**
   * This property is no longer used.
   *
   * @public
   */
  Time?: Date | undefined;

  /**
   * The date and time for this action to start, in YYYY-MM-DDThh:mm:ssZ format in UTC/GMT only and in quotes (for example, `"2021-06-01T00:00:00Z"`).
   *
   * If you specify `Recurrence` and `StartTime`, Amazon EC2 Auto Scaling performs the action at this time, and then performs the action based on the specified recurrence.
   *
   * @public
   */
  StartTime?: Date | undefined;

  /**
   * The date and time for the recurring schedule to end, in UTC. For example, `"2021-06-01T00:00:00Z"`.
   *
   * @public
   */
  EndTime?: Date | undefined;

  /**
   * The recurring schedule for this action. This format consists of five fields separated by white spaces: [Minute] [Hour] [Day_of_Month] [Month_of_Year] [Day_of_Week]. The value must be in quotes (for example, `"30 0 1 1,6,12 *"`). For more information about this format, see [Crontab](http://crontab.org).
   *
   * When `StartTime` and `EndTime` are specified with `Recurrence`, they form the boundaries of when the recurring action starts and stops.
   *
   * Cron expressions use Universal Coordinated Time (UTC) by default.
   *
   * @public
   */
  Recurrence?: string | undefined;

  /**
   * The minimum size of the Auto Scaling group.
   *
   * @public
   */
  MinSize?: number | undefined;

  /**
   * The maximum size of the Auto Scaling group.
   *
   * @public
   */
  MaxSize?: number | undefined;

  /**
   * The desired capacity is the initial capacity of the Auto Scaling group after the scheduled action runs and the capacity it attempts to maintain. It can scale beyond this capacity if you add more scaling conditions.
   *
   * > **Note:** You must specify at least one of the following properties: `MaxSize`, `MinSize`, or `DesiredCapacity`.
   *
   * @public
   */
  DesiredCapacity?: number | undefined;

  /**
   * Specifies the time zone for a cron expression. If a time zone is not provided, UTC is used by default.
   *
   * Valid values are the canonical names of the IANA time zones, derived from the IANA Time Zone Database (such as `Etc/GMT+9` or `Pacific/Tahiti`). For more information, see [https://en.wikipedia.org/wiki/List_of_tz_database_time_zones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).
   *
   * @public
   */
  TimeZone?: string | undefined;
}

/**
 * @public
 */
export interface PutWarmPoolAnswer {}

/**
 * @public
 */
export interface PutWarmPoolType {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * Specifies the maximum number of instances that are allowed to be in the warm pool or in any state except `Terminated` for the Auto Scaling group. This is an optional property. Specify it only if you do not want the warm pool size to be determined by the difference between the group's maximum capacity and its desired capacity.
   *
   * > **Important:**
   * >
   * > If a value for `MaxGroupPreparedCapacity` is not specified, Amazon EC2 Auto Scaling launches and maintains the difference between the group's maximum capacity and its desired capacity. If you specify a value for `MaxGroupPreparedCapacity`, Amazon EC2 Auto Scaling uses the difference between the `MaxGroupPreparedCapacity` and the desired capacity instead.
   * >
   * > The size of the warm pool is dynamic. Only when `MaxGroupPreparedCapacity` and `MinSize` are set to the same value does the warm pool have an absolute size.
   *
   * If the desired capacity of the Auto Scaling group is higher than the `MaxGroupPreparedCapacity`, the capacity of the warm pool is 0, unless you specify a value for `MinSize`. To remove a value that you previously set, include the property but specify -1 for the value.
   *
   * @public
   */
  MaxGroupPreparedCapacity?: number | undefined;

  /**
   * Specifies the minimum number of instances to maintain in the warm pool. This helps you to ensure that there is always a certain number of warmed instances available to handle traffic spikes. Defaults to 0 if not specified.
   *
   * @public
   */
  MinSize?: number | undefined;

  /**
   * Sets the instance state to transition to after the lifecycle actions are complete. Default is `Stopped`.
   *
   * @public
   */
  PoolState?: WarmPoolState | undefined;

  /**
   * Indicates whether instances in the Auto Scaling group can be returned to the warm pool on scale in. The default is to terminate instances in the Auto Scaling group when the group scales in.
   *
   * @public
   */
  InstanceReusePolicy?: InstanceReusePolicy | undefined;
}

/**
 * @public
 */
export interface RecordLifecycleActionHeartbeatAnswer {}

/**
 * @public
 */
export interface RecordLifecycleActionHeartbeatType {
  /**
   * The name of the lifecycle hook.
   *
   * @public
   */
  LifecycleHookName: string | undefined;

  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * A token that uniquely identifies a specific lifecycle action associated with an instance. Amazon EC2 Auto Scaling sends this token to the notification target that you specified when you created the lifecycle hook.
   *
   * @public
   */
  LifecycleActionToken?: string | undefined;

  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;
}

/**
 * @public
 */
export interface ScalingProcessQuery {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * One or more of the following processes:
   *
   * - `Launch`
   * - `Terminate`
   * - `AddToLoadBalancer`
   * - `AlarmNotification`
   * - `AZRebalance`
   * - `HealthCheck`
   * - `InstanceRefresh`
   * - `ReplaceUnhealthy`
   * - `ScheduledActions`
   *
   * If you omit this property, all processes are specified.
   *
   * @public
   */
  ScalingProcesses?: string[] | undefined;
}

/**
 * @public
 */
export interface RollbackInstanceRefreshAnswer {
  /**
   * The instance refresh ID associated with the request. This is the unique ID assigned to the instance refresh when it was started.
   *
   * @public
   */
  InstanceRefreshId?: string | undefined;
}

/**
 * @public
 */
export interface RollbackInstanceRefreshType {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;
}

/**
 * @public
 */
export interface SetDesiredCapacityType {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * The desired capacity is the initial capacity of the Auto Scaling group after this operation completes and the capacity it attempts to maintain.
   *
   * @public
   */
  DesiredCapacity: number | undefined;

  /**
   * Indicates whether Amazon EC2 Auto Scaling waits for the cooldown period to complete before initiating a scaling activity to set your Auto Scaling group to its new capacity. By default, Amazon EC2 Auto Scaling does not honor the cooldown period during manual scaling activities.
   *
   * @public
   */
  HonorCooldown?: boolean | undefined;
}

/**
 * @public
 */
export interface SetInstanceHealthQuery {
  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId: string | undefined;

  /**
   * The health status of the instance. Set to `Healthy` to have the instance remain in service. Set to `Unhealthy` to have the instance be out of service. Amazon EC2 Auto Scaling terminates and replaces the unhealthy instance.
   *
   * @public
   */
  HealthStatus: string | undefined;

  /**
   * If the Auto Scaling group of the specified instance has a `HealthCheckGracePeriod` specified for the group, by default, this call respects the grace period. Set this to `False`, to have the call not respect the grace period associated with the group.
   *
   * For more information about the health check grace period, see [Set the health check grace period for an Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/health-check-grace-period.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  ShouldRespectGracePeriod?: boolean | undefined;
}

/**
 * @public
 */
export interface SetInstanceProtectionAnswer {}

/**
 * @public
 */
export interface SetInstanceProtectionQuery {
  /**
   * One or more instance IDs. You can specify up to 50 instances.
   *
   * @public
   */
  InstanceIds: string[] | undefined;

  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * Indicates whether the instance is protected from termination by Amazon EC2 Auto Scaling when scaling in.
   *
   * @public
   */
  ProtectedFromScaleIn: boolean | undefined;
}

/**
 * @public
 */
export interface StartInstanceRefreshAnswer {
  /**
   * A unique ID for tracking the progress of the instance refresh.
   *
   * @public
   */
  InstanceRefreshId?: string | undefined;
}

/**
 * @public
 */
export interface StartInstanceRefreshType {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * The strategy to use for the instance refresh. The default value is `Rolling`.
   *
   * @public
   */
  Strategy?: RefreshStrategy | undefined;

  /**
   * The desired configuration. For example, the desired configuration can specify a new launch template or a new version of the current launch template.
   *
   * Once the instance refresh succeeds, Amazon EC2 Auto Scaling updates the settings of the Auto Scaling group to reflect the new desired configuration.
   *
   * > **Note:** When you specify a new launch template or a new version of the current launch template for your desired configuration, consider enabling the `SkipMatching` property in preferences. If it's enabled, Amazon EC2 Auto Scaling skips replacing instances that already use the specified launch template and instance types. This can help you reduce the number of replacements that are required to apply updates.
   *
   * @public
   */
  DesiredConfiguration?: DesiredConfiguration | undefined;

  /**
   * Sets your preferences for the instance refresh so that it performs as expected when you start it. Includes the instance warmup time, the minimum and maximum healthy percentages, and the behaviors that you want Amazon EC2 Auto Scaling to use if instances that are in `Standby` state or protected from scale in are found. You can also choose to enable additional features, such as the following:
   *
   * - Auto rollback
   * - Checkpoints
   * - CloudWatch alarms
   * - Skip matching
   * - Bake time
   *
   * @public
   */
  Preferences?: RefreshPreferences | undefined;
}

/**
 * @public
 */
export interface TerminateInstanceInAutoScalingGroupType {
  /**
   * The ID of the instance.
   *
   * @public
   */
  InstanceId?: string | undefined;

  /**
   * The IDs of the instances. You can specify up to 100 instances.
   *
   * This parameter requires that you also specify `AutoScalingGroupName`.
   *
   * @public
   */
  InstanceIds?: string[] | undefined;

  /**
   * The name of the Auto Scaling group. Required when using `InstanceIds`.
   *
   * @public
   */
  AutoScalingGroupName?: string | undefined;

  /**
   * Indicates whether terminating the instance also decrements the size of the Auto Scaling group.
   *
   * @public
   */
  ShouldDecrementDesiredCapacity: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateAutoScalingGroupType {
  /**
   * The name of the Auto Scaling group.
   *
   * @public
   */
  AutoScalingGroupName: string | undefined;

  /**
   * The name of the launch configuration. If you specify `LaunchConfigurationName` in your update request, you can't specify `LaunchTemplate` or `MixedInstancesPolicy`.
   *
   * @public
   */
  LaunchConfigurationName?: string | undefined;

  /**
   * The launch template and version to use to specify the updates. If you specify `LaunchTemplate` in your update request, you can't specify `LaunchConfigurationName` or `MixedInstancesPolicy`.
   *
   * @public
   */
  LaunchTemplate?: LaunchTemplateSpecification | undefined;

  /**
   * The mixed instances policy. For more information, see [Auto Scaling groups with multiple instance types and purchase options](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-mixed-instances-groups.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * You can remove the Distribution Segments configuration by specifying `OnDemandBaseCapacity` or `OnDemandPercentageAboveBaseCapacity`. You can also remove it explicitly by specifying an empty list for `DistributionSegments`.
   *
   * @public
   */
  MixedInstancesPolicy?: MixedInstancesPolicy | undefined;

  /**
   * The minimum size of the Auto Scaling group.
   *
   * @public
   */
  MinSize?: number | undefined;

  /**
   * The maximum size of the Auto Scaling group.
   *
   * > **Note:** With a mixed instances policy that uses instance weighting, Amazon EC2 Auto Scaling may need to go above `MaxSize` to meet your capacity requirements. In this event, Amazon EC2 Auto Scaling will never go above `MaxSize` by more than your largest instance weight (weights that define how many units each instance contributes to the desired capacity of the group).
   *
   * @public
   */
  MaxSize?: number | undefined;

  /**
   * The desired capacity is the initial capacity of the Auto Scaling group after this operation completes and the capacity it attempts to maintain. This number must be greater than or equal to the minimum size of the group and less than or equal to the maximum size of the group.
   *
   * @public
   */
  DesiredCapacity?: number | undefined;

  /**
   * *Only needed if you use simple scaling policies.*
   *
   * The amount of time, in seconds, between one scaling activity ending and another one starting due to simple scaling policies. For more information, see [Scaling cooldowns for Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-scaling-cooldowns.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  DefaultCooldown?: number | undefined;

  /**
   * One or more Availability Zones for the group.
   *
   * @public
   */
  AvailabilityZones?: string[] | undefined;

  /**
   * A list of Availability Zone IDs for the Auto Scaling group. You cannot specify both AvailabilityZones and AvailabilityZoneIds in the same request.
   *
   * @public
   */
  AvailabilityZoneIds?: string[] | undefined;

  /**
   * A comma-separated value string of one or more health check types.
   *
   * The valid values are `EC2`, `EBS`, `ELB`, and `VPC_LATTICE`. `EC2` is the default health check and cannot be disabled. For more information, see [Health checks for instances in an Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-health-checks.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * Only specify `EC2` if you must clear a value that was previously set.
   *
   * @public
   */
  HealthCheckType?: string | undefined;

  /**
   * The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before checking the health status of an EC2 instance that has come into service and marking it unhealthy due to a failed health check. This is useful if your instances do not immediately pass their health checks after they enter the `InService` state. For more information, see [Set the health check grace period for an Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/health-check-grace-period.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  HealthCheckGracePeriod?: number | undefined;

  /**
   * The name of an existing placement group into which to launch your instances. To remove the placement group setting, pass an empty string for `placement-group`. For more information about placement groups, see [Placement groups](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html) in the *Amazon EC2 User Guide*.
   *
   * > **Note:** A *cluster* placement group is a logical grouping of instances within a single Availability Zone. You cannot specify multiple Availability Zones and a cluster placement group.
   *
   * @public
   */
  PlacementGroup?: string | undefined;

  /**
   * A comma-separated list of subnet IDs for a virtual private cloud (VPC). If you specify `VPCZoneIdentifier` with `AvailabilityZones`, the subnets that you specify must reside in those Availability Zones.
   *
   * @public
   */
  VPCZoneIdentifier?: string | undefined;

  /**
   * A policy or a list of policies that are used to select the instances to terminate. The policies are executed in the order that you list them. For more information, see [Configure termination policies for Amazon EC2 Auto Scaling](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-termination-policies.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * Valid values: `Default` | `AllocationStrategy` | `ClosestToNextInstanceHour` | `NewestInstance` | `OldestInstance` | `OldestLaunchConfiguration` | `OldestLaunchTemplate` | `arn:aws:lambda:region:account-id:function:my-function:my-alias`
   *
   * @public
   */
  TerminationPolicies?: string[] | undefined;

  /**
   * Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling when scaling in. For more information about preventing instances from terminating on scale in, see [Use instance scale-in protection](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-protection.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  NewInstancesProtectedFromScaleIn?: boolean | undefined;

  /**
   * The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to call other Amazon Web Services on your behalf. For more information, see [Service-linked roles](https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-service-linked-role.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  ServiceLinkedRoleARN?: string | undefined;

  /**
   * The maximum amount of time, in seconds, that an instance can be in service. The default is null. If specified, the value must be either 0 or a number equal to or greater than 86,400 seconds (1 day). To clear a previously set value, specify a new value of 0. For more information, see [Replacing Auto Scaling instances based on maximum instance lifetime](https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-max-instance-lifetime.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  MaxInstanceLifetime?: number | undefined;

  /**
   * Enables or disables Capacity Rebalancing. If Capacity Rebalancing is disabled, proactive replacement of at-risk Spot Instances does not occur. For more information, see [Capacity Rebalancing in Auto Scaling to replace at-risk Spot Instances](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-capacity-rebalancing.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * > **Note:** To suspend rebalancing across Availability Zones, use the [SuspendProcesses](https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_SuspendedProcess.html) API.
   *
   * @public
   */
  CapacityRebalance?: boolean | undefined;

  /**
   * Reserved.
   *
   * @public
   */
  Context?: string | undefined;

  /**
   * The unit of measurement for the value specified for desired capacity. Amazon EC2 Auto Scaling supports `DesiredCapacityType` for attribute-based instance type selection only. For more information, see [Create a mixed instances group using attribute-based instance type selection](https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-mixed-instances-group-attribute-based-instance-type-selection.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * By default, Amazon EC2 Auto Scaling specifies `units`, which translates into number of instances.
   *
   * Valid values: `units` | `vcpu` | `memory-mib`
   *
   * @public
   */
  DesiredCapacityType?: string | undefined;

  /**
   * The amount of time, in seconds, until a new instance is considered to have finished initializing and resource consumption to become stable after it enters the `InService` state.
   *
   * During an instance refresh, Amazon EC2 Auto Scaling waits for the warm-up period after it replaces an instance before it moves on to replacing the next instance. Amazon EC2 Auto Scaling also waits for the warm-up period before aggregating the metrics for new instances with existing instances in the Amazon CloudWatch metrics that are used for scaling, resulting in more reliable usage data. For more information, see [Set the default instance warmup for an Auto Scaling group](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-default-instance-warmup.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * > **Important:** To manage various warm-up settings at the group level, we recommend that you set the default instance warmup, *even if it is set to 0 seconds*. To remove a value that you previously set, include the property but specify `-1` for the value. However, we strongly recommend keeping the default instance warmup enabled by specifying a value of `0` or other nominal value.
   *
   * @public
   */
  DefaultInstanceWarmup?: number | undefined;

  /**
   * An instance maintenance policy. For more information, see [Set instance maintenance policy](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-instance-maintenance-policy.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  InstanceMaintenancePolicy?: InstanceMaintenancePolicy | undefined;

  /**
   * The instance capacity distribution across Availability Zones.
   *
   * @public
   */
  AvailabilityZoneDistribution?: AvailabilityZoneDistribution | undefined;

  /**
   * The policy for Availability Zone impairment.
   *
   * @public
   */
  AvailabilityZoneImpairmentPolicy?: AvailabilityZoneImpairmentPolicy | undefined;

  /**
   * If you enable zonal shift with cross-zone disabled load balancers, capacity could become imbalanced across Availability Zones. To skip the validation, specify `true`. For more information, see [Auto Scaling group zonal shift](https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-zonal-shift.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  SkipZonalShiftValidation?: boolean | undefined;

  /**
   * The capacity reservation specification for the Auto Scaling group.
   *
   * @public
   */
  CapacityReservationSpecification?: CapacityReservationSpecification | undefined;

  /**
   * The instance lifecycle policy for the Auto Scaling group. This policy controls instance behavior when an instance transitions through its lifecycle states. Configure retention triggers to specify when instances should move to a `Retained` state instead of automatic termination.
   *
   * For more information, see [Control instance retention with instance lifecycle policies](https://docs.aws.amazon.com/autoscaling/ec2/userguide/instance-lifecycle-policy.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  InstanceLifecyclePolicy?: InstanceLifecyclePolicy | undefined;

  /**
   * The deletion protection setting for the Auto Scaling group. This setting helps safeguard your Auto Scaling group and its instances by controlling whether the `DeleteAutoScalingGroup` operation is allowed. When deletion protection is enabled, users cannot delete the Auto Scaling group according to the specified protection level until the setting is changed back to a less restrictive level.
   *
   * The valid values are `none`, `prevent-force-deletion`, and `prevent-all-deletion`.
   *
   * Default: `none`
   *
   * For more information, see [Configure deletion protection for your Amazon EC2 Auto Scaling resources](https://docs.aws.amazon.com/autoscaling/ec2/userguide/resource-deletion-protection.html) in the *Amazon EC2 Auto Scaling User Guide*.
   *
   * @public
   */
  DeletionProtection?: DeletionProtection | undefined;
}
