import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The configuration for a resource isn't valid. A resource must either be able to auto-respond to requests or have at least one delegate associated that can do so on its behalf.</p>
 */
export interface InvalidConfigurationException
  extends __ServiceException__<_InvalidConfigurationExceptionDetails> {
  name: "InvalidConfigurationException";
}

export interface _InvalidConfigurationExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
