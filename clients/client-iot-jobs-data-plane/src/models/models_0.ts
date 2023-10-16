// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { IoTJobsDataPlaneServiceException as __BaseException } from "./IoTJobsDataPlaneServiceException";

/**
 * @public
 * <p>The certificate is invalid.</p>
 */
export class CertificateValidationException extends __BaseException {
  readonly name: "CertificateValidationException" = "CertificateValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CertificateValidationException, __BaseException>) {
    super({
      name: "CertificateValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, CertificateValidationException.prototype);
  }
}

/**
 * @public
 */
export interface DescribeJobExecutionRequest {
  /**
   * @public
   * <p>The unique identifier assigned to this job when it was created.</p>
   */
  jobId: string | undefined;

  /**
   * @public
   * <p>The thing name associated with the device the job execution is running on.</p>
   */
  thingName: string | undefined;

  /**
   * @public
   * <p>Optional. When set to true, the response contains the job document. The default is false.</p>
   */
  includeJobDocument?: boolean;

  /**
   * @public
   * <p>Optional. A number that identifies a particular job execution on a particular device. If not specified,
   *          the latest job execution is returned.</p>
   */
  executionNumber?: number;
}

/**
 * @public
 * @enum
 */
export const JobExecutionStatus = {
  CANCELED: "CANCELED",
  FAILED: "FAILED",
  IN_PROGRESS: "IN_PROGRESS",
  QUEUED: "QUEUED",
  REJECTED: "REJECTED",
  REMOVED: "REMOVED",
  SUCCEEDED: "SUCCEEDED",
  TIMED_OUT: "TIMED_OUT",
} as const;

/**
 * @public
 */
export type JobExecutionStatus = (typeof JobExecutionStatus)[keyof typeof JobExecutionStatus];

/**
 * @public
 * <p>Contains data about a job execution.</p>
 */
export interface JobExecution {
  /**
   * @public
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;

  /**
   * @public
   * <p>The name of the thing that is executing the job.</p>
   */
  thingName?: string;

  /**
   * @public
   * <p>The status of the job execution. Can be one of: "QUEUED", "IN_PROGRESS", "FAILED", "SUCCESS", "CANCELED",
   *          "REJECTED", or "REMOVED".</p>
   */
  status?: JobExecutionStatus;

  /**
   * @public
   * <p>A collection of name/value pairs that describe the status of the job execution.</p>
   */
  statusDetails?: Record<string, string>;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the job execution was enqueued.</p>
   */
  queuedAt?: number;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the job execution was started.</p>
   */
  startedAt?: number;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the job execution was last updated. </p>
   */
  lastUpdatedAt?: number;

  /**
   * @public
   * <p>The estimated number of seconds that remain before the job execution status will be
   *            changed to <code>TIMED_OUT</code>.</p>
   */
  approximateSecondsBeforeTimedOut?: number;

  /**
   * @public
   * <p>The version of the job execution. Job execution versions are incremented each time they are updated by a
   *          device.</p>
   */
  versionNumber?: number;

  /**
   * @public
   * <p>A number that identifies a particular job execution on a particular device. It can be used later in
   *          commands that return or update job execution information.</p>
   */
  executionNumber?: number;

  /**
   * @public
   * <p>The content of the job document.</p>
   */
  jobDocument?: string;
}

/**
 * @public
 */
export interface DescribeJobExecutionResponse {
  /**
   * @public
   * <p>Contains data about a job execution.</p>
   */
  execution?: JobExecution;
}

/**
 * @public
 * <p>The contents of the request were invalid. For example, this code is returned when an UpdateJobExecution request contains invalid status details. The message contains details about the error.</p>
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
  }
}

/**
 * @public
 * <p>The specified resource does not exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * @public
 * <p>The service is temporarily unavailable.</p>
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
  }
}

/**
 * @public
 * <p>The job is in a terminal state.</p>
 */
export class TerminalStateException extends __BaseException {
  readonly name: "TerminalStateException" = "TerminalStateException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TerminalStateException, __BaseException>) {
    super({
      name: "TerminalStateException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TerminalStateException.prototype);
  }
}

/**
 * @public
 * <p>The rate exceeds the limit.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @public
   * <p>The payload associated with the exception.</p>
   */
  payload?: Uint8Array;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
    this.payload = opts.payload;
  }
}

/**
 * @public
 */
export interface GetPendingJobExecutionsRequest {
  /**
   * @public
   * <p>The name of the thing that is executing the job.</p>
   */
  thingName: string | undefined;
}

/**
 * @public
 * <p>Contains a subset of information about a job execution.</p>
 */
export interface JobExecutionSummary {
  /**
   * @public
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the job execution was enqueued.</p>
   */
  queuedAt?: number;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the job execution started.</p>
   */
  startedAt?: number;

  /**
   * @public
   * <p>The time, in milliseconds since the epoch, when the job execution was last updated.</p>
   */
  lastUpdatedAt?: number;

  /**
   * @public
   * <p>The version of the job execution. Job execution versions are incremented each time AWS IoT Jobs receives
   *          an update from a device.</p>
   */
  versionNumber?: number;

  /**
   * @public
   * <p>A number that identifies a particular job execution on a particular device.</p>
   */
  executionNumber?: number;
}

/**
 * @public
 */
export interface GetPendingJobExecutionsResponse {
  /**
   * @public
   * <p>A list of JobExecutionSummary objects with status IN_PROGRESS.</p>
   */
  inProgressJobs?: JobExecutionSummary[];

