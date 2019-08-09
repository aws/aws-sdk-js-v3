import { ServiceException as __ServiceException__ } from "@aws-sdk/types";

/**
 * <p>The role name can't contain invalid characters. Also verify that you specified an IAM role for notifications that includes the required trust policy. For information about configuring the IAM role for Run Command notifications, see <a href="http://docs.aws.amazon.com/systems-manager/latest/userguide/rc-sns-notifications.html">Configuring Amazon SNS Notifications for Run Command</a> in the <i>AWS Systems Manager User Guide</i>.</p>
 */
export interface InvalidRole extends __ServiceException__<_InvalidRoleDetails> {
  name: "InvalidRole";
}

export interface _InvalidRoleDetails {
  /**
   * _String shape
   */
  Message?: string;
}
