import { _Tag, _UnmarshalledTag } from "./_Tag";

/**
 * <p>Describes a parameter group.</p>
 */
export interface _ClusterParameterGroup {
  /**
   * <p>The name of the cluster parameter group.</p>
   */
  ParameterGroupName?: string;

  /**
   * <p>The name of the cluster parameter group family that this cluster parameter group is compatible with.</p>
   */
  ParameterGroupFamily?: string;

  /**
   * <p>The description of the parameter group.</p>
   */
  Description?: string;

  /**
   * <p>The list of tags for the cluster parameter group.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;
}

export interface _UnmarshalledClusterParameterGroup
  extends _ClusterParameterGroup {
  /**
   * <p>The list of tags for the cluster parameter group.</p>
   */
  Tags?: Array<_UnmarshalledTag>;
}
