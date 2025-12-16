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
import type { UpdateOnlineEvaluationConfigRequest, UpdateOnlineEvaluationConfigResponse } from "../models/models_0";
import { UpdateOnlineEvaluationConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateOnlineEvaluationConfigCommand}.
 */
export interface UpdateOnlineEvaluationConfigCommandInput extends UpdateOnlineEvaluationConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateOnlineEvaluationConfigCommand}.
 */
export interface UpdateOnlineEvaluationConfigCommandOutput
  extends UpdateOnlineEvaluationConfigResponse,
    __MetadataBearer {}

/**
 * <p> Updates an online evaluation configuration's settings, including rules, data sources, evaluators, and execution status. Changes take effect immediately for ongoing evaluations. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, UpdateOnlineEvaluationConfigCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, UpdateOnlineEvaluationConfigCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // UpdateOnlineEvaluationConfigRequest
 *   clientToken: "STRING_VALUE",
 *   onlineEvaluationConfigId: "STRING_VALUE", // required
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
 *   evaluators: [ // EvaluatorList
 *     { // EvaluatorReference Union: only one key present
 *       evaluatorId: "STRING_VALUE",
 *     },
 *   ],
 *   evaluationExecutionRoleArn: "STRING_VALUE",
 *   executionStatus: "ENABLED" || "DISABLED",
 * };
 * const command = new UpdateOnlineEvaluationConfigCommand(input);
 * const response = await client.send(command);
 * // { // UpdateOnlineEvaluationConfigResponse
 * //   onlineEvaluationConfigArn: "STRING_VALUE", // required
 * //   onlineEvaluationConfigId: "STRING_VALUE", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   status: "ACTIVE" || "CREATING" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "DELETING", // required
 * //   executionStatus: "ENABLED" || "DISABLED", // required
 * //   failureReason: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateOnlineEvaluationConfigCommandInput - {@link UpdateOnlineEvaluationConfigCommandInput}
 * @returns {@link UpdateOnlineEvaluationConfigCommandOutput}
 * @see {@link UpdateOnlineEvaluationConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateOnlineEvaluationConfigCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource referenced by the operation does not exist</p>
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
export class UpdateOnlineEvaluationConfigCommand extends $Command
  .classBuilder<
    UpdateOnlineEvaluationConfigCommandInput,
    UpdateOnlineEvaluationConfigCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "UpdateOnlineEvaluationConfig", {})
  .n("BedrockAgentCoreControlClient", "UpdateOnlineEvaluationConfigCommand")
  .sc(UpdateOnlineEvaluationConfig$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateOnlineEvaluationConfigRequest;
      output: UpdateOnlineEvaluationConfigResponse;
    };
    sdk: {
      input: UpdateOnlineEvaluationConfigCommandInput;
      output: UpdateOnlineEvaluationConfigCommandOutput;
    };
  };
}
