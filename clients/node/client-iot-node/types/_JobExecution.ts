import {
  _JobExecutionStatusDetails,
  _UnmarshalledJobExecutionStatusDetails
} from "./_JobExecutionStatusDetails";

/**
 * <p>The job execution object represents the execution of a job on a particular device.</p>
 */
export interface _JobExecution {
  /**
   * <p>The unique identifier you assigned to the job when it was created.</p>
   */
  jobId?: string;

  /**
   * <p>The status of the job execution (IN_PROGRESS, QUEUED, FAILED, SUCCEEDED, TIMED_OUT, CANCELED, or REJECTED).</p>
   */
  status?:
    | "QUEUED"
    | "IN_PROGRESS"
    | "SUCCEEDED"
    | "FAILED"
    | "TIMED_OUT"
    | "REJECTED"
    | "REMOVED"
    | "CANCELED"
    | string;

  /**
   * <p>Will be <code>true</code> if the job execution was canceled with the optional <code>force</code> parameter set to <code>true</code>.</p>
   */
  forceCanceled?: boolean;

  /**
   * <p>A collection of name/value pairs that describe the status of the job execution.</p>
   */
  statusDetails?: _JobExecutionStatusDetails;

  /**
   * <p>The ARN of the thing on which the job execution is running.</p>
   */
  thingArn?: string;

  /**
   * <p>The time, in seconds since the epoch, when the job execution was queued.</p>
   */
  queuedAt?: Date | string | number;

  /**
   * <p>The time, in seconds since the epoch, when the job execution started.</p>
   */
  startedAt?: Date | string | number;

  /**
   * <p>The time, in seconds since the epoch, when the job execution was last updated.</p>
   */
  lastUpdatedAt?: Date | string | number;

  /**
   * <p>A string (consisting of the digits "0" through "9") which identifies this particular job execution on this particular device. It can be used in commands which return or update job execution information. </p>
   */
  executionNumber?: number;

  /**
   * <p>The version of the job execution. Job execution versions are incremented each time they are updated by a device.</p>
   */
  versionNumber?: number;

  /**
   * <p>The estimated number of seconds that remain before the job execution status will be changed to <code>TIMED_OUT</code>. The timeout interval can be anywhere between 1 minute and 7 days (1 to 10080 minutes). The actual job execution timeout can occur up to 60 seconds later than the estimated duration. This value will not be included if the job execution has reached a terminal status.</p>
   */
  approximateSecondsBeforeTimedOut?: number;
}

export interface _UnmarshalledJobExecution extends _JobExecution {
  /**
   * <p>A collection of name/value pairs that describe the status of the job execution.</p>
   */
  statusDetails?: _UnmarshalledJobExecutionStatusDetails;

  /**
   * <p>The time, in seconds since the epoch, when the job execution was queued.</p>
   */
  queuedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job execution started.</p>
   */
  startedAt?: Date;

  /**
   * <p>The time, in seconds since the epoch, when the job execution was last updated.</p>
   */
  lastUpdatedAt?: Date;
}
