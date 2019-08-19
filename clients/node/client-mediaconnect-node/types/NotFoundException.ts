import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export interface NotFoundException
  extends __ServiceException__<_NotFoundExceptionDetails> {
  name: "NotFoundException";
}

export interface _NotFoundExceptionDetails {
  /**
   * The error message returned by AWS Elemental MediaConnect.
   */
  Message: string;
}
