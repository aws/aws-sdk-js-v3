import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An update attempted to change the job execution to a state that is invalid because of the job execution's current state (for example, an attempt to change a request in state SUCCESS to state IN_PROGRESS). In this case, the body of the error message also contains the executionState field.</p>
 */
export interface InvalidStateTransitionException
  extends __ServiceException__<_InvalidStateTransitionExceptionDetails> {
  name: "InvalidStateTransitionException";
}

export interface _InvalidStateTransitionExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
