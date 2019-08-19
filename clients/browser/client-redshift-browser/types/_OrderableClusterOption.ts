import {
  _AvailabilityZone,
  _UnmarshalledAvailabilityZone
} from "./_AvailabilityZone";

/**
 * <p>Describes an orderable cluster option.</p>
 */
export interface _OrderableClusterOption {
  /**
   * <p>The version of the orderable cluster.</p>
   */
  ClusterVersion?: string;

  /**
   * <p>The cluster type, for example <code>multi-node</code>. </p>
   */
  ClusterType?: string;

  /**
   * <p>The node type for the orderable cluster.</p>
   */
  NodeType?: string;

  /**
   * <p>A list of availability zones for the orderable cluster.</p>
   */
  AvailabilityZones?: Array<_AvailabilityZone> | Iterable<_AvailabilityZone>;
}

export interface _UnmarshalledOrderableClusterOption
  extends _OrderableClusterOption {
  /**
   * <p>A list of availability zones for the orderable cluster.</p>
   */
  AvailabilityZones?: Array<_UnmarshalledAvailabilityZone>;
}
