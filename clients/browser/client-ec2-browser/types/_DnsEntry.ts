/**
 * <p>Describes a DNS entry.</p>
 */
export interface _DnsEntry {
  /**
   * <p>The DNS name.</p>
   */
  DnsName?: string;

  /**
   * <p>The ID of the private hosted zone.</p>
   */
  HostedZoneId?: string;
}

export type _UnmarshalledDnsEntry = _DnsEntry;
