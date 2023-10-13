// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DatabaseMigrationServiceServiceException as __BaseException } from "./DatabaseMigrationServiceServiceException";
import {
  ComputeConfig,
  Connection,
  DataProvider,
  DataProviderDescriptorDefinition,
  DataProviderSettings,
  DmsSslModeValue,
  DmsTransferSettings,
  DocDbSettings,
  DocDbSettingsFilterSensitiveLog,
  DynamoDbSettings,
  ElasticsearchSettings,
  Endpoint,
  EndpointFilterSensitiveLog,
  EventSubscription,
  GcpMySQLSettings,
  GcpMySQLSettingsFilterSensitiveLog,
  IBMDb2Settings,
  IBMDb2SettingsFilterSensitiveLog,
  InstanceProfile,
  KafkaSettings,
  KafkaSettingsFilterSensitiveLog,
  KinesisSettings,
  MicrosoftSQLServerSettings,
  MicrosoftSQLServerSettingsFilterSensitiveLog,
  MigrationProject,
  MigrationTypeValue,
  MongoDbSettings,
  MongoDbSettingsFilterSensitiveLog,
  MySQLSettings,
  MySQLSettingsFilterSensitiveLog,
  NeptuneSettings,
  OracleSettings,
  OracleSettingsFilterSensitiveLog,
  PostgreSQLSettings,
  PostgreSQLSettingsFilterSensitiveLog,
  RecommendationSettings,
  RedisSettings,
  RedisSettingsFilterSensitiveLog,
  RedshiftSettings,
  RedshiftSettingsFilterSensitiveLog,
  RefreshSchemasStatus,
  Replication,
  ReplicationConfig,
  ReplicationEndpointTypeValue,
  ReplicationInstance,
  ReplicationSubnetGroup,
  ReplicationTask,
  ReplicationTaskAssessmentRun,
  S3Settings,
  SCApplicationAttributes,
  SybaseSettings,
  SybaseSettingsFilterSensitiveLog,
  TimestreamSettings,
} from "./models_0";

/**
 * @public
 */
export interface ModifyDataProviderMessage {
  /**
   * @public
   * <p>The identifier of the data provider. Identifiers must begin with a letter
   *          and must contain only ASCII letters, digits, and hyphens. They can't end with
   *          a hyphen, or contain two consecutive hyphens.</p>
   */
  DataProviderIdentifier: string | undefined;

  /**
   * @public
   * <p>The name of the data provider.</p>
   */
  DataProviderName?: string;

  /**
   * @public
   * <p>A user-friendly description of the data provider.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The type of database engine for the data provider. Valid values include <code>"aurora"</code>,
   *          <code>"aurora_postgresql"</code>, <code>"mysql"</code>, <code>"oracle"</code>, <code>"postgres"</code>,
   *          and <code>"sqlserver"</code>. A value of <code>"aurora"</code> represents Amazon Aurora MySQL-Compatible Edition.</p>
   */
  Engine?: string;

  /**
   * @public
   * <p>If this attribute is Y, the current call to <code>ModifyDataProvider</code> replaces all
   *          existing data provider settings with the exact settings that you specify in this call. If this
   *          attribute is N, the current call to <code>ModifyDataProvider</code> does two things: </p>
   *          <ul>
   *             <li>
   *                <p>It replaces any data provider settings that already exist with new values,
   *             for settings with the same names.</p>
   *             </li>
   *             <li>
   *                <p>It creates new data provider settings that you specify in the call,
   *             for settings with different names. </p>
   *             </li>
   *          </ul>
   */
  ExactSettings?: boolean;

  /**
   * @public
   * <p>The settings in JSON format for a data provider.</p>
   */
  Settings?: DataProviderSettings;
}

/**
 * @public
 */
export interface ModifyDataProviderResponse {
  /**
   * @public
   * <p>The data provider that was modified.</p>
   */
  DataProvider?: DataProvider;
}

/**
 * @public
 * <p></p>
 */
export interface ModifyEndpointMessage {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * @public
   * <p>The database endpoint identifier. Identifiers must begin with a letter and must contain
   *          only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two
   *          consecutive hyphens.</p>
   */
  EndpointIdentifier?: string;

  /**
   * @public
   * <p>The type of endpoint.  Valid values are <code>source</code> and <code>target</code>.</p>
   */
  EndpointType?: ReplicationEndpointTypeValue;

  /**
   * @public
   * <p>The database engine name. Valid values, depending on the EndpointType, include
   *          <code>"mysql"</code>, <code>"oracle"</code>, <code>"postgres"</code>,
   *          <code>"mariadb"</code>, <code>"aurora"</code>, <code>"aurora-postgresql"</code>,
   *          <code>"redshift"</code>, <code>"s3"</code>, <code>"db2"</code>, <code>"db2-zos"</code>,
   *          <code>"azuredb"</code>, <code>"sybase"</code>, <code>"dynamodb"</code>,
   *          <code>"mongodb"</code>, <code>"kinesis"</code>, <code>"kafka"</code>,
   *          <code>"elasticsearch"</code>, <code>"documentdb"</code>, <code>"sqlserver"</code>,
   *          <code>"neptune"</code>, and <code>"babelfish"</code>.</p>
   */
  EngineName?: string;

  /**
   * @public
   * <p>The user name to be used to login to the endpoint database.</p>
   */
  Username?: string;

  /**
   * @public
   * <p>The password to be used to login to the endpoint database.</p>
   */
  Password?: string;

  /**
   * @public
   * <p>The name of the server where the endpoint database resides.</p>
   */
  ServerName?: string;

  /**
   * @public
   * <p>The port used by the endpoint database.</p>
   */
  Port?: number;

  /**
   * @public
   * <p>The name of the endpoint database. For a MySQL source or target endpoint, do not specify DatabaseName.</p>
   */
  DatabaseName?: string;

  /**
   * @public
   * <p>Additional attributes associated with the connection. To reset this parameter, pass the
   *          empty string ("") as an argument.</p>
   */
  ExtraConnectionAttributes?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the certificate used for SSL connection.</p>
   */
  CertificateArn?: string;

