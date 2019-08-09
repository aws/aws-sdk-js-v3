/**
 * <p>Hostnames and IP address entries that are added to the <code>/etc/hosts</code> file of a container via the <code>extraHosts</code> parameter of its <a>ContainerDefinition</a>. </p>
 */
export interface _HostEntry {
  /**
   * <p>The hostname to use in the <code>/etc/hosts</code> entry.</p>
   */
  hostname: string;

  /**
   * <p>The IP address to use in the <code>/etc/hosts</code> entry.</p>
   */
  ipAddress: string;
}

export type _UnmarshalledHostEntry = _HostEntry;
