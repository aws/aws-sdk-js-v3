import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request JSON is not valid for the operation.</p>
 */
export interface InvalidRequestException
  extends __ServiceException__<_InvalidRequestExceptionDetails> {
  name: "InvalidRequestException";
}

export interface _InvalidRequestExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
