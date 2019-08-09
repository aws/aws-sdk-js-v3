import { _UnmarshalledErrorDetail } from "./_ErrorDetail";
import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * General error information.
 */
export interface BadRequestException
  extends __ServiceException__<_BadRequestExceptionDetails> {
  name: "BadRequestException";
}

export interface _BadRequestExceptionDetails {
  /**
   * Details about the error.
   */
  ErrorDetails?: Array<_UnmarshalledErrorDetail>;

  /**
   * A message containing information about the error.
   */
  Message?: string;
}
