import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The provided Task ID is not valid. Please provide a valid Task ID and try again.</p>
 */
export interface InvalidTaskIdException
  extends __ServiceException__<_InvalidTaskIdExceptionDetails> {
  name: "InvalidTaskIdException";
}

export interface _InvalidTaskIdExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
