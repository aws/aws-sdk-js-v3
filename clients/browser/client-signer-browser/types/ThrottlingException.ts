import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The signing job has been throttled.</p>
 */
export interface ThrottlingException
  extends __ServiceException__<_ThrottlingExceptionDetails> {
  name: "ThrottlingException";
}

export interface _ThrottlingExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
