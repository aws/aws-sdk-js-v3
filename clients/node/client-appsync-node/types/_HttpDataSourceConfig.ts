import {
  _AuthorizationConfig,
  _UnmarshalledAuthorizationConfig
} from "./_AuthorizationConfig";

/**
 * <p>Describes an HTTP data source configuration.</p>
 */
export interface _HttpDataSourceConfig {
  /**
   * <p>The HTTP URL endpoint. You can either specify the domain name or IP, and port combination, and the URL scheme must be HTTP or HTTPS. If the port is not specified, AWS AppSync uses the default port 80 for the HTTP endpoint and port 443 for HTTPS endpoints.</p>
   */
  endpoint?: string;

  /**
   * <p>The authorization config in case the HTTP endpoint requires authorization.</p>
   */
  authorizationConfig?: _AuthorizationConfig;
}

export interface _UnmarshalledHttpDataSourceConfig
  extends _HttpDataSourceConfig {
  /**
   * <p>The authorization config in case the HTTP endpoint requires authorization.</p>
   */
  authorizationConfig?: _UnmarshalledAuthorizationConfig;
}
