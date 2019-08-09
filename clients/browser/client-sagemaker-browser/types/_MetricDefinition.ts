/**
 * <p>Specifies a metric that the training algorithm writes to <code>stderr</code> or <code>stdout</code>. Amazon SageMakerhyperparameter tuning captures all defined metrics. You specify one metric that a hyperparameter tuning job uses as its objective metric to choose the best training job.</p>
 */
export interface _MetricDefinition {
  /**
   * <p>The name of the metric.</p>
   */
  Name: string;

  /**
   * <p>A regular expression that searches the output of a training job and gets the value of the metric. For more information about using regular expressions to define metrics, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/automatic-model-tuning-define-metrics.html">Defining Objective Metrics</a>.</p>
   */
  Regex: string;
}

export type _UnmarshalledMetricDefinition = _MetricDefinition;
