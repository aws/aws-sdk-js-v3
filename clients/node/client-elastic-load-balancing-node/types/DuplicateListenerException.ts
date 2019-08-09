import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A listener already exists for the specified load balancer name and port, but with a different instance port, protocol, or SSL certificate.</p>
 */
export interface DuplicateListenerException
  extends __ServiceException__<_DuplicateListenerExceptionDetails> {
  name: "DuplicateListenerException";
}

export interface _DuplicateListenerExceptionDetails {}
