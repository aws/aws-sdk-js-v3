import {
  _TcpRouteAction,
  _UnmarshalledTcpRouteAction
} from "./_TcpRouteAction";

/**
 * <p>An object representing the TCP routing specification for a route.</p>
 */
export interface _TcpRoute {
  /**
   * <p>The action to take if a match is determined.</p>
   */
  action: _TcpRouteAction;
}

export interface _UnmarshalledTcpRoute extends _TcpRoute {
  /**
   * <p>The action to take if a match is determined.</p>
   */
  action: _UnmarshalledTcpRouteAction;
}
