import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The pagination marker or limit fields are not valid.</p>
 */
export interface InvalidArgumentException
  extends __ServiceException__<_InvalidArgumentExceptionDetails> {
  name: "InvalidArgumentException";
}

export interface _InvalidArgumentExceptionDetails {
  /**
   * _ErrorMessageType shape
   */
  Message?: string;
}
