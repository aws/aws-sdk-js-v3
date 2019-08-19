import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>You have provided a configuration recorder name that is not valid.</p>
 */
export interface InvalidConfigurationRecorderNameException
  extends __ServiceException__<
    _InvalidConfigurationRecorderNameExceptionDetails
  > {
  name: "InvalidConfigurationRecorderNameException";
}

export interface _InvalidConfigurationRecorderNameExceptionDetails {}
