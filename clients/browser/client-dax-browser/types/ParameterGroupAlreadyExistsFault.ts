import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified parameter group already exists.</p>
 */
export interface ParameterGroupAlreadyExistsFault
  extends __ServiceException__<_ParameterGroupAlreadyExistsFaultDetails> {
  name: "ParameterGroupAlreadyExistsFault";
}

export interface _ParameterGroupAlreadyExistsFaultDetails {}
