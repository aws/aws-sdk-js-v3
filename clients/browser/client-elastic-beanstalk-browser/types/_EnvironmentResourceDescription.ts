import {
  _AutoScalingGroup,
  _UnmarshalledAutoScalingGroup
} from "./_AutoScalingGroup";
import { _Instance, _UnmarshalledInstance } from "./_Instance";
import {
  _LaunchConfiguration,
  _UnmarshalledLaunchConfiguration
} from "./_LaunchConfiguration";
import {
  _LaunchTemplate,
  _UnmarshalledLaunchTemplate
} from "./_LaunchTemplate";
import { _LoadBalancer, _UnmarshalledLoadBalancer } from "./_LoadBalancer";
import { _Trigger, _UnmarshalledTrigger } from "./_Trigger";
import { _Queue, _UnmarshalledQueue } from "./_Queue";

/**
 * <p>Describes the AWS resources in use by this environment. This data is live.</p>
 */
export interface _EnvironmentResourceDescription {
  /**
   * <p>The name of the environment.</p>
   */
  EnvironmentName?: string;

  /**
   * <p> The <code>AutoScalingGroups</code> used by this environment. </p>
   */
  AutoScalingGroups?: Array<_AutoScalingGroup> | Iterable<_AutoScalingGroup>;

  /**
   * <p>The Amazon EC2 instances used by this environment.</p>
   */
  Instances?: Array<_Instance> | Iterable<_Instance>;

  /**
   * <p>The Auto Scaling launch configurations in use by this environment.</p>
   */
  LaunchConfigurations?:
    | Array<_LaunchConfiguration>
    | Iterable<_LaunchConfiguration>;

  /**
   * <p>The Amazon EC2 launch templates in use by this environment.</p>
   */
  LaunchTemplates?: Array<_LaunchTemplate> | Iterable<_LaunchTemplate>;

  /**
   * <p>The LoadBalancers in use by this environment.</p>
   */
  LoadBalancers?: Array<_LoadBalancer> | Iterable<_LoadBalancer>;

  /**
   * <p>The <code>AutoScaling</code> triggers in use by this environment. </p>
   */
  Triggers?: Array<_Trigger> | Iterable<_Trigger>;

  /**
   * <p>The queues used by this environment.</p>
   */
  Queues?: Array<_Queue> | Iterable<_Queue>;
}

export interface _UnmarshalledEnvironmentResourceDescription
  extends _EnvironmentResourceDescription {
  /**
   * <p> The <code>AutoScalingGroups</code> used by this environment. </p>
   */
  AutoScalingGroups?: Array<_UnmarshalledAutoScalingGroup>;

  /**
   * <p>The Amazon EC2 instances used by this environment.</p>
   */
  Instances?: Array<_UnmarshalledInstance>;

  /**
   * <p>The Auto Scaling launch configurations in use by this environment.</p>
   */
  LaunchConfigurations?: Array<_UnmarshalledLaunchConfiguration>;

  /**
   * <p>The Amazon EC2 launch templates in use by this environment.</p>
   */
  LaunchTemplates?: Array<_UnmarshalledLaunchTemplate>;

  /**
   * <p>The LoadBalancers in use by this environment.</p>
   */
  LoadBalancers?: Array<_UnmarshalledLoadBalancer>;

  /**
   * <p>The <code>AutoScaling</code> triggers in use by this environment. </p>
   */
  Triggers?: Array<_UnmarshalledTrigger>;

  /**
   * <p>The queues used by this environment.</p>
   */
  Queues?: Array<_UnmarshalledQueue>;
}
