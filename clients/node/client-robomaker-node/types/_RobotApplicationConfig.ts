import { _LaunchConfig, _UnmarshalledLaunchConfig } from "./_LaunchConfig";

/**
 * <p>Application configuration information for a robot.</p>
 */
export interface _RobotApplicationConfig {
  /**
   * <p>The application information for the robot application.</p>
   */
  application: string;

  /**
   * <p>The version of the robot application.</p>
   */
  applicationVersion?: string;

  /**
   * <p>The launch configuration for the robot application.</p>
   */
  launchConfig: _LaunchConfig;
}

export interface _UnmarshalledRobotApplicationConfig
  extends _RobotApplicationConfig {
  /**
   * <p>The launch configuration for the robot application.</p>
   */
  launchConfig: _UnmarshalledLaunchConfig;
}
