import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the provider is already supported by the user pool.</p>
 */
export interface DuplicateProviderException
  extends __ServiceException__<_DuplicateProviderExceptionDetails> {
  name: "DuplicateProviderException";
}

export interface _DuplicateProviderExceptionDetails {
  /**
   * _MessageType shape
   */
  message?: string;
}
