import {
  _WeeklyAutoScalingSchedule,
  _UnmarshalledWeeklyAutoScalingSchedule
} from "./_WeeklyAutoScalingSchedule";

/**
 * <p>Describes an instance's time-based auto scaling configuration.</p>
 */
export interface _TimeBasedAutoScalingConfiguration {
  /**
   * <p>The instance ID.</p>
   */
  InstanceId?: string;

  /**
   * <p>A <code>WeeklyAutoScalingSchedule</code> object with the instance schedule.</p>
   */
  AutoScalingSchedule?: _WeeklyAutoScalingSchedule;
}

export interface _UnmarshalledTimeBasedAutoScalingConfiguration
  extends _TimeBasedAutoScalingConfiguration {
  /**
   * <p>A <code>WeeklyAutoScalingSchedule</code> object with the instance schedule.</p>
   */
  AutoScalingSchedule?: _UnmarshalledWeeklyAutoScalingSchedule;
}
