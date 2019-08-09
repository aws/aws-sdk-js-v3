import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified load balancer does not exist.</p>
 */
export interface LoadBalancerNotFoundException
  extends __ServiceException__<_LoadBalancerNotFoundExceptionDetails> {
  name: "LoadBalancerNotFoundException";
}

export interface _LoadBalancerNotFoundExceptionDetails {}
