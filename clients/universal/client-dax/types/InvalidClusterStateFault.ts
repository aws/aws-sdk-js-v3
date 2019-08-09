import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested DAX cluster is not in the <i>available</i> state.</p>
 */
export interface InvalidClusterStateFault
  extends __ServiceException__<_InvalidClusterStateFaultDetails> {
  name: "InvalidClusterStateFault";
}

export interface _InvalidClusterStateFaultDetails {}
