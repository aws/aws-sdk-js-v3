import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource you're trying to access is unsupported on this Amazon Route 53 endpoint.</p>
 */
export interface IncompatibleVersion
  extends __ServiceException__<_IncompatibleVersionDetails> {
  name: "IncompatibleVersion";
}

export interface _IncompatibleVersionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