  /**
   * @public
   * <p>A list of JobExecutionSummary objects with status QUEUED.</p>
   */
  queuedJobs?: JobExecutionSummary[];
}

/**
 * @public
 * <p>An update attempted to change the job execution to a state that is invalid because of the job execution's
 *          current state (for example, an attempt to change a request in state SUCCESS to state IN_PROGRESS). In this
 *          case, the body of the error message also contains the executionState field.</p>
 */
export class InvalidStateTransitionException extends __BaseException {
  readonly name: "InvalidStateTransitionException" = "InvalidStateTransitionException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidStateTransitionException, __BaseException>) {
    super({
      name: "InvalidStateTransitionException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidStateTransitionException.prototype);
  }
}

/**
 * @public
 */
export interface StartNextPendingJobExecutionRequest {
  /**
   * @public
   * <p>The name of the thing associated with the device.</p>
   */
  thingName: string | undefined;

  /**
   * @public
   * <p>A collection of name/value pairs that describe the status of the job execution. If not specified, the
   *          statusDetails are unchanged.</p>
   */
  statusDetails?: Record<string, string>;

  /**
   * @public
   * <p>Specifies the amount of time this device has to finish execution of this job. If the job
   *            execution status is not set to a terminal state before this timer expires, or before the
   *            timer is reset (by calling <code>UpdateJobExecution</code>, setting the status to
   *            <code>IN_PROGRESS</code> and specifying a new timeout value in field <code>stepTimeoutInMinutes</code>)
   *            the job execution status will be automatically set to <code>TIMED_OUT</code>.  Note that setting
   *            this timeout has no effect on that job execution timeout which may have been specified when
   *            the job was created (<code>CreateJob</code> using field <code>timeoutConfig</code>).</p>
   */
  stepTimeoutInMinutes?: number;
}

/**
 * @public
 */
export interface StartNextPendingJobExecutionResponse {
  /**
   * @public
   * <p>A JobExecution object.</p>
   */
  execution?: JobExecution;
}

/**
 * @public
 */
export interface UpdateJobExecutionRequest {
  /**
   * @public
   * <p>The unique identifier assigned to this job when it was created.</p>
   */
  jobId: string | undefined;

  /**
   * @public
   * <p>The name of the thing associated with the device.</p>
   */
  thingName: string | undefined;

  /**
   * @public
   * <p>The new status for the job execution (IN_PROGRESS, FAILED, SUCCESS, or REJECTED). This must be specified
   *          on every update.</p>
   */
  status: JobExecutionStatus | undefined;

  /**
   * @public
   * <p> Optional. A collection of name/value pairs that describe the status of the job execution. If not
   *          specified, the statusDetails are unchanged.</p>
   */
  statusDetails?: Record<string, string>;

  /**
   * @public
   * <p>Specifies the amount of time this device has to finish execution of this job. If the job
   *            execution status is not set to a terminal state before this timer expires, or before the
   *            timer is reset (by again calling <code>UpdateJobExecution</code>, setting the status to
   *            <code>IN_PROGRESS</code> and specifying a new timeout value in this field) the job execution
   *            status will be automatically set to <code>TIMED_OUT</code>.  Note that setting or resetting
   *            this timeout has no effect on that job execution timeout which may have been specified when
   *            the job was created (<code>CreateJob</code> using field <code>timeoutConfig</code>).</p>
   */
  stepTimeoutInMinutes?: number;

  /**
   * @public
   * <p>Optional. The expected current version of the job execution. Each time you update the job execution, its
   *          version is incremented. If the version of the job execution stored in Jobs does not match, the update is
   *          rejected with a VersionMismatch error, and an ErrorResponse that contains the current job execution status data
   *          is returned. (This makes it unnecessary to perform a separate DescribeJobExecution request in order to obtain
   *          the job execution status data.)</p>
   */
  expectedVersion?: number;

  /**
   * @public
   * <p>Optional. When included and set to true, the response contains the JobExecutionState data. The default is
   *          false.</p>
   */
  includeJobExecutionState?: boolean;

  /**
   * @public
   * <p>Optional. When set to true, the response contains the job document. The default is false.</p>
   */
  includeJobDocument?: boolean;

  /**
   * @public
   * <p>Optional. A number that identifies a particular job execution on a particular device.</p>
   */
  executionNumber?: number;
}

/**
 * @public
 * <p>Contains data about the state of a job execution.</p>
 */
export interface JobExecutionState {
  /**
   * @public
   * <p>The status of the job execution. Can be one of: "QUEUED", "IN_PROGRESS", "FAILED", "SUCCESS", "CANCELED",
   *          "REJECTED", or "REMOVED".</p>
   */
  status?: JobExecutionStatus;

  /**
   * @public
   * <p>A collection of name/value pairs that describe the status of the job execution.</p>
   */
  statusDetails?: Record<string, string>;

  /**
   * @public
   * <p>The version of the job execution. Job execution versions are incremented each time they are updated by a
   *          device.</p>
   */
  versionNumber?: number;
}

/**
 * @public
 */
export interface UpdateJobExecutionResponse {
  /**
   * @public
   * <p>A JobExecutionState object.</p>
   */
  executionState?: JobExecutionState;

  /**
   * @public
   * <p>The contents of the Job Documents.</p>
   */
  jobDocument?: string;
}
