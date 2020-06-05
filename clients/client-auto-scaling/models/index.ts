import {
  SENSITIVE_STRING,
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface ActivitiesType {
  __type?: "ActivitiesType";
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

export namespace ActivitiesType {
  export const filterSensitiveLog = (obj: ActivitiesType): any => ({
    ...obj
  });
  export const isa = (o: any): o is ActivitiesType =>
    __isa(o, "ActivitiesType");
}

/**
 * <p>Describes scaling activity, which is a long-running process that represents a change
 *             to your Auto Scaling group, such as changing its size or replacing an instance.</p>
 */
export interface Activity {
  __type?: "Activity";
  /**
   * <p>The ID of the activity.</p>
   */
  ActivityId: string | undefined;

  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The reason the activity began.</p>
   */
  Cause: string | undefined;

  /**
   * <p>A friendly, more verbose description of the activity.</p>
   */
  Description?: string;

  /**
   * <p>The details about the activity.</p>
   */
  Details?: string;

  /**
   * <p>The end time of the activity.</p>
   */
  EndTime?: Date;

  /**
   * <p>A value between 0 and 100 that indicates the progress of the activity.</p>
   */
  Progress?: number;

  /**
   * <p>The start time of the activity.</p>
   */
  StartTime: Date | undefined;

  /**
   * <p>The current status of the activity.</p>
   */
  StatusCode: ScalingActivityStatusCode | string | undefined;

  /**
   * <p>A friendly, more verbose description of the activity status.</p>
   */
  StatusMessage?: string;
}

export namespace Activity {
  export const filterSensitiveLog = (obj: Activity): any => ({
    ...obj
  });
  export const isa = (o: any): o is Activity => __isa(o, "Activity");
}

export interface ActivityType {
  __type?: "ActivityType";
  /**
   * <p>A scaling activity.</p>
   */
  Activity?: Activity;
}

export namespace ActivityType {
  export const filterSensitiveLog = (obj: ActivityType): any => ({
    ...obj
  });
  export const isa = (o: any): o is ActivityType => __isa(o, "ActivityType");
}

/**
 * <p>Describes a policy adjustment type.</p>
 */
export interface AdjustmentType {
  __type?: "AdjustmentType";
  /**
   * <p>The policy adjustment type. The valid values are <code>ChangeInCapacity</code>,
   *                 <code>ExactCapacity</code>, and <code>PercentChangeInCapacity</code>.</p>
   */
  AdjustmentType?: string;
}

export namespace AdjustmentType {
  export const filterSensitiveLog = (obj: AdjustmentType): any => ({
    ...obj
  });
  export const isa = (o: any): o is AdjustmentType =>
    __isa(o, "AdjustmentType");
}

/**
 * <p>Describes an alarm.</p>
 */
export interface Alarm {
  __type?: "Alarm";
  /**
   * <p>The Amazon Resource Name (ARN) of the alarm.</p>
   */
  AlarmARN?: string;

  /**
   * <p>The name of the alarm.</p>
   */
  AlarmName?: string;
}

export namespace Alarm {
  export const filterSensitiveLog = (obj: Alarm): any => ({
    ...obj
  });
  export const isa = (o: any): o is Alarm => __isa(o, "Alarm");
}

/**
 * <p>You already have an Auto Scaling group or launch configuration with this name.</p>
 */
export interface AlreadyExistsFault extends __SmithyException, $MetadataBearer {
  name: "AlreadyExistsFault";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace AlreadyExistsFault {
  export const filterSensitiveLog = (obj: AlreadyExistsFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is AlreadyExistsFault =>
    __isa(o, "AlreadyExistsFault");
}

export interface AttachInstancesQuery {
  __type?: "AttachInstancesQuery";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The IDs of the instances. You can specify up to 20 instances.</p>
   */
  InstanceIds?: string[];
}

export namespace AttachInstancesQuery {
  export const filterSensitiveLog = (obj: AttachInstancesQuery): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttachInstancesQuery =>
    __isa(o, "AttachInstancesQuery");
}

export interface AttachLoadBalancersResultType {
  __type?: "AttachLoadBalancersResultType";
}

export namespace AttachLoadBalancersResultType {
  export const filterSensitiveLog = (
    obj: AttachLoadBalancersResultType
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttachLoadBalancersResultType =>
    __isa(o, "AttachLoadBalancersResultType");
}

export interface AttachLoadBalancersType {
  __type?: "AttachLoadBalancersType";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The names of the load balancers. You can specify up to 10 load balancers.</p>
   */
  LoadBalancerNames: string[] | undefined;
}

export namespace AttachLoadBalancersType {
  export const filterSensitiveLog = (obj: AttachLoadBalancersType): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttachLoadBalancersType =>
    __isa(o, "AttachLoadBalancersType");
}

export interface AttachLoadBalancerTargetGroupsResultType {
  __type?: "AttachLoadBalancerTargetGroupsResultType";
}

export namespace AttachLoadBalancerTargetGroupsResultType {
  export const filterSensitiveLog = (
    obj: AttachLoadBalancerTargetGroupsResultType
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttachLoadBalancerTargetGroupsResultType =>
    __isa(o, "AttachLoadBalancerTargetGroupsResultType");
}

export interface AttachLoadBalancerTargetGroupsType {
  __type?: "AttachLoadBalancerTargetGroupsType";
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

export namespace AttachLoadBalancerTargetGroupsType {
  export const filterSensitiveLog = (
    obj: AttachLoadBalancerTargetGroupsType
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is AttachLoadBalancerTargetGroupsType =>
    __isa(o, "AttachLoadBalancerTargetGroupsType");
}

/**
 * <p>Describes an Auto Scaling group.</p>
 */
export interface AutoScalingGroup {
  __type?: "AutoScalingGroup";
  /**
   * <p>The Amazon Resource Name (ARN) of the Auto Scaling group.</p>
   */
  AutoScalingGroupARN?: string;

  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>One or more Availability Zones for the group.</p>
   */
  AvailabilityZones: string[] | undefined;

  /**
   * <p>The date and time the group was created.</p>
   */
  CreatedTime: Date | undefined;

  /**
   * <p>The amount of time, in seconds, after a scaling activity completes before another
   *             scaling activity can start.</p>
   */
  DefaultCooldown: number | undefined;

  /**
   * <p>The desired size of the group.</p>
   */
  DesiredCapacity: number | undefined;

  /**
   * <p>The metrics enabled for the group.</p>
   */
  EnabledMetrics?: EnabledMetric[];

  /**
   * <p>The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before checking the health status
   *             of an EC2 instance that has come into service.</p>
   */
  HealthCheckGracePeriod?: number;

  /**
   * <p>The service to use for the health checks. The valid values are <code>EC2</code> and
   *                 <code>ELB</code>. If you configure an Auto Scaling group to use ELB health checks, it
   *             considers the instance unhealthy if it fails either the EC2 status checks or the load
   *             balancer health checks.</p>
   */
  HealthCheckType: string | undefined;

  /**
   * <p>The EC2 instances associated with the group.</p>
   */
  Instances?: Instance[];

  /**
   * <p>The name of the associated launch configuration.</p>
   */
  LaunchConfigurationName?: string;

  /**
   * <p>The launch template for the group.</p>
   */
  LaunchTemplate?: LaunchTemplateSpecification;

  /**
   * <p>One or more load balancers associated with the group.</p>
   */
  LoadBalancerNames?: string[];

  /**
   * <p>The maximum amount of time, in seconds, that an instance can be in service.</p>
   *         <p>Valid Range: Minimum value of 604800.</p>
   */
  MaxInstanceLifetime?: number;

  /**
   * <p>The maximum size of the group.</p>
   */
  MaxSize: number | undefined;

  /**
   * <p>The minimum size of the group.</p>
   */
  MinSize: number | undefined;

  /**
   * <p>The mixed instances policy for the group.</p>
   */
  MixedInstancesPolicy?: MixedInstancesPolicy;

  /**
   * <p>Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling
   *             when scaling in.</p>
   */
  NewInstancesProtectedFromScaleIn?: boolean;

  /**
   * <p>The name of the placement group into which to launch your instances, if any.</p>
   */
  PlacementGroup?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to
   *             call other AWS services on your behalf.</p>
   */
  ServiceLinkedRoleARN?: string;

  /**
   * <p>The current state of the group when <a>DeleteAutoScalingGroup</a> is in
   *             progress.</p>
   */
  Status?: string;

  /**
   * <p>The suspended processes associated with the group.</p>
   */
  SuspendedProcesses?: SuspendedProcess[];

  /**
   * <p>The tags for the group.</p>
   */
  Tags?: TagDescription[];

  /**
   * <p>The Amazon Resource Names (ARN) of the target groups for your load balancer.</p>
   */
  TargetGroupARNs?: string[];

  /**
   * <p>The termination policies for the group.</p>
   */
  TerminationPolicies?: string[];

  /**
   * <p>One or more subnet IDs, if applicable, separated by commas.</p>
   */
  VPCZoneIdentifier?: string;
}

export namespace AutoScalingGroup {
  export const filterSensitiveLog = (obj: AutoScalingGroup): any => ({
    ...obj
  });
  export const isa = (o: any): o is AutoScalingGroup =>
    __isa(o, "AutoScalingGroup");
}

export interface AutoScalingGroupNamesType {
  __type?: "AutoScalingGroupNamesType";
  /**
   * <p>The names of the Auto Scaling groups. Each name can be a maximum of 1600 characters. By
   *             default, you can only specify up to 50 names. You can optionally increase this limit
   *             using the <code>MaxRecords</code> parameter.</p>
   *         <p>If you omit this parameter, all Auto Scaling groups are described.</p>
   */
  AutoScalingGroupNames?: string[];

  /**
   * <p>The maximum number of items to return with this call. The default value is
   *                 <code>50</code> and the maximum value is <code>100</code>.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a
   *             previous call.)</p>
   */
  NextToken?: string;
}

export namespace AutoScalingGroupNamesType {
  export const filterSensitiveLog = (obj: AutoScalingGroupNamesType): any => ({
    ...obj
  });
  export const isa = (o: any): o is AutoScalingGroupNamesType =>
    __isa(o, "AutoScalingGroupNamesType");
}

export interface AutoScalingGroupsType {
  __type?: "AutoScalingGroupsType";
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

export namespace AutoScalingGroupsType {
  export const filterSensitiveLog = (obj: AutoScalingGroupsType): any => ({
    ...obj
  });
  export const isa = (o: any): o is AutoScalingGroupsType =>
    __isa(o, "AutoScalingGroupsType");
}

/**
 * <p>Describes an EC2 instance associated with an Auto Scaling group.</p>
 */
export interface AutoScalingInstanceDetails {
  __type?: "AutoScalingInstanceDetails";
  /**
   * <p>The name of the Auto Scaling group for the instance.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The Availability Zone for the instance.</p>
   */
  AvailabilityZone: string | undefined;

  /**
   * <p>The last reported health status of this instance. "Healthy" means that the instance is
   *             healthy and should remain in service. "Unhealthy" means that the instance is unhealthy
   *             and Amazon EC2 Auto Scaling should terminate and replace it.</p>
   */
  HealthStatus: string | undefined;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The instance type of the EC2 instance.</p>
   */
  InstanceType?: string;

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
   * <p>The lifecycle state for the instance.</p>
   */
  LifecycleState: string | undefined;

  /**
   * <p>Indicates whether the instance is protected from termination by Amazon EC2 Auto Scaling when scaling
   *             in.</p>
   */
  ProtectedFromScaleIn: boolean | undefined;

  /**
   * <p>The number of capacity units contributed by the instance based on its instance type.</p>
   *         <p>Valid Range: Minimum value of 1. Maximum value of 999.</p>
   */
  WeightedCapacity?: string;
}

export namespace AutoScalingInstanceDetails {
  export const filterSensitiveLog = (obj: AutoScalingInstanceDetails): any => ({
    ...obj
  });
  export const isa = (o: any): o is AutoScalingInstanceDetails =>
    __isa(o, "AutoScalingInstanceDetails");
}

export interface AutoScalingInstancesType {
  __type?: "AutoScalingInstancesType";
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

export namespace AutoScalingInstancesType {
  export const filterSensitiveLog = (obj: AutoScalingInstancesType): any => ({
    ...obj
  });
  export const isa = (o: any): o is AutoScalingInstancesType =>
    __isa(o, "AutoScalingInstancesType");
}

export interface BatchDeleteScheduledActionAnswer {
  __type?: "BatchDeleteScheduledActionAnswer";
  /**
   * <p>The names of the scheduled actions that could not be deleted, including an error
   *             message.</p>
   */
  FailedScheduledActions?: FailedScheduledUpdateGroupActionRequest[];
}

export namespace BatchDeleteScheduledActionAnswer {
  export const filterSensitiveLog = (
    obj: BatchDeleteScheduledActionAnswer
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchDeleteScheduledActionAnswer =>
    __isa(o, "BatchDeleteScheduledActionAnswer");
}

export interface BatchDeleteScheduledActionType {
  __type?: "BatchDeleteScheduledActionType";
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

export namespace BatchDeleteScheduledActionType {
  export const filterSensitiveLog = (
    obj: BatchDeleteScheduledActionType
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchDeleteScheduledActionType =>
    __isa(o, "BatchDeleteScheduledActionType");
}

export interface BatchPutScheduledUpdateGroupActionAnswer {
  __type?: "BatchPutScheduledUpdateGroupActionAnswer";
  /**
   * <p>The names of the scheduled actions that could not be created or updated, including an
   *             error message.</p>
   */
  FailedScheduledUpdateGroupActions?: FailedScheduledUpdateGroupActionRequest[];
}

export namespace BatchPutScheduledUpdateGroupActionAnswer {
  export const filterSensitiveLog = (
    obj: BatchPutScheduledUpdateGroupActionAnswer
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchPutScheduledUpdateGroupActionAnswer =>
    __isa(o, "BatchPutScheduledUpdateGroupActionAnswer");
}

export interface BatchPutScheduledUpdateGroupActionType {
  __type?: "BatchPutScheduledUpdateGroupActionType";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>One or more scheduled actions. The maximum number allowed is 50.</p>
   */
  ScheduledUpdateGroupActions: ScheduledUpdateGroupActionRequest[] | undefined;
}

export namespace BatchPutScheduledUpdateGroupActionType {
  export const filterSensitiveLog = (
    obj: BatchPutScheduledUpdateGroupActionType
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is BatchPutScheduledUpdateGroupActionType =>
    __isa(o, "BatchPutScheduledUpdateGroupActionType");
}

/**
 * <p>Describes a block device mapping.</p>
 */
export interface BlockDeviceMapping {
  __type?: "BlockDeviceMapping";
  /**
   * <p>The device name exposed to the EC2 instance (for example, <code>/dev/sdh</code> or
   *                 <code>xvdh</code>). For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/device_naming.html">Device Naming on Linux
   *                 Instances</a> in the <i>Amazon EC2 User Guide for Linux
   *                 Instances</i>.</p>
   */
  DeviceName: string | undefined;

  /**
   * <p>The information about the Amazon EBS volume.</p>
   */
  Ebs?: Ebs;

  /**
   * <p>Suppresses a device mapping.</p>
   *         <p>If this parameter is true for the root device, the instance might fail the EC2 health
   *             check. In that case, Amazon EC2 Auto Scaling launches a replacement instance.</p>
   */
  NoDevice?: boolean;

  /**
   * <p>The name of the virtual device (for example, <code>ephemeral0</code>).</p>
   */
  VirtualName?: string;
}

export namespace BlockDeviceMapping {
  export const filterSensitiveLog = (obj: BlockDeviceMapping): any => ({
    ...obj
  });
  export const isa = (o: any): o is BlockDeviceMapping =>
    __isa(o, "BlockDeviceMapping");
}

export interface CompleteLifecycleActionAnswer {
  __type?: "CompleteLifecycleActionAnswer";
}

export namespace CompleteLifecycleActionAnswer {
  export const filterSensitiveLog = (
    obj: CompleteLifecycleActionAnswer
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CompleteLifecycleActionAnswer =>
    __isa(o, "CompleteLifecycleActionAnswer");
}

export interface CompleteLifecycleActionType {
  __type?: "CompleteLifecycleActionType";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The action for the group to take. This parameter can be either <code>CONTINUE</code>
   *             or <code>ABANDON</code>.</p>
   */
  LifecycleActionResult: string | undefined;

  /**
   * <p>A universally unique identifier (UUID) that identifies a specific lifecycle action
   *             associated with an instance. Amazon EC2 Auto Scaling sends this token to the notification target you
   *             specified when you created the lifecycle hook.</p>
   */
  LifecycleActionToken?: string;

  /**
   * <p>The name of the lifecycle hook.</p>
   */
  LifecycleHookName: string | undefined;
}

export namespace CompleteLifecycleActionType {
  export const filterSensitiveLog = (
    obj: CompleteLifecycleActionType
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CompleteLifecycleActionType =>
    __isa(o, "CompleteLifecycleActionType");
}

export interface CreateAutoScalingGroupType {
  __type?: "CreateAutoScalingGroupType";
  /**
   * <p>The name of the Auto Scaling group. This name must be unique per Region per account.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>One or more Availability Zones for the group. This parameter is optional if you
   *             specify one or more subnets for <code>VPCZoneIdentifier</code>.</p>
   *         <p>Conditional: If your account supports EC2-Classic and VPC, this parameter is required
   *             to launch instances into EC2-Classic.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The amount of time, in seconds, after a scaling activity completes before another
   *             scaling activity can start. The default value is <code>300</code>.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/Cooldown.html">Scaling Cooldowns</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  DefaultCooldown?: number;

  /**
   * <p>The number of Amazon EC2 instances that the Auto Scaling group attempts to maintain. This
   *             number must be greater than or equal to the minimum size of the group and less than or
   *             equal to the maximum size of the group. If you do not specify a desired capacity, the
   *             default is the minimum size of the group.</p>
   */
  DesiredCapacity?: number;

  /**
   * <p>The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before checking the health status
   *             of an EC2 instance that has come into service. During this time, any health check
   *             failures for the instance are ignored. The default value is <code>0</code>.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html#health-check-grace-period">Health
   *                 Check Grace Period</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *         <p>Conditional: This parameter is required if you are adding an <code>ELB</code> health
   *             check.</p>
   */
  HealthCheckGracePeriod?: number;

  /**
   * <p>The service to use for the health checks. The valid values are <code>EC2</code> and
   *                 <code>ELB</code>. The default value is <code>EC2</code>. If you configure an Auto Scaling
   *             group to use ELB health checks, it considers the instance unhealthy if it fails either
   *             the EC2 status checks or the load balancer health checks.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html">Health Checks for Auto Scaling
   *                 Instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  HealthCheckType?: string;

  /**
   * <p>The ID of the instance used to create a launch configuration for the group.</p>
   *         <p>When you specify an ID of an instance, Amazon EC2 Auto Scaling creates a new launch configuration and
   *             associates it with the group. This launch configuration derives its attributes from the
   *             specified instance, except for the block device mapping.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-asg-from-instance.html">Create an Auto Scaling Group
   *                 Using an EC2 Instance</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *         <p>You must specify one of the following parameters in your request:
   *                 <code>LaunchConfigurationName</code>, <code>LaunchTemplate</code>,
   *                 <code>InstanceId</code>, or <code>MixedInstancesPolicy</code>.</p>
   */
  InstanceId?: string;

  /**
   * <p>The name of the launch configuration.</p>
   *
   *         <p>If you do not specify <code>LaunchConfigurationName</code>, you must specify one of
   *             the following parameters: <code>InstanceId</code>, <code>LaunchTemplate</code>, or
   *                 <code>MixedInstancesPolicy</code>.</p>
   */
  LaunchConfigurationName?: string;

  /**
   * <p>The launch template to use to launch instances.</p>
   *
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_LaunchTemplateSpecification.html">LaunchTemplateSpecification</a> in the <i>Amazon EC2 Auto Scaling API
   *                 Reference</i>.</p>
   *         <p>If you do not specify <code>LaunchTemplate</code>, you must specify one of the
   *             following parameters: <code>InstanceId</code>, <code>LaunchConfigurationName</code>, or
   *                 <code>MixedInstancesPolicy</code>.</p>
   */
  LaunchTemplate?: LaunchTemplateSpecification;

  /**
   * <p>One or more lifecycle hooks.</p>
   */
  LifecycleHookSpecificationList?: LifecycleHookSpecification[];

  /**
   * <p>A list of Classic Load Balancers associated with this Auto Scaling group. For Application Load
   *             Balancers and Network Load Balancers, specify a list of target groups using the
   *                 <code>TargetGroupARNs</code> property instead.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Using a Load Balancer
   *                 with an Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  LoadBalancerNames?: string[];

  /**
   * <p>The maximum amount of time, in seconds, that an instance can be in service.</p>
   *         <p>Valid Range: Minimum value of 604800.</p>
   */
  MaxInstanceLifetime?: number;

  /**
   * <p>The maximum size of the group.</p>
   */
  MaxSize: number | undefined;

  /**
   * <p>The minimum size of the group.</p>
   */
  MinSize: number | undefined;

  /**
   * <p>An embedded object that specifies a mixed instances policy. The required parameters
   *             must be specified. If optional parameters are unspecified, their default values are
   *             used.</p>
   *         <p>The policy includes parameters that not only define the distribution of On-Demand
   *             Instances and Spot Instances, the maximum price to pay for Spot Instances, and how the
   *             Auto Scaling group allocates instance types to fulfill On-Demand and Spot capacity, but
   *             also the parameters that specify the instance configuration information—the launch
   *             template and instance types.</p>
   *
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_MixedInstancesPolicy.html">MixedInstancesPolicy</a> in the <i>Amazon EC2 Auto Scaling API
   *                 Reference</i> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-purchase-options.html">Auto Scaling Groups with
   *                 Multiple Instance Types and Purchase Options</a> in the <i>Amazon EC2
   *                 Auto Scaling User Guide</i>.</p>
   *         <p>You must specify one of the following parameters in your request:
   *                 <code>LaunchConfigurationName</code>, <code>LaunchTemplate</code>,
   *                 <code>InstanceId</code>, or <code>MixedInstancesPolicy</code>.</p>
   */
  MixedInstancesPolicy?: MixedInstancesPolicy;

  /**
   * <p>Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling
   *             when scaling in.</p>
   *         <p>For more information about preventing instances from terminating on scale in, see
   *                 <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html#instance-protection">Instance Protection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  NewInstancesProtectedFromScaleIn?: boolean;

  /**
   * <p>The name of the placement group into which to launch your instances, if any. A
   *             placement group is a logical grouping of instances within a single Availability Zone.
   *             You cannot specify multiple Availability Zones and a placement group. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement Groups</a> in the
   *                 <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  PlacementGroup?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to
   *             call other AWS services on your behalf. By default, Amazon EC2 Auto Scaling uses a service-linked role
   *             named AWSServiceRoleForAutoScaling, which it creates if it does not exist. For more
   *             information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-service-linked-role.html">Service-Linked
   *                 Roles</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  ServiceLinkedRoleARN?: string;

  /**
   * <p>One or more tags.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-tagging.html">Tagging Auto Scaling Groups and
   *                 Instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  Tags?: Tag[];

  /**
   * <p>The Amazon Resource Names (ARN) of the target groups to associate with the Auto Scaling group.
   *             Instances are registered as targets in a target group, and traffic is routed to the
   *             target group.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Using a Load Balancer
   *                 with an Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  TargetGroupARNs?: string[];

  /**
   * <p>One or more termination policies used to select the instance to terminate. These
   *             policies are executed in the order that they are listed.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html">Controlling Which
   *                 Instances Auto Scaling Terminates During Scale In</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  TerminationPolicies?: string[];

  /**
   * <p>A comma-separated list of subnet IDs for your virtual private cloud (VPC).</p>
   *         <p>If you specify <code>VPCZoneIdentifier</code> with <code>AvailabilityZones</code>, the
   *             subnets that you specify for this parameter must reside in those Availability
   *             Zones.</p>
   *         <p>Conditional: If your account supports EC2-Classic and VPC, this parameter is required
   *             to launch instances into a VPC.</p>
   */
  VPCZoneIdentifier?: string;
}

export namespace CreateAutoScalingGroupType {
  export const filterSensitiveLog = (obj: CreateAutoScalingGroupType): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateAutoScalingGroupType =>
    __isa(o, "CreateAutoScalingGroupType");
}

export interface CreateLaunchConfigurationType {
  __type?: "CreateLaunchConfigurationType";
  /**
   * <p>For Auto Scaling groups that are running in a virtual private cloud (VPC), specifies whether
   *             to assign a public IP address to the group's instances. If you specify
   *             <code>true</code>, each instance in the Auto Scaling group receives a unique public IP address.
   *             For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-in-vpc.html">Launching Auto Scaling Instances in a
   *                 VPC</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *         <p>If you specify this parameter, you must specify at least one subnet for
   *                 <code>VPCZoneIdentifier</code> when you create your group.</p>
   *         <note>
   *             <p>If the instance is launched into a default subnet, the default is to assign a
   *                 public IP address, unless you disabled the option to assign a public IP address on
   *                 the subnet. If the instance is launched into a nondefault subnet, the default is not
   *                 to assign a public IP address, unless you enabled the option to assign a public IP
   *                 address on the subnet.</p>
   *         </note>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * <p>A block device mapping, which specifies the block devices for the instance. You can
   *             specify virtual devices and EBS volumes. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html">Block Device
   *                 Mapping</a> in the <i>Amazon EC2 User Guide for Linux
   *                 Instances</i>.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * <p>The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the
   *                 <i>Amazon EC2 User Guide for Linux Instances</i> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-in-vpc.html#as-ClassicLink">Linking EC2-Classic
   *                 Instances to a VPC</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *         <p>This parameter can only be used if you are launching EC2-Classic instances.</p>
   */
  ClassicLinkVPCId?: string;

  /**
   * <p>The IDs of one or more security groups for the specified ClassicLink-enabled VPC. For
   *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the
   *                 <i>Amazon EC2 User Guide for Linux Instances</i> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-in-vpc.html#as-ClassicLink">Linking EC2-Classic
   *                 Instances to a VPC</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *         <p>If you specify the <code>ClassicLinkVPCId</code> parameter, you must specify this
   *             parameter.</p>
   */
  ClassicLinkVPCSecurityGroups?: string[];

  /**
   * <p>Specifies whether the launch configuration is optimized for EBS I/O
   *             (<code>true</code>) or not (<code>false</code>). The optimization provides dedicated
   *             throughput to Amazon EBS and an optimized configuration stack to provide optimal I/O
   *             performance. This optimization is not available with all instance types. Additional fees
   *             are incurred when you enable EBS optimization for an instance type that is not
   *             EBS-optimized by default. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSOptimized.html">Amazon EBS-Optimized
   *                 Instances</a> in the <i>Amazon EC2 User Guide for Linux
   *                 Instances</i>.</p>
   *         <p>The default value is <code>false</code>.</p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The name or the Amazon Resource Name (ARN) of the instance profile associated with the
   *             IAM role for the instance. The instance profile contains the IAM role.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/us-iam-role.html">IAM Role for Applications That Run
   *                 on Amazon EC2 Instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  IamInstanceProfile?: string;

  /**
   * <p>The ID of the Amazon Machine Image (AMI) that was assigned during registration. For
   *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/finding-an-ami.html">Finding an AMI</a> in the
   *                 <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   *         <p>If you do not specify <code>InstanceId</code>, you must specify
   *             <code>ImageId</code>.</p>
   */
  ImageId?: string;

  /**
   * <p>The ID of the instance to use to create the launch configuration. The new launch
   *             configuration derives attributes from the instance, except for the block device
   *             mapping.</p>
   *         <p>To create a launch configuration with a block device mapping or override any other
   *             instance attributes, specify them as part of the same request.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-lc-with-instanceID.html">Create a Launch
   *                 Configuration Using an EC2 Instance</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *         <p>If you do not specify <code>InstanceId</code>, you must specify both
   *                 <code>ImageId</code> and <code>InstanceType</code>.</p>
   */
  InstanceId?: string;

  /**
   * <p>Controls whether instances in this group are launched with detailed
   *             (<code>true</code>) or basic (<code>false</code>) monitoring.</p>
   *         <p>The default value is <code>true</code> (enabled).</p>
   *         <important>
   *             <p>When detailed monitoring is enabled, Amazon CloudWatch generates metrics every minute and
   *                 your account is charged a fee. When you disable detailed monitoring, CloudWatch generates
   *                 metrics every 5 minutes. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/latest/userguide/as-instance-monitoring.html#enable-as-instance-metrics">Configure Monitoring for Auto Scaling Instances</a> in the
   *                     <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *         </important>
   */
  InstanceMonitoring?: InstanceMonitoring;

  /**
   * <p>Specifies the instance type of the EC2 instance.</p>
   *         <p>For information about available instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#AvailableInstanceTypes">Available
   *                 Instance Types</a> in the <i>Amazon EC2 User Guide for Linux
   *                 Instances.</i>
   *          </p>
   *         <p>If you do not specify <code>InstanceId</code>, you must specify
   *                 <code>InstanceType</code>.</p>
   */
  InstanceType?: string;

  /**
   * <p>The ID of the kernel associated with the AMI.</p>
   */
  KernelId?: string;

  /**
   * <p>The name of the key pair. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Amazon EC2 Key Pairs</a> in the
   *                 <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  KeyName?: string;

  /**
   * <p>The name of the launch configuration. This name must be unique per Region per
   *             account.</p>
   */
  LaunchConfigurationName: string | undefined;

  /**
   * <p>The tenancy of the instance. An instance with <code>dedicated</code> tenancy runs on
   *             isolated, single-tenant hardware and can only be launched into a VPC.</p>
   *         <p>To launch dedicated instances into a shared tenancy VPC (a VPC with the instance
   *             placement tenancy attribute set to <code>default</code>), you must set the value of this
   *             parameter to <code>dedicated</code>.</p>
   *         <p>If you specify <code>PlacementTenancy</code>, you must specify at least one subnet for
   *                 <code>VPCZoneIdentifier</code> when you create your group.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-in-vpc.html#as-vpc-tenancy">Instance Placement
   *                 Tenancy</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *         <p>Valid Values: <code>default</code> | <code>dedicated</code>
   *         </p>
   */
  PlacementTenancy?: string;

  /**
   * <p>The ID of the RAM disk to select.</p>
   */
  RamdiskId?: string;

  /**
   * <p>A list that contains the security groups to assign to the instances in the Auto Scaling
   *             group.</p>
   *         <p>[EC2-VPC] Specify the security group IDs. For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html">Security Groups for Your VPC</a> in the <i>Amazon Virtual Private Cloud
   *                 User Guide</i>.</p>
   *         <p>[EC2-Classic] Specify either the security group names or the security group IDs. For
   *             more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-network-security.html">Amazon EC2 Security
   *                 Groups</a> in the <i>Amazon EC2 User Guide for Linux
   *             Instances</i>.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The maximum hourly price to be paid for any Spot Instance launched to fulfill the
   *             request. Spot Instances are launched when the price you specify exceeds the current Spot
   *             price. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-launch-spot-instances.html">Launching Spot
   *                 Instances in Your Auto Scaling Group</a> in the
   *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *         <note>
   *             <p>When you change your maximum price by creating a new launch configuration, running
   *                 instances will continue to run as long as the maximum price for those running
   *                 instances is higher than the current Spot price.</p>
   *         </note>
   */
  SpotPrice?: string;

  /**
   * <p>The Base64-encoded user data to make available to the launched EC2 instances. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance Metadata and User
   *                 Data</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  UserData?: string;
}

export namespace CreateLaunchConfigurationType {
  export const filterSensitiveLog = (
    obj: CreateLaunchConfigurationType
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateLaunchConfigurationType =>
    __isa(o, "CreateLaunchConfigurationType");
}

export interface CreateOrUpdateTagsType {
  __type?: "CreateOrUpdateTagsType";
  /**
   * <p>One or more tags.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace CreateOrUpdateTagsType {
  export const filterSensitiveLog = (obj: CreateOrUpdateTagsType): any => ({
    ...obj
  });
  export const isa = (o: any): o is CreateOrUpdateTagsType =>
    __isa(o, "CreateOrUpdateTagsType");
}

/**
 * <p>Represents a CloudWatch metric of your choosing for a target tracking scaling policy to use
 *             with Amazon EC2 Auto Scaling.</p>
 *         <p>To create your customized metric specification:</p>
 *         <ul>
 *             <li>
 *                 <p>Add values for each required parameter from CloudWatch. You can use an existing
 *                     metric, or a new metric that you create. To use your own metric, you must first
 *                     publish the metric to CloudWatch. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/publishingMetrics.html">Publish
 *                         Custom Metrics</a> in the <i>Amazon CloudWatch User
 *                     Guide</i>.</p>
 *             </li>
 *             <li>
 *                 <p>Choose a metric that changes proportionally with capacity. The value of the
 *                     metric should increase or decrease in inverse proportion to the number of
 *                     capacity units. That is, the value of the metric should decrease when capacity
 *                     increases.</p>
 *             </li>
 *          </ul>
 *         <p>For more information about CloudWatch, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html">Amazon CloudWatch
 *                 Concepts</a>.</p>
 */
export interface CustomizedMetricSpecification {
  __type?: "CustomizedMetricSpecification";
  /**
   * <p>The dimensions of the metric.</p>
   *         <p>Conditional: If you published your metric with dimensions, you must specify the same
   *             dimensions in your scaling policy.</p>
   */
  Dimensions?: MetricDimension[];

  /**
   * <p>The name of the metric.</p>
   */
  MetricName: string | undefined;

  /**
   * <p>The namespace of the metric.</p>
   */
  Namespace: string | undefined;

  /**
   * <p>The statistic of the metric.</p>
   */
  Statistic: MetricStatistic | string | undefined;

  /**
   * <p>The unit of the metric.</p>
   */
  Unit?: string;
}

export namespace CustomizedMetricSpecification {
  export const filterSensitiveLog = (
    obj: CustomizedMetricSpecification
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is CustomizedMetricSpecification =>
    __isa(o, "CustomizedMetricSpecification");
}

export interface DeleteAutoScalingGroupType {
  __type?: "DeleteAutoScalingGroupType";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>Specifies that the group is to be deleted along with all instances associated with the
   *             group, without waiting for all instances to be terminated. This parameter also deletes
   *             any lifecycle actions associated with the group.</p>
   */
  ForceDelete?: boolean;
}

export namespace DeleteAutoScalingGroupType {
  export const filterSensitiveLog = (obj: DeleteAutoScalingGroupType): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteAutoScalingGroupType =>
    __isa(o, "DeleteAutoScalingGroupType");
}

export interface DeleteLifecycleHookAnswer {
  __type?: "DeleteLifecycleHookAnswer";
}

export namespace DeleteLifecycleHookAnswer {
  export const filterSensitiveLog = (obj: DeleteLifecycleHookAnswer): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteLifecycleHookAnswer =>
    __isa(o, "DeleteLifecycleHookAnswer");
}

export interface DeleteLifecycleHookType {
  __type?: "DeleteLifecycleHookType";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The name of the lifecycle hook.</p>
   */
  LifecycleHookName: string | undefined;
}

export namespace DeleteLifecycleHookType {
  export const filterSensitiveLog = (obj: DeleteLifecycleHookType): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteLifecycleHookType =>
    __isa(o, "DeleteLifecycleHookType");
}

export interface DeleteNotificationConfigurationType {
  __type?: "DeleteNotificationConfigurationType";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (Amazon SNS)
   *             topic.</p>
   */
  TopicARN: string | undefined;
}

export namespace DeleteNotificationConfigurationType {
  export const filterSensitiveLog = (
    obj: DeleteNotificationConfigurationType
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteNotificationConfigurationType =>
    __isa(o, "DeleteNotificationConfigurationType");
}

export interface DeletePolicyType {
  __type?: "DeletePolicyType";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName?: string;

  /**
   * <p>The name or Amazon Resource Name (ARN) of the policy.</p>
   */
  PolicyName: string | undefined;
}

export namespace DeletePolicyType {
  export const filterSensitiveLog = (obj: DeletePolicyType): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeletePolicyType =>
    __isa(o, "DeletePolicyType");
}

export interface DeleteScheduledActionType {
  __type?: "DeleteScheduledActionType";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The name of the action to delete.</p>
   */
  ScheduledActionName: string | undefined;
}

export namespace DeleteScheduledActionType {
  export const filterSensitiveLog = (obj: DeleteScheduledActionType): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteScheduledActionType =>
    __isa(o, "DeleteScheduledActionType");
}

export interface DeleteTagsType {
  __type?: "DeleteTagsType";
  /**
   * <p>One or more tags.</p>
   */
  Tags: Tag[] | undefined;
}

export namespace DeleteTagsType {
  export const filterSensitiveLog = (obj: DeleteTagsType): any => ({
    ...obj
  });
  export const isa = (o: any): o is DeleteTagsType =>
    __isa(o, "DeleteTagsType");
}

export interface DescribeAccountLimitsAnswer {
  __type?: "DescribeAccountLimitsAnswer";
  /**
   * <p>The maximum number of groups allowed for your AWS account. The default limit is 200
   *             per AWS Region.</p>
   */
  MaxNumberOfAutoScalingGroups?: number;

  /**
   * <p>The maximum number of launch configurations allowed for your AWS account. The default
   *             limit is 200 per AWS Region.</p>
   */
  MaxNumberOfLaunchConfigurations?: number;

  /**
   * <p>The current number of groups for your AWS account.</p>
   */
  NumberOfAutoScalingGroups?: number;

  /**
   * <p>The current number of launch configurations for your AWS account.</p>
   */
  NumberOfLaunchConfigurations?: number;
}

export namespace DescribeAccountLimitsAnswer {
  export const filterSensitiveLog = (
    obj: DescribeAccountLimitsAnswer
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAccountLimitsAnswer =>
    __isa(o, "DescribeAccountLimitsAnswer");
}

export interface DescribeAdjustmentTypesAnswer {
  __type?: "DescribeAdjustmentTypesAnswer";
  /**
   * <p>The policy adjustment types.</p>
   */
  AdjustmentTypes?: AdjustmentType[];
}

export namespace DescribeAdjustmentTypesAnswer {
  export const filterSensitiveLog = (
    obj: DescribeAdjustmentTypesAnswer
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAdjustmentTypesAnswer =>
    __isa(o, "DescribeAdjustmentTypesAnswer");
}

export interface DescribeAutoScalingInstancesType {
  __type?: "DescribeAutoScalingInstancesType";
  /**
   * <p>The IDs of the instances. You can specify up to <code>MaxRecords</code> IDs. If you
   *             omit this parameter, all Auto Scaling instances are described. If you specify an ID that does
   *             not exist, it is ignored with no error.</p>
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

export namespace DescribeAutoScalingInstancesType {
  export const filterSensitiveLog = (
    obj: DescribeAutoScalingInstancesType
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeAutoScalingInstancesType =>
    __isa(o, "DescribeAutoScalingInstancesType");
}

export interface DescribeAutoScalingNotificationTypesAnswer {
  __type?: "DescribeAutoScalingNotificationTypesAnswer";
  /**
   * <p>The notification types.</p>
   */
  AutoScalingNotificationTypes?: string[];
}

export namespace DescribeAutoScalingNotificationTypesAnswer {
  export const filterSensitiveLog = (
    obj: DescribeAutoScalingNotificationTypesAnswer
  ): any => ({
    ...obj
  });
  export const isa = (
    o: any
  ): o is DescribeAutoScalingNotificationTypesAnswer =>
    __isa(o, "DescribeAutoScalingNotificationTypesAnswer");
}

export interface DescribeLifecycleHooksAnswer {
  __type?: "DescribeLifecycleHooksAnswer";
  /**
   * <p>The lifecycle hooks for the specified group.</p>
   */
  LifecycleHooks?: LifecycleHook[];
}

export namespace DescribeLifecycleHooksAnswer {
  export const filterSensitiveLog = (
    obj: DescribeLifecycleHooksAnswer
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeLifecycleHooksAnswer =>
    __isa(o, "DescribeLifecycleHooksAnswer");
}

export interface DescribeLifecycleHooksType {
  __type?: "DescribeLifecycleHooksType";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The names of one or more lifecycle hooks. If you omit this parameter, all lifecycle
   *             hooks are described.</p>
   */
  LifecycleHookNames?: string[];
}

export namespace DescribeLifecycleHooksType {
  export const filterSensitiveLog = (obj: DescribeLifecycleHooksType): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeLifecycleHooksType =>
    __isa(o, "DescribeLifecycleHooksType");
}

export interface DescribeLifecycleHookTypesAnswer {
  __type?: "DescribeLifecycleHookTypesAnswer";
  /**
   * <p>The lifecycle hook types.</p>
   */
  LifecycleHookTypes?: string[];
}

export namespace DescribeLifecycleHookTypesAnswer {
  export const filterSensitiveLog = (
    obj: DescribeLifecycleHookTypesAnswer
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeLifecycleHookTypesAnswer =>
    __isa(o, "DescribeLifecycleHookTypesAnswer");
}

export interface DescribeLoadBalancersRequest {
  __type?: "DescribeLoadBalancersRequest";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

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

export namespace DescribeLoadBalancersRequest {
  export const filterSensitiveLog = (
    obj: DescribeLoadBalancersRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeLoadBalancersRequest =>
    __isa(o, "DescribeLoadBalancersRequest");
}

export interface DescribeLoadBalancersResponse {
  __type?: "DescribeLoadBalancersResponse";
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

export namespace DescribeLoadBalancersResponse {
  export const filterSensitiveLog = (
    obj: DescribeLoadBalancersResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeLoadBalancersResponse =>
    __isa(o, "DescribeLoadBalancersResponse");
}

export interface DescribeLoadBalancerTargetGroupsRequest {
  __type?: "DescribeLoadBalancerTargetGroupsRequest";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

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

export namespace DescribeLoadBalancerTargetGroupsRequest {
  export const filterSensitiveLog = (
    obj: DescribeLoadBalancerTargetGroupsRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeLoadBalancerTargetGroupsRequest =>
    __isa(o, "DescribeLoadBalancerTargetGroupsRequest");
}

export interface DescribeLoadBalancerTargetGroupsResponse {
  __type?: "DescribeLoadBalancerTargetGroupsResponse";
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

export namespace DescribeLoadBalancerTargetGroupsResponse {
  export const filterSensitiveLog = (
    obj: DescribeLoadBalancerTargetGroupsResponse
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeLoadBalancerTargetGroupsResponse =>
    __isa(o, "DescribeLoadBalancerTargetGroupsResponse");
}

export interface DescribeMetricCollectionTypesAnswer {
  __type?: "DescribeMetricCollectionTypesAnswer";
  /**
   * <p>The granularities for the metrics.</p>
   */
  Granularities?: MetricGranularityType[];

  /**
   * <p>One or more metrics.</p>
   */
  Metrics?: MetricCollectionType[];
}

export namespace DescribeMetricCollectionTypesAnswer {
  export const filterSensitiveLog = (
    obj: DescribeMetricCollectionTypesAnswer
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeMetricCollectionTypesAnswer =>
    __isa(o, "DescribeMetricCollectionTypesAnswer");
}

export interface DescribeNotificationConfigurationsAnswer {
  __type?: "DescribeNotificationConfigurationsAnswer";
  /**
   * <p>A string that indicates that the response contains more items than can be returned in
   *             a single response. To receive additional items, specify this string for the
   *                 <code>NextToken</code> value when requesting the next set of items. This value is
   *             null when there are no more items to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The notification configurations.</p>
   */
  NotificationConfigurations: NotificationConfiguration[] | undefined;
}

export namespace DescribeNotificationConfigurationsAnswer {
  export const filterSensitiveLog = (
    obj: DescribeNotificationConfigurationsAnswer
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeNotificationConfigurationsAnswer =>
    __isa(o, "DescribeNotificationConfigurationsAnswer");
}

export interface DescribeNotificationConfigurationsType {
  __type?: "DescribeNotificationConfigurationsType";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupNames?: string[];

  /**
   * <p>The maximum number of items to return with this call. The default value is
   *                 <code>50</code> and the maximum value is <code>100</code>.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a
   *             previous call.)</p>
   */
  NextToken?: string;
}

export namespace DescribeNotificationConfigurationsType {
  export const filterSensitiveLog = (
    obj: DescribeNotificationConfigurationsType
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeNotificationConfigurationsType =>
    __isa(o, "DescribeNotificationConfigurationsType");
}

export interface DescribePoliciesType {
  __type?: "DescribePoliciesType";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName?: string;

  /**
   * <p>The maximum number of items to be returned with each call. The default value is
   *                 <code>50</code> and the maximum value is <code>100</code>.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a
   *             previous call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The names of one or more policies. If you omit this parameter, all policies are
   *             described. If a group name is provided, the results are limited to that group. This list
   *             is limited to 50 items. If you specify an unknown policy name, it is ignored with no
   *             error.</p>
   */
  PolicyNames?: string[];

  /**
   * <p>One or more policy types. The valid values are <code>SimpleScaling</code>,
   *                 <code>StepScaling</code>, and <code>TargetTrackingScaling</code>.</p>
   */
  PolicyTypes?: string[];
}

export namespace DescribePoliciesType {
  export const filterSensitiveLog = (obj: DescribePoliciesType): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribePoliciesType =>
    __isa(o, "DescribePoliciesType");
}

export interface DescribeScalingActivitiesType {
  __type?: "DescribeScalingActivitiesType";
  /**
   * <p>The activity IDs of the desired scaling activities. You can specify up to 50 IDs. If
   *             you omit this parameter, all activities for the past six weeks are described. If unknown
   *             activities are requested, they are ignored with no error. If you specify an Auto Scaling group,
   *             the results are limited to that group.</p>
   */
  ActivityIds?: string[];

  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName?: string;

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

export namespace DescribeScalingActivitiesType {
  export const filterSensitiveLog = (
    obj: DescribeScalingActivitiesType
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeScalingActivitiesType =>
    __isa(o, "DescribeScalingActivitiesType");
}

export interface DescribeScheduledActionsType {
  __type?: "DescribeScheduledActionsType";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName?: string;

  /**
   * <p>The latest scheduled start time to return. If scheduled action names are provided,
   *             this parameter is ignored.</p>
   */
  EndTime?: Date;

  /**
   * <p>The maximum number of items to return with this call. The default value is
   *                 <code>50</code> and the maximum value is <code>100</code>.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a
   *             previous call.)</p>
   */
  NextToken?: string;

  /**
   * <p>The names of one or more scheduled actions. You can specify up to 50 actions. If you
   *             omit this parameter, all scheduled actions are described. If you specify an unknown
   *             scheduled action, it is ignored with no error.</p>
   */
  ScheduledActionNames?: string[];

  /**
   * <p>The earliest scheduled start time to return. If scheduled action names are provided,
   *             this parameter is ignored.</p>
   */
  StartTime?: Date;
}

export namespace DescribeScheduledActionsType {
  export const filterSensitiveLog = (
    obj: DescribeScheduledActionsType
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeScheduledActionsType =>
    __isa(o, "DescribeScheduledActionsType");
}

export interface DescribeTagsType {
  __type?: "DescribeTagsType";
  /**
   * <p>One or more filters to scope the tags to return. The maximum number of filters per
   *             filter type (for example, <code>auto-scaling-group</code>) is 1000.</p>
   */
  Filters?: Filter[];

  /**
   * <p>The maximum number of items to return with this call. The default value is
   *                 <code>50</code> and the maximum value is <code>100</code>.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a
   *             previous call.)</p>
   */
  NextToken?: string;
}

export namespace DescribeTagsType {
  export const filterSensitiveLog = (obj: DescribeTagsType): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTagsType =>
    __isa(o, "DescribeTagsType");
}

export interface DescribeTerminationPolicyTypesAnswer {
  __type?: "DescribeTerminationPolicyTypesAnswer";
  /**
   * <p>The termination policies supported by Amazon EC2 Auto Scaling: <code>OldestInstance</code>,
   *                 <code>OldestLaunchConfiguration</code>, <code>NewestInstance</code>,
   *                 <code>ClosestToNextInstanceHour</code>, <code>Default</code>,
   *                 <code>OldestLaunchTemplate</code>, and <code>AllocationStrategy</code>.</p>
   */
  TerminationPolicyTypes?: string[];
}

export namespace DescribeTerminationPolicyTypesAnswer {
  export const filterSensitiveLog = (
    obj: DescribeTerminationPolicyTypesAnswer
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DescribeTerminationPolicyTypesAnswer =>
    __isa(o, "DescribeTerminationPolicyTypesAnswer");
}

export interface DetachInstancesAnswer {
  __type?: "DetachInstancesAnswer";
  /**
   * <p>The activities related to detaching the instances from the Auto Scaling group.</p>
   */
  Activities?: Activity[];
}

export namespace DetachInstancesAnswer {
  export const filterSensitiveLog = (obj: DetachInstancesAnswer): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetachInstancesAnswer =>
    __isa(o, "DetachInstancesAnswer");
}

export interface DetachInstancesQuery {
  __type?: "DetachInstancesQuery";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The IDs of the instances. You can specify up to 20 instances.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>Indicates whether the Auto Scaling group decrements the desired capacity value by the number
   *             of instances detached.</p>
   */
  ShouldDecrementDesiredCapacity: boolean | undefined;
}

export namespace DetachInstancesQuery {
  export const filterSensitiveLog = (obj: DetachInstancesQuery): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetachInstancesQuery =>
    __isa(o, "DetachInstancesQuery");
}

export interface DetachLoadBalancersResultType {
  __type?: "DetachLoadBalancersResultType";
}

export namespace DetachLoadBalancersResultType {
  export const filterSensitiveLog = (
    obj: DetachLoadBalancersResultType
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetachLoadBalancersResultType =>
    __isa(o, "DetachLoadBalancersResultType");
}

export interface DetachLoadBalancersType {
  __type?: "DetachLoadBalancersType";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The names of the load balancers. You can specify up to 10 load balancers.</p>
   */
  LoadBalancerNames: string[] | undefined;
}

export namespace DetachLoadBalancersType {
  export const filterSensitiveLog = (obj: DetachLoadBalancersType): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetachLoadBalancersType =>
    __isa(o, "DetachLoadBalancersType");
}

export interface DetachLoadBalancerTargetGroupsResultType {
  __type?: "DetachLoadBalancerTargetGroupsResultType";
}

export namespace DetachLoadBalancerTargetGroupsResultType {
  export const filterSensitiveLog = (
    obj: DetachLoadBalancerTargetGroupsResultType
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetachLoadBalancerTargetGroupsResultType =>
    __isa(o, "DetachLoadBalancerTargetGroupsResultType");
}

export interface DetachLoadBalancerTargetGroupsType {
  __type?: "DetachLoadBalancerTargetGroupsType";
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

export namespace DetachLoadBalancerTargetGroupsType {
  export const filterSensitiveLog = (
    obj: DetachLoadBalancerTargetGroupsType
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DetachLoadBalancerTargetGroupsType =>
    __isa(o, "DetachLoadBalancerTargetGroupsType");
}

export interface DisableMetricsCollectionQuery {
  __type?: "DisableMetricsCollectionQuery";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>One or more of the following metrics. If you omit this parameter, all metrics are
   *             disabled.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>GroupMinSize</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>GroupMaxSize</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>GroupDesiredCapacity</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>GroupInServiceInstances</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>GroupPendingInstances</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>GroupStandbyInstances</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>GroupTerminatingInstances</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>GroupTotalInstances</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  Metrics?: string[];
}

export namespace DisableMetricsCollectionQuery {
  export const filterSensitiveLog = (
    obj: DisableMetricsCollectionQuery
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is DisableMetricsCollectionQuery =>
    __isa(o, "DisableMetricsCollectionQuery");
}

/**
 * <p>Describes an Amazon EBS volume. Used in combination with <a>BlockDeviceMapping</a>.</p>
 */
export interface Ebs {
  __type?: "Ebs";
  /**
   * <p>Indicates whether the volume is deleted on instance termination. For Amazon EC2 Auto Scaling, the
   *             default value is <code>true</code>.</p>
   */
  DeleteOnTermination?: boolean;

  /**
   * <p>Specifies whether the volume should be encrypted. Encrypted EBS volumes can only be
   *             attached to instances that support Amazon EBS encryption. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#EBSEncryption_supported_instances">Supported Instance Types</a>. If your AMI uses encrypted volumes, you can also
   *             only launch it on supported instance types.</p>
   *         <note>
   *             <p>If you are creating a volume from a snapshot, you cannot specify an encryption
   *                 value. Volumes that are created from encrypted snapshots are automatically
   *                 encrypted, and volumes that are created from unencrypted snapshots are automatically
   *                 unencrypted. By default, encrypted snapshots use the AWS managed CMK that is used
   *                 for EBS encryption, but you can specify a custom CMK when you create the snapshot.
   *                 The ability to encrypt a snapshot during copying also allows you to apply a new CMK
   *                 to an already-encrypted snapshot. Volumes restored from the
   *                 resulting copy are only accessible using the new CMK.</p>
   *             <p>Enabling <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html#encryption-by-default">encryption by default</a> results in all EBS volumes being encrypted with
   *                 the AWS managed CMK or a customer managed CMK, whether or not the snapshot was
   *                 encrypted.</p>
   *         </note>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AMIEncryption.html">Using Encryption with EBS-Backed
   *                 AMIs</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>
   *             and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/key-policy-requirements-EBS-encryption.html">Required
   *                 CMK Key Policy for Use with Encrypted Volumes</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  Encrypted?: boolean;

  /**
   * <p>The number of I/O operations per second (IOPS) to provision for the volume. The
   *             maximum ratio of IOPS to volume size (in GiB) is 50:1. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon EBS
   *                 Volume Types</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   *         <p>Conditional: This parameter is required when the volume type is <code>io1</code>. (Not
   *             used with <code>standard</code>, <code>gp2</code>, <code>st1</code>, or <code>sc1</code>
   *             volumes.) </p>
   */
  Iops?: number;

  /**
   * <p>The snapshot ID of the volume to use.</p>
   *         <p>Conditional: This parameter is optional if you specify a volume size. If you specify
   *             both <code>SnapshotId</code> and <code>VolumeSize</code>, <code>VolumeSize</code> must
   *             be equal or greater than the size of the snapshot.</p>
   */
  SnapshotId?: string;

  /**
   * <p>The volume size, in Gibibytes (GiB).</p>
   *         <p>This can be a number from 1-1,024 for <code>standard</code>, 4-16,384 for
   *                 <code>io1</code>, 1-16,384 for <code>gp2</code>, and 500-16,384 for <code>st1</code>
   *             and <code>sc1</code>. If you specify a snapshot, the volume size must be equal to or
   *             larger than the snapshot size.</p>
   *         <p>Default: If you create a volume from a snapshot and you don't specify a volume size,
   *             the default is the snapshot size.</p>
   *         <note>
   *             <p>At least one of VolumeSize or SnapshotId is required.</p>
   *         </note>
   */
  VolumeSize?: number;

  /**
   * <p>The volume type, which can be <code>standard</code> for Magnetic, <code>io1</code> for
   *             Provisioned IOPS SSD, <code>gp2</code> for General Purpose SSD, <code>st1</code> for
   *             Throughput Optimized HDD, or <code>sc1</code> for Cold HDD. For more information, see
   *                 <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumeTypes.html">Amazon
   *                 EBS Volume Types</a> in the <i>Amazon EC2 User Guide for Linux
   *                 Instances</i>.</p>
   *         <p>Valid Values: <code>standard</code> | <code>io1</code> | <code>gp2</code> |
   *                 <code>st1</code> | <code>sc1</code>
   *          </p>
   */
  VolumeType?: string;
}

export namespace Ebs {
  export const filterSensitiveLog = (obj: Ebs): any => ({
    ...obj
  });
  export const isa = (o: any): o is Ebs => __isa(o, "Ebs");
}

/**
 * <p>Describes an enabled metric.</p>
 */
export interface EnabledMetric {
  __type?: "EnabledMetric";
  /**
   * <p>The granularity of the metric. The only valid value is <code>1Minute</code>.</p>
   */
  Granularity?: string;

  /**
   * <p>One of the following metrics:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>GroupMinSize</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>GroupMaxSize</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>GroupDesiredCapacity</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>GroupInServiceInstances</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>GroupPendingInstances</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>GroupStandbyInstances</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>GroupTerminatingInstances</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>GroupTotalInstances</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  Metric?: string;
}

export namespace EnabledMetric {
  export const filterSensitiveLog = (obj: EnabledMetric): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnabledMetric => __isa(o, "EnabledMetric");
}

export interface EnableMetricsCollectionQuery {
  __type?: "EnableMetricsCollectionQuery";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The granularity to associate with the metrics to collect. The only valid value is
   *                 <code>1Minute</code>.</p>
   */
  Granularity: string | undefined;

  /**
   * <p>One or more of the following metrics. If you omit this parameter, all metrics are
   *             enabled.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>GroupMinSize</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>GroupMaxSize</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>GroupDesiredCapacity</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>GroupInServiceInstances</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>GroupPendingInstances</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>GroupStandbyInstances</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>GroupTerminatingInstances</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>GroupTotalInstances</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  Metrics?: string[];
}

export namespace EnableMetricsCollectionQuery {
  export const filterSensitiveLog = (
    obj: EnableMetricsCollectionQuery
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnableMetricsCollectionQuery =>
    __isa(o, "EnableMetricsCollectionQuery");
}

export interface EnterStandbyAnswer {
  __type?: "EnterStandbyAnswer";
  /**
   * <p>The activities related to moving instances into <code>Standby</code> mode.</p>
   */
  Activities?: Activity[];
}

export namespace EnterStandbyAnswer {
  export const filterSensitiveLog = (obj: EnterStandbyAnswer): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnterStandbyAnswer =>
    __isa(o, "EnterStandbyAnswer");
}

export interface EnterStandbyQuery {
  __type?: "EnterStandbyQuery";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The IDs of the instances. You can specify up to 20 instances.</p>
   */
  InstanceIds?: string[];

  /**
   * <p>Indicates whether to decrement the desired capacity of the Auto Scaling group by the number of
   *             instances moved to <code>Standby</code> mode.</p>
   */
  ShouldDecrementDesiredCapacity: boolean | undefined;
}

export namespace EnterStandbyQuery {
  export const filterSensitiveLog = (obj: EnterStandbyQuery): any => ({
    ...obj
  });
  export const isa = (o: any): o is EnterStandbyQuery =>
    __isa(o, "EnterStandbyQuery");
}

export interface ExecutePolicyType {
  __type?: "ExecutePolicyType";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName?: string;

  /**
   * <p>The breach threshold for the alarm.</p>
   *         <p>Conditional: This parameter is required if the policy type is <code>StepScaling</code>
   *             and not supported otherwise.</p>
   */
  BreachThreshold?: number;

  /**
   * <p>Indicates whether Amazon EC2 Auto Scaling waits for the cooldown period to complete before executing
   *             the policy.</p>
   *         <p>This parameter is not supported if the policy type is <code>StepScaling</code> or
   *                 <code>TargetTrackingScaling</code>.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/Cooldown.html">Scaling Cooldowns</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  HonorCooldown?: boolean;

  /**
   * <p>The metric value to compare to <code>BreachThreshold</code>. This enables you to
   *             execute a policy of type <code>StepScaling</code> and determine which step adjustment to
   *             use. For example, if the breach threshold is 50 and you want to use a step adjustment
   *             with a lower bound of 0 and an upper bound of 10, you can set the metric value to
   *             59.</p>
   *         <p>If you specify a metric value that doesn't correspond to a step adjustment for the
   *             policy, the call returns an error.</p>
   *         <p>Conditional: This parameter is required if the policy type is <code>StepScaling</code>
   *             and not supported otherwise.</p>
   */
  MetricValue?: number;

  /**
   * <p>The name or ARN of the policy.</p>
   */
  PolicyName: string | undefined;
}

export namespace ExecutePolicyType {
  export const filterSensitiveLog = (obj: ExecutePolicyType): any => ({
    ...obj
  });
  export const isa = (o: any): o is ExecutePolicyType =>
    __isa(o, "ExecutePolicyType");
}

export interface ExitStandbyAnswer {
  __type?: "ExitStandbyAnswer";
  /**
   * <p>The activities related to moving instances out of <code>Standby</code> mode.</p>
   */
  Activities?: Activity[];
}

export namespace ExitStandbyAnswer {
  export const filterSensitiveLog = (obj: ExitStandbyAnswer): any => ({
    ...obj
  });
  export const isa = (o: any): o is ExitStandbyAnswer =>
    __isa(o, "ExitStandbyAnswer");
}

export interface ExitStandbyQuery {
  __type?: "ExitStandbyQuery";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The IDs of the instances. You can specify up to 20 instances.</p>
   */
  InstanceIds?: string[];
}

export namespace ExitStandbyQuery {
  export const filterSensitiveLog = (obj: ExitStandbyQuery): any => ({
    ...obj
  });
  export const isa = (o: any): o is ExitStandbyQuery =>
    __isa(o, "ExitStandbyQuery");
}

/**
 * <p>Describes a scheduled action that could not be created, updated, or deleted.</p>
 */
export interface FailedScheduledUpdateGroupActionRequest {
  __type?: "FailedScheduledUpdateGroupActionRequest";
  /**
   * <p>The error code.</p>
   */
  ErrorCode?: string;

  /**
   * <p>The error message accompanying the error code.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The name of the scheduled action.</p>
   */
  ScheduledActionName: string | undefined;
}

export namespace FailedScheduledUpdateGroupActionRequest {
  export const filterSensitiveLog = (
    obj: FailedScheduledUpdateGroupActionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is FailedScheduledUpdateGroupActionRequest =>
    __isa(o, "FailedScheduledUpdateGroupActionRequest");
}

/**
 * <p>Describes a filter.</p>
 */
export interface Filter {
  __type?: "Filter";
  /**
   * <p>The name of the filter. The valid values are: <code>"auto-scaling-group"</code>,
   *                 <code>"key"</code>, <code>"value"</code>, and
   *             <code>"propagate-at-launch"</code>.</p>
   */
  Name?: string;

  /**
   * <p>The value of the filter.</p>
   */
  Values?: string[];
}

export namespace Filter {
  export const filterSensitiveLog = (obj: Filter): any => ({
    ...obj
  });
  export const isa = (o: any): o is Filter => __isa(o, "Filter");
}

/**
 * <p>Describes an EC2 instance.</p>
 */
export interface Instance {
  __type?: "Instance";
  /**
   * <p>The Availability Zone in which the instance is running.</p>
   */
  AvailabilityZone: string | undefined;

  /**
   * <p>The last reported health status of the instance. "Healthy" means that the instance is
   *             healthy and should remain in service. "Unhealthy" means that the instance is unhealthy
   *             and that Amazon EC2 Auto Scaling should terminate and replace it.</p>
   */
  HealthStatus: string | undefined;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>The instance type of the EC2 instance.</p>
   */
  InstanceType?: string;

  /**
   * <p>The launch configuration associated with the instance.</p>
   */
  LaunchConfigurationName?: string;

  /**
   * <p>The launch template for the instance.</p>
   */
  LaunchTemplate?: LaunchTemplateSpecification;

  /**
   * <p>A description of the current lifecycle state. The <code>Quarantined</code> state is
   *             not used.</p>
   */
  LifecycleState: LifecycleState | string | undefined;

  /**
   * <p>Indicates whether the instance is protected from termination by Amazon EC2 Auto Scaling when scaling
   *             in.</p>
   */
  ProtectedFromScaleIn: boolean | undefined;

  /**
   * <p>The number of capacity units contributed by the instance based on its instance type.</p>
   *         <p>Valid Range: Minimum value of 1. Maximum value of 999.</p>
   */
  WeightedCapacity?: string;
}

export namespace Instance {
  export const filterSensitiveLog = (obj: Instance): any => ({
    ...obj
  });
  export const isa = (o: any): o is Instance => __isa(o, "Instance");
}

/**
 * <p>Describes whether detailed monitoring is enabled for the Auto Scaling instances.</p>
 */
export interface InstanceMonitoring {
  __type?: "InstanceMonitoring";
  /**
   * <p>If <code>true</code>, detailed monitoring is enabled. Otherwise, basic monitoring is
   *             enabled.</p>
   */
  Enabled?: boolean;
}

export namespace InstanceMonitoring {
  export const filterSensitiveLog = (obj: InstanceMonitoring): any => ({
    ...obj
  });
  export const isa = (o: any): o is InstanceMonitoring =>
    __isa(o, "InstanceMonitoring");
}

/**
 * <p>Describes an instances distribution for an Auto Scaling group with <a>MixedInstancesPolicy</a>.</p>
 *         <p>The instances distribution specifies the distribution of On-Demand Instances and Spot
 *             Instances, the maximum price to pay for Spot Instances, and how the Auto Scaling group
 *             allocates instance types to fulfill On-Demand and Spot capacity.</p>
 *         <p>When you update <code>SpotAllocationStrategy</code>, <code>SpotInstancePools</code>,
 *             or <code>SpotMaxPrice</code>, this update action does not deploy any changes across the
 *             running Amazon EC2 instances in the group. Your existing Spot Instances continue to run
 *             as long as the maximum price for those instances is higher than the current Spot price.
 *             When scale out occurs, Amazon EC2 Auto Scaling launches instances based on the new
 *             settings. When scale in occurs, Amazon EC2 Auto Scaling terminates instances according
 *             to the group's termination policies.</p>
 */
export interface InstancesDistribution {
  __type?: "InstancesDistribution";
  /**
   * <p>Indicates how to allocate instance types to fulfill On-Demand capacity.</p>
   *         <p>The only valid value is <code>prioritized</code>, which is also the default value.
   *             This strategy uses the order of instance type overrides for the <a>LaunchTemplate</a> to define the launch priority of each instance type. The
   *             first instance type in the array is prioritized higher than the last. If all your
   *             On-Demand capacity cannot be fulfilled using your highest priority instance, then the
   *             Auto Scaling groups launches the remaining capacity using the second priority instance
   *             type, and so on.</p>
   */
  OnDemandAllocationStrategy?: string;

  /**
   * <p>The minimum amount of the Auto Scaling group's capacity that must be fulfilled by
   *             On-Demand Instances. This base portion is provisioned first as your group scales.</p>
   *         <p>Default if not set is 0. If you leave it set to 0, On-Demand Instances are launched as
   *             a percentage of the Auto Scaling group's desired capacity, per the
   *                 <code>OnDemandPercentageAboveBaseCapacity</code> setting.</p>
   *         <note>
   *             <p>An update to this setting means a gradual replacement of instances to maintain the
   *                 specified number of On-Demand Instances for your base capacity. When replacing
   *                 instances, Amazon EC2 Auto Scaling launches new instances before terminating the old
   *                 ones.</p>
   *         </note>
   */
  OnDemandBaseCapacity?: number;

  /**
   * <p>Controls the percentages of On-Demand Instances and Spot Instances for your additional
   *             capacity beyond <code>OnDemandBaseCapacity</code>.</p>
   *         <p>Default if not set is 100. If you leave it set to 100, the percentages are 100% for
   *             On-Demand Instances and 0% for Spot Instances.</p>
   *         <note>
   *             <p>An update to this setting means a gradual replacement of instances to maintain the
   *                 percentage of On-Demand Instances for your additional capacity above the base
   *                 capacity. When replacing instances, Amazon EC2 Auto Scaling launches new instances
   *                 before terminating the old ones.</p>
   *         </note>
   *         <p>Valid Range: Minimum value of 0. Maximum value of 100.</p>
   */
  OnDemandPercentageAboveBaseCapacity?: number;

  /**
   * <p>Indicates how to allocate instances across Spot Instance pools.</p>
   *         <p>If the allocation strategy is <code>lowest-price</code>, the Auto Scaling group
   *             launches instances using the Spot pools with the lowest price, and evenly allocates your
   *             instances across the number of Spot pools that you specify. If the allocation strategy
   *             is <code>capacity-optimized</code>, the Auto Scaling group launches instances using Spot
   *             pools that are optimally chosen based on the available Spot capacity.</p>
   *         <p>The default Spot allocation strategy for calls that you make through the API, the AWS
   *             CLI, or the AWS SDKs is <code>lowest-price</code>. The default Spot allocation strategy
   *             for the AWS Management Console is <code>capacity-optimized</code>.</p>
   *         <p>Valid values: <code>lowest-price</code> | <code>capacity-optimized</code>
   *         </p>
   */
  SpotAllocationStrategy?: string;

  /**
   * <p>The number of Spot Instance pools across which to allocate your Spot Instances. The
   *             Spot pools are determined from the different instance types in the Overrides array of
   *                 <a>LaunchTemplate</a>. Default if not set is 2.</p>
   *         <p>Used only when the Spot allocation strategy is <code>lowest-price</code>.</p>
   *         <p>Valid Range: Minimum value of 1. Maximum value of 20.</p>
   */
  SpotInstancePools?: number;

  /**
   * <p>The maximum price per unit hour that you are willing to pay for a Spot Instance. If
   *             you leave the value of this parameter blank (which is the default), the maximum Spot
   *             price is set at the On-Demand price.</p>
   *         <p>To remove a value that you previously set, include the parameter but leave the value
   *             blank.</p>
   */
  SpotMaxPrice?: string;
}

export namespace InstancesDistribution {
  export const filterSensitiveLog = (obj: InstancesDistribution): any => ({
    ...obj
  });
  export const isa = (o: any): o is InstancesDistribution =>
    __isa(o, "InstancesDistribution");
}

/**
 * <p>The <code>NextToken</code> value is not valid.</p>
 */
export interface InvalidNextToken extends __SmithyException, $MetadataBearer {
  name: "InvalidNextToken";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace InvalidNextToken {
  export const filterSensitiveLog = (obj: InvalidNextToken): any => ({
    ...obj
  });
  export const isa = (o: any): o is InvalidNextToken =>
    __isa(o, "InvalidNextToken");
}

/**
 * <p>Describes a launch configuration.</p>
 */
export interface LaunchConfiguration {
  __type?: "LaunchConfiguration";
  /**
   * <p>For Auto Scaling groups that are running in a VPC, specifies whether to assign a public IP
   *             address to the group's instances.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-in-vpc.html">Launching Auto Scaling Instances in a
   *                 VPC</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  AssociatePublicIpAddress?: boolean;

  /**
   * <p>A block device mapping, which specifies the block devices for the instance.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/block-device-mapping-concepts.html">Block Device
   *                 Mapping</a> in the <i>Amazon EC2 User Guide for Linux
   *                 Instances</i>.</p>
   */
  BlockDeviceMappings?: BlockDeviceMapping[];

  /**
   * <p>The ID of a ClassicLink-enabled VPC to link your EC2-Classic instances to.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the
   *                 <i>Amazon EC2 User Guide for Linux Instances</i> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-in-vpc.html#as-ClassicLink">Linking EC2-Classic
   *                 Instances to a VPC</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  ClassicLinkVPCId?: string;

  /**
   * <p>The IDs of one or more security groups for the VPC specified in
   *                 <code>ClassicLinkVPCId</code>.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the
   *                 <i>Amazon EC2 User Guide for Linux Instances</i> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-in-vpc.html#as-ClassicLink">Linking EC2-Classic Instances to a VPC</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  ClassicLinkVPCSecurityGroups?: string[];

  /**
   * <p>The creation date and time for the launch configuration.</p>
   */
  CreatedTime: Date | undefined;

  /**
   * <p>Specifies whether the launch configuration is optimized for EBS I/O
   *             (<code>true</code>) or not (<code>false</code>).</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSOptimized.html">Amazon EBS-Optimized
   *                 Instances</a> in the <i>Amazon EC2 User Guide for Linux
   *                 Instances</i>.</p>
   */
  EbsOptimized?: boolean;

  /**
   * <p>The name or the Amazon Resource Name (ARN) of the instance profile associated with the
   *             IAM role for the instance. The instance profile contains the IAM role.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/us-iam-role.html">IAM Role for Applications That Run
   *                 on Amazon EC2 Instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  IamInstanceProfile?: string;

  /**
   * <p>The ID of the Amazon Machine Image (AMI) to use to launch your EC2 instances.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/finding-an-ami.html">Finding an AMI</a> in the
   *                 <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  ImageId: string | undefined;

  /**
   * <p>Controls whether instances in this group are launched with detailed
   *             (<code>true</code>) or basic (<code>false</code>) monitoring.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/latest/userguide/as-instance-monitoring.html#enable-as-instance-metrics">Configure Monitoring for Auto Scaling Instances</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  InstanceMonitoring?: InstanceMonitoring;

  /**
   * <p>The instance type for the instances.</p>
   *         <p>For information about available instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#AvailableInstanceTypes">Available
   *                 Instance Types</a> in the <i>Amazon EC2 User Guide for Linux
   *                 Instances.</i>
   *          </p>
   */
  InstanceType: string | undefined;

  /**
   * <p>The ID of the kernel associated with the AMI.</p>
   */
  KernelId?: string;

  /**
   * <p>The name of the key pair.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Amazon EC2 Key Pairs</a> in the
   *                 <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  KeyName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the launch configuration.</p>
   */
  LaunchConfigurationARN?: string;

  /**
   * <p>The name of the launch configuration.</p>
   */
  LaunchConfigurationName: string | undefined;

  /**
   * <p>The tenancy of the instance, either <code>default</code> or <code>dedicated</code>. An
   *             instance with <code>dedicated</code> tenancy runs on isolated, single-tenant hardware
   *             and can only be launched into a VPC.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-in-vpc.html#as-vpc-tenancy">Instance Placement
   *                 Tenancy</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  PlacementTenancy?: string;

  /**
   * <p>The ID of the RAM disk associated with the AMI.</p>
   */
  RamdiskId?: string;

  /**
   * <p>A list that contains the security groups to assign to the instances in the Auto Scaling
   *             group.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonVPC/latest/UserGuide/VPC_SecurityGroups.html">Security Groups for Your
   *                 VPC</a> in the <i>Amazon Virtual Private Cloud User
   *             Guide</i>.</p>
   */
  SecurityGroups?: string[];

  /**
   * <p>The maximum hourly price to be paid for any Spot Instance launched to fulfill the
   *             request. Spot Instances are launched when the price you specify exceeds the current Spot
   *             price.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-launch-spot-instances.html">Launching Spot
   *                 Instances in Your Auto Scaling Group</a> in the
   *             <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  SpotPrice?: string;

  /**
   * <p>The Base64-encoded user data to make available to the launched EC2 instances.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-metadata.html">Instance Metadata and User
   *                 Data</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  UserData?: string;
}

export namespace LaunchConfiguration {
  export const filterSensitiveLog = (obj: LaunchConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is LaunchConfiguration =>
    __isa(o, "LaunchConfiguration");
}

export interface LaunchConfigurationNamesType {
  __type?: "LaunchConfigurationNamesType";
  /**
   * <p>The launch configuration names. If you omit this parameter, all launch configurations
   *             are described.</p>
   */
  LaunchConfigurationNames?: string[];

  /**
   * <p>The maximum number of items to return with this call. The default value is
   *                 <code>50</code> and the maximum value is <code>100</code>.</p>
   */
  MaxRecords?: number;

  /**
   * <p>The token for the next set of items to return. (You received this token from a
   *             previous call.)</p>
   */
  NextToken?: string;
}

export namespace LaunchConfigurationNamesType {
  export const filterSensitiveLog = (
    obj: LaunchConfigurationNamesType
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is LaunchConfigurationNamesType =>
    __isa(o, "LaunchConfigurationNamesType");
}

export interface LaunchConfigurationNameType {
  __type?: "LaunchConfigurationNameType";
  /**
   * <p>The name of the launch configuration.</p>
   */
  LaunchConfigurationName: string | undefined;
}

export namespace LaunchConfigurationNameType {
  export const filterSensitiveLog = (
    obj: LaunchConfigurationNameType
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is LaunchConfigurationNameType =>
    __isa(o, "LaunchConfigurationNameType");
}

export interface LaunchConfigurationsType {
  __type?: "LaunchConfigurationsType";
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

export namespace LaunchConfigurationsType {
  export const filterSensitiveLog = (obj: LaunchConfigurationsType): any => ({
    ...obj
  });
  export const isa = (o: any): o is LaunchConfigurationsType =>
    __isa(o, "LaunchConfigurationsType");
}

/**
 * <p>Describes a launch template and overrides.</p>
 *         <p>The overrides are used to override the instance type specified by the launch template
 *             with multiple instance types that can be used to launch On-Demand Instances and Spot
 *             Instances.</p>
 *         <p>When you update the launch template or overrides, existing Amazon EC2 instances
 *             continue to run. When scale out occurs, Amazon EC2 Auto Scaling launches instances to
 *             match the new settings. When scale in occurs, Amazon EC2 Auto Scaling terminates
 *             instances according to the group's termination policies.</p>
 */
export interface LaunchTemplate {
  __type?: "LaunchTemplate";
  /**
   * <p>The launch template to use. You must specify either the launch template ID or launch
   *             template name in the request.</p>
   */
  LaunchTemplateSpecification?: LaunchTemplateSpecification;

  /**
   * <p>An optional setting. Any parameters that you specify override the same parameters in
   *             the launch template. Currently, the only supported override is instance type. You can
   *             specify between 1 and 20 instance types.</p>
   */
  Overrides?: LaunchTemplateOverrides[];
}

export namespace LaunchTemplate {
  export const filterSensitiveLog = (obj: LaunchTemplate): any => ({
    ...obj
  });
  export const isa = (o: any): o is LaunchTemplate =>
    __isa(o, "LaunchTemplate");
}

/**
 * <p>Describes an override for a launch template.</p>
 */
export interface LaunchTemplateOverrides {
  __type?: "LaunchTemplateOverrides";
  /**
   * <p>The instance type.</p>
   *         <p>For information about available instance types, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/instance-types.html#AvailableInstanceTypes">Available
   *                 Instance Types</a> in the <i>Amazon Elastic Compute Cloud User
   *                 Guide.</i>
   *         </p>
   */
  InstanceType?: string;

  /**
   * <p>The number of capacity units, which gives the instance type a proportional weight to
   *             other instance types. For example, larger instance types are generally weighted more
   *             than smaller instance types. These are the same units that you chose to set the desired
   *             capacity in terms of instances, or a performance attribute such as vCPUs, memory,
   *             or I/O.</p>
   *         <p>Valid Range: Minimum value of 1. Maximum value of 999.</p>
   */
  WeightedCapacity?: string;
}

export namespace LaunchTemplateOverrides {
  export const filterSensitiveLog = (obj: LaunchTemplateOverrides): any => ({
    ...obj
  });
  export const isa = (o: any): o is LaunchTemplateOverrides =>
    __isa(o, "LaunchTemplateOverrides");
}

/**
 * <p>Describes a launch template and the launch template version.</p>
 *         <p>The launch template that is specified must be configured for use with an Auto Scaling group.
 *             For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-launch-template.html">Creating a Launch
 *                 Template for an Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 */
export interface LaunchTemplateSpecification {
  __type?: "LaunchTemplateSpecification";
  /**
   * <p>The ID of the launch template. You must specify either a template ID or a template
   *             name.</p>
   */
  LaunchTemplateId?: string;

  /**
   * <p>The name of the launch template. You must specify either a template name or a template
   *             ID.</p>
   */
  LaunchTemplateName?: string;

  /**
   * <p>The version number, <code>$Latest</code>, or <code>$Default</code>. If the value is
   *                 <code>$Latest</code>, Amazon EC2 Auto Scaling selects the latest version of the launch template
   *             when launching instances. If the value is <code>$Default</code>, Amazon EC2 Auto Scaling selects the
   *             default version of the launch template when launching instances. The default value is
   *                 <code>$Default</code>.</p>
   */
  Version?: string;
}

export namespace LaunchTemplateSpecification {
  export const filterSensitiveLog = (
    obj: LaunchTemplateSpecification
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is LaunchTemplateSpecification =>
    __isa(o, "LaunchTemplateSpecification");
}

/**
 * <p>Describes a lifecycle hook, which tells Amazon EC2 Auto Scaling that you want to perform an action
 *             whenever it launches instances or terminates instances. Used in response to <a>DescribeLifecycleHooks</a>.</p>
 */
export interface LifecycleHook {
  __type?: "LifecycleHook";
  /**
   * <p>The name of the Auto Scaling group for the lifecycle hook.</p>
   */
  AutoScalingGroupName?: string;

  /**
   * <p>Defines the action the Auto Scaling group should take when the lifecycle hook timeout elapses
   *             or if an unexpected failure occurs. The possible values are <code>CONTINUE</code> and
   *                 <code>ABANDON</code>.</p>
   */
  DefaultResult?: string;

  /**
   * <p>The maximum time, in seconds, that an instance can remain in a
   *                 <code>Pending:Wait</code> or <code>Terminating:Wait</code> state. The maximum is
   *             172800 seconds (48 hours) or 100 times <code>HeartbeatTimeout</code>, whichever is
   *             smaller.</p>
   */
  GlobalTimeout?: number;

  /**
   * <p>The maximum time, in seconds, that can elapse before the lifecycle hook times out. If
   *             the lifecycle hook times out, Amazon EC2 Auto Scaling performs the action that you specified in the
   *                 <code>DefaultResult</code> parameter.</p>
   */
  HeartbeatTimeout?: number;

  /**
   * <p>The name of the lifecycle hook.</p>
   */
  LifecycleHookName?: string;

  /**
   * <p>The state of the EC2 instance to which to attach the lifecycle hook. The following are
   *             possible values:</p>
   *         <ul>
   *             <li>
   *                 <p>autoscaling:EC2_INSTANCE_LAUNCHING</p>
   *             </li>
   *             <li>
   *                 <p>autoscaling:EC2_INSTANCE_TERMINATING</p>
   *             </li>
   *          </ul>
   */
  LifecycleTransition?: string;

  /**
   * <p>Additional information that is included any time Amazon EC2 Auto Scaling sends a message to the
   *             notification target.</p>
   */
  NotificationMetadata?: string;

  /**
   * <p>The ARN of the target that Amazon EC2 Auto Scaling sends notifications to when an instance is in the
   *             transition state for the lifecycle hook. The notification target can be either an SQS
   *             queue or an SNS topic.</p>
   */
  NotificationTargetARN?: string;

  /**
   * <p>The ARN of the IAM role that allows the Auto Scaling group to publish to the specified
   *             notification target.</p>
   */
  RoleARN?: string;
}

export namespace LifecycleHook {
  export const filterSensitiveLog = (obj: LifecycleHook): any => ({
    ...obj
  });
  export const isa = (o: any): o is LifecycleHook => __isa(o, "LifecycleHook");
}

/**
 * <p>Describes a lifecycle hook. Used in combination with <a>CreateAutoScalingGroup</a>.</p>
 *         <p>A lifecycle hook tells Amazon EC2 Auto Scaling to perform an action on an instance when the instance
 *             launches (before it is put into service) or as the instance terminates (before it is
 *             fully terminated).</p>
 *         <p>This step is a part of the procedure for creating a lifecycle hook for an Auto Scaling
 *             group:</p>
 *         <ol>
 *             <li>
 *                 <p>(Optional) Create a Lambda function and a rule that allows CloudWatch Events to
 *                     invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates
 *                     instances.</p>
 *             </li>
 *             <li>
 *                 <p>(Optional) Create a notification target and an IAM role. The target can be
 *                     either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to
 *                     publish lifecycle notifications to the target.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>Create the lifecycle hook. Specify whether the hook is
 *                         used when the instances launch or terminate.</b>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>If you need more time, record the lifecycle action heartbeat to keep the
 *                     instance in a pending state using <a>RecordLifecycleActionHeartbeat</a>.</p>
 *             </li>
 *             <li>
 *                 <p>If you finish before the timeout period ends, complete the lifecycle action
 *                     using <a>CompleteLifecycleAction</a>.</p>
 *             </li>
 *          </ol>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling Lifecycle
 *                 Hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *         <p>You can view the lifecycle hooks for an Auto Scaling group using <a>DescribeLifecycleHooks</a>. You can modify an existing lifecycle hook or
 *             create new lifecycle hooks using <a>PutLifecycleHook</a>. If you are no
 *             longer using a lifecycle hook, you can delete it using <a>DeleteLifecycleHook</a>.</p>
 */
export interface LifecycleHookSpecification {
  __type?: "LifecycleHookSpecification";
  /**
   * <p>Defines the action the Auto Scaling group should take when the lifecycle hook timeout elapses
   *             or if an unexpected failure occurs. The valid values are <code>CONTINUE</code> and
   *                 <code>ABANDON</code>. The default value is <code>ABANDON</code>.</p>
   */
  DefaultResult?: string;

  /**
   * <p>The maximum time, in seconds, that can elapse before the lifecycle hook times
   *             out.</p>
   *         <p>If the lifecycle hook times out, Amazon EC2 Auto Scaling performs the action that you specified in
   *             the <code>DefaultResult</code> parameter. You can prevent the lifecycle hook from timing
   *             out by calling <a>RecordLifecycleActionHeartbeat</a>.</p>
   */
  HeartbeatTimeout?: number;

  /**
   * <p>The name of the lifecycle hook.</p>
   */
  LifecycleHookName: string | undefined;

  /**
   * <p>The state of the EC2 instance to which you want to attach the lifecycle hook. The
   *             valid values are:</p>
   *         <ul>
   *             <li>
   *                 <p>autoscaling:EC2_INSTANCE_LAUNCHING</p>
   *             </li>
   *             <li>
   *                 <p>autoscaling:EC2_INSTANCE_TERMINATING</p>
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
   * <p>The ARN of the target that Amazon EC2 Auto Scaling sends notifications to when an instance is in the
   *             transition state for the lifecycle hook. The notification target can be either an SQS
   *             queue or an SNS topic.</p>
   */
  NotificationTargetARN?: string;

  /**
   * <p>The ARN of the IAM role that allows the Auto Scaling group to publish to the specified
   *             notification target, for example, an Amazon SNS topic or an Amazon SQS queue.</p>
   */
  RoleARN?: string;
}

export namespace LifecycleHookSpecification {
  export const filterSensitiveLog = (obj: LifecycleHookSpecification): any => ({
    ...obj
  });
  export const isa = (o: any): o is LifecycleHookSpecification =>
    __isa(o, "LifecycleHookSpecification");
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
  TERMINATING_WAIT = "Terminating:Wait"
}

/**
 * <p>You have already reached a limit for your Amazon EC2 Auto Scaling resources (for example, Auto Scaling
 *             groups, launch configurations, or lifecycle hooks). For more information, see <a>DescribeAccountLimits</a>.</p>
 */
export interface LimitExceededFault extends __SmithyException, $MetadataBearer {
  name: "LimitExceededFault";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace LimitExceededFault {
  export const filterSensitiveLog = (obj: LimitExceededFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is LimitExceededFault =>
    __isa(o, "LimitExceededFault");
}

/**
 * <p>Describes the state of a Classic Load Balancer.</p>
 *         <p>If you specify a load balancer when creating the Auto Scaling group, the state of the load
 *             balancer is <code>InService</code>.</p>
 *         <p>If you attach a load balancer to an existing Auto Scaling group, the initial state is
 *                 <code>Adding</code>. The state transitions to <code>Added</code> after all instances
 *             in the group are registered with the load balancer. If Elastic Load Balancing health
 *             checks are enabled for the load balancer, the state transitions to
 *                 <code>InService</code> after at least one instance in the group passes the health
 *             check. If EC2 health checks are enabled instead, the load balancer remains in the
 *                 <code>Added</code> state.</p>
 */
export interface LoadBalancerState {
  __type?: "LoadBalancerState";
  /**
   * <p>The name of the load balancer.</p>
   */
  LoadBalancerName?: string;

  /**
   * <p>One of the following load balancer states:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Adding</code> - The instances in the group are being registered with the
   *                     load balancer.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>Added</code> - All instances in the group are registered with the load
   *                     balancer.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>InService</code> - At least one instance in the group passed an ELB
   *                     health check.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Removing</code> - The instances in the group are being deregistered from
   *                     the load balancer. If connection draining is enabled, Elastic Load Balancing
   *                     waits for in-flight requests to complete before deregistering the
   *                     instances.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Removed</code> - All instances in the group are deregistered from the
   *                     load balancer.</p>
   *             </li>
   *          </ul>
   */
  State?: string;
}

export namespace LoadBalancerState {
  export const filterSensitiveLog = (obj: LoadBalancerState): any => ({
    ...obj
  });
  export const isa = (o: any): o is LoadBalancerState =>
    __isa(o, "LoadBalancerState");
}

/**
 * <p>Describes the state of a target group.</p>
 *         <p>If you attach a target group to an existing Auto Scaling group, the initial state is
 *                 <code>Adding</code>. The state transitions to <code>Added</code> after all Auto Scaling
 *             instances are registered with the target group. If Elastic Load Balancing health checks
 *             are enabled, the state transitions to <code>InService</code> after at least one Auto Scaling
 *             instance passes the health check. If EC2 health checks are enabled instead, the target
 *             group remains in the <code>Added</code> state.</p>
 */
export interface LoadBalancerTargetGroupState {
  __type?: "LoadBalancerTargetGroupState";
  /**
   * <p>The Amazon Resource Name (ARN) of the target group.</p>
   */
  LoadBalancerTargetGroupARN?: string;

  /**
   * <p>The state of the target group.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>Adding</code> - The Auto Scaling instances are being registered with the target
   *                     group.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Added</code> - All Auto Scaling instances are registered with the target
   *                     group.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>InService</code> - At least one Auto Scaling instance passed an ELB health
   *                     check.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Removing</code> - The Auto Scaling instances are being deregistered from the
   *                     target group. If connection draining is enabled, Elastic Load Balancing waits
   *                     for in-flight requests to complete before deregistering the instances.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>Removed</code> - All Auto Scaling instances are deregistered from the target
   *                     group.</p>
   *             </li>
   *          </ul>
   */
  State?: string;
}

export namespace LoadBalancerTargetGroupState {
  export const filterSensitiveLog = (
    obj: LoadBalancerTargetGroupState
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is LoadBalancerTargetGroupState =>
    __isa(o, "LoadBalancerTargetGroupState");
}

/**
 * <p>Describes a metric.</p>
 */
export interface MetricCollectionType {
  __type?: "MetricCollectionType";
  /**
   * <p>One of the following metrics:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>GroupMinSize</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>GroupMaxSize</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>GroupDesiredCapacity</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>GroupInServiceInstances</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>GroupPendingInstances</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>GroupStandbyInstances</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>GroupTerminatingInstances</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>GroupTotalInstances</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  Metric?: string;
}

export namespace MetricCollectionType {
  export const filterSensitiveLog = (obj: MetricCollectionType): any => ({
    ...obj
  });
  export const isa = (o: any): o is MetricCollectionType =>
    __isa(o, "MetricCollectionType");
}

/**
 * <p>Describes the dimension of a metric.</p>
 */
export interface MetricDimension {
  __type?: "MetricDimension";
  /**
   * <p>The name of the dimension.</p>
   */
  Name: string | undefined;

  /**
   * <p>The value of the dimension.</p>
   */
  Value: string | undefined;
}

export namespace MetricDimension {
  export const filterSensitiveLog = (obj: MetricDimension): any => ({
    ...obj
  });
  export const isa = (o: any): o is MetricDimension =>
    __isa(o, "MetricDimension");
}

/**
 * <p>Describes a granularity of a metric.</p>
 */
export interface MetricGranularityType {
  __type?: "MetricGranularityType";
  /**
   * <p>The granularity. The only valid value is <code>1Minute</code>.</p>
   */
  Granularity?: string;
}

export namespace MetricGranularityType {
  export const filterSensitiveLog = (obj: MetricGranularityType): any => ({
    ...obj
  });
  export const isa = (o: any): o is MetricGranularityType =>
    __isa(o, "MetricGranularityType");
}

export enum MetricStatistic {
  Average = "Average",
  Maximum = "Maximum",
  Minimum = "Minimum",
  SampleCount = "SampleCount",
  Sum = "Sum"
}

export enum MetricType {
  ALBRequestCountPerTarget = "ALBRequestCountPerTarget",
  ASGAverageCPUUtilization = "ASGAverageCPUUtilization",
  ASGAverageNetworkIn = "ASGAverageNetworkIn",
  ASGAverageNetworkOut = "ASGAverageNetworkOut"
}

/**
 * <p>Describes a mixed instances policy for an Auto Scaling group. With mixed instances,
 *             your Auto Scaling group can provision a combination of On-Demand Instances and Spot
 *             Instances across multiple instance types. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-purchase-options.html">Auto
 *                 Scaling Groups with Multiple Instance Types and Purchase Options</a> in the
 *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *         <p>You can create a mixed instances policy for a new Auto Scaling group, or you can
 *             create it for an existing group by updating the group to specify
 *                 <code>MixedInstancesPolicy</code> as the top-level parameter instead of a launch
 *             configuration or template. For more information, see <a>CreateAutoScalingGroup</a> and <a>UpdateAutoScalingGroup</a>.</p>
 */
export interface MixedInstancesPolicy {
  __type?: "MixedInstancesPolicy";
  /**
   * <p>The instances distribution to use.</p>
   *         <p>If you leave this parameter unspecified, the value for each parameter in
   *                 <code>InstancesDistribution</code> uses a default value.</p>
   */
  InstancesDistribution?: InstancesDistribution;

  /**
   * <p>The launch template and instance types (overrides).</p>
   *         <p>This parameter must be specified when creating a mixed instances policy.</p>
   */
  LaunchTemplate?: LaunchTemplate;
}

export namespace MixedInstancesPolicy {
  export const filterSensitiveLog = (obj: MixedInstancesPolicy): any => ({
    ...obj
  });
  export const isa = (o: any): o is MixedInstancesPolicy =>
    __isa(o, "MixedInstancesPolicy");
}

/**
 * <p>Describes a notification.</p>
 */
export interface NotificationConfiguration {
  __type?: "NotificationConfiguration";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName?: string;

  /**
   * <p>One of the following event notification types:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>autoscaling:EC2_INSTANCE_LAUNCH</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>autoscaling:EC2_INSTANCE_LAUNCH_ERROR</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>autoscaling:EC2_INSTANCE_TERMINATE</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>autoscaling:EC2_INSTANCE_TERMINATE_ERROR</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>autoscaling:TEST_NOTIFICATION</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  NotificationType?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (Amazon SNS)
   *             topic.</p>
   */
  TopicARN?: string;
}

export namespace NotificationConfiguration {
  export const filterSensitiveLog = (obj: NotificationConfiguration): any => ({
    ...obj
  });
  export const isa = (o: any): o is NotificationConfiguration =>
    __isa(o, "NotificationConfiguration");
}

export interface PoliciesType {
  __type?: "PoliciesType";
  /**
   * <p>A string that indicates that the response contains more items than can be returned in
   *             a single response. To receive additional items, specify this string for the
   *                 <code>NextToken</code> value when requesting the next set of items. This value is
   *             null when there are no more items to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The scaling policies.</p>
   */
  ScalingPolicies?: ScalingPolicy[];
}

export namespace PoliciesType {
  export const filterSensitiveLog = (obj: PoliciesType): any => ({
    ...obj
  });
  export const isa = (o: any): o is PoliciesType => __isa(o, "PoliciesType");
}

/**
 * <p>Contains the output of PutScalingPolicy.</p>
 */
export interface PolicyARNType {
  __type?: "PolicyARNType";
  /**
   * <p>The CloudWatch alarms created for the target tracking scaling policy.</p>
   */
  Alarms?: Alarm[];

  /**
   * <p>The Amazon Resource Name (ARN) of the policy.</p>
   */
  PolicyARN?: string;
}

export namespace PolicyARNType {
  export const filterSensitiveLog = (obj: PolicyARNType): any => ({
    ...obj
  });
  export const isa = (o: any): o is PolicyARNType => __isa(o, "PolicyARNType");
}

/**
 * <p>Represents a predefined metric for a target tracking scaling policy to use with
 *             Amazon EC2 Auto Scaling.</p>
 */
export interface PredefinedMetricSpecification {
  __type?: "PredefinedMetricSpecification";
  /**
   * <p>The metric type. The following predefined metrics are available:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>ASGAverageCPUUtilization</code> - Average CPU utilization of the Auto Scaling
   *                     group.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ASGAverageNetworkIn</code> - Average number of bytes received on all
   *                     network interfaces by the Auto Scaling group.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ASGAverageNetworkOut</code> - Average number of bytes sent out on all
   *                     network interfaces by the Auto Scaling group.</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>ALBRequestCountPerTarget</code> - Number of requests completed per
   *                     target in an Application Load Balancer target group.</p>
   *             </li>
   *          </ul>
   */
  PredefinedMetricType: MetricType | string | undefined;

  /**
   * <p>Identifies the resource associated with the metric type. You can't specify a resource
   *             label unless the metric type is <code>ALBRequestCountPerTarget</code> and there is a
   *             target group attached to the Auto Scaling group.</p>
   *         <p>The format is
   *                     <code>app/<i>load-balancer-name</i>/<i>load-balancer-id</i>/targetgroup/<i>target-group-name</i>/<i>target-group-id</i>
   *             </code>, where </p>
   *         <ul>
   *             <li>
   *                 <p>
   *                   <code>app/<i>load-balancer-name</i>/<i>load-balancer-id</i>
   *                     </code> is the final portion of the load balancer ARN, and</p>
   *             </li>
   *             <li>
   *                 <p>
   *                   <code>targetgroup/<i>target-group-name</i>/<i>target-group-id</i>
   *                     </code> is the final portion of the target group ARN.</p>
   *             </li>
   *          </ul>
   */
  ResourceLabel?: string;
}

export namespace PredefinedMetricSpecification {
  export const filterSensitiveLog = (
    obj: PredefinedMetricSpecification
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PredefinedMetricSpecification =>
    __isa(o, "PredefinedMetricSpecification");
}

export interface ProcessesType {
  __type?: "ProcessesType";
  /**
   * <p>The names of the process types.</p>
   */
  Processes?: ProcessType[];
}

export namespace ProcessesType {
  export const filterSensitiveLog = (obj: ProcessesType): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProcessesType => __isa(o, "ProcessesType");
}

/**
 * <p>Describes a process type.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-suspend-resume-processes.html#process-types">Scaling Processes</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 */
export interface ProcessType {
  __type?: "ProcessType";
  /**
   * <p>One of the following processes:</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>Launch</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>Terminate</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>AddToLoadBalancer</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>AlarmNotification</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>AZRebalance</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>HealthCheck</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>ReplaceUnhealthy</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>ScheduledActions</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  ProcessName: string | undefined;
}

export namespace ProcessType {
  export const filterSensitiveLog = (obj: ProcessType): any => ({
    ...obj
  });
  export const isa = (o: any): o is ProcessType => __isa(o, "ProcessType");
}

export interface PutLifecycleHookAnswer {
  __type?: "PutLifecycleHookAnswer";
}

export namespace PutLifecycleHookAnswer {
  export const filterSensitiveLog = (obj: PutLifecycleHookAnswer): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutLifecycleHookAnswer =>
    __isa(o, "PutLifecycleHookAnswer");
}

export interface PutLifecycleHookType {
  __type?: "PutLifecycleHookType";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>Defines the action the Auto Scaling group should take when the lifecycle hook timeout elapses
   *             or if an unexpected failure occurs. This parameter can be either <code>CONTINUE</code>
   *             or <code>ABANDON</code>. The default value is <code>ABANDON</code>.</p>
   */
  DefaultResult?: string;

  /**
   * <p>The maximum time, in seconds, that can elapse before the lifecycle hook times out. The
   *             range is from <code>30</code> to <code>7200</code> seconds. The default value is
   *                 <code>3600</code> seconds (1 hour).</p>
   *         <p>If the lifecycle hook times out, Amazon EC2 Auto Scaling performs the action that you specified in
   *             the <code>DefaultResult</code> parameter. You can prevent the lifecycle hook from timing
   *             out by calling <a>RecordLifecycleActionHeartbeat</a>.</p>
   */
  HeartbeatTimeout?: number;

  /**
   * <p>The name of the lifecycle hook.</p>
   */
  LifecycleHookName: string | undefined;

  /**
   * <p>The instance state to which you want to attach the lifecycle hook. The valid values
   *             are:</p>
   *         <ul>
   *             <li>
   *                 <p>autoscaling:EC2_INSTANCE_LAUNCHING</p>
   *             </li>
   *             <li>
   *                 <p>autoscaling:EC2_INSTANCE_TERMINATING</p>
   *             </li>
   *          </ul>
   *         <p>Conditional: This parameter is required for new lifecycle hooks, but optional when
   *             updating existing hooks.</p>
   */
  LifecycleTransition?: string;

  /**
   * <p>Additional information that you want to include any time Amazon EC2 Auto Scaling sends a message to
   *             the notification target.</p>
   */
  NotificationMetadata?: string;

  /**
   * <p>The ARN of the notification target that Amazon EC2 Auto Scaling uses to notify you when an instance
   *             is in the transition state for the lifecycle hook. This target can be either an SQS
   *             queue or an SNS topic.</p>
   *         <p>If you specify an empty string, this overrides the current ARN.</p>
   *         <p>This operation uses the JSON format when sending notifications to an Amazon SQS queue,
   *             and an email key-value pair format when sending notifications to an Amazon SNS
   *             topic.</p>
   *         <p>When you specify a notification target, Amazon EC2 Auto Scaling sends it a test message. Test
   *             messages contain the following additional key-value pair: <code>"Event":
   *                 "autoscaling:TEST_NOTIFICATION"</code>.</p>
   */
  NotificationTargetARN?: string;

  /**
   * <p>The ARN of the IAM role that allows the Auto Scaling group to publish to the specified
   *             notification target, for example, an Amazon SNS topic or an Amazon SQS queue.</p>
   *         <p>Conditional: This parameter is required for new lifecycle hooks, but optional when
   *             updating existing hooks.</p>
   */
  RoleARN?: string;
}

export namespace PutLifecycleHookType {
  export const filterSensitiveLog = (obj: PutLifecycleHookType): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutLifecycleHookType =>
    __isa(o, "PutLifecycleHookType");
}

export interface PutNotificationConfigurationType {
  __type?: "PutNotificationConfigurationType";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The type of event that causes the notification to be sent. For more information about
   *             notification types supported by Amazon EC2 Auto Scaling, see <a>DescribeAutoScalingNotificationTypes</a>.</p>
   */
  NotificationTypes: string[] | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the Amazon Simple Notification Service (Amazon SNS)
   *             topic.</p>
   */
  TopicARN: string | undefined;
}

export namespace PutNotificationConfigurationType {
  export const filterSensitiveLog = (
    obj: PutNotificationConfigurationType
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutNotificationConfigurationType =>
    __isa(o, "PutNotificationConfigurationType");
}

export interface PutScalingPolicyType {
  __type?: "PutScalingPolicyType";
  /**
   * <p>Specifies whether the <code>ScalingAdjustment</code> parameter is an absolute number
   *             or a percentage of the current capacity. The valid values are
   *                 <code>ChangeInCapacity</code>, <code>ExactCapacity</code>, and
   *                 <code>PercentChangeInCapacity</code>.</p>
   *         <p>Valid only if the policy type is <code>StepScaling</code> or
   *                 <code>SimpleScaling</code>. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-scaling-simple-step.html#as-scaling-adjustment">Scaling Adjustment Types</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  AdjustmentType?: string;

  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The amount of time, in seconds, after a scaling activity completes before any further
   *             dynamic scaling activities can start. If this parameter is not specified, the default
   *             cooldown period for the group applies.</p>
   *         <p>Valid only if the policy type is <code>SimpleScaling</code>. For more information, see
   *                 <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/Cooldown.html">Scaling
   *                 Cooldowns</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  Cooldown?: number;

  /**
   * <p>The estimated time, in seconds, until a newly launched instance can contribute to the
   *             CloudWatch metrics. The default is to use the value specified for the default cooldown period
   *             for the group.</p>
   *         <p>Valid only if the policy type is <code>StepScaling</code> or
   *                 <code>TargetTrackingScaling</code>.</p>
   */
  EstimatedInstanceWarmup?: number;

  /**
   * <p>The aggregation type for the CloudWatch metrics. The valid values are <code>Minimum</code>,
   *                 <code>Maximum</code>, and <code>Average</code>. If the aggregation type is null, the
   *             value is treated as <code>Average</code>.</p>
   *         <p>Valid only if the policy type is <code>StepScaling</code>.</p>
   */
  MetricAggregationType?: string;

  /**
   * <p>The minimum number of instances to scale. If the value of <code>AdjustmentType</code>
   *             is <code>PercentChangeInCapacity</code>, the scaling policy changes the
   *                 <code>DesiredCapacity</code> of the Auto Scaling group by at least this many instances.
   *             Otherwise, the error is <code>ValidationError</code>.</p>
   *         <p>This property replaces the <code>MinAdjustmentStep</code> property. For example,
   *             suppose that you create a step scaling policy to scale out an Auto Scaling group by 25 percent
   *             and you specify a <code>MinAdjustmentMagnitude</code> of 2. If the group has 4 instances
   *             and the scaling policy is performed, 25 percent of 4 is 1. However, because you
   *             specified a <code>MinAdjustmentMagnitude</code> of 2, Amazon EC2 Auto Scaling scales out the group by 2
   *             instances.</p>
   *         <p>Valid only if the policy type is <code>SimpleScaling</code> or
   *                 <code>StepScaling</code>.</p>
   */
  MinAdjustmentMagnitude?: number;

  /**
   * <p>Available for backward compatibility. Use <code>MinAdjustmentMagnitude</code>
   *             instead.</p>
   */
  MinAdjustmentStep?: number;

  /**
   * <p>The name of the policy.</p>
   */
  PolicyName: string | undefined;

  /**
   * <p>The policy type. The valid values are <code>SimpleScaling</code>,
   *                 <code>StepScaling</code>, and <code>TargetTrackingScaling</code>. If the policy type
   *             is null, the value is treated as <code>SimpleScaling</code>.</p>
   */
  PolicyType?: string;

  /**
   * <p>The amount by which a simple scaling policy scales the Auto Scaling group in response to an
   *             alarm breach. The adjustment is based on the value that you specified in the
   *                 <code>AdjustmentType</code> parameter (either an absolute number or a percentage). A
   *             positive value adds to the current capacity and a negative value subtracts from the
   *             current capacity. For exact capacity, you must specify a positive value.</p>
   *         <p>Conditional: If you specify <code>SimpleScaling</code> for the policy type, you must
   *             specify this parameter. (Not used with any other policy type.) </p>
   */
  ScalingAdjustment?: number;

  /**
   * <p>A set of adjustments that enable you to scale based on the size of the alarm
   *             breach.</p>
   *         <p>Conditional: If you specify <code>StepScaling</code> for the policy type, you must
   *             specify this parameter. (Not used with any other policy type.) </p>
   */
  StepAdjustments?: StepAdjustment[];

  /**
   * <p>A target tracking scaling policy. Includes support for predefined or customized
   *             metrics.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_TargetTrackingConfiguration.html">TargetTrackingConfiguration</a> in the <i>Amazon EC2 Auto Scaling API
   *                 Reference</i>.</p>
   *         <p>Conditional: If you specify <code>TargetTrackingScaling</code> for the policy type,
   *             you must specify this parameter. (Not used with any other policy type.) </p>
   */
  TargetTrackingConfiguration?: TargetTrackingConfiguration;
}

export namespace PutScalingPolicyType {
  export const filterSensitiveLog = (obj: PutScalingPolicyType): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutScalingPolicyType =>
    __isa(o, "PutScalingPolicyType");
}

export interface PutScheduledUpdateGroupActionType {
  __type?: "PutScheduledUpdateGroupActionType";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The number of EC2 instances that should be running in the Auto Scaling group.</p>
   */
  DesiredCapacity?: number;

  /**
   * <p>The date and time for the recurring schedule to end. Amazon EC2 Auto Scaling does not perform the
   *             action after this time.</p>
   */
  EndTime?: Date;

  /**
   * <p>The maximum number of instances in the Auto Scaling group.</p>
   */
  MaxSize?: number;

  /**
   * <p>The minimum number of instances in the Auto Scaling group.</p>
   */
  MinSize?: number;

  /**
   * <p>The recurring schedule for this action, in Unix cron syntax format. This format
   *             consists of five fields separated by white spaces: [Minute] [Hour] [Day_of_Month]
   *             [Month_of_Year] [Day_of_Week]. The value must be in quotes (for example, <code>"30 0 1
   *                 1,6,12 *"</code>). For more information about this format, see <a href="http://crontab.org">Crontab</a>.</p>
   *         <p>When <code>StartTime</code> and <code>EndTime</code> are specified with
   *                 <code>Recurrence</code>, they form the boundaries of when the recurring action
   *             starts and stops.</p>
   */
  Recurrence?: string;

  /**
   * <p>The name of this scaling action.</p>
   */
  ScheduledActionName: string | undefined;

  /**
   * <p>The date and time for this action to start, in YYYY-MM-DDThh:mm:ssZ format in UTC/GMT
   *             only and in quotes (for example, <code>"2019-06-01T00:00:00Z"</code>).</p>
   *         <p>If you specify <code>Recurrence</code> and <code>StartTime</code>, Amazon EC2 Auto Scaling performs
   *             the action at this time, and then performs the action based on the specified
   *             recurrence.</p>
   *         <p>If you try to schedule your action in the past, Amazon EC2 Auto Scaling returns an error
   *             message.</p>
   */
  StartTime?: Date;

  /**
   * <p>This parameter is no longer used.</p>
   */
  Time?: Date;
}

export namespace PutScheduledUpdateGroupActionType {
  export const filterSensitiveLog = (
    obj: PutScheduledUpdateGroupActionType
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is PutScheduledUpdateGroupActionType =>
    __isa(o, "PutScheduledUpdateGroupActionType");
}

export interface RecordLifecycleActionHeartbeatAnswer {
  __type?: "RecordLifecycleActionHeartbeatAnswer";
}

export namespace RecordLifecycleActionHeartbeatAnswer {
  export const filterSensitiveLog = (
    obj: RecordLifecycleActionHeartbeatAnswer
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RecordLifecycleActionHeartbeatAnswer =>
    __isa(o, "RecordLifecycleActionHeartbeatAnswer");
}

export interface RecordLifecycleActionHeartbeatType {
  __type?: "RecordLifecycleActionHeartbeatType";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>A token that uniquely identifies a specific lifecycle action associated with an
   *             instance. Amazon EC2 Auto Scaling sends this token to the notification target that you specified when
   *             you created the lifecycle hook.</p>
   */
  LifecycleActionToken?: string;

  /**
   * <p>The name of the lifecycle hook.</p>
   */
  LifecycleHookName: string | undefined;
}

export namespace RecordLifecycleActionHeartbeatType {
  export const filterSensitiveLog = (
    obj: RecordLifecycleActionHeartbeatType
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is RecordLifecycleActionHeartbeatType =>
    __isa(o, "RecordLifecycleActionHeartbeatType");
}

/**
 * <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 */
export interface ResourceContentionFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceContentionFault";
  $fault: "server";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace ResourceContentionFault {
  export const filterSensitiveLog = (obj: ResourceContentionFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceContentionFault =>
    __isa(o, "ResourceContentionFault");
}

/**
 * <p>The operation can't be performed because the resource is in use.</p>
 */
export interface ResourceInUseFault extends __SmithyException, $MetadataBearer {
  name: "ResourceInUseFault";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace ResourceInUseFault {
  export const filterSensitiveLog = (obj: ResourceInUseFault): any => ({
    ...obj
  });
  export const isa = (o: any): o is ResourceInUseFault =>
    __isa(o, "ResourceInUseFault");
}

/**
 * <p>The operation can't be performed because there are scaling activities in
 *             progress.</p>
 */
export interface ScalingActivityInProgressFault
  extends __SmithyException,
    $MetadataBearer {
  name: "ScalingActivityInProgressFault";
  $fault: "client";
  /**
   * <p></p>
   */
  message?: string;
}

export namespace ScalingActivityInProgressFault {
  export const filterSensitiveLog = (
    obj: ScalingActivityInProgressFault
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ScalingActivityInProgressFault =>
    __isa(o, "ScalingActivityInProgressFault");
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
  WaitingForSpotInstanceRequestId = "WaitingForSpotInstanceRequestId"
}

/**
 * <p>Describes a scaling policy.</p>
 */
export interface ScalingPolicy {
  __type?: "ScalingPolicy";
  /**
   * <p>The adjustment type, which specifies how <code>ScalingAdjustment</code> is
   *             interpreted. The valid values are <code>ChangeInCapacity</code>,
   *                 <code>ExactCapacity</code>, and <code>PercentChangeInCapacity</code>.</p>
   */
  AdjustmentType?: string;

  /**
   * <p>The CloudWatch alarms related to the policy.</p>
   */
  Alarms?: Alarm[];

  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName?: string;

  /**
   * <p>The amount of time, in seconds, after a scaling activity completes before any further
   *             dynamic scaling activities can start.</p>
   */
  Cooldown?: number;

  /**
   * <p>The estimated time, in seconds, until a newly launched instance can contribute to the
   *             CloudWatch metrics.</p>
   */
  EstimatedInstanceWarmup?: number;

  /**
   * <p>The aggregation type for the CloudWatch metrics. The valid values are <code>Minimum</code>,
   *                 <code>Maximum</code>, and <code>Average</code>.</p>
   */
  MetricAggregationType?: string;

  /**
   * <p>The minimum number of instances to scale. If the value of <code>AdjustmentType</code>
   *             is <code>PercentChangeInCapacity</code>, the scaling policy changes the
   *                 <code>DesiredCapacity</code> of the Auto Scaling group by at least this many instances.
   *             Otherwise, the error is <code>ValidationError</code>.</p>
   */
  MinAdjustmentMagnitude?: number;

  /**
   * <p>Available for backward compatibility. Use <code>MinAdjustmentMagnitude</code>
   *             instead.</p>
   */
  MinAdjustmentStep?: number;

  /**
   * <p>The Amazon Resource Name (ARN) of the policy.</p>
   */
  PolicyARN?: string;

  /**
   * <p>The name of the scaling policy.</p>
   */
  PolicyName?: string;

  /**
   * <p>The policy type. The valid values are <code>SimpleScaling</code>,
   *                 <code>StepScaling</code>, and <code>TargetTrackingScaling</code>.</p>
   */
  PolicyType?: string;

  /**
   * <p>The amount by which to scale, based on the specified adjustment type. A positive value
   *             adds to the current capacity while a negative number removes from the current
   *             capacity.</p>
   */
  ScalingAdjustment?: number;

  /**
   * <p>A set of adjustments that enable you to scale based on the size of the alarm
   *             breach.</p>
   */
  StepAdjustments?: StepAdjustment[];

  /**
   * <p>A target tracking scaling policy.</p>
   */
  TargetTrackingConfiguration?: TargetTrackingConfiguration;
}

export namespace ScalingPolicy {
  export const filterSensitiveLog = (obj: ScalingPolicy): any => ({
    ...obj
  });
  export const isa = (o: any): o is ScalingPolicy => __isa(o, "ScalingPolicy");
}

export interface ScalingProcessQuery {
  __type?: "ScalingProcessQuery";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>One or more of the following processes. If you omit this parameter, all processes are
   *             specified.</p>
   *         <ul>
   *             <li>
   *                 <p>
   *                     <code>Launch</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>Terminate</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>HealthCheck</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>ReplaceUnhealthy</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>AZRebalance</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>AlarmNotification</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>ScheduledActions</code>
   *                 </p>
   *             </li>
   *             <li>
   *                 <p>
   *                     <code>AddToLoadBalancer</code>
   *                 </p>
   *             </li>
   *          </ul>
   */
  ScalingProcesses?: string[];
}

export namespace ScalingProcessQuery {
  export const filterSensitiveLog = (obj: ScalingProcessQuery): any => ({
    ...obj
  });
  export const isa = (o: any): o is ScalingProcessQuery =>
    __isa(o, "ScalingProcessQuery");
}

export interface ScheduledActionsType {
  __type?: "ScheduledActionsType";
  /**
   * <p>A string that indicates that the response contains more items than can be returned in
   *             a single response. To receive additional items, specify this string for the
   *                 <code>NextToken</code> value when requesting the next set of items. This value is
   *             null when there are no more items to return.</p>
   */
  NextToken?: string;

  /**
   * <p>The scheduled actions.</p>
   */
  ScheduledUpdateGroupActions?: ScheduledUpdateGroupAction[];
}

export namespace ScheduledActionsType {
  export const filterSensitiveLog = (obj: ScheduledActionsType): any => ({
    ...obj
  });
  export const isa = (o: any): o is ScheduledActionsType =>
    __isa(o, "ScheduledActionsType");
}

/**
 * <p>Describes a scheduled scaling action. Used in response to <a>DescribeScheduledActions</a>.</p>
 */
export interface ScheduledUpdateGroupAction {
  __type?: "ScheduledUpdateGroupAction";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName?: string;

  /**
   * <p>The number of instances you prefer to maintain in the group.</p>
   */
  DesiredCapacity?: number;

  /**
   * <p>The date and time in UTC for the recurring schedule to end. For example,
   *                 <code>"2019-06-01T00:00:00Z"</code>.
   *             </p>
   */
  EndTime?: Date;

  /**
   * <p>The maximum number of instances in the Auto Scaling group.</p>
   */
  MaxSize?: number;

  /**
   * <p>The minimum number of instances in the Auto Scaling group.</p>
   */
  MinSize?: number;

  /**
   * <p>The recurring schedule for the action, in Unix cron syntax format.</p>
   *         <p>When <code>StartTime</code> and <code>EndTime</code> are specified with
   *                 <code>Recurrence</code>, they form the boundaries of when the recurring action
   *             starts and stops.</p>
   */
  Recurrence?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the scheduled action.</p>
   */
  ScheduledActionARN?: string;

  /**
   * <p>The name of the scheduled action.</p>
   */
  ScheduledActionName?: string;

  /**
   * <p>The date and time in UTC for this action to start. For example,
   *                 <code>"2019-06-01T00:00:00Z"</code>.
   *             </p>
   */
  StartTime?: Date;

  /**
   * <p>This parameter is no longer used.</p>
   */
  Time?: Date;
}

export namespace ScheduledUpdateGroupAction {
  export const filterSensitiveLog = (obj: ScheduledUpdateGroupAction): any => ({
    ...obj
  });
  export const isa = (o: any): o is ScheduledUpdateGroupAction =>
    __isa(o, "ScheduledUpdateGroupAction");
}

/**
 * <p>Describes one or more scheduled scaling action updates for a specified Auto Scaling group.
 *             Used in combination with <a>BatchPutScheduledUpdateGroupAction</a>.</p>
 *         <p>When updating a scheduled scaling action, all optional parameters are left unchanged
 *             if not specified.</p>
 */
export interface ScheduledUpdateGroupActionRequest {
  __type?: "ScheduledUpdateGroupActionRequest";
  /**
   * <p>The number of EC2 instances that should be running in the group.</p>
   */
  DesiredCapacity?: number;

  /**
   * <p>The date and time for the recurring schedule to end. Amazon EC2 Auto Scaling does not perform the
   *             action after this time.</p>
   */
  EndTime?: Date;

  /**
   * <p>The maximum number of instances in the Auto Scaling group.</p>
   */
  MaxSize?: number;

  /**
   * <p>The minimum number of instances in the Auto Scaling group.</p>
   */
  MinSize?: number;

  /**
   * <p>The recurring schedule for the action, in Unix cron syntax format. This format
   *             consists of five fields separated by white spaces: [Minute] [Hour] [Day_of_Month]
   *             [Month_of_Year] [Day_of_Week]. The value must be in quotes (for example, <code>"30 0 1
   *                 1,6,12 *"</code>). For more information about this format, see <a href="http://crontab.org">Crontab</a>.</p>
   *         <p>When <code>StartTime</code> and <code>EndTime</code> are specified with
   *                 <code>Recurrence</code>, they form the boundaries of when the recurring action
   *             starts and stops.</p>
   */
  Recurrence?: string;

  /**
   * <p>The name of the scaling action.</p>
   */
  ScheduledActionName: string | undefined;

  /**
   * <p>The date and time for the action to start, in YYYY-MM-DDThh:mm:ssZ format in UTC/GMT
   *             only and in quotes (for example, <code>"2019-06-01T00:00:00Z"</code>).</p>
   *         <p>If you specify <code>Recurrence</code> and <code>StartTime</code>, Amazon EC2 Auto Scaling performs
   *             the action at this time, and then performs the action based on the specified
   *             recurrence.</p>
   *         <p>If you try to schedule the action in the past, Amazon EC2 Auto Scaling returns an error
   *             message.</p>
   */
  StartTime?: Date;
}

export namespace ScheduledUpdateGroupActionRequest {
  export const filterSensitiveLog = (
    obj: ScheduledUpdateGroupActionRequest
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is ScheduledUpdateGroupActionRequest =>
    __isa(o, "ScheduledUpdateGroupActionRequest");
}

/**
 * <p>The service-linked role is not yet ready for use.</p>
 */
export interface ServiceLinkedRoleFailure
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceLinkedRoleFailure";
  $fault: "server";
  message?: string;
}

export namespace ServiceLinkedRoleFailure {
  export const filterSensitiveLog = (obj: ServiceLinkedRoleFailure): any => ({
    ...obj
  });
  export const isa = (o: any): o is ServiceLinkedRoleFailure =>
    __isa(o, "ServiceLinkedRoleFailure");
}

export interface SetDesiredCapacityType {
  __type?: "SetDesiredCapacityType";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>The number of EC2 instances that should be running in the Auto Scaling group.</p>
   */
  DesiredCapacity: number | undefined;

  /**
   * <p>Indicates whether Amazon EC2 Auto Scaling waits for the cooldown period to complete before initiating
   *             a scaling activity to set your Auto Scaling group to its new capacity. By default, Amazon EC2 Auto Scaling does
   *             not honor the cooldown period during manual scaling activities.</p>
   */
  HonorCooldown?: boolean;
}

export namespace SetDesiredCapacityType {
  export const filterSensitiveLog = (obj: SetDesiredCapacityType): any => ({
    ...obj
  });
  export const isa = (o: any): o is SetDesiredCapacityType =>
    __isa(o, "SetDesiredCapacityType");
}

export interface SetInstanceHealthQuery {
  __type?: "SetInstanceHealthQuery";
  /**
   * <p>The health status of the instance. Set to <code>Healthy</code> to have the instance
   *             remain in service. Set to <code>Unhealthy</code> to have the instance be out of service.
   *             Amazon EC2 Auto Scaling terminates and replaces the unhealthy instance.</p>
   */
  HealthStatus: string | undefined;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId: string | undefined;

  /**
   * <p>If the Auto Scaling group of the specified instance has a <code>HealthCheckGracePeriod</code>
   *             specified for the group, by default, this call respects the grace period. Set this to
   *                 <code>False</code>, to have the call not respect the grace period associated with
   *             the group.</p>
   *         <p>For more information about the health check grace period, see <a>CreateAutoScalingGroup</a>.</p>
   */
  ShouldRespectGracePeriod?: boolean;
}

export namespace SetInstanceHealthQuery {
  export const filterSensitiveLog = (obj: SetInstanceHealthQuery): any => ({
    ...obj
  });
  export const isa = (o: any): o is SetInstanceHealthQuery =>
    __isa(o, "SetInstanceHealthQuery");
}

export interface SetInstanceProtectionAnswer {
  __type?: "SetInstanceProtectionAnswer";
}

export namespace SetInstanceProtectionAnswer {
  export const filterSensitiveLog = (
    obj: SetInstanceProtectionAnswer
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is SetInstanceProtectionAnswer =>
    __isa(o, "SetInstanceProtectionAnswer");
}

export interface SetInstanceProtectionQuery {
  __type?: "SetInstanceProtectionQuery";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>One or more instance IDs.</p>
   */
  InstanceIds: string[] | undefined;

  /**
   * <p>Indicates whether the instance is protected from termination by Amazon EC2 Auto Scaling when scaling
   *             in.</p>
   */
  ProtectedFromScaleIn: boolean | undefined;
}

export namespace SetInstanceProtectionQuery {
  export const filterSensitiveLog = (obj: SetInstanceProtectionQuery): any => ({
    ...obj
  });
  export const isa = (o: any): o is SetInstanceProtectionQuery =>
    __isa(o, "SetInstanceProtectionQuery");
}

/**
 * <p>Describes an adjustment based on the difference between the value of the aggregated
 *             CloudWatch metric and the breach threshold that you've defined for the alarm. Used in
 *             combination with <a>PutScalingPolicy</a>.</p>
 *         <p>For the following examples, suppose that you have an alarm with a breach threshold of
 *             50:</p>
 *         <ul>
 *             <li>
 *                 <p>To trigger the adjustment when the metric is greater than or equal to 50 and
 *                     less than 60, specify a lower bound of 0 and an upper bound of 10.</p>
 *             </li>
 *             <li>
 *                 <p>To trigger the adjustment when the metric is greater than 40 and less than or
 *                     equal to 50, specify a lower bound of -10 and an upper bound of 0.</p>
 *             </li>
 *          </ul>
 *         <p>There are a few rules for the step adjustments for your step policy:</p>
 *         <ul>
 *             <li>
 *                 <p>The ranges of your step adjustments can't overlap or have a gap.</p>
 *             </li>
 *             <li>
 *                 <p>At most, one step adjustment can have a null lower bound. If one step
 *                     adjustment has a negative lower bound, then there must be a step adjustment with
 *                     a null lower bound.</p>
 *             </li>
 *             <li>
 *                 <p>At most, one step adjustment can have a null upper bound. If one step
 *                     adjustment has a positive upper bound, then there must be a step adjustment with
 *                     a null upper bound.</p>
 *             </li>
 *             <li>
 *                 <p>The upper and lower bound can't be null in the same step adjustment.</p>
 *             </li>
 *          </ul>
 */
export interface StepAdjustment {
  __type?: "StepAdjustment";
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
   *         <p>The upper bound must be greater than the lower bound.</p>
   */
  MetricIntervalUpperBound?: number;

  /**
   * <p>The amount by which to scale, based on the specified adjustment type. A positive value
   *             adds to the current capacity while a negative number removes from the current
   *             capacity.</p>
   */
  ScalingAdjustment: number | undefined;
}

export namespace StepAdjustment {
  export const filterSensitiveLog = (obj: StepAdjustment): any => ({
    ...obj
  });
  export const isa = (o: any): o is StepAdjustment =>
    __isa(o, "StepAdjustment");
}

/**
 * <p>Describes an automatic scaling process that has been suspended. For more information,
 *             see <a>ProcessType</a>.</p>
 */
export interface SuspendedProcess {
  __type?: "SuspendedProcess";
  /**
   * <p>The name of the suspended process.</p>
   */
  ProcessName?: string;

  /**
   * <p>The reason that the process was suspended.</p>
   */
  SuspensionReason?: string;
}

export namespace SuspendedProcess {
  export const filterSensitiveLog = (obj: SuspendedProcess): any => ({
    ...obj
  });
  export const isa = (o: any): o is SuspendedProcess =>
    __isa(o, "SuspendedProcess");
}

/**
 * <p>Describes a tag for an Auto Scaling group.</p>
 */
export interface Tag {
  __type?: "Tag";
  /**
   * <p>The tag key.</p>
   */
  Key: string | undefined;

  /**
   * <p>Determines whether the tag is added to new instances as they are launched in the
   *             group.</p>
   */
  PropagateAtLaunch?: boolean;

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
   * <p>The tag value.</p>
   */
  Value?: string;
}

export namespace Tag {
  export const filterSensitiveLog = (obj: Tag): any => ({
    ...obj
  });
  export const isa = (o: any): o is Tag => __isa(o, "Tag");
}

/**
 * <p>Describes a tag for an Auto Scaling group.</p>
 */
export interface TagDescription {
  __type?: "TagDescription";
  /**
   * <p>The tag key.</p>
   */
  Key?: string;

  /**
   * <p>Determines whether the tag is added to new instances as they are launched in the
   *             group.</p>
   */
  PropagateAtLaunch?: boolean;

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
   * <p>The tag value.</p>
   */
  Value?: string;
}

export namespace TagDescription {
  export const filterSensitiveLog = (obj: TagDescription): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagDescription =>
    __isa(o, "TagDescription");
}

export interface TagsType {
  __type?: "TagsType";
  /**
   * <p>A string that indicates that the response contains more items than can be returned in
   *             a single response. To receive additional items, specify this string for the
   *                 <code>NextToken</code> value when requesting the next set of items. This value is
   *             null when there are no more items to return.</p>
   */
  NextToken?: string;

  /**
   * <p>One or more tags.</p>
   */
  Tags?: TagDescription[];
}

export namespace TagsType {
  export const filterSensitiveLog = (obj: TagsType): any => ({
    ...obj
  });
  export const isa = (o: any): o is TagsType => __isa(o, "TagsType");
}

/**
 * <p>Represents a target tracking scaling policy configuration to use with Amazon EC2 Auto Scaling.</p>
 */
export interface TargetTrackingConfiguration {
  __type?: "TargetTrackingConfiguration";
  /**
   * <p>A customized metric. You must specify either a predefined metric or a customized
   *             metric.</p>
   */
  CustomizedMetricSpecification?: CustomizedMetricSpecification;

  /**
   * <p>Indicates whether scaling in by the target tracking scaling policy is disabled. If
   *             scaling in is disabled, the target tracking scaling policy doesn't remove instances from
   *             the Auto Scaling group. Otherwise, the target tracking scaling policy can remove instances from
   *             the Auto Scaling group. The default is <code>false</code>.</p>
   */
  DisableScaleIn?: boolean;

  /**
   * <p>A predefined metric. You must specify either a predefined metric or a customized
   *             metric.</p>
   */
  PredefinedMetricSpecification?: PredefinedMetricSpecification;

  /**
   * <p>The target value for the metric.</p>
   */
  TargetValue: number | undefined;
}

export namespace TargetTrackingConfiguration {
  export const filterSensitiveLog = (
    obj: TargetTrackingConfiguration
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TargetTrackingConfiguration =>
    __isa(o, "TargetTrackingConfiguration");
}

export interface TerminateInstanceInAutoScalingGroupType {
  __type?: "TerminateInstanceInAutoScalingGroupType";
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

export namespace TerminateInstanceInAutoScalingGroupType {
  export const filterSensitiveLog = (
    obj: TerminateInstanceInAutoScalingGroupType
  ): any => ({
    ...obj
  });
  export const isa = (o: any): o is TerminateInstanceInAutoScalingGroupType =>
    __isa(o, "TerminateInstanceInAutoScalingGroupType");
}

export interface UpdateAutoScalingGroupType {
  __type?: "UpdateAutoScalingGroupType";
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string | undefined;

  /**
   * <p>One or more Availability Zones for the group.</p>
   */
  AvailabilityZones?: string[];

  /**
   * <p>The amount of time, in seconds, after a scaling activity completes before another
   *             scaling activity can start. The default value is <code>300</code>. This cooldown period
   *             is not used when a scaling-specific cooldown is specified.</p>
   *         <p>Cooldown periods are not supported for target tracking scaling policies, step scaling
   *             policies, or scheduled scaling. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/Cooldown.html">Scaling Cooldowns</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  DefaultCooldown?: number;

  /**
   * <p>The number of EC2 instances that should be running in the Auto Scaling group. This number must
   *             be greater than or equal to the minimum size of the group and less than or equal to the
   *             maximum size of the group.</p>
   */
  DesiredCapacity?: number;

  /**
   * <p>The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before checking the health status
   *             of an EC2 instance that has come into service. The default value is
   *             <code>0</code>.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html#health-check-grace-period">Health
   *                 Check Grace Period</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   *         <p>Conditional: This parameter is required if you are adding an <code>ELB</code> health
   *             check.</p>
   */
  HealthCheckGracePeriod?: number;

  /**
   * <p>The service to use for the health checks. The valid values are <code>EC2</code> and
   *                 <code>ELB</code>. If you configure an Auto Scaling group to use ELB health checks, it
   *             considers the instance unhealthy if it fails either the EC2 status checks or the load
   *             balancer health checks.</p>
   */
  HealthCheckType?: string;

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
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_LaunchTemplateSpecification.html">LaunchTemplateSpecification</a> in the <i>Amazon EC2 Auto Scaling API
   *                 Reference</i>.</p>
   */
  LaunchTemplate?: LaunchTemplateSpecification;

  /**
   * <p>The maximum amount of time, in seconds, that an instance can be in service.</p>
   *         <p>Valid Range: Minimum value of 604800.</p>
   */
  MaxInstanceLifetime?: number;

  /**
   * <p>The maximum size of the Auto Scaling group.</p>
   */
  MaxSize?: number;

  /**
   * <p>The minimum size of the Auto Scaling group.</p>
   */
  MinSize?: number;

  /**
   * <p>An embedded object that specifies a mixed instances policy.</p>
   *         <p>In your call to <code>UpdateAutoScalingGroup</code>, you can make changes to the
   *             policy that is specified. All optional parameters are left unchanged if not
   *             specified.</p>
   *
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/APIReference/API_MixedInstancesPolicy.html">MixedInstancesPolicy</a> in the <i>Amazon EC2 Auto Scaling API
   *                 Reference</i> and <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-purchase-options.html">Auto Scaling Groups with
   *                 Multiple Instance Types and Purchase Options</a> in the <i>Amazon EC2
   *                 Auto Scaling User Guide</i>.</p>
   */
  MixedInstancesPolicy?: MixedInstancesPolicy;

  /**
   * <p>Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling
   *             when scaling in.</p>
   *         <p>For more information about preventing instances from terminating on scale in, see
   *                 <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html#instance-protection">Instance Protection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  NewInstancesProtectedFromScaleIn?: boolean;

  /**
   * <p>The name of the placement group into which to launch your instances, if any. A
   *             placement group is a logical grouping of instances within a single Availability Zone.
   *             You cannot specify multiple Availability Zones and a placement group. For more
   *             information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement Groups</a> in the
   *                 <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  PlacementGroup?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to
   *             call other AWS services on your behalf. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-service-linked-role.html">Service-Linked
   *                 Roles</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  ServiceLinkedRoleARN?: string;

  /**
   * <p>A standalone termination policy or a list of termination policies used to select the
   *             instance to terminate. The policies are executed in the order that they are
   *             listed.</p>
   *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html">Controlling Which
   *                 Instances Auto Scaling Terminates During Scale In</a> in the
   *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  TerminationPolicies?: string[];

  /**
   * <p>A comma-separated list of subnet IDs for virtual private cloud (VPC).</p>
   *         <p>If you specify <code>VPCZoneIdentifier</code> with <code>AvailabilityZones</code>, the
   *             subnets that you specify for this parameter must reside in those Availability
   *             Zones.</p>
   */
  VPCZoneIdentifier?: string;
}

export namespace UpdateAutoScalingGroupType {
  export const filterSensitiveLog = (obj: UpdateAutoScalingGroupType): any => ({
    ...obj
  });
  export const isa = (o: any): o is UpdateAutoScalingGroupType =>
    __isa(o, "UpdateAutoScalingGroupType");
}
