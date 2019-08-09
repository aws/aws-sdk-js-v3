import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because the type of user for the transaction was incorrect.</p>
 */
export interface InvalidUserTypeException
  extends __ServiceException__<_InvalidUserTypeExceptionDetails> {
  name: "InvalidUserTypeException";
}

export interface _InvalidUserTypeExceptionDetails {
  /**
   * _invalidUserTypeMessage shape
   */
  message?: string;
}
