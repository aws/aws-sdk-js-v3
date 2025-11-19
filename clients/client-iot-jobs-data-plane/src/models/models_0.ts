// smithy-typescript generated code
import { JobExecutionStatus } from "./enums";

/**
 * <p>The list of values used to describe a specific command parameter.</p>
 * @public
 */
export interface CommandParameterValue {
  /**
   * <p>An attribute of type String. For example:</p>
   *          <p>
   *             <code>"S": "Hello"</code>
   *          </p>
   * @public
   */
  S?: string | undefined;

  /**
   * <p>An attribute of type Boolean. For example:</p>
   *          <p>
   *             <code>"BOOL": true</code>
   *          </p>
   * @public
   */
  B?: boolean | undefined;

  /**
   * <p>An attribute of type Integer (Thirty-Two Bits).</p>
   * @public
   */
  I?: number | undefined;

  /**
   * <p>An attribute of type Long.</p>
   * @public
   */
  L?: number | undefined;

  /**
   * <p>An attribute of type Double (Sixty-Four Bits).</p>
   * @public
   */
  D?: number | undefined;

  /**
   * <p>An attribute of type Binary.</p>
   * @public
   */
  BIN?: Uint8Array | undefined;

  /**
   * <p>An attribute of type Unsigned Long.</p>
   * @public
   */
  UL?: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobExecutionRequest {
  /**
   * <p>The unique identifier assigned to this job when it was created.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The thing name associated with the device the job execution is running on.</p>
   * @public
   */
  thingName: string | undefined;

  /**
   * <p>Optional. Unless set to false, the response contains the job document. The default is
   *          true.</p>
   * @public
   */
  includeJobDocument?: boolean | undefined;

  /**
   * <p>Optional. A number that identifies a particular job execution on a particular device.
   *          If not specified, the latest job execution is returned.</p>
   * @public
   */
  executionNumber?: number | undefined;
}

/**
 * <p>Contains data about a job execution.</p>
 * @public
 */
export interface JobExecution {
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>The name of the thing that is executing the job.</p>
   * @public
   */
  thingName?: string | undefined;

  /**
   * <p>The status of the job execution. Can be one of: "QUEUED", "IN_PROGRESS", "FAILED",
   *          "SUCCESS", "CANCELED", "TIMED_OUT", "REJECTED", or "REMOVED".</p>
   * @public
   */
  status?: JobExecutionStatus | undefined;

  /**
   * <p>A collection of name/value pairs that describe the status of the job
   *          execution.</p>
   *          <p>The maximum length of the value in the name/value pair is 1,024 characters.</p>
   * @public
   */
  statusDetails?: Record<string, string> | undefined;

  /**
   * <p>The time, in seconds since the epoch, when the job execution was enqueued.</p>
   * @public
   */
  queuedAt?: number | undefined;

  /**
   * <p>The time, in seconds since the epoch, when the job execution was started.</p>
   * @public
   */
  startedAt?: number | undefined;

  /**
   * <p>The time, in seconds since the epoch, when the job execution was last updated.
   *       </p>
   * @public
   */
  lastUpdatedAt?: number | undefined;

  /**
   * <p>The estimated number of seconds that remain before the job execution status will be
   *          changed to <code>TIMED_OUT</code>. The actual job execution timeout can occur up to 60
   *          seconds later than the estimated duration.</p>
   * @public
   */
  approximateSecondsBeforeTimedOut?: number | undefined;

  /**
   * <p>The version of the job execution. Job execution versions are incremented each time
   *          they are updated by a device.</p>
   * @public
   */
  versionNumber?: number | undefined;

  /**
   * <p>A number that identifies a particular job execution on a particular device. It can be
   *          used later in commands that return or update job execution information.</p>
   * @public
   */
  executionNumber?: number | undefined;

  /**
   * <p>The content of the job document.</p>
   * @public
   */
  jobDocument?: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobExecutionResponse {
  /**
   * <p>Contains data about a job execution.</p>
   * @public
   */
  execution?: JobExecution | undefined;
}

/**
 * @public
 */
export interface GetPendingJobExecutionsRequest {
  /**
   * <p>The name of the thing that is executing the job.</p>
   * @public
   */
  thingName: string | undefined;
}

/**
 * <p>Contains a subset of information about a job execution.</p>
 * @public
 */
export interface JobExecutionSummary {
  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   * @public
   */
  jobId?: string | undefined;

