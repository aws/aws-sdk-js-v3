/**
 * <p>Current status of fleet utilization, including the number of game and player sessions being hosted.</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>
 */
export interface _FleetUtilization {
  /**
   * <p>Unique identifier for a fleet.</p>
   */
  FleetId?: string;

  /**
   * <p>Number of server processes in an <code>ACTIVE</code> status currently running across all instances in the fleet</p>
   */
  ActiveServerProcessCount?: number;

  /**
   * <p>Number of active game sessions currently being hosted on all instances in the fleet.</p>
   */
  ActiveGameSessionCount?: number;

  /**
   * <p>Number of active player sessions currently being hosted on all instances in the fleet.</p>
   */
  CurrentPlayerSessionCount?: number;

  /**
   * <p>Maximum players allowed across all game sessions currently being hosted on all instances in the fleet.</p>
   */
  MaximumPlayerSessionCount?: number;
}

export type _UnmarshalledFleetUtilization = _FleetUtilization;
