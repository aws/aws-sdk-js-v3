import { _DynamodbDataSourceConfig } from "./_DynamodbDataSourceConfig";
import { _LambdaDataSourceConfig } from "./_LambdaDataSourceConfig";
import { _ElasticsearchDataSourceConfig } from "./_ElasticsearchDataSourceConfig";
import { _HttpDataSourceConfig } from "./_HttpDataSourceConfig";
import { _RelationalDatabaseDataSourceConfig } from "./_RelationalDatabaseDataSourceConfig";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateDataSourceInput shape
 */
export interface CreateDataSourceInput {
  /**
   * <p>The API ID for the GraphQL API for the <code>DataSource</code>.</p>
   */
  apiId: string;

  /**
   * <p>A user-supplied name for the <code>DataSource</code>.</p>
   */
  name: string;

  /**
   * <p>A description of the <code>DataSource</code>.</p>
   */
  description?: string;

  /**
   * <p>The type of the <code>DataSource</code>.</p>
   */
  type:
    | "AWS_LAMBDA"
    | "AMAZON_DYNAMODB"
    | "AMAZON_ELASTICSEARCH"
    | "NONE"
    | "HTTP"
    | "RELATIONAL_DATABASE"
    | string;

  /**
   * <p>The AWS IAM service role ARN for the data source. The system assumes this role when accessing the data source.</p>
   */
  serviceRoleArn?: string;

  /**
   * <p>Amazon DynamoDB settings.</p>
   */
  dynamodbConfig?: _DynamodbDataSourceConfig;

  /**
   * <p>AWS Lambda settings.</p>
   */
  lambdaConfig?: _LambdaDataSourceConfig;

  /**
   * <p>Amazon Elasticsearch Service settings.</p>
   */
  elasticsearchConfig?: _ElasticsearchDataSourceConfig;

  /**
   * <p>HTTP endpoint settings.</p>
   */
  httpConfig?: _HttpDataSourceConfig;

  /**
   * <p>Relational database settings.</p>
   */
  relationalDatabaseConfig?: _RelationalDatabaseDataSourceConfig;

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
