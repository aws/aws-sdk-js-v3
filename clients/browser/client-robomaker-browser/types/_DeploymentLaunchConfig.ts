/**
 * <p>Configuration information for a deployment launch.</p>
 */
export interface _DeploymentLaunchConfig {
  /**
   * <p>The package name.</p>
   */
  packageName: string;

  /**
   * <p>The deployment pre-launch file. This file will be executed prior to the launch file.</p>
   */
  preLaunchFile?: string;

  /**
   * <p>The launch file name.</p>
   */
  launchFile: string;

  /**
   * <p>The deployment post-launch file. This file will be executed after the launch file.</p>
   */
  postLaunchFile?: string;

  /**
   * <p>An array of key/value pairs specifying environment variables for the robot application</p>
   */
  environmentVariables?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledDeploymentLaunchConfig
  extends _DeploymentLaunchConfig {
  /**
   * <p>An array of key/value pairs specifying environment variables for the robot application</p>
   */
  environmentVariables?: { [key: string]: string };
}
