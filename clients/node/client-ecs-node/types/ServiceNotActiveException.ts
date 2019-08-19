import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified service is not active. You can't update a service that is inactive. If you have previously deleted a service, you can re-create it with <a>CreateService</a>.</p>
 */
export interface ServiceNotActiveException
  extends __ServiceException__<_ServiceNotActiveExceptionDetails> {
  name: "ServiceNotActiveException";
}

export interface _ServiceNotActiveExceptionDetails {}
