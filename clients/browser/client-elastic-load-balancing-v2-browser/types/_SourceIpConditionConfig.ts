/**
 * <p>Information about a source IP condition.</p> <p>You can use this condition to route based on the IP address of the source that connects to the load balancer. If a client is behind a proxy, this is the IP address of the proxy not the IP address of the client.</p>
 */
export interface _SourceIpConditionConfig {
  /**
   * <p>One or more source IP addresses, in CIDR format. You can use both IPv4 and IPv6 addresses. Wildcards are not supported.</p> <p>If you specify multiple addresses, the condition is satisfied if the source IP address of the request matches one of the CIDR blocks. This condition is not satisfied by the addresses in the X-Forwarded-For header. To search for addresses in the X-Forwarded-For header, use <a>HttpHeaderConditionConfig</a>.</p>
   */
  Values?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledSourceIpConditionConfig
  extends _SourceIpConditionConfig {
  /**
   * <p>One or more source IP addresses, in CIDR format. You can use both IPv4 and IPv6 addresses. Wildcards are not supported.</p> <p>If you specify multiple addresses, the condition is satisfied if the source IP address of the request matches one of the CIDR blocks. This condition is not satisfied by the addresses in the X-Forwarded-For header. To search for addresses in the X-Forwarded-For header, use <a>HttpHeaderConditionConfig</a>.</p>
   */
  Values?: Array<string>;
}
