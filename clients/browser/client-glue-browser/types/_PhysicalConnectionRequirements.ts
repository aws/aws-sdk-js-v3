/**
 * <p>Specifies the physical requirements for a connection.</p>
 */
export interface _PhysicalConnectionRequirements {
  /**
   * <p>The subnet ID used by the connection.</p>
   */
  SubnetId?: string;

  /**
   * <p>The security group ID list used by the connection.</p>
   */
  SecurityGroupIdList?: Array<string> | Iterable<string>;

  /**
   * <p>The connection's Availability Zone. This field is redundant because the specified subnet implies the Availability Zone to be used. Currently the field must be populated, but it will be deprecated in the future.</p>
   */
  AvailabilityZone?: string;
}

export interface _UnmarshalledPhysicalConnectionRequirements
  extends _PhysicalConnectionRequirements {
  /**
   * <p>The security group ID list used by the connection.</p>
   */
  SecurityGroupIdList?: Array<string>;
}