  /**
   * @public
   * <p>The SSL mode used to connect to the endpoint.  The default value is <code>none</code>.</p>
   */
  SslMode?: DmsSslModeValue;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) for the IAM role you want to use to modify
   *          the endpoint. The role must allow the <code>iam:PassRole</code> action.</p>
   */
  ServiceAccessRoleArn?: string;

  /**
   * @public
   * <p>The external table definition.</p>
   */
  ExternalTableDefinition?: string;

  /**
   * @public
   * <p>Settings in JSON format for the target Amazon DynamoDB endpoint. For information about other
   *             available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.DynamoDB.html#CHAP_Target.DynamoDB.ObjectMapping">Using Object Mapping to Migrate
   *             Data to DynamoDB</a> in the <i>Database Migration Service User
   *             Guide.</i>
   *          </p>
   */
  DynamoDbSettings?: DynamoDbSettings;

  /**
   * @public
   * <p>Settings in JSON format for the target Amazon S3 endpoint. For more information about
   *             the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring">Extra
   *             Connection Attributes When Using Amazon S3 as a Target for DMS</a> in the
   *             <i>Database Migration Service User Guide.</i>
   *          </p>
   */
  S3Settings?: S3Settings;

  /**
   * @public
   * <p>The settings in JSON format for the DMS transfer type of source endpoint. </p>
   *          <p>Attributes include the following:</p>
   *          <ul>
   *             <li>
   *                <p>serviceAccessRoleArn - The Amazon Resource Name (ARN) used by the service access IAM role. The role must allow the <code>iam:PassRole</code> action.</p>
   *             </li>
   *             <li>
   *                <p>BucketName - The name of the S3 bucket to use.</p>
   *             </li>
   *          </ul>
   *          <p>Shorthand syntax for these settings is as follows: <code>ServiceAccessRoleArn=string
   *             ,BucketName=string</code>
   *          </p>
   *          <p>JSON syntax for these settings is as follows: <code>\{ "ServiceAccessRoleArn": "string",
   *             "BucketName": "string"\} </code>
   *          </p>
   */
  DmsTransferSettings?: DmsTransferSettings;

  /**
   * @public
   * <p>Settings in JSON format for the source MongoDB endpoint. For more information about the
   *          available settings, see the configuration properties section in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MongoDB.html#CHAP_Source.MongoDB.Configuration">Endpoint configuration settings
   *             when using MongoDB as a source for Database Migration Service</a> in the
   *          <i>Database Migration Service User Guide.</i>
   *          </p>
   */
  MongoDbSettings?: MongoDbSettings;

  /**
   * @public
   * <p>Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams. For
   *          more information about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kinesis.html#CHAP_Target.Kinesis.ObjectMapping">Using object mapping to
   *             migrate data to a Kinesis data stream</a> in the <i>Database Migration Service User Guide.</i>
   *          </p>
   */
  KinesisSettings?: KinesisSettings;

  /**
   * @public
   * <p>Settings in JSON format for the target Apache Kafka endpoint. For more information about
   *          the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kafka.html#CHAP_Target.Kafka.ObjectMapping">Using object mapping
   *             to migrate data to a Kafka topic</a> in the <i>Database Migration Service User Guide.</i>
   *          </p>
   */
  KafkaSettings?: KafkaSettings;

  /**
   * @public
   * <p>Settings in JSON format for the target OpenSearch endpoint. For more information
   *          about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Elasticsearch.html#CHAP_Target.Elasticsearch.Configuration">Extra Connection Attributes When Using OpenSearch as a Target for DMS</a> in
   *          the <i>Database Migration Service User Guide.</i>
   *          </p>
   */
  ElasticsearchSettings?: ElasticsearchSettings;

  /**
   * @public
   * <p>Settings in JSON format for the target Amazon Neptune endpoint. For more information
   *          about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Neptune.html#CHAP_Target.Neptune.EndpointSettings">Specifying graph-mapping rules using Gremlin and R2RML for Amazon Neptune as a target</a>
   *          in the <i>Database Migration Service User Guide.</i>
   *          </p>
   */
  NeptuneSettings?: NeptuneSettings;

  /**
   * @public
   * <p>Provides information that defines an Amazon Redshift endpoint.</p>
   */
  RedshiftSettings?: RedshiftSettings;

  /**
   * @public
   * <p>Settings in JSON format for the source and target PostgreSQL endpoint. For information
   *          about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.PostgreSQL.html#CHAP_Source.PostgreSQL.ConnectionAttrib">Extra connection
   *             attributes when using PostgreSQL as a source for DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.PostgreSQL.html#CHAP_Target.PostgreSQL.ConnectionAttrib">
   *             Extra connection attributes when using PostgreSQL as a target for DMS</a> in the
   *             <i>Database Migration Service User Guide.</i>
   *          </p>
   */
  PostgreSQLSettings?: PostgreSQLSettings;

  /**
   * @public
   * <p>Settings in JSON format for the source and target MySQL endpoint. For information about
   *          other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MySQL.html#CHAP_Source.MySQL.ConnectionAttrib">Extra connection
   *             attributes when using MySQL as a source for DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.MySQL.html#CHAP_Target.MySQL.ConnectionAttrib">Extra
   *             connection attributes when using a MySQL-compatible database as a target for DMS</a> in the <i>Database Migration Service User
   *          Guide.</i>
   *          </p>
   */
  MySQLSettings?: MySQLSettings;

  /**
   * @public
   * <p>Settings in JSON format for the source and target Oracle endpoint. For information about
   *          other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.ConnectionAttrib">Extra connection
   *             attributes when using Oracle as a source for DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Oracle.html#CHAP_Target.Oracle.ConnectionAttrib">
   *             Extra connection attributes when using Oracle as a target for DMS</a> in the
   *             <i>Database Migration Service User Guide.</i>
   *          </p>
   */
  OracleSettings?: OracleSettings;

  /**
   * @public
   * <p>Settings in JSON format for the source and target SAP ASE endpoint. For information
   *          about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SAP.html#CHAP_Source.SAP.ConnectionAttrib">Extra connection attributes
   *             when using SAP ASE as a source for DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.SAP.html#CHAP_Target.SAP.ConnectionAttrib">Extra connection attributes
   *             when using SAP ASE as a target for DMS</a> in the <i>Database Migration Service
   *                 User Guide.</i>
   *          </p>
   */
  SybaseSettings?: SybaseSettings;

  /**
   * @public
   * <p>Settings in JSON format for the source and target Microsoft SQL Server endpoint. For
   *          information about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SQLServer.html#CHAP_Source.SQLServer.ConnectionAttrib">Extra connection
   *             attributes when using SQL Server as a source for DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.SQLServer.html#CHAP_Target.SQLServer.ConnectionAttrib">
   *             Extra connection attributes when using SQL Server as a target for DMS</a> in the
   *             <i>Database Migration Service User Guide.</i>
   *          </p>
   */
  MicrosoftSQLServerSettings?: MicrosoftSQLServerSettings;

  /**
   * @public
   * <p>Settings in JSON format for the source IBM Db2 LUW endpoint. For information about other
   *          available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.DB2.html#CHAP_Source.DB2.ConnectionAttrib">Extra connection attributes
   *             when using Db2 LUW as a source for DMS</a> in the <i>Database Migration Service
   *                 User Guide.</i>
   *          </p>
   */
  IBMDb2Settings?: IBMDb2Settings;

  /**
   * @public
   * <p>Settings in JSON format for the source DocumentDB endpoint. For more information about the
   *          available settings, see the configuration properties section in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.DocumentDB.html"> Using DocumentDB as a Target for Database Migration Service
   *              </a> in the <i>Database Migration Service User
   *                Guide.</i>
   *          </p>
   */
  DocDbSettings?: DocDbSettings;

  /**
   * @public
   * <p>Settings in JSON format for the Redis target endpoint.</p>
   */
  RedisSettings?: RedisSettings;

  /**
   * @public
   * <p>If this attribute is Y, the current call to <code>ModifyEndpoint</code> replaces all
   *          existing endpoint settings with the exact settings that you specify in this call. If this
   *          attribute is N, the current call to <code>ModifyEndpoint</code> does two things: </p>
   *          <ul>
   *             <li>
   *                <p>It replaces any endpoint settings that already exist with new values, for settings with the
   *                same names.</p>
   *             </li>
   *             <li>
   *                <p>It creates new endpoint settings that you specify in the call, for settings with different
   *                names. </p>
   *             </li>
   *          </ul>
   *          <p>For example, if you call <code>create-endpoint ... --endpoint-settings '\{"a":1\}'
   *             ...</code>, the endpoint has the following endpoint settings: <code>'\{"a":1\}'</code>. If
   *          you then call <code>modify-endpoint ... --endpoint-settings '\{"b":2\}' ...</code> for the
   *          same endpoint, the endpoint has the following settings: <code>'\{"a":1,"b":2\}'</code>. </p>
   *          <p>However, suppose that you follow this with a call to <code>modify-endpoint ...
   *             --endpoint-settings '\{"b":2\}' --exact-settings ...</code> for that same endpoint again.
   *          Then the endpoint has the following settings: <code>'\{"b":2\}'</code>. All existing settings
   *          are replaced with the exact settings that you specify. </p>
   */
  ExactSettings?: boolean;

  /**
   * @public
   * <p>Settings in JSON format for the source GCP MySQL endpoint.</p>
   */
  GcpMySQLSettings?: GcpMySQLSettings;

  /**
   * @public
   * <p>Settings in JSON format for the target Amazon Timestream endpoint.</p>
   */
  TimestreamSettings?: TimestreamSettings;
}

