import {
  _LaunchTemplateSpecification,
  _UnmarshalledLaunchTemplateSpecification
} from "./_LaunchTemplateSpecification";
import {
  _MixedInstancesPolicy,
  _UnmarshalledMixedInstancesPolicy
} from "./_MixedInstancesPolicy";
import { _Instance, _UnmarshalledInstance } from "./_Instance";
import {
  _SuspendedProcess,
  _UnmarshalledSuspendedProcess
} from "./_SuspendedProcess";
import { _EnabledMetric, _UnmarshalledEnabledMetric } from "./_EnabledMetric";
import {
  _TagDescription,
  _UnmarshalledTagDescription
} from "./_TagDescription";

/**
 * <p>Describes an Auto Scaling group.</p>
 */
export interface _AutoScalingGroup {
  /**
   * <p>The name of the Auto Scaling group.</p>
   */
  AutoScalingGroupName: string;

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
  LaunchTemplate?: _LaunchTemplateSpecification;

  /**
   * <p>The mixed instances policy for the group. </p>
   */
  MixedInstancesPolicy?: _MixedInstancesPolicy;

  /**
   * <p>The minimum size of the group.</p>
   */
  MinSize: number;

  /**
   * <p>The maximum size of the group.</p>
   */
  MaxSize: number;

  /**
   * <p>The desired size of the group.</p>
   */
  DesiredCapacity: number;

  /**
   * <p>The amount of time, in seconds, after a scaling activity completes before another scaling activity can start.</p>
   */
  DefaultCooldown: number;

  /**
   * <p>One or more Availability Zones for the group.</p>
   */
  AvailabilityZones: Array<string> | Iterable<string>;

  /**
   * <p>One or more load balancers associated with the group.</p>
   */
  LoadBalancerNames?: Array<string> | Iterable<string>;

  /**
   * <p>The Amazon Resource Names (ARN) of the target groups for your load balancer.</p>
   */
  TargetGroupARNs?: Array<string> | Iterable<string>;

  /**
   * <p>The service to use for the health checks. The valid values are <code>EC2</code> and <code>ELB</code>. If you configure an Auto Scaling group to use ELB health checks, it considers the instance unhealthy if it fails either the EC2 status checks or the load balancer health checks.</p>
   */
  HealthCheckType: string;

  /**
   * <p>The amount of time, in seconds, that Amazon EC2 Auto Scaling waits before checking the health status of an EC2 instance that has come into service.</p>
   */
  HealthCheckGracePeriod?: number;

  /**
   * <p>The EC2 instances associated with the group.</p>
   */
  Instances?: Array<_Instance> | Iterable<_Instance>;

  /**
   * <p>The date and time the group was created.</p>
   */
  CreatedTime: Date | string | number;

  /**
   * <p>The suspended processes associated with the group.</p>
   */
  SuspendedProcesses?: Array<_SuspendedProcess> | Iterable<_SuspendedProcess>;

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
  EnabledMetrics?: Array<_EnabledMetric> | Iterable<_EnabledMetric>;

  /**
   * <p>The current state of the group when <a>DeleteAutoScalingGroup</a> is in progress.</p>
   */
  Status?: string;

  /**
   * <p>The tags for the group.</p>
   */
  Tags?: Array<_TagDescription> | Iterable<_TagDescription>;

  /**
   * <p>The termination policies for the group.</p>
   */
  TerminationPolicies?: Array<string> | Iterable<string>;

  /**
   * <p>Indicates whether newly launched instances are protected from termination by Amazon EC2 Auto Scaling when scaling in.</p>
   */
  NewInstancesProtectedFromScaleIn?: boolean;

  /**
   * <p>The Amazon Resource Name (ARN) of the service-linked role that the Auto Scaling group uses to call other AWS services on your behalf.</p>
   */
  ServiceLinkedRoleARN?: string;
}

export interface _UnmarshalledAutoScalingGroup extends _AutoScalingGroup {
  /**
   * <p>The launch template for the group.</p>
   */
  LaunchTemplate?: _UnmarshalledLaunchTemplateSpecification;

  /**
   * <p>The mixed instances policy for the group. </p>
   */
  MixedInstancesPolicy?: _UnmarshalledMixedInstancesPolicy;

  /**
   * <p>One or more Availability Zones for the group.</p>
   */
  AvailabilityZones: Array<string>;

  /**
   * <p>One or more load balancers associated with the group.</p>
   */
  LoadBalancerNames?: Array<string>;

  /**
   * <p>The Amazon Resource Names (ARN) of the target groups for your load balancer.</p>
   */
  TargetGroupARNs?: Array<string>;

  /**
   * <p>The EC2 instances associated with the group.</p>
   */
  Instances?: Array<_UnmarshalledInstance>;

  /**
   * <p>The date and time the group was created.</p>
   */
  CreatedTime: Date;

  /**
   * <p>The suspended processes associated with the group.</p>
   */
  SuspendedProcesses?: Array<_UnmarshalledSuspendedProcess>;

  /**
   * <p>The metrics enabled for the group.</p>
   */
  EnabledMetrics?: Array<_UnmarshalledEnabledMetric>;

  /**
   * <p>The tags for the group.</p>
   */
  Tags?: Array<_UnmarshalledTagDescription>;

  /**
   * <p>The termination policies for the group.</p>
   */
  TerminationPolicies?: Array<string>;
}
