import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The server encountered an internal error and is unable to complete the request.</p>
 */
export interface InternalServerException
  extends __ServiceException__<_InternalServerExceptionDetails> {
  name: "InternalServerException";
}

export interface _InternalServerExceptionDetails {
  /**
   * _ErrorMsg shape
   */
  Message?: string;
}
