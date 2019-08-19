import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>This exception is thrown when the user pool configuration is invalid.</p>
 */
export interface InvalidUserPoolConfigurationException
  extends __ServiceException__<_InvalidUserPoolConfigurationExceptionDetails> {
  name: "InvalidUserPoolConfigurationException";
}

export interface _InvalidUserPoolConfigurationExceptionDetails {
  /**
   * <p>The message returned when the user pool configuration is invalid.</p>
   */
  message?: string;
}
