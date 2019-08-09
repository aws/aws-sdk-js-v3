import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified service could not be found. You can view your available services with <a>ListServices</a>. Amazon ECS services are cluster-specific and Region-specific.</p>
 */
export interface ServiceNotFoundException
  extends __ServiceException__<_ServiceNotFoundExceptionDetails> {
  name: "ServiceNotFoundException";
}

export interface _ServiceNotFoundExceptionDetails {}
