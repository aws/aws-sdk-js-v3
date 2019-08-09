/**
 * <p>Information about an application.</p>
 */
export interface _ApplicationInfo {
  /**
   * <p>The application ID.</p>
   */
  applicationId?: string;

  /**
   * <p>The application name.</p>
   */
  applicationName?: string;

  /**
   * <p>The time at which the application was created.</p>
   */
  createTime?: Date | string | number;

  /**
   * <p>True if the user has authenticated with GitHub for the specified application. Otherwise, false.</p>
   */
  linkedToGitHub?: boolean;

  /**
   * <p>The name for a connection to a GitHub account.</p>
   */
  gitHubAccountName?: string;

  /**
   * <p>The destination platform type for deployment of the application (<code>Lambda</code> or <code>Server</code>).</p>
   */
  computePlatform?: "Server" | "Lambda" | "ECS" | string;
}

export interface _UnmarshalledApplicationInfo extends _ApplicationInfo {
  /**
   * <p>The time at which the application was created.</p>
   */
  createTime?: Date;
}
