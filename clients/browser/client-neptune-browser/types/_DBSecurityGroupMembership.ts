/**
 * <p>Specifies membership in a designated DB security group.</p>
 */
export interface _DBSecurityGroupMembership {
  /**
   * <p>The name of the DB security group.</p>
   */
  DBSecurityGroupName?: string;

  /**
   * <p>The status of the DB security group.</p>
   */
  Status?: string;
}

export type _UnmarshalledDBSecurityGroupMembership = _DBSecurityGroupMembership;
