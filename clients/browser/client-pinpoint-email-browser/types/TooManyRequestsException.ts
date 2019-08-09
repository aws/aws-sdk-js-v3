import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Too many requests have been made to the operation.</p>
 */
export interface TooManyRequestsException
  extends __ServiceException__<_TooManyRequestsExceptionDetails> {
  name: "TooManyRequestsException";
}

export interface _TooManyRequestsExceptionDetails {}
