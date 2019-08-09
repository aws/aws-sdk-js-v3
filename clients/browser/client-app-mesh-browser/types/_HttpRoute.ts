import {
  _HttpRouteAction,
  _UnmarshalledHttpRouteAction
} from "./_HttpRouteAction";
import {
  _HttpRouteMatch,
  _UnmarshalledHttpRouteMatch
} from "./_HttpRouteMatch";

/**
 * <p>An object representing the HTTP routing specification for a route.</p>
 */
export interface _HttpRoute {
  /**
   * <p>The action to take if a match is determined.</p>
   */
  action: _HttpRouteAction;

  /**
   * <p>The criteria for determining an HTTP request match.</p>
   */
  match: _HttpRouteMatch;
}

export interface _UnmarshalledHttpRoute extends _HttpRoute {
  /**
   * <p>The action to take if a match is determined.</p>
   */
  action: _UnmarshalledHttpRouteAction;

  /**
   * <p>The criteria for determining an HTTP request match.</p>
   */
  match: _UnmarshalledHttpRouteMatch;
}
