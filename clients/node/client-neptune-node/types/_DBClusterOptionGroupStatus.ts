/**
 * <p>Contains status information for a DB cluster option group.</p>
 */
export interface _DBClusterOptionGroupStatus {
  /**
   * <p>Specifies the name of the DB cluster option group.</p>
   */
  DBClusterOptionGroupName?: string;

  /**
   * <p>Specifies the status of the DB cluster option group.</p>
   */
  Status?: string;
}

export type _UnmarshalledDBClusterOptionGroupStatus = _DBClusterOptionGroupStatus;
