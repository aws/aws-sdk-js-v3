import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>One or more configuration items is not valid. Verify that a valid Amazon Resource Name (ARN) was provided for an Amazon SNS topic.</p>
 */
export interface InvalidNotificationConfig
  extends __ServiceException__<_InvalidNotificationConfigDetails> {
  name: "InvalidNotificationConfig";
}

export interface _InvalidNotificationConfigDetails {
  /**
   * _String shape
   */
  Message?: string;
}
