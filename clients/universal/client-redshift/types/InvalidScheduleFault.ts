import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The schedule you submitted isn't valid.</p>
 */
export interface InvalidScheduleFault
  extends __ServiceException__<_InvalidScheduleFaultDetails> {
  name: "InvalidScheduleFault";
}

export interface _InvalidScheduleFaultDetails {}
