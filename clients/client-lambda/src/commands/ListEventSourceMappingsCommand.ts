// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LambdaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LambdaClient";
import { ListEventSourceMappingsRequest, ListEventSourceMappingsResponse } from "../models/models_0";
import { de_ListEventSourceMappingsCommand, se_ListEventSourceMappingsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEventSourceMappingsCommand}.
 */
export interface ListEventSourceMappingsCommandInput extends ListEventSourceMappingsRequest {}
/**
 * @public
 *
 * The output of {@link ListEventSourceMappingsCommand}.
 */
export interface ListEventSourceMappingsCommandOutput extends ListEventSourceMappingsResponse, __MetadataBearer {}

/**
 * <p>Lists event source mappings. Specify an <code>EventSourceArn</code> to show only event source mappings for a
 *       single event source.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaClient, ListEventSourceMappingsCommand } from "@aws-sdk/client-lambda"; // ES Modules import
 * // const { LambdaClient, ListEventSourceMappingsCommand } = require("@aws-sdk/client-lambda"); // CommonJS import
 * const client = new LambdaClient(config);
 * const input = { // ListEventSourceMappingsRequest
 *   EventSourceArn: "STRING_VALUE",
 *   FunctionName: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListEventSourceMappingsCommand(input);
 * const response = await client.send(command);
 * // { // ListEventSourceMappingsResponse
 * //   NextMarker: "STRING_VALUE",
 * //   EventSourceMappings: [ // EventSourceMappingsList
 * //     { // EventSourceMappingConfiguration
 * //       UUID: "STRING_VALUE",
 * //       StartingPosition: "TRIM_HORIZON" || "LATEST" || "AT_TIMESTAMP",
 * //       StartingPositionTimestamp: new Date("TIMESTAMP"),
 * //       BatchSize: Number("int"),
 * //       MaximumBatchingWindowInSeconds: Number("int"),
 * //       ParallelizationFactor: Number("int"),
 * //       EventSourceArn: "STRING_VALUE",
 * //       FilterCriteria: { // FilterCriteria
 * //         Filters: [ // FilterList
 * //           { // Filter
 * //             Pattern: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //       FunctionArn: "STRING_VALUE",
 * //       LastModified: new Date("TIMESTAMP"),
 * //       LastProcessingResult: "STRING_VALUE",
 * //       State: "STRING_VALUE",
 * //       StateTransitionReason: "STRING_VALUE",
 * //       DestinationConfig: { // DestinationConfig
 * //         OnSuccess: { // OnSuccess
 * //           Destination: "STRING_VALUE",
 * //         },
 * //         OnFailure: { // OnFailure
 * //           Destination: "STRING_VALUE",
 * //         },
 * //       },
 * //       Topics: [ // Topics
 * //         "STRING_VALUE",
 * //       ],
 * //       Queues: [ // Queues
 * //         "STRING_VALUE",
 * //       ],
 * //       SourceAccessConfigurations: [ // SourceAccessConfigurations
 * //         { // SourceAccessConfiguration
 * //           Type: "BASIC_AUTH" || "VPC_SUBNET" || "VPC_SECURITY_GROUP" || "SASL_SCRAM_512_AUTH" || "SASL_SCRAM_256_AUTH" || "VIRTUAL_HOST" || "CLIENT_CERTIFICATE_TLS_AUTH" || "SERVER_ROOT_CA_CERTIFICATE",
 * //           URI: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SelfManagedEventSource: { // SelfManagedEventSource
 * //         Endpoints: { // Endpoints
 * //           "<keys>": [ // EndpointLists
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       MaximumRecordAgeInSeconds: Number("int"),
 * //       BisectBatchOnFunctionError: true || false,
 * //       MaximumRetryAttempts: Number("int"),
 * //       TumblingWindowInSeconds: Number("int"),
 * //       FunctionResponseTypes: [ // FunctionResponseTypeList
 * //         "ReportBatchItemFailures",
 * //       ],
 * //       AmazonManagedKafkaEventSourceConfig: { // AmazonManagedKafkaEventSourceConfig
 * //         ConsumerGroupId: "STRING_VALUE",
 * //       },
 * //       SelfManagedKafkaEventSourceConfig: { // SelfManagedKafkaEventSourceConfig
 * //         ConsumerGroupId: "STRING_VALUE",
 * //       },
 * //       ScalingConfig: { // ScalingConfig
 * //         MaximumConcurrency: Number("int"),
 * //       },
 * //       DocumentDBEventSourceConfig: { // DocumentDBEventSourceConfig
 * //         DatabaseName: "STRING_VALUE",
 * //         CollectionName: "STRING_VALUE",
 * //         FullDocument: "UpdateLookup" || "Default",
 * //       },
 * //       KMSKeyArn: "STRING_VALUE",
 * //       FilterCriteriaError: { // FilterCriteriaError
 * //         ErrorCode: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //       EventSourceMappingArn: "STRING_VALUE",
 * //       MetricsConfig: { // EventSourceMappingMetricsConfig
 * //         Metrics: [ // EventSourceMappingMetricList
 * //           "EventCount",
 * //         ],
 * //       },
 * //       ProvisionedPollerConfig: { // ProvisionedPollerConfig
 * //         MinimumPollers: Number("int"),
 * //         MaximumPollers: Number("int"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListEventSourceMappingsCommandInput - {@link ListEventSourceMappingsCommandInput}
 * @returns {@link ListEventSourceMappingsCommandOutput}
 * @see {@link ListEventSourceMappingsCommandInput} for command's `input` shape.
 * @see {@link ListEventSourceMappingsCommandOutput} for command's `response` shape.
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
 * @example To list the event source mappings for a function
 * ```javascript
 * // The following example returns a list of the event source mappings for a function named my-function.
 * const input = {
 *   FunctionName: "my-function"
 * };
 * const command = new ListEventSourceMappingsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   EventSourceMappings: [
 *     {
 *       BatchSize: 5,
 *       EventSourceArn: "arn:aws:sqs:us-west-2:123456789012:mySQSqueue",
 *       FunctionArn: "arn:aws:lambda:us-west-2:123456789012:function:my-function",
 *       LastModified: 1.569284520333E9,
 *       State: "Enabled",
 *       StateTransitionReason: "USER_INITIATED",
 *       UUID: "a1b2c3d4-5678-90ab-cdef-11111EXAMPLE"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListEventSourceMappingsCommand extends $Command
  .classBuilder<
    ListEventSourceMappingsCommandInput,
    ListEventSourceMappingsCommandOutput,
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
  .s("AWSGirApiService", "ListEventSourceMappings", {})
  .n("LambdaClient", "ListEventSourceMappingsCommand")
  .f(void 0, void 0)
  .ser(se_ListEventSourceMappingsCommand)
  .de(de_ListEventSourceMappingsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEventSourceMappingsRequest;
      output: ListEventSourceMappingsResponse;
    };
    sdk: {
      input: ListEventSourceMappingsCommandInput;
      output: ListEventSourceMappingsCommandOutput;
    };
  };
}
