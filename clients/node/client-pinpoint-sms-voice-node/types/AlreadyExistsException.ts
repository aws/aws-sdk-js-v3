import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * The resource specified in your request already exists.
 */
export interface AlreadyExistsException
  extends __ServiceException__<_AlreadyExistsExceptionDetails> {
  name: "AlreadyExistsException";
}

export interface _AlreadyExistsExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
