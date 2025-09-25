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
import { UpdateMemoryInput, UpdateMemoryOutput } from "../models/models_0";
import { UpdateMemory } from "../schemas/schemas_3_Memory";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateMemoryCommand}.
 */
export interface UpdateMemoryCommandInput extends UpdateMemoryInput {}
/**
 * @public
 *
 * The output of {@link UpdateMemoryCommand}.
 */
export interface UpdateMemoryCommandOutput extends UpdateMemoryOutput, __MetadataBearer {}

/**
 * <p>Update an Amazon Bedrock AgentCore Memory resource memory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, UpdateMemoryCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, UpdateMemoryCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // UpdateMemoryInput
 *   clientToken: "STRING_VALUE",
 *   memoryId: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   eventExpiryDuration: Number("int"),
 *   memoryExecutionRoleArn: "STRING_VALUE",
 *   memoryStrategies: { // ModifyMemoryStrategies
 *     addMemoryStrategies: [ // MemoryStrategyInputList
 *       { // MemoryStrategyInput Union: only one key present
 *         semanticMemoryStrategy: { // SemanticMemoryStrategyInput
 *           name: "STRING_VALUE", // required
 *           description: "STRING_VALUE",
 *           namespaces: [ // NamespacesList
 *             "STRING_VALUE",
 *           ],
 *         },
 *         summaryMemoryStrategy: { // SummaryMemoryStrategyInput
 *           name: "STRING_VALUE", // required
 *           description: "STRING_VALUE",
 *           namespaces: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *         userPreferenceMemoryStrategy: { // UserPreferenceMemoryStrategyInput
 *           name: "STRING_VALUE", // required
 *           description: "STRING_VALUE",
 *           namespaces: [
 *             "STRING_VALUE",
 *           ],
 *         },
 *         customMemoryStrategy: { // CustomMemoryStrategyInput
 *           name: "STRING_VALUE", // required
 *           description: "STRING_VALUE",
 *           namespaces: [
 *             "STRING_VALUE",
 *           ],
 *           configuration: { // CustomConfigurationInput Union: only one key present
 *             semanticOverride: { // SemanticOverrideConfigurationInput
 *               extraction: { // SemanticOverrideExtractionConfigurationInput
 *                 appendToPrompt: "STRING_VALUE", // required
 *                 modelId: "STRING_VALUE", // required
 *               },
 *               consolidation: { // SemanticOverrideConsolidationConfigurationInput
 *                 appendToPrompt: "STRING_VALUE", // required
 *                 modelId: "STRING_VALUE", // required
 *               },
 *             },
 *             summaryOverride: { // SummaryOverrideConfigurationInput
 *               consolidation: { // SummaryOverrideConsolidationConfigurationInput
 *                 appendToPrompt: "STRING_VALUE", // required
 *                 modelId: "STRING_VALUE", // required
 *               },
 *             },
 *             userPreferenceOverride: { // UserPreferenceOverrideConfigurationInput
 *               extraction: { // UserPreferenceOverrideExtractionConfigurationInput
 *                 appendToPrompt: "STRING_VALUE", // required
 *                 modelId: "STRING_VALUE", // required
 *               },
 *               consolidation: { // UserPreferenceOverrideConsolidationConfigurationInput
 *                 appendToPrompt: "STRING_VALUE", // required
 *                 modelId: "STRING_VALUE", // required
 *               },
 *             },
 *           },
 *         },
 *       },
 *     ],
 *     modifyMemoryStrategies: [ // ModifyMemoryStrategiesList
 *       { // ModifyMemoryStrategyInput
 *         memoryStrategyId: "STRING_VALUE", // required
 *         description: "STRING_VALUE",
 *         namespaces: [
 *           "STRING_VALUE",
 *         ],
 *         configuration: { // ModifyStrategyConfiguration
 *           extraction: { // ModifyExtractionConfiguration Union: only one key present
 *             customExtractionConfiguration: { // CustomExtractionConfigurationInput Union: only one key present
 *               semanticExtractionOverride: {
 *                 appendToPrompt: "STRING_VALUE", // required
 *                 modelId: "STRING_VALUE", // required
 *               },
 *               userPreferenceExtractionOverride: {
 *                 appendToPrompt: "STRING_VALUE", // required
 *                 modelId: "STRING_VALUE", // required
 *               },
 *             },
 *           },
 *           consolidation: { // ModifyConsolidationConfiguration Union: only one key present
 *             customConsolidationConfiguration: { // CustomConsolidationConfigurationInput Union: only one key present
 *               semanticConsolidationOverride: {
 *                 appendToPrompt: "STRING_VALUE", // required
 *                 modelId: "STRING_VALUE", // required
 *               },
 *               summaryConsolidationOverride: {
 *                 appendToPrompt: "STRING_VALUE", // required
 *                 modelId: "STRING_VALUE", // required
 *               },
 *               userPreferenceConsolidationOverride: {
 *                 appendToPrompt: "STRING_VALUE", // required
 *                 modelId: "STRING_VALUE", // required
 *               },
 *             },
 *           },
 *         },
 *       },
 *     ],
 *     deleteMemoryStrategies: [ // DeleteMemoryStrategiesList
 *       { // DeleteMemoryStrategyInput
 *         memoryStrategyId: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateMemoryCommand(input);
 * const response = await client.send(command);
 * // { // UpdateMemoryOutput
 * //   memory: { // Memory
 * //     arn: "STRING_VALUE", // required
 * //     id: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     description: "STRING_VALUE",
 * //     encryptionKeyArn: "STRING_VALUE",
 * //     memoryExecutionRoleArn: "STRING_VALUE",
 * //     eventExpiryDuration: Number("int"), // required
 * //     status: "CREATING" || "ACTIVE" || "FAILED" || "DELETING", // required
 * //     failureReason: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     strategies: [ // MemoryStrategyList
 * //       { // MemoryStrategy
 * //         strategyId: "STRING_VALUE", // required
 * //         name: "STRING_VALUE", // required
 * //         description: "STRING_VALUE",
 * //         configuration: { // StrategyConfiguration
 * //           type: "SEMANTIC_OVERRIDE" || "SUMMARY_OVERRIDE" || "USER_PREFERENCE_OVERRIDE",
 * //           extraction: { // ExtractionConfiguration Union: only one key present
 * //             customExtractionConfiguration: { // CustomExtractionConfiguration Union: only one key present
 * //               semanticExtractionOverride: { // SemanticExtractionOverride
 * //                 appendToPrompt: "STRING_VALUE", // required
 * //                 modelId: "STRING_VALUE", // required
 * //               },
 * //               userPreferenceExtractionOverride: { // UserPreferenceExtractionOverride
 * //                 appendToPrompt: "STRING_VALUE", // required
 * //                 modelId: "STRING_VALUE", // required
 * //               },
 * //             },
 * //           },
 * //           consolidation: { // ConsolidationConfiguration Union: only one key present
 * //             customConsolidationConfiguration: { // CustomConsolidationConfiguration Union: only one key present
 * //               semanticConsolidationOverride: { // SemanticConsolidationOverride
 * //                 appendToPrompt: "STRING_VALUE", // required
 * //                 modelId: "STRING_VALUE", // required
 * //               },
 * //               summaryConsolidationOverride: { // SummaryConsolidationOverride
 * //                 appendToPrompt: "STRING_VALUE", // required
 * //                 modelId: "STRING_VALUE", // required
 * //               },
 * //               userPreferenceConsolidationOverride: { // UserPreferenceConsolidationOverride
 * //                 appendToPrompt: "STRING_VALUE", // required
 * //                 modelId: "STRING_VALUE", // required
 * //               },
 * //             },
 * //           },
 * //         },
 * //         type: "SEMANTIC" || "SUMMARIZATION" || "USER_PREFERENCE" || "CUSTOM", // required
 * //         namespaces: [ // NamespacesList // required
 * //           "STRING_VALUE",
 * //         ],
 * //         createdAt: new Date("TIMESTAMP"),
 * //         updatedAt: new Date("TIMESTAMP"),
 * //         status: "CREATING" || "ACTIVE" || "DELETING" || "FAILED",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateMemoryCommandInput - {@link UpdateMemoryCommandInput}
 * @returns {@link UpdateMemoryCommandOutput}
 * @see {@link UpdateMemoryCommandInput} for command's `input` shape.
 * @see {@link UpdateMemoryCommandOutput} for command's `response` shape.
 * @see {@link BedrockAgentCoreControlClientResolvedConfig | config} for BedrockAgentCoreControlClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>This exception is thrown when a request is denied per access permissions</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>This exception is thrown when there is a conflict performing an operation</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when a resource referenced by the operation does not exist</p>
 *
 * @throws {@link ServiceException} (server fault)
 *  <p>An internal error occurred.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>This exception is thrown when a request is made beyond the service quota</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>API rate limit has been exceeded.</p>
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
export class UpdateMemoryCommand extends $Command
  .classBuilder<
    UpdateMemoryCommandInput,
    UpdateMemoryCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "UpdateMemory", {})
  .n("BedrockAgentCoreControlClient", "UpdateMemoryCommand")
  .sc(UpdateMemory)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateMemoryInput;
      output: UpdateMemoryOutput;
    };
    sdk: {
      input: UpdateMemoryCommandInput;
      output: UpdateMemoryCommandOutput;
    };
  };
}
