import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have exceeded the maximum number of allowed platforms associated with the account.</p>
 */
export interface TooManyPlatformsException
  extends __ServiceException__<_TooManyPlatformsExceptionDetails> {
  name: "TooManyPlatformsException";
}

export interface _TooManyPlatformsExceptionDetails {}
