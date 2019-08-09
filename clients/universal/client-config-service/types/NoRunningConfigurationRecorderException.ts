import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>There is no configuration recorder running.</p>
 */
export interface NoRunningConfigurationRecorderException
  extends __ServiceException__<
    _NoRunningConfigurationRecorderExceptionDetails
  > {
  name: "NoRunningConfigurationRecorderException";
}

export interface _NoRunningConfigurationRecorderExceptionDetails {}
