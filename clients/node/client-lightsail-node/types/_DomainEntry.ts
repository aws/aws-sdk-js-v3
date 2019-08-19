/**
 * <p>Describes a domain recordset entry.</p>
 */
export interface _DomainEntry {
  /**
   * <p>The ID of the domain recordset entry.</p>
   */
  id?: string;

  /**
   * <p>The name of the domain.</p>
   */
  name?: string;

  /**
   * <p>The target AWS name server (e.g., <code>ns-111.awsdns-22.com.</code>).</p> <p>For Lightsail load balancers, the value looks like <code>ab1234c56789c6b86aba6fb203d443bc-123456789.us-east-2.elb.amazonaws.com</code>. Be sure to also set <code>isAlias</code> to <code>true</code> when setting up an A record for a load balancer.</p>
   */
  target?: string;

  /**
   * <p>When <code>true</code>, specifies whether the domain entry is an alias used by the Lightsail load balancer. You can include an alias (A type) record in your request, which points to a load balancer DNS name and routes traffic to your load balancer</p>
   */
  isAlias?: boolean;

  /**
   * <p>The type of domain entry, such as address (A), canonical name (CNAME), mail exchanger (MX), name server (NS), start of authority (SOA), service locator (SRV), or text (TXT).</p> <p>The following domain entry types can be used:</p> <ul> <li> <p> <code>A</code> </p> </li> <li> <p> <code>CNAME</code> </p> </li> <li> <p> <code>MX</code> </p> </li> <li> <p> <code>NS</code> </p> </li> <li> <p> <code>SOA</code> </p> </li> <li> <p> <code>SRV</code> </p> </li> <li> <p> <code>TXT</code> </p> </li> </ul>
   */
  type?: string;

  /**
   * <p>(Deprecated) The options for the domain entry.</p> <note> <p>In releases prior to November 29, 2017, this parameter was not included in the API response. It is now deprecated.</p> </note>
   */
  options?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledDomainEntry extends _DomainEntry {
  /**
   * <p>(Deprecated) The options for the domain entry.</p> <note> <p>In releases prior to November 29, 2017, this parameter was not included in the API response. It is now deprecated.</p> </note>
   */
  options?: { [key: string]: string };
}
