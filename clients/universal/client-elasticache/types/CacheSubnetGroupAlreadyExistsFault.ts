import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested cache subnet group name is already in use by an existing cache subnet group.</p>
 */
export interface CacheSubnetGroupAlreadyExistsFault
  extends __ServiceException__<_CacheSubnetGroupAlreadyExistsFaultDetails> {
  name: "CacheSubnetGroupAlreadyExistsFault";
}

export interface _CacheSubnetGroupAlreadyExistsFaultDetails {}
