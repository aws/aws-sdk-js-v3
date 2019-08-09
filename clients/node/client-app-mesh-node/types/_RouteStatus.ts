/**
 * <p>An object representing the current status of a route.</p>
 */
export interface _RouteStatus {
  /**
   * <p>The current status for the route.</p>
   */
  status: "ACTIVE" | "DELETED" | "INACTIVE" | string;
}

export type _UnmarshalledRouteStatus = _RouteStatus;
