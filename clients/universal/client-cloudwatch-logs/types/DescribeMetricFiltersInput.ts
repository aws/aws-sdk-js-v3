import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeMetricFiltersInput shape
 */
export interface DescribeMetricFiltersInput {
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName?: string;

  /**
   * <p>The prefix to match.</p>
   */
  filterNamePrefix?: string;

  /**
   * <p>The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  nextToken?: string;

  /**
   * <p>The maximum number of items returned. If you don't specify a value, the default is up to 50 items.</p>
   */
  limit?: number;

  /**
   * <p>Filters results to include only those with the specified metric name. If you include this parameter in your request, you must also include the <code>metricNamespace</code> parameter.</p>
   */
  metricName?: string;

  /**
   * <p>Filters results to include only those in the specified namespace. If you include this parameter in your request, you must also include the <code>metricName</code> parameter.</p>
   */
  metricNamespace?: string;

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
