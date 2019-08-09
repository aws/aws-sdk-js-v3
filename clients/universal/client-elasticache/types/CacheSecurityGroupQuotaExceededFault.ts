import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request cannot be processed because it would exceed the allowed number of cache security groups.</p>
 */
export interface CacheSecurityGroupQuotaExceededFault
  extends __ServiceException__<_CacheSecurityGroupQuotaExceededFaultDetails> {
  name: "CacheSecurityGroupQuotaExceededFault";
}

export interface _CacheSecurityGroupQuotaExceededFaultDetails {}
