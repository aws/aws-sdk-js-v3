import {
  _PendingCloudwatchLogsExports,
  _UnmarshalledPendingCloudwatchLogsExports
} from "./_PendingCloudwatchLogsExports";

/**
 * <p> One or more modified settings for a DB instance. These modified settings have been requested, but haven't been applied yet.</p>
 */
export interface _PendingModifiedValues {
  /**
   * <p> Contains the new <code>DBInstanceClass</code> for the DB instance that will be applied or is currently being applied. </p>
   */
  DBInstanceClass?: string;

  /**
   * <p> Contains the new <code>AllocatedStorage</code> size for the DB instance that will be applied or is currently being applied. </p>
   */
  AllocatedStorage?: number;

  /**
   * <p>Contains the pending or currently in-progress change of the master credentials for the DB instance.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>Specifies the pending port for the DB instance.</p>
   */
  Port?: number;

  /**
   * <p>Specifies the pending number of days for which automated backups are retained.</p>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>Indicates that the Single-AZ DB instance is to change to a Multi-AZ deployment.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The license model for the DB instance.</p> <p>Valid values: <code>license-included</code>, <code>bring-your-own-license</code>, <code>general-public-license</code> </p>
   */
  LicenseModel?: string;

  /**
   * <p>Specifies the new Provisioned IOPS value for the DB instance that will be applied or is currently being applied.</p>
   */
  Iops?: number;

  /**
   * <p> Contains the new <code>DBInstanceIdentifier</code> for the DB instance that will be applied or is currently being applied. </p>
   */
  DBInstanceIdentifier?: string;

  /**
   * <p>Specifies the storage type to be associated with the DB instance.</p>
   */
  StorageType?: string;

  /**
   * <p>Specifies the identifier of the certificate authority (CA) certificate for the DB instance.</p>
   */
  CACertificateIdentifier?: string;

  /**
   * <p>The new DB subnet group for the DB instance. </p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>A list of the log types whose configuration is still pending. These log types are in the process of being activated or deactivated.</p>
   */
  PendingCloudwatchLogsExports?: _PendingCloudwatchLogsExports;
}

export interface _UnmarshalledPendingModifiedValues
  extends _PendingModifiedValues {
  /**
   * <p>A list of the log types whose configuration is still pending. These log types are in the process of being activated or deactivated.</p>
   */
  PendingCloudwatchLogsExports?: _UnmarshalledPendingCloudwatchLogsExports;
}
