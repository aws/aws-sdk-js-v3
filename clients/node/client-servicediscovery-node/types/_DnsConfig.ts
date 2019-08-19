import { _DnsRecord, _UnmarshalledDnsRecord } from "./_DnsRecord";

/**
 * <p>A complex type that contains information about the Amazon Route 53 DNS records that you want AWS Cloud Map to create when you register an instance.</p>
 */
export interface _DnsConfig {
  /**
   * <p>The ID of the namespace to use for DNS configuration.</p>
   */
  NamespaceId?: string;

  /**
   * <p>The routing policy that you want to apply to all Route 53 DNS records that AWS Cloud Map creates when you register an instance and specify this service.</p> <note> <p>If you want to use this service to register instances that create alias records, specify <code>WEIGHTED</code> for the routing policy.</p> </note> <p>You can specify the following values:</p> <p> <b>MULTIVALUE</b> </p> <p>If you define a health check for the service and the health check is healthy, Route 53 returns the applicable value for up to eight instances.</p> <p>For example, suppose the service includes configurations for one A record and a health check, and you use the service to register 10 instances. Route 53 responds to DNS queries with IP addresses for up to eight healthy instances. If fewer than eight instances are healthy, Route 53 responds to every DNS query with the IP addresses for all of the healthy instances.</p> <p>If you don't define a health check for the service, Route 53 assumes that all instances are healthy and returns the values for up to eight instances.</p> <p>For more information about the multivalue routing policy, see <a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-multivalue">Multivalue Answer Routing</a> in the <i>Route 53 Developer Guide</i>.</p> <p> <b>WEIGHTED</b> </p> <p>Route 53 returns the applicable value from one randomly selected instance from among the instances that you registered using the same service. Currently, all records have the same weight, so you can't route more or less traffic to any instances.</p> <p>For example, suppose the service includes configurations for one A record and a health check, and you use the service to register 10 instances. Route 53 responds to DNS queries with the IP address for one randomly selected instance from among the healthy instances. If no instances are healthy, Route 53 responds to DNS queries as if all of the instances were healthy.</p> <p>If you don't define a health check for the service, Route 53 assumes that all instances are healthy and returns the applicable value for one randomly selected instance.</p> <p>For more information about the weighted routing policy, see <a href="http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-policy.html#routing-policy-weighted">Weighted Routing</a> in the <i>Route 53 Developer Guide</i>.</p>
   */
  RoutingPolicy?: "MULTIVALUE" | "WEIGHTED" | string;

  /**
   * <p>An array that contains one <code>DnsRecord</code> object for each Route 53 DNS record that you want AWS Cloud Map to create when you register an instance.</p>
   */
  DnsRecords: Array<_DnsRecord> | Iterable<_DnsRecord>;
}

export interface _UnmarshalledDnsConfig extends _DnsConfig {
  /**
   * <p>An array that contains one <code>DnsRecord</code> object for each Route 53 DNS record that you want AWS Cloud Map to create when you register an instance.</p>
   */
  DnsRecords: Array<_UnmarshalledDnsRecord>;
}
