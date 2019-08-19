import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource being created already exists.</p>
 */
export interface AlreadyExistsException
  extends __ServiceException__<_AlreadyExistsExceptionDetails> {
  name: "AlreadyExistsException";
}

export interface _AlreadyExistsExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
