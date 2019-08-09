import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified service linked role (SLR) was not found.</p>
 */
export interface ServiceLinkedRoleNotFoundFault
  extends __ServiceException__<_ServiceLinkedRoleNotFoundFaultDetails> {
  name: "ServiceLinkedRoleNotFoundFault";
}

export interface _ServiceLinkedRoleNotFoundFaultDetails {}
