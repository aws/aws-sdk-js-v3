import { _DateInterval, _UnmarshalledDateInterval } from "./_DateInterval";
import { _MetricValue, _UnmarshalledMetricValue } from "./_MetricValue";
import { _Group, _UnmarshalledGroup } from "./_Group";

/**
 * <p>The result that is associated with a time period.</p>
 */
export interface _ResultByTime {
  /**
   * <p>The time period that the result covers.</p>
   */
  TimePeriod?: _DateInterval;

  /**
   * <p>The total amount of cost or usage accrued during the time period.</p>
   */
  Total?: { [key: string]: _MetricValue } | Iterable<[string, _MetricValue]>;

  /**
   * <p>The groups that this time period includes.</p>
   */
  Groups?: Array<_Group> | Iterable<_Group>;

  /**
   * <p>Whether the result is estimated.</p>
   */
  Estimated?: boolean;
}

export interface _UnmarshalledResultByTime extends _ResultByTime {
  /**
   * <p>The time period that the result covers.</p>
   */
  TimePeriod?: _UnmarshalledDateInterval;

  /**
   * <p>The total amount of cost or usage accrued during the time period.</p>
   */
  Total?: { [key: string]: _UnmarshalledMetricValue };

  /**
   * <p>The groups that this time period includes.</p>
   */
  Groups?: Array<_UnmarshalledGroup>;
}
