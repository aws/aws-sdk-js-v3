/**
 * <p>Defines the values for a task parameter.</p>
 */
export interface _MaintenanceWindowTaskParameterValueExpression {
  /**
   * <p>This field contains an array of 0 or more strings, each 1 to 255 characters in length.</p>
   */
  Values?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledMaintenanceWindowTaskParameterValueExpression
  extends _MaintenanceWindowTaskParameterValueExpression {
  /**
   * <p>This field contains an array of 0 or more strings, each 1 to 255 characters in length.</p>
   */
  Values?: Array<string>;
}