  /**
   * <p>The time, in seconds since the epoch, when the job execution was enqueued.</p>
   * @public
   */
  queuedAt?: number | undefined;

  /**
   * <p>The time, in seconds since the epoch, when the job execution started.</p>
   * @public
   */
  startedAt?: number | undefined;

  /**
   * <p>The time, in seconds since the epoch, when the job execution was last
   *          updated.</p>
   * @public
   */
  lastUpdatedAt?: number | undefined;

  /**
   * <p>The version of the job execution. Job execution versions are incremented each time
   *          IoT Jobs receives an update from a device.</p>
   * @public
   */
  versionNumber?: number | undefined;

  /**
   * <p>A number that identifies a particular job execution on a particular device.</p>
   * @public
   */
  executionNumber?: number | undefined;
}

/**
 * @public
 */
export interface GetPendingJobExecutionsResponse {
  /**
   * <p>A list of JobExecutionSummary objects with status IN_PROGRESS.</p>
   * @public
   */
  inProgressJobs?: JobExecutionSummary[] | undefined;

  /**
   * <p>A list of JobExecutionSummary objects with status QUEUED.</p>
   * @public
   */
  queuedJobs?: JobExecutionSummary[] | undefined;
}

/**
 * @public
 */
export interface StartCommandExecutionRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the device where the command execution is
   *          occurring.</p>
   * @public
   */
  targetArn: string | undefined;

  /**
   * <p>The Amazon Resource Number (ARN) of the command. For example,
   *             <code>arn:aws:iot:<region>:<accountid>:command/<commandName></code>
   *          </p>
   * @public
   */
  commandArn: string | undefined;

  /**
   * <p>A list of parameters that are required by the <code>StartCommandExecution</code> API
   *          when performing the command on a device.</p>
   * @public
   */
  parameters?: Record<string, CommandParameterValue> | undefined;

  /**
   * <p>Specifies the amount of time in second the device has to finish the command execution. A
   *          timer is started as soon as the command execution is created. If the command execution
   *          status is not set to another terminal state before the timer expires, it will automatically
   *          update to <code>TIMED_OUT</code>.</p>
   * @public
   */
  executionTimeoutSeconds?: number | undefined;

  /**
   * <p>The client token is used to implement idempotency. It ensures that the request completes
   *          no more than one time. If you retry a request with the same token and the same parameters,
   *          the request will complete successfully. However, if you retry the request using the same
   *          token but different parameters, an HTTP 409 conflict occurs. If you omit this value, Amazon Web Services
   *          SDKs will automatically generate a unique client request.</p>
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartCommandExecutionResponse {
  /**
   * <p>A unique identifier for the command execution.</p>
   * @public
   */
  executionId?: string | undefined;
}

/**
 * @public
 */
export interface StartNextPendingJobExecutionRequest {
  /**
   * <p>The name of the thing associated with the device.</p>
   * @public
   */
  thingName: string | undefined;

  /**
   * <p>A collection of name/value pairs that describe the status of the job execution. If
   *          not specified, the statusDetails are unchanged.</p>
   *          <p>The maximum length of the value in the name/value pair is 1,024 characters.</p>
   * @public
   */
  statusDetails?: Record<string, string> | undefined;

  /**
   * <p>Specifies the amount of time this device has to finish execution of this job. If the job
   *          execution status is not set to a terminal state before this timer expires, or before the
   *          timer is reset (by calling <code>UpdateJobExecution</code>, setting the status to
   *             <code>IN_PROGRESS</code>, and specifying a new timeout value in field
   *             <code>stepTimeoutInMinutes</code>) the job execution status will be automatically set to
   *             <code>TIMED_OUT</code>. Note that setting the step timeout has no effect on the in
   *          progress timeout that may have been specified when the job was created
   *             (<code>CreateJob</code> using field <code>timeoutConfig</code>).</p>
   *          <p>Valid values for this parameter range from 1 to 10080 (1 minute to 7 days).</p>
   * @public
   */
  stepTimeoutInMinutes?: number | undefined;
}

/**
 * @public
 */
export interface StartNextPendingJobExecutionResponse {
  /**
   * <p>A JobExecution object.</p>
   * @public
   */
  execution?: JobExecution | undefined;
}

/**
 * @public
 */
export interface UpdateJobExecutionRequest {
  /**
   * <p>The unique identifier assigned to this job when it was created.</p>
   * @public
   */
  jobId: string | undefined;

