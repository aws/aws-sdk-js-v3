import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the specified scope does not exist.</p>
 */
export interface ScopeDoesNotExistException
  extends __ServiceException__<_ScopeDoesNotExistExceptionDetails> {
  name: "ScopeDoesNotExistException";
}

export interface _ScopeDoesNotExistExceptionDetails {
  /**
   * _MessageType shape
   */
  message?: string;
}
