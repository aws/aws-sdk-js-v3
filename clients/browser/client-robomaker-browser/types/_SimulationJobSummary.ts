/**
 * <p>Summary information for a simulation job.</p>
 */
export interface _SimulationJobSummary {
  /**
   * <p>The Amazon Resource Name (ARN) of the simulation job.</p>
   */
  arn?: string;

  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last updated.</p>
   */
  lastUpdatedAt?: Date | string | number;

  /**
   * <p>The name of the simulation job.</p>
   */
  name?: string;

  /**
   * <p>The status of the simulation job.</p>
   */
  status?:
    | "Pending"
    | "Preparing"
    | "Running"
    | "Restarting"
    | "Completed"
    | "Failed"
    | "RunningFailed"
    | "Terminating"
    | "Terminated"
    | "Canceled"
    | string;

  /**
   * <p>A list of simulation job simulation application names.</p>
   */
  simulationApplicationNames?: Array<string> | Iterable<string>;

  /**
   * <p>A list of simulation job robot application names.</p>
   */
  robotApplicationNames?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledSimulationJobSummary
  extends _SimulationJobSummary {
  /**
   * <p>The time, in milliseconds since the epoch, when the simulation job was last updated.</p>
   */
  lastUpdatedAt?: Date;

  /**
   * <p>A list of simulation job simulation application names.</p>
   */
  simulationApplicationNames?: Array<string>;

  /**
   * <p>A list of simulation job robot application names.</p>
   */
  robotApplicationNames?: Array<string>;
}
