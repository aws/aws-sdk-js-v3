import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The application is not available for this operation.</p>
 */
export interface ResourceInUseException
  extends __ServiceException__<_ResourceInUseExceptionDetails> {
  name: "ResourceInUseException";
}

export interface _ResourceInUseExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
