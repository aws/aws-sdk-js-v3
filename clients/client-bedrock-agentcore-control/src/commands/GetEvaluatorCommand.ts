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
import { GetEvaluatorRequest, GetEvaluatorResponse } from "../models/models_0";
import { GetEvaluator } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEvaluatorCommand}.
 */
export interface GetEvaluatorCommandInput extends GetEvaluatorRequest {}
/**
 * @public
 *
 * The output of {@link GetEvaluatorCommand}.
 */
export interface GetEvaluatorCommandOutput extends GetEvaluatorResponse, __MetadataBearer {}

/**
 * <p> Retrieves detailed information about an evaluator, including its configuration, status, and metadata. Works with both built-in and custom evaluators. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, GetEvaluatorCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, GetEvaluatorCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // GetEvaluatorRequest
 *   evaluatorId: "STRING_VALUE", // required
 * };
 * const command = new GetEvaluatorCommand(input);
 * const response = await client.send(command);
 * // { // GetEvaluatorResponse
 * //   evaluatorArn: "STRING_VALUE", // required
 * //   evaluatorId: "STRING_VALUE", // required
 * //   evaluatorName: "STRING_VALUE", // required
 * //   description: "STRING_VALUE",
 * //   evaluatorConfig: { // EvaluatorConfig Union: only one key present
 * //     llmAsAJudge: { // LlmAsAJudgeEvaluatorConfig
 * //       instructions: "STRING_VALUE", // required
 * //       ratingScale: { // RatingScale Union: only one key present
 * //         numerical: [ // NumericalScaleDefinitions
 * //           { // NumericalScaleDefinition
 * //             definition: "STRING_VALUE", // required
 * //             value: Number("double"), // required
 * //             label: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         categorical: [ // CategoricalScaleDefinitions
 * //           { // CategoricalScaleDefinition
 * //             definition: "STRING_VALUE", // required
 * //             label: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //       modelConfig: { // EvaluatorModelConfig Union: only one key present
 * //         bedrockEvaluatorModelConfig: { // BedrockEvaluatorModelConfig
 * //           modelId: "STRING_VALUE", // required
 * //           inferenceConfig: { // InferenceConfiguration
 * //             maxTokens: Number("int"),
 * //             temperature: Number("float"),
 * //             topP: Number("float"),
 * //             stopSequences: [ // NonEmptyStringList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           additionalModelRequestFields: "DOCUMENT_VALUE",
 * //         },
 * //       },
 * //     },
 * //   },
 * //   level: "TOOL_CALL" || "TRACE" || "SESSION", // required
 * //   status: "ACTIVE" || "CREATING" || "CREATE_FAILED" || "UPDATING" || "UPDATE_FAILED" || "DELETING", // required
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * //   lockedForModification: true || false,
 * // };
 *
 * ```
 *
 * @param GetEvaluatorCommandInput - {@link GetEvaluatorCommandInput}
 * @returns {@link GetEvaluatorCommandOutput}
 * @see {@link GetEvaluatorCommandInput} for command's `input` shape.
 * @see {@link GetEvaluatorCommandOutput} for command's `response` shape.
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
export class GetEvaluatorCommand extends $Command
  .classBuilder<
    GetEvaluatorCommandInput,
    GetEvaluatorCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "GetEvaluator", {})
  .n("BedrockAgentCoreControlClient", "GetEvaluatorCommand")
  .sc(GetEvaluator)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEvaluatorRequest;
      output: GetEvaluatorResponse;
    };
    sdk: {
      input: GetEvaluatorCommandInput;
      output: GetEvaluatorCommandOutput;
    };
  };
}
