import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified load balancer does not exist.</p>
 */
export interface AccessPointNotFoundException
  extends __ServiceException__<_AccessPointNotFoundExceptionDetails> {
  name: "AccessPointNotFoundException";
}

export interface _AccessPointNotFoundExceptionDetails {}
