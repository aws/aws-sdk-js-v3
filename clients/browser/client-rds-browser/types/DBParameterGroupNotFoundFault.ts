import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p> <i>DBParameterGroupName</i> doesn't refer to an existing DB parameter group. </p>
 */
export interface DBParameterGroupNotFoundFault
  extends __ServiceException__<_DBParameterGroupNotFoundFaultDetails> {
  name: "DBParameterGroupNotFoundFault";
}

export interface _DBParameterGroupNotFoundFaultDetails {}
