/**
 * <p>Describes the resource configuration for hyperparameter optimization (HPO).</p>
 */
export interface _HPOResourceConfig {
  /**
   * <p>The maximum number of training jobs.</p>
   */
  maxNumberOfTrainingJobs?: string;

  /**
   * <p>The maximum number of parallel training jobs.</p>
   */
  maxParallelTrainingJobs?: string;
}

export type _UnmarshalledHPOResourceConfig = _HPOResourceConfig;
