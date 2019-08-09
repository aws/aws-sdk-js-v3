import { _CPU, _UnmarshalledCPU } from "./_CPU";
import { _Resolution, _UnmarshalledResolution } from "./_Resolution";
import {
  _DeviceInstance,
  _UnmarshalledDeviceInstance
} from "./_DeviceInstance";

/**
 * <p>Represents a device type that an app is tested against.</p>
 */
export interface _Device {
  /**
   * <p>The device's ARN.</p>
   */
  arn?: string;

  /**
   * <p>The device's display name.</p>
   */
  name?: string;

  /**
   * <p>The device's manufacturer name.</p>
   */
  manufacturer?: string;

  /**
   * <p>The device's model name.</p>
   */
  model?: string;

  /**
   * <p>The device's model ID.</p>
   */
  modelId?: string;

  /**
   * <p>The device's form factor.</p> <p>Allowed values include:</p> <ul> <li> <p>PHONE: The phone form factor.</p> </li> <li> <p>TABLET: The tablet form factor.</p> </li> </ul>
   */
  formFactor?: "PHONE" | "TABLET" | string;

  /**
   * <p>The device's platform.</p> <p>Allowed values include:</p> <ul> <li> <p>ANDROID: The Android platform.</p> </li> <li> <p>IOS: The iOS platform.</p> </li> </ul>
   */
  platform?: "ANDROID" | "IOS" | string;

  /**
   * <p>The device's operating system type.</p>
   */
  os?: string;

  /**
   * <p>Information about the device's CPU.</p>
   */
  cpu?: _CPU;

  /**
   * <p>The resolution of the device.</p>
   */
  resolution?: _Resolution;

  /**
   * <p>The device's heap size, expressed in bytes.</p>
   */
  heapSize?: number;

  /**
   * <p>The device's total memory size, expressed in bytes.</p>
   */
  memory?: number;

  /**
   * <p>The device's image name.</p>
   */
  image?: string;

  /**
   * <p>The device's carrier.</p>
   */
  carrier?: string;

  /**
   * <p>The device's radio.</p>
   */
  radio?: string;

  /**
   * <p>Specifies whether remote access has been enabled for the specified device.</p>
   */
  remoteAccessEnabled?: boolean;

  /**
   * <p>This flag is set to <code>true</code> if remote debugging is enabled for the device.</p>
   */
  remoteDebugEnabled?: boolean;

  /**
   * <p>The type of fleet to which this device belongs. Possible values for fleet type are PRIVATE and PUBLIC.</p>
   */
  fleetType?: string;

  /**
   * <p>The name of the fleet to which this device belongs.</p>
   */
  fleetName?: string;

  /**
   * <p>The instances belonging to this device.</p>
   */
  instances?: Array<_DeviceInstance> | Iterable<_DeviceInstance>;

  /**
   * <p>Reflects how likely a device will be available for a test run. It is currently available in the ListDevices and GetDevice API methods.</p>
   */
  availability?:
    | "TEMPORARY_NOT_AVAILABLE"
    | "BUSY"
    | "AVAILABLE"
    | "HIGHLY_AVAILABLE"
    | string;
}

export interface _UnmarshalledDevice extends _Device {
  /**
   * <p>Information about the device's CPU.</p>
   */
  cpu?: _UnmarshalledCPU;

  /**
   * <p>The resolution of the device.</p>
   */
  resolution?: _UnmarshalledResolution;

  /**
   * <p>The instances belonging to this device.</p>
   */
  instances?: Array<_UnmarshalledDeviceInstance>;
}
