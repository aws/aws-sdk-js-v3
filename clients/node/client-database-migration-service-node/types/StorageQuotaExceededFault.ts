import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The storage quota has been exceeded.</p>
 */
export interface StorageQuotaExceededFault
  extends __ServiceException__<_StorageQuotaExceededFaultDetails> {
  name: "StorageQuotaExceededFault";
}

export interface _StorageQuotaExceededFaultDetails {
  /**
   * <p/>
   */
  message?: string;
}
