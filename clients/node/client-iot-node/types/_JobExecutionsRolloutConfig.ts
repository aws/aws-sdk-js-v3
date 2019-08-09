import {
  _ExponentialRolloutRate,
  _UnmarshalledExponentialRolloutRate
} from "./_ExponentialRolloutRate";

/**
 * <p>Allows you to create a staged rollout of a job.</p>
 */
export interface _JobExecutionsRolloutConfig {
  /**
   * <p>The maximum number of things that will be notified of a pending job, per minute. This parameter allows you to create a staged rollout.</p>
   */
  maximumPerMinute?: number;

  /**
   * <p>The rate of increase for a job rollout. This parameter allows you to define an exponential rate for a job rollout.</p>
   */
  exponentialRate?: _ExponentialRolloutRate;
}

export interface _UnmarshalledJobExecutionsRolloutConfig
  extends _JobExecutionsRolloutConfig {
  /**
   * <p>The rate of increase for a job rollout. This parameter allows you to define an exponential rate for a job rollout.</p>
   */
  exponentialRate?: _UnmarshalledExponentialRolloutRate;
}
