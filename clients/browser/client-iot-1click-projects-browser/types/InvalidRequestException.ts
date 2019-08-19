import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p/>
 */
export interface InvalidRequestException
  extends __ServiceException__<_InvalidRequestExceptionDetails> {
  name: "InvalidRequestException";
}

export interface _InvalidRequestExceptionDetails {
  /**
   * _Code shape
   */
  code: string;

  /**
   * _Message shape
   */
  message: string;
}
