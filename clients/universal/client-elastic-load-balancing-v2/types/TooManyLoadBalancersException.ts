import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You've reached the limit on the number of load balancers for your AWS account.</p>
 */
export interface TooManyLoadBalancersException
  extends __ServiceException__<_TooManyLoadBalancersExceptionDetails> {
  name: "TooManyLoadBalancersException";
}

export interface _TooManyLoadBalancersExceptionDetails {}
