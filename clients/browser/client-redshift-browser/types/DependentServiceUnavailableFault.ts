import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Your request cannot be completed because a dependent internal service is temporarily unavailable. Wait 30 to 60 seconds and try again.</p>
 */
export interface DependentServiceUnavailableFault
  extends __ServiceException__<_DependentServiceUnavailableFaultDetails> {
  name: "DependentServiceUnavailableFault";
}

export interface _DependentServiceUnavailableFaultDetails {}
