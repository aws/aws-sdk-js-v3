import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The state of the specified AWS KMS resource isn't valid for this request.</p>
 */
export interface KMSInvalidStateFault
  extends __ServiceException__<_KMSInvalidStateFaultDetails> {
  name: "KMSInvalidStateFault";
}

export interface _KMSInvalidStateFaultDetails {
  /**
   * _ExceptionMessage shape
   */
  message?: string;
}
