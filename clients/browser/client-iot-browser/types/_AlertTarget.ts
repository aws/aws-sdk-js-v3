/**
 * <p>A structure containing the alert target ARN and the role ARN.</p>
 */
export interface _AlertTarget {
  /**
   * <p>The ARN of the notification target to which alerts are sent.</p>
   */
  alertTargetArn: string;

  /**
   * <p>The ARN of the role that grants permission to send alerts to the notification target.</p>
   */
  roleArn: string;
}

export type _UnmarshalledAlertTarget = _AlertTarget;
