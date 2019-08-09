import { _LaunchTemplateSpecification } from "./_LaunchTemplateSpecification";
import { _MixedInstancesPolicy } from "./_MixedInstancesPolicy";
import { _LifecycleHookSpecification } from "./_LifecycleHookSpecification";
import { _Tag } from "./_Tag";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateAutoScalingGroupInput shape
 */
export interface CreateAutoScalingGroupInput {
  /**
   * <p>The name of the Auto Scaling group. This name must be unique per Region per account.</p>
   */
  AutoScalingGroupName: string;

  /**
   * <p>The name of the launch configuration.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-asg.html">Creating an Auto Scaling Group Using a Launch Configuration</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you do not specify <code>LaunchConfigurationName</code>, you must specify one of the following parameters: <code>InstanceId</code>, <code>LaunchTemplate</code>, or <code>MixedInstancesPolicy</code>.</p>
   */
  LaunchConfigurationName?: string;

  /**
   * <p>The launch template to use to launch instances.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-asg-launch-template.html">Creating an Auto Scaling Group Using a Launch Template</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>If you do not specify <code>LaunchTemplate</code>, you must specify one of the following parameters: <code>InstanceId</code>, <code>LaunchConfigurationName</code>, or <code>MixedInstancesPolicy</code>.</p>
   */
  LaunchTemplate?: _LaunchTemplateSpecification;

  /**
   * <p>An embedded object that specifies a mixed instances policy. The required parameters must be specified. If optional parameters are unspecified, their default values are used.</p> <p>The policy includes parameters that not only define the distribution of On-Demand Instances and Spot Instances, the maximum price to pay for Spot instances, and how the Auto Scaling group allocates instance types to fulfill On-Demand and Spot capacity, but also the parameters that specify the instance configuration information—the launch template and instance types.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-purchase-options.html">Auto Scaling Groups with Multiple Instance Types and Purchase Options</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>You must specify one of the following parameters in your request: <code>LaunchConfigurationName</code>, <code>LaunchTemplate</code>, <code>InstanceId</code>, or <code>MixedInstancesPolicy</code>.</p>
   */
  MixedInstancesPolicy?: _MixedInstancesPolicy;

  /**
   * <p>The ID of the instance used to create a launch configuration for the group.</p> <p>When you specify an ID of an instance, Amazon EC2 Auto Scaling creates a new launch configuration and associates it with the group. This launch configuration derives its attributes from the specified instance, except for the block device mapping.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/create-asg-from-instance.html">Create an Auto Scaling Group Using an EC2 Instance</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>You must specify one of the following parameters in your request: <code>LaunchConfigurationName</code>, <code>LaunchTemplate</code>, <code>InstanceId</code>, or <code>MixedInstancesPolicy</code>.</p>
   */
  InstanceId?: string;

  /**
   * <p>The minimum size of the group.</p>
   */
  MinSize: number;

  /**
   * <p>The maximum size of the group.</p>
   */
  MaxSize: number;

  /**
   * <p>The number of Amazon EC2 instances that the Auto Scaling group attempts to maintain. This number must be greater than or equal to the minimum size of the group and less than or equal to the maximum size of the group. If you do not specify a desired capacity, the default is the minimum size of the group.</p>
   */
  DesiredCapacity?: number;

  /**
   * <p>The amount of time, in seconds, after a scaling activity completes before another scaling activity can start. The default value is <code>300</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/Cooldown.html">Scaling Cooldowns</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  DefaultCooldown?: number;

  /**
   * <p>One or more Availability Zones for the group. This parameter is optional if you specify one or more subnets for <code>VPCZoneIdentifier</code>.</p> <p>Conditional: If your account supports EC2-Classic and VPC, this parameter is required to launch instances into EC2-Classic.</p>
   */
  AvailabilityZones?: Array<string> | Iterable<string>;

  /**
   * <p>A list of Classic Load Balancers associated with this Auto Scaling group. For Application Load Balancers and Network Load Balancers, specify a list of target groups using the <code>TargetGroupARNs</code> property instead.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Using a Load Balancer with an Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  LoadBalancerNames?: Array<string> | Iterable<string>;

  /**
   * <p>The Amazon Resource Names (ARN) of the target groups to associate with the Auto Scaling group. Instances are registered as targets in a target group, and traffic is routed to the target group.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-load-balancer.html">Using a Load Balancer with an Auto Scaling Group</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  TargetGroupARNs?: Array<string> | Iterable<string>;

  /**
   * <p>The service to use for the health checks. The valid values are <code>EC2</code> and <code>ELB</code>. The default value is <code>EC2</code>. If you configure an Auto Scaling group to use ELB health checks, it considers the instance unhealthy if it fails either the EC2 status checks or the load balancer health checks.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html">Health Checks for Auto Scaling Instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  HealthCheckType?: string;

  /**
   * <p>The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before checking the health status of an EC2 instance that has come into service. During this time, any health check failures for the instance are ignored. The default value is <code>0</code>.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/healthcheck.html">Health Checks for Auto Scaling Instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>Conditional: This parameter is required if you are adding an <code>ELB</code> health check.</p>
   */
  HealthCheckGracePeriod?: number;

  /**
   * <p>The name of the placement group into which to launch your instances, if any. A placement group is a logical grouping of instances within a single Availability Zone. You cannot specify multiple Availability Zones and a placement group. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html">Placement Groups</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p>
   */
  PlacementGroup?: string;

  /**
   * <p>A comma-separated list of subnet IDs for your virtual private cloud (VPC).</p> <p>If you specify <code>VPCZoneIdentifier</code> with <code>AvailabilityZones</code>, the subnets that you specify for this parameter must reside in those Availability Zones.</p> <p>Conditional: If your account supports EC2-Classic and VPC, this parameter is required to launch instances into a VPC.</p>
   */
  VPCZoneIdentifier?: string;

  /**
   * <p>One or more termination policies used to select the instance to terminate. These policies are executed in the order that they are listed.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html">Controlling Which Instances Auto Scaling Terminates During Scale In</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  TerminationPolicies?: Array<string> | Iterable<string>;

  /**
   * <p>Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling when scaling in.</p> <p>For more information about preventing instances from terminating on scale in, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/as-instance-termination.html#instance-protection">Instance Protection</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  NewInstancesProtectedFromScaleIn?: boolean;

  /**
   * <p>One or more lifecycle hooks.</p>
   */
  LifecycleHookSpecificationList?:
    | Array<_LifecycleHookSpecification>
    | Iterable<_LifecycleHookSpecification>;

  /**
   * <p>One or more tags.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-tagging.html">Tagging Auto Scaling Groups and Instances</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to call other AWS services on your behalf. By default, Amazon EC2 Auto Scaling uses a service-linked role named AWSServiceRoleForAutoScaling, which it creates if it does not exist. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/autoscaling-service-linked-role.html">Service-Linked Roles</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
   */
  ServiceLinkedRoleARN?: string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
