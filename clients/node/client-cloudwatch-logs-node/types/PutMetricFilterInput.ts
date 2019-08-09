import { _MetricTransformation } from "./_MetricTransformation";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutMetricFilterInput shape
 */
export interface PutMetricFilterInput {
  /**
   * <p>The name of the log group.</p>
   */
  logGroupName: string;

  /**
   * <p>A name for the metric filter.</p>
   */
  filterName: string;

  /**
   * <p>A filter pattern for extracting metric data out of ingested log events.</p>
   */
  filterPattern: string;

  /**
   * <p>A collection of information that defines how metric data gets emitted.</p>
   */
  metricTransformations:
    | Array<_MetricTransformation>
    | Iterable<_MetricTransformation>;

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
