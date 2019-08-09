import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The ciphertext references a key that doesn't exist or that the DMS account doesn't have access to.</p>
 */
export interface KMSAccessDeniedFault
  extends __ServiceException__<_KMSAccessDeniedFaultDetails> {
  name: "KMSAccessDeniedFault";
}

export interface _KMSAccessDeniedFaultDetails {
  /**
   * _ExceptionMessage shape
   */
  message?: string;
}
