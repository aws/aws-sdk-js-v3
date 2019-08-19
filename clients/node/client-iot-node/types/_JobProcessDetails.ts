/**
 * <p>The job process details.</p>
 */
export interface _JobProcessDetails {
  /**
   * <p>The target devices to which the job execution is being rolled out. This value will be null after the job execution has finished rolling out to all the target devices.</p>
   */
  processingTargets?: Array<string> | Iterable<string>;

  /**
   * <p>The number of things that cancelled the job.</p>
   */
  numberOfCanceledThings?: number;

  /**
   * <p>The number of things which successfully completed the job.</p>
   */
  numberOfSucceededThings?: number;

  /**
   * <p>The number of things that failed executing the job.</p>
   */
  numberOfFailedThings?: number;

  /**
   * <p>The number of things that rejected the job.</p>
   */
  numberOfRejectedThings?: number;

  /**
   * <p>The number of things that are awaiting execution of the job.</p>
   */
  numberOfQueuedThings?: number;

  /**
   * <p>The number of things currently executing the job.</p>
   */
  numberOfInProgressThings?: number;

  /**
   * <p>The number of things that are no longer scheduled to execute the job because they have been deleted or have been removed from the group that was a target of the job.</p>
   */
  numberOfRemovedThings?: number;

  /**
   * <p>The number of things whose job execution status is <code>TIMED_OUT</code>.</p>
   */
  numberOfTimedOutThings?: number;
}

export interface _UnmarshalledJobProcessDetails extends _JobProcessDetails {
  /**
   * <p>The target devices to which the job execution is being rolled out. This value will be null after the job execution has finished rolling out to all the target devices.</p>
   */
  processingTargets?: Array<string>;
}
