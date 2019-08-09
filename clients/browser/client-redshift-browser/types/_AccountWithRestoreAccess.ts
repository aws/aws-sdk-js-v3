/**
 * <p>Describes an AWS customer account authorized to restore a snapshot.</p>
 */
export interface _AccountWithRestoreAccess {
  /**
   * <p>The identifier of an AWS customer account authorized to restore a snapshot.</p>
   */
  AccountId?: string;

  /**
   * <p>The identifier of an AWS support account authorized to restore a snapshot. For AWS support, the identifier is <code>amazon-redshift-support</code>. </p>
   */
  AccountAlias?: string;
}

export type _UnmarshalledAccountWithRestoreAccess = _AccountWithRestoreAccess;
