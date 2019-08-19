import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The specified service setting was not found. Either the service name or the setting has not been provisioned by the AWS service team.</p>
 */
export interface ServiceSettingNotFound
  extends __ServiceException__<_ServiceSettingNotFoundDetails> {
  name: "ServiceSettingNotFound";
}

export interface _ServiceSettingNotFoundDetails {
  /**
   * _String shape
   */
  Message?: string;
}
