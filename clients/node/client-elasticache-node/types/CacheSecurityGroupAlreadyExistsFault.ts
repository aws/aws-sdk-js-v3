import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A cache security group with the specified name already exists.</p>
 */
export interface CacheSecurityGroupAlreadyExistsFault
  extends __ServiceException__<_CacheSecurityGroupAlreadyExistsFaultDetails> {
  name: "CacheSecurityGroupAlreadyExistsFault";
}

export interface _CacheSecurityGroupAlreadyExistsFaultDetails {}
