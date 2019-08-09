import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The restore is invalid.</p>
 */
export interface InvalidRestoreFault
  extends __ServiceException__<_InvalidRestoreFaultDetails> {
  name: "InvalidRestoreFault";
}

export interface _InvalidRestoreFaultDetails {}
