/**
 * <p>Contains data about a job execution.</p>
 */
export interface _JobExecution {
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;

  /**
   * <p>The name of the thing that is executing the job.</p>
   */
  thingName?: string;

  /**
   * <p>The status of the job execution. Can be one of: "QUEUED", "IN_PROGRESS", "FAILED", "SUCCESS", "CANCELED", "REJECTED", or "REMOVED".</p>
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
   * <p>A collection of name/value pairs that describe the status of the job execution.</p>
   */
  statusDetails?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The time, in milliseconds since the epoch, when the job execution was enqueued.</p>
   */
  queuedAt?: number;

  /**
   * <p>The time, in milliseconds since the epoch, when the job execution was started.</p>
   */
  startedAt?: number;

  /**
   * <p>The time, in milliseconds since the epoch, when the job execution was last updated. </p>
   */
  lastUpdatedAt?: number;

  /**
   * <p>The estimated number of seconds that remain before the job execution status will be changed to <code>TIMED_OUT</code>.</p>
   */
  approximateSecondsBeforeTimedOut?: number;

  /**
   * <p>The version of the job execution. Job execution versions are incremented each time they are updated by a device.</p>
   */
  versionNumber?: number;

  /**
   * <p>A number that identifies a particular job execution on a particular device. It can be used later in commands that return or update job execution information.</p>
   */
  executionNumber?: number;

  /**
   * <p>The content of the job document.</p>
   */
  jobDocument?: string;
}

export interface _UnmarshalledJobExecution extends _JobExecution {
  /**
   * <p>A collection of name/value pairs that describe the status of the job execution.</p>
   */
  statusDetails?: { [key: string]: string };
}
