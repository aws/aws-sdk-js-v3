/**
 * <p>Contains data about the state of a job execution.</p>
 */
export interface _JobExecutionState {
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
   * <p>The version of the job execution. Job execution versions are incremented each time they are updated by a device.</p>
   */
  versionNumber?: number;
}

export interface _UnmarshalledJobExecutionState extends _JobExecutionState {
  /**
   * <p>A collection of name/value pairs that describe the status of the job execution.</p>
   */
  statusDetails?: { [key: string]: string };
}
