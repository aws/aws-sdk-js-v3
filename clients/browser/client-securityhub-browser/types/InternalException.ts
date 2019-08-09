import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Internal server error.</p>
 */
export interface InternalException
  extends __ServiceException__<_InternalExceptionDetails> {
  name: "InternalException";
}

export interface _InternalExceptionDetails {
  /**
   * _NonEmptyString shape
   */
  Message?: string;

  /**
   * _NonEmptyString shape
   */
  Code?: string;
}
