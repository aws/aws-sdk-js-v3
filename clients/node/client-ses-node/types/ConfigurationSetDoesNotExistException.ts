import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the configuration set does not exist.</p>
 */
export interface ConfigurationSetDoesNotExistException
  extends __ServiceException__<_ConfigurationSetDoesNotExistExceptionDetails> {
  name: "ConfigurationSetDoesNotExistException";
}

export interface _ConfigurationSetDoesNotExistExceptionDetails {
  /**
   * <p>Indicates that the configuration set does not exist.</p>
   */
  ConfigurationSetName?: string;
}
