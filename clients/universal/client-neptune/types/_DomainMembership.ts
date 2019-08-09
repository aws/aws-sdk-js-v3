/**
 * <p>An Active Directory Domain membership record associated with a DB instance.</p>
 */
export interface _DomainMembership {
  /**
   * <p>The identifier of the Active Directory Domain.</p>
   */
  Domain?: string;

  /**
   * <p>The status of the DB instance's Active Directory Domain membership, such as joined, pending-join, failed etc).</p>
   */
  Status?: string;

  /**
   * <p>The fully qualified domain name of the Active Directory Domain.</p>
   */
  FQDN?: string;

  /**
   * <p>The name of the IAM role to be used when making API calls to the Directory Service.</p>
   */
  IAMRoleName?: string;
}

export type _UnmarshalledDomainMembership = _DomainMembership;
