import { _UnmarshalledErrorDetail } from "./_ErrorDetail";
import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * General error information.
 */
export interface InternalServerErrorException
  extends __ServiceException__<_InternalServerErrorExceptionDetails> {
  name: "InternalServerErrorException";
}

export interface _InternalServerErrorExceptionDetails {
  /**
   * Details about the error.
   */
  ErrorDetails?: Array<_UnmarshalledErrorDetail>;

  /**
   * A message containing information about the error.
   */
  Message?: string;
}
