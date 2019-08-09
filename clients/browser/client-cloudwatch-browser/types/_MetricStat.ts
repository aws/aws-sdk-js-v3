import { _Metric, _UnmarshalledMetric } from "./_Metric";

/**
 * <p>This structure defines the metric to be returned, along with the statistics, period, and units.</p>
 */
export interface _MetricStat {
  /**
   * <p>The metric to return, including the metric name, namespace, and dimensions.</p>
   */
  Metric: _Metric;

  /**
   * <p>The period, in seconds, to use when retrieving the metric.</p>
   */
  Period: number;

  /**
   * <p>The statistic to return. It can include any CloudWatch statistic or extended statistic.</p>
   */
  Stat: string;

  /**
   * <p>When you are using a <code>Put</code> operation, this defines what unit you want to use when storing the metric. In a <code>Get</code> operation, this displays the unit that is used for the metric.</p>
   */
  Unit?:
    | "Seconds"
    | "Microseconds"
    | "Milliseconds"
    | "Bytes"
    | "Kilobytes"
    | "Megabytes"
    | "Gigabytes"
    | "Terabytes"
    | "Bits"
    | "Kilobits"
    | "Megabits"
    | "Gigabits"
    | "Terabits"
    | "Percent"
    | "Count"
    | "Bytes/Second"
    | "Kilobytes/Second"
    | "Megabytes/Second"
    | "Gigabytes/Second"
    | "Terabytes/Second"
    | "Bits/Second"
    | "Kilobits/Second"
    | "Megabits/Second"
    | "Gigabits/Second"
    | "Terabits/Second"
    | "Count/Second"
    | "None"
    | string;
}

export interface _UnmarshalledMetricStat extends _MetricStat {
  /**
   * <p>The metric to return, including the metric name, namespace, and dimensions.</p>
   */
  Metric: _UnmarshalledMetric;
}
