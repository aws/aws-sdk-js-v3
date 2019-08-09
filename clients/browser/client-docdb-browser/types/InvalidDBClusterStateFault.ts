import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The DB cluster isn't in a valid state.</p>
 */
export interface InvalidDBClusterStateFault
  extends __ServiceException__<_InvalidDBClusterStateFaultDetails> {
  name: "InvalidDBClusterStateFault";
}

export interface _InvalidDBClusterStateFaultDetails {}
