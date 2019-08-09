import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Operation was rejected because there is an ongoing transaction for the item.</p>
 */
export interface TransactionConflictException
  extends __ServiceException__<_TransactionConflictExceptionDetails> {
  name: "TransactionConflictException";
}

export interface _TransactionConflictExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
