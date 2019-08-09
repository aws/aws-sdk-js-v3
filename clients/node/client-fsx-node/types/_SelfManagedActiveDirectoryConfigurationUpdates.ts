/**
 * <p>The configuration that Amazon FSx uses to join the Windows File Server instance to the self-managed Microsoft Active Directory (AD) directory.</p>
 */
export interface _SelfManagedActiveDirectoryConfigurationUpdates {
  /**
   * <p>The user name for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain. This account must have the permission to join computers to the domain in the organizational unit provided in <code>OrganizationalUnitDistinguishedName</code>.</p>
   */
  UserName?: string;

  /**
   * <p>The password for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain.</p>
   */
  Password?: string;

  /**
   * <p>A list of up to two IP addresses of DNS servers or domain controllers in the self-managed AD directory.</p>
   */
  DnsIps?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledSelfManagedActiveDirectoryConfigurationUpdates
  extends _SelfManagedActiveDirectoryConfigurationUpdates {
  /**
   * <p>A list of up to two IP addresses of DNS servers or domain controllers in the self-managed AD directory.</p>
   */
  DnsIps?: Array<string>;
}
