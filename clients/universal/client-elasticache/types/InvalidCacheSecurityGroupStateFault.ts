import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The current state of the cache security group does not allow deletion.</p>
 */
export interface InvalidCacheSecurityGroupStateFault
  extends __ServiceException__<_InvalidCacheSecurityGroupStateFaultDetails> {
  name: "InvalidCacheSecurityGroupStateFault";
}

export interface _InvalidCacheSecurityGroupStateFaultDetails {}
