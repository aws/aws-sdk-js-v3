import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Cannot restore from vpc backup to non-vpc DB instance.</p>
 */
export interface InvalidRestoreFault
  extends __ServiceException__<_InvalidRestoreFaultDetails> {
  name: "InvalidRestoreFault";
}

export interface _InvalidRestoreFaultDetails {}
