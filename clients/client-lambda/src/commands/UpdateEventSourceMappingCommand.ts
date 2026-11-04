// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { EventSourceMappingConfiguration, UpdateEventSourceMappingRequest } from "../models/models_0";
import { UpdateEventSourceMapping$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateEventSourceMappingCommand}.
 */
export interface UpdateEventSourceMappingCommandInput extends UpdateEventSourceMappingRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEventSourceMappingCommand}.
 */
export interface UpdateEventSourceMappingCommandOutput extends EventSourceMappingConfiguration, __MetadataBearer {}

/**
 * Updates an event source mapping. You can change the function that Lambda invokes, or pause invocation and resume later from the same location.
 *
 * For details about how to configure different event sources, see the following topics.
 *
 * - [Amazon DynamoDB Streams](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-dynamodb-eventsourcemapping)
 * - [Amazon Kinesis](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-eventsourcemapping)
 * - [Amazon SQS](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-eventsource)
 * - [Amazon MQ and RabbitMQ](https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-eventsourcemapping)
 * - [Amazon MSK](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html)
 * - [Apache Kafka](https://docs.aws.amazon.com/lambda/latest/dg/kafka-smaa.html)
 * - [Amazon DocumentDB](https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html)
 *
 * The following error handling options are available for stream sources (DynamoDB, Kinesis, Amazon MSK, and self-managed Apache Kafka):
 *
 * - `BisectBatchOnFunctionError` – If the function returns an error, split the batch in two and retry.
 * - `MaximumRecordAgeInSeconds` – Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires
 * - `MaximumRetryAttempts` – Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.
 * - `OnFailure` – Send discarded records to an Amazon SQS queue, Amazon SNS topic, Kafka topic, or Amazon S3 bucket. For more information, see [Adding a destination](https://docs.aws.amazon.com/lambda/latest/dg/invocation-async-retain-records.html#invocation-async-destinations).
 *
 * The following option is available only for DynamoDB and Kinesis event sources:
 *
 * - `ParallelizationFactor` – Process multiple batches from each shard concurrently.
 *
 * For information about which configuration parameters apply to each event source, see the following topics.
 *
 * - [Amazon DynamoDB Streams](https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-ddb-params)
 * - [Amazon Kinesis](https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-params)
 * - [Amazon SQS](https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#services-sqs-params)
 * - [Amazon MQ and RabbitMQ](https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-params)
 * - [Amazon MSK](https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-parms)
 * - [Apache Kafka](https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-kafka-parms)
 * - [Amazon DocumentDB](https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html#docdb-configuration)
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, UpdateEventSourceMappingCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, UpdateEventSourceMappingCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * // import type { LambdaClientConfig } from "@aws-sdk/client-lambda";
 * const config = {}; // type is LambdaClientConfig
 * const client = new LambdaClient(config);
 * const input = { // UpdateEventSourceMappingRequest
 *   UUID: "STRING_VALUE", // required
 *   FunctionName: "STRING_VALUE",
 *   Enabled: true || false,
 *   BatchSize: Number("int"),
 *   FilterCriteria: { // FilterCriteria
 *     Filters: [ // FilterList
 *       { // Filter
 *         Pattern: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   KMSKeyArn: "STRING_VALUE",
 *   MetricsConfig: { // EventSourceMappingMetricsConfig
 *     Metrics: [ // EventSourceMappingMetricList
 *       "EventCount" || "ErrorCount" || "KafkaMetrics",
 *     ],
 *   },
 *   LoggingConfig: { // EventSourceMappingLoggingConfig
 *     SystemLogLevel: "DEBUG" || "INFO" || "WARN",
 *   },
 *   ScalingConfig: { // ScalingConfig
 *     MaximumConcurrency: Number("int"),
 *   },
 *   MaximumBatchingWindowInSeconds: Number("int"),
 *   ParallelizationFactor: Number("int"),
 *   DestinationConfig: { // DestinationConfig
 *     OnSuccess: { // OnSuccess
 *       Destination: "STRING_VALUE",
 *     },
 *     OnFailure: { // OnFailure
 *       Destination: "STRING_VALUE",
 *     },
 *   },
 *   MaximumRecordAgeInSeconds: Number("int"),
 *   BisectBatchOnFunctionError: true || false,
 *   MaximumRetryAttempts: Number("int"),
 *   TumblingWindowInSeconds: Number("int"),
 *   SourceAccessConfigurations: [ // SourceAccessConfigurations
 *     { // SourceAccessConfiguration
 *       Type: "BASIC_AUTH" || "VPC_SUBNET" || "VPC_SECURITY_GROUP" || "SASL_SCRAM_512_AUTH" || "SASL_SCRAM_256_AUTH" || "VIRTUAL_HOST" || "CLIENT_CERTIFICATE_TLS_AUTH" || "SERVER_ROOT_CA_CERTIFICATE" || "OAUTHBEARER_AUTH" || "OAUTHBEARER_SCOPE" || "OAUTHBEARER_AUDIENCE" || "OAUTHBEARER_LOGICAL_CLUSTER" || "OAUTHBEARER_IDENTITY_POOL" || "IAM_AUTH" || "IAM_OAUTHBEARER_AUTH",
 *       URI: "STRING_VALUE",
 *     },
 *   ],
 *   FunctionResponseTypes: [ // FunctionResponseTypeList
 *     "ReportBatchItemFailures",
 *   ],
 *   AmazonManagedKafkaEventSourceConfig: { // AmazonManagedKafkaEventSourceConfig
 *     ConsumerGroupId: "STRING_VALUE",
 *     SchemaRegistryConfig: { // KafkaSchemaRegistryConfig
 *       SchemaRegistryURI: "STRING_VALUE",
 *       EventRecordFormat: "JSON" || "SOURCE",
 *       AccessConfigs: [ // KafkaSchemaRegistryAccessConfigList
 *         { // KafkaSchemaRegistryAccessConfig
 *           Type: "BASIC_AUTH" || "CLIENT_CERTIFICATE_TLS_AUTH" || "SERVER_ROOT_CA_CERTIFICATE" || "OAUTHBEARER_AUTH",
 *           URI: "STRING_VALUE",
 *         },
 *       ],
 *       SchemaValidationConfigs: [ // KafkaSchemaValidationConfigList
 *         { // KafkaSchemaValidationConfig
 *           Attribute: "KEY" || "VALUE",
 *         },
 *       ],
 *     },
 *   },
 *   SelfManagedKafkaEventSourceConfig: { // SelfManagedKafkaEventSourceConfig
 *     ConsumerGroupId: "STRING_VALUE",
 *     SchemaRegistryConfig: {
 *       SchemaRegistryURI: "STRING_VALUE",
 *       EventRecordFormat: "JSON" || "SOURCE",
 *       AccessConfigs: [
 *         {
 *           Type: "BASIC_AUTH" || "CLIENT_CERTIFICATE_TLS_AUTH" || "SERVER_ROOT_CA_CERTIFICATE" || "OAUTHBEARER_AUTH",
 *           URI: "STRING_VALUE",
 *         },
 *       ],
 *       SchemaValidationConfigs: [
 *         {
 *           Attribute: "KEY" || "VALUE",
 *         },
 *       ],
 *     },
 *     ConsumptionMode: "Stream" || "Queue",
 *   },
 *   DocumentDBEventSourceConfig: { // DocumentDBEventSourceConfig
 *     DatabaseName: "STRING_VALUE",
 *     CollectionName: "STRING_VALUE",
 *     FullDocument: "UpdateLookup" || "Default",
 *   },
 *   ProvisionedPollerConfig: { // ProvisionedPollerConfig
 *     MinimumPollers: Number("int"),
 *     MaximumPollers: Number("int"),
 *     PollerGroupName: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateEventSourceMappingCommand(input);
 * const response = await client.send(command);
 * // { // EventSourceMappingConfiguration
 * //   UUID: "STRING_VALUE",
 * //   StartingPosition: "TRIM_HORIZON" || "LATEST" || "AT_TIMESTAMP",
 * //   StartingPositionTimestamp: new Date("TIMESTAMP"),
 * //   BatchSize: Number("int"),
 * //   MaximumBatchingWindowInSeconds: Number("int"),
 * //   ParallelizationFactor: Number("int"),
 * //   EventSourceArn: "STRING_VALUE",
 * //   FilterCriteria: { // FilterCriteria
 * //     Filters: [ // FilterList
 * //       { // Filter
 * //         Pattern: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   FilterCriteriaError: { // FilterCriteriaError
 * //     ErrorCode: "STRING_VALUE",
 * //     Message: "STRING_VALUE",
 * //   },
 * //   KMSKeyArn: "STRING_VALUE",
 * //   MetricsConfig: { // EventSourceMappingMetricsConfig
 * //     Metrics: [ // EventSourceMappingMetricList
 * //       "EventCount" || "ErrorCount" || "KafkaMetrics",
 * //     ],
 * //   },
 * //   LoggingConfig: { // EventSourceMappingLoggingConfig
 * //     SystemLogLevel: "DEBUG" || "INFO" || "WARN",
 * //   },
 * //   ScalingConfig: { // ScalingConfig
 * //     MaximumConcurrency: Number("int"),
 * //   },
 * //   FunctionArn: "STRING_VALUE",
 * //   LastModified: new Date("TIMESTAMP"),
 * //   LastProcessingResult: "STRING_VALUE",
 * //   State: "STRING_VALUE",
 * //   StateTransitionReason: "STRING_VALUE",
 * //   DestinationConfig: { // DestinationConfig
 * //     OnSuccess: { // OnSuccess
 * //       Destination: "STRING_VALUE",
 * //     },
 * //     OnFailure: { // OnFailure
 * //       Destination: "STRING_VALUE",
 * //     },
 * //   },
 * //   Topics: [ // Topics
 * //     "STRING_VALUE",
 * //   ],
 * //   Queues: [ // Queues
 * //     "STRING_VALUE",
 * //   ],
 * //   SourceAccessConfigurations: [ // SourceAccessConfigurations
 * //     { // SourceAccessConfiguration
 * //       Type: "BASIC_AUTH" || "VPC_SUBNET" || "VPC_SECURITY_GROUP" || "SASL_SCRAM_512_AUTH" || "SASL_SCRAM_256_AUTH" || "VIRTUAL_HOST" || "CLIENT_CERTIFICATE_TLS_AUTH" || "SERVER_ROOT_CA_CERTIFICATE" || "OAUTHBEARER_AUTH" || "OAUTHBEARER_SCOPE" || "OAUTHBEARER_AUDIENCE" || "OAUTHBEARER_LOGICAL_CLUSTER" || "OAUTHBEARER_IDENTITY_POOL" || "IAM_AUTH" || "IAM_OAUTHBEARER_AUTH",
 * //       URI: "STRING_VALUE",
 * //     },
 * //   ],
 * //   SelfManagedEventSource: { // SelfManagedEventSource
 * //     Endpoints: { // Endpoints
 * //       "<keys>": [ // EndpointLists
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * //   MaximumRecordAgeInSeconds: Number("int"),
 * //   BisectBatchOnFunctionError: true || false,
 * //   MaximumRetryAttempts: Number("int"),
 * //   TumblingWindowInSeconds: Number("int"),
 * //   FunctionResponseTypes: [ // FunctionResponseTypeList
 * //     "ReportBatchItemFailures",
 * //   ],
 * //   AmazonManagedKafkaEventSourceConfig: { // AmazonManagedKafkaEventSourceConfig
 * //     ConsumerGroupId: "STRING_VALUE",
 * //     SchemaRegistryConfig: { // KafkaSchemaRegistryConfig
 * //       SchemaRegistryURI: "STRING_VALUE",
 * //       EventRecordFormat: "JSON" || "SOURCE",
 * //       AccessConfigs: [ // KafkaSchemaRegistryAccessConfigList
 * //         { // KafkaSchemaRegistryAccessConfig
 * //           Type: "BASIC_AUTH" || "CLIENT_CERTIFICATE_TLS_AUTH" || "SERVER_ROOT_CA_CERTIFICATE" || "OAUTHBEARER_AUTH",
 * //           URI: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SchemaValidationConfigs: [ // KafkaSchemaValidationConfigList
 * //         { // KafkaSchemaValidationConfig
 * //           Attribute: "KEY" || "VALUE",
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   SelfManagedKafkaEventSourceConfig: { // SelfManagedKafkaEventSourceConfig
 * //     ConsumerGroupId: "STRING_VALUE",
 * //     SchemaRegistryConfig: {
 * //       SchemaRegistryURI: "STRING_VALUE",
 * //       EventRecordFormat: "JSON" || "SOURCE",
 * //       AccessConfigs: [
 * //         {
 * //           Type: "BASIC_AUTH" || "CLIENT_CERTIFICATE_TLS_AUTH" || "SERVER_ROOT_CA_CERTIFICATE" || "OAUTHBEARER_AUTH",
 * //           URI: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SchemaValidationConfigs: [
 * //         {
 * //           Attribute: "KEY" || "VALUE",
 * //         },
 * //       ],
 * //     },
 * //     ConsumptionMode: "Stream" || "Queue",
 * //   },
 * //   DocumentDBEventSourceConfig: { // DocumentDBEventSourceConfig
 * //     DatabaseName: "STRING_VALUE",
 * //     CollectionName: "STRING_VALUE",
 * //     FullDocument: "UpdateLookup" || "Default",
 * //   },
 * //   EventSourceMappingArn: "STRING_VALUE",
 * //   ProvisionedPollerConfig: { // ProvisionedPollerConfig
 * //     MinimumPollers: Number("int"),
 * //     MaximumPollers: Number("int"),
 * //     PollerGroupName: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateEventSourceMappingCommandInput - {@link UpdateEventSourceMappingCommandInput}
 * @returns {@link UpdateEventSourceMappingCommandOutput}
 * @see {@link UpdateEventSourceMappingCommandInput} for command's `input` shape.
 * @see {@link UpdateEventSourceMappingCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * One of the parameters in the request is not valid.
 *
 * @throws {@link ResourceConflictException} (client fault)
 *
 * The resource already exists, or another operation is in progress.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The operation conflicts with the resource's availability. For example, you tried to update an event source mapping in the CREATING state, or you tried to delete an event source mapping currently UPDATING.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource specified in the request does not exist.
 *
 * @throws {@link ServiceException} (server fault)
 *
 * The Lambda service encountered an internal error.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request throughput limit was exceeded. For more information, see [Lambda quotas](https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests).
 *
 * @throws {@link LambdaServiceException}
 *
 * Base exception class for all service exceptions from Lambda service.
 *
 * @example To update a Lambda function event source mapping
 * ```javascript
 * // This operation updates a Lambda function event source mapping
 * const input = {
 *   BatchSize: 123,
 *   Enabled: true,
 *   FunctionName: "myFunction",
 *   UUID: "a1b2c3d4-5678-90ab-cdef-11111EXAMPLE"
 * };
 * const command = new UpdateEventSourceMappingCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   BatchSize: 123,
 *   EventSourceArn: "arn:aws:s3:::examplebucket/*",
 *   FunctionArn: "arn:aws:lambda:us-west-2:123456789012:function:myFunction",
 *   LastModified: "2016-11-21T19:49:20.006Z",
 *   LastProcessingResult: "",
 *   State: "",
 *   StateTransitionReason: "",
 *   UUID: "a1b2c3d4-5678-90ab-cdef-11111EXAMPLE"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateEventSourceMappingCommand extends command<UpdateEventSourceMappingCommandInput, UpdateEventSourceMappingCommandOutput>(
  _ep0,
  _mw0,
  "UpdateEventSourceMapping",
  UpdateEventSourceMapping$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEventSourceMappingRequest;
      output: EventSourceMappingConfiguration;
    };
    sdk: {
      input: UpdateEventSourceMappingCommandInput;
      output: UpdateEventSourceMappingCommandOutput;
    };
  };
}
