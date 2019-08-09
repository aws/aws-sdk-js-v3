import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The user-provided application configuration is not valid.</p>
 */
export interface InvalidApplicationConfigurationException
  extends __ServiceException__<
    _InvalidApplicationConfigurationExceptionDetails
  > {
  name: "InvalidApplicationConfigurationException";
}

export interface _InvalidApplicationConfigurationExceptionDetails {
  /**
   * _ErrorMessage shape
   */
  Message?: string;
}
