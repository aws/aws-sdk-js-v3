import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A client token is not valid.</p>
 */
export interface InvalidClientTokenException
  extends __ServiceException__<_InvalidClientTokenExceptionDetails> {
  name: "InvalidClientTokenException";
}

export interface _InvalidClientTokenExceptionDetails {
  /**
   * _String shape
   */
  message: string;
}