/**
 * @public
 * <p></p>
 */
export interface ModifyEndpointResponse {
  /**
   * @public
   * <p>The modified endpoint.</p>
   */
  Endpoint?: Endpoint;
}

/**
 * @public
 * <p></p>
 */
export interface ModifyEventSubscriptionMessage {
  /**
   * @public
   * <p>The name of the DMS event notification subscription to be modified.</p>
   */
  SubscriptionName: string | undefined;

  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification.
   *          The ARN is created by Amazon SNS when you create a topic and subscribe to it.</p>
   */
  SnsTopicArn?: string;

  /**
   * @public
   * <p> The type of DMS resource that generates the events you want to subscribe to. </p>
   *          <p>Valid values: replication-instance | replication-task</p>
   */
  SourceType?: string;

  /**
   * @public
   * <p> A list of event categories for a source type that you want to subscribe to. Use the
   *             <code>DescribeEventCategories</code> action to see a list of event categories. </p>
   */
  EventCategories?: string[];

  /**
   * @public
   * <p> A Boolean value; set to <b>true</b> to activate the
   *          subscription. </p>
   */
  Enabled?: boolean;
}

/**
 * @public
 * <p></p>
 */
export interface ModifyEventSubscriptionResponse {
  /**
   * @public
   * <p>The modified event subscription.</p>
   */
  EventSubscription?: EventSubscription;
}

/**
 * @public
 */
export interface ModifyInstanceProfileMessage {
  /**
   * @public
   * <p>The identifier of the instance profile. Identifiers must begin with a letter and must contain
   *          only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive
   *          hyphens.</p>
   */
  InstanceProfileIdentifier: string | undefined;

  /**
   * @public
   * <p>The Availability Zone where the instance profile runs.</p>
   */
  AvailabilityZone?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the KMS key that is used to encrypt
   *          the connection parameters for the instance profile.</p>
   *          <p>If you don't specify a value for the <code>KmsKeyArn</code> parameter, then
   *          DMS uses your default encryption key.</p>
   *          <p>KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a
   *          different default encryption key for each Amazon Web Services Region.</p>
   */
  KmsKeyArn?: string;

  /**
   * @public
   * <p>Specifies the accessibility options for the instance profile. A value of
   *          <code>true</code> represents an instance profile with a public IP address. A value of
   *          <code>false</code> represents an instance profile with a private IP address. The default value
   *          is <code>true</code>.</p>
   */
  PubliclyAccessible?: boolean;

  /**
   * @public
   * <p>Specifies the network type for the instance profile. A value of <code>IPV4</code>
   *          represents an instance profile with IPv4 network type and only supports IPv4 addressing.
   *          A value of <code>IPV6</code> represents an instance profile with IPv6 network type
   *          and only supports IPv6 addressing. A value of <code>DUAL</code> represents an instance
   *          profile with dual network type that supports IPv4 and IPv6 addressing.</p>
   */
  NetworkType?: string;

  /**
   * @public
   * <p>A user-friendly name for the instance profile.</p>
   */
  InstanceProfileName?: string;

  /**
   * @public
   * <p>A user-friendly description for the instance profile.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>A subnet group to associate with the instance profile.</p>
   */
  SubnetGroupIdentifier?: string;

  /**
   * @public
   * <p>Specifies the VPC security groups to be used with the instance profile.
   *          The VPC security group must work with the VPC containing the instance profile.</p>
   */
  VpcSecurityGroups?: string[];
}

/**
 * @public
 */
export interface ModifyInstanceProfileResponse {
  /**
   * @public
   * <p>The instance profile that was modified.</p>
   */
  InstanceProfile?: InstanceProfile;
}

/**
 * @public
 */
export interface ModifyMigrationProjectMessage {
  /**
   * @public
   * <p>The identifier of the migration project. Identifiers must begin with a letter
   *          and must contain only ASCII letters, digits, and hyphens. They can't end with
   *          a hyphen, or contain two consecutive hyphens.</p>
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * @public
   * <p>A user-friendly name for the migration project.</p>
   */
  MigrationProjectName?: string;

  /**
   * @public
   * <p>Information about the source data provider, including the name, ARN, and Amazon Web Services Secrets Manager parameters.</p>
   */
  SourceDataProviderDescriptors?: DataProviderDescriptorDefinition[];

  /**
   * @public
   * <p>Information about the target data provider, including the name, ARN, and Amazon Web Services Secrets Manager parameters.</p>
   */
  TargetDataProviderDescriptors?: DataProviderDescriptorDefinition[];

  /**
   * @public
   * <p>The name or Amazon Resource Name (ARN) for the instance profile.</p>
   */
  InstanceProfileIdentifier?: string;

