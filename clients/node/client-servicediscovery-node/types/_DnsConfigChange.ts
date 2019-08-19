import { _DnsRecord, _UnmarshalledDnsRecord } from "./_DnsRecord";

/**
 * <p>A complex type that contains information about changes to the Route 53 DNS records that AWS Cloud Map creates when you register an instance.</p>
 */
export interface _DnsConfigChange {
  /**
   * <p>An array that contains one <code>DnsRecord</code> object for each Route 53 record that you want AWS Cloud Map to create when you register an instance.</p>
   */
  DnsRecords: Array<_DnsRecord> | Iterable<_DnsRecord>;
}

export interface _UnmarshalledDnsConfigChange extends _DnsConfigChange {
  /**
   * <p>An array that contains one <code>DnsRecord</code> object for each Route 53 record that you want AWS Cloud Map to create when you register an instance.</p>
   */
  DnsRecords: Array<_UnmarshalledDnsRecord>;
}
