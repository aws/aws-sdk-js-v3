import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more parameters are not valid.</p>
 */
export interface DirectConnectClientException
  extends __ServiceException__<_DirectConnectClientExceptionDetails> {
  name: "DirectConnectClientException";
}

export interface _DirectConnectClientExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  message?: string;
}
