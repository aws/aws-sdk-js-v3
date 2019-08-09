import {
  _DeploymentLaunchConfig,
  _UnmarshalledDeploymentLaunchConfig
} from "./_DeploymentLaunchConfig";

/**
 * <p>Information about a deployment application configuration.</p>
 */
export interface _DeploymentApplicationConfig {
  /**
   * <p>The Amazon Resource Name (ARN) of the robot application.</p>
   */
  application: string;

  /**
   * <p>The version of the application.</p>
   */
  applicationVersion: string;

  /**
   * <p>The launch configuration.</p>
   */
  launchConfig: _DeploymentLaunchConfig;
}

export interface _UnmarshalledDeploymentApplicationConfig
  extends _DeploymentApplicationConfig {
  /**
   * <p>The launch configuration.</p>
   */
  launchConfig: _UnmarshalledDeploymentLaunchConfig;
}
