// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { EventSourceMappingConfiguration, GetEventSourceMappingRequest } from "../models/models_0";
import { de_GetEventSourceMappingCommand, se_GetEventSourceMappingCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEventSourceMappingCommand}.
 */
export interface GetEventSourceMappingCommandInput extends GetEventSourceMappingRequest {}
/**
 * @public
 *
 * The output of {@link GetEventSourceMappingCommand}.
 */
export interface GetEventSourceMappingCommandOutput extends EventSourceMappingConfiguration, __MetadataBearer {}

/**
 * <p>Returns details about an event source mapping. You can get the identifier of a mapping from the output of <a>ListEventSourceMappings</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, GetEventSourceMappingCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, GetEventSourceMappingCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // GetEventSourceMappingRequest
 *   UUID: "STRING_VALUE", // required
 * };
 * const command = new GetEventSourceMappingCommand(input);
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
 * //     SchemaRegistryConfig: { // KafkaSchemaRegistryConfig
 * //       SchemaRegistryURI: "STRING_VALUE",
 * //       EventRecordFormat: "JSON" || "SOURCE",
 * //       AccessConfigs: [ // KafkaSchemaRegistryAccessConfigList
 * //         { // KafkaSchemaRegistryAccessConfig
 * //           Type: "BASIC_AUTH" || "CLIENT_CERTIFICATE_TLS_AUTH" || "SERVER_ROOT_CA_CERTIFICATE",
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
 * //           Type: "BASIC_AUTH" || "CLIENT_CERTIFICATE_TLS_AUTH" || "SERVER_ROOT_CA_CERTIFICATE",
 * //           URI: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SchemaValidationConfigs: [
 * //         {
 * //           Attribute: "KEY" || "VALUE",
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   ScalingConfig: { // ScalingConfig
 * //     MaximumConcurrency: Number("int"),
 * //   },
 * //   DocumentDBEventSourceConfig: { // DocumentDBEventSourceConfig
 * //     DatabaseName: "STRING_VALUE",
 * //     CollectionName: "STRING_VALUE",
 * //     FullDocument: "UpdateLookup" || "Default",
 * //   },
 * //   KMSKeyArn: "STRING_VALUE",
 * //   FilterCriteriaError: { // FilterCriteriaError
 * //     ErrorCode: "STRING_VALUE",
 * //     Message: "STRING_VALUE",
 * //   },
 * //   EventSourceMappingArn: "STRING_VALUE",
 * //   MetricsConfig: { // EventSourceMappingMetricsConfig
 * //     Metrics: [ // EventSourceMappingMetricList
 * //       "EventCount",
 * //     ],
 * //   },
 * //   ProvisionedPollerConfig: { // ProvisionedPollerConfig
 * //     MinimumPollers: Number("int"),
 * //     MaximumPollers: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEventSourceMappingCommandInput - {@link GetEventSourceMappingCommandInput}
 * @returns {@link GetEventSourceMappingCommandOutput}
 * @see {@link GetEventSourceMappingCommandInput} for command's `input` shape.
 * @see {@link GetEventSourceMappingCommandOutput} for command's `response` shape.
 * @see {@link LambdaClientResolvedConfig | config} for LambdaClient's `config` shape.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>One of the parameters in the request is not valid.</p>
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
 *
 * @example To get a Lambda function's event source mapping
 * ```javascript
 * // The following example returns details about an event source mapping. To get a mapping's UUID, use ListEventSourceMappings.
 * const input = {
 *   UUID: "14e0db71-xmpl-4eb5-b481-8945cf9d10c2"
 * };
 * const command = new GetEventSourceMappingCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   BatchSize: 500,
 *   BisectBatchOnFunctionError: false,
 *   DestinationConfig:   { /* empty *\/ },
 *   EventSourceArn: "arn:aws:sqs:us-east-2:123456789012:mySQSqueue",
 *   FunctionArn: "arn:aws:lambda:us-east-2:123456789012:function:myFunction",
 *   LastModified: "2016-11-21T19:49:20.006Z",
 *   LastProcessingResult: "No records processed",
 *   MaximumRecordAgeInSeconds: 604800,
 *   MaximumRetryAttempts: 10000,
 *   State: "Creating",
 *   StateTransitionReason: "User action",
 *   UUID: "14e0db71-xmpl-4eb5-b481-8945cf9d10c2"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetEventSourceMappingCommand extends $Command
  .classBuilder<
    GetEventSourceMappingCommandInput,
    GetEventSourceMappingCommandOutput,
    LambdaClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LambdaClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGirApiService", "GetEventSourceMapping", {})
  .n("LambdaClient", "GetEventSourceMappingCommand")
  .f(void 0, void 0)
  .ser(se_GetEventSourceMappingCommand)
  .de(de_GetEventSourceMappingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEventSourceMappingRequest;
      output: EventSourceMappingConfiguration;
    };
    sdk: {
      input: GetEventSourceMappingCommandInput;
      output: GetEventSourceMappingCommandOutput;
    };
  };
}
