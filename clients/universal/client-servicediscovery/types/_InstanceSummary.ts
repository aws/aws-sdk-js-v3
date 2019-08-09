/**
 * <p>A complex type that contains information about the instances that you registered by using a specified service.</p>
 */
export interface _InstanceSummary {
  /**
   * <p>The ID for an instance that you created by using a specified service.</p>
   */
  Id?: string;

  /**
   * <p>A string map that contains the following information:</p> <ul> <li> <p>The attributes that are associate with the instance. </p> </li> <li> <p>For each attribute, the applicable value.</p> </li> </ul> <p>Supported attribute keys include the following:</p> <ul> <li> <p> <code>AWS_ALIAS_DNS_NAME</code>: For an alias record that routes traffic to an Elastic Load Balancing load balancer, the DNS name that is associated with the load balancer. </p> </li> <li> <p> <code>AWS_INSTANCE_CNAME</code>: For a CNAME record, the domain name that Route 53 returns in response to DNS queries, for example, <code>example.com</code>.</p> </li> <li> <p> <code>AWS_INSTANCE_IPV4</code>: For an A record, the IPv4 address that Route 53 returns in response to DNS queries, for example, <code>192.0.2.44</code>.</p> </li> <li> <p> <code>AWS_INSTANCE_IPV6</code>: For an AAAA record, the IPv6 address that Route 53 returns in response to DNS queries, for example, <code>2001:0db8:85a3:0000:0000:abcd:0001:2345</code>.</p> </li> <li> <p> <code>AWS_INSTANCE_PORT</code>: For an SRV record, the value that Route 53 returns for the port. In addition, if the service includes <code>HealthCheckConfig</code>, the port on the endpoint that Route 53 sends requests to.</p> </li> </ul>
   */
  Attributes?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledInstanceSummary extends _InstanceSummary {
  /**
   * <p>A string map that contains the following information:</p> <ul> <li> <p>The attributes that are associate with the instance. </p> </li> <li> <p>For each attribute, the applicable value.</p> </li> </ul> <p>Supported attribute keys include the following:</p> <ul> <li> <p> <code>AWS_ALIAS_DNS_NAME</code>: For an alias record that routes traffic to an Elastic Load Balancing load balancer, the DNS name that is associated with the load balancer. </p> </li> <li> <p> <code>AWS_INSTANCE_CNAME</code>: For a CNAME record, the domain name that Route 53 returns in response to DNS queries, for example, <code>example.com</code>.</p> </li> <li> <p> <code>AWS_INSTANCE_IPV4</code>: For an A record, the IPv4 address that Route 53 returns in response to DNS queries, for example, <code>192.0.2.44</code>.</p> </li> <li> <p> <code>AWS_INSTANCE_IPV6</code>: For an AAAA record, the IPv6 address that Route 53 returns in response to DNS queries, for example, <code>2001:0db8:85a3:0000:0000:abcd:0001:2345</code>.</p> </li> <li> <p> <code>AWS_INSTANCE_PORT</code>: For an SRV record, the value that Route 53 returns for the port. In addition, if the service includes <code>HealthCheckConfig</code>, the port on the endpoint that Route 53 sends requests to.</p> </li> </ul>
   */
  Attributes?: { [key: string]: string };
}
