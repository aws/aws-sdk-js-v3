import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You've reached the limit on the number of listeners per load balancer.</p>
 */
export interface TooManyListenersException
  extends __ServiceException__<_TooManyListenersExceptionDetails> {
  name: "TooManyListenersException";
}

export interface _TooManyListenersExceptionDetails {}
