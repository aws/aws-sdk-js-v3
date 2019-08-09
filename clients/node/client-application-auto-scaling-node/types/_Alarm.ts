/**
 * <p>Represents a CloudWatch alarm associated with a scaling policy.</p>
 */
export interface _Alarm {
  /**
   * <p>The name of the alarm.</p>
   */
  AlarmName: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the alarm.</p>
   */
  AlarmARN: string;
}

export type _UnmarshalledAlarm = _Alarm;
