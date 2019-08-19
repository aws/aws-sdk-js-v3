/**
 * <p>Represents information about failure details.</p>
 */
export interface _FailureDetails {
  /**
   * <p>The type of the failure.</p>
   */
  type:
    | "JobFailed"
    | "ConfigurationError"
    | "PermissionError"
    | "RevisionOutOfSync"
    | "RevisionUnavailable"
    | "SystemUnavailable"
    | string;

  /**
   * <p>The message about the failure.</p>
   */
  message: string;

  /**
   * <p>The external ID of the run of the action that failed.</p>
   */
  externalExecutionId?: string;
}

export type _UnmarshalledFailureDetails = _FailureDetails;
