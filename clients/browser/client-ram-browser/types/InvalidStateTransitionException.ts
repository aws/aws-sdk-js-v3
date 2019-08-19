import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested state transition is not valid.</p>
 */
export interface InvalidStateTransitionException
  extends __ServiceException__<_InvalidStateTransitionExceptionDetails> {
  name: "InvalidStateTransitionException";
}

export interface _InvalidStateTransitionExceptionDetails {
  /**
   * _String shape
   */
  message: string;
}
