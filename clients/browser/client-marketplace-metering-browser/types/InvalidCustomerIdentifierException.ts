import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have metered usage for a CustomerIdentifier that does not exist.</p>
 */
export interface InvalidCustomerIdentifierException
  extends __ServiceException__<_InvalidCustomerIdentifierExceptionDetails> {
  name: "InvalidCustomerIdentifierException";
}

export interface _InvalidCustomerIdentifierExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
