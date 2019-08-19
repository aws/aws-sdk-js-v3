/**
 * <p>Defines the objective metric for a hyperparameter tuning job. Hyperparameter tuning uses the value of this metric to evaluate the training jobs it launches, and returns the training job that results in either the highest or lowest value for this metric, depending on the value you specify for the <code>Type</code> parameter.</p>
 */
export interface _HyperParameterTuningJobObjective {
  /**
   * <p>Whether to minimize or maximize the objective metric.</p>
   */
  Type: "Maximize" | "Minimize" | string;

  /**
   * <p>The name of the metric to use for the objective metric.</p>
   */
  MetricName: string;
}

export type _UnmarshalledHyperParameterTuningJobObjective = _HyperParameterTuningJobObjective;
