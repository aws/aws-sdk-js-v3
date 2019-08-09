import { _ErrorDetails, _UnmarshalledErrorDetails } from "./_ErrorDetails";

/**
 * <p>Represents information about the run of an action.</p>
 */
export interface _ActionExecution {
  /**
   * <p>The status of the action, or for a completed action, the last status of the action.</p>
   */
  status?: "InProgress" | "Succeeded" | "Failed" | string;

  /**
   * <p>A summary of the run of the action.</p>
   */
  summary?: string;

  /**
   * <p>The last status change of the action.</p>
   */
  lastStatusChange?: Date | string | number;

  /**
   * <p>The system-generated token used to identify a unique approval request. The token for each open approval request can be obtained using the <code>GetPipelineState</code> command and is used to validate that the approval request corresponding to this token is still valid.</p>
   */
  token?: string;

  /**
   * <p>The ARN of the user who last changed the pipeline.</p>
   */
  lastUpdatedBy?: string;

  /**
   * <p>The external ID of the run of the action.</p>
   */
  externalExecutionId?: string;

  /**
   * <p>The URL of a resource external to AWS that will be used when running the action, for example an external repository URL.</p>
   */
  externalExecutionUrl?: string;

  /**
   * <p>A percentage of completeness of the action as it runs.</p>
   */
  percentComplete?: number;

  /**
   * <p>The details of an error returned by a URL external to AWS.</p>
   */
  errorDetails?: _ErrorDetails;
}

export interface _UnmarshalledActionExecution extends _ActionExecution {
  /**
   * <p>The last status change of the action.</p>
   */
  lastStatusChange?: Date;

  /**
   * <p>The details of an error returned by a URL external to AWS.</p>
   */
  errorDetails?: _UnmarshalledErrorDetails;
}
