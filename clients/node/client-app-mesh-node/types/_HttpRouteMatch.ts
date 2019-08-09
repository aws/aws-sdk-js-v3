/**
 * <p>An object representing the requirements for a route to match HTTP requests for a virtual
 *          router.</p>
 */
export interface _HttpRouteMatch {
  /**
   * <p>Specifies the path to match requests with. This parameter must always start with
   *             <code>/</code>, which by itself matches all requests to the virtual service name. You
   *          can also match for path-based routing of requests. For example, if your virtual service
   *          name is <code>my-service.local</code> and you want the route to match requests to
   *             <code>my-service.local/metrics</code>, your prefix should be
   *          <code>/metrics</code>.</p>
   */
  prefix: string;
}

export type _UnmarshalledHttpRouteMatch = _HttpRouteMatch;
