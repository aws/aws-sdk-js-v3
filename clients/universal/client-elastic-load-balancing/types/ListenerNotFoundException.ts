import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The load balancer does not have a listener configured at the specified port.</p>
 */
export interface ListenerNotFoundException
  extends __ServiceException__<_ListenerNotFoundExceptionDetails> {
  name: "ListenerNotFoundException";
}

export interface _ListenerNotFoundExceptionDetails {}
