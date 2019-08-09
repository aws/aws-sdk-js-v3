import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the specified identifier is not supported.</p>
 */
export interface UnsupportedIdentityProviderException
  extends __ServiceException__<_UnsupportedIdentityProviderExceptionDetails> {
  name: "UnsupportedIdentityProviderException";
}

export interface _UnsupportedIdentityProviderExceptionDetails {
  /**
   * _MessageType shape
   */
  message?: string;
}
