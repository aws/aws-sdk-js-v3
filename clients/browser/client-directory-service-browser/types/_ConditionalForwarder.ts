/**
 * <p>Points to a remote domain with which you are setting up a trust relationship. Conditional forwarders are required in order to set up a trust relationship with another domain.</p>
 */
export interface _ConditionalForwarder {
  /**
   * <p>The fully qualified domain name (FQDN) of the remote domains pointed to by the conditional forwarder.</p>
   */
  RemoteDomainName?: string;

  /**
   * <p>The IP addresses of the remote DNS server associated with RemoteDomainName. This is the IP address of the DNS server that your conditional forwarder points to.</p>
   */
  DnsIpAddrs?: Array<string> | Iterable<string>;

  /**
   * <p>The replication scope of the conditional forwarder. The only allowed value is <code>Domain</code>, which will replicate the conditional forwarder to all of the domain controllers for your AWS directory.</p>
   */
  ReplicationScope?: "Domain" | string;
}

export interface _UnmarshalledConditionalForwarder
  extends _ConditionalForwarder {
  /**
   * <p>The IP addresses of the remote DNS server associated with RemoteDomainName. This is the IP address of the DNS server that your conditional forwarder points to.</p>
   */
  DnsIpAddrs?: Array<string>;
}
