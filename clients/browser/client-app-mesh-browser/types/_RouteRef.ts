/**
 * <p>An object representing a route returned by a list operation.</p>
 */
export interface _RouteRef {
  /**
   * <p>The full Amazon Resource Name (ARN) for the route.</p>
   */
  arn: string;

  /**
   * <p>The name of the service mesh that the route resides in.</p>
   */
  meshName: string;

  /**
   * <p>The name of the route.</p>
   */
  routeName: string;

  /**
   * <p>The virtual router that the route is associated with.</p>
   */
  virtualRouterName: string;
}

export type _UnmarshalledRouteRef = _RouteRef;
