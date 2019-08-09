import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested cache subnet group name does not refer to an existing cache subnet group.</p>
 */
export interface CacheSubnetGroupNotFoundFault
  extends __ServiceException__<_CacheSubnetGroupNotFoundFaultDetails> {
  name: "CacheSubnetGroupNotFoundFault";
}

export interface _CacheSubnetGroupNotFoundFaultDetails {}
