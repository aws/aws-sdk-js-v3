import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An internal server error occurred. Retry your request.</p>
 */
export interface InternalServerException
  extends __ServiceException__<_InternalServerExceptionDetails> {
  name: "InternalServerException";
}

export interface _InternalServerExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
