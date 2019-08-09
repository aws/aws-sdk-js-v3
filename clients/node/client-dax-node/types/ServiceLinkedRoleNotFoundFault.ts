import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * ServiceLinkedRoleNotFoundFault shape
 */
export interface ServiceLinkedRoleNotFoundFault
  extends __ServiceException__<_ServiceLinkedRoleNotFoundFaultDetails> {
  name: "ServiceLinkedRoleNotFoundFault";
}

export interface _ServiceLinkedRoleNotFoundFaultDetails {}
