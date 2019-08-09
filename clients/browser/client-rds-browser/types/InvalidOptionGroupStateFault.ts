import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> The option group isn't in the <i>available</i> state. </p>
 */
export interface InvalidOptionGroupStateFault
  extends __ServiceException__<_InvalidOptionGroupStateFaultDetails> {
  name: "InvalidOptionGroupStateFault";
}

export interface _InvalidOptionGroupStateFaultDetails {}
