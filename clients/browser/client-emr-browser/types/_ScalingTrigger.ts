import {
  _CloudWatchAlarmDefinition,
  _UnmarshalledCloudWatchAlarmDefinition
} from "./_CloudWatchAlarmDefinition";

/**
 * <p>The conditions that trigger an automatic scaling activity.</p>
 */
export interface _ScalingTrigger {
  /**
   * <p>The definition of a CloudWatch metric alarm. When the defined alarm conditions are met along with other trigger parameters, scaling activity begins.</p>
   */
  CloudWatchAlarmDefinition: _CloudWatchAlarmDefinition;
}

export interface _UnmarshalledScalingTrigger extends _ScalingTrigger {
  /**
   * <p>The definition of a CloudWatch metric alarm. When the defined alarm conditions are met along with other trigger parameters, scaling activity begins.</p>
   */
  CloudWatchAlarmDefinition: _UnmarshalledCloudWatchAlarmDefinition;
}
