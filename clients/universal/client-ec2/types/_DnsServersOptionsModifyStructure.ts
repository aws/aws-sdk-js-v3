/**
 * <p>Information about the DNS server to be used.</p>
 */
export interface _DnsServersOptionsModifyStructure {
  /**
   * <p>The IPv4 address range, in CIDR notation, of the DNS servers to be used. You can specify up to two DNS servers. Ensure that the DNS servers can be reached by the clients. The specified values overwrite the existing values.</p>
   */
  CustomDnsServers?: Array<string> | Iterable<string>;

  /**
   * <p>Indicates whether DNS servers should be used. Specify <code>False</code> to delete the existing DNS servers.</p>
   */
  Enabled?: boolean;
}

export interface _UnmarshalledDnsServersOptionsModifyStructure
  extends _DnsServersOptionsModifyStructure {
  /**
   * <p>The IPv4 address range, in CIDR notation, of the DNS servers to be used. You can specify up to two DNS servers. Ensure that the DNS servers can be reached by the clients. The specified values overwrite the existing values.</p>
   */
  CustomDnsServers?: Array<string>;
}
