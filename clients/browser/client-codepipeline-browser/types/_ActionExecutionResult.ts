/**
 * <p>Execution result information, such as the external execution ID.</p>
 */
export interface _ActionExecutionResult {
  /**
   * <p>The action provider's external ID for the action execution.</p>
   */
  externalExecutionId?: string;

  /**
   * <p>The action provider's summary for the action execution.</p>
   */
  externalExecutionSummary?: string;

  /**
   * <p>The deepest external link to the external resource (for example, a repository URL or deployment endpoint) that is used when running the action.</p>
   */
  externalExecutionUrl?: string;
}

export type _UnmarshalledActionExecutionResult = _ActionExecutionResult;
