import {
  _InstanceProfile,
  _UnmarshalledInstanceProfile
} from "./_InstanceProfile";

/**
 * <p>Represents the device instance.</p>
 */
export interface _DeviceInstance {
  /**
   * <p>The Amazon Resource Name (ARN) of the device instance.</p>
   */
  arn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the device.</p>
   */
  deviceArn?: string;

  /**
   * <p>An array of strings describing the device instance.</p>
   */
  labels?: Array<string> | Iterable<string>;

  /**
   * <p>The status of the device instance. Valid values are listed below.</p>
   */
  status?: "IN_USE" | "PREPARING" | "AVAILABLE" | "NOT_AVAILABLE" | string;

  /**
   * <p>Unique device identifier for the device instance.</p>
   */
  udid?: string;

  /**
   * <p>A object containing information about the instance profile.</p>
   */
  instanceProfile?: _InstanceProfile;
}

export interface _UnmarshalledDeviceInstance extends _DeviceInstance {
  /**
   * <p>An array of strings describing the device instance.</p>
   */
  labels?: Array<string>;

  /**
   * <p>A object containing information about the instance profile.</p>
   */
  instanceProfile?: _UnmarshalledInstanceProfile;
}
