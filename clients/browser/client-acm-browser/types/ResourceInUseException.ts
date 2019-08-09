import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The certificate is in use by another AWS service in the caller's account. Remove the association and try again.</p>
 */
export interface ResourceInUseException
  extends __ServiceException__<_ResourceInUseExceptionDetails> {
  name: "ResourceInUseException";
}

export interface _ResourceInUseExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
