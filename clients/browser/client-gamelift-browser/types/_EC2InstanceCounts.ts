/**
 * <p>Current status of fleet capacity. The number of active instances should match or be in the process of matching the number of desired instances. Pending and terminating counts are non-zero only if fleet capacity is adjusting to an <a>UpdateFleetCapacity</a> request, or if access to resources is temporarily affected.</p> <ul> <li> <p> <a>CreateFleet</a> </p> </li> <li> <p> <a>ListFleets</a> </p> </li> <li> <p> <a>DeleteFleet</a> </p> </li> <li> <p>Describe fleets:</p> <ul> <li> <p> <a>DescribeFleetAttributes</a> </p> </li> <li> <p> <a>DescribeFleetCapacity</a> </p> </li> <li> <p> <a>DescribeFleetPortSettings</a> </p> </li> <li> <p> <a>DescribeFleetUtilization</a> </p> </li> <li> <p> <a>DescribeRuntimeConfiguration</a> </p> </li> <li> <p> <a>DescribeEC2InstanceLimits</a> </p> </li> <li> <p> <a>DescribeFleetEvents</a> </p> </li> </ul> </li> <li> <p>Update fleets:</p> <ul> <li> <p> <a>UpdateFleetAttributes</a> </p> </li> <li> <p> <a>UpdateFleetCapacity</a> </p> </li> <li> <p> <a>UpdateFleetPortSettings</a> </p> </li> <li> <p> <a>UpdateRuntimeConfiguration</a> </p> </li> </ul> </li> <li> <p>Manage fleet actions:</p> <ul> <li> <p> <a>StartFleetActions</a> </p> </li> <li> <p> <a>StopFleetActions</a> </p> </li> </ul> </li> </ul>
 */
export interface _EC2InstanceCounts {
  /**
   * <p>Ideal number of active instances in the fleet.</p>
   */
  DESIRED?: number;

  /**
   * <p>Minimum value allowed for the fleet's instance count.</p>
   */
  MINIMUM?: number;

  /**
   * <p>Maximum value allowed for the fleet's instance count.</p>
   */
  MAXIMUM?: number;

  /**
   * <p>Number of instances in the fleet that are starting but not yet active.</p>
   */
  PENDING?: number;

  /**
   * <p>Actual number of active instances in the fleet.</p>
   */
  ACTIVE?: number;

  /**
   * <p>Number of active instances in the fleet that are not currently hosting a game session.</p>
   */
  IDLE?: number;

  /**
   * <p>Number of instances in the fleet that are no longer active but haven't yet been terminated.</p>
   */
  TERMINATING?: number;
}

export type _UnmarshalledEC2InstanceCounts = _EC2InstanceCounts;
