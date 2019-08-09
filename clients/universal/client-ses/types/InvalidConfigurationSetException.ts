import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>Indicates that the configuration set is invalid. See the error message for details.</p>
 */
export interface InvalidConfigurationSetException
  extends __ServiceException__<_InvalidConfigurationSetExceptionDetails> {
  name: "InvalidConfigurationSetException";
}

export interface _InvalidConfigurationSetExceptionDetails {}
