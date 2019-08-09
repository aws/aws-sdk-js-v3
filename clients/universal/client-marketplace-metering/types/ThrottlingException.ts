import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The calls to the API are throttled.</p>
 */
export interface ThrottlingException
  extends __ServiceException__<_ThrottlingExceptionDetails> {
  name: "ThrottlingException";
}

export interface _ThrottlingExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
