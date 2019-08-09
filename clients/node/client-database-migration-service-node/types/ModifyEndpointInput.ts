import { _DynamoDbSettings } from "./_DynamoDbSettings";
import { _S3Settings } from "./_S3Settings";
import { _DmsTransferSettings } from "./_DmsTransferSettings";
import { _MongoDbSettings } from "./_MongoDbSettings";
import { _KinesisSettings } from "./_KinesisSettings";
import { _ElasticsearchSettings } from "./_ElasticsearchSettings";
import { _RedshiftSettings } from "./_RedshiftSettings";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface ModifyEndpointInput {
  /**
   * <p>The Amazon Resource Name (ARN) string that uniquely identifies the endpoint.</p>
   */
  EndpointArn: string;

  /**
   * <p>The database endpoint identifier. Identifiers must begin with a letter; must contain only ASCII letters, digits, and hyphens; and must not end with a hyphen or contain two consecutive hyphens.</p>
   */
  EndpointIdentifier?: string;

  /**
   * <p>The type of endpoint. Valid values are <code>source</code> and <code>target</code>.</p>
   */
  EndpointType?: "source" | "target" | string;

  /**
   * <p>The type of engine for the endpoint. Valid values, depending on the EndpointType, include mysql, oracle, postgres, mariadb, aurora, aurora-postgresql, redshift, s3, db2, azuredb, sybase, dynamodb, mongodb, and sqlserver.</p>
   */
  EngineName?: string;

  /**
   * <p>The user name to be used to login to the endpoint database.</p>
   */
  Username?: string;

  /**
   * <p>The password to be used to login to the endpoint database.</p>
   */
  Password?: string;

  /**
   * <p>The name of the server where the endpoint database resides.</p>
   */
  ServerName?: string;

  /**
   * <p>The port used by the endpoint database.</p>
   */
  Port?: number;

  /**
   * <p>The name of the endpoint database.</p>
   */
  DatabaseName?: string;

  /**
   * <p>Additional attributes associated with the connection. To reset this parameter, pass the empty string ("") as an argument.</p>
   */
  ExtraConnectionAttributes?: string;

  /**
   * <p>The Amazon Resource Name (ARN) of the certificate used for SSL connection.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The SSL mode used to connect to the endpoint. The default value is <code>none</code>.</p>
   */
  SslMode?: "none" | "require" | "verify-ca" | "verify-full" | string;

  /**
   * <p> The Amazon Resource Name (ARN) for the service access role you want to use to modify the endpoint. </p>
   */
  ServiceAccessRoleArn?: string;

  /**
   * <p>The external table definition.</p>
   */
  ExternalTableDefinition?: string;

  /**
   * <p>Settings in JSON format for the target Amazon DynamoDB endpoint. For more information about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.DynamoDB.html">Using Object Mapping to Migrate Data to DynamoDB</a> in the <i>AWS Database Migration Service User Guide.</i> </p>
   */
  DynamoDbSettings?: _DynamoDbSettings;

  /**
   * <p>Settings in JSON format for the target Amazon S3 endpoint. For more information about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.S3.html#CHAP_Target.S3.Configuring">Extra Connection Attributes When Using Amazon S3 as a Target for AWS DMS</a> in the <i>AWS Database Migration Service User Guide.</i> </p>
   */
  S3Settings?: _S3Settings;

  /**
   * <p>The settings in JSON format for the DMS transfer type of source endpoint. </p> <p>Attributes include the following:</p> <ul> <li> <p>serviceAccessRoleArn - The IAM role that has permission to access the Amazon S3 bucket.</p> </li> <li> <p>BucketName - The name of the S3 bucket to use.</p> </li> <li> <p>compressionType - An optional parameter to use GZIP to compress the target files. Set to NONE (the default) or do not use to leave the files uncompressed.</p> </li> </ul> <p>Shorthand syntax: ServiceAccessRoleArn=string ,BucketName=string,CompressionType=string</p> <p>JSON syntax:</p> <p> { "ServiceAccessRoleArn": "string", "BucketName": "string", "CompressionType": "none"|"gzip" } </p>
   */
  DmsTransferSettings?: _DmsTransferSettings;

  /**
   * <p>Settings in JSON format for the source MongoDB endpoint. For more information about the available settings, see the configuration properties section in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Source.MongoDB.html"> Using MongoDB as a Target for AWS Database Migration Service</a> in the <i>AWS Database Migration Service User Guide.</i> </p>
   */
  MongoDbSettings?: _MongoDbSettings;

  /**
   * <p>Settings in JSON format for the target Amazon Kinesis Data Streams endpoint. For more information about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Kinesis.html#CHAP_Target.Kinesis.ObjectMapping">Using Object Mapping to Migrate Data to a Kinesis Data Stream</a> in the <i>AWS Database Migration User Guide.</i> </p>
   */
  KinesisSettings?: _KinesisSettings;

  /**
   * <p>Settings in JSON format for the target Elasticsearch endpoint. For more information about the available settings, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Target.Elasticsearch.html#CHAP_Target.Elasticsearch.Configuration">Extra Connection Attributes When Using Elasticsearch as a Target for AWS DMS</a> in the <i>AWS Database Migration User Guide.</i> </p>
   */
  ElasticsearchSettings?: _ElasticsearchSettings;

  /**
   * <p/>
   */
  RedshiftSettings?: _RedshiftSettings;

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
