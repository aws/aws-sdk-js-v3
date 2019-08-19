import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified cluster is not in the <code>available</code> state. </p>
 */
export interface InvalidClusterStateFault
  extends __ServiceException__<_InvalidClusterStateFaultDetails> {
  name: "InvalidClusterStateFault";
}

export interface _InvalidClusterStateFaultDetails {}
