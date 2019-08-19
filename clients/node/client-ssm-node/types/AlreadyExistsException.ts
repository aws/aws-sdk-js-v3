import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Error returned if an attempt is made to register a patch group with a patch baseline that is already registered with a different patch baseline.</p>
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
