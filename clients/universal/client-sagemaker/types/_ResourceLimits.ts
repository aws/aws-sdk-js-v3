/**
 * <p>Specifies the maximum number of training jobs and parallel training jobs that a hyperparameter tuning job can launch.</p>
 */
export interface _ResourceLimits {
  /**
   * <p>The maximum number of training jobs that a hyperparameter tuning job can launch.</p>
   */
  MaxNumberOfTrainingJobs: number;

  /**
   * <p>The maximum number of concurrent training jobs that a hyperparameter tuning job can launch.</p>
   */
  MaxParallelTrainingJobs: number;
}

export type _UnmarshalledResourceLimits = _ResourceLimits;
