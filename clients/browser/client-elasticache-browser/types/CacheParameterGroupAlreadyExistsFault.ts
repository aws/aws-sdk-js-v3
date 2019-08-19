import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A cache parameter group with the requested name already exists.</p>
 */
export interface CacheParameterGroupAlreadyExistsFault
  extends __ServiceException__<_CacheParameterGroupAlreadyExistsFaultDetails> {
  name: "CacheParameterGroupAlreadyExistsFault";
}

export interface _CacheParameterGroupAlreadyExistsFaultDetails {}
