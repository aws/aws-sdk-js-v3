import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The job is in a terminal state.</p>
 */
export interface TerminalStateException
  extends __ServiceException__<_TerminalStateExceptionDetails> {
  name: "TerminalStateException";
}

export interface _TerminalStateExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
