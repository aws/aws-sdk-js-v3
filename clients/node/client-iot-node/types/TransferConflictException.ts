import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You can't transfer the certificate because authorization policies are still attached.</p>
 */
export interface TransferConflictException
  extends __ServiceException__<_TransferConflictExceptionDetails> {
  name: "TransferConflictException";
}

export interface _TransferConflictExceptionDetails {
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}
