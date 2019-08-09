/**
 * <p>An object representing a device for a placement template (see <a>PlacementTemplate</a>).</p>
 */
export interface _DeviceTemplate {
  /**
   * <p>The device type, which currently must be <code>"button"</code>.</p>
   */
  deviceType?: string;

  /**
   * <p>An optional Lambda function to invoke instead of the default Lambda function provided by the placement template.</p>
   */
  callbackOverrides?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledDeviceTemplate extends _DeviceTemplate {
  /**
   * <p>An optional Lambda function to invoke instead of the default Lambda function provided by the placement template.</p>
   */
  callbackOverrides?: { [key: string]: string };
}
