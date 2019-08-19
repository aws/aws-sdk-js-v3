import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The name sent in the request is already in use.</p>
 */
export interface NameInUseException
  extends __ServiceException__<_NameInUseExceptionDetails> {
  name: "NameInUseException";
}

export interface _NameInUseExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
