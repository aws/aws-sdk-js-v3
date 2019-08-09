import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The account already has a cluster with the given identifier.</p>
 */
export interface ClusterAlreadyExistsFault
  extends __ServiceException__<_ClusterAlreadyExistsFaultDetails> {
  name: "ClusterAlreadyExistsFault";
}

export interface _ClusterAlreadyExistsFaultDetails {}
