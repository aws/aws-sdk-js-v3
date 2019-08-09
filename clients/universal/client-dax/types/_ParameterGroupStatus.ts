/**
 * <p>The status of a parameter group.</p>
 */
export interface _ParameterGroupStatus {
  /**
   * <p>The name of the parameter group.</p>
   */
  ParameterGroupName?: string;

  /**
   * <p>The status of parameter updates. </p>
   */
  ParameterApplyStatus?: string;

  /**
   * <p>The node IDs of one or more nodes to be rebooted.</p>
   */
  NodeIdsToReboot?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledParameterGroupStatus
  extends _ParameterGroupStatus {
  /**
   * <p>The node IDs of one or more nodes to be rebooted.</p>
   */
  NodeIdsToReboot?: Array<string>;
}
