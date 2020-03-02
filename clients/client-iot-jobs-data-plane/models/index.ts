import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>The certificate is invalid.</p>
 */
export interface CertificateValidationException
  extends __SmithyException,
    $MetadataBearer {
  name: "CertificateValidationException";
  $fault: "client";
  /**
   * <p>Additional information about the exception.</p>
   */
  message?: string;
}

export namespace CertificateValidationException {
  export function isa(o: any): o is CertificateValidationException {
    return __isa(o, "CertificateValidationException");
  }
}

/**
 * <p>The contents of the request were invalid. For example, this code is returned when an UpdateJobExecution request contains invalid status details. The message contains details about the error.</p>
 */
export interface InvalidRequestException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidRequestException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace InvalidRequestException {
  export function isa(o: any): o is InvalidRequestException {
    return __isa(o, "InvalidRequestException");
  }
}

/**
 * <p>An update attempted to change the job execution to a state that is invalid because of the job execution's
 *          current state (for example, an attempt to change a request in state SUCCESS to state IN_PROGRESS). In this
 *          case, the body of the error message also contains the executionState field.</p>
 */
export interface InvalidStateTransitionException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidStateTransitionException";
  $fault: "client";
  message?: string;
}

export namespace InvalidStateTransitionException {
  export function isa(o: any): o is InvalidStateTransitionException {
    return __isa(o, "InvalidStateTransitionException");
  }
}

/**
 * <p>The specified resource does not exist.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

/**
 * <p>The service is temporarily unavailable.</p>
 */
export interface ServiceUnavailableException
  extends __SmithyException,
    $MetadataBearer {
  name: "ServiceUnavailableException";
  $fault: "server";
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}

export namespace ServiceUnavailableException {
  export function isa(o: any): o is ServiceUnavailableException {
    return __isa(o, "ServiceUnavailableException");
  }
}

/**
 * <p>The job is in a terminal state.</p>
 */
export interface TerminalStateException
  extends __SmithyException,
    $MetadataBearer {
  name: "TerminalStateException";
  $fault: "client";
  message?: string;
}

export namespace TerminalStateException {
  export function isa(o: any): o is TerminalStateException {
    return __isa(o, "TerminalStateException");
  }
}

export enum JobExecutionStatus {
  CANCELED = "CANCELED",
  FAILED = "FAILED",
  IN_PROGRESS = "IN_PROGRESS",
  QUEUED = "QUEUED",
  REJECTED = "REJECTED",
  REMOVED = "REMOVED",
  SUCCEEDED = "SUCCEEDED",
  TIMED_OUT = "TIMED_OUT"
}

/**
 * <p>The rate exceeds the limit.</p>
 */
export interface ThrottlingException
  extends __SmithyException,
    $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  /**
   * <p>The message associated with the exception.</p>
   */
  message?: string;

  /**
   * <p>The payload associated with the exception.</p>
   */
  payload?: Uint8Array;
}

export namespace ThrottlingException {
  export function isa(o: any): o is ThrottlingException {
    return __isa(o, "ThrottlingException");
  }
}

export interface DescribeJobExecutionRequest {
  __type?: "DescribeJobExecutionRequest";
  /**
   * <p>Optional. A number that identifies a particular job execution on a particular device. If not specified,
   *          the latest job execution is returned.</p>
   */
  executionNumber?: number;

  /**
   * <p>Optional. When set to true, the response contains the job document. The default is false.</p>
   */
  includeJobDocument?: boolean;

  /**
   * <p>The unique identifier assigned to this job when it was created.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The thing name associated with the device the job execution is running on.</p>
   */
  thingName: string | undefined;
}

export namespace DescribeJobExecutionRequest {
  export function isa(o: any): o is DescribeJobExecutionRequest {
    return __isa(o, "DescribeJobExecutionRequest");
  }
}

export interface DescribeJobExecutionResponse {
  __type?: "DescribeJobExecutionResponse";
  /**
   * <p>Contains data about a job execution.</p>
   */
  execution?: JobExecution;
}

export namespace DescribeJobExecutionResponse {
  export function isa(o: any): o is DescribeJobExecutionResponse {
    return __isa(o, "DescribeJobExecutionResponse");
  }
}

