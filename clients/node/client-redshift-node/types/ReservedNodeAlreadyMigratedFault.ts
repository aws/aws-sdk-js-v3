import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the reserved node has already been exchanged.</p>
 */
export interface ReservedNodeAlreadyMigratedFault
  extends __ServiceException__<_ReservedNodeAlreadyMigratedFaultDetails> {
  name: "ReservedNodeAlreadyMigratedFault";
}

export interface _ReservedNodeAlreadyMigratedFaultDetails {}
