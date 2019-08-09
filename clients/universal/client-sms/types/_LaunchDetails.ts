/**
 * <p>Details about the latest launch of an application.</p>
 */
export interface _LaunchDetails {
  /**
   * <p>Latest time this application was launched successfully.</p>
   */
  latestLaunchTime?: Date | string | number;

  /**
   * <p>Name of the latest stack launched for this application.</p>
   */
  stackName?: string;

  /**
   * <p>Identifier of the latest stack launched for this application.</p>
   */
  stackId?: string;
}

export interface _UnmarshalledLaunchDetails extends _LaunchDetails {
  /**
   * <p>Latest time this application was launched successfully.</p>
   */
  latestLaunchTime?: Date;
}
