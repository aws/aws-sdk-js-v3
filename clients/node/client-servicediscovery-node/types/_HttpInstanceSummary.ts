/**
 * <p>In a response to a <a>DiscoverInstance</a> request, <code>HttpInstanceSummary</code> contains information about one instance that matches the values that you specified in the request.</p>
 */
export interface _HttpInstanceSummary {
  /**
   * <p>The ID of an instance that matches the values that you specified in the request.</p>
   */
  InstanceId?: string;

  /**
   * <p>The name of the namespace that you specified when you registered the instance.</p>
   */
  NamespaceName?: string;

  /**
   * <p>The name of the service that you specified when you registered the instance.</p>
   */
  ServiceName?: string;

  /**
   * <p>If you configured health checking in the service, the current health status of the service instance.</p>
   */
  HealthStatus?: "HEALTHY" | "UNHEALTHY" | "UNKNOWN" | string;

  /**
   * <p>If you included any attributes when you registered the instance, the values of those attributes.</p>
   */
  Attributes?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledHttpInstanceSummary extends _HttpInstanceSummary {
  /**
   * <p>If you included any attributes when you registered the instance, the values of those attributes.</p>
   */
  Attributes?: { [key: string]: string };
}
