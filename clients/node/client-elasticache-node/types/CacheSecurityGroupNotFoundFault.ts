import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested cache security group name does not refer to an existing cache security group.</p>
 */
export interface CacheSecurityGroupNotFoundFault
  extends __ServiceException__<_CacheSecurityGroupNotFoundFaultDetails> {
  name: "CacheSecurityGroupNotFoundFault";
}

export interface _CacheSecurityGroupNotFoundFaultDetails {}
