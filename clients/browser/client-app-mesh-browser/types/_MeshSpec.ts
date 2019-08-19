import { _EgressFilter, _UnmarshalledEgressFilter } from "./_EgressFilter";

/**
 * <p>An object representing the specification of a service mesh.</p>
 */
export interface _MeshSpec {
  /**
   * <p>The egress filter rules for the service mesh.</p>
   */
  egressFilter?: _EgressFilter;
}

export interface _UnmarshalledMeshSpec extends _MeshSpec {
  /**
   * <p>The egress filter rules for the service mesh.</p>
   */
  egressFilter?: _UnmarshalledEgressFilter;
}
