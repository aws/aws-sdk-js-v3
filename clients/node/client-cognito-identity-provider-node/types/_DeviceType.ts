import { _AttributeType, _UnmarshalledAttributeType } from "./_AttributeType";

/**
 * <p>The device type.</p>
 */
export interface _DeviceType {
  /**
   * <p>The device key.</p>
   */
  DeviceKey?: string;

  /**
   * <p>The device attributes.</p>
   */
  DeviceAttributes?: Array<_AttributeType> | Iterable<_AttributeType>;

  /**
   * <p>The creation date of the device.</p>
   */
  DeviceCreateDate?: Date | string | number;

  /**
   * <p>The last modified date of the device.</p>
   */
  DeviceLastModifiedDate?: Date | string | number;

  /**
   * <p>The date in which the device was last authenticated.</p>
   */
  DeviceLastAuthenticatedDate?: Date | string | number;
}

export interface _UnmarshalledDeviceType extends _DeviceType {
  /**
   * <p>The device attributes.</p>
   */
  DeviceAttributes?: Array<_UnmarshalledAttributeType>;

  /**
   * <p>The creation date of the device.</p>
   */
  DeviceCreateDate?: Date;

  /**
   * <p>The last modified date of the device.</p>
   */
  DeviceLastModifiedDate?: Date;

  /**
   * <p>The date in which the device was last authenticated.</p>
   */
  DeviceLastAuthenticatedDate?: Date;
}
