import {
  _LaunchTemplate,
  _UnmarshalledLaunchTemplate
} from "./_LaunchTemplate";
import {
  _InstancesDistribution,
  _UnmarshalledInstancesDistribution
} from "./_InstancesDistribution";

/**
 * <p>Describes a mixed instances policy for an Auto Scaling group. With mixed instances, your Auto Scaling group can provision a combination of On-Demand Instances and Spot Instances across multiple instance types. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/asg-purchase-options.html">Auto Scaling Groups with Multiple Instance Types and Purchase Options</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p> <p>You can create a mixed instances policy for a new Auto Scaling group (<a>CreateAutoScalingGroup</a>), or you can create it for an existing group by updating the group (<a>UpdateAutoScalingGroup</a>) to specify <code>MixedInstancesPolicy</code> as the top-level parameter instead of a launch configuration or template.</p>
 */
export interface _MixedInstancesPolicy {
  /**
   * <p>The launch template and instance types (overrides).</p> <p>This parameter must be specified when creating a mixed instances policy.</p>
   */
  LaunchTemplate?: _LaunchTemplate;

  /**
   * <p>The instances distribution to use.</p> <p>If you leave this parameter unspecified when creating a mixed instances policy, the default values are used.</p>
   */
  InstancesDistribution?: _InstancesDistribution;
}

export interface _UnmarshalledMixedInstancesPolicy
  extends _MixedInstancesPolicy {
  /**
   * <p>The launch template and instance types (overrides).</p> <p>This parameter must be specified when creating a mixed instances policy.</p>
   */
  LaunchTemplate?: _UnmarshalledLaunchTemplate;

  /**
   * <p>The instances distribution to use.</p> <p>If you leave this parameter unspecified when creating a mixed instances policy, the default values are used.</p>
   */
  InstancesDistribution?: _UnmarshalledInstancesDistribution;
}
