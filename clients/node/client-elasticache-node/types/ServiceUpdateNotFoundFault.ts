import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The service update doesn't exist</p>
 */
export interface ServiceUpdateNotFoundFault
  extends __ServiceException__<_ServiceUpdateNotFoundFaultDetails> {
  name: "ServiceUpdateNotFoundFault";
}

export interface _ServiceUpdateNotFoundFaultDetails {}
