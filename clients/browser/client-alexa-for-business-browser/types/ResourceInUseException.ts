import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource in the request is already in use.</p>
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

  /**
   * <p>A unique, user-specified identifier for the request that ensures idempotency.</p>
   */
  ClientRequestToken?: string;
}
