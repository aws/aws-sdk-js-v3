import { _Dimension, _UnmarshalledDimension } from "./_Dimension";
import {
  _AnomalyDetectorConfiguration,
  _UnmarshalledAnomalyDetectorConfiguration
} from "./_AnomalyDetectorConfiguration";

/**
 * <p>An anomaly detection model associated with a particular CloudWatch metric athresnd statistic. You can use the model to display a band of expected normal values when the metric is graphed.</p>
 */
export interface _AnomalyDetector {
  /**
   * <p>The namespace of the metric associated with the anomaly detection model.</p>
   */
  Namespace?: string;

  /**
   * <p>The name of the metric associated with the anomaly detection model.</p>
   */
  MetricName?: string;

  /**
   * <p>The metric dimensions associated with the anomaly detection model.</p>
   */
  Dimensions?: Array<_Dimension> | Iterable<_Dimension>;

  /**
   * <p>The statistic associated with the anomaly detection model.</p>
   */
  Stat?: string;

  /**
   * <p>The configuration specifies details about how the anomaly detection model is to be trained, including time ranges to exclude from use for training the model, and the time zone to use for the metric.</p>
   */
  Configuration?: _AnomalyDetectorConfiguration;
}

export interface _UnmarshalledAnomalyDetector extends _AnomalyDetector {
  /**
   * <p>The metric dimensions associated with the anomaly detection model.</p>
   */
  Dimensions?: Array<_UnmarshalledDimension>;

  /**
   * <p>The configuration specifies details about how the anomaly detection model is to be trained, including time ranges to exclude from use for training the model, and the time zone to use for the metric.</p>
   */
  Configuration?: _UnmarshalledAnomalyDetectorConfiguration;
}
