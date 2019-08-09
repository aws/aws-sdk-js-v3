/**
 * <p>Contains information about an AD Connector directory.</p>
 */
export interface _DirectoryConnectSettingsDescription {
  /**
   * <p>The identifier of the VPC that the AD Connector is in.</p>
   */
  VpcId?: string;

  /**
   * <p>A list of subnet identifiers in the VPC that the AD connector is in.</p>
   */
  SubnetIds?: Array<string> | Iterable<string>;

  /**
   * <p>The user name of the service account in the on-premises directory.</p>
   */
  CustomerUserName?: string;

  /**
   * <p>The security group identifier for the AD Connector directory.</p>
   */
  SecurityGroupId?: string;

  /**
   * <p>A list of the Availability Zones that the directory is in.</p>
   */
  AvailabilityZones?: Array<string> | Iterable<string>;

  /**
   * <p>The IP addresses of the AD Connector servers.</p>
   */
  ConnectIps?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledDirectoryConnectSettingsDescription
  extends _DirectoryConnectSettingsDescription {
  /**
   * <p>A list of subnet identifiers in the VPC that the AD connector is in.</p>
   */
  SubnetIds?: Array<string>;

  /**
   * <p>A list of the Availability Zones that the directory is in.</p>
   */
  AvailabilityZones?: Array<string>;

  /**
   * <p>The IP addresses of the AD Connector servers.</p>
   */
  ConnectIps?: Array<string>;
}
