import { _Attributes, _UnmarshalledAttributes } from "./_Attributes";

/**
 * _Device shape
 */
export interface _Device {
  /**
   * <p>The user specified attributes associated with the device for an event.</p>
   */
  Attributes?: _Attributes;

  /**
   * <p>The unique identifier of the device.</p>
   */
  DeviceId?: string;

  /**
   * <p>The device type, such as "button".</p>
   */
  Type?: string;
}

export interface _UnmarshalledDevice extends _Device {
  /**
   * <p>The user specified attributes associated with the device for an event.</p>
   */
  Attributes?: _UnmarshalledAttributes;
}
