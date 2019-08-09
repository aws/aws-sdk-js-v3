/**
 * <p>Represents a specific dashboard.</p>
 */
export interface _DashboardEntry {
  /**
   * <p>The name of the dashboard.</p>
   */
  DashboardName?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the dashboard.</p>
   */
  DashboardArn?: string;

  /**
   * <p>The time stamp of when the dashboard was last modified, either by an API call or through the console. This number is expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC.</p>
   */
  LastModified?: Date | string | number;

  /**
   * <p>The size of the dashboard, in bytes.</p>
   */
  Size?: number;
}

export interface _UnmarshalledDashboardEntry extends _DashboardEntry {
  /**
   * <p>The time stamp of when the dashboard was last modified, either by an API call or through the console. This number is expressed as the number of milliseconds since Jan 1, 1970 00:00:00 UTC.</p>
   */
  LastModified?: Date;
}
