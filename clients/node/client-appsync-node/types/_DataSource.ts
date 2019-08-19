import {
  _DynamodbDataSourceConfig,
  _UnmarshalledDynamodbDataSourceConfig
} from "./_DynamodbDataSourceConfig";
import {
  _LambdaDataSourceConfig,
  _UnmarshalledLambdaDataSourceConfig
} from "./_LambdaDataSourceConfig";
import {
  _ElasticsearchDataSourceConfig,
  _UnmarshalledElasticsearchDataSourceConfig
} from "./_ElasticsearchDataSourceConfig";
import {
  _HttpDataSourceConfig,
  _UnmarshalledHttpDataSourceConfig
} from "./_HttpDataSourceConfig";
import {
  _RelationalDatabaseDataSourceConfig,
  _UnmarshalledRelationalDatabaseDataSourceConfig
} from "./_RelationalDatabaseDataSourceConfig";

/**
 * <p>Describes a data source.</p>
 */
export interface _DataSource {
  /**
   * <p>The data source ARN.</p>
   */
  dataSourceArn?: string;

  /**
   * <p>The name of the data source.</p>
   */
  name?: string;

  /**
   * <p>The description of the data source.</p>
   */
  description?: string;

  /**
   * <p>The type of the data source.</p> <ul> <li> <p> <b>AMAZON_DYNAMODB</b>: The data source is an Amazon DynamoDB table.</p> </li> <li> <p> <b>AMAZON_ELASTICSEARCH</b>: The data source is an Amazon Elasticsearch Service domain.</p> </li> <li> <p> <b>AWS_LAMBDA</b>: The data source is an AWS Lambda function.</p> </li> <li> <p> <b>NONE</b>: There is no data source. This type is used when you wish to invoke a GraphQL operation without connecting to a data source, such as performing data transformation with resolvers or triggering a subscription to be invoked from a mutation.</p> </li> <li> <p> <b>HTTP</b>: The data source is an HTTP endpoint.</p> </li> <li> <p> <b>RELATIONAL_DATABASE</b>: The data source is a relational database.</p> </li> </ul>
   */
  type?:
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
}

export interface _UnmarshalledDataSource extends _DataSource {
  /**
   * <p>Amazon DynamoDB settings.</p>
   */
  dynamodbConfig?: _UnmarshalledDynamodbDataSourceConfig;

  /**
   * <p>AWS Lambda settings.</p>
   */
  lambdaConfig?: _UnmarshalledLambdaDataSourceConfig;

  /**
   * <p>Amazon Elasticsearch Service settings.</p>
   */
  elasticsearchConfig?: _UnmarshalledElasticsearchDataSourceConfig;

  /**
   * <p>HTTP endpoint settings.</p>
   */
  httpConfig?: _UnmarshalledHttpDataSourceConfig;

  /**
   * <p>Relational database settings.</p>
   */
  relationalDatabaseConfig?: _UnmarshalledRelationalDatabaseDataSourceConfig;
}
