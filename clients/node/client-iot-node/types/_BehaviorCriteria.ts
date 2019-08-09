import { _MetricValue, _UnmarshalledMetricValue } from "./_MetricValue";
import {
  _StatisticalThreshold,
  _UnmarshalledStatisticalThreshold
} from "./_StatisticalThreshold";

/**
 * <p>The criteria by which the behavior is determined to be normal.</p>
 */
export interface _BehaviorCriteria {
  /**
   * <p>The operator that relates the thing measured (<code>metric</code>) to the criteria (containing a <code>value</code> or <code>statisticalThreshold</code>).</p>
   */
  comparisonOperator?:
    | "less-than"
    | "less-than-equals"
    | "greater-than"
    | "greater-than-equals"
    | "in-cidr-set"
    | "not-in-cidr-set"
    | "in-port-set"
    | "not-in-port-set"
    | string;

  /**
   * <p>The value to be compared with the <code>metric</code>.</p>
   */
  value?: _MetricValue;

  /**
   * <p>Use this to specify the time duration over which the behavior is evaluated, for those criteria which have a time dimension (for example, <code>NUM_MESSAGES_SENT</code>). For a <code>statisticalThreshhold</code> metric comparison, measurements from all devices are accumulated over this time duration before being used to calculate percentiles, and later, measurements from an individual device are also accumulated over this time duration before being given a percentile rank.</p>
   */
  durationSeconds?: number;

  /**
   * <p>If a device is in violation of the behavior for the specified number of consecutive datapoints, an alarm occurs. If not specified, the default is 1.</p>
   */
  consecutiveDatapointsToAlarm?: number;

  /**
   * <p>If an alarm has occurred and the offending device is no longer in violation of the behavior for the specified number of consecutive datapoints, the alarm is cleared. If not specified, the default is 1.</p>
   */
  consecutiveDatapointsToClear?: number;

  /**
   * <p>A statistical ranking (percentile) which indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior.</p>
   */
  statisticalThreshold?: _StatisticalThreshold;
}

export interface _UnmarshalledBehaviorCriteria extends _BehaviorCriteria {
  /**
   * <p>The value to be compared with the <code>metric</code>.</p>
   */
  value?: _UnmarshalledMetricValue;

  /**
   * <p>A statistical ranking (percentile) which indicates a threshold value by which a behavior is determined to be in compliance or in violation of the behavior.</p>
   */
  statisticalThreshold?: _UnmarshalledStatisticalThreshold;
}
