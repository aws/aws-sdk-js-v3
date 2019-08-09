import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the Reserved Node being exchanged is not in an active state.</p>
 */
export interface InvalidReservedNodeStateFault
  extends __ServiceException__<_InvalidReservedNodeStateFaultDetails> {
  name: "InvalidReservedNodeStateFault";
}

export interface _InvalidReservedNodeStateFaultDetails {}
