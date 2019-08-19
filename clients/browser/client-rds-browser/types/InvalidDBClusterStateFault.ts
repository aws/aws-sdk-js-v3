import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested operation can't be performed while the cluster is in this state.</p>
 */
export interface InvalidDBClusterStateFault
  extends __ServiceException__<_InvalidDBClusterStateFaultDetails> {
  name: "InvalidDBClusterStateFault";
}

export interface _InvalidDBClusterStateFaultDetails {}
