/**
 * <p>Filter used in the request. Supported filter keys are Name and Enabled.</p>
 */
export interface _MaintenanceWindowFilter {
  /**
   * <p>The name of the filter.</p>
   */
  Key?: string;

  /**
   * <p>The filter values.</p>
   */
  Values?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledMaintenanceWindowFilter
  extends _MaintenanceWindowFilter {
  /**
   * <p>The filter values.</p>
   */
  Values?: Array<string>;
}
