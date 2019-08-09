import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The service failed in an unexpected way.</p>
 */
export interface InternalServerException
  extends __ServiceException__<_InternalServerExceptionDetails> {
  name: "InternalServerException";
}

export interface _InternalServerExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;

  /**
   * _ErrorCode shape
   */
  Code?: string;
}
