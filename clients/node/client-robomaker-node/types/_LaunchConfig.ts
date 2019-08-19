/**
 * <p>Information about a launch configuration.</p>
 */
export interface _LaunchConfig {
  /**
   * <p>The package name.</p>
   */
  packageName: string;

  /**
   * <p>The launch file name.</p>
   */
  launchFile: string;

  /**
   * <p>The environment variables for the application launch.</p>
   */
  environmentVariables?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledLaunchConfig extends _LaunchConfig {
  /**
   * <p>The environment variables for the application launch.</p>
   */
  environmentVariables?: { [key: string]: string };
}
