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
import { CreateEvaluatorRequest, CreateEvaluatorResponse } from "../models/models_0";
import { CreateEvaluator } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEvaluatorCommand}.
 */
export interface CreateEvaluatorCommandInput extends CreateEvaluatorRequest {}
/**
 * @public
 *
 * The output of {@link CreateEvaluatorCommand}.
 */
export interface CreateEvaluatorCommandOutput extends CreateEvaluatorResponse, __MetadataBearer {}

/**
 * <p> Creates a custom evaluator for agent quality assessment. Custom evaluators use LLM-as-a-Judge configurations with user-defined prompts, rating scales, and model settings to evaluate agent performance at tool call, trace, or session levels. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, CreateEvaluatorCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, CreateEvaluatorCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // CreateEvaluatorRequest
 *   clientToken: "STRING_VALUE",
 *   evaluatorName: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   evaluatorConfig: { // EvaluatorConfig Union: only one key present
 *     llmAsAJudge: { // LlmAsAJudgeEvaluatorConfig
 *       instructions: "STRING_VALUE", // required
 *       ratingScale: { // RatingScale Union: only one key present
 *         numerical: [ // NumericalScaleDefinitions
 *           { // NumericalScaleDefinition
 *             definition: "STRING_VALUE", // required
 *             value: Number("double"), // required
 *             label: "STRING_VALUE", // required
 *           },
 *         ],
 *         categorical: [ // CategoricalScaleDefinitions
 *           { // CategoricalScaleDefinition
 *             definition: "STRING_VALUE", // required
 *             label: "STRING_VALUE", // required
 *           },
 *         ],
 *       },
 *       modelConfig: { // EvaluatorModelConfig Union: only one key present
 *         bedrockEvaluatorModelConfig: { // BedrockEvaluatorModelConfig
 *           modelId: "STRING_VALUE", // required
 *           inferenceConfig: { // InferenceConfiguration
 *             maxTokens: Number("int"),
 *             temperature: Number("float"),
 *             topP: Number("float"),
 *             stopSequences: [ // NonEmptyStringList
 *               "STRING_VALUE",
 *             ],
 *           },
 *           additionalModelRequestFields: "DOCUMENT_VALUE",
 *         },
 *       },
 *     },
 *   },
 *   level: "TOOL_CALL" || "TRACE" || "SESSION", // required
 * };
 * const command = new CreateEvaluatorCommand(input);
 * const response = await client.send(command);
 * // { // CreateEvaluatorResponse
 * //   evaluatorArn: "STRING_VALUE", // required
 * //   evaluatorId: "STRING_VALUE", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   status: "ACTIVE" || "CREATING" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "DELETING", // required
 * // };
 *
 * ```
 *
 * @param CreateEvaluatorCommandInput - {@link CreateEvaluatorCommandInput}
 * @returns {@link CreateEvaluatorCommandOutput}
 * @see {@link CreateEvaluatorCommandInput} for command's `input` shape.
 * @see {@link CreateEvaluatorCommandOutput} for command's `response` shape.
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
export class CreateEvaluatorCommand extends $Command
  .classBuilder<
    CreateEvaluatorCommandInput,
    CreateEvaluatorCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "CreateEvaluator", {})
  .n("BedrockAgentCoreControlClient", "CreateEvaluatorCommand")
  .sc(CreateEvaluator)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateEvaluatorRequest;
      output: CreateEvaluatorResponse;
    };
    sdk: {
      input: CreateEvaluatorCommandInput;
      output: CreateEvaluatorCommandOutput;
    };
  };
}
