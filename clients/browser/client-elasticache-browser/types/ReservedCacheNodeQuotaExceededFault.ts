import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request cannot be processed because it would exceed the user's cache node quota.</p>
 */
export interface ReservedCacheNodeQuotaExceededFault
  extends __ServiceException__<_ReservedCacheNodeQuotaExceededFaultDetails> {
  name: "ReservedCacheNodeQuotaExceededFault";
}

export interface _ReservedCacheNodeQuotaExceededFaultDetails {}
