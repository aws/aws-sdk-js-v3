/**
 * <p>The configuration of the self-managed Microsoft Active Directory (AD) directory to which the Windows File Server instance is joined.</p>
 */
export interface _SelfManagedActiveDirectoryAttributes {
  /**
   * <p>The fully qualified domain name of the self-managed AD directory.</p>
   */
  DomainName?: string;

  /**
   * <p>The fully qualified distinguished name of the organizational unit within the self-managed AD directory to which the Windows File Server instance is joined.</p>
   */
  OrganizationalUnitDistinguishedName?: string;

  /**
   * <p>The name of the domain group whose members have administrative privileges for the FSx file system.</p>
   */
  FileSystemAdministratorsGroup?: string;

  /**
   * <p>The user name for the service account on your self-managed AD domain that FSx uses to join to your AD domain.</p>
   */
  UserName?: string;

  /**
   * <p>A list of up to two IP addresses of DNS servers or domain controllers in the self-managed AD directory.</p>
   */
  DnsIps?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledSelfManagedActiveDirectoryAttributes
  extends _SelfManagedActiveDirectoryAttributes {
  /**
   * <p>A list of up to two IP addresses of DNS servers or domain controllers in the self-managed AD directory.</p>
   */
  DnsIps?: Array<string>;
}
