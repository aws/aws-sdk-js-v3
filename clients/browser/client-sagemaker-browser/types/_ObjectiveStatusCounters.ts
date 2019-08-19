/**
 * <p>Specifies the number of training jobs that this hyperparameter tuning job launched, categorized by the status of their objective metric. The objective metric status shows whether the final objective metric for the training job has been evaluated by the tuning job and used in the hyperparameter tuning process.</p>
 */
export interface _ObjectiveStatusCounters {
  /**
   * <p>The number of training jobs whose final objective metric was evaluated by the hyperparameter tuning job and used in the hyperparameter tuning process.</p>
   */
  Succeeded?: number;

  /**
   * <p>The number of training jobs that are in progress and pending evaluation of their final objective metric.</p>
   */
  Pending?: number;

  /**
   * <p>The number of training jobs whose final objective metric was not evaluated and used in the hyperparameter tuning process. This typically occurs when the training job failed or did not emit an objective metric.</p>
   */
  Failed?: number;
}

export type _UnmarshalledObjectiveStatusCounters = _ObjectiveStatusCounters;
