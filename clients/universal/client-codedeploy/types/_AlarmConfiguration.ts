import { _Alarm, _UnmarshalledAlarm } from "./_Alarm";

/**
 * <p>Information about alarms associated with the deployment group.</p>
 */
export interface _AlarmConfiguration {
  /**
   * <p>Indicates whether the alarm configuration is enabled.</p>
   */
  enabled?: boolean;

  /**
   * <p>Indicates whether a deployment should continue if information about the current state of alarms cannot be retrieved from Amazon CloudWatch. The default value is false.</p> <ul> <li> <p>true: The deployment proceeds even if alarm status information can't be retrieved from Amazon CloudWatch.</p> </li> <li> <p>false: The deployment stops if alarm status information can't be retrieved from Amazon CloudWatch.</p> </li> </ul>
   */
  ignorePollAlarmFailure?: boolean;

  /**
   * <p>A list of alarms configured for the deployment group. A maximum of 10 alarms can be added to a deployment group.</p>
   */
  alarms?: Array<_Alarm> | Iterable<_Alarm>;
}

export interface _UnmarshalledAlarmConfiguration extends _AlarmConfiguration {
  /**
   * <p>A list of alarms configured for the deployment group. A maximum of 10 alarms can be added to a deployment group.</p>
   */
  alarms?: Array<_UnmarshalledAlarm>;
}
