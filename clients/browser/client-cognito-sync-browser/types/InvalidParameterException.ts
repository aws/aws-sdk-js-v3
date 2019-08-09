import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * Thrown when a request parameter does not comply with the associated constraints.
 */
export interface InvalidParameterException
  extends __ServiceException__<_InvalidParameterExceptionDetails> {
  name: "InvalidParameterException";
}

export interface _InvalidParameterExceptionDetails {
  /**
   * Message returned by InvalidParameterException.
   */
  message: string;
}
