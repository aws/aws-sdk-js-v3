import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>AWS Security Hub isn't enabled for the account used to make this request.</p>
 */
export interface InvalidAccessException
  extends __ServiceException__<_InvalidAccessExceptionDetails> {
  name: "InvalidAccessException";
}

export interface _InvalidAccessExceptionDetails {
  /**
   * _NonEmptyString shape
   */
  Message?: string;

  /**
   * _NonEmptyString shape
   */
  Code?: string;
}
