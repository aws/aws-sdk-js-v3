import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetRelationalDatabaseMetricDataInput shape
 */
export interface GetRelationalDatabaseMetricDataInput {
  /**
   * <p>The name of your database from which to get metric data.</p>
   */
  relationalDatabaseName: string;

  /**
   * <p>The name of the metric data to return.</p>
   */
  metricName:
    | "CPUUtilization"
    | "DatabaseConnections"
    | "DiskQueueDepth"
    | "FreeStorageSpace"
    | "NetworkReceiveThroughput"
    | "NetworkTransmitThroughput"
    | string;

  /**
   * <p>The granularity, in seconds, of the returned data points.</p>
   */
  period: number;

  /**
   * <p>The start of the time interval from which to get metric data.</p> <p>Constraints:</p> <ul> <li> <p>Specified in Universal Coordinated Time (UTC).</p> </li> <li> <p>Specified in the Unix time format.</p> <p>For example, if you wish to use a start time of October 1, 2018, at 8 PM UTC, then you input <code>1538424000</code> as the start time.</p> </li> </ul>
   */
  startTime: Date | string | number;

  /**
   * <p>The end of the time interval from which to get metric data.</p> <p>Constraints:</p> <ul> <li> <p>Specified in Universal Coordinated Time (UTC).</p> </li> <li> <p>Specified in the Unix time format.</p> <p>For example, if you wish to use an end time of October 1, 2018, at 8 PM UTC, then you input <code>1538424000</code> as the end time.</p> </li> </ul>
   */
  endTime: Date | string | number;

  /**
   * <p>The unit for the metric data request.</p>
   */
  unit:
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
   * <p>The array of statistics for your metric data request.</p>
   */
  statistics:
    | Array<"Minimum" | "Maximum" | "Sum" | "Average" | "SampleCount" | string>
    | Iterable<
        "Minimum" | "Maximum" | "Sum" | "Average" | "SampleCount" | string
      >;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
