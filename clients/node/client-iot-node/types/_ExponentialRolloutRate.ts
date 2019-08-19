import {
  _RateIncreaseCriteria,
  _UnmarshalledRateIncreaseCriteria
} from "./_RateIncreaseCriteria";

/**
 * <p>Allows you to create an exponential rate of rollout for a job.</p>
 */
export interface _ExponentialRolloutRate {
  /**
   * <p>The minimum number of things that will be notified of a pending job, per minute at the start of job rollout. This parameter allows you to define the initial rate of rollout.</p>
   */
  baseRatePerMinute: number;

  /**
   * <p>The exponential factor to increase the rate of rollout for a job.</p>
   */
  incrementFactor: number;

  /**
   * <p>The criteria to initiate the increase in rate of rollout for a job.</p> <p>AWS IoT supports up to one digit after the decimal (for example, 1.5, but not 1.55).</p>
   */
  rateIncreaseCriteria: _RateIncreaseCriteria;
}

export interface _UnmarshalledExponentialRolloutRate
  extends _ExponentialRolloutRate {
  /**
   * <p>The criteria to initiate the increase in rate of rollout for a job.</p> <p>AWS IoT supports up to one digit after the decimal (for example, 1.5, but not 1.55).</p>
   */
  rateIncreaseCriteria: _UnmarshalledRateIncreaseCriteria;
}
