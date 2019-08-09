import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified combination of HTTP verb and URI is not supported.</p>
 */
export interface MethodNotAllowedException
  extends __ServiceException__<_MethodNotAllowedExceptionDetails> {
  name: "MethodNotAllowedException";
}

export interface _MethodNotAllowedExceptionDetails {
  /**
   * <p>The message for the exception.</p>
   */
  message?: string;
}
