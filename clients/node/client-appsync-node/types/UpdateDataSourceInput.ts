import { _DynamodbDataSourceConfig } from "./_DynamodbDataSourceConfig";
import { _LambdaDataSourceConfig } from "./_LambdaDataSourceConfig";
import { _ElasticsearchDataSourceConfig } from "./_ElasticsearchDataSourceConfig";
import { _HttpDataSourceConfig } from "./_HttpDataSourceConfig";
import { _RelationalDatabaseDataSourceConfig } from "./_RelationalDatabaseDataSourceConfig";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateDataSourceInput shape
 */
export interface UpdateDataSourceInput {
  /**
   * <p>The API ID.</p>
   */
  apiId: string;

  /**
   * <p>The new name for the data source.</p>
   */
  name: string;

  /**
   * <p>The new description for the data source.</p>
   */
  description?: string;

  /**
   * <p>The new data source type.</p>
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
   * <p>The new service role ARN for the data source.</p>
   */
  serviceRoleArn?: string;

  /**
   * <p>The new Amazon DynamoDB configuration.</p>
   */
  dynamodbConfig?: _DynamodbDataSourceConfig;

  /**
   * <p>The new AWS Lambda configuration.</p>
   */
  lambdaConfig?: _LambdaDataSourceConfig;

  /**
   * <p>The new Elasticsearch Service configuration.</p>
   */
  elasticsearchConfig?: _ElasticsearchDataSourceConfig;

  /**
   * <p>The new HTTP endpoint configuration.</p>
   */
  httpConfig?: _HttpDataSourceConfig;

  /**
   * <p>The new relational database configuration.</p>
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
