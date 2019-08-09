import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A DB parameter group with the same name exists.</p>
 */
export interface DBParameterGroupAlreadyExistsFault
  extends __ServiceException__<_DBParameterGroupAlreadyExistsFaultDetails> {
  name: "DBParameterGroupAlreadyExistsFault";
}

export interface _DBParameterGroupAlreadyExistsFaultDetails {}
