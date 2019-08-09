import { _LaunchConfig, _UnmarshalledLaunchConfig } from "./_LaunchConfig";

/**
 * <p>Information about a simulation application configuration.</p>
 */
export interface _SimulationApplicationConfig {
  /**
   * <p>The application information for the simulation application.</p>
   */
  application: string;

  /**
   * <p>The version of the simulation application.</p>
   */
  applicationVersion?: string;

  /**
   * <p>The launch configuration for the simulation application.</p>
   */
  launchConfig: _LaunchConfig;
}

export interface _UnmarshalledSimulationApplicationConfig
  extends _SimulationApplicationConfig {
  /**
   * <p>The launch configuration for the simulation application.</p>
   */
  launchConfig: _UnmarshalledLaunchConfig;
}
