import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The name specified is invalid.</p>
 */
export interface WAFDisallowedNameException
  extends __ServiceException__<_WAFDisallowedNameExceptionDetails> {
  name: "WAFDisallowedNameException";
}

export interface _WAFDisallowedNameExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
