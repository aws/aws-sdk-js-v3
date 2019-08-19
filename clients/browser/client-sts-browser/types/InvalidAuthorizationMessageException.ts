import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The error returned if the message passed to <code>DecodeAuthorizationMessage</code> was invalid. This can happen if the token contains invalid characters, such as linebreaks. </p>
 */
export interface InvalidAuthorizationMessageException
  extends __ServiceException__<_InvalidAuthorizationMessageExceptionDetails> {
  name: "InvalidAuthorizationMessageException";
}

export interface _InvalidAuthorizationMessageExceptionDetails {
  /**
   * _invalidAuthorizationMessage shape
   */
  message?: string;
}
