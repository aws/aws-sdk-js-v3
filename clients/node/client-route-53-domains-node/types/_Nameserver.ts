/**
 * <p>Nameserver includes the following elements.</p>
 */
export interface _Nameserver {
  /**
   * <p>The fully qualified host name of the name server.</p> <p>Constraint: Maximum 255 characters</p>
   */
  Name: string;

  /**
   * <p>Glue IP address of a name server entry. Glue IP addresses are required only when the name of the name server is a subdomain of the domain. For example, if your domain is example.com and the name server for the domain is ns.example.com, you need to specify the IP address for ns.example.com.</p> <p>Constraints: The list can contain only one IPv4 and one IPv6 address.</p>
   */
  GlueIps?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledNameserver extends _Nameserver {
  /**
   * <p>Glue IP address of a name server entry. Glue IP addresses are required only when the name of the name server is a subdomain of the domain. For example, if your domain is example.com and the name server for the domain is ns.example.com, you need to specify the IP address for ns.example.com.</p> <p>Constraints: The list can contain only one IPv4 and one IPv6 address.</p>
   */
  GlueIps?: Array<string>;
}