export interface GetPendingJobExecutionsRequest {
  __type?: "GetPendingJobExecutionsRequest";
  /**
   * <p>The name of the thing that is executing the job.</p>
   */
  thingName: string | undefined;
}

export namespace GetPendingJobExecutionsRequest {
  export function isa(o: any): o is GetPendingJobExecutionsRequest {
    return __isa(o, "GetPendingJobExecutionsRequest");
  }
}

export interface GetPendingJobExecutionsResponse {
  __type?: "GetPendingJobExecutionsResponse";
  /**
   * <p>A list of JobExecutionSummary objects with status IN_PROGRESS.</p>
   */
  inProgressJobs?: Array<JobExecutionSummary>;

  /**
   * <p>A list of JobExecutionSummary objects with status QUEUED.</p>
   */
  queuedJobs?: Array<JobExecutionSummary>;
}

export namespace GetPendingJobExecutionsResponse {
  export function isa(o: any): o is GetPendingJobExecutionsResponse {
    return __isa(o, "GetPendingJobExecutionsResponse");
  }
}

/**
 * <p>Contains data about a job execution.</p>
 */
export interface JobExecution {
  __type?: "JobExecution";
  /**
   * <p>The estimated number of seconds that remain before the job execution status will be
   *            changed to <code>TIMED_OUT</code>.</p>
   */
  approximateSecondsBeforeTimedOut?: number;

  /**
   * <p>A number that identifies a particular job execution on a particular device. It can be used later in
   *          commands that return or update job execution information.</p>
   */
  executionNumber?: number;

  /**
   * <p>The content of the job document.</p>
   */
  jobDocument?: string;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the job execution was last updated. </p>
   */
  lastUpdatedAt?: number;

  /**
   * <p>The time, in milliseconds since the epoch, when the job execution was enqueued.</p>
   */
  queuedAt?: number;

  /**
   * <p>The time, in milliseconds since the epoch, when the job execution was started.</p>
   */
  startedAt?: number;

  /**
   * <p>The status of the job execution. Can be one of: "QUEUED", "IN_PROGRESS", "FAILED", "SUCCESS", "CANCELED",
   *          "REJECTED", or "REMOVED".</p>
   */
  status?: JobExecutionStatus | string;

  /**
   * <p>A collection of name/value pairs that describe the status of the job execution.</p>
   */
  statusDetails?: { [key: string]: string };

  /**
   * <p>The name of the thing that is executing the job.</p>
   */
  thingName?: string;

  /**
   * <p>The version of the job execution. Job execution versions are incremented each time they are updated by a
   *          device.</p>
   */
  versionNumber?: number;
}

export namespace JobExecution {
  export function isa(o: any): o is JobExecution {
    return __isa(o, "JobExecution");
  }
}

/**
 * <p>Contains data about the state of a job execution.</p>
 */
export interface JobExecutionState {
  __type?: "JobExecutionState";
  /**
   * <p>The status of the job execution. Can be one of: "QUEUED", "IN_PROGRESS", "FAILED", "SUCCESS", "CANCELED",
   *          "REJECTED", or "REMOVED".</p>
   */
  status?: JobExecutionStatus | string;

  /**
   * <p>A collection of name/value pairs that describe the status of the job execution.</p>
   */
  statusDetails?: { [key: string]: string };

  /**
   * <p>The version of the job execution. Job execution versions are incremented each time they are updated by a
   *          device.</p>
   */
  versionNumber?: number;
}

export namespace JobExecutionState {
  export function isa(o: any): o is JobExecutionState {
    return __isa(o, "JobExecutionState");
  }
}

/**
 * <p>Contains a subset of information about a job execution.</p>
 */
export interface JobExecutionSummary {
  __type?: "JobExecutionSummary";
  /**
   * <p>A number that identifies a particular job execution on a particular device.</p>
   */
  executionNumber?: number;

  /**
   * <p>The unique identifier you assigned to this job when it was created.</p>
   */
  jobId?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the job execution was last updated.</p>
   */
  lastUpdatedAt?: number;

  /**
   * <p>The time, in milliseconds since the epoch, when the job execution was enqueued.</p>
   */
  queuedAt?: number;

  /**
   * <p>The time, in milliseconds since the epoch, when the job execution started.</p>
   */
  startedAt?: number;

