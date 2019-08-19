import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource is in use.</p>
 */
export interface ResourceInUseException
  extends __ServiceException__<_ResourceInUseExceptionDetails> {
  name: "ResourceInUseException";
}

export interface _ResourceInUseExceptionDetails {
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}
