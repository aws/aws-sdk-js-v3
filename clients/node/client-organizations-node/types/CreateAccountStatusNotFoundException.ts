import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>We can't find an create account request with the <code>CreateAccountRequestId</code> that you specified.</p>
 */
export interface CreateAccountStatusNotFoundException
  extends __ServiceException__<_CreateAccountStatusNotFoundExceptionDetails> {
  name: "CreateAccountStatusNotFoundException";
}

export interface _CreateAccountStatusNotFoundExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
