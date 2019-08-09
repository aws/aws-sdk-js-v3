/**
 * <p>Describes an action that updates a CloudWatch alarm.</p>
 */
export interface _CloudwatchAlarmAction {
  /**
   * <p>The IAM role that allows access to the CloudWatch alarm.</p>
   */
  roleArn: string;

  /**
   * <p>The CloudWatch alarm name.</p>
   */
  alarmName: string;

  /**
   * <p>The reason for the alarm change.</p>
   */
  stateReason: string;

  /**
   * <p>The value of the alarm state. Acceptable values are: OK, ALARM, INSUFFICIENT_DATA.</p>
   */
  stateValue: string;
}

export type _UnmarshalledCloudwatchAlarmAction = _CloudwatchAlarmAction;
