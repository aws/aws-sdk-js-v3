import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The quota for the number of load balancers has been reached.</p>
 */
export interface TooManyAccessPointsException
  extends __ServiceException__<_TooManyAccessPointsExceptionDetails> {
  name: "TooManyAccessPointsException";
}

export interface _TooManyAccessPointsExceptionDetails {}
