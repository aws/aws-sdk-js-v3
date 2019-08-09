import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have specified a configuration recorder that does not exist.</p>
 */
export interface NoSuchConfigurationRecorderException
  extends __ServiceException__<_NoSuchConfigurationRecorderExceptionDetails> {
  name: "NoSuchConfigurationRecorderException";
}

export interface _NoSuchConfigurationRecorderExceptionDetails {}
