import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> <i>DBClusterParameterGroupName</i> does not refer to an existing DB Cluster parameter group.</p>
 */
export interface DBClusterParameterGroupNotFoundFault
  extends __ServiceException__<_DBClusterParameterGroupNotFoundFaultDetails> {
  name: "DBClusterParameterGroupNotFoundFault";
}

export interface _DBClusterParameterGroupNotFoundFaultDetails {}
