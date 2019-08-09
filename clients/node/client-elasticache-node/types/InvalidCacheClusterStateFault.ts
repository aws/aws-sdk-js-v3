import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested cluster is not in the <code>available</code> state.</p>
 */
export interface InvalidCacheClusterStateFault
  extends __ServiceException__<_InvalidCacheClusterStateFaultDetails> {
  name: "InvalidCacheClusterStateFault";
}

export interface _InvalidCacheClusterStateFaultDetails {}
