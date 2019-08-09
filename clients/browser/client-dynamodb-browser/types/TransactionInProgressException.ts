import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The transaction with the given request token is already in progress.</p>
 */
export interface TransactionInProgressException
  extends __ServiceException__<_TransactionInProgressExceptionDetails> {
  name: "TransactionInProgressException";
}

export interface _TransactionInProgressExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
