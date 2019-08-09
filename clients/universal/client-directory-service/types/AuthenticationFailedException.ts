import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An authentication error occurred.</p>
 */
export interface AuthenticationFailedException
  extends __ServiceException__<_AuthenticationFailedExceptionDetails> {
  name: "AuthenticationFailedException";
}

export interface _AuthenticationFailedExceptionDetails {
  /**
   * <p>The textual message for the exception.</p>
   */
  Message?: string;

  /**
   * <p>The identifier of the request that caused the exception.</p>
   */
  RequestId?: string;
}
