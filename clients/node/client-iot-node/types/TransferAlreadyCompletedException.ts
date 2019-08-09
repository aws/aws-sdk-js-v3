import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You can't revert the certificate transfer because the transfer is already complete.</p>
 */
export interface TransferAlreadyCompletedException
  extends __ServiceException__<_TransferAlreadyCompletedExceptionDetails> {
  name: "TransferAlreadyCompletedException";
}

export interface _TransferAlreadyCompletedExceptionDetails {
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}
