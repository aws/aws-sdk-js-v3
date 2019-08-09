import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>A password in SecretsManager is in an invalid state.</p>
 */
export interface InvalidSecretsManagerResourceException
  extends __ServiceException__<_InvalidSecretsManagerResourceExceptionDetails> {
  name: "InvalidSecretsManagerResourceException";
}

export interface _InvalidSecretsManagerResourceExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
