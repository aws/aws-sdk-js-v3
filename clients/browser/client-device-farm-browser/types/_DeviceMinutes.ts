/**
 * <p>Represents the total (metered or unmetered) minutes used by the resource to run tests. Contains the sum of minutes consumed by all children.</p>
 */
export interface _DeviceMinutes {
  /**
   * <p>When specified, represents the total minutes used by the resource to run tests.</p>
   */
  total?: number;

  /**
   * <p>When specified, represents only the sum of metered minutes used by the resource to run tests.</p>
   */
  metered?: number;

  /**
   * <p>When specified, represents only the sum of unmetered minutes used by the resource to run tests.</p>
   */
  unmetered?: number;
}

export type _UnmarshalledDeviceMinutes = _DeviceMinutes;
