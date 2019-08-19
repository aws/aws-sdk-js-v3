import {
  _DynamoDbSettings,
  _UnmarshalledDynamoDbSettings
} from "./_DynamoDbSettings";
import { _S3Settings, _UnmarshalledS3Settings } from "./_S3Settings";
import {
  _DmsTransferSettings,
  _UnmarshalledDmsTransferSettings
} from "./_DmsTransferSettings";
import {
  _MongoDbSettings,
  _UnmarshalledMongoDbSettings
} from "./_MongoDbSettings";
import {
  _KinesisSettings,
  _UnmarshalledKinesisSettings
} from "./_KinesisSettings";
import {
  _ElasticsearchSettings,
  _UnmarshalledElasticsearchSettings
} from "./_ElasticsearchSettings";
import {
  _RedshiftSettings,
  _UnmarshalledRedshiftSettings
} from "./_RedshiftSettings";

/**
 * <p/>
 */
export interface _Endpoint {
  /**
   * <p>The database endpoint identifier. Identifiers must begin with a letter; must contain only ASCII letters, digits, and hyphens; and must not end with a hyphen or contain two consecutive hyphens.</p>
   */
  EndpointIdentifier?: string;

  /**
   * <p>The type of endpoint. Valid values are <code>source</code> and <code>target</code>.</p>
   */
  EndpointType?: "source" | "target" | string;

  /**
   * <p>The database engine name. Valid values, depending on the EndpointType, include mysql, oracle, postgres, mariadb, aurora, aurora-postgresql, redshift, s3, db2, azuredb, sybase, dynamodb, mongodb, and sqlserver.</p>
   */
  EngineName?: string;

  /**
   * <p>The expanded name for the engine name. For example, if the <code>EngineName</code> parameter is "aurora," this value would be "Amazon Aurora MySQL."</p>
   */
  EngineDisplayName?: string;

  /**
   * <p>The user name used to connect to the endpoint.</p>
   */
  Username?: string;

  /**
   * <p>The name of the server at the endpoint.</p>
   */
  ServerName?: string;

  /**
   * <p>The port value used to access the endpoint.</p>
   */
  Port?: number;

  /**
   * <p>The name of the database at the endpoint.</p>
   */
  DatabaseName?: string;

  /**
   * <p>Additional connection attributes used to connect to the endpoint.</p>
   */
  ExtraConnectionAttributes?: string;

  /**
   * <p>The status of the endpoint.</p>
   */
  Status?: string;

  /**
   * <p>An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint.</p> <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then AWS DMS uses your default encryption key.</p> <p>AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn?: string;

  /**
   * <p>The Amazon Resource Name (ARN) used for SSL connection to the endpoint.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The SSL mode used to connect to the endpoint. The default value is <code>none</code>.</p>
   */
  SslMode?: "none" | "require" | "verify-ca" | "verify-full" | string;

  /**
   * <p>The Amazon Resource Name (ARN) used by the service access IAM role.</p>
   */
  ServiceAccessRoleArn?: string;

  /**
   * <p>The external table definition.</p>
   */
  ExternalTableDefinition?: string;

  /**
   * <p> Value returned by a call to CreateEndpoint that can be used for cross-account validation. Use it on a subsequent call to CreateEndpoint to create the endpoint with a cross-account. </p>
   */
  ExternalId?: string;

  /**
   * <p>The settings for the target DynamoDB database. For more information, see the <code>DynamoDBSettings</code> structure.</p>
   */
  DynamoDbSettings?: _DynamoDbSettings;

  /**
   * <p>The settings for the S3 target endpoint. For more information, see the <code>S3Settings</code> structure.</p>
   */
  S3Settings?: _S3Settings;

  /**
   * <p>The settings in JSON format for the DMS transfer type of source endpoint. </p> <p>Possible attributes include the following:</p> <ul> <li> <p> <code>serviceAccessRoleArn</code> - The IAM role that has permission to access the Amazon S3 bucket.</p> </li> <li> <p> <code>bucketName</code> - The name of the S3 bucket to use.</p> </li> <li> <p> <code>compressionType</code> - An optional parameter to use GZIP to compress the target files. To use GZIP, set this value to <code>NONE</code> (the default). To keep the files uncompressed, don't use this value.</p> </li> </ul> <p>Shorthand syntax for these attributes is as follows: <code>ServiceAccessRoleArn=string,BucketName=string,CompressionType=string</code> </p> <p>JSON syntax for these attributes is as follows: <code>{ "ServiceAccessRoleArn": "string", "BucketName": "string", "CompressionType": "none"|"gzip" } </code> </p>
   */
  DmsTransferSettings?: _DmsTransferSettings;

  /**
   * <p>The settings for the MongoDB source endpoint. For more information, see the <code>MongoDbSettings</code> structure.</p>
   */
  MongoDbSettings?: _MongoDbSettings;

  /**
   * <p>The settings for the Amazon Kinesis source endpoint. For more information, see the <code>KinesisSettings</code> structure.</p>
   */
  KinesisSettings?: _KinesisSettings;

  /**
   * <p>The settings for the Elasticsearch source endpoint. For more information, see the <code>ElasticsearchSettings</code> structure.</p>
   */
  ElasticsearchSettings?: _ElasticsearchSettings;

  /**
   * <p>Settings for the Amazon Redshift endpoint.</p>
   */
  RedshiftSettings?: _RedshiftSettings;
}

export interface _UnmarshalledEndpoint extends _Endpoint {
  /**
   * <p>The settings for the target DynamoDB database. For more information, see the <code>DynamoDBSettings</code> structure.</p>
   */
  DynamoDbSettings?: _UnmarshalledDynamoDbSettings;

  /**
   * <p>The settings for the S3 target endpoint. For more information, see the <code>S3Settings</code> structure.</p>
   */
  S3Settings?: _UnmarshalledS3Settings;

  /**
   * <p>The settings in JSON format for the DMS transfer type of source endpoint. </p> <p>Possible attributes include the following:</p> <ul> <li> <p> <code>serviceAccessRoleArn</code> - The IAM role that has permission to access the Amazon S3 bucket.</p> </li> <li> <p> <code>bucketName</code> - The name of the S3 bucket to use.</p> </li> <li> <p> <code>compressionType</code> - An optional parameter to use GZIP to compress the target files. To use GZIP, set this value to <code>NONE</code> (the default). To keep the files uncompressed, don't use this value.</p> </li> </ul> <p>Shorthand syntax for these attributes is as follows: <code>ServiceAccessRoleArn=string,BucketName=string,CompressionType=string</code> </p> <p>JSON syntax for these attributes is as follows: <code>{ "ServiceAccessRoleArn": "string", "BucketName": "string", "CompressionType": "none"|"gzip" } </code> </p>
   */
  DmsTransferSettings?: _UnmarshalledDmsTransferSettings;

  /**
   * <p>The settings for the MongoDB source endpoint. For more information, see the <code>MongoDbSettings</code> structure.</p>
   */
  MongoDbSettings?: _UnmarshalledMongoDbSettings;

  /**
   * <p>The settings for the Amazon Kinesis source endpoint. For more information, see the <code>KinesisSettings</code> structure.</p>
   */
  KinesisSettings?: _UnmarshalledKinesisSettings;

  /**
   * <p>The settings for the Elasticsearch source endpoint. For more information, see the <code>ElasticsearchSettings</code> structure.</p>
   */
  ElasticsearchSettings?: _UnmarshalledElasticsearchSettings;

  /**
   * <p>Settings for the Amazon Redshift endpoint.</p>
   */
  RedshiftSettings?: _UnmarshalledRedshiftSettings;
}
