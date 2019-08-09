/**
 * <p>Name of the step from the SSM document.</p>
 */
export interface _RemediationExecutionStep {
  /**
   * <p>The details of the step.</p>
   */
  Name?: string;

  /**
   * <p>The valid status of the step.</p>
   */
  State?: "SUCCEEDED" | "PENDING" | "FAILED" | string;

  /**
   * <p>An error message if the step was interrupted during execution.</p>
   */
  ErrorMessage?: string;

  /**
   * <p>The time when the step started.</p>
   */
  StartTime?: Date | string | number;

  /**
   * <p>The time when the step stopped.</p>
   */
  StopTime?: Date | string | number;
}

export interface _UnmarshalledRemediationExecutionStep
  extends _RemediationExecutionStep {
  /**
   * <p>The time when the step started.</p>
   */
  StartTime?: Date;

  /**
   * <p>The time when the step stopped.</p>
   */
  StopTime?: Date;
}
