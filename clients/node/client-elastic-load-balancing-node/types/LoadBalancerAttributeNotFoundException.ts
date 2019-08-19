import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified load balancer attribute does not exist.</p>
 */
export interface LoadBalancerAttributeNotFoundException
  extends __ServiceException__<_LoadBalancerAttributeNotFoundExceptionDetails> {
  name: "LoadBalancerAttributeNotFoundException";
}

export interface _LoadBalancerAttributeNotFoundExceptionDetails {}
