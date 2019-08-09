/**
 * <p>Shows the scaling configuration for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/aurora-serverless.html">Using Amazon Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
 */
export interface _ScalingConfigurationInfo {
  /**
   * <p>The maximum capacity for the Aurora DB cluster in <code>serverless</code> DB engine mode.</p>
   */
  MinCapacity?: number;

  /**
   * <p>The maximum capacity for an Aurora DB cluster in <code>serverless</code> DB engine mode.</p>
   */
  MaxCapacity?: number;

  /**
   * <p>A value that indicates whether automatic pause is allowed for the Aurora DB cluster in <code>serverless</code> DB engine mode.</p> <p>When the value is set to false for an Aurora Serverless DB cluster, the DB cluster automatically resumes.</p>
   */
  AutoPause?: boolean;

  /**
   * <p>The remaining amount of time, in seconds, before the Aurora DB cluster in <code>serverless</code> mode is paused. A DB cluster can be paused only when it's idle (it has no connections).</p>
   */
  SecondsUntilAutoPause?: number;

  /**
   * <p>The timeout action of a call to <code>ModifyCurrentDBClusterCapacity</code>, either <code>ForceApplyCapacityChange</code> or <code>RollbackCapacityChange</code>.</p>
   */
  TimeoutAction?: string;
}

export type _UnmarshalledScalingConfigurationInfo = _ScalingConfigurationInfo;
