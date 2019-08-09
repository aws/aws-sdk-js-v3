import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified account has reached its limit of environments.</p>
 */
export interface TooManyEnvironmentsException
  extends __ServiceException__<_TooManyEnvironmentsExceptionDetails> {
  name: "TooManyEnvironmentsException";
}

export interface _TooManyEnvironmentsExceptionDetails {}
