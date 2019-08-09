import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request would result in the user exceeding the allowed amount of storage available across all DB instances.</p>
 */
export interface StorageQuotaExceededFault
  extends __ServiceException__<_StorageQuotaExceededFaultDetails> {
  name: "StorageQuotaExceededFault";
}

export interface _StorageQuotaExceededFaultDetails {}