  /**
   * @public
   * <p>The settings in JSON format for migration rules. Migration rules make it possible for you to change
   *          the object names according to the rules that you specify. For example, you can change an object name
   *          to lowercase or uppercase, add or remove a prefix or suffix, or rename objects.</p>
   */
  TransformationRules?: string;

  /**
   * @public
   * <p>A user-friendly description of the migration project.</p>
   */
  Description?: string;

  /**
   * @public
   * <p>The schema conversion application attributes, including the Amazon S3 bucket name and Amazon S3 role ARN.</p>
   */
  SchemaConversionApplicationAttributes?: SCApplicationAttributes;
}

/**
 * @public
 */
export interface ModifyMigrationProjectResponse {
  /**
   * @public
   * <p>The migration project that was modified.</p>
   */
  MigrationProject?: MigrationProject;
}

/**
 * @public
 * <p></p>
 */
export interface ModifyReplicationConfigMessage {
  /**
   * @public
   * <p>The Amazon Resource Name of the replication to modify.</p>
   */
  ReplicationConfigArn: string | undefined;

  /**
   * @public
   * <p>The new replication config to apply to the replication.</p>
   */
  ReplicationConfigIdentifier?: string;

  /**
   * @public
   * <p>The type of replication.</p>
   */
  ReplicationType?: MigrationTypeValue;

  /**
   * @public
   * <p>Table mappings specified in the replication.</p>
   */
  TableMappings?: string;

  /**
   * @public
   * <p>The settings for the replication.</p>
   */
  ReplicationSettings?: string;

  /**
   * @public
   * <p>Additional settings for the replication.</p>
   */
  SupplementalSettings?: string;

  /**
   * @public
   * <p>Configuration parameters for provisioning an DMS Serverless replication.</p>
   */
  ComputeConfig?: ComputeConfig;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the source endpoint for
   *          this DMS serverless replication configuration.</p>
   */
  SourceEndpointArn?: string;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the target endpoint for
   *          this DMS serverless replication configuration.</p>
   */
  TargetEndpointArn?: string;
}

/**
 * @public
 */
export interface ModifyReplicationConfigResponse {
  /**
   * @public
   * <p>Information about the serverless replication config that was modified.</p>
   */
  ReplicationConfig?: ReplicationConfig;
}

/**
 * @public
 * <p></p>
 */
export interface ModifyReplicationInstanceMessage {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn: string | undefined;

  /**
   * @public
   * <p>The amount of storage (in gigabytes) to be allocated for the replication
   *          instance.</p>
   */
  AllocatedStorage?: number;

  /**
   * @public
   * <p>Indicates whether the changes should be applied immediately or during the next
   *          maintenance window.</p>
   */
  ApplyImmediately?: boolean;

  /**
   * @public
   * <p>The compute and memory capacity of the replication instance as defined for the specified
   *          replication instance class. For example to specify the instance class dms.c4.large, set this parameter to <code>"dms.c4.large"</code>.</p>
   *          <p>For more information on the settings and capacities for the available replication instance classes, see
   *          <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html#CHAP_ReplicationInstance.InDepth">
   *             Selecting the right DMS replication instance for your migration</a>.
   *       </p>
   */
  ReplicationInstanceClass?: string;

  /**
   * @public
   * <p> Specifies the VPC security group to be used with the replication instance. The VPC
   *          security group must work with the VPC containing the replication instance. </p>
   */
  VpcSecurityGroupIds?: string[];

  /**
   * @public
   * <p>The weekly time range (in UTC) during which system maintenance can occur, which might
   *          result in an outage. Changing this parameter does not result in an outage, except in the
   *          following situation, and the change is asynchronously applied as soon as possible. If
   *          moving this window to the current time, there must be at least 30 minutes between the
   *          current time and end of the window to ensure pending changes are applied.</p>
   *          <p>Default: Uses existing setting</p>
   *          <p>Format: ddd:hh24:mi-ddd:hh24:mi</p>
   *          <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p>
   *          <p>Constraints: Must be at least 30 minutes</p>
   */
  PreferredMaintenanceWindow?: string;

  /**
   * @public
   * <p> Specifies whether the replication instance is a Multi-AZ deployment. You can't set the
   *             <code>AvailabilityZone</code> parameter if the Multi-AZ parameter is set to
   *             <code>true</code>. </p>
   */
  MultiAZ?: boolean;

  /**
   * @public
   * <p>The engine version number of the replication instance.</p>
   *          <p>When modifying a major engine version of an instance, also set
   *          <code>AllowMajorVersionUpgrade</code> to <code>true</code>.</p>
   */
  EngineVersion?: string;

  /**
   * @public
   * <p>Indicates that major version upgrades are allowed. Changing this parameter does not
   *          result in an outage, and the change is asynchronously applied as soon as possible.</p>
   *          <p>This parameter must be set to <code>true</code> when specifying a value for the
   *             <code>EngineVersion</code> parameter that is a different major version than the
   *          replication instance's current version.</p>
   */
  AllowMajorVersionUpgrade?: boolean;

  /**
   * @public
   * <p>A value that indicates that minor version upgrades are applied automatically to the
   *          replication instance during the maintenance window. Changing this parameter doesn't result
   *          in an outage, except in the case described following. The change is asynchronously applied
   *          as soon as possible. </p>
   *          <p>An outage does result if these factors apply: </p>
   *          <ul>
   *             <li>
   *                <p>This parameter is set to <code>true</code> during the maintenance window.</p>
   *             </li>
   *             <li>
   *                <p>A newer minor version is available. </p>
   *             </li>
   *             <li>
   *                <p>DMS has enabled automatic patching for the given engine version. </p>
   *             </li>
   *          </ul>
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * @public
   * <p>The replication instance identifier. This parameter is stored as a lowercase
   *          string.</p>
   */
  ReplicationInstanceIdentifier?: string;

  /**
   * @public
   * <p>The type of IP address protocol used by a replication instance,
   *          such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing.
   *          IPv6 only is not yet supported.</p>
   */
  NetworkType?: string;
}

/**
 * @public
 * <p></p>
 */
export interface ModifyReplicationInstanceResponse {
  /**
   * @public
   * <p>The modified replication instance.</p>
   */
  ReplicationInstance?: ReplicationInstance;
}

/**
 * @public
 * <p>An upgrade dependency is preventing the database migration.</p>
 */
export class UpgradeDependencyFailureFault extends __BaseException {
  readonly name: "UpgradeDependencyFailureFault" = "UpgradeDependencyFailureFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UpgradeDependencyFailureFault, __BaseException>) {
    super({
      name: "UpgradeDependencyFailureFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UpgradeDependencyFailureFault.prototype);
  }
}

/**
 * @public
 * <p></p>
 */
export interface ModifyReplicationSubnetGroupMessage {
  /**
   * @public
   * <p>The name of the replication instance subnet group.</p>
   */
  ReplicationSubnetGroupIdentifier: string | undefined;

