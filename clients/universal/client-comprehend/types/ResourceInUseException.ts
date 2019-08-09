import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified name is already in use. Use a different name and try your request again.</p>
 */
export interface ResourceInUseException
  extends __ServiceException__<_ResourceInUseExceptionDetails> {
  name: "ResourceInUseException";
}

export interface _ResourceInUseExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
