import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Operations are only permitted on enabled directories.</p>
 */
export interface DirectoryNotEnabledException
  extends __ServiceException__<_DirectoryNotEnabledExceptionDetails> {
  name: "DirectoryNotEnabledException";
}

export interface _DirectoryNotEnabledExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
