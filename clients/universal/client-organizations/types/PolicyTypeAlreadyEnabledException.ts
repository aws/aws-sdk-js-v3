import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified policy type is already enabled in the specified root.</p>
 */
export interface PolicyTypeAlreadyEnabledException
  extends __ServiceException__<_PolicyTypeAlreadyEnabledExceptionDetails> {
  name: "PolicyTypeAlreadyEnabledException";
}

export interface _PolicyTypeAlreadyEnabledExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
