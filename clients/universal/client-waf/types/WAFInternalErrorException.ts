import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The operation failed because of a system problem, even though the request was valid. Retry your request.</p>
 */
export interface WAFInternalErrorException
  extends __ServiceException__<_WAFInternalErrorExceptionDetails> {
  name: "WAFInternalErrorException";
}

export interface _WAFInternalErrorExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
