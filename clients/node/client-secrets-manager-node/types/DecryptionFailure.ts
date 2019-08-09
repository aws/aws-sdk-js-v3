import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Secrets Manager can't decrypt the protected secret text using the provided KMS key. </p>
 */
export interface DecryptionFailure
  extends __ServiceException__<_DecryptionFailureDetails> {
  name: "DecryptionFailure";
}

export interface _DecryptionFailureDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
