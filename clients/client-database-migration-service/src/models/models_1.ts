// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { DatabaseMigrationServiceServiceException as __BaseException } from "./DatabaseMigrationServiceServiceException";

import {
  Certificate,
  ComputeConfig,
  Connection,
  DataMigration,
  DataMigrationFilterSensitiveLog,
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
  Filter,
  GcpMySQLSettings,
  GcpMySQLSettingsFilterSensitiveLog,
  IBMDb2Settings,
  IBMDb2SettingsFilterSensitiveLog,
  InstanceProfile,
  KafkaSettings,
  KafkaSettingsFilterSensitiveLog,
  KerberosAuthenticationSettings,
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
  SourceDataSetting,
  SybaseSettings,
  SybaseSettingsFilterSensitiveLog,
  TableStatistics,
  Tag,
  TimestreamSettings,
} from "./models_0";

/**
 * <p></p>
 * @public
 */
export interface DescribeSchemasMessage {
  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   * @public
   */
  EndpointArn: string | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 100.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeSchemasResponse {
  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>The described schema.</p>
   * @public
   */
  Schemas?: string[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeTableStatisticsMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication task.</p>
   * @public
   */
  ReplicationTaskArn: string | undefined;

  /**
   * <p> The maximum number of records to include in the response. If more records exist than
   *          the specified <code>MaxRecords</code> value, a pagination token called a marker is included
   *          in the response so that the remaining results can be retrieved. </p>
   *          <p>Default: 100</p>
   *          <p>Constraints: Minimum 20, maximum 500.</p>
   * @public
   */
  MaxRecords?: number | undefined;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;

  /**
   * <p>Filters applied to table statistics.</p>
   *          <p>Valid filter names: schema-name | table-name | table-state</p>
   *          <p>A combination of filters creates an AND condition where each record matches all
   *          specified filters.</p>
   * @public
   */
  Filters?: Filter[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface DescribeTableStatisticsResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication task.</p>
   * @public
   */
  ReplicationTaskArn?: string | undefined;

  /**
   * <p>The table statistics.</p>
   * @public
   */
  TableStatistics?: TableStatistics[] | undefined;

  /**
   * <p> An optional pagination token provided by a previous request. If this parameter is
   *          specified, the response includes only records beyond the marker, up to the value specified
   *          by <code>MaxRecords</code>. </p>
   * @public
   */
  Marker?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AssessmentReportType = {
  CSV: "csv",
  PDF: "pdf",
} as const;

/**
 * @public
 */
export type AssessmentReportType = (typeof AssessmentReportType)[keyof typeof AssessmentReportType];

/**
 * @public
 */
export interface ExportMetadataModelAssessmentMessage {
  /**
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * <p>A value that specifies the database objects to assess.</p>
   * @public
   */
  SelectionRules: string | undefined;

  /**
   * <p>The name of the assessment file to create in your Amazon S3 bucket.</p>
   * @public
   */
  FileName?: string | undefined;

  /**
   * <p>The file format of the assessment file.</p>
   * @public
   */
  AssessmentReportTypes?: AssessmentReportType[] | undefined;
}

/**
 * <p>Provides information about an exported metadata model assessment.</p>
 * @public
 */
export interface ExportMetadataModelAssessmentResultEntry {
  /**
   * <p>The object key for the object containing the exported metadata model assessment.</p>
   * @public
   */
  S3ObjectKey?: string | undefined;

  /**
   * <p>The URL for the object containing the exported metadata model assessment.</p>
   * @public
   */
  ObjectURL?: string | undefined;
}

/**
 * @public
 */
export interface ExportMetadataModelAssessmentResponse {
  /**
   * <p>The Amazon S3 details for an assessment exported in PDF format.</p>
   * @public
   */
  PdfReport?: ExportMetadataModelAssessmentResultEntry | undefined;

  /**
   * <p>The Amazon S3 details for an assessment exported in CSV format.</p>
   * @public
   */
  CsvReport?: ExportMetadataModelAssessmentResultEntry | undefined;
}

/**
 * @public
 */
export interface ImportCertificateMessage {
  /**
   * <p>A customer-assigned name for the certificate. Identifiers must begin with a letter and
   *          must contain only ASCII letters, digits, and hyphens. They can't end with a hyphen or
   *          contain two consecutive hyphens.</p>
   * @public
   */
  CertificateIdentifier: string | undefined;

  /**
   * <p>The contents of a <code>.pem</code> file, which contains an X.509 certificate.</p>
   * @public
   */
  CertificatePem?: string | undefined;

  /**
   * <p>The location of an imported Oracle Wallet certificate for use with SSL. Provide the name of a <code>.sso</code> file
   *           using the <code>fileb://</code> prefix. You can't provide the certificate inline.</p>
   *          <p>Example: <code>filebase64("$\{path.root\}/rds-ca-2019-root.sso")</code>
   *          </p>
   * @public
   */
  CertificateWallet?: Uint8Array | undefined;

  /**
   * <p>The tags associated with the certificate.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ImportCertificateResponse {
  /**
   * <p>The certificate to be uploaded.</p>
   * @public
   */
  Certificate?: Certificate | undefined;
}

/**
 * <p>The certificate was not valid.</p>
 * @public
 */
export class InvalidCertificateFault extends __BaseException {
  readonly name: "InvalidCertificateFault" = "InvalidCertificateFault";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidCertificateFault, __BaseException>) {
    super({
      name: "InvalidCertificateFault",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidCertificateFault.prototype);
  }
}

/**
 * <p></p>
 * @public
 */
export interface ListTagsForResourceMessage {
  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the DMS resource to
   *          list tags for. This returns a list of keys (names of tags) created for the resource and
   *          their associated tag values.</p>
   * @public
   */
  ResourceArn?: string | undefined;

  /**
   * <p>List of ARNs that identify multiple DMS resources that you want to list tags for. This
   *          returns a list of keys (tag names) and their associated tag values. It also returns each
   *          tag's associated <code>ResourceArn</code> value, which is the ARN of the resource for which
   *          each listed tag is created. </p>
   * @public
   */
  ResourceArnList?: string[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>A list of tags for the resource.</p>
   * @public
   */
  TagList?: Tag[] | undefined;
}

/**
 * @public
 */
export interface ModifyConversionConfigurationMessage {
  /**
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * <p>The new conversion configuration.</p>
   * @public
   */
  ConversionConfiguration: string | undefined;
}

/**
 * @public
 */
export interface ModifyConversionConfigurationResponse {
  /**
   * <p>The name or Amazon Resource Name (ARN) of  the modified configuration.</p>
   * @public
   */
  MigrationProjectIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface ModifyDataMigrationMessage {
  /**
   * <p>The identifier (name or ARN) of the data migration to modify.</p>
   * @public
   */
  DataMigrationIdentifier: string | undefined;

  /**
   * <p>The new name for the data migration.</p>
   * @public
   */
  DataMigrationName?: string | undefined;

  /**
   * <p>Whether to enable Cloudwatch logs for the data migration.</p>
   * @public
   */
  EnableCloudwatchLogs?: boolean | undefined;

  /**
   * <p>The new service access role ARN for the data migration.</p>
   * @public
   */
  ServiceAccessRoleArn?: string | undefined;

  /**
   * <p>The new migration type for the data migration.</p>
   * @public
   */
  DataMigrationType?: MigrationTypeValue | undefined;

  /**
   * <p>The new information about the source data provider for the data migration.</p>
   * @public
   */
  SourceDataSettings?: SourceDataSetting[] | undefined;

  /**
   * <p>The number of parallel jobs that trigger parallel threads to unload the tables from the source, and then load them to the target.</p>
   * @public
   */
  NumberOfJobs?: number | undefined;

  /**
   * <p>A JSON-formatted string that defines what objects to include and exclude from the migration.</p>
   * @public
   */
  SelectionRules?: string | undefined;
}

/**
 * @public
 */
export interface ModifyDataMigrationResponse {
  /**
   * <p>Information about the modified data migration.</p>
   * @public
   */
  DataMigration?: DataMigration | undefined;
}

/**
 * @public
 */
export interface ModifyDataProviderMessage {
  /**
   * <p>The identifier of the data provider. Identifiers must begin with a letter
   *          and must contain only ASCII letters, digits, and hyphens. They can't end with
   *          a hyphen, or contain two consecutive hyphens.</p>
   * @public
   */
  DataProviderIdentifier: string | undefined;

  /**
   * <p>The name of the data provider.</p>
   * @public
   */
  DataProviderName?: string | undefined;

  /**
   * <p>A user-friendly description of the data provider.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The type of database engine for the data provider. Valid values include <code>"aurora"</code>,
   *          <code>"aurora-postgresql"</code>, <code>"mysql"</code>, <code>"oracle"</code>, <code>"postgres"</code>,
   *          <code>"sqlserver"</code>, <code>redshift</code>, <code>mariadb</code>, <code>mongodb</code>, and <code>docdb</code>. A value of <code>"aurora"</code> represents Amazon Aurora MySQL-Compatible Edition.</p>
   * @public
   */
  Engine?: string | undefined;

  /**
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
   * @public
   */
  ExactSettings?: boolean | undefined;

  /**
   * <p>The settings in JSON format for a data provider.</p>
   * @public
   */
  Settings?: DataProviderSettings | undefined;
}

/**
 * @public
 */
export interface ModifyDataProviderResponse {
  /**
   * <p>The data provider that was modified.</p>
   * @public
   */
  DataProvider?: DataProvider | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ModifyEndpointMessage {
  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   * @public
   */
  EndpointArn: string | undefined;

  /**
   * <p>The database endpoint identifier. Identifiers must begin with a letter and must contain
   *          only ASCII letters, digits, and hyphens. They can't end with a hyphen or contain two
   *          consecutive hyphens.</p>
   * @public
   */
  EndpointIdentifier?: string | undefined;

  /**
   * <p>The type of endpoint.  Valid values are <code>source</code> and <code>target</code>.</p>
   * @public
   */
  EndpointType?: ReplicationEndpointTypeValue | undefined;

  /**
   * <p>The database engine name. Valid values, depending on the EndpointType, include
   *          <code>"mysql"</code>, <code>"oracle"</code>, <code>"postgres"</code>,
   *          <code>"mariadb"</code>, <code>"aurora"</code>, <code>"aurora-postgresql"</code>,
   *          <code>"redshift"</code>, <code>"s3"</code>, <code>"db2"</code>, <code>"db2-zos"</code>,
   *          <code>"azuredb"</code>, <code>"sybase"</code>, <code>"dynamodb"</code>,
   *          <code>"mongodb"</code>, <code>"kinesis"</code>, <code>"kafka"</code>,
   *          <code>"elasticsearch"</code>, <code>"documentdb"</code>, <code>"sqlserver"</code>,
   *          <code>"neptune"</code>, and <code>"babelfish"</code>.</p>
   * @public
   */
  EngineName?: string | undefined;

  /**
   * <p>The user name to be used to login to the endpoint database.</p>
   * @public
   */
  Username?: string | undefined;

  /**
   * <p>The password to be used to login to the endpoint database.</p>
   * @public
   */
  Password?: string | undefined;

  /**
   * <p>The name of the server where the endpoint database resides.</p>
   * @public
   */
  ServerName?: string | undefined;

  /**
   * <p>The port used by the endpoint database.</p>
   * @public
   */
  Port?: number | undefined;

  /**
   * <p>The name of the endpoint database. For a MySQL source or target endpoint, do not specify DatabaseName.</p>
   * @public
   */
  DatabaseName?: string | undefined;

  /**
   * <p>Additional attributes associated with the connection. To reset this parameter, pass the
   *          empty string ("") as an argument.</p>
   * @public
   */
  ExtraConnectionAttributes?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate used for SSL connection.</p>
   * @public
   */
  CertificateArn?: string | undefined;

  /**
   * <p>The SSL mode used to connect to the endpoint.  The default value is <code>none</code>.</p>
   * @public
   */
  SslMode?: DmsSslModeValue | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) for the IAM role you want to use to modify
   *          the endpoint. The role must allow the <code>iam:PassRole</code> action.</p>
   * @public
   */
  ServiceAccessRoleArn?: string | undefined;

  /**
   * <p>The external table definition.</p>
   * @public
   */
  ExternalTableDefinition?: string | undefined;

  /**
   * <p>Settings in JSON format for the target Amazon DynamoDB endpoint. For information about other
   *             available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.DynamoDB.html#CHAP_Target.DynamoDB.ObjectMapping">Using Object Mapping to Migrate
   *             Data to DynamoDB</a> in the <i>Database Migration Service User
   *             Guide.</i>
   *          </p>
   * @public
   */
  DynamoDbSettings?: DynamoDbSettings | undefined;

  /**
   * <p>Settings in JSON format for the target Amazon S3 endpoint. For more information about
   *             the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring">Extra
   *             Connection Attributes When Using Amazon S3 as a Target for DMS</a> in the
   *             <i>Database Migration Service User Guide.</i>
   *          </p>
   * @public
   */
  S3Settings?: S3Settings | undefined;

  /**
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
   * @public
   */
  DmsTransferSettings?: DmsTransferSettings | undefined;

  /**
   * <p>Settings in JSON format for the source MongoDB endpoint. For more information about the
   *          available settings, see the configuration properties section in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MongoDB.html#CHAP_Source.MongoDB.Configuration">Endpoint configuration settings
   *             when using MongoDB as a source for Database Migration Service</a> in the
   *          <i>Database Migration Service User Guide.</i>
   *          </p>
   * @public
   */
  MongoDbSettings?: MongoDbSettings | undefined;

  /**
   * <p>Settings in JSON format for the target endpoint for Amazon Kinesis Data Streams. For
   *          more information about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kinesis.html#CHAP_Target.Kinesis.ObjectMapping">Using object mapping to
   *             migrate data to a Kinesis data stream</a> in the <i>Database Migration Service User Guide.</i>
   *          </p>
   * @public
   */
  KinesisSettings?: KinesisSettings | undefined;

  /**
   * <p>Settings in JSON format for the target Apache Kafka endpoint. For more information about
   *          the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kafka.html#CHAP_Target.Kafka.ObjectMapping">Using object mapping
   *             to migrate data to a Kafka topic</a> in the <i>Database Migration Service User Guide.</i>
   *          </p>
   * @public
   */
  KafkaSettings?: KafkaSettings | undefined;

  /**
   * <p>Settings in JSON format for the target OpenSearch endpoint. For more information
   *          about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Elasticsearch.html#CHAP_Target.Elasticsearch.Configuration">Extra Connection Attributes When Using OpenSearch as a Target for DMS</a> in
   *          the <i>Database Migration Service User Guide.</i>
   *          </p>
   * @public
   */
  ElasticsearchSettings?: ElasticsearchSettings | undefined;

  /**
   * <p>Settings in JSON format for the target Amazon Neptune endpoint. For more information
   *          about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Neptune.html#CHAP_Target.Neptune.EndpointSettings">Specifying graph-mapping rules using Gremlin and R2RML for Amazon Neptune as a target</a>
   *          in the <i>Database Migration Service User Guide.</i>
   *          </p>
   * @public
   */
  NeptuneSettings?: NeptuneSettings | undefined;

  /**
   * <p>Provides information that defines an Amazon Redshift endpoint.</p>
   * @public
   */
  RedshiftSettings?: RedshiftSettings | undefined;

  /**
   * <p>Settings in JSON format for the source and target PostgreSQL endpoint. For information
   *          about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.PostgreSQL.html#CHAP_Source.PostgreSQL.ConnectionAttrib">Extra connection
   *             attributes when using PostgreSQL as a source for DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.PostgreSQL.html#CHAP_Target.PostgreSQL.ConnectionAttrib">
   *             Extra connection attributes when using PostgreSQL as a target for DMS</a> in the
   *             <i>Database Migration Service User Guide.</i>
   *          </p>
   * @public
   */
  PostgreSQLSettings?: PostgreSQLSettings | undefined;

  /**
   * <p>Settings in JSON format for the source and target MySQL endpoint. For information about
   *          other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MySQL.html#CHAP_Source.MySQL.ConnectionAttrib">Extra connection
   *             attributes when using MySQL as a source for DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.MySQL.html#CHAP_Target.MySQL.ConnectionAttrib">Extra
   *             connection attributes when using a MySQL-compatible database as a target for DMS</a> in the <i>Database Migration Service User
   *          Guide.</i>
   *          </p>
   * @public
   */
  MySQLSettings?: MySQLSettings | undefined;

  /**
   * <p>Settings in JSON format for the source and target Oracle endpoint. For information about
   *          other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.Oracle.html#CHAP_Source.Oracle.ConnectionAttrib">Extra connection
   *             attributes when using Oracle as a source for DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Oracle.html#CHAP_Target.Oracle.ConnectionAttrib">
   *             Extra connection attributes when using Oracle as a target for DMS</a> in the
   *             <i>Database Migration Service User Guide.</i>
   *          </p>
   * @public
   */
  OracleSettings?: OracleSettings | undefined;

  /**
   * <p>Settings in JSON format for the source and target SAP ASE endpoint. For information
   *          about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SAP.html#CHAP_Source.SAP.ConnectionAttrib">Extra connection attributes
   *             when using SAP ASE as a source for DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.SAP.html#CHAP_Target.SAP.ConnectionAttrib">Extra connection attributes
   *             when using SAP ASE as a target for DMS</a> in the <i>Database Migration Service
   *                 User Guide.</i>
   *          </p>
   * @public
   */
  SybaseSettings?: SybaseSettings | undefined;

  /**
   * <p>Settings in JSON format for the source and target Microsoft SQL Server endpoint. For
   *          information about other available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.SQLServer.html#CHAP_Source.SQLServer.ConnectionAttrib">Extra connection
   *             attributes when using SQL Server as a source for DMS</a> and <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.SQLServer.html#CHAP_Target.SQLServer.ConnectionAttrib">
   *             Extra connection attributes when using SQL Server as a target for DMS</a> in the
   *             <i>Database Migration Service User Guide.</i>
   *          </p>
   * @public
   */
  MicrosoftSQLServerSettings?: MicrosoftSQLServerSettings | undefined;

  /**
   * <p>Settings in JSON format for the source IBM Db2 LUW endpoint. For information about other
   *          available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.DB2.html#CHAP_Source.DB2.ConnectionAttrib">Extra connection attributes
   *             when using Db2 LUW as a source for DMS</a> in the <i>Database Migration Service
   *                 User Guide.</i>
   *          </p>
   * @public
   */
  IBMDb2Settings?: IBMDb2Settings | undefined;

  /**
   * <p>Settings in JSON format for the source DocumentDB endpoint. For more information about the
   *          available settings, see the configuration properties section in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.DocumentDB.html"> Using DocumentDB as a Target for Database Migration Service
   *              </a> in the <i>Database Migration Service User
   *                Guide.</i>
   *          </p>
   * @public
   */
  DocDbSettings?: DocDbSettings | undefined;

  /**
   * <p>Settings in JSON format for the Redis target endpoint.</p>
   * @public
   */
  RedisSettings?: RedisSettings | undefined;

  /**
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
   * @public
   */
  ExactSettings?: boolean | undefined;

  /**
   * <p>Settings in JSON format for the source GCP MySQL endpoint.</p>
   * @public
   */
  GcpMySQLSettings?: GcpMySQLSettings | undefined;

  /**
   * <p>Settings in JSON format for the target Amazon Timestream endpoint.</p>
   * @public
   */
  TimestreamSettings?: TimestreamSettings | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ModifyEndpointResponse {
  /**
   * <p>The modified endpoint.</p>
   * @public
   */
  Endpoint?: Endpoint | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ModifyEventSubscriptionMessage {
  /**
   * <p>The name of the DMS event notification subscription to be modified.</p>
   * @public
   */
  SubscriptionName: string | undefined;

  /**
   * <p> The Amazon Resource Name (ARN) of the Amazon SNS topic created for event notification.
   *          The ARN is created by Amazon SNS when you create a topic and subscribe to it.</p>
   * @public
   */
  SnsTopicArn?: string | undefined;

  /**
   * <p> The type of DMS resource that generates the events you want to subscribe to. </p>
   *          <p>Valid values: replication-instance | replication-task</p>
   * @public
   */
  SourceType?: string | undefined;

  /**
   * <p> A list of event categories for a source type that you want to subscribe to. Use the
   *             <code>DescribeEventCategories</code> action to see a list of event categories. </p>
   * @public
   */
  EventCategories?: string[] | undefined;

  /**
   * <p> A Boolean value; set to <b>true</b> to activate the
   *          subscription. </p>
   * @public
   */
  Enabled?: boolean | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ModifyEventSubscriptionResponse {
  /**
   * <p>The modified event subscription.</p>
   * @public
   */
  EventSubscription?: EventSubscription | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceProfileMessage {
  /**
   * <p>The identifier of the instance profile. Identifiers must begin with a letter and must contain
   *          only ASCII letters, digits, and hyphens. They can't end with a hyphen, or contain two consecutive
   *          hyphens.</p>
   * @public
   */
  InstanceProfileIdentifier: string | undefined;

  /**
   * <p>The Availability Zone where the instance profile runs.</p>
   * @public
   */
  AvailabilityZone?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the KMS key that is used to encrypt
   *          the connection parameters for the instance profile.</p>
   *          <p>If you don't specify a value for the <code>KmsKeyArn</code> parameter, then
   *          DMS uses your default encryption key.</p>
   *          <p>KMS creates the default encryption key for your Amazon Web Services account. Your Amazon Web Services account has a
   *          different default encryption key for each Amazon Web Services Region.</p>
   * @public
   */
  KmsKeyArn?: string | undefined;

  /**
   * <p>Specifies the accessibility options for the instance profile. A value of
   *          <code>true</code> represents an instance profile with a public IP address. A value of
   *          <code>false</code> represents an instance profile with a private IP address. The default value
   *          is <code>true</code>.</p>
   * @public
   */
  PubliclyAccessible?: boolean | undefined;

  /**
   * <p>Specifies the network type for the instance profile. A value of <code>IPV4</code>
   *          represents an instance profile with IPv4 network type and only supports IPv4 addressing.
   *          A value of <code>IPV6</code> represents an instance profile with IPv6 network type
   *          and only supports IPv6 addressing. A value of <code>DUAL</code> represents an instance
   *          profile with dual network type that supports IPv4 and IPv6 addressing.</p>
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * <p>A user-friendly name for the instance profile.</p>
   * @public
   */
  InstanceProfileName?: string | undefined;

  /**
   * <p>A user-friendly description for the instance profile.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>A subnet group to associate with the instance profile.</p>
   * @public
   */
  SubnetGroupIdentifier?: string | undefined;

  /**
   * <p>Specifies the VPC security groups to be used with the instance profile.
   *          The VPC security group must work with the VPC containing the instance profile.</p>
   * @public
   */
  VpcSecurityGroups?: string[] | undefined;
}

/**
 * @public
 */
export interface ModifyInstanceProfileResponse {
  /**
   * <p>The instance profile that was modified.</p>
   * @public
   */
  InstanceProfile?: InstanceProfile | undefined;
}

/**
 * @public
 */
export interface ModifyMigrationProjectMessage {
  /**
   * <p>The identifier of the migration project. Identifiers must begin with a letter
   *          and must contain only ASCII letters, digits, and hyphens. They can't end with
   *          a hyphen, or contain two consecutive hyphens.</p>
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * <p>A user-friendly name for the migration project.</p>
   * @public
   */
  MigrationProjectName?: string | undefined;

  /**
   * <p>Information about the source data provider, including the name, ARN, and Amazon Web Services Secrets Manager parameters.</p>
   * @public
   */
  SourceDataProviderDescriptors?: DataProviderDescriptorDefinition[] | undefined;

  /**
   * <p>Information about the target data provider, including the name, ARN, and Amazon Web Services Secrets Manager parameters.</p>
   * @public
   */
  TargetDataProviderDescriptors?: DataProviderDescriptorDefinition[] | undefined;

  /**
   * <p>The name or Amazon Resource Name (ARN) for the instance profile.</p>
   * @public
   */
  InstanceProfileIdentifier?: string | undefined;

  /**
   * <p>The settings in JSON format for migration rules. Migration rules make it possible for you to change
   *          the object names according to the rules that you specify. For example, you can change an object name
   *          to lowercase or uppercase, add or remove a prefix or suffix, or rename objects.</p>
   * @public
   */
  TransformationRules?: string | undefined;

  /**
   * <p>A user-friendly description of the migration project.</p>
   * @public
   */
  Description?: string | undefined;

  /**
   * <p>The schema conversion application attributes, including the Amazon S3 bucket name and Amazon S3 role ARN.</p>
   * @public
   */
  SchemaConversionApplicationAttributes?: SCApplicationAttributes | undefined;
}

/**
 * @public
 */
export interface ModifyMigrationProjectResponse {
  /**
   * <p>The migration project that was modified.</p>
   * @public
   */
  MigrationProject?: MigrationProject | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ModifyReplicationConfigMessage {
  /**
   * <p>The Amazon Resource Name of the replication to modify.</p>
   * @public
   */
  ReplicationConfigArn: string | undefined;

  /**
   * <p>The new replication config to apply to the replication.</p>
   * @public
   */
  ReplicationConfigIdentifier?: string | undefined;

  /**
   * <p>The type of replication.</p>
   * @public
   */
  ReplicationType?: MigrationTypeValue | undefined;

  /**
   * <p>Table mappings specified in the replication.</p>
   * @public
   */
  TableMappings?: string | undefined;

  /**
   * <p>The settings for the replication.</p>
   * @public
   */
  ReplicationSettings?: string | undefined;

  /**
   * <p>Additional settings for the replication.</p>
   * @public
   */
  SupplementalSettings?: string | undefined;

  /**
   * <p>Configuration parameters for provisioning an DMS Serverless replication.</p>
   * @public
   */
  ComputeConfig?: ComputeConfig | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the source endpoint for
   *          this DMS serverless replication configuration.</p>
   * @public
   */
  SourceEndpointArn?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the target endpoint for
   *          this DMS serverless replication configuration.</p>
   * @public
   */
  TargetEndpointArn?: string | undefined;
}

/**
 * @public
 */
export interface ModifyReplicationConfigResponse {
  /**
   * <p>Information about the serverless replication config that was modified.</p>
   * @public
   */
  ReplicationConfig?: ReplicationConfig | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ModifyReplicationInstanceMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   * @public
   */
  ReplicationInstanceArn: string | undefined;

  /**
   * <p>The amount of storage (in gigabytes) to be allocated for the replication
   *          instance.</p>
   * @public
   */
  AllocatedStorage?: number | undefined;

  /**
   * <p>Indicates whether the changes should be applied immediately or during the next
   *          maintenance window.</p>
   * @public
   */
  ApplyImmediately?: boolean | undefined;

  /**
   * <p>The compute and memory capacity of the replication instance as defined for the specified
   *          replication instance class. For example to specify the instance class dms.c4.large, set this parameter to <code>"dms.c4.large"</code>.</p>
   *          <p>For more information on the settings and capacities for the available replication instance classes, see
   *          <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html#CHAP_ReplicationInstance.InDepth">
   *             Selecting the right DMS replication instance for your migration</a>.
   *       </p>
   * @public
   */
  ReplicationInstanceClass?: string | undefined;

  /**
   * <p> Specifies the VPC security group to be used with the replication instance. The VPC
   *          security group must work with the VPC containing the replication instance. </p>
   * @public
   */
  VpcSecurityGroupIds?: string[] | undefined;

  /**
   * <p>The weekly time range (in UTC) during which system maintenance can occur, which might
   *          result in an outage. Changing this parameter does not result in an outage, except in the
   *          following situation, and the change is asynchronously applied as soon as possible. If
   *          moving this window to the current time, there must be at least 30 minutes between the
   *          current time and end of the window to ensure pending changes are applied.</p>
   *          <p>Default: Uses existing setting</p>
   *          <p>Format: ddd:hh24:mi-ddd:hh24:mi</p>
   *          <p>Valid Days: Mon | Tue | Wed | Thu | Fri | Sat | Sun</p>
   *          <p>Constraints: Must be at least 30 minutes</p>
   * @public
   */
  PreferredMaintenanceWindow?: string | undefined;

  /**
   * <p> Specifies whether the replication instance is a Multi-AZ deployment. You can't set the
   *             <code>AvailabilityZone</code> parameter if the Multi-AZ parameter is set to
   *             <code>true</code>. </p>
   * @public
   */
  MultiAZ?: boolean | undefined;

  /**
   * <p>The engine version number of the replication instance.</p>
   *          <p>When modifying a major engine version of an instance, also set
   *          <code>AllowMajorVersionUpgrade</code> to <code>true</code>.</p>
   * @public
   */
  EngineVersion?: string | undefined;

  /**
   * <p>Indicates that major version upgrades are allowed. Changing this parameter does not
   *          result in an outage, and the change is asynchronously applied as soon as possible.</p>
   *          <p>This parameter must be set to <code>true</code> when specifying a value for the
   *             <code>EngineVersion</code> parameter that is a different major version than the
   *          replication instance's current version.</p>
   * @public
   */
  AllowMajorVersionUpgrade?: boolean | undefined;

  /**
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
   * @public
   */
  AutoMinorVersionUpgrade?: boolean | undefined;

  /**
   * <p>The replication instance identifier. This parameter is stored as a lowercase
   *          string.</p>
   * @public
   */
  ReplicationInstanceIdentifier?: string | undefined;

  /**
   * <p>The type of IP address protocol used by a replication instance,
   *          such as IPv4 only or Dual-stack that supports both IPv4 and IPv6 addressing.
   *          IPv6 only is not yet supported.</p>
   * @public
   */
  NetworkType?: string | undefined;

  /**
   * <p>Specifies the ID of the secret that stores the key cache file required for kerberos authentication, when modifying a replication instance.</p>
   * @public
   */
  KerberosAuthenticationSettings?: KerberosAuthenticationSettings | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ModifyReplicationInstanceResponse {
  /**
   * <p>The modified replication instance.</p>
   * @public
   */
  ReplicationInstance?: ReplicationInstance | undefined;
}

/**
 * <p>An upgrade dependency is preventing the database migration.</p>
 * @public
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
 * <p></p>
 * @public
 */
export interface ModifyReplicationSubnetGroupMessage {
  /**
   * <p>The name of the replication instance subnet group.</p>
   * @public
   */
  ReplicationSubnetGroupIdentifier: string | undefined;

  /**
   * <p>A description for the replication instance subnet group.</p>
   * @public
   */
  ReplicationSubnetGroupDescription?: string | undefined;

  /**
   * <p>A list of subnet IDs.</p>
   * @public
   */
  SubnetIds: string[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ModifyReplicationSubnetGroupResponse {
  /**
   * <p>The modified replication subnet group.</p>
   * @public
   */
  ReplicationSubnetGroup?: ReplicationSubnetGroup | undefined;
}

/**
 * <p>The specified subnet is already in use.</p>
 * @public
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
 * <p></p>
 * @public
 */
export interface ModifyReplicationTaskMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication task.</p>
   * @public
   */
  ReplicationTaskArn: string | undefined;

  /**
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
   * @public
   */
  ReplicationTaskIdentifier?: string | undefined;

  /**
   * <p>The migration type. Valid values: <code>full-load</code> | <code>cdc</code> | <code>full-load-and-cdc</code>
   *          </p>
   * @public
   */
  MigrationType?: MigrationTypeValue | undefined;

  /**
   * <p>When using the CLI or boto3, provide the path of the JSON file that contains the
   *          table mappings. Precede the path with <code>file://</code>.  For example,
   *          <code>--table-mappings file://mappingfile.json</code>. When working with the DMS  API,
   *          provide the JSON as the parameter value.
   *     </p>
   * @public
   */
  TableMappings?: string | undefined;

  /**
   * <p>JSON file that contains settings for the task, such as task metadata settings.</p>
   * @public
   */
  ReplicationTaskSettings?: string | undefined;

  /**
   * <p>Indicates the start time for a change data capture (CDC) operation. Use either
   *          CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start.
   *          Specifying both values results in an error.</p>
   *          <p>Timestamp Example: --cdc-start-time “2018-03-08T12:12:12”</p>
   * @public
   */
  CdcStartTime?: Date | undefined;

  /**
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
   * @public
   */
  CdcStartPosition?: string | undefined;

  /**
   * <p>Indicates when you want a change data capture (CDC) operation to stop. The value can be
   *          either server time or commit time.</p>
   *          <p>Server time example: --cdc-stop-position “server_time:2018-02-09T12:12:12”</p>
   *          <p>Commit time example: --cdc-stop-position “commit_time:2018-02-09T12:12:12“</p>
   * @public
   */
  CdcStopPosition?: string | undefined;

  /**
   * <p>Supplemental information that the task requires to migrate the data for certain source and target endpoints.
   *             For more information, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.TaskData.html">Specifying Supplemental Data for Task Settings</a> in the
   *          <i>Database Migration Service User Guide.</i>
   *          </p>
   * @public
   */
  TaskData?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ModifyReplicationTaskResponse {
  /**
   * <p>The replication task that was modified.</p>
   * @public
   */
  ReplicationTask?: ReplicationTask | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface MoveReplicationTaskMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the task that you want to move.</p>
   * @public
   */
  ReplicationTaskArn: string | undefined;

  /**
   * <p>The ARN of the replication instance where you want to move the task to.</p>
   * @public
   */
  TargetReplicationInstanceArn: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface MoveReplicationTaskResponse {
  /**
   * <p>The replication task that was moved.</p>
   * @public
   */
  ReplicationTask?: ReplicationTask | undefined;
}

/**
 * @public
 */
export interface RebootReplicationInstanceMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   * @public
   */
  ReplicationInstanceArn: string | undefined;

  /**
   * <p>If this parameter is <code>true</code>, the reboot is conducted through a Multi-AZ
   *          failover. If the instance isn't configured for Multi-AZ, then you can't specify
   *          <code>true</code>.  ( <code>--force-planned-failover</code> and <code>--force-failover</code> can't both be set to <code>true</code>.)</p>
   * @public
   */
  ForceFailover?: boolean | undefined;

  /**
   * <p>If this parameter is <code>true</code>, the reboot is conducted through a planned Multi-AZ failover
   *          where resources are released and cleaned up prior to conducting the failover.
   *          If the instance isn''t configured for Multi-AZ, then you can't specify <code>true</code>.
   *          ( <code>--force-planned-failover</code> and <code>--force-failover</code> can't both be set to <code>true</code>.)</p>
   * @public
   */
  ForcePlannedFailover?: boolean | undefined;
}

/**
 * @public
 */
export interface RebootReplicationInstanceResponse {
  /**
   * <p>The replication instance that is being rebooted. </p>
   * @public
   */
  ReplicationInstance?: ReplicationInstance | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface RefreshSchemasMessage {
  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   * @public
   */
  EndpointArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   * @public
   */
  ReplicationInstanceArn: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface RefreshSchemasResponse {
  /**
   * <p>The status of the refreshed schema.</p>
   * @public
   */
  RefreshSchemasStatus?: RefreshSchemasStatus | undefined;
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
 * <p>Provides the name of the schema and table to be reloaded.</p>
 * @public
 */
export interface TableToReload {
  /**
   * <p>The schema name of the table to be reloaded.</p>
   * @public
   */
  SchemaName: string | undefined;

  /**
   * <p>The table name of the table to be reloaded.</p>
   * @public
   */
  TableName: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ReloadReplicationTablesMessage {
  /**
   * <p>The Amazon Resource Name of the replication config for which to reload tables.</p>
   * @public
   */
  ReplicationConfigArn: string | undefined;

  /**
   * <p>The list of tables to reload.</p>
   * @public
   */
  TablesToReload: TableToReload[] | undefined;

  /**
   * <p>Options for reload. Specify <code>data-reload</code> to reload the data and re-validate
   *          it if validation is enabled. Specify <code>validate-only</code> to re-validate the table.
   *          This option applies only when validation is enabled for the replication. </p>
   * @public
   */
  ReloadOption?: ReloadOptionValue | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface ReloadReplicationTablesResponse {
  /**
   * <p>The Amazon Resource Name of the replication config for which to reload tables.</p>
   * @public
   */
  ReplicationConfigArn?: string | undefined;
}

/**
 * @public
 */
export interface ReloadTablesMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication task. </p>
   * @public
   */
  ReplicationTaskArn: string | undefined;

  /**
   * <p>The name and schema of the table to be reloaded. </p>
   * @public
   */
  TablesToReload: TableToReload[] | undefined;

  /**
   * <p>Options for reload. Specify <code>data-reload</code> to reload the data and re-validate
   *          it if validation is enabled. Specify <code>validate-only</code> to re-validate the table.
   *          This option applies only when validation is enabled for the task. </p>
   *          <p>Valid values: data-reload, validate-only</p>
   *          <p>Default value is data-reload.</p>
   * @public
   */
  ReloadOption?: ReloadOptionValue | undefined;
}

/**
 * @public
 */
export interface ReloadTablesResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication task. </p>
   * @public
   */
  ReplicationTaskArn?: string | undefined;
}

/**
 * <p>Removes one or more tags from an DMS resource.</p>
 * @public
 */
export interface RemoveTagsFromResourceMessage {
  /**
   * <p>An DMS resource from which you want to remove tag(s). The value for this parameter is an Amazon Resource Name (ARN).</p>
   * @public
   */
  ResourceArn: string | undefined;

  /**
   * <p>The tag key (name) of the tag to be removed.</p>
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface RemoveTagsFromResourceResponse {}

/**
 * @public
 */
export interface RunFleetAdvisorLsaAnalysisResponse {
  /**
   * <p>The ID of the LSA analysis run.</p>
   * @public
   */
  LsaAnalysisId?: string | undefined;

  /**
   * <p>The status of the LSA analysis, for example <code>COMPLETED</code>.</p>
   * @public
   */
  Status?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const StartReplicationMigrationTypeValue = {
  RELOAD_TARGET: "reload-target",
  RESUME_PROCESSING: "resume-processing",
  START_REPLICATION: "start-replication",
} as const;

/**
 * @public
 */
export type StartReplicationMigrationTypeValue =
  (typeof StartReplicationMigrationTypeValue)[keyof typeof StartReplicationMigrationTypeValue];

/**
 * @public
 */
export interface StartDataMigrationMessage {
  /**
   * <p>The identifier (name or ARN) of the data migration to start.</p>
   * @public
   */
  DataMigrationIdentifier: string | undefined;

  /**
   * <p>Specifies the start type for the data migration. Valid values include
   *          <code>start-replication</code>, <code>reload-target</code>, and <code>resume-processing</code>.</p>
   * @public
   */
  StartType: StartReplicationMigrationTypeValue | undefined;
}

/**
 * @public
 */
export interface StartDataMigrationResponse {
  /**
   * <p>The data migration that DMS started.</p>
   * @public
   */
  DataMigration?: DataMigration | undefined;
}

/**
 * @public
 */
export interface StartExtensionPackAssociationMessage {
  /**
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   * @public
   */
  MigrationProjectIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StartExtensionPackAssociationResponse {
  /**
   * <p>The identifier for the request operation.</p>
   * @public
   */
  RequestIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelAssessmentMessage {
  /**
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * <p>A value that specifies the database objects to assess.</p>
   * @public
   */
  SelectionRules: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelAssessmentResponse {
  /**
   * <p>The identifier for the assessment operation.</p>
   * @public
   */
  RequestIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelConversionMessage {
  /**
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * <p>A value that specifies the database objects to convert.</p>
   * @public
   */
  SelectionRules: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelConversionResponse {
  /**
   * <p>The identifier for the conversion operation.</p>
   * @public
   */
  RequestIdentifier?: string | undefined;
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
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * <p>A value that specifies the database objects to export.</p>
   * @public
   */
  SelectionRules: string | undefined;

  /**
   * <p>Whether to export the metadata model from the source or the target.</p>
   * @public
   */
  Origin: OriginTypeValue | undefined;

  /**
   * <p>The name of the model file to create in the Amazon S3 bucket.</p>
   * @public
   */
  FileName?: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelExportAsScriptResponse {
  /**
   * <p>The identifier for the export operation.</p>
   * @public
   */
  RequestIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelExportToTargetMessage {
  /**
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * <p>A value that specifies the database objects to export.</p>
   * @public
   */
  SelectionRules: string | undefined;

  /**
   * <p>Whether to overwrite the migration project extension pack. An extension pack is an add-on module
   *          that emulates functions present in a source database that are required when converting objects
   *          to the target database.</p>
   * @public
   */
  OverwriteExtensionPack?: boolean | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelExportToTargetResponse {
  /**
   * <p>The identifier for the export operation.</p>
   * @public
   */
  RequestIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelImportMessage {
  /**
   * <p>The migration project name or Amazon Resource Name (ARN).</p>
   * @public
   */
  MigrationProjectIdentifier: string | undefined;

  /**
   * <p>A value that specifies the database objects to import.</p>
   * @public
   */
  SelectionRules: string | undefined;

  /**
   * <p>Whether to load metadata to the source or target database.</p>
   * @public
   */
  Origin: OriginTypeValue | undefined;

  /**
   * <p>If <code>true</code>, DMS loads metadata for the specified objects from the source database.</p>
   * @public
   */
  Refresh?: boolean | undefined;
}

/**
 * @public
 */
export interface StartMetadataModelImportResponse {
  /**
   * <p>The identifier for the import operation.</p>
   * @public
   */
  RequestIdentifier?: string | undefined;
}

/**
 * @public
 */
export interface StartRecommendationsRequest {
  /**
   * <p>The identifier of the source database to analyze and provide recommendations
   *             for.</p>
   * @public
   */
  DatabaseId: string | undefined;

  /**
   * <p>The settings in JSON format that Fleet Advisor uses to determine target engine
   *             recommendations. These parameters include target instance sizing and availability and
   *             durability settings. For target instance sizing, Fleet Advisor supports the following
   *             two options: total capacity and resource utilization. For availability and durability,
   *             Fleet Advisor supports the following two options: production (Multi-AZ deployments) and
   *             Dev/Test (Single-AZ deployments).</p>
   * @public
   */
  Settings: RecommendationSettings | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface StartReplicationMessage {
  /**
   * <p>The Amazon Resource Name of the replication for which to start replication.</p>
   * @public
   */
  ReplicationConfigArn: string | undefined;

  /**
   * <p>The replication type.</p>
   *          <p>When the replication type is <code>full-load</code> or <code>full-load-and-cdc</code>, the only valid value
   *          for the first run of the replication is <code>start-replication</code>. This option will start the replication.</p>
   *          <p>You can also use <a>ReloadTables</a> to reload specific tables that failed during replication instead
   *          of restarting the replication.</p>
   *          <p>The <code>resume-processing</code> option isn't applicable for a full-load replication,
   *          because you can't resume partially loaded tables during the full load phase.</p>
   *          <p>For a <code>full-load-and-cdc</code> replication, DMS migrates table data, and then applies data changes
   *          that occur on the source. To load all the tables again, and start capturing source changes,
   *          use <code>reload-target</code>. Otherwise use <code>resume-processing</code>, to replicate the
   *          changes from the last stop position.</p>
   * @public
   */
  StartReplicationType: string | undefined;

  /**
   * <p>Indicates the start time for a change data capture (CDC) operation. Use either <code>CdcStartTime</code>
   *          or <code>CdcStartPosition</code> to specify when you want a CDC operation to start. Specifying both values results in an error.</p>
   * @public
   */
  CdcStartTime?: Date | undefined;

  /**
   * <p>Indicates when you want a change data capture (CDC) operation to start. Use either
   *          <code>CdcStartPosition</code> or <code>CdcStartTime</code> to specify when you want a
   *          CDC operation to start. Specifying both values results in an error.</p>
   *          <p>The value can be in date, checkpoint, or LSN/SCN format.</p>
   * @public
   */
  CdcStartPosition?: string | undefined;

  /**
   * <p>Indicates when you want a change data capture (CDC) operation to stop. The value can be
   *          either server time or commit time.</p>
   * @public
   */
  CdcStopPosition?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface StartReplicationResponse {
  /**
   * <p>The replication that DMS started.</p>
   * @public
   */
  Replication?: Replication | undefined;
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
 * <p></p>
 * @public
 */
export interface StartReplicationTaskMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication task to be started.</p>
   * @public
   */
  ReplicationTaskArn: string | undefined;

  /**
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
   * @public
   */
  StartReplicationTaskType: StartReplicationTaskTypeValue | undefined;

  /**
   * <p>Indicates the start time for a change data capture (CDC) operation. Use either
   *          CdcStartTime or CdcStartPosition to specify when you want a CDC operation to start.
   *          Specifying both values results in an error.</p>
   *          <p>Timestamp Example: --cdc-start-time “2018-03-08T12:12:12”</p>
   * @public
   */
  CdcStartTime?: Date | undefined;

  /**
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
   * @public
   */
  CdcStartPosition?: string | undefined;

  /**
   * <p>Indicates when you want a change data capture (CDC) operation to stop. The value can be
   *          either server time or commit time.</p>
   *          <p>Server time example: --cdc-stop-position “server_time:2018-02-09T12:12:12”</p>
   *          <p>Commit time example: --cdc-stop-position “commit_time:2018-02-09T12:12:12“</p>
   * @public
   */
  CdcStopPosition?: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface StartReplicationTaskResponse {
  /**
   * <p>The replication task started.</p>
   * @public
   */
  ReplicationTask?: ReplicationTask | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface StartReplicationTaskAssessmentMessage {
  /**
   * <p> The Amazon Resource Name (ARN) of the replication task. </p>
   * @public
   */
  ReplicationTaskArn: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface StartReplicationTaskAssessmentResponse {
  /**
   * <p> The assessed replication task. </p>
   * @public
   */
  ReplicationTask?: ReplicationTask | undefined;
}

/**
 * <p>An Key Management Service (KMS) error is preventing access to KMS.</p>
 * @public
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
 * <p></p>
 * @public
 */
export interface StartReplicationTaskAssessmentRunMessage {
  /**
   * <p>Amazon Resource Name (ARN) of the migration task associated with the premigration
   *          assessment run that you want to start.</p>
   * @public
   */
  ReplicationTaskArn: string | undefined;

  /**
   * <p>ARN of the service role needed to start the assessment run. The role must allow the <code>iam:PassRole</code> action.</p>
   * @public
   */
  ServiceAccessRoleArn: string | undefined;

  /**
   * <p>Amazon S3 bucket where you want DMS to store the results of this assessment
   *          run.</p>
   * @public
   */
  ResultLocationBucket: string | undefined;

  /**
   * <p>Folder within an Amazon S3 bucket where you want DMS to store the results of this assessment
   *          run.</p>
   * @public
   */
  ResultLocationFolder?: string | undefined;

  /**
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
   * @public
   */
  ResultEncryptionMode?: string | undefined;

  /**
   * <p>ARN of a custom KMS encryption key that you specify when you set
   *             <code>ResultEncryptionMode</code> to <code>"SSE_KMS</code>".</p>
   * @public
   */
  ResultKmsKeyArn?: string | undefined;

  /**
   * <p>Unique name to identify the assessment run.</p>
   * @public
   */
  AssessmentRunName: string | undefined;

  /**
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
   * @public
   */
  IncludeOnly?: string[] | undefined;

  /**
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
   * @public
   */
  Exclude?: string[] | undefined;

  /**
   * <p>One or more tags to be assigned to the premigration assessment run that you want to start.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface StartReplicationTaskAssessmentRunResponse {
  /**
   * <p>The premigration assessment run that was started.</p>
   * @public
   */
  ReplicationTaskAssessmentRun?: ReplicationTaskAssessmentRun | undefined;
}

/**
 * @public
 */
export interface StopDataMigrationMessage {
  /**
   * <p>The identifier (name or ARN) of the data migration to stop.</p>
   * @public
   */
  DataMigrationIdentifier: string | undefined;
}

/**
 * @public
 */
export interface StopDataMigrationResponse {
  /**
   * <p>The data migration that DMS stopped.</p>
   * @public
   */
  DataMigration?: DataMigration | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface StopReplicationMessage {
  /**
   * <p>The Amazon Resource Name of the replication to stop.</p>
   * @public
   */
  ReplicationConfigArn: string | undefined;
}

/**
 * @public
 */
export interface StopReplicationResponse {
  /**
   * <p>The replication that DMS stopped.</p>
   * @public
   */
  Replication?: Replication | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface StopReplicationTaskMessage {
  /**
   * <p>The Amazon Resource Name(ARN) of the replication task to be stopped.</p>
   * @public
   */
  ReplicationTaskArn: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface StopReplicationTaskResponse {
  /**
   * <p>The replication task stopped.</p>
   * @public
   */
  ReplicationTask?: ReplicationTask | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface TestConnectionMessage {
  /**
   * <p>The Amazon Resource Name (ARN) of the replication instance.</p>
   * @public
   */
  ReplicationInstanceArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   * @public
   */
  EndpointArn: string | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface TestConnectionResponse {
  /**
   * <p>The connection tested.</p>
   * @public
   */
  Connection?: Connection | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface UpdateSubscriptionsToEventBridgeMessage {
  /**
   * <p>When set to true, this operation migrates DMS subscriptions for Amazon SNS
   *          notifications no matter what your replication instance version is. If not set or set to
   *          false, this operation runs only when all your replication instances are from DMS
   *          version 3.4.5 or higher.
   *       </p>
   * @public
   */
  ForceMove?: boolean | undefined;
}

/**
 * <p></p>
 * @public
 */
export interface UpdateSubscriptionsToEventBridgeResponse {
  /**
   * <p>A string that indicates how many event subscriptions were migrated and how many remain to be migrated.</p>
   * @public
   */
  Result?: string | undefined;
}

/**
 * @internal
 */
export const ImportCertificateMessageFilterSensitiveLog = (obj: ImportCertificateMessage): any => ({
  ...obj,
  ...(obj.CertificatePem && { CertificatePem: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ModifyDataMigrationMessageFilterSensitiveLog = (obj: ModifyDataMigrationMessage): any => ({
  ...obj,
  ...(obj.SelectionRules && { SelectionRules: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const ModifyDataMigrationResponseFilterSensitiveLog = (obj: ModifyDataMigrationResponse): any => ({
  ...obj,
  ...(obj.DataMigration && { DataMigration: DataMigrationFilterSensitiveLog(obj.DataMigration) }),
});

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

/**
 * @internal
 */
export const StartDataMigrationResponseFilterSensitiveLog = (obj: StartDataMigrationResponse): any => ({
  ...obj,
  ...(obj.DataMigration && { DataMigration: DataMigrationFilterSensitiveLog(obj.DataMigration) }),
});

/**
 * @internal
 */
export const StopDataMigrationResponseFilterSensitiveLog = (obj: StopDataMigrationResponse): any => ({
  ...obj,
  ...(obj.DataMigration && { DataMigration: DataMigrationFilterSensitiveLog(obj.DataMigration) }),
});
