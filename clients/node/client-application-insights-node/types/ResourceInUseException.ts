import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The resource is already created or in use.</p>
 */
export interface ResourceInUseException
  extends __ServiceException__<_ResourceInUseExceptionDetails> {
  name: "ResourceInUseException";
}

export interface _ResourceInUseExceptionDetails {
  /**
   * _ErrorMsg shape
   */
  Message?: string;
}
