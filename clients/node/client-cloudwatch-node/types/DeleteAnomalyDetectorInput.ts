import { _Dimension } from "./_Dimension";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteAnomalyDetectorInput shape
 */
export interface DeleteAnomalyDetectorInput {
  /**
   * <p>The namespace associated with the anomaly detection model to delete.</p>
   */
  Namespace: string;

  /**
   * <p>The metric name associated with the anomaly detection model to delete.</p>
   */
  MetricName: string;

  /**
   * <p>The metric dimensions associated with the anomaly detection model to delete.</p>
   */
  Dimensions?: Array<_Dimension> | Iterable<_Dimension>;

  /**
   * <p>The statistic associated with the anomaly detection model to delete.</p>
   */
  Stat: string;

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
