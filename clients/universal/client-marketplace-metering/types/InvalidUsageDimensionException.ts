import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The usage dimension does not match one of the UsageDimensions associated with products.</p>
 */
export interface InvalidUsageDimensionException
  extends __ServiceException__<_InvalidUsageDimensionExceptionDetails> {
  name: "InvalidUsageDimensionException";
}

export interface _InvalidUsageDimensionExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
