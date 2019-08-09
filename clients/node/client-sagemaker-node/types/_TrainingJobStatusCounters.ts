/**
 * <p>The numbers of training jobs launched by a hyperparameter tuning job, categorized by status.</p>
 */
export interface _TrainingJobStatusCounters {
  /**
   * <p>The number of completed training jobs launched by the hyperparameter tuning job.</p>
   */
  Completed?: number;

  /**
   * <p>The number of in-progress training jobs launched by a hyperparameter tuning job.</p>
   */
  InProgress?: number;

  /**
   * <p>The number of training jobs that failed, but can be retried. A failed training job can be retried only if it failed because an internal service error occurred.</p>
   */
  RetryableError?: number;

  /**
   * <p>The number of training jobs that failed and can't be retried. A failed training job can't be retried if it failed because a client error occurred.</p>
   */
  NonRetryableError?: number;

  /**
   * <p>The number of training jobs launched by a hyperparameter tuning job that were manually stopped.</p>
   */
  Stopped?: number;
}

export type _UnmarshalledTrainingJobStatusCounters = _TrainingJobStatusCounters;
