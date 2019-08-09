import {
  _AttemptContainerDetail,
  _UnmarshalledAttemptContainerDetail
} from "./_AttemptContainerDetail";

/**
 * <p>An object representing a job attempt.</p>
 */
export interface _AttemptDetail {
  /**
   * <p>Details about the container in this job attempt.</p>
   */
  container?: _AttemptContainerDetail;

  /**
   * <p>The Unix timestamp (in seconds and milliseconds) for when the attempt was started (when the attempt transitioned from the <code>STARTING</code> state to the <code>RUNNING</code> state).</p>
   */
  startedAt?: number;

  /**
   * <p>The Unix timestamp (in seconds and milliseconds) for when the attempt was stopped (when the attempt transitioned from the <code>RUNNING</code> state to a terminal state, such as <code>SUCCEEDED</code> or <code>FAILED</code>).</p>
   */
  stoppedAt?: number;

  /**
   * <p>A short, human-readable string to provide additional details about the current status of the job attempt.</p>
   */
  statusReason?: string;
}

export interface _UnmarshalledAttemptDetail extends _AttemptDetail {
  /**
   * <p>Details about the container in this job attempt.</p>
   */
  container?: _UnmarshalledAttemptContainerDetail;
}
