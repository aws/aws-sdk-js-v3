/**
 * <p>Contains information about an instance that is part of a DB cluster.</p>
 */
export interface _DBClusterMember {
  /**
   * <p>Specifies the instance identifier for this member of the DB cluster.</p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>Value that is <code>true</code> if the cluster member is the primary instance for the DB cluster and <code>false</code> otherwise.</p>
   */
  IsClusterWriter?: boolean;

  /**
   * <p>Specifies the status of the DB cluster parameter group for this member of the DB cluster.</p>
   */
  DBClusterParameterGroupStatus?: string;

  /**
   * <p>A value that specifies the order in which a Read Replica is promoted to the primary instance after a failure of the existing primary instance.</p>
   */
  PromotionTier?: number;
}

export type _UnmarshalledDBClusterMember = _DBClusterMember;
