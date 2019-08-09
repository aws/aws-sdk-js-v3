import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request cannot be processed because it would exceed the maximum number of cache security groups.</p>
 */
export interface CacheParameterGroupQuotaExceededFault
  extends __ServiceException__<_CacheParameterGroupQuotaExceededFaultDetails> {
  name: "CacheParameterGroupQuotaExceededFault";
}

export interface _CacheParameterGroupQuotaExceededFaultDetails {}