  /**
   * @public
   * <p>A description for the replication instance subnet group.</p>
   */
  ReplicationSubnetGroupDescription?: string;

  /**
   * @public
   * <p>A list of subnet IDs.</p>
   */
  SubnetIds: string[] | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface ModifyReplicationSubnetGroupResponse {
  /**
   * @public
   * <p>The modified replication subnet group.</p>
   */
  ReplicationSubnetGroup?: ReplicationSubnetGroup;
}

/**
 * @public
 * <p>The specified subnet is already in use.</p>
 */
export class SubnetAlreadyInUse extends __BaseException {
  readonly name: "SubnetAlreadyInUse" = "SubnetAlreadyInUse";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<SubnetAlreadyInUse, __BaseException>) {
    super({
      name: "SubnetAlreadyInUse",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, SubnetAlreadyInUse.prototype);
  }
}

/**
 * @public
 * <p></p>
 */
export interface ModifyReplicationTaskMessage {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replication task.</p>
   */
  ReplicationTaskArn: string | undefined;

  /**
   * @public
   * <p>The replication task identifier.</p>
   *          <p>Constraints:</p>
   *          <ul>
   *             <li>
   *                <p>Must contain 1-255 alphanumeric characters or hyphens.</p>
   *             </li>
   *             <li>
   *                <p>First character must be a letter.</p>
   *             </li>
   *             <li>
   *                <p>Cannot end with a hyphen or contain two consecutive hyphens.</p>
   *             </li>
   *          </ul>
   */
  ReplicationTaskIdentifier?: string;

  /**
   * @public
   * <p>The migration type. Valid values: <code>full-load</code> | <code>cdc</code> | <code>full-load-and-cdc</code>
   *          </p>
   */
  MigrationType?: MigrationTypeValue;

  /**
   * @public
   * <p>When using the CLI or boto3, provide the path of the JSON file that contains the
   *          table mappings. Precede the path with <code>file://</code>.  For example,
   *          <code>--table-mappings file://mappingfile.json</code>. When working with the DMS  API,
   *          provide the JSON as the parameter value.
   *     </p>
   */
  TableMappings?: string;

  /**
   * @public
   * <p>JSON file that contains settings for the task, such as task metadata settings.</p>
   */
  ReplicationTaskSettings?: string;

  /**
   * @public
   * <p>Indicates the start time for a change data capture (CDC) operation. Use either
   *          CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start.
   *          Specifying both values results in an error.</p>
   *          <p>Timestamp Example: --cdc-start-time “2018-03-08T12:12:12”</p>
   */
  CdcStartTime?: Date;

  /**
   * @public
   * <p>Indicates when you want a change data capture (CDC) operation to start. Use either
   *          CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start.
   *          Specifying both values results in an error.</p>
   *          <p> The value can be in date, checkpoint, or LSN/SCN format.</p>
   *          <p>Date Example: --cdc-start-position “2018-03-08T12:12:12”</p>
   *          <p>Checkpoint Example: --cdc-start-position
   *          "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93"</p>
   *          <p>LSN Example: --cdc-start-position “mysql-bin-changelog.000024:373”</p>
   *          <note>
   *             <p>When you use this task setting with a source PostgreSQL database, a logical
   *             replication slot should already be created and associated with the source endpoint. You
   *             can verify this by setting the <code>slotName</code> extra connection attribute to the
   *             name of this logical replication slot. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.PostgreSQL.html#CHAP_Source.PostgreSQL.ConnectionAttrib">Extra Connection Attributes When Using PostgreSQL as a Source
   *                for DMS</a>.</p>
   *          </note>
   */
  CdcStartPosition?: string;

  /**
   * @public
   * <p>Indicates when you want a change data capture (CDC) operation to stop. The value can be
   *          either server time or commit time.</p>
   *          <p>Server time example: --cdc-stop-position “server_time:2018-02-09T12:12:12”</p>
   *          <p>Commit time example: --cdc-stop-position “commit_time:2018-02-09T12:12:12“</p>
   */
  CdcStopPosition?: string;

  /**
   * @public
   * <p>Supplemental information that the task requires to migrate the data for certain source and target endpoints.
   *             For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.TaskData.html">Specifying Supplemental Data for Task Settings</a> in the
   *          <i>Database Migration Service User Guide.</i>
   *          </p>
   */
  TaskData?: string;
}

/**
 * @public
 * <p></p>
 */
export interface ModifyReplicationTaskResponse {
  /**
   * @public
   * <p>The replication task that was modified.</p>
   */
  ReplicationTask?: ReplicationTask;
}

/**
 * @public
 * <p></p>
 */
export interface MoveReplicationTaskMessage {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the task that you want to move.</p>
   */
  ReplicationTaskArn: string | undefined;

  /**
   * @public
   * <p>The ARN of the replication instance where you want to move the task to.</p>
   */
  TargetReplicationInstanceArn: string | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface MoveReplicationTaskResponse {
  /**
   * @public
   * <p>The replication task that was moved.</p>
   */
  ReplicationTask?: ReplicationTask;
}

/**
 * @public
 */
export interface RebootReplicationInstanceMessage {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn: string | undefined;

  /**
   * @public
   * <p>If this parameter is <code>true</code>, the reboot is conducted through a Multi-AZ
   *          failover. If the instance isn't configured for Multi-AZ, then you can't specify
   *          <code>true</code>.  ( <code>--force-planned-failover</code> and <code>--force-failover</code> can't both be set to <code>true</code>.)</p>
   */
  ForceFailover?: boolean;

  /**
   * @public
   * <p>If this parameter is <code>true</code>, the reboot is conducted through a planned Multi-AZ failover
   *          where resources are released and cleaned up prior to conducting the failover.
   *          If the instance isn''t configured for Multi-AZ, then you can't specify <code>true</code>.
   *          ( <code>--force-planned-failover</code> and <code>--force-failover</code> can't both be set to <code>true</code>.)</p>
   */
  ForcePlannedFailover?: boolean;
}

/**
 * @public
 */
export interface RebootReplicationInstanceResponse {
  /**
   * @public
   * <p>The replication instance that is being rebooted. </p>
   */
  ReplicationInstance?: ReplicationInstance;
}

/**
 * @public
 * <p></p>
 */
export interface RefreshSchemasMessage {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn: string | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface RefreshSchemasResponse {
  /**
   * @public
   * <p>The status of the refreshed schema.</p>
   */
  RefreshSchemasStatus?: RefreshSchemasStatus;
}

/**
 * @public
 * @enum
 */
export const ReloadOptionValue = {
  DATA_RELOAD: "data-reload",
  VALIDATE_ONLY: "validate-only",
} as const;

/**
 * @public
 */
export type ReloadOptionValue = (typeof ReloadOptionValue)[keyof typeof ReloadOptionValue];

/**
 * @public
 * <p>Provides the name of the schema and table to be reloaded.</p>
 */
export interface TableToReload {
  /**
   * @public
   * <p>The schema name of the table to be reloaded.</p>
   */
  SchemaName: string | undefined;

