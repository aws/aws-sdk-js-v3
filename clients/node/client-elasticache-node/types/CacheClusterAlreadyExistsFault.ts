import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You already have a cluster with the given identifier.</p>
 */
export interface CacheClusterAlreadyExistsFault
  extends __ServiceException__<_CacheClusterAlreadyExistsFaultDetails> {
  name: "CacheClusterAlreadyExistsFault";
}

export interface _CacheClusterAlreadyExistsFaultDetails {}
