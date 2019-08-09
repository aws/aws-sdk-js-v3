import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource is already in use and not available for this operation.</p>
 */
export interface ResourceInUseException
  extends __ServiceException__<_ResourceInUseExceptionDetails> {
  name: "ResourceInUseException";
}

export interface _ResourceInUseExceptionDetails {
  /**
   * <p>A message that provides information about the error.</p>
   */
  message?: string;
}
