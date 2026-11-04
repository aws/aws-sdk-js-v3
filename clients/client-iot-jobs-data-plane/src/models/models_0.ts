// smithy-typescript generated code
import type { JobExecutionStatus } from "./enums";

/**
 * The list of values used to describe a specific command parameter.
 *
 * @public
 */
export interface CommandParameterValue {
  /**
   * An attribute of type String. For example:
   *
   * `"S": "Hello"`
   *
   * @public
   */
  S?: string | undefined;

  /**
   * An attribute of type Boolean. For example:
   *
   * `"BOOL": true`
   *
   * @public
   */
  B?: boolean | undefined;

  /**
   * An attribute of type Integer (Thirty-Two Bits).
   *
   * @public
   */
  I?: number | undefined;

  /**
   * An attribute of type Long.
   *
   * @public
   */
  L?: number | undefined;

  /**
   * An attribute of type Double (Sixty-Four Bits).
   *
   * @public
   */
  D?: number | undefined;

  /**
   * An attribute of type Binary.
   *
   * @public
   */
  BIN?: Uint8Array | undefined;

  /**
   * An attribute of type Unsigned Long.
   *
   * @public
   */
  UL?: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobExecutionRequest {
  /**
   * The unique identifier assigned to this job when it was created.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The thing name associated with the device the job execution is running on.
   *
   * @public
   */
  thingName: string | undefined;

  /**
   * Optional. Unless set to false, the response contains the job document. The default is true.
   *
   * @public
   */
  includeJobDocument?: boolean | undefined;

  /**
   * Optional. A number that identifies a particular job execution on a particular device. If not specified, the latest job execution is returned.
   *
   * @public
   */
  executionNumber?: number | undefined;
}

/**
 * Contains data about a job execution.
 *
 * @public
 */
export interface JobExecution {
  /**
   * The unique identifier you assigned to this job when it was created.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * The name of the thing that is executing the job.
   *
   * @public
   */
  thingName?: string | undefined;

  /**
   * The status of the job execution. Can be one of: "QUEUED", "IN_PROGRESS", "FAILED", "SUCCESS", "CANCELED", "TIMED_OUT", "REJECTED", or "REMOVED".
   *
   * @public
   */
  status?: JobExecutionStatus | undefined;

  /**
   * A collection of name/value pairs that describe the status of the job execution.
   *
   * The maximum length of the value in the name/value pair is 1,024 characters.
   *
   * @public
   */
  statusDetails?: Record<string, string> | undefined;

  /**
   * The time, in seconds since the epoch, when the job execution was enqueued.
   *
   * @public
   */
  queuedAt?: number | undefined;

  /**
   * The time, in seconds since the epoch, when the job execution was started.
   *
   * @public
   */
  startedAt?: number | undefined;

  /**
   * The time, in seconds since the epoch, when the job execution was last updated.
   *
   * @public
   */
  lastUpdatedAt?: number | undefined;

  /**
   * The estimated number of seconds that remain before the job execution status will be changed to `TIMED_OUT`. The actual job execution timeout can occur up to 60 seconds later than the estimated duration.
   *
   * @public
   */
  approximateSecondsBeforeTimedOut?: number | undefined;

  /**
   * The version of the job execution. Job execution versions are incremented each time they are updated by a device.
   *
   * @public
   */
  versionNumber?: number | undefined;

  /**
   * A number that identifies a particular job execution on a particular device. It can be used later in commands that return or update job execution information.
   *
   * @public
   */
  executionNumber?: number | undefined;

  /**
   * The content of the job document.
   *
   * @public
   */
  jobDocument?: string | undefined;
}

/**
 * @public
 */
export interface DescribeJobExecutionResponse {
  /**
   * Contains data about a job execution.
   *
   * @public
   */
  execution?: JobExecution | undefined;
}

/**
 * @public
 */
export interface GetPendingJobExecutionsRequest {
  /**
   * The name of the thing that is executing the job.
   *
   * @public
   */
  thingName: string | undefined;
}

/**
 * Contains a subset of information about a job execution.
 *
 * @public
 */
export interface JobExecutionSummary {
  /**
   * The unique identifier you assigned to this job when it was created.
   *
   * @public
   */
  jobId?: string | undefined;

