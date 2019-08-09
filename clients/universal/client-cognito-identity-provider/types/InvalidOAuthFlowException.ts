import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the specified OAuth flow is invalid.</p>
 */
export interface InvalidOAuthFlowException
  extends __ServiceException__<_InvalidOAuthFlowExceptionDetails> {
  name: "InvalidOAuthFlowException";
}

export interface _InvalidOAuthFlowExceptionDetails {
  /**
   * _MessageType shape
   */
  message?: string;
}
