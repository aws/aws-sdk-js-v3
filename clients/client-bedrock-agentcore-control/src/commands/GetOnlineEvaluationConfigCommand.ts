// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetOnlineEvaluationConfigRequest, GetOnlineEvaluationConfigResponse } from "../models/models_0";
import { GetOnlineEvaluationConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOnlineEvaluationConfigCommand}.
 */
export interface GetOnlineEvaluationConfigCommandInput extends GetOnlineEvaluationConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetOnlineEvaluationConfigCommand}.
 */
export interface GetOnlineEvaluationConfigCommandOutput extends GetOnlineEvaluationConfigResponse, __MetadataBearer {}

/**
 * <p> Retrieves detailed information about an online evaluation configuration, including its rules, data sources, evaluators, and execution status. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, GetOnlineEvaluationConfigCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, GetOnlineEvaluationConfigCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // GetOnlineEvaluationConfigRequest
 *   onlineEvaluationConfigId: "STRING_VALUE", // required
 * };
 * const command = new GetOnlineEvaluationConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetOnlineEvaluationConfigResponse
 * //   onlineEvaluationConfigArn: "STRING_VALUE", // required
 * //   onlineEvaluationConfigId: "STRING_VALUE", // required
 * //   onlineEvaluationConfigName: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   rule: { // Rule
 * //     samplingConfig: { // SamplingConfig
 * //       samplingPercentage: Number("double"), // required
 * //     },
 * //     filters: [ // FilterList
 * //       { // Filter
 * //         key: "STRING_VALUE", // required
 * //         operator: "Equals" || "NotEquals" || "GreaterThan" || "LessThan" || "GreaterThanOrEqual" || "LessThanOrEqual" || "Contains" || "NotContains", // required
 * //         value: { // FilterValue Union: only one key present
 * //           stringValue: "STRING_VALUE",
 * //           doubleValue: Number("double"),
 * //           booleanValue: true || false,
 * //         },
 * //       },
 * //     ],
 * //     sessionConfig: { // SessionConfig
 * //       sessionTimeoutMinutes: Number("int"), // required
 * //     },
 * //   },
 * //   dataSourceConfig: { // DataSourceConfig Union: only one key present
 * //     cloudWatchLogs: { // CloudWatchLogsInputConfig
 * //       logGroupNames: [ // LogGroupNamesList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       serviceNames: [ // ServiceNamesList // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * //   evaluators: [ // EvaluatorList // required
 * //     { // EvaluatorReference Union: only one key present
 * //       evaluatorId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   outputConfig: { // OutputConfig
 * //     cloudWatchConfig: { // CloudWatchOutputConfig
 * //       logGroupName: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   evaluationExecutionRoleArn: "STRING_VALUE",
 * //   status: "ACTIVE" || "CREATING" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "DELETING", // required
 * //   executionStatus: "ENABLED" || "DISABLED", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   failureReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetOnlineEvaluationConfigCommandInput - {@link GetOnlineEvaluationConfigCommandInput}
 * @returns {@link GetOnlineEvaluationConfigCommandOutput}
 * @see {@link GetOnlineEvaluationConfigCommandInput} for command's `input` shape.
 * @see {@link GetOnlineEvaluationConfigCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception is thrown if there was an unexpected error during processing of request</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource referenced by the operation does not exist</p>
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
export class GetOnlineEvaluationConfigCommand extends $Command
  .classBuilder<
    GetOnlineEvaluationConfigCommandInput,
    GetOnlineEvaluationConfigCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "GetOnlineEvaluationConfig", {})
  .n("BedrockAgentCoreControlClient", "GetOnlineEvaluationConfigCommand")
  .sc(GetOnlineEvaluationConfig$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetOnlineEvaluationConfigRequest;
      output: GetOnlineEvaluationConfigResponse;
    };
    sdk: {
      input: GetOnlineEvaluationConfigCommandInput;
      output: GetOnlineEvaluationConfigCommandOutput;
    };
  };
}
