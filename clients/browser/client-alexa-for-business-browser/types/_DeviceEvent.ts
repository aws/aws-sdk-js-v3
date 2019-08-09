/**
 * <p>The list of device events.</p>
 */
export interface _DeviceEvent {
  /**
   * <p>The type of device event.</p>
   */
  Type?: "CONNECTION_STATUS" | "DEVICE_STATUS" | string;

  /**
   * <p>The value of the event.</p>
   */
  Value?: string;

  /**
   * <p>The time (in epoch) when the event occurred. </p>
   */
  Timestamp?: Date | string | number;
}

export interface _UnmarshalledDeviceEvent extends _DeviceEvent {
  /**
   * <p>The time (in epoch) when the event occurred. </p>
   */
  Timestamp?: Date;
}