  /**
   * <p>The name of the thing associated with the device.</p>
   * @public
   */
  thingName: string | undefined;

  /**
   * <p>The new status for the job execution (IN_PROGRESS, FAILED, SUCCESS, or REJECTED).
   *          This must be specified on every update.</p>
   * @public
   */
  status: JobExecutionStatus | undefined;

  /**
   * <p> Optional. A collection of name/value pairs that describe the status of the job
   *          execution. If not specified, the statusDetails are unchanged.</p>
   *          <p>The maximum length of the value in the name/value pair is 1,024 characters.</p>
   * @public
   */
  statusDetails?: Record<string, string> | undefined;

  /**
   * <p>Specifies the amount of time this device has to finish execution of this job. If the job
   *          execution status is not set to a terminal state before this timer expires, or before the
   *          timer is reset (by again calling <code>UpdateJobExecution</code>, setting the status to
   *             <code>IN_PROGRESS</code>, and specifying a new timeout value in this field) the job
   *          execution status will be automatically set to <code>TIMED_OUT</code>. Note that setting or
   *          resetting the step timeout has no effect on the in progress timeout that may have been
   *          specified when the job was created (<code>CreateJob</code> using field
   *             <code>timeoutConfig</code>).</p>
   *          <p>Valid values for this parameter range from 1 to 10080 (1 minute to 7 days). A value of
   *          -1 is also valid and will cancel the current step timer (created by an earlier use of
   *             <code>UpdateJobExecutionRequest</code>).</p>
   * @public
   */
  stepTimeoutInMinutes?: number | undefined;

  /**
   * <p>Optional. The expected current version of the job execution. Each time you update the
   *          job execution, its version is incremented. If the version of the job execution stored in
   *          Jobs does not match, the update is rejected with a VersionMismatch error, and an
   *          ErrorResponse that contains the current job execution status data is returned. (This makes
   *          it unnecessary to perform a separate DescribeJobExecution request in order to obtain the
   *          job execution status data.)</p>
   * @public
   */
  expectedVersion?: number | undefined;

  /**
   * <p>Optional. When included and set to true, the response contains the JobExecutionState
   *          data. The default is false.</p>
   * @public
   */
  includeJobExecutionState?: boolean | undefined;

  /**
   * <p>Optional. When set to true, the response contains the job document. The default is
   *          false.</p>
   * @public
   */
  includeJobDocument?: boolean | undefined;

  /**
   * <p>Optional. A number that identifies a particular job execution on a particular
   *          device.</p>
   * @public
   */
  executionNumber?: number | undefined;
}

/**
 * <p>Contains data about the state of a job execution.</p>
 * @public
 */
export interface JobExecutionState {
  /**
   * <p>The status of the job execution. Can be one of: "QUEUED", "IN_PROGRESS", "FAILED",
   *          "SUCCESS", "CANCELED", "TIMED_OUT", "REJECTED", or "REMOVED".</p>
   * @public
   */
  status?: JobExecutionStatus | undefined;

  /**
   * <p>A collection of name/value pairs that describe the status of the job
   *          execution.</p>
   *          <p>The maximum length of the value in the name/value pair is 1,024 characters.</p>
   * @public
   */
  statusDetails?: Record<string, string> | undefined;

  /**
   * <p>The version of the job execution. Job execution versions are incremented each time
   *          they are updated by a device.</p>
   * @public
   */
  versionNumber?: number | undefined;
}

/**
 * @public
 */
export interface UpdateJobExecutionResponse {
  /**
   * <p>A JobExecutionState object.</p>
   * @public
   */
  executionState?: JobExecutionState | undefined;

  /**
   * <p>The contents of the Job Documents.</p>
   * @public
   */
  jobDocument?: string | undefined;
}
