import { _Device, _UnmarshalledDevice } from "./_Device";
import {
  _IncompatibilityMessage,
  _UnmarshalledIncompatibilityMessage
} from "./_IncompatibilityMessage";

/**
 * <p>Represents a device pool compatibility result.</p>
 */
export interface _DevicePoolCompatibilityResult {
  /**
   * <p>The device (phone or tablet) that you wish to return information about.</p>
   */
  device?: _Device;

  /**
   * <p>Whether the result was compatible with the device pool.</p>
   */
  compatible?: boolean;

  /**
   * <p>Information about the compatibility.</p>
   */
  incompatibilityMessages?:
    | Array<_IncompatibilityMessage>
    | Iterable<_IncompatibilityMessage>;
}

export interface _UnmarshalledDevicePoolCompatibilityResult
  extends _DevicePoolCompatibilityResult {
  /**
   * <p>The device (phone or tablet) that you wish to return information about.</p>
   */
  device?: _UnmarshalledDevice;

  /**
   * <p>Information about the compatibility.</p>
   */
  incompatibilityMessages?: Array<_UnmarshalledIncompatibilityMessage>;
}
