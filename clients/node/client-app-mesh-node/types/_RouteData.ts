import {
  _ResourceMetadata,
  _UnmarshalledResourceMetadata
} from "./_ResourceMetadata";
import { _RouteSpec, _UnmarshalledRouteSpec } from "./_RouteSpec";
import { _RouteStatus, _UnmarshalledRouteStatus } from "./_RouteStatus";

/**
 * <p>An object representing a route returned by a describe operation.</p>
 */
export interface _RouteData {
  /**
   * <p>The name of the service mesh that the route resides in.</p>
   */
  meshName: string;

  /**
   * <p>The associated metadata for the route.</p>
   */
  metadata: _ResourceMetadata;

  /**
   * <p>The name of the route.</p>
   */
  routeName: string;

  /**
   * <p>The specifications of the route.</p>
   */
  spec: _RouteSpec;

  /**
   * <p>The status of the route.</p>
   */
  status: _RouteStatus;

  /**
   * <p>The virtual router that the route is associated with.</p>
   */
  virtualRouterName: string;
}

export interface _UnmarshalledRouteData extends _RouteData {
  /**
   * <p>The associated metadata for the route.</p>
   */
  metadata: _UnmarshalledResourceMetadata;

  /**
   * <p>The specifications of the route.</p>
   */
  spec: _UnmarshalledRouteSpec;

  /**
   * <p>The status of the route.</p>
   */
  status: _UnmarshalledRouteStatus;
}
