import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Exception thrown when the customer does not have a valid subscription for the product.</p>
 */
export interface CustomerNotEntitledException
  extends __ServiceException__<_CustomerNotEntitledExceptionDetails> {
  name: "CustomerNotEntitledException";
}

export interface _CustomerNotEntitledExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
