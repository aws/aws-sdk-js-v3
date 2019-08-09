import { _Tag } from "./_Tag";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateRelationalDatabaseInput shape
 */
export interface CreateRelationalDatabaseInput {
  /**
   * <p>The name to use for your new database.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 2 to 255 alphanumeric characters, or hyphens.</p> </li> <li> <p>The first and last character must be a letter or number.</p> </li> </ul>
   */
  relationalDatabaseName: string;

  /**
   * <p>The Availability Zone in which to create your new database. Use the <code>us-east-2a</code> case-sensitive format.</p> <p>You can get a list of Availability Zones by using the <code>get regions</code> operation. Be sure to add the <code>include relational database Availability Zones</code> parameter to your request.</p>
   */
  availabilityZone?: string;

  /**
   * <p>The blueprint ID for your new database. A blueprint describes the major engine version of a database.</p> <p>You can get a list of database blueprints IDs by using the <code>get relational database blueprints</code> operation.</p>
   */
  relationalDatabaseBlueprintId: string;

  /**
   * <p>The bundle ID for your new database. A bundle describes the performance specifications for your database.</p> <p>You can get a list of database bundle IDs by using the <code>get relational database bundles</code> operation.</p>
   */
  relationalDatabaseBundleId: string;

  /**
   * <p>The name of the master database created when the Lightsail database resource is created.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 64 alphanumeric characters.</p> </li> <li> <p>Cannot be a word reserved by the specified database engine</p> </li> </ul>
   */
  masterDatabaseName: string;

  /**
   * <p>The master user name for your new database.</p> <p>Constraints:</p> <ul> <li> <p>Master user name is required.</p> </li> <li> <p>Must contain from 1 to 16 alphanumeric characters.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Cannot be a reserved word for the database engine you choose.</p> <p>For more information about reserved words in MySQL 5.6 or 5.7, see the Keywords and Reserved Words articles for <a href="https://dev.mysql.com/doc/refman/5.6/en/keywords.html">MySQL 5.6</a> or <a href="https://dev.mysql.com/doc/refman/5.7/en/keywords.html">MySQL 5.7</a> respectively.</p> </li> </ul>
   */
  masterUsername: string;

  /**
   * <p>The password for the master user of your new database. The password can include any printable ASCII character except "/", """, or "@".</p> <p>Constraints: Must contain 8 to 41 characters.</p>
   */
  masterUserPassword?: string;

  /**
   * <p>The daily time range during which automated backups are created for your new database if automated backups are enabled.</p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. For more information about the preferred backup window time blocks for each region, see the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow">Working With Backups</a> guide in the Amazon Relational Database Service (Amazon RDS) documentation.</p> <p>Constraints:</p> <ul> <li> <p>Must be in the <code>hh24:mi-hh24:mi</code> format.</p> <p>Example: <code>16:00-16:30</code> </p> </li> <li> <p>Specified in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>
   */
  preferredBackupWindow?: string;

  /**
   * <p>The weekly time range during which system maintenance can occur on your new database.</p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week.</p> <p>Constraints:</p> <ul> <li> <p>Must be in the <code>ddd:hh24:mi-ddd:hh24:mi</code> format.</p> </li> <li> <p>Valid days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> <li> <p>Specified in Universal Coordinated Time (UTC).</p> </li> <li> <p>Example: <code>Tue:17:00-Tue:17:30</code> </p> </li> </ul>
   */
  preferredMaintenanceWindow?: string;

  /**
   * <p>Specifies the accessibility options for your new database. A value of <code>true</code> specifies a database that is available to resources outside of your Lightsail account. A value of <code>false</code> specifies a database that is available only to your Lightsail resources in the same region as your database.</p>
   */
  publiclyAccessible?: boolean;

  /**
   * <p>The tag keys and optional values to add to the resource during create.</p> <p>To tag a resource after it has been created, see the <code>tag resource</code> operation.</p>
   */
  tags?: Array<_Tag> | Iterable<_Tag>;

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
