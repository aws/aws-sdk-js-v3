import { _CloudwatchLogsExportConfiguration } from "./_CloudwatchLogsExportConfiguration";
import { _ScalingConfiguration } from "./_ScalingConfiguration";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface ModifyDBClusterInput {
  /**
   * <p>The DB cluster identifier for the cluster being modified. This parameter is not case-sensitive.</p> <p>Constraints: This identifier must match the identifier of an existing DB cluster.</p>
   */
  DBClusterIdentifier: string;

  /**
   * <p>The new DB cluster identifier for the DB cluster when renaming a DB cluster. This value is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens</p> </li> <li> <p>The first character must be a letter</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens</p> </li> </ul> <p>Example: <code>my-cluster2</code> </p>
   */
  NewDBClusterIdentifier?: string;

  /**
   * <p>A value that indicates whether the modifications in this request and any pending modifications are asynchronously applied as soon as possible, regardless of the <code>PreferredMaintenanceWindow</code> setting for the DB cluster. If this parameter is disabled, changes to the DB cluster are applied during the next maintenance window.</p> <p>The <code>ApplyImmediately</code> parameter only affects the <code>EnableIAMDatabaseAuthentication</code>, <code>MasterUserPassword</code>, and <code>NewDBClusterIdentifier</code> values. If the <code>ApplyImmediately</code> parameter is disabled, then changes to the <code>EnableIAMDatabaseAuthentication</code>, <code>MasterUserPassword</code>, and <code>NewDBClusterIdentifier</code> values are applied during the next maintenance window. All other changes are applied immediately, regardless of the value of the <code>ApplyImmediately</code> parameter.</p> <p>By default, this parameter is disabled.</p>
   */
  ApplyImmediately?: boolean;

  /**
   * <p>The number of days for which automated backups are retained. You must specify a minimum value of 1.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 1 to 35</p> </li> </ul>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p>The name of the DB cluster parameter group to use for the DB cluster.</p>
   */
  DBClusterParameterGroupName?: string;

  /**
   * <p>A list of VPC security groups that the DB cluster will belong to.</p>
   */
  VpcSecurityGroupIds?: Array<string> | Iterable<string>;

  /**
   * <p>The port number on which the DB cluster accepts connections.</p> <p>Constraints: Value must be <code>1150-65535</code> </p> <p>Default: The same port as the original DB cluster.</p>
   */
  Port?: number;

  /**
   * <p>The new password for the master database user. This password can contain any printable ASCII character except "/", """, or "@".</p> <p>Constraints: Must contain from 8 to 41 characters.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>A value that indicates that the DB cluster should be associated with the specified option group. Changing this parameter doesn't result in an outage except in the following case, and the change is applied during the next maintenance window unless the <code>ApplyImmediately</code> is enabled for this request. If the parameter change results in an option group that enables OEM, this change can cause a brief (sub-second) period during which new connections are rejected but existing connections are not interrupted. </p> <p>Permanent options can't be removed from an option group. The option group can't be removed from a DB cluster once it is associated with a DB cluster.</p>
   */
  OptionGroupName?: string;

  /**
   * <p>The daily time range during which automated backups are created if automated backups are enabled, using the <code>BackupRetentionPeriod</code> parameter. </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. To see the time blocks available, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora"> Adjusting the Preferred DB Cluster Maintenance Window</a> in the <i>Amazon Aurora User Guide.</i> </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The weekly time range during which system maintenance can occur, in Universal Coordinated Time (UTC).</p> <p>Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. To see the time blocks available, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow.Aurora"> Adjusting the Preferred DB Cluster Maintenance Window</a> in the <i>Amazon Aurora User Guide.</i> </p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled.</p>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>The target backtrack window, in seconds. To disable backtracking, set this value to 0.</p> <p>Default: 0</p> <p>Constraints:</p> <ul> <li> <p>If specified, this value must be set to a number from 0 to 259,200 (72 hours).</p> </li> </ul>
   */
  BacktrackWindow?: number;

  /**
   * <p>The configuration setting for the log types to be enabled for export to CloudWatch Logs for a specific DB cluster.</p>
   */
  CloudwatchLogsExportConfiguration?: _CloudwatchLogsExportConfiguration;

  /**
   * <p>The version number of the database engine to which you want to upgrade. Changing this parameter results in an outage. The change is applied during the next maintenance window unless <code>ApplyImmediately</code> is enabled.</p> <p>For a list of valid engine versions, use <a>DescribeDBEngineVersions</a>.</p>
   */
  EngineVersion?: string;

  /**
   * <p>A value that indicates whether major version upgrades are allowed.</p> <p>Constraints: You must allow major version upgrades when specifying a value for the <code>EngineVersion</code> parameter that is a different major version than the DB cluster's current version.</p>
   */
  AllowMajorVersionUpgrade?: boolean;

  /**
   * <p>The name of the DB parameter group to apply to all instances of the DB cluster. </p> <note> <p>When you apply a parameter group using the <code>DBInstanceParameterGroupName</code> parameter, the DB cluster isn't rebooted automatically. Also, parameter changes aren't applied during the next maintenance window but instead are applied immediately.</p> </note> <p>Default: The existing name setting</p> <p>Constraints:</p> <ul> <li> <p>The DB parameter group must be in the same DB parameter group family as this DB cluster.</p> </li> <li> <p>The <code>DBInstanceParameterGroupName</code> parameter is only valid in combination with the <code>AllowMajorVersionUpgrade</code> parameter.</p> </li> </ul>
   */
  DBInstanceParameterGroupName?: string;

  /**
   * <p>The scaling properties of the DB cluster. You can only modify scaling properties for DB clusters in <code>serverless</code> DB engine mode.</p>
   */
  ScalingConfiguration?: _ScalingConfiguration;

  /**
   * <p>A value that indicates whether the DB cluster has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>A value that indicates whether to enable the HTTP endpoint for an Aurora Serverless DB cluster. By default, the HTTP endpoint is disabled.</p> <p>When enabled, the HTTP endpoint provides a connectionless web service API for running SQL queries on the Aurora Serverless DB cluster. You can also query your database from inside the RDS console with the query editor.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/data-api.html">Using the Data API for Aurora Serverless</a> in the <i>Amazon Aurora User Guide</i>.</p>
   */
  EnableHttpEndpoint?: boolean;

  /**
   * <p>A value that indicates whether to copy all tags from the DB cluster to snapshots of the DB cluster. The default is not to copy them.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
