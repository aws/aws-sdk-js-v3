import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>An internal error occurred.</p>
 */
export interface InternalError
  extends __ServiceException__<_InternalErrorDetails> {
  name: "InternalError";
}

export interface _InternalErrorDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
