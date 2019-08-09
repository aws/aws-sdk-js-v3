import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more parameter values in the request are invalid. Correct the invalid parameter values before retrying.</p>
 */
export interface InvalidRequestException
  extends __ServiceException__<_InvalidRequestExceptionDetails> {
  name: "InvalidRequestException";
}

export interface _InvalidRequestExceptionDetails {
  /**
   * _NonEmptyString shape
   */
  Message?: string;
}