  /**
   * <p>The version of the job execution. Job execution versions are incremented each time AWS IoT Jobs receives
   *          an update from a device.</p>
   */
  versionNumber?: number;
}

export namespace JobExecutionSummary {
  export function isa(o: any): o is JobExecutionSummary {
    return __isa(o, "JobExecutionSummary");
  }
}

export interface StartNextPendingJobExecutionRequest {
  __type?: "StartNextPendingJobExecutionRequest";
  /**
   * <p>A collection of name/value pairs that describe the status of the job execution. If not specified, the
   *          statusDetails are unchanged.</p>
   */
  statusDetails?: { [key: string]: string };

  /**
   * <p>Specifies the amount of time this device has to finish execution of this job. If the job
   *            execution status is not set to a terminal state before this timer expires, or before the
   *            timer is reset (by calling <code>UpdateJobExecution</code>, setting the status to
   *            <code>IN_PROGRESS</code> and specifying a new timeout value in field <code>stepTimeoutInMinutes</code>)
   *            the job execution status will be automatically set to <code>TIMED_OUT</code>.  Note that setting
   *            this timeout has no effect on that job execution timeout which may have been specified when
   *            the job was created (<code>CreateJob</code> using field <code>timeoutConfig</code>).</p>
   */
  stepTimeoutInMinutes?: number;

  /**
   * <p>The name of the thing associated with the device.</p>
   */
  thingName: string | undefined;
}

export namespace StartNextPendingJobExecutionRequest {
  export function isa(o: any): o is StartNextPendingJobExecutionRequest {
    return __isa(o, "StartNextPendingJobExecutionRequest");
  }
}

export interface StartNextPendingJobExecutionResponse {
  __type?: "StartNextPendingJobExecutionResponse";
  /**
   * <p>A JobExecution object.</p>
   */
  execution?: JobExecution;
}

export namespace StartNextPendingJobExecutionResponse {
  export function isa(o: any): o is StartNextPendingJobExecutionResponse {
    return __isa(o, "StartNextPendingJobExecutionResponse");
  }
}

export interface UpdateJobExecutionRequest {
  __type?: "UpdateJobExecutionRequest";
  /**
   * <p>Optional. A number that identifies a particular job execution on a particular device.</p>
   */
  executionNumber?: number;

  /**
   * <p>Optional. The expected current version of the job execution. Each time you update the job execution, its
   *          version is incremented. If the version of the job execution stored in Jobs does not match, the update is
   *          rejected with a VersionMismatch error, and an ErrorResponse that contains the current job execution status data
   *          is returned. (This makes it unnecessary to perform a separate DescribeJobExecution request in order to obtain
   *          the job execution status data.)</p>
   */
  expectedVersion?: number;

  /**
   * <p>Optional. When set to true, the response contains the job document. The default is false.</p>
   */
  includeJobDocument?: boolean;

  /**
   * <p>Optional. When included and set to true, the response contains the JobExecutionState data. The default is
   *          false.</p>
   */
  includeJobExecutionState?: boolean;

  /**
   * <p>The unique identifier assigned to this job when it was created.</p>
   */
  jobId: string | undefined;

  /**
   * <p>The new status for the job execution (IN_PROGRESS, FAILED, SUCCESS, or REJECTED). This must be specified
   *          on every update.</p>
   */
  status: JobExecutionStatus | string | undefined;

  /**
   * <p> Optional. A collection of name/value pairs that describe the status of the job execution. If not
   *          specified, the statusDetails are unchanged.</p>
   */
  statusDetails?: { [key: string]: string };

  /**
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
   * <p>The name of the thing associated with the device.</p>
   */
  thingName: string | undefined;
}

export namespace UpdateJobExecutionRequest {
  export function isa(o: any): o is UpdateJobExecutionRequest {
    return __isa(o, "UpdateJobExecutionRequest");
  }
}

export interface UpdateJobExecutionResponse {
  __type?: "UpdateJobExecutionResponse";
  /**
   * <p>A JobExecutionState object.</p>
   */
  executionState?: JobExecutionState;

  /**
   * <p>The contents of the Job Documents.</p>
   */
  jobDocument?: string;
}

export namespace UpdateJobExecutionResponse {
  export function isa(o: any): o is UpdateJobExecutionResponse {
    return __isa(o, "UpdateJobExecutionResponse");
  }
}
