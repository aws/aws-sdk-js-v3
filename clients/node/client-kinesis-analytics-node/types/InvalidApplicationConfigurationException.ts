import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>User-provided application configuration is not valid.</p>
 */
export interface InvalidApplicationConfigurationException
  extends __ServiceException__<
    _InvalidApplicationConfigurationExceptionDetails
  > {
  name: "InvalidApplicationConfigurationException";
}

export interface _InvalidApplicationConfigurationExceptionDetails {
  /**
   * <p>test</p>
   */
  message?: string;
}
