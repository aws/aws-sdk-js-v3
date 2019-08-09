import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested reserved cache node was not found.</p>
 */
export interface ReservedCacheNodeNotFoundFault
  extends __ServiceException__<_ReservedCacheNodeNotFoundFaultDetails> {
  name: "ReservedCacheNodeNotFoundFault";
}

export interface _ReservedCacheNodeNotFoundFaultDetails {}
