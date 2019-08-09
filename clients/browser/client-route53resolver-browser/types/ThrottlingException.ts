import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The request was throttled. Try again in a few minutes.</p>
 */
export interface ThrottlingException
  extends __ServiceException__<_ThrottlingExceptionDetails> {
  name: "ThrottlingException";
}

export interface _ThrottlingExceptionDetails {
  /**
   * _ExceptionMessage shape
   */
  Message?: string;
}
