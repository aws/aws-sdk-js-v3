import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * InvalidConfigurationException shape
 */
export interface InvalidConfigurationException
  extends __ServiceException__<_InvalidConfigurationExceptionDetails> {
  name: "InvalidConfigurationException";
}

export interface _InvalidConfigurationExceptionDetails {
  /**
   * Message returned by InvalidConfigurationException.
   */
  message: string;
}
