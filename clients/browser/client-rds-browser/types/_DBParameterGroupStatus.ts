/**
 * <p>The status of the DB parameter group.</p> <p>This data type is used as a response element in the following actions:</p> <ul> <li> <p> <code>CreateDBInstance</code> </p> </li> <li> <p> <code>CreateDBInstanceReadReplica</code> </p> </li> <li> <p> <code>DeleteDBInstance</code> </p> </li> <li> <p> <code>ModifyDBInstance</code> </p> </li> <li> <p> <code>RebootDBInstance</code> </p> </li> <li> <p> <code>RestoreDBInstanceFromDBSnapshot</code> </p> </li> </ul>
 */
export interface _DBParameterGroupStatus {
  /**
   * <p>The name of the DP parameter group.</p>
   */
  DBParameterGroupName?: string;

  /**
   * <p>The status of parameter updates.</p>
   */
  ParameterApplyStatus?: string;
}

export type _UnmarshalledDBParameterGroupStatus = _DBParameterGroupStatus;
