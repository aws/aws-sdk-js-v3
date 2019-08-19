import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You've reached the limit on the number of targets.</p>
 */
export interface TooManyTargetsException
  extends __ServiceException__<_TooManyTargetsExceptionDetails> {
  name: "TooManyTargetsException";
}

export interface _TooManyTargetsExceptionDetails {}
