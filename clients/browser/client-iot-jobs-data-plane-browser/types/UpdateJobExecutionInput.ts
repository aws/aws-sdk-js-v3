import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateJobExecutionInput shape
 */
export interface UpdateJobExecutionInput {
  /**
   * <p>The unique identifier assigned to this job when it was created.</p>
   */
  jobId: string;

  /**
   * <p>The name of the thing associated with the device.</p>
   */
  thingName: string;

  /**
   * <p>The new status for the job execution (IN_PROGRESS, FAILED, SUCCESS, or REJECTED). This must be specified on every update.</p>
   */
  status:
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
   * <p> Optional. A collection of name/value pairs that describe the status of the job execution. If not specified, the statusDetails are unchanged.</p>
   */
  statusDetails?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>Specifies the amount of time this device has to finish execution of this job. If the job execution status is not set to a terminal state before this timer expires, or before the timer is reset (by again calling <code>UpdateJobExecution</code>, setting the status to <code>IN_PROGRESS</code> and specifying a new timeout value in this field) the job execution status will be automatically set to <code>TIMED_OUT</code>. Note that setting or resetting this timeout has no effect on that job execution timeout which may have been specified when the job was created (<code>CreateJob</code> using field <code>timeoutConfig</code>).</p>
   */
  stepTimeoutInMinutes?: number;

  /**
   * <p>Optional. The expected current version of the job execution. Each time you update the job execution, its version is incremented. If the version of the job execution stored in Jobs does not match, the update is rejected with a VersionMismatch error, and an ErrorResponse that contains the current job execution status data is returned. (This makes it unnecessary to perform a separate DescribeJobExecution request in order to obtain the job execution status data.)</p>
   */
  expectedVersion?: number;

  /**
   * <p>Optional. When included and set to true, the response contains the JobExecutionState data. The default is false.</p>
   */
  includeJobExecutionState?: boolean;

  /**
   * <p>Optional. When set to true, the response contains the job document. The default is false.</p>
   */
  includeJobDocument?: boolean;

  /**
   * <p>Optional. A number that identifies a particular job execution on a particular device.</p>
   */
  executionNumber?: number;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
