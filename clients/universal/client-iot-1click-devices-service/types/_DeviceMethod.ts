/**
 * _DeviceMethod shape
 */
export interface _DeviceMethod {
  /**
   * <p>The type of the device, such as "button".</p>
   */
  DeviceType?: string;

  /**
   * <p>The name of the method applicable to the deviceType.</p>
   */
  MethodName?: string;
}

export type _UnmarshalledDeviceMethod = _DeviceMethod;
