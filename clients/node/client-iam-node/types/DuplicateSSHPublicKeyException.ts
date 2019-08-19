import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was rejected because the SSH public key is already associated with the specified IAM user.</p>
 */
export interface DuplicateSSHPublicKeyException
  extends __ServiceException__<_DuplicateSSHPublicKeyExceptionDetails> {
  name: "DuplicateSSHPublicKeyException";
}

export interface _DuplicateSSHPublicKeyExceptionDetails {
  /**
   * _duplicateSSHPublicKeyMessage shape
   */
  message?: string;
}
