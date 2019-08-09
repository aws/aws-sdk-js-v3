import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Public Key version is invalid.</p>
 */
export interface InvalidPublicKeyVersionException
  extends __ServiceException__<_InvalidPublicKeyVersionExceptionDetails> {
  name: "InvalidPublicKeyVersionException";
}

export interface _InvalidPublicKeyVersionExceptionDetails {
  /**
   * _errorMessage shape
   */
  message?: string;
}
