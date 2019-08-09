import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested cluster ID does not refer to an existing cluster.</p>
 */
export interface CacheClusterNotFoundFault
  extends __ServiceException__<_CacheClusterNotFoundFaultDetails> {
  name: "CacheClusterNotFoundFault";
}

export interface _CacheClusterNotFoundFaultDetails {}
