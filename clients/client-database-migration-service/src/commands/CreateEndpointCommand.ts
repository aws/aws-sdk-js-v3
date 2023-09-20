// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import {
  CreateEndpointMessage,
  CreateEndpointMessageFilterSensitiveLog,
  CreateEndpointResponse,
  CreateEndpointResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateEndpointCommand, se_CreateEndpointCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateEndpointCommand}.
 */
export interface CreateEndpointCommandInput extends CreateEndpointMessage {}
/**
 * @public
 *
 * The output of {@link CreateEndpointCommand}.
 */
export interface CreateEndpointCommandOutput extends CreateEndpointResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an endpoint using the provided settings.</p>
 *          <note>
 *             <p>For a MySQL source or target endpoint, don't explicitly specify the database using
 *          the <code>DatabaseName</code> request parameter on the <code>CreateEndpoint</code> API call.
 *          Specifying <code>DatabaseName</code> when you create a MySQL endpoint replicates all the
 *          task tables to this single database. For MySQL endpoints, you specify the database only when
 *          you specify the schema in the table-mapping rules of the DMS task.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, CreateEndpointCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, CreateEndpointCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // CreateEndpointMessage
 *   EndpointIdentifier: "STRING_VALUE", // required
 *   EndpointType: "source" || "target", // required
 *   EngineName: "STRING_VALUE", // required
 *   Username: "STRING_VALUE",
 *   Password: "STRING_VALUE",
 *   ServerName: "STRING_VALUE",
 *   Port: Number("int"),
 *   DatabaseName: "STRING_VALUE",
 *   ExtraConnectionAttributes: "STRING_VALUE",
 *   KmsKeyId: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ResourceArn: "STRING_VALUE",
 *     },
 *   ],
 *   CertificateArn: "STRING_VALUE",
 *   SslMode: "none" || "require" || "verify-ca" || "verify-full",
 *   ServiceAccessRoleArn: "STRING_VALUE",
 *   ExternalTableDefinition: "STRING_VALUE",
 *   DynamoDbSettings: { // DynamoDbSettings
 *     ServiceAccessRoleArn: "STRING_VALUE", // required
 *   },
 *   S3Settings: { // S3Settings
 *     ServiceAccessRoleArn: "STRING_VALUE",
 *     ExternalTableDefinition: "STRING_VALUE",
 *     CsvRowDelimiter: "STRING_VALUE",
 *     CsvDelimiter: "STRING_VALUE",
 *     BucketFolder: "STRING_VALUE",
 *     BucketName: "STRING_VALUE",
 *     CompressionType: "none" || "gzip",
 *     EncryptionMode: "sse-s3" || "sse-kms",
 *     ServerSideEncryptionKmsKeyId: "STRING_VALUE",
 *     DataFormat: "csv" || "parquet",
 *     EncodingType: "plain" || "plain-dictionary" || "rle-dictionary",
 *     DictPageSizeLimit: Number("int"),
 *     RowGroupLength: Number("int"),
 *     DataPageSize: Number("int"),
 *     ParquetVersion: "parquet-1-0" || "parquet-2-0",
 *     EnableStatistics: true || false,
 *     IncludeOpForFullLoad: true || false,
 *     CdcInsertsOnly: true || false,
 *     TimestampColumnName: "STRING_VALUE",
 *     ParquetTimestampInMillisecond: true || false,
 *     CdcInsertsAndUpdates: true || false,
 *     DatePartitionEnabled: true || false,
 *     DatePartitionSequence: "YYYYMMDD" || "YYYYMMDDHH" || "YYYYMM" || "MMYYYYDD" || "DDMMYYYY",
 *     DatePartitionDelimiter: "SLASH" || "UNDERSCORE" || "DASH" || "NONE",
 *     UseCsvNoSupValue: true || false,
 *     CsvNoSupValue: "STRING_VALUE",
 *     PreserveTransactions: true || false,
 *     CdcPath: "STRING_VALUE",
 *     UseTaskStartTimeForFullLoadTimestamp: true || false,
 *     CannedAclForObjects: "none" || "private" || "public-read" || "public-read-write" || "authenticated-read" || "aws-exec-read" || "bucket-owner-read" || "bucket-owner-full-control",
 *     AddColumnName: true || false,
 *     CdcMaxBatchInterval: Number("int"),
 *     CdcMinFileSize: Number("int"),
 *     CsvNullValue: "STRING_VALUE",
 *     IgnoreHeaderRows: Number("int"),
 *     MaxFileSize: Number("int"),
 *     Rfc4180: true || false,
 *     DatePartitionTimezone: "STRING_VALUE",
 *     AddTrailingPaddingCharacter: true || false,
 *     ExpectedBucketOwner: "STRING_VALUE",
 *     GlueCatalogGeneration: true || false,
 *   },
 *   DmsTransferSettings: { // DmsTransferSettings
 *     ServiceAccessRoleArn: "STRING_VALUE",
 *     BucketName: "STRING_VALUE",
 *   },
 *   MongoDbSettings: { // MongoDbSettings
 *     Username: "STRING_VALUE",
 *     Password: "STRING_VALUE",
 *     ServerName: "STRING_VALUE",
 *     Port: Number("int"),
 *     DatabaseName: "STRING_VALUE",
 *     AuthType: "no" || "password",
 *     AuthMechanism: "default" || "mongodb_cr" || "scram_sha_1",
 *     NestingLevel: "none" || "one",
 *     ExtractDocId: "STRING_VALUE",
 *     DocsToInvestigate: "STRING_VALUE",
 *     AuthSource: "STRING_VALUE",
 *     KmsKeyId: "STRING_VALUE",
 *     SecretsManagerAccessRoleArn: "STRING_VALUE",
 *     SecretsManagerSecretId: "STRING_VALUE",
 *     UseUpdateLookUp: true || false,
 *     ReplicateShardCollections: true || false,
 *   },
 *   KinesisSettings: { // KinesisSettings
 *     StreamArn: "STRING_VALUE",
 *     MessageFormat: "json" || "json-unformatted",
 *     ServiceAccessRoleArn: "STRING_VALUE",
 *     IncludeTransactionDetails: true || false,
 *     IncludePartitionValue: true || false,
 *     PartitionIncludeSchemaTable: true || false,
 *     IncludeTableAlterOperations: true || false,
 *     IncludeControlDetails: true || false,
 *     IncludeNullAndEmpty: true || false,
 *     NoHexPrefix: true || false,
 *   },
 *   KafkaSettings: { // KafkaSettings
 *     Broker: "STRING_VALUE",
 *     Topic: "STRING_VALUE",
 *     MessageFormat: "json" || "json-unformatted",
 *     IncludeTransactionDetails: true || false,
 *     IncludePartitionValue: true || false,
 *     PartitionIncludeSchemaTable: true || false,
 *     IncludeTableAlterOperations: true || false,
 *     IncludeControlDetails: true || false,
 *     MessageMaxBytes: Number("int"),
 *     IncludeNullAndEmpty: true || false,
 *     SecurityProtocol: "plaintext" || "ssl-authentication" || "ssl-encryption" || "sasl-ssl",
 *     SslClientCertificateArn: "STRING_VALUE",
 *     SslClientKeyArn: "STRING_VALUE",
 *     SslClientKeyPassword: "STRING_VALUE",
 *     SslCaCertificateArn: "STRING_VALUE",
 *     SaslUsername: "STRING_VALUE",
 *     SaslPassword: "STRING_VALUE",
 *     NoHexPrefix: true || false,
 *     SaslMechanism: "scram-sha-512" || "plain",
 *     SslEndpointIdentificationAlgorithm: "none" || "https",
 *   },
 *   ElasticsearchSettings: { // ElasticsearchSettings
 *     ServiceAccessRoleArn: "STRING_VALUE", // required
 *     EndpointUri: "STRING_VALUE", // required
 *     FullLoadErrorPercentage: Number("int"),
 *     ErrorRetryDuration: Number("int"),
 *     UseNewMappingType: true || false,
 *   },
 *   NeptuneSettings: { // NeptuneSettings
 *     ServiceAccessRoleArn: "STRING_VALUE",
 *     S3BucketName: "STRING_VALUE", // required
 *     S3BucketFolder: "STRING_VALUE", // required
 *     ErrorRetryDuration: Number("int"),
 *     MaxFileSize: Number("int"),
 *     MaxRetryCount: Number("int"),
 *     IamAuthEnabled: true || false,
 *   },
 *   RedshiftSettings: { // RedshiftSettings
 *     AcceptAnyDate: true || false,
 *     AfterConnectScript: "STRING_VALUE",
 *     BucketFolder: "STRING_VALUE",
 *     BucketName: "STRING_VALUE",
 *     CaseSensitiveNames: true || false,
 *     CompUpdate: true || false,
 *     ConnectionTimeout: Number("int"),
 *     DatabaseName: "STRING_VALUE",
 *     DateFormat: "STRING_VALUE",
 *     EmptyAsNull: true || false,
 *     EncryptionMode: "sse-s3" || "sse-kms",
 *     ExplicitIds: true || false,
 *     FileTransferUploadStreams: Number("int"),
 *     LoadTimeout: Number("int"),
 *     MaxFileSize: Number("int"),
 *     Password: "STRING_VALUE",
 *     Port: Number("int"),
 *     RemoveQuotes: true || false,
 *     ReplaceInvalidChars: "STRING_VALUE",
 *     ReplaceChars: "STRING_VALUE",
 *     ServerName: "STRING_VALUE",
 *     ServiceAccessRoleArn: "STRING_VALUE",
 *     ServerSideEncryptionKmsKeyId: "STRING_VALUE",
 *     TimeFormat: "STRING_VALUE",
 *     TrimBlanks: true || false,
 *     TruncateColumns: true || false,
 *     Username: "STRING_VALUE",
 *     WriteBufferSize: Number("int"),
 *     SecretsManagerAccessRoleArn: "STRING_VALUE",
 *     SecretsManagerSecretId: "STRING_VALUE",
 *     MapBooleanAsBoolean: true || false,
 *   },
 *   PostgreSQLSettings: { // PostgreSQLSettings
 *     AfterConnectScript: "STRING_VALUE",
 *     CaptureDdls: true || false,
 *     MaxFileSize: Number("int"),
 *     DatabaseName: "STRING_VALUE",
 *     DdlArtifactsSchema: "STRING_VALUE",
 *     ExecuteTimeout: Number("int"),
 *     FailTasksOnLobTruncation: true || false,
 *     HeartbeatEnable: true || false,
 *     HeartbeatSchema: "STRING_VALUE",
 *     HeartbeatFrequency: Number("int"),
 *     Password: "STRING_VALUE",
 *     Port: Number("int"),
 *     ServerName: "STRING_VALUE",
 *     Username: "STRING_VALUE",
 *     SlotName: "STRING_VALUE",
 *     PluginName: "no-preference" || "test-decoding" || "pglogical",
 *     SecretsManagerAccessRoleArn: "STRING_VALUE",
 *     SecretsManagerSecretId: "STRING_VALUE",
 *     TrimSpaceInChar: true || false,
 *     MapBooleanAsBoolean: true || false,
 *     MapJsonbAsClob: true || false,
 *     MapLongVarcharAs: "wstring" || "clob" || "nclob",
 *     DatabaseMode: "default" || "babelfish",
 *     BabelfishDatabaseName: "STRING_VALUE",
 *   },
 *   MySQLSettings: { // MySQLSettings
 *     AfterConnectScript: "STRING_VALUE",
 *     CleanSourceMetadataOnMismatch: true || false,
 *     DatabaseName: "STRING_VALUE",
 *     EventsPollInterval: Number("int"),
 *     TargetDbType: "specific-database" || "multiple-databases",
 *     MaxFileSize: Number("int"),
 *     ParallelLoadThreads: Number("int"),
 *     Password: "STRING_VALUE",
 *     Port: Number("int"),
 *     ServerName: "STRING_VALUE",
 *     ServerTimezone: "STRING_VALUE",
 *     Username: "STRING_VALUE",
 *     SecretsManagerAccessRoleArn: "STRING_VALUE",
 *     SecretsManagerSecretId: "STRING_VALUE",
 *   },
 *   OracleSettings: { // OracleSettings
 *     AddSupplementalLogging: true || false,
 *     ArchivedLogDestId: Number("int"),
 *     AdditionalArchivedLogDestId: Number("int"),
 *     ExtraArchivedLogDestIds: [ // IntegerList
 *       Number("int"),
 *     ],
 *     AllowSelectNestedTables: true || false,
 *     ParallelAsmReadThreads: Number("int"),
 *     ReadAheadBlocks: Number("int"),
 *     AccessAlternateDirectly: true || false,
 *     UseAlternateFolderForOnline: true || false,
 *     OraclePathPrefix: "STRING_VALUE",
 *     UsePathPrefix: "STRING_VALUE",
 *     ReplacePathPrefix: true || false,
 *     EnableHomogenousTablespace: true || false,
 *     DirectPathNoLog: true || false,
 *     ArchivedLogsOnly: true || false,
 *     AsmPassword: "STRING_VALUE",
 *     AsmServer: "STRING_VALUE",
 *     AsmUser: "STRING_VALUE",
 *     CharLengthSemantics: "default" || "char" || "byte",
 *     DatabaseName: "STRING_VALUE",
 *     DirectPathParallelLoad: true || false,
 *     FailTasksOnLobTruncation: true || false,
 *     NumberDatatypeScale: Number("int"),
 *     Password: "STRING_VALUE",
 *     Port: Number("int"),
 *     ReadTableSpaceName: true || false,
 *     RetryInterval: Number("int"),
 *     SecurityDbEncryption: "STRING_VALUE",
 *     SecurityDbEncryptionName: "STRING_VALUE",
 *     ServerName: "STRING_VALUE",
 *     SpatialDataOptionToGeoJsonFunctionName: "STRING_VALUE",
 *     StandbyDelayTime: Number("int"),
 *     Username: "STRING_VALUE",
 *     UseBFile: true || false,
 *     UseDirectPathFullLoad: true || false,
 *     UseLogminerReader: true || false,
 *     SecretsManagerAccessRoleArn: "STRING_VALUE",
 *     SecretsManagerSecretId: "STRING_VALUE",
 *     SecretsManagerOracleAsmAccessRoleArn: "STRING_VALUE",
 *     SecretsManagerOracleAsmSecretId: "STRING_VALUE",
 *     TrimSpaceInChar: true || false,
 *     ConvertTimestampWithZoneToUTC: true || false,
 *     OpenTransactionWindow: Number("int"),
 *   },
 *   SybaseSettings: { // SybaseSettings
 *     DatabaseName: "STRING_VALUE",
 *     Password: "STRING_VALUE",
 *     Port: Number("int"),
 *     ServerName: "STRING_VALUE",
 *     Username: "STRING_VALUE",
 *     SecretsManagerAccessRoleArn: "STRING_VALUE",
 *     SecretsManagerSecretId: "STRING_VALUE",
 *   },
 *   MicrosoftSQLServerSettings: { // MicrosoftSQLServerSettings
 *     Port: Number("int"),
 *     BcpPacketSize: Number("int"),
 *     DatabaseName: "STRING_VALUE",
 *     ControlTablesFileGroup: "STRING_VALUE",
 *     Password: "STRING_VALUE",
 *     QuerySingleAlwaysOnNode: true || false,
 *     ReadBackupOnly: true || false,
 *     SafeguardPolicy: "rely-on-sql-server-replication-agent" || "exclusive-automatic-truncation" || "shared-automatic-truncation",
 *     ServerName: "STRING_VALUE",
 *     Username: "STRING_VALUE",
 *     UseBcpFullLoad: true || false,
 *     UseThirdPartyBackupDevice: true || false,
 *     SecretsManagerAccessRoleArn: "STRING_VALUE",
 *     SecretsManagerSecretId: "STRING_VALUE",
 *     TrimSpaceInChar: true || false,
 *     TlogAccessMode: "BackupOnly" || "PreferBackup" || "PreferTlog" || "TlogOnly",
 *     ForceLobLookup: true || false,
 *   },
 *   IBMDb2Settings: { // IBMDb2Settings
 *     DatabaseName: "STRING_VALUE",
 *     Password: "STRING_VALUE",
 *     Port: Number("int"),
 *     ServerName: "STRING_VALUE",
 *     SetDataCaptureChanges: true || false,
 *     CurrentLsn: "STRING_VALUE",
 *     MaxKBytesPerRead: Number("int"),
 *     Username: "STRING_VALUE",
 *     SecretsManagerAccessRoleArn: "STRING_VALUE",
 *     SecretsManagerSecretId: "STRING_VALUE",
 *   },
 *   ResourceIdentifier: "STRING_VALUE",
 *   DocDbSettings: { // DocDbSettings
 *     Username: "STRING_VALUE",
 *     Password: "STRING_VALUE",
 *     ServerName: "STRING_VALUE",
 *     Port: Number("int"),
 *     DatabaseName: "STRING_VALUE",
 *     NestingLevel: "none" || "one",
 *     ExtractDocId: true || false,
 *     DocsToInvestigate: Number("int"),
 *     KmsKeyId: "STRING_VALUE",
 *     SecretsManagerAccessRoleArn: "STRING_VALUE",
 *     SecretsManagerSecretId: "STRING_VALUE",
 *     UseUpdateLookUp: true || false,
 *     ReplicateShardCollections: true || false,
 *   },
 *   RedisSettings: { // RedisSettings
 *     ServerName: "STRING_VALUE", // required
 *     Port: Number("int"), // required
 *     SslSecurityProtocol: "plaintext" || "ssl-encryption",
 *     AuthType: "none" || "auth-role" || "auth-token",
 *     AuthUserName: "STRING_VALUE",
 *     AuthPassword: "STRING_VALUE",
 *     SslCaCertificateArn: "STRING_VALUE",
 *   },
 *   GcpMySQLSettings: { // GcpMySQLSettings
 *     AfterConnectScript: "STRING_VALUE",
 *     CleanSourceMetadataOnMismatch: true || false,
 *     DatabaseName: "STRING_VALUE",
 *     EventsPollInterval: Number("int"),
 *     TargetDbType: "specific-database" || "multiple-databases",
 *     MaxFileSize: Number("int"),
 *     ParallelLoadThreads: Number("int"),
 *     Password: "STRING_VALUE",
 *     Port: Number("int"),
 *     ServerName: "STRING_VALUE",
 *     ServerTimezone: "STRING_VALUE",
 *     Username: "STRING_VALUE",
 *     SecretsManagerAccessRoleArn: "STRING_VALUE",
 *     SecretsManagerSecretId: "STRING_VALUE",
 *   },
 *   TimestreamSettings: { // TimestreamSettings
 *     DatabaseName: "STRING_VALUE", // required
 *     MemoryDuration: Number("int"), // required
 *     MagneticDuration: Number("int"), // required
 *     CdcInsertsAndUpdates: true || false,
 *     EnableMagneticStoreWrites: true || false,
 *   },
 * };
 * const command = new CreateEndpointCommand(input);
 * const response = await client.send(command);
 * // { // CreateEndpointResponse
 * //   Endpoint: { // Endpoint
 * //     EndpointIdentifier: "STRING_VALUE",
 * //     EndpointType: "source" || "target",
 * //     EngineName: "STRING_VALUE",
 * //     EngineDisplayName: "STRING_VALUE",
 * //     Username: "STRING_VALUE",
 * //     ServerName: "STRING_VALUE",
 * //     Port: Number("int"),
 * //     DatabaseName: "STRING_VALUE",
 * //     ExtraConnectionAttributes: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     KmsKeyId: "STRING_VALUE",
 * //     EndpointArn: "STRING_VALUE",
 * //     CertificateArn: "STRING_VALUE",
 * //     SslMode: "none" || "require" || "verify-ca" || "verify-full",
 * //     ServiceAccessRoleArn: "STRING_VALUE",
 * //     ExternalTableDefinition: "STRING_VALUE",
 * //     ExternalId: "STRING_VALUE",
 * //     DynamoDbSettings: { // DynamoDbSettings
 * //       ServiceAccessRoleArn: "STRING_VALUE", // required
 * //     },
 * //     S3Settings: { // S3Settings
 * //       ServiceAccessRoleArn: "STRING_VALUE",
 * //       ExternalTableDefinition: "STRING_VALUE",
 * //       CsvRowDelimiter: "STRING_VALUE",
 * //       CsvDelimiter: "STRING_VALUE",
 * //       BucketFolder: "STRING_VALUE",
 * //       BucketName: "STRING_VALUE",
 * //       CompressionType: "none" || "gzip",
 * //       EncryptionMode: "sse-s3" || "sse-kms",
 * //       ServerSideEncryptionKmsKeyId: "STRING_VALUE",
 * //       DataFormat: "csv" || "parquet",
 * //       EncodingType: "plain" || "plain-dictionary" || "rle-dictionary",
 * //       DictPageSizeLimit: Number("int"),
 * //       RowGroupLength: Number("int"),
 * //       DataPageSize: Number("int"),
 * //       ParquetVersion: "parquet-1-0" || "parquet-2-0",
 * //       EnableStatistics: true || false,
 * //       IncludeOpForFullLoad: true || false,
 * //       CdcInsertsOnly: true || false,
 * //       TimestampColumnName: "STRING_VALUE",
 * //       ParquetTimestampInMillisecond: true || false,
 * //       CdcInsertsAndUpdates: true || false,
 * //       DatePartitionEnabled: true || false,
 * //       DatePartitionSequence: "YYYYMMDD" || "YYYYMMDDHH" || "YYYYMM" || "MMYYYYDD" || "DDMMYYYY",
 * //       DatePartitionDelimiter: "SLASH" || "UNDERSCORE" || "DASH" || "NONE",
 * //       UseCsvNoSupValue: true || false,
 * //       CsvNoSupValue: "STRING_VALUE",
 * //       PreserveTransactions: true || false,
 * //       CdcPath: "STRING_VALUE",
 * //       UseTaskStartTimeForFullLoadTimestamp: true || false,
 * //       CannedAclForObjects: "none" || "private" || "public-read" || "public-read-write" || "authenticated-read" || "aws-exec-read" || "bucket-owner-read" || "bucket-owner-full-control",
 * //       AddColumnName: true || false,
 * //       CdcMaxBatchInterval: Number("int"),
 * //       CdcMinFileSize: Number("int"),
 * //       CsvNullValue: "STRING_VALUE",
 * //       IgnoreHeaderRows: Number("int"),
 * //       MaxFileSize: Number("int"),
 * //       Rfc4180: true || false,
 * //       DatePartitionTimezone: "STRING_VALUE",
 * //       AddTrailingPaddingCharacter: true || false,
 * //       ExpectedBucketOwner: "STRING_VALUE",
 * //       GlueCatalogGeneration: true || false,
 * //     },
 * //     DmsTransferSettings: { // DmsTransferSettings
 * //       ServiceAccessRoleArn: "STRING_VALUE",
 * //       BucketName: "STRING_VALUE",
 * //     },
 * //     MongoDbSettings: { // MongoDbSettings
 * //       Username: "STRING_VALUE",
 * //       Password: "STRING_VALUE",
 * //       ServerName: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       DatabaseName: "STRING_VALUE",
 * //       AuthType: "no" || "password",
 * //       AuthMechanism: "default" || "mongodb_cr" || "scram_sha_1",
 * //       NestingLevel: "none" || "one",
 * //       ExtractDocId: "STRING_VALUE",
 * //       DocsToInvestigate: "STRING_VALUE",
 * //       AuthSource: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //       SecretsManagerAccessRoleArn: "STRING_VALUE",
 * //       SecretsManagerSecretId: "STRING_VALUE",
 * //       UseUpdateLookUp: true || false,
 * //       ReplicateShardCollections: true || false,
 * //     },
 * //     KinesisSettings: { // KinesisSettings
 * //       StreamArn: "STRING_VALUE",
 * //       MessageFormat: "json" || "json-unformatted",
 * //       ServiceAccessRoleArn: "STRING_VALUE",
 * //       IncludeTransactionDetails: true || false,
 * //       IncludePartitionValue: true || false,
 * //       PartitionIncludeSchemaTable: true || false,
 * //       IncludeTableAlterOperations: true || false,
 * //       IncludeControlDetails: true || false,
 * //       IncludeNullAndEmpty: true || false,
 * //       NoHexPrefix: true || false,
 * //     },
 * //     KafkaSettings: { // KafkaSettings
 * //       Broker: "STRING_VALUE",
 * //       Topic: "STRING_VALUE",
 * //       MessageFormat: "json" || "json-unformatted",
 * //       IncludeTransactionDetails: true || false,
 * //       IncludePartitionValue: true || false,
 * //       PartitionIncludeSchemaTable: true || false,
 * //       IncludeTableAlterOperations: true || false,
 * //       IncludeControlDetails: true || false,
 * //       MessageMaxBytes: Number("int"),
 * //       IncludeNullAndEmpty: true || false,
 * //       SecurityProtocol: "plaintext" || "ssl-authentication" || "ssl-encryption" || "sasl-ssl",
 * //       SslClientCertificateArn: "STRING_VALUE",
 * //       SslClientKeyArn: "STRING_VALUE",
 * //       SslClientKeyPassword: "STRING_VALUE",
 * //       SslCaCertificateArn: "STRING_VALUE",
 * //       SaslUsername: "STRING_VALUE",
 * //       SaslPassword: "STRING_VALUE",
 * //       NoHexPrefix: true || false,
 * //       SaslMechanism: "scram-sha-512" || "plain",
 * //       SslEndpointIdentificationAlgorithm: "none" || "https",
 * //     },
 * //     ElasticsearchSettings: { // ElasticsearchSettings
 * //       ServiceAccessRoleArn: "STRING_VALUE", // required
 * //       EndpointUri: "STRING_VALUE", // required
 * //       FullLoadErrorPercentage: Number("int"),
 * //       ErrorRetryDuration: Number("int"),
 * //       UseNewMappingType: true || false,
 * //     },
 * //     NeptuneSettings: { // NeptuneSettings
 * //       ServiceAccessRoleArn: "STRING_VALUE",
 * //       S3BucketName: "STRING_VALUE", // required
 * //       S3BucketFolder: "STRING_VALUE", // required
 * //       ErrorRetryDuration: Number("int"),
 * //       MaxFileSize: Number("int"),
 * //       MaxRetryCount: Number("int"),
 * //       IamAuthEnabled: true || false,
 * //     },
 * //     RedshiftSettings: { // RedshiftSettings
 * //       AcceptAnyDate: true || false,
 * //       AfterConnectScript: "STRING_VALUE",
 * //       BucketFolder: "STRING_VALUE",
 * //       BucketName: "STRING_VALUE",
 * //       CaseSensitiveNames: true || false,
 * //       CompUpdate: true || false,
 * //       ConnectionTimeout: Number("int"),
 * //       DatabaseName: "STRING_VALUE",
 * //       DateFormat: "STRING_VALUE",
 * //       EmptyAsNull: true || false,
 * //       EncryptionMode: "sse-s3" || "sse-kms",
 * //       ExplicitIds: true || false,
 * //       FileTransferUploadStreams: Number("int"),
 * //       LoadTimeout: Number("int"),
 * //       MaxFileSize: Number("int"),
 * //       Password: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       RemoveQuotes: true || false,
 * //       ReplaceInvalidChars: "STRING_VALUE",
 * //       ReplaceChars: "STRING_VALUE",
 * //       ServerName: "STRING_VALUE",
 * //       ServiceAccessRoleArn: "STRING_VALUE",
 * //       ServerSideEncryptionKmsKeyId: "STRING_VALUE",
 * //       TimeFormat: "STRING_VALUE",
 * //       TrimBlanks: true || false,
 * //       TruncateColumns: true || false,
 * //       Username: "STRING_VALUE",
 * //       WriteBufferSize: Number("int"),
 * //       SecretsManagerAccessRoleArn: "STRING_VALUE",
 * //       SecretsManagerSecretId: "STRING_VALUE",
 * //       MapBooleanAsBoolean: true || false,
 * //     },
 * //     PostgreSQLSettings: { // PostgreSQLSettings
 * //       AfterConnectScript: "STRING_VALUE",
 * //       CaptureDdls: true || false,
 * //       MaxFileSize: Number("int"),
 * //       DatabaseName: "STRING_VALUE",
 * //       DdlArtifactsSchema: "STRING_VALUE",
 * //       ExecuteTimeout: Number("int"),
 * //       FailTasksOnLobTruncation: true || false,
 * //       HeartbeatEnable: true || false,
 * //       HeartbeatSchema: "STRING_VALUE",
 * //       HeartbeatFrequency: Number("int"),
 * //       Password: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       ServerName: "STRING_VALUE",
 * //       Username: "STRING_VALUE",
 * //       SlotName: "STRING_VALUE",
 * //       PluginName: "no-preference" || "test-decoding" || "pglogical",
 * //       SecretsManagerAccessRoleArn: "STRING_VALUE",
 * //       SecretsManagerSecretId: "STRING_VALUE",
 * //       TrimSpaceInChar: true || false,
 * //       MapBooleanAsBoolean: true || false,
 * //       MapJsonbAsClob: true || false,
 * //       MapLongVarcharAs: "wstring" || "clob" || "nclob",
 * //       DatabaseMode: "default" || "babelfish",
 * //       BabelfishDatabaseName: "STRING_VALUE",
 * //     },
 * //     MySQLSettings: { // MySQLSettings
 * //       AfterConnectScript: "STRING_VALUE",
 * //       CleanSourceMetadataOnMismatch: true || false,
 * //       DatabaseName: "STRING_VALUE",
 * //       EventsPollInterval: Number("int"),
 * //       TargetDbType: "specific-database" || "multiple-databases",
 * //       MaxFileSize: Number("int"),
 * //       ParallelLoadThreads: Number("int"),
 * //       Password: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       ServerName: "STRING_VALUE",
 * //       ServerTimezone: "STRING_VALUE",
 * //       Username: "STRING_VALUE",
 * //       SecretsManagerAccessRoleArn: "STRING_VALUE",
 * //       SecretsManagerSecretId: "STRING_VALUE",
 * //     },
 * //     OracleSettings: { // OracleSettings
 * //       AddSupplementalLogging: true || false,
 * //       ArchivedLogDestId: Number("int"),
 * //       AdditionalArchivedLogDestId: Number("int"),
 * //       ExtraArchivedLogDestIds: [ // IntegerList
 * //         Number("int"),
 * //       ],
 * //       AllowSelectNestedTables: true || false,
 * //       ParallelAsmReadThreads: Number("int"),
 * //       ReadAheadBlocks: Number("int"),
 * //       AccessAlternateDirectly: true || false,
 * //       UseAlternateFolderForOnline: true || false,
 * //       OraclePathPrefix: "STRING_VALUE",
 * //       UsePathPrefix: "STRING_VALUE",
 * //       ReplacePathPrefix: true || false,
 * //       EnableHomogenousTablespace: true || false,
 * //       DirectPathNoLog: true || false,
 * //       ArchivedLogsOnly: true || false,
 * //       AsmPassword: "STRING_VALUE",
 * //       AsmServer: "STRING_VALUE",
 * //       AsmUser: "STRING_VALUE",
 * //       CharLengthSemantics: "default" || "char" || "byte",
 * //       DatabaseName: "STRING_VALUE",
 * //       DirectPathParallelLoad: true || false,
 * //       FailTasksOnLobTruncation: true || false,
 * //       NumberDatatypeScale: Number("int"),
 * //       Password: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       ReadTableSpaceName: true || false,
 * //       RetryInterval: Number("int"),
 * //       SecurityDbEncryption: "STRING_VALUE",
 * //       SecurityDbEncryptionName: "STRING_VALUE",
 * //       ServerName: "STRING_VALUE",
 * //       SpatialDataOptionToGeoJsonFunctionName: "STRING_VALUE",
 * //       StandbyDelayTime: Number("int"),
 * //       Username: "STRING_VALUE",
 * //       UseBFile: true || false,
 * //       UseDirectPathFullLoad: true || false,
 * //       UseLogminerReader: true || false,
 * //       SecretsManagerAccessRoleArn: "STRING_VALUE",
 * //       SecretsManagerSecretId: "STRING_VALUE",
 * //       SecretsManagerOracleAsmAccessRoleArn: "STRING_VALUE",
 * //       SecretsManagerOracleAsmSecretId: "STRING_VALUE",
 * //       TrimSpaceInChar: true || false,
 * //       ConvertTimestampWithZoneToUTC: true || false,
 * //       OpenTransactionWindow: Number("int"),
 * //     },
 * //     SybaseSettings: { // SybaseSettings
 * //       DatabaseName: "STRING_VALUE",
 * //       Password: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       ServerName: "STRING_VALUE",
 * //       Username: "STRING_VALUE",
 * //       SecretsManagerAccessRoleArn: "STRING_VALUE",
 * //       SecretsManagerSecretId: "STRING_VALUE",
 * //     },
 * //     MicrosoftSQLServerSettings: { // MicrosoftSQLServerSettings
 * //       Port: Number("int"),
 * //       BcpPacketSize: Number("int"),
 * //       DatabaseName: "STRING_VALUE",
 * //       ControlTablesFileGroup: "STRING_VALUE",
 * //       Password: "STRING_VALUE",
 * //       QuerySingleAlwaysOnNode: true || false,
 * //       ReadBackupOnly: true || false,
 * //       SafeguardPolicy: "rely-on-sql-server-replication-agent" || "exclusive-automatic-truncation" || "shared-automatic-truncation",
 * //       ServerName: "STRING_VALUE",
 * //       Username: "STRING_VALUE",
 * //       UseBcpFullLoad: true || false,
 * //       UseThirdPartyBackupDevice: true || false,
 * //       SecretsManagerAccessRoleArn: "STRING_VALUE",
 * //       SecretsManagerSecretId: "STRING_VALUE",
 * //       TrimSpaceInChar: true || false,
 * //       TlogAccessMode: "BackupOnly" || "PreferBackup" || "PreferTlog" || "TlogOnly",
 * //       ForceLobLookup: true || false,
 * //     },
 * //     IBMDb2Settings: { // IBMDb2Settings
 * //       DatabaseName: "STRING_VALUE",
 * //       Password: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       ServerName: "STRING_VALUE",
 * //       SetDataCaptureChanges: true || false,
 * //       CurrentLsn: "STRING_VALUE",
 * //       MaxKBytesPerRead: Number("int"),
 * //       Username: "STRING_VALUE",
 * //       SecretsManagerAccessRoleArn: "STRING_VALUE",
 * //       SecretsManagerSecretId: "STRING_VALUE",
 * //     },
 * //     DocDbSettings: { // DocDbSettings
 * //       Username: "STRING_VALUE",
 * //       Password: "STRING_VALUE",
 * //       ServerName: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       DatabaseName: "STRING_VALUE",
 * //       NestingLevel: "none" || "one",
 * //       ExtractDocId: true || false,
 * //       DocsToInvestigate: Number("int"),
 * //       KmsKeyId: "STRING_VALUE",
 * //       SecretsManagerAccessRoleArn: "STRING_VALUE",
 * //       SecretsManagerSecretId: "STRING_VALUE",
 * //       UseUpdateLookUp: true || false,
 * //       ReplicateShardCollections: true || false,
 * //     },
 * //     RedisSettings: { // RedisSettings
 * //       ServerName: "STRING_VALUE", // required
 * //       Port: Number("int"), // required
 * //       SslSecurityProtocol: "plaintext" || "ssl-encryption",
 * //       AuthType: "none" || "auth-role" || "auth-token",
 * //       AuthUserName: "STRING_VALUE",
 * //       AuthPassword: "STRING_VALUE",
 * //       SslCaCertificateArn: "STRING_VALUE",
 * //     },
 * //     GcpMySQLSettings: { // GcpMySQLSettings
 * //       AfterConnectScript: "STRING_VALUE",
 * //       CleanSourceMetadataOnMismatch: true || false,
 * //       DatabaseName: "STRING_VALUE",
 * //       EventsPollInterval: Number("int"),
 * //       TargetDbType: "specific-database" || "multiple-databases",
 * //       MaxFileSize: Number("int"),
 * //       ParallelLoadThreads: Number("int"),
 * //       Password: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       ServerName: "STRING_VALUE",
 * //       ServerTimezone: "STRING_VALUE",
 * //       Username: "STRING_VALUE",
 * //       SecretsManagerAccessRoleArn: "STRING_VALUE",
 * //       SecretsManagerSecretId: "STRING_VALUE",
 * //     },
 * //     TimestreamSettings: { // TimestreamSettings
 * //       DatabaseName: "STRING_VALUE", // required
 * //       MemoryDuration: Number("int"), // required
 * //       MagneticDuration: Number("int"), // required
 * //       CdcInsertsAndUpdates: true || false,
 * //       EnableMagneticStoreWrites: true || false,
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateEndpointCommandInput - {@link CreateEndpointCommandInput}
 * @returns {@link CreateEndpointCommandOutput}
 * @see {@link CreateEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateEndpointCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>DMS cannot access the KMS key.</p>
 *
 * @throws {@link ResourceAlreadyExistsFault} (client fault)
 *  <p>The resource you are attempting to create already exists.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ResourceQuotaExceededFault} (client fault)
 *  <p>The quota for this resource quota has been exceeded.</p>
 *
 * @throws {@link S3AccessDeniedFault} (client fault)
 *  <p>Insufficient privileges are preventing access to an Amazon S3 object.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @example Create endpoint
 * ```javascript
 * // Creates an endpoint using the provided settings.
 * const input = {
 *   "CertificateArn": "",
 *   "DatabaseName": "testdb",
 *   "EndpointIdentifier": "test-endpoint-1",
 *   "EndpointType": "source",
 *   "EngineName": "mysql",
 *   "ExtraConnectionAttributes": "",
 *   "KmsKeyId": "arn:aws:kms:us-east-1:123456789012:key/4c1731d6-5435-ed4d-be13-d53411a7cfbd",
 *   "Password": "pasword",
 *   "Port": 3306,
 *   "ServerName": "mydb.cx1llnox7iyx.us-west-2.rds.amazonaws.com",
 *   "SslMode": "require",
 *   "Tags": [
 *     {
 *       "Key": "Acount",
 *       "Value": "143327655"
 *     }
 *   ],
 *   "Username": "username"
 * };
 * const command = new CreateEndpointCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Endpoint": {
 *     "EndpointArn": "arn:aws:dms:us-east-1:123456789012:endpoint:RAAR3R22XSH46S3PWLC3NJAWKM",
 *     "EndpointIdentifier": "test-endpoint-1",
 *     "EndpointType": "source",
 *     "EngineName": "mysql",
 *     "KmsKeyId": "arn:aws:kms:us-east-1:123456789012:key/4c1731d6-5435-ed4d-be13-d53411a7cfbd",
 *     "Port": 3306,
 *     "ServerName": "mydb.cx1llnox7iyx.us-west-2.rds.amazonaws.com",
 *     "Status": "active",
 *     "Username": "username"
 *   }
 * }
 * *\/
 * // example id: create-endpoint-1481746254348
 * ```
 *
 */
export class CreateEndpointCommand extends $Command<
  CreateEndpointCommandInput,
  CreateEndpointCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: CreateEndpointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateEndpointCommandInput, CreateEndpointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateEndpointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "CreateEndpointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateEndpointMessageFilterSensitiveLog,
      outputFilterSensitiveLog: CreateEndpointResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonDMSv20160101",
        operation: "CreateEndpoint",
      },
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: CreateEndpointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateEndpointCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateEndpointCommandOutput> {
    return de_CreateEndpointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
