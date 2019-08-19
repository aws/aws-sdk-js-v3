import { _Dimension } from "./_Dimension";
import { _AnomalyDetectorConfiguration } from "./_AnomalyDetectorConfiguration";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * PutAnomalyDetectorInput shape
 */
export interface PutAnomalyDetectorInput {
  /**
   * <p>The namespace of the metric to create the anomaly detection model for.</p>
   */
  Namespace: string;

  /**
   * <p>The name of the metric to create the anomaly detection model for.</p>
   */
  MetricName: string;

  /**
   * <p>The metric dimensions to create the anomaly detection model for.</p>
   */
  Dimensions?: Array<_Dimension> | Iterable<_Dimension>;

  /**
   * <p>The statistic to use for the metric and the anomaly detection model.</p>
   */
  Stat: string;

  /**
   * <p>The configuration specifies details about how the anomaly detection model is to be trained, including time ranges to exclude when training and updating the model. You can specify as many as 10 time ranges.</p> <p>The configuration can also include the time zone to use for the metric.</p> <p>You can in</p>
   */
  Configuration?: _AnomalyDetectorConfiguration;

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
