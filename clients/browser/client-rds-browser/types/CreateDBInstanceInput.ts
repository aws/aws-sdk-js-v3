import { _Tag } from "./_Tag";
import { _ProcessorFeature } from "./_ProcessorFeature";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface CreateDBInstanceInput {
  /**
   * <p>The meaning of this parameter differs according to the database engine you use.</p> <p> <b>MySQL</b> </p> <p>The name of the database to create when the DB instance is created. If this parameter is not specified, no database is created in the DB instance.</p> <p>Constraints:</p> <ul> <li> <p>Must contain 1 to 64 letters or numbers.</p> </li> <li> <p>Can't be a word reserved by the specified database engine</p> </li> </ul> <p> <b>MariaDB</b> </p> <p>The name of the database to create when the DB instance is created. If this parameter is not specified, no database is created in the DB instance.</p> <p>Constraints:</p> <ul> <li> <p>Must contain 1 to 64 letters or numbers.</p> </li> <li> <p>Can't be a word reserved by the specified database engine</p> </li> </ul> <p> <b>PostgreSQL</b> </p> <p>The name of the database to create when the DB instance is created. If this parameter is not specified, the default "postgres" database is created in the DB instance.</p> <p>Constraints:</p> <ul> <li> <p>Must contain 1 to 63 letters, numbers, or underscores.</p> </li> <li> <p>Must begin with a letter or an underscore. Subsequent characters can be letters, underscores, or digits (0-9).</p> </li> <li> <p>Can't be a word reserved by the specified database engine</p> </li> </ul> <p> <b>Oracle</b> </p> <p>The Oracle System ID (SID) of the created DB instance. If you specify <code>null</code>, the default value <code>ORCL</code> is used. You can't specify the string NULL, or any other reserved word, for <code>DBName</code>. </p> <p>Default: <code>ORCL</code> </p> <p>Constraints:</p> <ul> <li> <p>Can't be longer than 8 characters</p> </li> </ul> <p> <b>SQL Server</b> </p> <p>Not applicable. Must be null.</p> <p> <b>Amazon Aurora</b> </p> <p>The name of the database to create when the primary instance of the DB cluster is created. If this parameter is not specified, no database is created in the DB instance.</p> <p>Constraints:</p> <ul> <li> <p>Must contain 1 to 64 letters or numbers.</p> </li> <li> <p>Can't be a word reserved by the specified database engine</p> </li> </ul>
   */
  DBName?: string;

  /**
   * <p>The DB instance identifier. This parameter is stored as a lowercase string.</p> <p>Constraints:</p> <ul> <li> <p>Must contain from 1 to 63 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens.</p> </li> </ul> <p>Example: <code>mydbinstance</code> </p>
   */
  DBInstanceIdentifier: string;

  /**
   * <p>The amount of storage (in gibibytes) to allocate for the DB instance.</p> <p>Type: Integer</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. Aurora cluster volumes automatically grow as the amount of data in your database increases, though you are only charged for the space that you use in an Aurora cluster volume.</p> <p> <b>MySQL</b> </p> <p>Constraints to the amount of storage for each storage type are the following: </p> <ul> <li> <p>General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.</p> </li> <li> <p>Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.</p> </li> <li> <p>Magnetic storage (standard): Must be an integer from 5 to 3072.</p> </li> </ul> <p> <b>MariaDB</b> </p> <p>Constraints to the amount of storage for each storage type are the following: </p> <ul> <li> <p>General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.</p> </li> <li> <p>Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.</p> </li> <li> <p>Magnetic storage (standard): Must be an integer from 5 to 3072.</p> </li> </ul> <p> <b>PostgreSQL</b> </p> <p>Constraints to the amount of storage for each storage type are the following: </p> <ul> <li> <p>General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.</p> </li> <li> <p>Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.</p> </li> <li> <p>Magnetic storage (standard): Must be an integer from 5 to 3072.</p> </li> </ul> <p> <b>Oracle</b> </p> <p>Constraints to the amount of storage for each storage type are the following: </p> <ul> <li> <p>General Purpose (SSD) storage (gp2): Must be an integer from 20 to 65536.</p> </li> <li> <p>Provisioned IOPS storage (io1): Must be an integer from 100 to 65536.</p> </li> <li> <p>Magnetic storage (standard): Must be an integer from 10 to 3072.</p> </li> </ul> <p> <b>SQL Server</b> </p> <p>Constraints to the amount of storage for each storage type are the following: </p> <ul> <li> <p>General Purpose (SSD) storage (gp2):</p> <ul> <li> <p>Enterprise and Standard editions: Must be an integer from 200 to 16384.</p> </li> <li> <p>Web and Express editions: Must be an integer from 20 to 16384.</p> </li> </ul> </li> <li> <p>Provisioned IOPS storage (io1):</p> <ul> <li> <p>Enterprise and Standard editions: Must be an integer from 200 to 16384.</p> </li> <li> <p>Web and Express editions: Must be an integer from 100 to 16384.</p> </li> </ul> </li> <li> <p>Magnetic storage (standard):</p> <ul> <li> <p>Enterprise and Standard editions: Must be an integer from 200 to 1024.</p> </li> <li> <p>Web and Express editions: Must be an integer from 20 to 1024.</p> </li> </ul> </li> </ul>
   */
  AllocatedStorage?: number;

  /**
   * <p>The compute and memory capacity of the DB instance, for example, <code>db.m4.large</code>. Not all DB instance classes are available in all AWS Regions, or for all database engines. For the full list of DB instance classes, and availability for your engine, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.DBInstanceClass.html">DB Instance Class</a> in the <i>Amazon RDS User Guide.</i> </p>
   */
  DBInstanceClass: string;

  /**
   * <p>The name of the database engine to be used for this instance. </p> <p>Not every database engine is available for every AWS Region. </p> <p>Valid Values: </p> <ul> <li> <p> <code>aurora</code> (for MySQL 5.6-compatible Aurora)</p> </li> <li> <p> <code>aurora-mysql</code> (for MySQL 5.7-compatible Aurora)</p> </li> <li> <p> <code>aurora-postgresql</code> </p> </li> <li> <p> <code>mariadb</code> </p> </li> <li> <p> <code>mysql</code> </p> </li> <li> <p> <code>oracle-ee</code> </p> </li> <li> <p> <code>oracle-se2</code> </p> </li> <li> <p> <code>oracle-se1</code> </p> </li> <li> <p> <code>oracle-se</code> </p> </li> <li> <p> <code>postgres</code> </p> </li> <li> <p> <code>sqlserver-ee</code> </p> </li> <li> <p> <code>sqlserver-se</code> </p> </li> <li> <p> <code>sqlserver-ex</code> </p> </li> <li> <p> <code>sqlserver-web</code> </p> </li> </ul>
   */
  Engine: string;

  /**
   * <p>The name for the master user.</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The name for the master user is managed by the DB cluster. </p> <p> <b>MariaDB</b> </p> <p>Constraints:</p> <ul> <li> <p>Required for MariaDB.</p> </li> <li> <p>Must be 1 to 16 letters or numbers.</p> </li> <li> <p>Can't be a reserved word for the chosen database engine.</p> </li> </ul> <p> <b>Microsoft SQL Server</b> </p> <p>Constraints:</p> <ul> <li> <p>Required for SQL Server.</p> </li> <li> <p>Must be 1 to 128 letters or numbers.</p> </li> <li> <p>The first character must be a letter.</p> </li> <li> <p>Can't be a reserved word for the chosen database engine.</p> </li> </ul> <p> <b>MySQL</b> </p> <p>Constraints:</p> <ul> <li> <p>Required for MySQL.</p> </li> <li> <p>Must be 1 to 16 letters or numbers.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can't be a reserved word for the chosen database engine.</p> </li> </ul> <p> <b>Oracle</b> </p> <p>Constraints:</p> <ul> <li> <p>Required for Oracle.</p> </li> <li> <p>Must be 1 to 30 letters or numbers.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can't be a reserved word for the chosen database engine.</p> </li> </ul> <p> <b>PostgreSQL</b> </p> <p>Constraints:</p> <ul> <li> <p>Required for PostgreSQL.</p> </li> <li> <p>Must be 1 to 63 letters or numbers.</p> </li> <li> <p>First character must be a letter.</p> </li> <li> <p>Can't be a reserved word for the chosen database engine.</p> </li> </ul>
   */
  MasterUsername?: string;

  /**
   * <p>The password for the master user. The password can include any printable ASCII character except "/", """, or "@".</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The password for the master user is managed by the DB cluster.</p> <p> <b>MariaDB</b> </p> <p>Constraints: Must contain from 8 to 41 characters.</p> <p> <b>Microsoft SQL Server</b> </p> <p>Constraints: Must contain from 8 to 128 characters.</p> <p> <b>MySQL</b> </p> <p>Constraints: Must contain from 8 to 41 characters.</p> <p> <b>Oracle</b> </p> <p>Constraints: Must contain from 8 to 30 characters.</p> <p> <b>PostgreSQL</b> </p> <p>Constraints: Must contain from 8 to 128 characters.</p>
   */
  MasterUserPassword?: string;

  /**
   * <p>A list of DB security groups to associate with this DB instance.</p> <p>Default: The default DB security group for the database engine.</p>
   */
  DBSecurityGroups?: Array<string> | Iterable<string>;

  /**
   * <p>A list of Amazon EC2 VPC security groups to associate with this DB instance.</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The associated list of EC2 VPC security groups is managed by the DB cluster.</p> <p>Default: The default EC2 VPC security group for the DB subnet group's VPC.</p>
   */
  VpcSecurityGroupIds?: Array<string> | Iterable<string>;

  /**
   * <p> The Availability Zone (AZ) where the database will be created. For information on AWS Regions and Availability Zones, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html">Regions and Availability Zones</a>. </p> <p>Default: A random, system-chosen Availability Zone in the endpoint's AWS Region.</p> <p> Example: <code>us-east-1d</code> </p> <p> Constraint: The <code>AvailabilityZone</code> parameter can't be specified if the DB instance is a Multi-AZ deployment. The specified Availability Zone must be in the same AWS Region as the current endpoint. </p>
   */
  AvailabilityZone?: string;

  /**
   * <p>A DB subnet group to associate with this DB instance.</p> <p>If there is no DB subnet group, then it is a non-VPC DB instance.</p>
   */
  DBSubnetGroupName?: string;

  /**
   * <p>The time range each week during which system maintenance can occur, in Universal Coordinated Time (UTC). For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#Concepts.DBMaintenance">Amazon RDS Maintenance Window</a>. </p> <p> Format: <code>ddd:hh24:mi-ddd:hh24:mi</code> </p> <p>The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region, occurring on a random day of the week. </p> <p>Valid Days: Mon, Tue, Wed, Thu, Fri, Sat, Sun.</p> <p>Constraints: Minimum 30-minute window.</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * <p>The name of the DB parameter group to associate with this DB instance. If this argument is omitted, the default DBParameterGroup for the specified engine is used.</p> <p>Constraints:</p> <ul> <li> <p>Must be 1 to 255 letters, numbers, or hyphens.</p> </li> <li> <p>First character must be a letter</p> </li> <li> <p>Can't end with a hyphen or contain two consecutive hyphens</p> </li> </ul>
   */
  DBParameterGroupName?: string;

  /**
   * <p>The number of days for which automated backups are retained. Setting this parameter to a positive number enables backups. Setting this parameter to 0 disables automated backups.</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The retention period for automated backups is managed by the DB cluster.</p> <p>Default: 1</p> <p>Constraints:</p> <ul> <li> <p>Must be a value from 0 to 35</p> </li> <li> <p>Can't be set to 0 if the DB instance is a source to Read Replicas</p> </li> </ul>
   */
  BackupRetentionPeriod?: number;

  /**
   * <p> The daily time range during which automated backups are created if automated backups are enabled, using the <code>BackupRetentionPeriod</code> parameter. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_WorkingWithAutomatedBackups.html#USER_WorkingWithAutomatedBackups.BackupWindow">The Backup Window</a> in the <i>Amazon RDS User Guide</i>. </p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The daily time range for creating automated backups is managed by the DB cluster.</p> <p> The default is a 30-minute window selected at random from an 8-hour block of time for each AWS Region. To see the time blocks available, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_UpgradeDBInstance.Maintenance.html#AdjustingTheMaintenanceWindow"> Adjusting the Preferred DB Instance Maintenance Window</a> in the <i>Amazon RDS User Guide</i>. </p> <p>Constraints:</p> <ul> <li> <p>Must be in the format <code>hh24:mi-hh24:mi</code>.</p> </li> <li> <p>Must be in Universal Coordinated Time (UTC).</p> </li> <li> <p>Must not conflict with the preferred maintenance window.</p> </li> <li> <p>Must be at least 30 minutes.</p> </li> </ul>
   */
  PreferredBackupWindow?: string;

  /**
   * <p>The port number on which the database accepts connections.</p> <p> <b>MySQL</b> </p> <p> Default: <code>3306</code> </p> <p> Valid Values: <code>1150-65535</code> </p> <p>Type: Integer</p> <p> <b>MariaDB</b> </p> <p> Default: <code>3306</code> </p> <p> Valid Values: <code>1150-65535</code> </p> <p>Type: Integer</p> <p> <b>PostgreSQL</b> </p> <p> Default: <code>5432</code> </p> <p> Valid Values: <code>1150-65535</code> </p> <p>Type: Integer</p> <p> <b>Oracle</b> </p> <p> Default: <code>1521</code> </p> <p> Valid Values: <code>1150-65535</code> </p> <p> <b>SQL Server</b> </p> <p> Default: <code>1433</code> </p> <p> Valid Values: <code>1150-65535</code> except for <code>1434</code>, <code>3389</code>, <code>47001</code>, <code>49152</code>, and <code>49152</code> through <code>49156</code>. </p> <p> <b>Amazon Aurora</b> </p> <p> Default: <code>3306</code> </p> <p> Valid Values: <code>1150-65535</code> </p> <p>Type: Integer</p>
   */
  Port?: number;

  /**
   * <p>A value that indicates whether the DB instance is a Multi-AZ deployment. You can't set the <code>AvailabilityZone</code> parameter if the DB instance is a Multi-AZ deployment.</p>
   */
  MultiAZ?: boolean;

  /**
   * <p>The version number of the database engine to use.</p> <p>For a list of valid engine versions, use the <code>DescribeDBEngineVersions</code> action.</p> <p>The following are the database engines and links to information about the major and minor versions that are available with Amazon RDS. Not every database engine is available for every AWS Region.</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The version number of the database engine to be used by the DB instance is managed by the DB cluster.</p> <p> <b>MariaDB</b> </p> <p>See <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MariaDB.html#MariaDB.Concepts.VersionMgmt">MariaDB on Amazon RDS Versions</a> in the <i>Amazon RDS User Guide.</i> </p> <p> <b>Microsoft SQL Server</b> </p> <p>See <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.FeatureSupport">Version and Feature Support on Amazon RDS</a> in the <i>Amazon RDS User Guide.</i> </p> <p> <b>MySQL</b> </p> <p>See <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_MySQL.html#MySQL.Concepts.VersionMgmt">MySQL on Amazon RDS Versions</a> in the <i>Amazon RDS User Guide.</i> </p> <p> <b>Oracle</b> </p> <p>See <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Appendix.Oracle.PatchComposition.html">Oracle Database Engine Release Notes</a> in the <i>Amazon RDS User Guide.</i> </p> <p> <b>PostgreSQL</b> </p> <p>See <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_PostgreSQL.html#PostgreSQL.Concepts.General.DBVersions">Supported PostgreSQL Database Versions</a> in the <i>Amazon RDS User Guide.</i> </p>
   */
  EngineVersion?: string;

  /**
   * <p>A value that indicates whether minor engine upgrades are applied automatically to the DB instance during the maintenance window. By default, minor engine upgrades are applied automatically.</p>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * <p>License model information for this DB instance.</p> <p> Valid values: <code>license-included</code> | <code>bring-your-own-license</code> | <code>general-public-license</code> </p>
   */
  LicenseModel?: string;

  /**
   * <p>The amount of Provisioned IOPS (input/output operations per second) to be initially allocated for the DB instance. For information about valid Iops values, see see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_Storage.html#USER_PIOPS">Amazon RDS Provisioned IOPS Storage to Improve Performance</a> in the <i>Amazon RDS User Guide</i>. </p> <p>Constraints: Must be a multiple between 1 and 50 of the storage amount for the DB instance. </p>
   */
  Iops?: number;

  /**
   * <p>Indicates that the DB instance should be associated with the specified option group.</p> <p>Permanent options, such as the TDE option for Oracle Advanced Security TDE, can't be removed from an option group, and that option group can't be removed from a DB instance once it is associated with a DB instance</p>
   */
  OptionGroupName?: string;

  /**
   * <p>For supported engines, indicates that the DB instance should be associated with the specified CharacterSet.</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The character set is managed by the DB cluster. For more information, see <code>CreateDBCluster</code>.</p>
   */
  CharacterSetName?: string;

  /**
   * <p>A value that indicates whether the DB instance is publicly accessible. When the DB instance is publicly accessible, it is an Internet-facing instance with a publicly resolvable DNS name, which resolves to a public IP address. When the DB instance is not publicly accessible, it is an internal instance with a DNS name that resolves to a private IP address.</p> <p>Default: The default behavior varies depending on whether <code>DBSubnetGroupName</code> is specified.</p> <p>If <code>DBSubnetGroupName</code> is not specified, and <code>PubliclyAccessible</code> is not specified, the following applies:</p> <ul> <li> <p>If the default VPC in the target region doesn’t have an Internet gateway attached to it, the DB instance is private.</p> </li> <li> <p>If the default VPC in the target region has an Internet gateway attached to it, the DB instance is public.</p> </li> </ul> <p>If <code>DBSubnetGroupName</code> is specified, and <code>PubliclyAccessible</code> is not specified, the following applies:</p> <ul> <li> <p>If the subnets are part of a VPC that doesn’t have an Internet gateway attached to it, the DB instance is private.</p> </li> <li> <p>If the subnets are part of a VPC that has an Internet gateway attached to it, the DB instance is public.</p> </li> </ul>
   */
  PubliclyAccessible?: boolean;

  /**
   * <p>Tags to assign to the DB instance.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The identifier of the DB cluster that the instance will belong to.</p>
   */
  DBClusterIdentifier?: string;

  /**
   * <p>Specifies the storage type to be associated with the DB instance.</p> <p> Valid values: <code>standard | gp2 | io1</code> </p> <p> If you specify <code>io1</code>, you must also include a value for the <code>Iops</code> parameter. </p> <p> Default: <code>io1</code> if the <code>Iops</code> parameter is specified, otherwise <code>gp2</code> </p>
   */
  StorageType?: string;

  /**
   * <p>The ARN from the key store with which to associate the instance for TDE encryption.</p>
   */
  TdeCredentialArn?: string;

  /**
   * <p>The password for the given ARN from the key store in order to access the device.</p>
   */
  TdeCredentialPassword?: string;

  /**
   * <p>A value that indicates whether the DB instance is encrypted. By default, it is not encrypted.</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The encryption for DB instances is managed by the DB cluster.</p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p>The AWS KMS key identifier for an encrypted DB instance.</p> <p>The KMS key identifier is the Amazon Resource Name (ARN) for the KMS encryption key. If you are creating a DB instance with the same AWS account that owns the KMS encryption key used to encrypt the new DB instance, then you can use the KMS key alias instead of the ARN for the KM encryption key.</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. The KMS key identifier is managed by the DB cluster. For more information, see <code>CreateDBCluster</code>.</p> <p>If <code>StorageEncrypted</code> is enabled, and you do not specify a value for the <code>KmsKeyId</code> parameter, then Amazon RDS will use your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>For an Amazon RDS DB instance that's running Microsoft SQL Server, this parameter specifies the Active Directory directory ID to create the instance in. Amazon RDS uses Windows Authentication to authenticate users that connect to the DB instance. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/DeveloperGuide/USER_SQLServerWinAuth.html">Using Windows Authentication with an Amazon RDS DB Instance Running Microsoft SQL Server</a> in the <i>Amazon RDS User Guide</i>. </p>
   */
  Domain?: string;

  /**
   * <p>A value that indicates whether to copy tags from the DB instance to snapshots of the DB instance. By default, tags are not copied.</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. Copying tags to snapshots is managed by the DB cluster. Setting this value for an Aurora DB instance has no effect on the DB cluster setting.</p>
   */
  CopyTagsToSnapshot?: boolean;

  /**
   * <p>The interval, in seconds, between points when Enhanced Monitoring metrics are collected for the DB instance. To disable collecting Enhanced Monitoring metrics, specify 0. The default is 0.</p> <p>If <code>MonitoringRoleArn</code> is specified, then you must also set <code>MonitoringInterval</code> to a value other than 0.</p> <p>Valid Values: <code>0, 1, 5, 10, 15, 30, 60</code> </p>
   */
  MonitoringInterval?: number;

  /**
   * <p>The ARN for the IAM role that permits RDS to send enhanced monitoring metrics to Amazon CloudWatch Logs. For example, <code>arn:aws:iam:123456789012:role/emaccess</code>. For information on creating a monitoring role, go to <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Monitoring.OS.html#USER_Monitoring.OS.Enabling">Setting Up and Enabling Enhanced Monitoring</a> in the <i>Amazon RDS User Guide</i>.</p> <p>If <code>MonitoringInterval</code> is set to a value other than 0, then you must supply a <code>MonitoringRoleArn</code> value.</p>
   */
  MonitoringRoleArn?: string;

  /**
   * <p>Specify the name of the IAM role to be used when making API calls to the Directory Service.</p>
   */
  DomainIAMRoleName?: string;

  /**
   * <p>A value that specifies the order in which an Aurora Replica is promoted to the primary instance after a failure of the existing primary instance. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/Aurora.Managing.Backups.html#Aurora.Managing.FaultTolerance"> Fault Tolerance for an Aurora DB Cluster</a> in the <i>Amazon Aurora User Guide</i>. </p> <p>Default: 1</p> <p>Valid Values: 0 - 15</p>
   */
  PromotionTier?: number;

  /**
   * <p>The time zone of the DB instance. The time zone parameter is currently supported only by <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/CHAP_SQLServer.html#SQLServer.Concepts.General.TimeZone">Microsoft SQL Server</a>. </p>
   */
  Timezone?: string;

  /**
   * <p>A value that indicates whether to enable mapping of AWS Identity and Access Management (IAM) accounts to database accounts. By default, mapping is disabled.</p> <p>You can enable IAM database authentication for the following database engines:</p> <p> <b>Amazon Aurora</b> </p> <p>Not applicable. Mapping AWS IAM accounts to database accounts is managed by the DB cluster.</p> <p> <b>MySQL</b> </p> <ul> <li> <p>For MySQL 5.6, minor version 5.6.34 or higher</p> </li> <li> <p>For MySQL 5.7, minor version 5.7.16 or higher</p> </li> </ul>
   */
  EnableIAMDatabaseAuthentication?: boolean;

  /**
   * <p>A value that indicates whether to enable Performance Insights for the DB instance. </p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PerfInsights.html">Using Amazon Performance Insights</a> in the <i>Amazon Relational Database Service User Guide</i>. </p>
   */
  EnablePerformanceInsights?: boolean;

  /**
   * <p>The AWS KMS key identifier for encryption of Performance Insights data. The KMS key ID is the Amazon Resource Name (ARN), KMS key identifier, or the KMS key alias for the KMS encryption key.</p> <p>If you do not specify a value for <code>PerformanceInsightsKMSKeyId</code>, then Amazon RDS uses your default encryption key. AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.</p>
   */
  PerformanceInsightsKMSKeyId?: string;

  /**
   * <p>The amount of time, in days, to retain Performance Insights data. Valid values are 7 or 731 (2 years). </p>
   */
  PerformanceInsightsRetentionPeriod?: number;

  /**
   * <p>The list of log types that need to be enabled for exporting to CloudWatch Logs. The values in the list depend on the DB engine being used. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.html#USER_LogAccess.Procedural.UploadtoCloudWatch">Publishing Database Logs to Amazon CloudWatch Logs </a> in the <i>Amazon Relational Database Service User Guide</i>.</p>
   */
  EnableCloudwatchLogsExports?: Array<string> | Iterable<string>;

  /**
   * <p>The number of CPU cores and the number of threads per core for the DB instance class of the DB instance.</p>
   */
  ProcessorFeatures?: Array<_ProcessorFeature> | Iterable<_ProcessorFeature>;

  /**
   * <p>A value that indicates whether the DB instance has deletion protection enabled. The database can't be deleted when deletion protection is enabled. By default, deletion protection is disabled. For more information, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_DeleteInstance.html"> Deleting a DB Instance</a>. </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p>The upper limit to which Amazon RDS can automatically scale the storage of the DB instance.</p>
   */
  MaxAllocatedStorage?: number;

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
