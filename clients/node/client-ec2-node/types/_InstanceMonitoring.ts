import { _Monitoring, _UnmarshalledMonitoring } from "./_Monitoring";

/**
 * <p>Describes the monitoring of an instance.</p>
 */
export interface _InstanceMonitoring {
  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The monitoring for the instance.</p>
   */
  Monitoring?: _Monitoring;
}

export interface _UnmarshalledInstanceMonitoring extends _InstanceMonitoring {
  /**
   * <p>The monitoring for the instance.</p>
   */
  Monitoring?: _UnmarshalledMonitoring;
}
