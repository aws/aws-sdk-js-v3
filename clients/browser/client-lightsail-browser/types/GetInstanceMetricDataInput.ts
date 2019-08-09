import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetInstanceMetricDataInput shape
 */
export interface GetInstanceMetricDataInput {
  /**
   * <p>The name of the instance for which you want to get metrics data.</p>
   */
  instanceName: string;

  /**
   * <p>The metric name to get data about. </p>
   */
  metricName:
    | "CPUUtilization"
    | "NetworkIn"
    | "NetworkOut"
    | "StatusCheckFailed"
    | "StatusCheckFailed_Instance"
    | "StatusCheckFailed_System"
    | string;

  /**
   * <p>The granularity, in seconds, of the returned data points.</p>
   */
  period: number;

  /**
   * <p>The start time of the time period.</p>
   */
  startTime: Date | string | number;

  /**
   * <p>The end time of the time period.</p>
   */
  endTime: Date | string | number;

  /**
   * <p>The unit. The list of valid values is below.</p>
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
   * <p>The instance statistics. </p>
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