  /**
   * @public
   * <p>The table name of the table to be reloaded.</p>
   */
  TableName: string | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface ReloadReplicationTablesMessage {
  /**
   * @public
   * <p>The Amazon Resource Name of the replication config for which to reload tables.</p>
   */
  ReplicationConfigArn: string | undefined;

  /**
   * @public
   * <p>The list of tables to reload.</p>
   */
  TablesToReload: TableToReload[] | undefined;

  /**
   * @public
   * <p>Options for reload. Specify <code>data-reload</code> to reload the data and re-validate
   *          it if validation is enabled. Specify <code>validate-only</code> to re-validate the table.
   *          This option applies only when validation is enabled for the replication. </p>
   */
  ReloadOption?: ReloadOptionValue;
}

/**
 * @public
 * <p></p>
 */
export interface ReloadReplicationTablesResponse {
  /**
   * @public
   * <p>The Amazon Resource Name of the replication config for which to reload tables.</p>
   */
  ReplicationConfigArn?: string;
}

/**
 * @public
 */
export interface ReloadTablesMessage {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replication task. </p>
   */
  ReplicationTaskArn: string | undefined;

  /**
   * @public
   * <p>The name and schema of the table to be reloaded. </p>
   */
  TablesToReload: TableToReload[] | undefined;

  /**
   * @public
   * <p>Options for reload. Specify <code>data-reload</code> to reload the data and re-validate
   *          it if validation is enabled. Specify <code>validate-only</code> to re-validate the table.
   *          This option applies only when validation is enabled for the task. </p>
   *          <p>Valid values: data-reload, validate-only</p>
   *          <p>Default value is data-reload.</p>
   */
  ReloadOption?: ReloadOptionValue;
}

/**
 * @public
 */
export interface ReloadTablesResponse {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replication task. </p>
   */
  ReplicationTaskArn?: string;
}

/**
 * @public
 * <p>Removes one or more tags from an DMS resource.</p>
 */
export interface RemoveTagsFromResourceMessage {
  /**
   * @public
   * <p>An DMS resource from which you want to remove tag(s). The value for this parameter is an Amazon Resource Name (ARN).</p>
   */
  ResourceArn: string | undefined;

  /**
   * @public
   * <p>The tag key (name) of the tag to be removed.</p>
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface RemoveTagsFromResourceResponse {}

/**
 * @public
 */
export interface RunFleetAdvisorLsaAnalysisResponse {
  /**
   * @public
   * <p>The ID of the LSA analysis run.</p>
   */
  LsaAnalysisId?: string;

  /**
   * @public
   * <p>The status of the LSA analysis, for example <code>COMPLETED</code>.</p>
   */
  Status?: string;
}

/**
 * @public
 */
export interface StartExtensionPackAssociationMessage {
  /**
   * @public
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   */
  MigrationProjectIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StartExtensionPackAssociationResponse {
  /**
   * @public
   * <p>The identifier for the request operation.</p>
   */
  RequestIdentifier?: string;
}

/**
 * @public
 */
export interface StartMetadataModelAssessmentMessage {
  /**
   * @public
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * @public
   * <p>A value that specifies the database objects to assess.</p>
   */
  SelectionRules: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelAssessmentResponse {
  /**
   * @public
   * <p>The identifier for the assessment operation.</p>
   */
  RequestIdentifier?: string;
}

/**
 * @public
 */
export interface StartMetadataModelConversionMessage {
  /**
   * @public
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * @public
   * <p>A value that specifies the database objects to convert.</p>
   */
  SelectionRules: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelConversionResponse {
  /**
   * @public
   * <p>The identifier for the conversion operation.</p>
   */
  RequestIdentifier?: string;
}

/**
 * @public
 * @enum
 */
export const OriginTypeValue = {
  SOURCE: "SOURCE",
  TARGET: "TARGET",
} as const;

/**
 * @public
 */
export type OriginTypeValue = (typeof OriginTypeValue)[keyof typeof OriginTypeValue];

/**
 * @public
 */
export interface StartMetadataModelExportAsScriptMessage {
  /**
   * @public
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * @public
   * <p>A value that specifies the database objects to export.</p>
   */
  SelectionRules: string | undefined;

  /**
   * @public
   * <p>Whether to export the metadata model from the source or the target.</p>
   */
  Origin: OriginTypeValue | undefined;

  /**
   * @public
   * <p>The name of the model file to create in the Amazon S3 bucket.</p>
   */
  FileName?: string;
}

/**
 * @public
 */
export interface StartMetadataModelExportAsScriptResponse {
  /**
   * @public
   * <p>The identifier for the export operation.</p>
   */
  RequestIdentifier?: string;
}

/**
 * @public
 */
export interface StartMetadataModelExportToTargetMessage {
  /**
   * @public
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * @public
   * <p>A value that specifies the database objects to export.</p>
   */
  SelectionRules: string | undefined;

  /**
   * @public
   * <p>Whether to overwrite the migration project extension pack. An extension pack is an add-on module
   *          that emulates functions present in a source database that are required when converting objects
   *          to the target database.</p>
   */
  OverwriteExtensionPack?: boolean;
}

/**
 * @public
 */
export interface StartMetadataModelExportToTargetResponse {
  /**
   * @public
   * <p>The identifier for the export operation.</p>
   */
  RequestIdentifier?: string;
}

/**
 * @public
 */
export interface StartMetadataModelImportMessage {
  /**
   * @public
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * @public
   * <p>A value that specifies the database objects to import.</p>
   */
  SelectionRules: string | undefined;

  /**
   * @public
   * <p>Whether to load metadata to the source or target database.</p>
   */
  Origin: OriginTypeValue | undefined;

  /**
   * @public
   * <p>If <code>true</code>, DMS loads metadata for the specified objects from the source database.</p>
   */
  Refresh?: boolean;
}

/**
 * @public
 */
export interface StartMetadataModelImportResponse {
  /**
   * @public
   * <p>The identifier for the import operation.</p>
   */
  RequestIdentifier?: string;
}

/**
 * @public
 */
export interface StartRecommendationsRequest {
  /**
   * @public
   * <p>The identifier of the source database to analyze and provide recommendations
   *             for.</p>
   */
  DatabaseId: string | undefined;

