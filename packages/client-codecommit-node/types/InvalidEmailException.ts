import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified email address either contains one or more characters that are not allowed, or it exceeds the maximum number of characters allowed for an email address.</p>
 */
export interface InvalidEmailException
  extends __ServiceException__<_InvalidEmailExceptionDetails> {
  name: "InvalidEmailException";
}

export interface _InvalidEmailExceptionDetails {}
