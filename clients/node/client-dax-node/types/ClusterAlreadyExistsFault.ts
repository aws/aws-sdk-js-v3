import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You already have a DAX cluster with the given identifier.</p>
 */
export interface ClusterAlreadyExistsFault
  extends __ServiceException__<_ClusterAlreadyExistsFaultDetails> {
  name: "ClusterAlreadyExistsFault";
}

export interface _ClusterAlreadyExistsFaultDetails {}
