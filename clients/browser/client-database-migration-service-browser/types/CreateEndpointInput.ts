import { _Tag } from "./_Tag";
import { _DynamoDbSettings } from "./_DynamoDbSettings";
import { _S3Settings } from "./_S3Settings";
import { _DmsTransferSettings } from "./_DmsTransferSettings";
import { _MongoDbSettings } from "./_MongoDbSettings";
import { _KinesisSettings } from "./_KinesisSettings";
import { _ElasticsearchSettings } from "./_ElasticsearchSettings";
import { _RedshiftSettings } from "./_RedshiftSettings";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p/>
 */
export interface CreateEndpointInput {
  /**
   * <p>The database endpoint identifier. Identifiers must begin with a letter; must contain only ASCII letters, digits, and hyphens; and must not end with a hyphen or contain two consecutive hyphens.</p>
   */
  EndpointIdentifier: string;

  /**
   * <p>The type of endpoint. Valid values are <code>source</code> and <code>target</code>.</p>
   */
  EndpointType: "source" | "target" | string;

  /**
   * <p>The type of engine for the endpoint. Valid values, depending on the <code>EndpointType</code> value, include <code>mysql</code>, <code>oracle</code>, <code>postgres</code>, <code>mariadb</code>, <code>aurora</code>, <code>aurora-postgresql</code>, <code>redshift</code>, <code>s3</code>, <code>db2</code>, <code>azuredb</code>, <code>sybase</code>, <code>dynamodb</code>, <code>mongodb</code>, and <code>sqlserver</code>.</p>
   */
  EngineName: string;

  /**
   * <p>The user name to be used to log in to the endpoint database.</p>
   */
  Username?: string;

  /**
   * <p>The password to be used to log in to the endpoint database.</p>
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
   * <p>Additional attributes associated with the connection. Each attribute is specified as a name-value pair associated by an equal sign (=). Multiple attributes are separated by a semicolon (;) with no additional white space. For information on the attributes available for connecting your source or target endpoint, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Endpoints.html">Working with AWS DMS Endpoints</a> in the <i>AWS Database Migration Service User Guide.</i> </p>
   */
  ExtraConnectionAttributes?: string;

  /**
   * <p>An AWS KMS key identifier that is used to encrypt the connection parameters for the endpoint.</p> <p>If you don't specify a value for the <code>KmsKeyId</code> parameter, then AWS DMS uses your default encryption key.</p> <p>AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.</p>
   */
  KmsKeyId?: string;

  /**
   * <p>One or more tags to be assigned to the endpoint.</p>
   */
  Tags?: Array<_Tag> | Iterable<_Tag>;

  /**
   * <p>The Amazon Resource Name (ARN) for the certificate.</p>
   */
  CertificateArn?: string;

  /**
   * <p>The Secure Sockets Layer (SSL) mode to use for the SSL connection. The default is <code>none</code> </p>
   */
  SslMode?: "none" | "require" | "verify-ca" | "verify-full" | string;

  /**
   * <p> The Amazon Resource Name (ARN) for the service access role that you want to use to create the endpoint. </p>
   */
  ServiceAccessRoleArn?: string;

  /**
   * <p>The external table definition. </p>
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
   * <p>The settings in JSON format for the DMS transfer type of source endpoint. </p> <p>Possible attributes include the following:</p> <ul> <li> <p> <code>serviceAccessRoleArn</code> - The IAM role that has permission to access the Amazon S3 bucket.</p> </li> <li> <p> <code>bucketName</code> - The name of the S3 bucket to use.</p> </li> <li> <p> <code>compressionType</code> - An optional parameter to use GZIP to compress the target files. To use GZIP, set this value to <code>NONE</code> (the default). To keep the files uncompressed, don't use this value.</p> </li> </ul> <p>Shorthand syntax for these attributes is as follows: <code>ServiceAccessRoleArn=string,BucketName=string,CompressionType=string</code> </p> <p>JSON syntax for these attributes is as follows: <code>{ "ServiceAccessRoleArn": "string", "BucketName": "string", "CompressionType": "none"|"gzip" } </code> </p>
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
