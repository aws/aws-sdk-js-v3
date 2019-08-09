import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The requested configuration change is not valid.</p>
 */
export interface InvalidConfigurationRequestException
  extends __ServiceException__<_InvalidConfigurationRequestExceptionDetails> {
  name: "InvalidConfigurationRequestException";
}

export interface _InvalidConfigurationRequestExceptionDetails {}
