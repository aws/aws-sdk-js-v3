import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * WAFBadRequestException shape
 */
export interface WAFBadRequestException
  extends __ServiceException__<_WAFBadRequestExceptionDetails> {
  name: "WAFBadRequestException";
}

export interface _WAFBadRequestExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
