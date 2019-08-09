import { _CharacterSet, _UnmarshalledCharacterSet } from "./_CharacterSet";
import { _UpgradeTarget, _UnmarshalledUpgradeTarget } from "./_UpgradeTarget";
import { _Timezone, _UnmarshalledTimezone } from "./_Timezone";

/**
 * <p> This data type is used as a response element in the action <a>DescribeDBEngineVersions</a>.</p>
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
   * <p> The default character set for new instances of this engine version, if the <code>CharacterSetName</code> parameter of the CreateDBInstance API is not specified.</p>
   */
  DefaultCharacterSet?: _CharacterSet;

  /**
   * <p> A list of the character sets supported by this engine for the <code>CharacterSetName</code> parameter of the <code>CreateDBInstance</code> action.</p>
   */
  SupportedCharacterSets?: Array<_CharacterSet> | Iterable<_CharacterSet>;

  /**
   * <p>A list of engine versions that this database engine version can be upgraded to.</p>
   */
  ValidUpgradeTarget?: Array<_UpgradeTarget> | Iterable<_UpgradeTarget>;

  /**
   * <p>A list of the time zones supported by this engine for the <code>Timezone</code> parameter of the <code>CreateDBInstance</code> action.</p>
   */
  SupportedTimezones?: Array<_Timezone> | Iterable<_Timezone>;

  /**
   * <p>The types of logs that the database engine has available for export to CloudWatch Logs.</p>
   */
  ExportableLogTypes?: Array<string> | Iterable<string>;

  /**
   * <p>A value that indicates whether the engine version supports exporting the log types specified by ExportableLogTypes to CloudWatch Logs.</p>
   */
  SupportsLogExportsToCloudwatchLogs?: boolean;

  /**
   * <p>Indicates whether the database engine version supports read replicas.</p>
   */
  SupportsReadReplica?: boolean;
}

export interface _UnmarshalledDBEngineVersion extends _DBEngineVersion {
  /**
   * <p> The default character set for new instances of this engine version, if the <code>CharacterSetName</code> parameter of the CreateDBInstance API is not specified.</p>
   */
  DefaultCharacterSet?: _UnmarshalledCharacterSet;

  /**
   * <p> A list of the character sets supported by this engine for the <code>CharacterSetName</code> parameter of the <code>CreateDBInstance</code> action.</p>
   */
  SupportedCharacterSets?: Array<_UnmarshalledCharacterSet>;

  /**
   * <p>A list of engine versions that this database engine version can be upgraded to.</p>
   */
  ValidUpgradeTarget?: Array<_UnmarshalledUpgradeTarget>;

  /**
   * <p>A list of the time zones supported by this engine for the <code>Timezone</code> parameter of the <code>CreateDBInstance</code> action.</p>
   */
  SupportedTimezones?: Array<_UnmarshalledTimezone>;

  /**
   * <p>The types of logs that the database engine has available for export to CloudWatch Logs.</p>
   */
  ExportableLogTypes?: Array<string>;
}
