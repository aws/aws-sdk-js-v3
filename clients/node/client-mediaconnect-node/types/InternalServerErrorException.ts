import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * Exception raised by AWS Elemental MediaConnect. See the error message and documentation for the operation for more information on the cause of this exception.
 */
export interface InternalServerErrorException
  extends __ServiceException__<_InternalServerErrorExceptionDetails> {
  name: "InternalServerErrorException";
}

export interface _InternalServerErrorExceptionDetails {
  /**
   * The error message returned by AWS Elemental MediaConnect.
   */
  Message: string;
}