  /**
   * The time, in seconds since the epoch, when the job execution was enqueued.
   *
   * @public
   */
  queuedAt?: number | undefined;

  /**
   * The time, in seconds since the epoch, when the job execution started.
   *
   * @public
   */
  startedAt?: number | undefined;

  /**
   * The time, in seconds since the epoch, when the job execution was last updated.
   *
   * @public
   */
  lastUpdatedAt?: number | undefined;

  /**
   * The version of the job execution. Job execution versions are incremented each time IoT Jobs receives an update from a device.
   *
   * @public
   */
  versionNumber?: number | undefined;

  /**
   * A number that identifies a particular job execution on a particular device.
   *
   * @public
   */
  executionNumber?: number | undefined;
}

/**
 * @public
 */
export interface GetPendingJobExecutionsResponse {
  /**
   * A list of JobExecutionSummary objects with status IN_PROGRESS.
   *
   * @public
   */
  inProgressJobs?: JobExecutionSummary[] | undefined;

  /**
   * A list of JobExecutionSummary objects with status QUEUED.
   *
   * @public
   */
  queuedJobs?: JobExecutionSummary[] | undefined;
}

/**
 * @public
 */
export interface StartCommandExecutionRequest {
  /**
   * The Amazon Resource Number (ARN) of the device where the command execution is occurring.
   *
   * @public
   */
  targetArn: string | undefined;

  /**
   * The Amazon Resource Number (ARN) of the command. For example, `arn:aws:iot:<region>:<accountid>:command/<commandName>`
   *
   * @public
   */
  commandArn: string | undefined;

  /**
   * A list of parameters that are required by the `StartCommandExecution` API when performing the command on a device.
   *
   * @public
   */
  parameters?: Record<string, CommandParameterValue> | undefined;

  /**
   * Specifies the amount of time in second the device has to finish the command execution. A timer is started as soon as the command execution is created. If the command execution status is not set to another terminal state before the timer expires, it will automatically update to `TIMED_OUT`.
   *
   * @public
   */
  executionTimeoutSeconds?: number | undefined;

  /**
   * The client token is used to implement idempotency. It ensures that the request completes no more than one time. If you retry a request with the same token and the same parameters, the request will complete successfully. However, if you retry the request using the same token but different parameters, an HTTP 409 conflict occurs. If you omit this value, Amazon Web Services SDKs will automatically generate a unique client request.
   *
   * @public
   */
  clientToken?: string | undefined;
}

/**
 * @public
 */
export interface StartCommandExecutionResponse {
  /**
   * A unique identifier for the command execution.
   *
   * @public
   */
  executionId?: string | undefined;
}

/**
 * @public
 */
export interface StartNextPendingJobExecutionRequest {
  /**
   * The name of the thing associated with the device.
   *
   * @public
   */
  thingName: string | undefined;

  /**
   * A collection of name/value pairs that describe the status of the job execution. If not specified, the statusDetails are unchanged.
   *
   * The maximum length of the value in the name/value pair is 1,024 characters.
   *
   * @public
   */
  statusDetails?: Record<string, string> | undefined;

