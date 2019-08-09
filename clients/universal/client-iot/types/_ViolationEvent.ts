import { _Behavior, _UnmarshalledBehavior } from "./_Behavior";
import { _MetricValue, _UnmarshalledMetricValue } from "./_MetricValue";

/**
 * <p>Information about a Device Defender security profile behavior violation.</p>
 */
export interface _ViolationEvent {
  /**
   * <p>The ID of the violation event.</p>
   */
  violationId?: string;

  /**
   * <p>The name of the thing responsible for the violation event.</p>
   */
  thingName?: string;

  /**
   * <p>The name of the security profile whose behavior was violated.</p>
   */
  securityProfileName?: string;

  /**
   * <p>The behavior which was violated.</p>
   */
  behavior?: _Behavior;

  /**
   * <p>The value of the metric (the measurement).</p>
   */
  metricValue?: _MetricValue;

  /**
   * <p>The type of violation event.</p>
   */
  violationEventType?:
    | "in-alarm"
    | "alarm-cleared"
    | "alarm-invalidated"
    | string;

  /**
   * <p>The time the violation event occurred.</p>
   */
  violationEventTime?: Date | string | number;
}

export interface _UnmarshalledViolationEvent extends _ViolationEvent {
  /**
   * <p>The behavior which was violated.</p>
   */
  behavior?: _UnmarshalledBehavior;

  /**
   * <p>The value of the metric (the measurement).</p>
   */
  metricValue?: _UnmarshalledMetricValue;

  /**
   * <p>The time the violation event occurred.</p>
   */
  violationEventTime?: Date;
}
