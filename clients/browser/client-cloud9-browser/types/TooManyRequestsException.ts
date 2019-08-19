import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Too many service requests were made over the given time period.</p>
 */
export interface TooManyRequestsException
  extends __ServiceException__<_TooManyRequestsExceptionDetails> {
  name: "TooManyRequestsException";
}

export interface _TooManyRequestsExceptionDetails {}
