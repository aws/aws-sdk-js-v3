import { _DeviceFilter, _UnmarshalledDeviceFilter } from "./_DeviceFilter";

/**
 * <p>Contains the run results requested by the device selection configuration as well as how many devices were returned. For an example of the JSON response syntax, see <a>ScheduleRun</a>.</p>
 */
export interface _DeviceSelectionResult {
  /**
   * <p>The filters in a device selection result.</p>
   */
  filters?: Array<_DeviceFilter> | Iterable<_DeviceFilter>;

  /**
   * <p>The number of devices that matched the device filter selection criteria.</p>
   */
  matchedDevicesCount?: number;

  /**
   * <p>The maximum number of devices to be selected by a device filter and included in a test run.</p>
   */
  maxDevices?: number;
}

export interface _UnmarshalledDeviceSelectionResult
  extends _DeviceSelectionResult {
  /**
   * <p>The filters in a device selection result.</p>
   */
  filters?: Array<_UnmarshalledDeviceFilter>;
}
