import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> <i>DBClusterIdentifier</i> doesn't refer to an existing DB cluster. </p>
 */
export interface DBClusterNotFoundFault
  extends __ServiceException__<_DBClusterNotFoundFaultDetails> {
  name: "DBClusterNotFoundFault";
}

export interface _DBClusterNotFoundFaultDetails {}
