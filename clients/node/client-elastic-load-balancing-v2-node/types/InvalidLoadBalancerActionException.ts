import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested action is not valid.</p>
 */
export interface InvalidLoadBalancerActionException
  extends __ServiceException__<_InvalidLoadBalancerActionExceptionDetails> {
  name: "InvalidLoadBalancerActionException";
}

export interface _InvalidLoadBalancerActionExceptionDetails {}