  /**
   * Specifies the amount of time this device has to finish execution of this job. If the job execution status is not set to a terminal state before this timer expires, or before the timer is reset (by calling `UpdateJobExecution`, setting the status to `IN_PROGRESS`, and specifying a new timeout value in field `stepTimeoutInMinutes`) the job execution status will be automatically set to `TIMED_OUT`. Note that setting the step timeout has no effect on the in progress timeout that may have been specified when the job was created (`CreateJob` using field `timeoutConfig`).
   *
   * Valid values for this parameter range from 1 to 10080 (1 minute to 7 days).
   *
   * @public
   */
  stepTimeoutInMinutes?: number | undefined;
}

/**
 * @public
 */
export interface StartNextPendingJobExecutionResponse {
  /**
   * A JobExecution object.
   *
   * @public
   */
  execution?: JobExecution | undefined;
}

/**
 * @public
 */
export interface UpdateJobExecutionRequest {
  /**
   * The unique identifier assigned to this job when it was created.
   *
   * @public
   */
  jobId: string | undefined;

  /**
   * The name of the thing associated with the device.
   *
   * @public
   */
  thingName: string | undefined;

  /**
   * The new status for the job execution (IN_PROGRESS, FAILED, SUCCESS, or REJECTED). This must be specified on every update.
   *
   * @public
   */
  status: JobExecutionStatus | undefined;

  /**
   * Optional. A collection of name/value pairs that describe the status of the job execution. If not specified, the statusDetails are unchanged.
   *
   * The maximum length of the value in the name/value pair is 1,024 characters.
   *
   * @public
   */
  statusDetails?: Record<string, string> | undefined;

  /**
   * Specifies the amount of time this device has to finish execution of this job. If the job execution status is not set to a terminal state before this timer expires, or before the timer is reset (by again calling `UpdateJobExecution`, setting the status to `IN_PROGRESS`, and specifying a new timeout value in this field) the job execution status will be automatically set to `TIMED_OUT`. Note that setting or resetting the step timeout has no effect on the in progress timeout that may have been specified when the job was created (`CreateJob` using field `timeoutConfig`).
   *
   * Valid values for this parameter range from 1 to 10080 (1 minute to 7 days). A value of -1 is also valid and will cancel the current step timer (created by an earlier use of `UpdateJobExecutionRequest`).
   *
   * @public
   */
  stepTimeoutInMinutes?: number | undefined;

  /**
   * Optional. The expected current version of the job execution. Each time you update the job execution, its version is incremented. If the version of the job execution stored in Jobs does not match, the update is rejected with a VersionMismatch error, and an ErrorResponse that contains the current job execution status data is returned. (This makes it unnecessary to perform a separate DescribeJobExecution request in order to obtain the job execution status data.)
   *
   * @public
   */
  expectedVersion?: number | undefined;

  /**
   * Optional. When included and set to true, the response contains the JobExecutionState data. The default is false.
   *
   * @public
   */
  includeJobExecutionState?: boolean | undefined;

  /**
   * Optional. When set to true, the response contains the job document. The default is false.
   *
   * @public
   */
  includeJobDocument?: boolean | undefined;

  /**
   * Optional. A number that identifies a particular job execution on a particular device.
   *
   * @public
   */
  executionNumber?: number | undefined;
}

/**
 * Contains data about the state of a job execution.
 *
 * @public
 */
export interface JobExecutionState {
  /**
   * The status of the job execution. Can be one of: "QUEUED", "IN_PROGRESS", "FAILED", "SUCCESS", "CANCELED", "TIMED_OUT", "REJECTED", or "REMOVED".
   *
   * @public
   */
  status?: JobExecutionStatus | undefined;

  /**
   * A collection of name/value pairs that describe the status of the job execution.
   *
   * The maximum length of the value in the name/value pair is 1,024 characters.
   *
   * @public
   */
  statusDetails?: Record<string, string> | undefined;

  /**
   * The version of the job execution. Job execution versions are incremented each time they are updated by a device.
   *
   * @public
   */
  versionNumber?: number | undefined;
}

/**
 * @public
 */
export interface UpdateJobExecutionResponse {
  /**
   * A JobExecutionState object.
   *
   * @public
   */
  executionState?: JobExecutionState | undefined;

  /**
   * The contents of the Job Documents.
   *
   * @public
   */
  jobDocument?: string | undefined;
}
