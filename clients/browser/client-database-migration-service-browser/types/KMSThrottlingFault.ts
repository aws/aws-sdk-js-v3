import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This request triggered AWS KMS request throttling.</p>
 */
export interface KMSThrottlingFault
  extends __ServiceException__<_KMSThrottlingFaultDetails> {
  name: "KMSThrottlingFault";
}

export interface _KMSThrottlingFaultDetails {
  /**
   * _ExceptionMessage shape
   */
  message?: string;
}
