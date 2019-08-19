import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Secrets Manager can't encrypt the protected secret text using the provided KMS key. Check that the customer master key (CMK) is available, enabled, and not in an invalid state. For more information, see <a href="http://docs.aws.amazon.com/kms/latest/developerguide/key-state.html">How Key State Affects Use of a Customer Master Key</a>.</p>
 */
export interface EncryptionFailure
  extends __ServiceException__<_EncryptionFailureDetails> {
  name: "EncryptionFailure";
}

export interface _EncryptionFailureDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
