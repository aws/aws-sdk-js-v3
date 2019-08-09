import { _MetricValue, _UnmarshalledMetricValue } from "./_MetricValue";

/**
 * <p>One level of grouped data in the results.</p>
 */
export interface _Group {
  /**
   * <p>The keys that are included in this group.</p>
   */
  Keys?: Array<string> | Iterable<string>;

  /**
   * <p>The metrics that are included in this group.</p>
   */
  Metrics?: { [key: string]: _MetricValue } | Iterable<[string, _MetricValue]>;
}

export interface _UnmarshalledGroup extends _Group {
  /**
   * <p>The keys that are included in this group.</p>
   */
  Keys?: Array<string>;

  /**
   * <p>The metrics that are included in this group.</p>
   */
  Metrics?: { [key: string]: _UnmarshalledMetricValue };
}
