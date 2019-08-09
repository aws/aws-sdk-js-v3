/**
 * <p>Information about a simulation software suite.</p>
 */
export interface _SimulationSoftwareSuite {
  /**
   * <p>The name of the simulation software suite.</p>
   */
  name?: "Gazebo" | string;

  /**
   * <p>The version of the simulation software suite.</p>
   */
  version?: string;
}

export type _UnmarshalledSimulationSoftwareSuite = _SimulationSoftwareSuite;
