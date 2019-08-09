/**
 * <p>Contains information about the directory.</p>
 */
export interface _DirectoryVpcSettingsDescription {
  /**
   * <p>The identifier of the VPC that the directory is in.</p>
   */
  VpcId?: string;

  /**
   * <p>The identifiers of the subnets for the directory servers.</p>
   */
  SubnetIds?: Array<string> | Iterable<string>;

  /**
   * <p>The domain controller security group identifier for the directory.</p>
   */
  SecurityGroupId?: string;

  /**
   * <p>The list of Availability Zones that the directory is in.</p>
   */
  AvailabilityZones?: Array<string> | Iterable<string>;
}

export interface _UnmarshalledDirectoryVpcSettingsDescription
  extends _DirectoryVpcSettingsDescription {
  /**
   * <p>The identifiers of the subnets for the directory servers.</p>
   */
  SubnetIds?: Array<string>;

  /**
   * <p>The list of Availability Zones that the directory is in.</p>
   */
  AvailabilityZones?: Array<string>;
}
