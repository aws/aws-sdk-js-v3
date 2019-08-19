import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that either your AWS credentials are invalid or you do not have access to the EC2 instance.</p>
 */
export interface AuthException
  extends __ServiceException__<_AuthExceptionDetails> {
  name: "AuthException";
}

export interface _AuthExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
