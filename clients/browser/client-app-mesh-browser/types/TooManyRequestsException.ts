import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The maximum request rate permitted by the App Mesh APIs has been exceeded for your
 *          account. For best results, use an increasing or variable sleep interval between
 *          requests.</p>
 */
export interface TooManyRequestsException
  extends __ServiceException__<_TooManyRequestsExceptionDetails> {
  name: "TooManyRequestsException";
}

export interface _TooManyRequestsExceptionDetails {
  /**
   * _String shape
   */
  message?: string;
}
