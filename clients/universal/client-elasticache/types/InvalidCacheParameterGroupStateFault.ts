import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The current state of the cache parameter group does not allow the requested operation to occur.</p>
 */
export interface InvalidCacheParameterGroupStateFault
  extends __ServiceException__<_InvalidCacheParameterGroupStateFaultDetails> {
  name: "InvalidCacheParameterGroupStateFault";
}

export interface _InvalidCacheParameterGroupStateFaultDetails {}
