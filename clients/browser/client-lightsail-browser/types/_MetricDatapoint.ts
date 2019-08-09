/**
 * <p>Describes the metric data point.</p>
 */
export interface _MetricDatapoint {
  /**
   * <p>The average.</p>
   */
  average?: number;

  /**
   * <p>The maximum.</p>
   */
  maximum?: number;

  /**
   * <p>The minimum.</p>
   */
  minimum?: number;

  /**
   * <p>The sample count.</p>
   */
  sampleCount?: number;

  /**
   * <p>The sum.</p>
   */
  sum?: number;

  /**
   * <p>The timestamp (e.g., <code>1479816991.349</code>).</p>
   */
  timestamp?: Date | string | number;

  /**
   * <p>The unit. </p>
   */
  unit?:
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

export interface _UnmarshalledMetricDatapoint extends _MetricDatapoint {
  /**
   * <p>The timestamp (e.g., <code>1479816991.349</code>).</p>
   */
  timestamp?: Date;
}
