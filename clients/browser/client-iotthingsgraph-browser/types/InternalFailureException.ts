import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p/>
 */
export interface InternalFailureException
  extends __ServiceException__<_InternalFailureExceptionDetails> {
  name: "InternalFailureException";
}

export interface _InternalFailureExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
