import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the configuration set could not be created because of a naming conflict.</p>
 */
export interface ConfigurationSetAlreadyExistsException
  extends __ServiceException__<_ConfigurationSetAlreadyExistsExceptionDetails> {
  name: "ConfigurationSetAlreadyExistsException";
}

export interface _ConfigurationSetAlreadyExistsExceptionDetails {
  /**
   * <p>Indicates that the configuration set does not exist.</p>
   */
  ConfigurationSetName?: string;
}
