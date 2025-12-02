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
import { UpdateEvaluatorRequest, UpdateEvaluatorResponse } from "../models/models_0";
import { UpdateEvaluator } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateEvaluatorCommand}.
 */
export interface UpdateEvaluatorCommandInput extends UpdateEvaluatorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEvaluatorCommand}.
 */
export interface UpdateEvaluatorCommandOutput extends UpdateEvaluatorResponse, __MetadataBearer {}

/**
 * <p> Updates a custom evaluator's configuration, description, or evaluation level. Built-in evaluators cannot be updated. The evaluator must not be locked for modification. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, UpdateEvaluatorCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, UpdateEvaluatorCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // UpdateEvaluatorRequest
 *   clientToken: "STRING_VALUE",
 *   evaluatorId: "STRING_VALUE", // required
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
 *   level: "TOOL_CALL" || "TRACE" || "SESSION",
 * };
 * const command = new UpdateEvaluatorCommand(input);
 * const response = await client.send(command);
 * // { // UpdateEvaluatorResponse
 * //   evaluatorArn: "STRING_VALUE", // required
 * //   evaluatorId: "STRING_VALUE", // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   status: "ACTIVE" || "CREATING" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "DELETING", // required
 * // };
 *
 * ```
 *
 * @param UpdateEvaluatorCommandInput - {@link UpdateEvaluatorCommandInput}
 * @returns {@link UpdateEvaluatorCommandOutput}
 * @see {@link UpdateEvaluatorCommandInput} for command's `input` shape.
 * @see {@link UpdateEvaluatorCommandOutput} for command's `response` shape.
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
export class UpdateEvaluatorCommand extends $Command
  .classBuilder<
    UpdateEvaluatorCommandInput,
    UpdateEvaluatorCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "UpdateEvaluator", {})
  .n("BedrockAgentCoreControlClient", "UpdateEvaluatorCommand")
  .sc(UpdateEvaluator)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEvaluatorRequest;
      output: UpdateEvaluatorResponse;
    };
    sdk: {
      input: UpdateEvaluatorCommandInput;
      output: UpdateEvaluatorCommandOutput;
    };
  };
}
