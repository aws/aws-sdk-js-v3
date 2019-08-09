/**
 * <p>Contains information for the <a>ConnectDirectory</a> operation when an AD Connector directory is being created.</p>
 */
export interface _DirectoryConnectSettings {
  /**
   * <p>The identifier of the VPC in which the AD Connector is created.</p>
   */
  VpcId: string;

  /**
   * <p>A list of subnet identifiers in the VPC in which the AD Connector is created.</p>
   */
  SubnetIds: Array<string> | Iterable<string>;

  /**
   * <p>A list of one or more IP addresses of DNS servers or domain controllers in the on-premises directory.</p>
   */
  CustomerDnsIps: Array<string> | Iterable<string>;

  /**
   * <p>The user name of an account in the on-premises directory that is used to connect to the directory. This account must have the following permissions:</p> <ul> <li> <p>Read users and groups</p> </li> <li> <p>Create computer objects</p> </li> <li> <p>Join computers to the domain</p> </li> </ul>
   */
  CustomerUserName: string;
}

export interface _UnmarshalledDirectoryConnectSettings
  extends _DirectoryConnectSettings {
  /**
   * <p>A list of subnet identifiers in the VPC in which the AD Connector is created.</p>
   */
  SubnetIds: Array<string>;

  /**
   * <p>A list of one or more IP addresses of DNS servers or domain controllers in the on-premises directory.</p>
   */
  CustomerDnsIps: Array<string>;
}
