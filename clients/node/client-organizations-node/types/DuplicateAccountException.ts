import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>That account is already present in the specified destination.</p>
 */
export interface DuplicateAccountException
  extends __ServiceException__<_DuplicateAccountExceptionDetails> {
  name: "DuplicateAccountException";
}

export interface _DuplicateAccountExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
