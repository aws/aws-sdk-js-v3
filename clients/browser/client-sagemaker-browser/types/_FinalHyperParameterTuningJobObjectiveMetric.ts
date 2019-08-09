/**
 * <p>Shows the final value for the objective metric for a training job that was launched by a hyperparameter tuning job. You define the objective metric in the <code>HyperParameterTuningJobObjective</code> parameter of <a>HyperParameterTuningJobConfig</a>.</p>
 */
export interface _FinalHyperParameterTuningJobObjectiveMetric {
  /**
   * <p>Whether to minimize or maximize the objective metric. Valid values are Minimize and Maximize.</p>
   */
  Type?: "Maximize" | "Minimize" | string;

  /**
   * <p>The name of the objective metric.</p>
   */
  MetricName: string;

  /**
   * <p>The value of the objective metric.</p>
   */
  Value: number;
}

export type _UnmarshalledFinalHyperParameterTuningJobObjectiveMetric = _FinalHyperParameterTuningJobObjectiveMetric;
