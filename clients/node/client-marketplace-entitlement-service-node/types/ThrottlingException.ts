import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The calls to the GetEntitlements API are throttled.</p>
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
