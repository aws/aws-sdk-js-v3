/**
 * <p>Contains VPC information for the <a>CreateDirectory</a> or <a>CreateMicrosoftAD</a> operation.</p>
 */
export interface _DirectoryVpcSettings {
  /**
   * <p>The identifier of the VPC in which to create the directory.</p>
   */
  VpcId: string;

  /**
   * <p>The identifiers of the subnets for the directory servers. The two subnets must be in different Availability Zones. AWS Directory Service creates a directory server and a DNS server in each of these subnets.</p>
   */
  SubnetIds: Array<string> | Iterable<string>;
}

export interface _UnmarshalledDirectoryVpcSettings
  extends _DirectoryVpcSettings {
  /**
   * <p>The identifiers of the subnets for the directory servers. The two subnets must be in different Availability Zones. AWS Directory Service creates a directory server and a DNS server in each of these subnets.</p>
   */
  SubnetIds: Array<string>;
}
