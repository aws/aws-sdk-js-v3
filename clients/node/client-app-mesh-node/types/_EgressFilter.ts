/**
 * <p>An object representing the egress filter rules for a service mesh.</p>
 */
export interface _EgressFilter {
  /**
   * <p>The egress filter type. By default, the type is <code>DROP_ALL</code>, which allows
   *          egress only from virtual nodes to other defined resources in the service mesh (and any
   *          traffic to <code>*.amazonaws.com</code> for AWS API calls). You can set the egress filter
   *          type to <code>ALLOW_ALL</code> to allow egress to any endpoint inside or outside of the
   *          service mesh.</p>
   */
  type: "ALLOW_ALL" | "DROP_ALL" | string;
}

export type _UnmarshalledEgressFilter = _EgressFilter;
