/**
 * <p>Describes a pending database value modification.</p>
 */
export interface _PendingModifiedRelationalDatabaseValues {
  /**
   * <p>The password for the master user of the database.</p>
   */
  masterUserPassword?: string;

  /**
   * <p>The database engine version.</p>
   */
  engineVersion?: string;

  /**
   * <p>A Boolean value indicating whether automated backup retention is enabled.</p>
   */
  backupRetentionEnabled?: boolean;
}

export type _UnmarshalledPendingModifiedRelationalDatabaseValues = _PendingModifiedRelationalDatabaseValues;
