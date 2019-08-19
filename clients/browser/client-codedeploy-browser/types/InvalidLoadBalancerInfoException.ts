import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An invalid load balancer name, or no load balancer name, was specified.</p>
 */
export interface InvalidLoadBalancerInfoException
  extends __ServiceException__<_InvalidLoadBalancerInfoExceptionDetails> {
  name: "InvalidLoadBalancerInfoException";
}

export interface _InvalidLoadBalancerInfoExceptionDetails {}
