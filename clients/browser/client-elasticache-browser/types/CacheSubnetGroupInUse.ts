import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested cache subnet group is currently in use.</p>
 */
export interface CacheSubnetGroupInUse
  extends __ServiceException__<_CacheSubnetGroupInUseDetails> {
  name: "CacheSubnetGroupInUse";
}

export interface _CacheSubnetGroupInUseDetails {}
