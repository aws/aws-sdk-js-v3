// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateMemoryInput,
  CreateMemoryInputFilterSensitiveLog,
  CreateMemoryOutput,
  CreateMemoryOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_CreateMemoryCommand, se_CreateMemoryCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateMemoryCommand}.
 */
export interface CreateMemoryCommandInput extends CreateMemoryInput {}
/**
 * @public
 *
 * The output of {@link CreateMemoryCommand}.
 */
export interface CreateMemoryCommandOutput extends CreateMemoryOutput, __MetadataBearer {}

/**
 * <p>Creates a new memory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockAgentCoreControlClient, CreateMemoryCommand } from "@aws-sdk/client-bedrock-agentcore-control"; // ES Modules import
 * // const { BedrockAgentCoreControlClient, CreateMemoryCommand } = require("@aws-sdk/client-bedrock-agentcore-control"); // CommonJS import
 * // import type { BedrockAgentCoreControlClientConfig } from "@aws-sdk/client-bedrock-agentcore-control";
 * const config = {}; // type is BedrockAgentCoreControlClientConfig
 * const client = new BedrockAgentCoreControlClient(config);
 * const input = { // CreateMemoryInput
 *   clientToken: "STRING_VALUE",
 *   name: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 *   encryptionKeyArn: "STRING_VALUE",
 *   memoryExecutionRoleArn: "STRING_VALUE",
 *   eventExpiryDuration: Number("int"), // required
 *   memoryStrategies: [ // MemoryStrategyInputList
 *     { // MemoryStrategyInput Union: only one key present
 *       semanticMemoryStrategy: { // SemanticMemoryStrategyInput
 *         name: "STRING_VALUE", // required
 *         description: "STRING_VALUE",
 *         namespaces: [ // NamespacesList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       summaryMemoryStrategy: { // SummaryMemoryStrategyInput
 *         name: "STRING_VALUE", // required
 *         description: "STRING_VALUE",
 *         namespaces: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *       userPreferenceMemoryStrategy: { // UserPreferenceMemoryStrategyInput
 *         name: "STRING_VALUE", // required
 *         description: "STRING_VALUE",
 *         namespaces: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *       customMemoryStrategy: { // CustomMemoryStrategyInput
 *         name: "STRING_VALUE", // required
 *         description: "STRING_VALUE",
 *         namespaces: [
 *           "STRING_VALUE",
 *         ],
 *         configuration: { // CustomConfigurationInput Union: only one key present
 *           semanticOverride: { // SemanticOverrideConfigurationInput
 *             extraction: { // SemanticOverrideExtractionConfigurationInput
 *               appendToPrompt: "STRING_VALUE", // required
 *               modelId: "STRING_VALUE", // required
 *             },
 *             consolidation: { // SemanticOverrideConsolidationConfigurationInput
 *               appendToPrompt: "STRING_VALUE", // required
 *               modelId: "STRING_VALUE", // required
 *             },
 *           },
 *           summaryOverride: { // SummaryOverrideConfigurationInput
 *             consolidation: { // SummaryOverrideConsolidationConfigurationInput
 *               appendToPrompt: "STRING_VALUE", // required
 *               modelId: "STRING_VALUE", // required
 *             },
 *           },
 *           userPreferenceOverride: { // UserPreferenceOverrideConfigurationInput
 *             extraction: { // UserPreferenceOverrideExtractionConfigurationInput
 *               appendToPrompt: "STRING_VALUE", // required
 *               modelId: "STRING_VALUE", // required
 *             },
 *             consolidation: { // UserPreferenceOverrideConsolidationConfigurationInput
 *               appendToPrompt: "STRING_VALUE", // required
 *               modelId: "STRING_VALUE", // required
 *             },
 *           },
 *         },
 *       },
 *     },
 *   ],
 * };
 * const command = new CreateMemoryCommand(input);
 * const response = await client.send(command);
 * // { // CreateMemoryOutput
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
 * @param CreateMemoryCommandInput - {@link CreateMemoryCommandInput}
 * @returns {@link CreateMemoryCommandOutput}
 * @see {@link CreateMemoryCommandInput} for command's `input` shape.
 * @see {@link CreateMemoryCommandOutput} for command's `response` shape.
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
export class CreateMemoryCommand extends $Command
  .classBuilder<
    CreateMemoryCommandInput,
    CreateMemoryCommandOutput,
    BedrockAgentCoreControlClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BedrockAgentCoreControlClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonBedrockAgentCoreControl", "CreateMemory", {})
  .n("BedrockAgentCoreControlClient", "CreateMemoryCommand")
  .f(CreateMemoryInputFilterSensitiveLog, CreateMemoryOutputFilterSensitiveLog)
  .ser(se_CreateMemoryCommand)
  .de(de_CreateMemoryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateMemoryInput;
      output: CreateMemoryOutput;
    };
    sdk: {
      input: CreateMemoryCommandInput;
      output: CreateMemoryCommandOutput;
    };
  };
}
