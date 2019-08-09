import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>User already has a DB cluster with the given identifier.</p>
 */
export interface DBClusterAlreadyExistsFault
  extends __ServiceException__<_DBClusterAlreadyExistsFaultDetails> {
  name: "DBClusterAlreadyExistsFault";
}

export interface _DBClusterAlreadyExistsFaultDetails {}