  /**
   * @public
   * <p>The settings in JSON format that Fleet Advisor uses to determine target engine
   *             recommendations. These parameters include target instance sizing and availability and
   *             durability settings. For target instance sizing, Fleet Advisor supports the following
   *             two options: total capacity and resource utilization. For availability and durability,
   *             Fleet Advisor supports the following two options: production (Multi-AZ deployments) and
   *             Dev/Test (Single-AZ deployments).</p>
   */
  Settings: RecommendationSettings | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface StartReplicationMessage {
  /**
   * @public
   * <p>The Amazon Resource Name of the replication for which to start replication.</p>
   */
  ReplicationConfigArn: string | undefined;

  /**
   * @public
   * <p>The replication type.</p>
   */
  StartReplicationType: string | undefined;

  /**
   * @public
   * <p>Indicates the start time for a change data capture (CDC) operation. Use either <code>CdcStartTime</code>
   *          or <code>CdcStartPosition</code> to specify when you want a CDC operation to start. Specifying both values results in an error.</p>
   */
  CdcStartTime?: Date;

  /**
   * @public
   * <p>Indicates when you want a change data capture (CDC) operation to start. Use either
   *          <code>CdcStartPosition</code> or <code>CdcStartTime</code> to specify when you want a
   *          CDC operation to start. Specifying both values results in an error.</p>
   *          <p>The value can be in date, checkpoint, or LSN/SCN format.</p>
   */
  CdcStartPosition?: string;

  /**
   * @public
   * <p>Indicates when you want a change data capture (CDC) operation to stop. The value can be
   *          either server time or commit time.</p>
   */
  CdcStopPosition?: string;
}

/**
 * @public
 * <p></p>
 */
export interface StartReplicationResponse {
  /**
   * @public
   * <p>The replication that DMS started.</p>
   */
  Replication?: Replication;
}

/**
 * @public
 * @enum
 */
export const StartReplicationTaskTypeValue = {
  RELOAD_TARGET: "reload-target",
  RESUME_PROCESSING: "resume-processing",
  START_REPLICATION: "start-replication",
} as const;

/**
 * @public
 */
export type StartReplicationTaskTypeValue =
  (typeof StartReplicationTaskTypeValue)[keyof typeof StartReplicationTaskTypeValue];

/**
 * @public
 * <p></p>
 */
export interface StartReplicationTaskMessage {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replication task to be started.</p>
   */
  ReplicationTaskArn: string | undefined;

  /**
   * @public
   * <p>The type of replication task to start.</p>
   *          <p>When the migration type is <code>full-load</code> or <code>full-load-and-cdc</code>, the only valid value
   *            for the first run of the task is <code>start-replication</code>. This option will start the migration.</p>
   *          <p>You can also use <a>ReloadTables</a> to reload specific tables that failed during migration instead
   *          of restarting the task.</p>
   *          <p>The <code>resume-processing</code> option isn't applicable for a full-load task,
   *          because you can't resume partially loaded tables during the full load phase.</p>
   *          <p>For a <code>full-load-and-cdc</code> task, DMS migrates table data, and then applies data changes
   *          that occur on the source. To load all the tables again, and start capturing source changes,
   *          use <code>reload-target</code>. Otherwise use <code>resume-processing</code>, to replicate the
   *          changes from the last stop position.</p>
   */
  StartReplicationTaskType: StartReplicationTaskTypeValue | undefined;

  /**
   * @public
   * <p>Indicates the start time for a change data capture (CDC) operation. Use either
   *          CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start.
   *          Specifying both values results in an error.</p>
   *          <p>Timestamp Example: --cdc-start-time “2018-03-08T12:12:12”</p>
   */
  CdcStartTime?: Date;

  /**
   * @public
   * <p>Indicates when you want a change data capture (CDC) operation to start. Use either
   *          CdcStartPosition or CdcStartTime to specify when you want a CDC operation to start.
   *          Specifying both values results in an error.</p>
   *          <p> The value can be in date, checkpoint, or LSN/SCN format.</p>
   *          <p>Date Example: --cdc-start-position “2018-03-08T12:12:12”</p>
   *          <p>Checkpoint Example: --cdc-start-position
   *          "checkpoint:V1#27#mysql-bin-changelog.157832:1975:-1:2002:677883278264080:mysql-bin-changelog.157832:1876#0#0#*#0#93"</p>
   *          <p>LSN Example: --cdc-start-position “mysql-bin-changelog.000024:373”</p>
   *          <note>
   *             <p>When you use this task setting with a source PostgreSQL database, a logical
   *             replication slot should already be created and associated with the source endpoint. You
   *             can verify this by setting the <code>slotName</code> extra connection attribute to the
   *             name of this logical replication slot. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.PostgreSQL.html#CHAP_Source.PostgreSQL.ConnectionAttrib">Extra Connection Attributes When Using PostgreSQL as a Source
   *                for DMS</a>.</p>
   *          </note>
   */
  CdcStartPosition?: string;

  /**
   * @public
   * <p>Indicates when you want a change data capture (CDC) operation to stop. The value can be
   *          either server time or commit time.</p>
   *          <p>Server time example: --cdc-stop-position “server_time:2018-02-09T12:12:12”</p>
   *          <p>Commit time example: --cdc-stop-position “commit_time:2018-02-09T12:12:12“</p>
   */
  CdcStopPosition?: string;
}

/**
 * @public
 * <p></p>
 */
export interface StartReplicationTaskResponse {
  /**
   * @public
   * <p>The replication task started.</p>
   */
  ReplicationTask?: ReplicationTask;
}

/**
 * @public
 * <p></p>
 */
export interface StartReplicationTaskAssessmentMessage {
  /**
   * @public
   * <p> The Amazon Resource Name (ARN) of the replication task. </p>
   */
  ReplicationTaskArn: string | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface StartReplicationTaskAssessmentResponse {
  /**
   * @public
   * <p> The assessed replication task. </p>
   */
  ReplicationTask?: ReplicationTask;
}

/**
 * @public
 * <p>An Key Management Service (KMS) error is preventing access to KMS.</p>
 */
export class KMSFault extends __BaseException {
  readonly name: "KMSFault" = "KMSFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<KMSFault, __BaseException>) {
    super({
      name: "KMSFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, KMSFault.prototype);
  }
}

/**
 * @public
 * <p></p>
 */
export interface StartReplicationTaskAssessmentRunMessage {
  /**
   * @public
   * <p>Amazon Resource Name (ARN) of the migration task associated with the premigration
   *          assessment run that you want to start.</p>
   */
  ReplicationTaskArn: string | undefined;

  /**
   * @public
   * <p>ARN of the service role needed to start the assessment run. The role must allow the <code>iam:PassRole</code> action.</p>
   */
  ServiceAccessRoleArn: string | undefined;

  /**
   * @public
   * <p>Amazon S3 bucket where you want DMS to store the results of this assessment
   *          run.</p>
   */
  ResultLocationBucket: string | undefined;

  /**
   * @public
   * <p>Folder within an Amazon S3 bucket where you want DMS to store the results of this assessment
   *          run.</p>
   */
  ResultLocationFolder?: string;

