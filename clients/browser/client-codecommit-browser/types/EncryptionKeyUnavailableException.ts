import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The encryption key is not available.</p>
 */
export interface EncryptionKeyUnavailableException
  extends __ServiceException__<_EncryptionKeyUnavailableExceptionDetails> {
  name: "EncryptionKeyUnavailableException";
}

export interface _EncryptionKeyUnavailableExceptionDetails {}
