import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified reserved compute node not found.</p>
 */
export interface ReservedNodeNotFoundFault
  extends __ServiceException__<_ReservedNodeNotFoundFaultDetails> {
  name: "ReservedNodeNotFoundFault";
}

export interface _ReservedNodeNotFoundFaultDetails {}
