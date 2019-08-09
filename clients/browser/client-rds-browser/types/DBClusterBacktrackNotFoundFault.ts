import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> <i>BacktrackIdentifier</i> doesn't refer to an existing backtrack. </p>
 */
export interface DBClusterBacktrackNotFoundFault
  extends __ServiceException__<_DBClusterBacktrackNotFoundFaultDetails> {
  name: "DBClusterBacktrackNotFoundFault";
}

export interface _DBClusterBacktrackNotFoundFaultDetails {}
