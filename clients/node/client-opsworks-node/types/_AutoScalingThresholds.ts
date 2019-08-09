/**
 * <p>Describes a load-based auto scaling upscaling or downscaling threshold configuration, which specifies when AWS OpsWorks Stacks starts or stops load-based instances.</p>
 */
export interface _AutoScalingThresholds {
  /**
   * <p>The number of instances to add or remove when the load exceeds a threshold.</p>
   */
  InstanceCount?: number;

  /**
   * <p>The amount of time, in minutes, that the load must exceed a threshold before more instances are added or removed.</p>
   */
  ThresholdsWaitTime?: number;

  /**
   * <p>The amount of time (in minutes) after a scaling event occurs that AWS OpsWorks Stacks should ignore metrics and suppress additional scaling events. For example, AWS OpsWorks Stacks adds new instances following an upscaling event but the instances won't start reducing the load until they have been booted and configured. There is no point in raising additional scaling events during that operation, which typically takes several minutes. <code>IgnoreMetricsTime</code> allows you to direct AWS OpsWorks Stacks to suppress scaling events long enough to get the new instances online.</p>
   */
  IgnoreMetricsTime?: number;

  /**
   * <p>The CPU utilization threshold, as a percent of the available CPU. A value of -1 disables the threshold.</p>
   */
  CpuThreshold?: number;

  /**
   * <p>The memory utilization threshold, as a percent of the available memory. A value of -1 disables the threshold.</p>
   */
  MemoryThreshold?: number;

  /**
   * <p>The load threshold. A value of -1 disables the threshold. For more information about how load is computed, see <a href="http://en.wikipedia.org/wiki/Load_%28computing%29">Load (computing)</a>.</p>
   */
  LoadThreshold?: number;

  /**
   * <p>Custom Cloudwatch auto scaling alarms, to be used as thresholds. This parameter takes a list of up to five alarm names, which are case sensitive and must be in the same region as the stack.</p> <note> <p>To use custom alarms, you must update your service role to allow <code>cloudwatch:DescribeAlarms</code>. You can either have AWS OpsWorks Stacks update the role for you when you first use this feature or you can edit the role manually. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-servicerole.html">Allowing AWS OpsWorks Stacks to Act on Your Behalf</a>.</p> </note>
   */
  Alarms?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledAutoScalingThresholds
  extends _AutoScalingThresholds {
  /**
   * <p>Custom Cloudwatch auto scaling alarms, to be used as thresholds. This parameter takes a list of up to five alarm names, which are case sensitive and must be in the same region as the stack.</p> <note> <p>To use custom alarms, you must update your service role to allow <code>cloudwatch:DescribeAlarms</code>. You can either have AWS OpsWorks Stacks update the role for you when you first use this feature or you can edit the role manually. For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-servicerole.html">Allowing AWS OpsWorks Stacks to Act on Your Behalf</a>.</p> </note>
   */
  Alarms?: Array<string>;
}
