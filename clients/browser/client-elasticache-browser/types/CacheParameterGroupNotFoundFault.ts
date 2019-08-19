import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested cache parameter group name does not refer to an existing cache parameter group.</p>
 */
export interface CacheParameterGroupNotFoundFault
  extends __ServiceException__<_CacheParameterGroupNotFoundFaultDetails> {
  name: "CacheParameterGroupNotFoundFault";
}

export interface _CacheParameterGroupNotFoundFaultDetails {}
