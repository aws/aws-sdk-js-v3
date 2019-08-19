/**
 * <p>Describes a cluster version, including the parameter group family and description of the version.</p>
 */
export interface _ClusterVersion {
  /**
   * <p>The version number used by the cluster.</p>
   */
  ClusterVersion?: string;

  /**
   * <p>The name of the cluster parameter group family for the cluster.</p>
   */
  ClusterParameterGroupFamily?: string;

  /**
   * <p>The description of the cluster version.</p>
   */
  Description?: string;
}

export type _UnmarshalledClusterVersion = _ClusterVersion;
