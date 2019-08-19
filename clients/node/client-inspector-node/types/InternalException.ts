import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Internal server error.</p>
 */
export interface InternalException
  extends __ServiceException__<_InternalExceptionDetails> {
  name: "InternalException";
}

export interface _InternalExceptionDetails {
  /**
   * <p>Details of the exception error.</p>
   */
  message: string;

  /**
   * <p>You can immediately retry your request.</p>
   */
  canRetry: boolean;
}
