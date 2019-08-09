import { _JobManifest, _UnmarshalledJobManifest } from "./_JobManifest";
import { _JobOperation, _UnmarshalledJobOperation } from "./_JobOperation";
import {
  _JobProgressSummary,
  _UnmarshalledJobProgressSummary
} from "./_JobProgressSummary";
import { _JobFailure, _UnmarshalledJobFailure } from "./_JobFailure";
import { _JobReport, _UnmarshalledJobReport } from "./_JobReport";

/**
 * <p>A container element for the job configuration and status information returned by a <code>Describe Job</code> request.</p>
 */
export interface _JobDescriptor {
  /**
   * <p>The ID for the specified job.</p>
   */
  JobId?: string;

  /**
   * <p>Indicates whether confirmation is required before Amazon S3 begins running the specified job. Confirmation is required only for jobs created through the Amazon S3 console.</p>
   */
  ConfirmationRequired?: boolean;

  /**
   * <p>The description for this job, if one was provided in this job's <code>Create Job</code> request.</p>
   */
  Description?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for this job.</p>
   */
  JobArn?: string;

  /**
   * <p>The current status of the specified job.</p>
   */
  Status?:
    | "Active"
    | "Cancelled"
    | "Cancelling"
    | "Complete"
    | "Completing"
    | "Failed"
    | "Failing"
    | "New"
    | "Paused"
    | "Pausing"
    | "Preparing"
    | "Ready"
    | "Suspended"
    | string;

  /**
   * <p>The configuration information for the specified job's manifest object.</p>
   */
  Manifest?: _JobManifest;

  /**
   * <p>The operation that the specified job is configured to execute on the objects listed in the manifest.</p>
   */
  Operation?: _JobOperation;

  /**
   * <p>The priority of the specified job.</p>
   */
  Priority?: number;

  /**
   * <p>Describes the total number of tasks that the specified job has executed, the number of tasks that succeeded, and the number of tasks that failed.</p>
   */
  ProgressSummary?: _JobProgressSummary;

  /**
   * <p/>
   */
  StatusUpdateReason?: string;

  /**
   * <p>If the specified job failed, this field contains information describing the failure.</p>
   */
  FailureReasons?: Array<_JobFailure> | Iterable<_JobFailure>;

  /**
   * <p>Contains the configuration information for the job-completion report if you requested one in the <code>Create Job</code> request.</p>
   */
  Report?: _JobReport;

  /**
   * <p>A timestamp indicating when this job was created.</p>
   */
  CreationTime?: Date | string | number;

  /**
   * <p>A timestamp indicating when this job terminated. A job's termination date is the date and time when it succeeded, failed, or was canceled.</p>
   */
  TerminationDate?: Date | string | number;

  /**
   * <p>The Amazon Resource Name (ARN) for the Identity and Access Management (IAM) Role assigned to execute the tasks for this job.</p>
   */
  RoleArn?: string;

  /**
   * <p>The timestamp when this job was suspended, if it has been suspended.</p>
   */
  SuspendedDate?: Date | string | number;

  /**
   * <p>The reason why the specified job was suspended. A job is only suspended if you create it through the Amazon S3 console. When you create the job, it enters the <code>Suspended</code> state to await confirmation before running. After you confirm the job, it automatically exits the <code>Suspended</code> state.</p>
   */
  SuspendedCause?: string;
}

export interface _UnmarshalledJobDescriptor extends _JobDescriptor {
  /**
   * <p>The configuration information for the specified job's manifest object.</p>
   */
  Manifest?: _UnmarshalledJobManifest;

  /**
   * <p>The operation that the specified job is configured to execute on the objects listed in the manifest.</p>
   */
  Operation?: _UnmarshalledJobOperation;

  /**
   * <p>Describes the total number of tasks that the specified job has executed, the number of tasks that succeeded, and the number of tasks that failed.</p>
   */
  ProgressSummary?: _UnmarshalledJobProgressSummary;

  /**
   * <p>If the specified job failed, this field contains information describing the failure.</p>
   */
  FailureReasons?: Array<_UnmarshalledJobFailure>;

  /**
   * <p>Contains the configuration information for the job-completion report if you requested one in the <code>Create Job</code> request.</p>
   */
  Report?: _UnmarshalledJobReport;

  /**
   * <p>A timestamp indicating when this job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp indicating when this job terminated. A job's termination date is the date and time when it succeeded, failed, or was canceled.</p>
   */
  TerminationDate?: Date;

  /**
   * <p>The timestamp when this job was suspended, if it has been suspended.</p>
   */
  SuspendedDate?: Date;
}
