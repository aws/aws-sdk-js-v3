import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Exception that indicates that the resource is invalid. You might not have access to the resource, or the resource might not exist.</p>
 */
export interface InvalidResourceException
  extends __ServiceException__<_InvalidResourceExceptionDetails> {
  name: "InvalidResourceException";
}

export interface _InvalidResourceExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
