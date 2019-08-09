import {
  _JobProgressSummary,
  _UnmarshalledJobProgressSummary
} from "./_JobProgressSummary";

/**
 * <p>Contains the configuration and status information for a single job retrieved as part of a job list.</p>
 */
export interface _JobListDescriptor {
  /**
   * <p>The ID for the specified job.</p>
   */
  JobId?: string;

  /**
   * <p>The user-specified description that was included in the specified job's <code>Create Job</code> request.</p>
   */
  Description?: string;

  /**
   * <p>The operation that the specified job is configured to run on each object listed in the manifest.</p>
   */
  Operation?:
    | "LambdaInvoke"
    | "S3PutObjectCopy"
    | "S3PutObjectAcl"
    | "S3PutObjectTagging"
    | "S3InitiateRestoreObject"
    | string;

  /**
   * <p>The current priority for the specified job.</p>
   */
  Priority?: number;

  /**
   * <p>The specified job's current status.</p>
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
   * <p>A timestamp indicating when the specified job was created.</p>
   */
  CreationTime?: Date | string | number;

  /**
   * <p>A timestamp indicating when the specified job terminated. A job's termination date is the date and time when it succeeded, failed, or was canceled.</p>
   */
  TerminationDate?: Date | string | number;

  /**
   * <p>Describes the total number of tasks that the specified job has executed, the number of tasks that succeeded, and the number of tasks that failed.</p>
   */
  ProgressSummary?: _JobProgressSummary;
}

export interface _UnmarshalledJobListDescriptor extends _JobListDescriptor {
  /**
   * <p>A timestamp indicating when the specified job was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>A timestamp indicating when the specified job terminated. A job's termination date is the date and time when it succeeded, failed, or was canceled.</p>
   */
  TerminationDate?: Date;

  /**
   * <p>Describes the total number of tasks that the specified job has executed, the number of tasks that succeeded, and the number of tasks that failed.</p>
   */
  ProgressSummary?: _UnmarshalledJobProgressSummary;
}
