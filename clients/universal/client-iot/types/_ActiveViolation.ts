import { _Behavior, _UnmarshalledBehavior } from "./_Behavior";
import { _MetricValue, _UnmarshalledMetricValue } from "./_MetricValue";

/**
 * <p>Information about an active Device Defender security profile behavior violation.</p>
 */
export interface _ActiveViolation {
  /**
   * <p>The ID of the active violation.</p>
   */
  violationId?: string;

  /**
   * <p>The name of the thing responsible for the active violation.</p>
   */
  thingName?: string;

  /**
   * <p>The security profile whose behavior is in violation.</p>
   */
  securityProfileName?: string;

  /**
   * <p>The behavior which is being violated.</p>
   */
  behavior?: _Behavior;

  /**
   * <p>The value of the metric (the measurement) which caused the most recent violation.</p>
   */
  lastViolationValue?: _MetricValue;

  /**
   * <p>The time the most recent violation occurred.</p>
   */
  lastViolationTime?: Date | string | number;

  /**
   * <p>The time the violation started.</p>
   */
  violationStartTime?: Date | string | number;
}

export interface _UnmarshalledActiveViolation extends _ActiveViolation {
  /**
   * <p>The behavior which is being violated.</p>
   */
  behavior?: _UnmarshalledBehavior;

  /**
   * <p>The value of the metric (the measurement) which caused the most recent violation.</p>
   */
  lastViolationValue?: _UnmarshalledMetricValue;

  /**
   * <p>The time the most recent violation occurred.</p>
   */
  lastViolationTime?: Date;

  /**
   * <p>The time the violation started.</p>
   */
  violationStartTime?: Date;
}
