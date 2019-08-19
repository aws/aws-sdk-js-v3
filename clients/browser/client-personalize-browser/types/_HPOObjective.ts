/**
 * <p>The metric to optimize during hyperparameter optimization (HPO).</p>
 */
export interface _HPOObjective {
  /**
   * <p>The data type of the metric.</p>
   */
  type?: string;

  /**
   * <p>The name of the metric.</p>
   */
  metricName?: string;

  /**
   * <p>A regular expression for finding the metric in the training job logs.</p>
   */
  metricRegex?: string;
}

export type _UnmarshalledHPOObjective = _HPOObjective;
