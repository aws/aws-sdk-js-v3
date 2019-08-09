import { _HttpRoute, _UnmarshalledHttpRoute } from "./_HttpRoute";
import { _TcpRoute, _UnmarshalledTcpRoute } from "./_TcpRoute";

/**
 * <p>An object representing the specification of a route.</p>
 */
export interface _RouteSpec {
  /**
   * <p>The HTTP routing information for the route.</p>
   */
  httpRoute?: _HttpRoute;

  /**
   * <p>The TCP routing information for the route.</p>
   */
  tcpRoute?: _TcpRoute;
}

export interface _UnmarshalledRouteSpec extends _RouteSpec {
  /**
   * <p>The HTTP routing information for the route.</p>
   */
  httpRoute?: _UnmarshalledHttpRoute;

  /**
   * <p>The TCP routing information for the route.</p>
   */
  tcpRoute?: _UnmarshalledTcpRoute;
}
