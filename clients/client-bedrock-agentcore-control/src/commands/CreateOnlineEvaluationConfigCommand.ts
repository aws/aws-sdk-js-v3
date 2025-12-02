// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateOnlineEvaluationConfigRequest, CreateOnlineEvaluationConfigResponse } from "../models/models_0";
import { CreateOnlineEvaluationConfig } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateOnlineEvaluationConfigCommand}.
 */
export interface CreateOnlineEvaluationConfigCommandInput extends CreateOnlineEvaluationConfigRequest {}
/**
 * @public
 *
 * The output of {@link CreateOnlineEvaluationConfigCommand}.
 */
export interface CreateOnlineEvaluationConfigCommandOutput
  extends CreateOnlineEvaluationConfigResponse,
    __MetadataBearer {}

/**
 * <p> Creates an online evaluation configuration for continuous monitoring of agent performance. Online evaluation automatically samples live traffic from CloudWatch logs at specified rates and applies evaluators to assess agent quality in production. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, CreateOnlineEvaluationConfigCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, CreateOnlineEvaluationConfigCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // CreateOnlineEvaluationConfigRequest
 *   clientToken: "STRING_VALUE",
 *   onlineEvaluationConfigName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   rule: { // Rule
 *     samplingConfig: { // SamplingConfig
 *       samplingPercentage: Number("double"), // required
 *     },
 *     filters: [ // FilterList
 *       { // Filter
 *         key: "STRING_VALUE", // required
 *         operator: "Equals" || "NotEquals" || "GreaterThan" || "LessThan" || "GreaterThanOrEqual" || "LessThanOrEqual" || "Contains" || "NotContains", // required
 *         value: { // FilterValue Union: only one key present
 *           stringValue: "STRING_VALUE",
 *           doubleValue: Number("double"),
 *           booleanValue: true || false,
 *         },
 *       },
 *     ],
 *     sessionConfig: { // SessionConfig
 *       sessionTimeoutMinutes: Number("int"), // required
 *     },
 *   },
 *   dataSourceConfig: { // DataSourceConfig Union: only one key present
 *     cloudWatchLogs: { // CloudWatchLogsInputConfig
 *       logGroupNames: [ // LogGroupNamesList // required
 *         "STRING_VALUE",
 *       ],
 *       serviceNames: [ // ServiceNamesList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   evaluators: [ // EvaluatorList // required
 *     { // EvaluatorReference Union: only one key present
 *       evaluatorId: "STRING_VALUE",
 *     },
 *   ],
 *   evaluationExecutionRoleArn: "STRING_VALUE", // required
 *   enableOnCreate: true || false, // required
 * };
 * const command = new CreateOnlineEvaluationConfigCommand(input);
 * const response = await client.send(command);
 * // { // CreateOnlineEvaluationConfigResponse
 * //   onlineEvaluationConfigArn: "STRING_VALUE", // required
 * //   onlineEvaluationConfigId: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   outputConfig: { // OutputConfig
 * //     cloudWatchConfig: { // CloudWatchOutputConfig
 * //       logGroupName: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   status: "ACTIVE" || "CREATING" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "DELETING", // required
 * //   executionStatus: "ENABLED" || "DISABLED", // required
 * //   failureReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateOnlineEvaluationConfigCommandInput - {@link CreateOnlineEvaluationConfigCommandInput}
 * @returns {@link CreateOnlineEvaluationConfigCommandOutput}
 * @see {@link CreateOnlineEvaluationConfigCommandInput} for command's `input` shape.
 * @see {@link CreateOnlineEvaluationConfigCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception is thrown when there is a conflict performing an operation</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This exception is thrown when a request is made beyond the service quota</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>This exception is thrown when the number of requests exceeds the limit</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link BedrockAgentCoreControlServiceException}
 * <p>Base exception class for all service exceptions from BedrockAgentCoreControl service.</p>
 *
 *
 * @public
 */
export class CreateOnlineEvaluationConfigCommand extends $Command
  .classBuilder<
    CreateOnlineEvaluationConfigCommandInput,
    CreateOnlineEvaluationConfigCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "CreateOnlineEvaluationConfig", {})
  .n("BedrockAgentCoreControlClient", "CreateOnlineEvaluationConfigCommand")
  .sc(CreateOnlineEvaluationConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOnlineEvaluationConfigRequest;
      output: CreateOnlineEvaluationConfigResponse;
    };
    sdk: {
      input: CreateOnlineEvaluationConfigCommandInput;
      output: CreateOnlineEvaluationConfigCommandOutput;
    };
  };
}
