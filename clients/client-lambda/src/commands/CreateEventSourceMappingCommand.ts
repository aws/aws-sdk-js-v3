// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { CreateEventSourceMappingRequest, EventSourceMappingConfiguration } from "../models/models_0";
import { de_CreateEventSourceMappingCommand, se_CreateEventSourceMappingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEventSourceMappingCommand}.
 */
export interface CreateEventSourceMappingCommandInput extends CreateEventSourceMappingRequest {}
/**
 * @public
 *
 * The output of {@link CreateEventSourceMappingCommand}.
 */
export interface CreateEventSourceMappingCommandOutput extends EventSourceMappingConfiguration, __MetadataBearer {}

/**
 * <p>Creates a mapping between an event source and an Lambda function. Lambda reads items from the event source and invokes the function.</p>
 *          <p>For details about how to configure different event sources, see the following topics. </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-dynamodb-eventsourcemapping">
 *             Amazon DynamoDB Streams</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-eventsourcemapping">
 *             Amazon Kinesis</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#events-sqs-eventsource">
 *             Amazon SQS</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-eventsourcemapping">
 *             Amazon MQ and RabbitMQ</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html">
 *             Amazon MSK</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/kafka-smaa.html">
 *             Apache Kafka</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html">
 *             Amazon DocumentDB</a>
 *                </p>
 *             </li>
 *          </ul>
 *          <p>The following error handling options are available only for stream sources (DynamoDB and Kinesis):</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>BisectBatchOnFunctionError</code> – If the function returns an error, split the batch in two and retry.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>DestinationConfig</code> – Send discarded records to an Amazon SQS queue or Amazon SNS topic.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>MaximumRecordAgeInSeconds</code> – Discard records older than the specified age. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>MaximumRetryAttempts</code> – Discard records after the specified number of retries. The default value is infinite (-1). When set to infinite (-1), failed records are retried until the record expires.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ParallelizationFactor</code> – Process multiple batches from each shard concurrently.</p>
 *             </li>
 *          </ul>
 *          <p>For information about which configuration parameters apply to each event source, see the following topics.</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-ddb.html#services-ddb-params">
 *           Amazon DynamoDB Streams</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kinesis.html#services-kinesis-params">
 *           Amazon Kinesis</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-sqs.html#services-sqs-params">
 *           Amazon SQS</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-mq.html#services-mq-params">
 *           Amazon MQ and RabbitMQ</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-msk.html#services-msk-parms">
 *           Amazon MSK</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-kafka.html#services-kafka-parms">
 *           Apache Kafka</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/lambda/latest/dg/with-documentdb.html#docdb-configuration">
 *           Amazon DocumentDB</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, CreateEventSourceMappingCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, CreateEventSourceMappingCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // CreateEventSourceMappingRequest
 *   EventSourceArn: "STRING_VALUE",
 *   FunctionName: "STRING_VALUE", // required
 *   Enabled: true || false,
 *   BatchSize: Number("int"),
 *   FilterCriteria: { // FilterCriteria
 *     Filters: [ // FilterList
 *       { // Filter
 *         Pattern: "STRING_VALUE",
 *       },
 *     ],
 *   },
 *   MaximumBatchingWindowInSeconds: Number("int"),
 *   ParallelizationFactor: Number("int"),
 *   StartingPosition: "TRIM_HORIZON" || "LATEST" || "AT_TIMESTAMP",
 *   StartingPositionTimestamp: new Date("TIMESTAMP"),
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
 *   Topics: [ // Topics
 *     "STRING_VALUE",
 *   ],
 *   Queues: [ // Queues
 *     "STRING_VALUE",
 *   ],
 *   SourceAccessConfigurations: [ // SourceAccessConfigurations
 *     { // SourceAccessConfiguration
 *       Type: "BASIC_AUTH" || "VPC_SUBNET" || "VPC_SECURITY_GROUP" || "SASL_SCRAM_512_AUTH" || "SASL_SCRAM_256_AUTH" || "VIRTUAL_HOST" || "CLIENT_CERTIFICATE_TLS_AUTH" || "SERVER_ROOT_CA_CERTIFICATE",
 *       URI: "STRING_VALUE",
 *     },
 *   ],
 *   SelfManagedEventSource: { // SelfManagedEventSource
 *     Endpoints: { // Endpoints
 *       "<keys>": [ // EndpointLists
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   FunctionResponseTypes: [ // FunctionResponseTypeList
 *     "ReportBatchItemFailures",
 *   ],
 *   AmazonManagedKafkaEventSourceConfig: { // AmazonManagedKafkaEventSourceConfig
 *     ConsumerGroupId: "STRING_VALUE",
 *   },
 *   SelfManagedKafkaEventSourceConfig: { // SelfManagedKafkaEventSourceConfig
 *     ConsumerGroupId: "STRING_VALUE",
 *   },
 *   ScalingConfig: { // ScalingConfig
 *     MaximumConcurrency: Number("int"),
 *   },
 *   DocumentDBEventSourceConfig: { // DocumentDBEventSourceConfig
 *     DatabaseName: "STRING_VALUE",
 *     CollectionName: "STRING_VALUE",
 *     FullDocument: "UpdateLookup" || "Default",
 *   },
 * };
 * const command = new CreateEventSourceMappingCommand(input);
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
 * //       Type: "BASIC_AUTH" || "VPC_SUBNET" || "VPC_SECURITY_GROUP" || "SASL_SCRAM_512_AUTH" || "SASL_SCRAM_256_AUTH" || "VIRTUAL_HOST" || "CLIENT_CERTIFICATE_TLS_AUTH" || "SERVER_ROOT_CA_CERTIFICATE",
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
 * //   },
 * //   SelfManagedKafkaEventSourceConfig: { // SelfManagedKafkaEventSourceConfig
 * //     ConsumerGroupId: "STRING_VALUE",
 * //   },
 * //   ScalingConfig: { // ScalingConfig
 * //     MaximumConcurrency: Number("int"),
 * //   },
 * //   DocumentDBEventSourceConfig: { // DocumentDBEventSourceConfig
 * //     DatabaseName: "STRING_VALUE",
 * //     CollectionName: "STRING_VALUE",
 * //     FullDocument: "UpdateLookup" || "Default",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateEventSourceMappingCommandInput - {@link CreateEventSourceMappingCommandInput}
 * @returns {@link CreateEventSourceMappingCommandOutput}
 * @see {@link CreateEventSourceMappingCommandInput} for command's `input` shape.
 * @see {@link CreateEventSourceMappingCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
 *
 * @throws {@link ResourceConflictException} (client fault)
 *  <p>The resource already exists, or another operation is in progress.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the request does not exist.</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>The Lambda service encountered an internal error.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>The request throughput limit was exceeded. For more information, see <a href="https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html#api-requests">Lambda quotas</a>.</p>
 *
 * @throws {@link LambdaServiceException}
 * <p>Base exception class for all service exceptions from Lambda service.</p>
 *
 * @public
 */
export class CreateEventSourceMappingCommand extends $Command
  .classBuilder<
    CreateEventSourceMappingCommandInput,
    CreateEventSourceMappingCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGirApiService", "CreateEventSourceMapping", {})
  .n("LambdaClient", "CreateEventSourceMappingCommand")
  .f(void 0, void 0)
  .ser(se_CreateEventSourceMappingCommand)
  .de(de_CreateEventSourceMappingCommand)
  .build() {}
