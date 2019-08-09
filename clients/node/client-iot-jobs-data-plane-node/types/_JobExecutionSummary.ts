/**
 * <p>Contains a subset of information about a job execution.</p>
 */
export interface _JobExecutionSummary {
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the job execution was enqueued.</p>
   */
  queuedAt?: number;

  /**
   * <p>The time, in milliseconds since the epoch, when the job execution started.</p>
   */
  startedAt?: number;

  /**
   * <p>The time, in milliseconds since the epoch, when the job execution was last updated.</p>
   */
  lastUpdatedAt?: number;

  /**
   * <p>The version of the job execution. Job execution versions are incremented each time AWS IoT Jobs receives an update from a device.</p>
   */
  versionNumber?: number;

  /**
   * <p>A number that identifies a particular job execution on a particular device.</p>
   */
  executionNumber?: number;
}

export type _UnmarshalledJobExecutionSummary = _JobExecutionSummary;
