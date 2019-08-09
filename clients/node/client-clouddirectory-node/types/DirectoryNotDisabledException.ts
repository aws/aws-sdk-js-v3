import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An operation can only operate on a disabled directory.</p>
 */
export interface DirectoryNotDisabledException
  extends __ServiceException__<_DirectoryNotDisabledExceptionDetails> {
  name: "DirectoryNotDisabledException";
}

export interface _DirectoryNotDisabledExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