  /**
   * @public
   * <p>Encryption mode that you can specify to encrypt the results of this assessment run. If
   *          you don't specify this request parameter, DMS stores the assessment run results
   *          without encryption. You can specify one of the options following:</p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <code>"SSE_S3"</code> – The server-side encryption provided as a default by
   *                Amazon S3.</p>
   *             </li>
   *             <li>
   *                <p>
   *                   <code>"SSE_KMS"</code> – Key Management Service (KMS) encryption.
   *                This encryption can use either a custom KMS encryption key that you specify or the
   *                default KMS encryption key that DMS provides.</p>
   *             </li>
   *          </ul>
   */
  ResultEncryptionMode?: string;

  /**
   * @public
   * <p>ARN of a custom KMS encryption key that you specify when you set
   *             <code>ResultEncryptionMode</code> to <code>"SSE_KMS</code>".</p>
   */
  ResultKmsKeyArn?: string;

  /**
   * @public
   * <p>Unique name to identify the assessment run.</p>
   */
  AssessmentRunName: string | undefined;

  /**
   * @public
   * <p>Space-separated list of names for specific individual assessments that you want to
   *          include. These names come from the default list of individual assessments that DMS
   *          supports for the associated migration task. This task is specified by
   *             <code>ReplicationTaskArn</code>.</p>
   *          <note>
   *             <p>You can't set a value for <code>IncludeOnly</code> if you also set a value for
   *             <code>Exclude</code> in the API operation. </p>
   *             <p>To identify the names of the default individual assessments that DMS
   *             supports for the associated migration task, run the
   *             <code>DescribeApplicableIndividualAssessments</code> operation using its own
   *             <code>ReplicationTaskArn</code> request parameter.</p>
   *          </note>
   */
  IncludeOnly?: string[];

  /**
   * @public
   * <p>Space-separated list of names for specific individual assessments that you want to
   *          exclude. These names come from the default list of individual assessments that DMS
   *          supports for the associated migration task. This task is specified by
   *             <code>ReplicationTaskArn</code>.</p>
   *          <note>
   *             <p>You can't set a value for <code>Exclude</code> if you also set a value for
   *             <code>IncludeOnly</code> in the API operation.</p>
   *             <p>To identify the names of the default individual assessments that DMS
   *             supports for the associated migration task, run the
   *             <code>DescribeApplicableIndividualAssessments</code> operation using its own
   *             <code>ReplicationTaskArn</code> request parameter.</p>
   *          </note>
   */
  Exclude?: string[];
}

/**
 * @public
 * <p></p>
 */
export interface StartReplicationTaskAssessmentRunResponse {
  /**
   * @public
   * <p>The premigration assessment run that was started.</p>
   */
  ReplicationTaskAssessmentRun?: ReplicationTaskAssessmentRun;
}

/**
 * @public
 * <p></p>
 */
export interface StopReplicationMessage {
  /**
   * @public
   * <p>The Amazon Resource Name of the replication to stop.</p>
   */
  ReplicationConfigArn: string | undefined;
}

/**
 * @public
 */
export interface StopReplicationResponse {
  /**
   * @public
   * <p>The replication that DMS stopped.</p>
   */
  Replication?: Replication;
}

/**
 * @public
 * <p></p>
 */
export interface StopReplicationTaskMessage {
  /**
   * @public
   * <p>The Amazon Resource Name(ARN) of the replication task to be stopped.</p>
   */
  ReplicationTaskArn: string | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface StopReplicationTaskResponse {
  /**
   * @public
   * <p>The replication task stopped.</p>
   */
  ReplicationTask?: ReplicationTask;
}

/**
 * @public
 * <p></p>
 */
export interface TestConnectionMessage {
  /**
   * @public
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   */
  ReplicationInstanceArn: string | undefined;

  /**
   * @public
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn: string | undefined;
}

/**
 * @public
 * <p></p>
 */
export interface TestConnectionResponse {
  /**
   * @public
   * <p>The connection tested.</p>
   */
  Connection?: Connection;
}

/**
 * @public
 * <p></p>
 */
export interface UpdateSubscriptionsToEventBridgeMessage {
  /**
   * @public
   * <p>When set to true, this operation migrates DMS subscriptions for Amazon SNS
   *          notifications no matter what your replication instance version is. If not set or set to
   *          false, this operation runs only when all your replication instances are from DMS
   *          version 3.4.5 or higher.
   *       </p>
   */
  ForceMove?: boolean;
}

/**
 * @public
 * <p></p>
 */
export interface UpdateSubscriptionsToEventBridgeResponse {
  /**
   * @public
   * <p>A string that indicates how many event subscriptions were migrated and how many remain to be migrated.</p>
   */
  Result?: string;
}

/**
 * @internal
 */
export const ModifyEndpointMessageFilterSensitiveLog = (obj: ModifyEndpointMessage): any => ({
  ...obj,
  ...(obj.Password && { Password: SENSITIVE_STRING }),
  ...(obj.MongoDbSettings && { MongoDbSettings: MongoDbSettingsFilterSensitiveLog(obj.MongoDbSettings) }),
  ...(obj.KafkaSettings && { KafkaSettings: KafkaSettingsFilterSensitiveLog(obj.KafkaSettings) }),
  ...(obj.RedshiftSettings && { RedshiftSettings: RedshiftSettingsFilterSensitiveLog(obj.RedshiftSettings) }),
  ...(obj.PostgreSQLSettings && { PostgreSQLSettings: PostgreSQLSettingsFilterSensitiveLog(obj.PostgreSQLSettings) }),
  ...(obj.MySQLSettings && { MySQLSettings: MySQLSettingsFilterSensitiveLog(obj.MySQLSettings) }),
  ...(obj.OracleSettings && { OracleSettings: OracleSettingsFilterSensitiveLog(obj.OracleSettings) }),
  ...(obj.SybaseSettings && { SybaseSettings: SybaseSettingsFilterSensitiveLog(obj.SybaseSettings) }),
  ...(obj.MicrosoftSQLServerSettings && {
    MicrosoftSQLServerSettings: MicrosoftSQLServerSettingsFilterSensitiveLog(obj.MicrosoftSQLServerSettings),
  }),
  ...(obj.IBMDb2Settings && { IBMDb2Settings: IBMDb2SettingsFilterSensitiveLog(obj.IBMDb2Settings) }),
  ...(obj.DocDbSettings && { DocDbSettings: DocDbSettingsFilterSensitiveLog(obj.DocDbSettings) }),
  ...(obj.RedisSettings && { RedisSettings: RedisSettingsFilterSensitiveLog(obj.RedisSettings) }),
  ...(obj.GcpMySQLSettings && { GcpMySQLSettings: GcpMySQLSettingsFilterSensitiveLog(obj.GcpMySQLSettings) }),
});

/**
 * @internal
 */
export const ModifyEndpointResponseFilterSensitiveLog = (obj: ModifyEndpointResponse): any => ({
  ...obj,
  ...(obj.Endpoint && { Endpoint: EndpointFilterSensitiveLog(obj.Endpoint) }),
});
