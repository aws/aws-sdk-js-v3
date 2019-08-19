/**
 * <p>Specifies the amount of time each device has to finish its execution of the job. A timer is started when the job execution status is set to <code>IN_PROGRESS</code>. If the job execution status is not set to another terminal state before the timer expires, it will be automatically set to <code>TIMED_OUT</code>.</p>
 */
export interface _TimeoutConfig {
  /**
   * <p>Specifies the amount of time, in minutes, this device has to finish execution of this job. The timeout interval can be anywhere between 1 minute and 7 days (1 to 10080 minutes). The in progress timer can't be updated and will apply to all job executions for the job. Whenever a job execution remains in the IN_PROGRESS status for longer than this interval, the job execution will fail and switch to the terminal <code>TIMED_OUT</code> status.</p>
   */
  inProgressTimeoutInMinutes?: number;
}

export type _UnmarshalledTimeoutConfig = _TimeoutConfig;
