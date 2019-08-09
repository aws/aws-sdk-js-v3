import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified account has reached its limit of application versions.</p>
 */
export interface TooManyApplicationVersionsException
  extends __ServiceException__<_TooManyApplicationVersionsExceptionDetails> {
  name: "TooManyApplicationVersionsException";
}

export interface _TooManyApplicationVersionsExceptionDetails {}
