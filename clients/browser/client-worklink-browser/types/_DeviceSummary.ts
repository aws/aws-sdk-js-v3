/**
 * <p>The summary of devices.</p>
 */
export interface _DeviceSummary {
  /**
   * <p>The ID of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>The status of the device.</p>
   */
  DeviceStatus?: "ACTIVE" | "SIGNED_OUT" | string;
}

export type _UnmarshalledDeviceSummary = _DeviceSummary;
