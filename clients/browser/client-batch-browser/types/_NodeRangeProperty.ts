import {
  _ContainerProperties,
  _UnmarshalledContainerProperties
} from "./_ContainerProperties";

/**
 * <p>An object representing the properties of the node range for a multi-node parallel job.</p>
 */
export interface _NodeRangeProperty {
  /**
   * <p>The range of nodes, using node index values. A range of <code>0:3</code> indicates nodes with index values of <code>0</code> through <code>3</code>. If the starting range value is omitted (<code>:n</code>), then <code>0</code> is used to start the range. If the ending range value is omitted (<code>n:</code>), then the highest possible node index is used to end the range. Your accumulative node ranges must account for all nodes (0:n). You may nest node ranges, for example 0:10 and 4:5, in which case the 4:5 range properties override the 0:10 properties. </p>
   */
  targetNodes: string;

  /**
   * <p>The container details for the node range.</p>
   */
  container?: _ContainerProperties;
}

export interface _UnmarshalledNodeRangeProperty extends _NodeRangeProperty {
  /**
   * <p>The container details for the node range.</p>
   */
  container?: _UnmarshalledContainerProperties;
}
