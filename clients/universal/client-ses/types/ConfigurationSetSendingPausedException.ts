import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that email sending is disabled for the configuration set.</p> <p>You can enable or disable email sending for a configuration set using <a>UpdateConfigurationSetSendingEnabled</a>.</p>
 */
export interface ConfigurationSetSendingPausedException
  extends __ServiceException__<_ConfigurationSetSendingPausedExceptionDetails> {
  name: "ConfigurationSetSendingPausedException";
}

export interface _ConfigurationSetSendingPausedExceptionDetails {
  /**
   * <p>The name of the configuration set for which email sending is disabled.</p>
   */
  ConfigurationSetName?: string;
}
