import { _UpgradeTarget, _UnmarshalledUpgradeTarget } from "./_UpgradeTarget";

/**
 * <p> Detailed information about a DB engine version. </p>
 */
export interface _DBEngineVersion {
  /**
   * <p>The name of the database engine.</p>
   */
  Engine?: string;

  /**
   * <p>The version number of the database engine.</p>
   */
  EngineVersion?: string;

  /**
   * <p>The name of the DB parameter group family for the database engine.</p>
   */
  DBParameterGroupFamily?: string;

  /**
   * <p>The description of the database engine.</p>
   */
  DBEngineDescription?: string;

  /**
   * <p>The description of the database engine version.</p>
   */
  DBEngineVersionDescription?: string;

  /**
   * <p>A list of engine versions that this database engine version can be upgraded to.</p>
   */
  ValidUpgradeTarget?: Array<_UpgradeTarget> | Iterable<_UpgradeTarget>;

  /**
   * <p>The types of logs that the database engine has available for export to Amazon CloudWatch Logs.</p>
   */
  ExportableLogTypes?: Array<string> | Iterable<string>;

  /**
   * <p>A value that indicates whether the engine version supports exporting the log types specified by <code>ExportableLogTypes</code> to CloudWatch Logs.</p>
   */
  SupportsLogExportsToCloudwatchLogs?: boolean;
}

export interface _UnmarshalledDBEngineVersion extends _DBEngineVersion {
  /**
   * <p>A list of engine versions that this database engine version can be upgraded to.</p>
   */
  ValidUpgradeTarget?: Array<_UnmarshalledUpgradeTarget>;

  /**
   * <p>The types of logs that the database engine has available for export to Amazon CloudWatch Logs.</p>
   */
  ExportableLogTypes?: Array<string>;
}
