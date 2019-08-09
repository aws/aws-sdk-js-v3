import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified master key (CMK) isn't enabled.</p>
 */
export interface KMSDisabledFault
  extends __ServiceException__<_KMSDisabledFaultDetails> {
  name: "KMSDisabledFault";
}

export interface _KMSDisabledFaultDetails {
  /**
   * _ExceptionMessage shape
   */
  message?: string;
}
