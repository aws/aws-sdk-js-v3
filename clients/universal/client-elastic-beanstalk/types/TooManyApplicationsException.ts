import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified account has reached its limit of applications.</p>
 */
export interface TooManyApplicationsException
  extends __ServiceException__<_TooManyApplicationsExceptionDetails> {
  name: "TooManyApplicationsException";
}

export interface _TooManyApplicationsExceptionDetails {}
