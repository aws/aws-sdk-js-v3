/**
 * <p>Provides information on the option groups the DB instance is a member of.</p>
 */
export interface _OptionGroupMembership {
  /**
   * <p>The name of the option group that the instance belongs to.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The status of the DB instance's option group membership. Valid values are: <code>in-sync</code>, <code>pending-apply</code>, <code>pending-removal</code>, <code>pending-maintenance-apply</code>, <code>pending-maintenance-removal</code>, <code>applying</code>, <code>removing</code>, and <code>failed</code>.</p>
   */
  Status?: string;
}

export type _UnmarshalledOptionGroupMembership = _OptionGroupMembership;
