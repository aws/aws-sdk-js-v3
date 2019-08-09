import { _MetricDataQuery } from "./_MetricDataQuery";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetMetricDataInput shape
 */
export interface GetMetricDataInput {
  /**
   * <p>The metric queries to be returned. A single <code>GetMetricData</code> call can include as many as 100 <code>MetricDataQuery</code> structures. Each of these structures can specify either a metric to retrieve, or a math expression to perform on retrieved data. </p>
   */
  MetricDataQueries: Array<_MetricDataQuery> | Iterable<_MetricDataQuery>;

  /**
   * <p>The time stamp indicating the earliest data to be returned.</p> <p>For better performance, specify <code>StartTime</code> and <code>EndTime</code> values that align with the value of the metric's <code>Period</code> and sync up with the beginning and end of an hour. For example, if the <code>Period</code> of a metric is 5 minutes, specifying 12:05 or 12:30 as <code>StartTime</code> can get a faster response from CloudWatch than setting 12:07 or 12:29 as the <code>StartTime</code>.</p>
   */
  StartTime: Date | string | number;

  /**
   * <p>The time stamp indicating the latest data to be returned.</p> <p>For better performance, specify <code>StartTime</code> and <code>EndTime</code> values that align with the value of the metric's <code>Period</code> and sync up with the beginning and end of an hour. For example, if the <code>Period</code> of a metric is 5 minutes, specifying 12:05 or 12:30 as <code>EndTime</code> can get a faster response from CloudWatch than setting 12:07 or 12:29 as the <code>EndTime</code>.</p>
   */
  EndTime: Date | string | number;

  /**
   * <p>Include this value, if it was returned by the previous call, to get the next set of data points.</p>
   */
  NextToken?: string;

  /**
   * <p>The order in which data points should be returned. <code>TimestampDescending</code> returns the newest data first and paginates when the <code>MaxDatapoints</code> limit is reached. <code>TimestampAscending</code> returns the oldest data first and paginates when the <code>MaxDatapoints</code> limit is reached.</p>
   */
  ScanBy?: "TimestampDescending" | "TimestampAscending" | string;

  /**
   * <p>The maximum number of data points the request should return before paginating. If you omit this, the default of 100,800 is used.</p>
   */
  MaxDatapoints?: number;

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
