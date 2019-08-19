import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request cannot be processed because it would exceed the allowed number of subnets in a cache subnet group.</p>
 */
export interface CacheSubnetQuotaExceededFault
  extends __ServiceException__<_CacheSubnetQuotaExceededFaultDetails> {
  name: "CacheSubnetQuotaExceededFault";
}

export interface _CacheSubnetQuotaExceededFaultDetails {}
