import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified sync configuration is invalid.</p>
 */
export interface ResourceDataSyncInvalidConfigurationException
  extends __ServiceException__<
    _ResourceDataSyncInvalidConfigurationExceptionDetails
  > {
  name: "ResourceDataSyncInvalidConfigurationException";
}

export interface _ResourceDataSyncInvalidConfigurationExceptionDetails {
  /**
   * _String shape
   */
  Message?: string;
}
