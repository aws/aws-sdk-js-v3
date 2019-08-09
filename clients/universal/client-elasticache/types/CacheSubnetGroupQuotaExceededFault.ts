import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request cannot be processed because it would exceed the allowed number of cache subnet groups.</p>
 */
export interface CacheSubnetGroupQuotaExceededFault
  extends __ServiceException__<_CacheSubnetGroupQuotaExceededFaultDetails> {
  name: "CacheSubnetGroupQuotaExceededFault";
}

export interface _CacheSubnetGroupQuotaExceededFaultDetails {}
