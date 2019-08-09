/**
 * <p>The job execution summary.</p>
 */
export interface _JobExecutionSummary {
  /**
   * <p>The status of the job execution.</p>
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
   * <p>A string (consisting of the digits "0" through "9") which identifies this particular job execution on this particular device. It can be used later in commands which return or update job execution information.</p>
   */
  executionNumber?: number;
}

export interface _UnmarshalledJobExecutionSummary extends _JobExecutionSummary {
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
