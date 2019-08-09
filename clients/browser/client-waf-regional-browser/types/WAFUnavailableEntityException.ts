import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operation failed because the entity referenced is temporarily unavailable. Retry your request.</p>
 */
export interface WAFUnavailableEntityException
  extends __ServiceException__<_WAFUnavailableEntityExceptionDetails> {
  name: "WAFUnavailableEntityException";
}

export interface _WAFUnavailableEntityExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
