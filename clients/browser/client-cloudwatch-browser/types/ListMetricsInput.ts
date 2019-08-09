import { _DimensionFilter } from "./_DimensionFilter";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListMetricsInput shape
 */
export interface ListMetricsInput {
  /**
   * <p>The namespace to filter against.</p>
   */
  Namespace?: string;

  /**
   * <p>The name of the metric to filter against.</p>
   */
  MetricName?: string;

  /**
   * <p>The dimensions to filter against.</p>
   */
  Dimensions?: Array<_DimensionFilter> | Iterable<_DimensionFilter>;

  /**
   * <p>The token returned by a previous call to indicate that there is more data available.</p>
   */
  NextToken?: string;

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
