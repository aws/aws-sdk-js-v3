/**
 * <p>Encapsulates the statistical data that CloudWatch computes from metric data.</p>
 */
export interface _Datapoint {
  /**
   * <p>The time stamp used for the data point.</p>
   */
  Timestamp?: Date | string | number;

  /**
   * <p>The number of metric values that contributed to the aggregate value of this data point.</p>
   */
  SampleCount?: number;

  /**
   * <p>The average of the metric values that correspond to the data point.</p>
   */
  Average?: number;

  /**
   * <p>The sum of the metric values for the data point.</p>
   */
  Sum?: number;

  /**
   * <p>The minimum metric value for the data point.</p>
   */
  Minimum?: number;

  /**
   * <p>The maximum metric value for the data point.</p>
   */
  Maximum?: number;

  /**
   * <p>The standard unit for the data point.</p>
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

  /**
   * <p>The percentile statistic for the data point.</p>
   */
  ExtendedStatistics?: { [key: string]: number } | Iterable<[string, number]>;
}

export interface _UnmarshalledDatapoint extends _Datapoint {
  /**
   * <p>The time stamp used for the data point.</p>
   */
  Timestamp?: Date;

  /**
   * <p>The percentile statistic for the data point.</p>
   */
  ExtendedStatistics?: { [key: string]: number };
}
