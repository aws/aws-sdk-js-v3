// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BedrockAgentCoreControlClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BedrockAgentCoreControlClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateMemoryInput, CreateMemoryOutput } from "../models/models_1";
import { CreateMemory$ } from "../schemas/schemas_0";

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
 * <p>Creates a new Amazon Bedrock AgentCore Memory resource.</p>
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
 *         namespaceTemplates: [
 *           "STRING_VALUE",
 *         ],
 *         memoryRecordSchema: { // MemoryRecordSchema
 *           metadataSchema: [ // MetadataSchemaList
 *             { // MetadataSchemaEntry
 *               key: "STRING_VALUE", // required
 *               type: "STRING" || "STRINGLIST" || "NUMBER",
 *               extractionType: "LLM_INFERRED" || "STRICTLY_CONSISTENT",
 *               extractionConfig: { // ExtractionConfig Union: only one key present
 *                 llmExtractionConfig: { // LlmExtractionConfig
 *                   llmExtractionInstruction: "STRING_VALUE",
 *                   definition: "STRING_VALUE", // required
 *                   validation: { // Validation Union: only one key present
 *                     stringValidation: { // StringValidation
 *                       allowedValues: [ // AllowedStringValuesList // required
 *                         "STRING_VALUE",
 *                       ],
 *                     },
 *                     stringListValidation: { // StringListValidation
 *                       allowedValues: [ // AllowedStringListValuesList
 *                         "STRING_VALUE",
 *                       ],
 *                       maxItems: Number("int"),
 *                     },
 *                     numberValidation: { // NumberValidation
 *                       minValue: Number("double"),
 *                       maxValue: Number("double"),
 *                     },
 *                   },
 *                 },
 *               },
 *             },
 *           ],
 *         },
 *       },
 *       summaryMemoryStrategy: { // SummaryMemoryStrategyInput
 *         name: "STRING_VALUE", // required
 *         description: "STRING_VALUE",
 *         namespaces: [
 *           "STRING_VALUE",
 *         ],
 *         namespaceTemplates: [
 *           "STRING_VALUE",
 *         ],
 *         memoryRecordSchema: {
 *           metadataSchema: [
 *             {
 *               key: "STRING_VALUE", // required
 *               type: "STRING" || "STRINGLIST" || "NUMBER",
 *               extractionType: "LLM_INFERRED" || "STRICTLY_CONSISTENT",
 *               extractionConfig: {//  Union: only one key present
 *                 llmExtractionConfig: {
 *                   llmExtractionInstruction: "STRING_VALUE",
 *                   definition: "STRING_VALUE", // required
 *                   validation: {//  Union: only one key present
 *                     stringValidation: {
 *                       allowedValues: [ // required
 *                         "STRING_VALUE",
 *                       ],
 *                     },
 *                     stringListValidation: {
 *                       allowedValues: [
 *                         "STRING_VALUE",
 *                       ],
 *                       maxItems: Number("int"),
 *                     },
 *                     numberValidation: {
 *                       minValue: Number("double"),
 *                       maxValue: Number("double"),
 *                     },
 *                   },
 *                 },
 *               },
 *             },
 *           ],
 *         },
 *       },
 *       userPreferenceMemoryStrategy: { // UserPreferenceMemoryStrategyInput
 *         name: "STRING_VALUE", // required
 *         description: "STRING_VALUE",
 *         namespaces: [
 *           "STRING_VALUE",
 *         ],
 *         namespaceTemplates: "<NamespacesList>",
 *         memoryRecordSchema: {
 *           metadataSchema: [
 *             {
 *               key: "STRING_VALUE", // required
 *               type: "STRING" || "STRINGLIST" || "NUMBER",
 *               extractionType: "LLM_INFERRED" || "STRICTLY_CONSISTENT",
 *               extractionConfig: {//  Union: only one key present
 *                 llmExtractionConfig: {
 *                   llmExtractionInstruction: "STRING_VALUE",
 *                   definition: "STRING_VALUE", // required
 *                   validation: {//  Union: only one key present
 *                     stringValidation: {
 *                       allowedValues: [ // required
 *                         "STRING_VALUE",
 *                       ],
 *                     },
 *                     stringListValidation: {
 *                       allowedValues: [
 *                         "STRING_VALUE",
 *                       ],
 *                       maxItems: Number("int"),
 *                     },
 *                     numberValidation: {
 *                       minValue: Number("double"),
 *                       maxValue: Number("double"),
 *                     },
 *                   },
 *                 },
 *               },
 *             },
 *           ],
 *         },
 *       },
 *       customMemoryStrategy: { // CustomMemoryStrategyInput
 *         name: "STRING_VALUE", // required
 *         description: "STRING_VALUE",
 *         namespaces: "<NamespacesList>",
 *         namespaceTemplates: "<NamespacesList>",
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
 *           episodicOverride: { // EpisodicOverrideConfigurationInput
 *             extraction: { // EpisodicOverrideExtractionConfigurationInput
 *               appendToPrompt: "STRING_VALUE", // required
 *               modelId: "STRING_VALUE", // required
 *             },
 *             consolidation: { // EpisodicOverrideConsolidationConfigurationInput
 *               appendToPrompt: "STRING_VALUE", // required
 *               modelId: "STRING_VALUE", // required
 *             },
 *             reflection: { // EpisodicOverrideReflectionConfigurationInput
 *               appendToPrompt: "STRING_VALUE", // required
 *               modelId: "STRING_VALUE", // required
 *               namespaces: "<NamespacesList>",
 *               namespaceTemplates: "<NamespacesList>",
 *               memoryRecordSchema: {
 *                 metadataSchema: [
 *                   {
 *                     key: "STRING_VALUE", // required
 *                     type: "STRING" || "STRINGLIST" || "NUMBER",
 *                     extractionType: "LLM_INFERRED" || "STRICTLY_CONSISTENT",
 *                     extractionConfig: {//  Union: only one key present
 *                       llmExtractionConfig: {
 *                         llmExtractionInstruction: "STRING_VALUE",
 *                         definition: "STRING_VALUE", // required
 *                         validation: {//  Union: only one key present
 *                           stringValidation: {
 *                             allowedValues: [ // required
 *                               "STRING_VALUE",
 *                             ],
 *                           },
 *                           stringListValidation: {
 *                             allowedValues: [
 *                               "STRING_VALUE",
 *                             ],
 *                             maxItems: Number("int"),
 *                           },
 *                           numberValidation: {
 *                             minValue: Number("double"),
 *                             maxValue: Number("double"),
 *                           },
 *                         },
 *                       },
 *                     },
 *                   },
 *                 ],
 *               },
 *             },
 *           },
 *           selfManagedConfiguration: { // SelfManagedConfigurationInput
 *             triggerConditions: [ // TriggerConditionInputList
 *               { // TriggerConditionInput Union: only one key present
 *                 messageBasedTrigger: { // MessageBasedTriggerInput
 *                   messageCount: Number("int"),
 *                 },
 *                 tokenBasedTrigger: { // TokenBasedTriggerInput
 *                   tokenCount: Number("int"),
 *                 },
 *                 timeBasedTrigger: { // TimeBasedTriggerInput
 *                   idleSessionTimeout: Number("int"),
 *                 },
 *               },
 *             ],
 *             invocationConfiguration: { // InvocationConfigurationInput
 *               topicArn: "STRING_VALUE", // required
 *               payloadDeliveryBucketName: "STRING_VALUE", // required
 *             },
 *             historicalContextWindowSize: Number("int"),
 *           },
 *         },
 *         memoryRecordSchema: {
 *           metadataSchema: [
 *             {
 *               key: "STRING_VALUE", // required
 *               type: "STRING" || "STRINGLIST" || "NUMBER",
 *               extractionType: "LLM_INFERRED" || "STRICTLY_CONSISTENT",
 *               extractionConfig: {//  Union: only one key present
 *                 llmExtractionConfig: {
 *                   llmExtractionInstruction: "STRING_VALUE",
 *                   definition: "STRING_VALUE", // required
 *                   validation: {//  Union: only one key present
 *                     stringValidation: {
 *                       allowedValues: [ // required
 *                         "STRING_VALUE",
 *                       ],
 *                     },
 *                     stringListValidation: {
 *                       allowedValues: [
 *                         "STRING_VALUE",
 *                       ],
 *                       maxItems: Number("int"),
 *                     },
 *                     numberValidation: {
 *                       minValue: Number("double"),
 *                       maxValue: Number("double"),
 *                     },
 *                   },
 *                 },
 *               },
 *             },
 *           ],
 *         },
 *       },
 *       episodicMemoryStrategy: { // EpisodicMemoryStrategyInput
 *         name: "STRING_VALUE", // required
 *         description: "STRING_VALUE",
 *         namespaces: "<NamespacesList>",
 *         namespaceTemplates: "<NamespacesList>",
 *         reflectionConfiguration: { // EpisodicReflectionConfigurationInput
 *           namespaces: "<NamespacesList>",
 *           namespaceTemplates: "<NamespacesList>",
 *           memoryRecordSchema: "<MemoryRecordSchema>",
 *         },
 *         memoryRecordSchema: "<MemoryRecordSchema>",
 *       },
 *     },
 *   ],
 *   indexedKeys: [ // IndexedKeysList
 *     { // IndexedKey
 *       key: "STRING_VALUE", // required
 *       type: "STRING" || "STRINGLIST" || "NUMBER", // required
 *     },
 *   ],
 *   streamDeliveryResources: { // StreamDeliveryResources
 *     resources: [ // StreamDeliveryResourcesList // required
 *       { // StreamDeliveryResource Union: only one key present
 *         kinesis: { // KinesisResource
 *           dataStreamArn: "STRING_VALUE", // required
 *           contentConfigurations: [ // ContentConfigurationList // required
 *             { // ContentConfiguration
 *               type: "MEMORY_RECORDS", // required
 *               level: "METADATA_ONLY" || "FULL_CONTENT",
 *             },
 *           ],
 *         },
 *       },
 *     ],
 *   },
 *   tags: { // TagsMap
 *     "<keys>": "STRING_VALUE",
 *   },
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
 * //     status: "CREATING" || "ACTIVE" || "FAILED" || "DELETING" || "UPDATING", // required
 * //     failureReason: "STRING_VALUE",
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     strategies: [ // MemoryStrategyList
 * //       { // MemoryStrategy
 * //         strategyId: "STRING_VALUE", // required
 * //         name: "STRING_VALUE", // required
 * //         description: "STRING_VALUE",
 * //         configuration: { // StrategyConfiguration
 * //           type: "SEMANTIC_OVERRIDE" || "SUMMARY_OVERRIDE" || "USER_PREFERENCE_OVERRIDE" || "SELF_MANAGED" || "EPISODIC_OVERRIDE",
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
 * //               episodicExtractionOverride: { // EpisodicExtractionOverride
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
 * //               episodicConsolidationOverride: { // EpisodicConsolidationOverride
 * //                 appendToPrompt: "STRING_VALUE", // required
 * //                 modelId: "STRING_VALUE", // required
 * //               },
 * //             },
 * //           },
 * //           reflection: { // ReflectionConfiguration Union: only one key present
 * //             customReflectionConfiguration: { // CustomReflectionConfiguration Union: only one key present
 * //               episodicReflectionOverride: { // EpisodicReflectionOverride
 * //                 appendToPrompt: "STRING_VALUE", // required
 * //                 modelId: "STRING_VALUE", // required
 * //                 namespaces: [ // NamespacesList
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 namespaceTemplates: [
 * //                   "STRING_VALUE",
 * //                 ],
 * //                 memoryRecordSchema: { // MemoryRecordSchema
 * //                   metadataSchema: [ // MetadataSchemaList
 * //                     { // MetadataSchemaEntry
 * //                       key: "STRING_VALUE", // required
 * //                       type: "STRING" || "STRINGLIST" || "NUMBER",
 * //                       extractionType: "LLM_INFERRED" || "STRICTLY_CONSISTENT",
 * //                       extractionConfig: { // ExtractionConfig Union: only one key present
 * //                         llmExtractionConfig: { // LlmExtractionConfig
 * //                           llmExtractionInstruction: "STRING_VALUE",
 * //                           definition: "STRING_VALUE", // required
 * //                           validation: { // Validation Union: only one key present
 * //                             stringValidation: { // StringValidation
 * //                               allowedValues: [ // AllowedStringValuesList // required
 * //                                 "STRING_VALUE",
 * //                               ],
 * //                             },
 * //                             stringListValidation: { // StringListValidation
 * //                               allowedValues: [ // AllowedStringListValuesList
 * //                                 "STRING_VALUE",
 * //                               ],
 * //                               maxItems: Number("int"),
 * //                             },
 * //                             numberValidation: { // NumberValidation
 * //                               minValue: Number("double"),
 * //                               maxValue: Number("double"),
 * //                             },
 * //                           },
 * //                         },
 * //                       },
 * //                     },
 * //                   ],
 * //                 },
 * //               },
 * //             },
 * //             episodicReflectionConfiguration: { // EpisodicReflectionConfiguration
 * //               namespaces: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               namespaceTemplates: [
 * //                 "STRING_VALUE",
 * //               ],
 * //               memoryRecordSchema: {
 * //                 metadataSchema: [
 * //                   {
 * //                     key: "STRING_VALUE", // required
 * //                     type: "STRING" || "STRINGLIST" || "NUMBER",
 * //                     extractionType: "LLM_INFERRED" || "STRICTLY_CONSISTENT",
 * //                     extractionConfig: {//  Union: only one key present
 * //                       llmExtractionConfig: {
 * //                         llmExtractionInstruction: "STRING_VALUE",
 * //                         definition: "STRING_VALUE", // required
 * //                         validation: {//  Union: only one key present
 * //                           stringValidation: {
 * //                             allowedValues: [ // required
 * //                               "STRING_VALUE",
 * //                             ],
 * //                           },
 * //                           stringListValidation: {
 * //                             allowedValues: [
 * //                               "STRING_VALUE",
 * //                             ],
 * //                             maxItems: Number("int"),
 * //                           },
 * //                           numberValidation: {
 * //                             minValue: Number("double"),
 * //                             maxValue: Number("double"),
 * //                           },
 * //                         },
 * //                       },
 * //                     },
 * //                   },
 * //                 ],
 * //               },
 * //             },
 * //           },
 * //           selfManagedConfiguration: { // SelfManagedConfiguration
 * //             triggerConditions: [ // TriggerConditionsList // required
 * //               { // TriggerCondition Union: only one key present
 * //                 messageBasedTrigger: { // MessageBasedTrigger
 * //                   messageCount: Number("int"),
 * //                 },
 * //                 tokenBasedTrigger: { // TokenBasedTrigger
 * //                   tokenCount: Number("int"),
 * //                 },
 * //                 timeBasedTrigger: { // TimeBasedTrigger
 * //                   idleSessionTimeout: Number("int"),
 * //                 },
 * //               },
 * //             ],
 * //             invocationConfiguration: { // InvocationConfiguration
 * //               topicArn: "STRING_VALUE", // required
 * //               payloadDeliveryBucketName: "STRING_VALUE", // required
 * //             },
 * //             historicalContextWindowSize: Number("int"), // required
 * //           },
 * //         },
 * //         type: "SEMANTIC" || "SUMMARIZATION" || "USER_PREFERENCE" || "CUSTOM" || "EPISODIC", // required
 * //         namespaces: "<NamespacesList>", // required
 * //         namespaceTemplates: "<NamespacesList>", // required
 * //         createdAt: new Date("TIMESTAMP"),
 * //         updatedAt: new Date("TIMESTAMP"),
 * //         status: "CREATING" || "ACTIVE" || "DELETING" || "FAILED",
 * //         memoryRecordSchema: "<MemoryRecordSchema>",
 * //       },
 * //     ],
 * //     indexedKeys: [ // IndexedKeysList
 * //       { // IndexedKey
 * //         key: "STRING_VALUE", // required
 * //         type: "STRING" || "STRINGLIST" || "NUMBER", // required
 * //       },
 * //     ],
 * //     streamDeliveryResources: { // StreamDeliveryResources
 * //       resources: [ // StreamDeliveryResourcesList // required
 * //         { // StreamDeliveryResource Union: only one key present
 * //           kinesis: { // KinesisResource
 * //             dataStreamArn: "STRING_VALUE", // required
 * //             contentConfigurations: [ // ContentConfigurationList // required
 * //               { // ContentConfiguration
 * //                 type: "MEMORY_RECORDS", // required
 * //                 level: "METADATA_ONLY" || "FULL_CONTENT",
 * //               },
 * //             ],
 * //           },
 * //         },
 * //       ],
 * //     },
 * //     managedByResourceArn: "STRING_VALUE",
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonBedrockAgentCoreControl", "CreateMemory", {})
  .n("BedrockAgentCoreControlClient", "CreateMemoryCommand")
  .sc(CreateMemory$)
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
