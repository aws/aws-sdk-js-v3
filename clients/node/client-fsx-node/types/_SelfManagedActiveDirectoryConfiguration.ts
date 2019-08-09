/**
 * <p>The configuration that Amazon FSx uses to join the Windows File Server instance to your self-managed (including on-premises) Microsoft Active Directory (AD) directory.</p>
 */
export interface _SelfManagedActiveDirectoryConfiguration {
  /**
   * <p>The fully qualified domain name of the self-managed AD directory, such as <code>corp.example.com</code>.</p>
   */
  DomainName: string;

  /**
   * <p>(Optional) The fully qualified distinguished name of the organizational unit within your self-managed AD directory that the Windows File Server instance will join. Amazon FSx only accepts OU as the direct parent of the file system. An example is <code>OU=FSx,DC=yourdomain,DC=corp,DC=com</code>. To learn more, see <a href="https://tools.ietf.org/html/rfc2253">RFC 2253</a>. If none is provided, the FSx file system is created in the default location of your self-managed AD directory. </p> <important> <p>Only Organizational Unit (OU) objects can be the direct parent of the file system that you're creating.</p> </important>
   */
  OrganizationalUnitDistinguishedName?: string;

  /**
   * <p>(Optional) The name of the domain group whose members are granted administrative privileges for the file system. Administrative privileges include taking ownership of files and folders, and setting audit controls (audit ACLs) on files and folders. The group that you specify must already exist in your domain. If you don't provide one, your AD domain's Domain Admins group is used.</p>
   */
  FileSystemAdministratorsGroup?: string;

  /**
   * <p>The user name for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain. This account must have the permission to join computers to the domain in the organizational unit provided in <code>OrganizationalUnitDistinguishedName</code>, or in the default location of your AD domain.</p>
   */
  UserName: string;

  /**
   * <p>The password for the service account on your self-managed AD domain that Amazon FSx will use to join to your AD domain.</p>
   */
  Password: string;

  /**
   * <p>A list of up to two IP addresses of DNS servers or domain controllers in the self-managed AD directory. The IP addresses need to be either in the same VPC CIDR range as the one in which your Amazon FSx file system is being created, or in the private IP version 4 (Iv4) address ranges, as specified in <a href="http://www.faqs.org/rfcs/rfc1918.html">RFC 1918</a>:</p> <ul> <li> <p>10.0.0.0 - 10.255.255.255 (10/8 prefix)</p> </li> <li> <p>172.16.0.0 - 172.31.255.255 (172.16/12 prefix)</p> </li> <li> <p>192.168.0.0 - 192.168.255.255 (192.168/16 prefix)</p> </li> </ul>
   */
  DnsIps: Array<string> | Iterable<string>;
}

export interface _UnmarshalledSelfManagedActiveDirectoryConfiguration
  extends _SelfManagedActiveDirectoryConfiguration {
  /**
   * <p>A list of up to two IP addresses of DNS servers or domain controllers in the self-managed AD directory. The IP addresses need to be either in the same VPC CIDR range as the one in which your Amazon FSx file system is being created, or in the private IP version 4 (Iv4) address ranges, as specified in <a href="http://www.faqs.org/rfcs/rfc1918.html">RFC 1918</a>:</p> <ul> <li> <p>10.0.0.0 - 10.255.255.255 (10/8 prefix)</p> </li> <li> <p>172.16.0.0 - 172.31.255.255 (172.16/12 prefix)</p> </li> <li> <p>192.168.0.0 - 192.168.255.255 (192.168/16 prefix)</p> </li> </ul>
   */
  DnsIps: Array<string>;
}
