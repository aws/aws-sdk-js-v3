import {
  _ContainerOverrides,
  _UnmarshalledContainerOverrides
} from "./_ContainerOverrides";

/**
 * <p>Object representing any node overrides to a job definition that is used in a <a>SubmitJob</a> API operation.</p>
 */
export interface _NodePropertyOverride {
  /**
   * <p>The range of nodes, using node index values, with which to override. A range of <code>0:3</code> indicates nodes with index values of <code>0</code> through <code>3</code>. If the starting range value is omitted (<code>:n</code>), then <code>0</code> is used to start the range. If the ending range value is omitted (<code>n:</code>), then the highest possible node index is used to end the range.</p>
   */
  targetNodes: string;

  /**
   * <p>The overrides that should be sent to a node range.</p>
   */
  containerOverrides?: _ContainerOverrides;
}

export interface _UnmarshalledNodePropertyOverride
  extends _NodePropertyOverride {
  /**
   * <p>The overrides that should be sent to a node range.</p>
   */
  containerOverrides?: _UnmarshalledContainerOverrides;
}
