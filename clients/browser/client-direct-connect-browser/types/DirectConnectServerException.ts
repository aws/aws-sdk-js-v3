import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A server-side error occurred.</p>
 */
export interface DirectConnectServerException
  extends __ServiceException__<_DirectConnectServerExceptionDetails> {
  name: "DirectConnectServerException";
}

export interface _DirectConnectServerExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
