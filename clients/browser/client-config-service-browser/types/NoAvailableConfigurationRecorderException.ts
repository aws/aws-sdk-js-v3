import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There are no configuration recorders available to provide the role needed to describe your resources. Create a configuration recorder.</p>
 */
export interface NoAvailableConfigurationRecorderException
  extends __ServiceException__<
    _NoAvailableConfigurationRecorderExceptionDetails
  > {
  name: "NoAvailableConfigurationRecorderException";
}

export interface _NoAvailableConfigurationRecorderExceptionDetails {}
