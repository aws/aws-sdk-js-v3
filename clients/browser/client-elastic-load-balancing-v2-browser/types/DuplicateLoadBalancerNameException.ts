import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A load balancer with the specified name already exists.</p>
 */
export interface DuplicateLoadBalancerNameException
  extends __ServiceException__<_DuplicateLoadBalancerNameExceptionDetails> {
  name: "DuplicateLoadBalancerNameException";
}

export interface _DuplicateLoadBalancerNameExceptionDetails {}
