/**
 * <p>A named set of parameters that are applied to all of the nodes in a DAX cluster.</p>
 */
export interface _ParameterGroup {
  /**
   * <p>The name of the parameter group.</p>
   */
  ParameterGroupName?: string;

  /**
   * <p>A description of the parameter group.</p>
   */
  Description?: string;
}

export type _UnmarshalledParameterGroup = _ParameterGroup;
