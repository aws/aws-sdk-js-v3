// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateAIAgentRequest, UpdateAIAgentResponse } from "../models/models_0";
import type { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";
import { UpdateAIAgent$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAIAgentCommand}.
 */
export interface UpdateAIAgentCommandInput extends UpdateAIAgentRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAIAgentCommand}.
 */
export interface UpdateAIAgentCommandOutput extends UpdateAIAgentResponse, __MetadataBearer {}

/**
 * <p>Updates an AI Agent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, UpdateAIAgentCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, UpdateAIAgentCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * // import type { QConnectClientConfig } from "@aws-sdk/client-qconnect";
 * const config = {}; // type is QConnectClientConfig
 * const client = new QConnectClient(config);
 * const input = { // UpdateAIAgentRequest
 *   clientToken: "STRING_VALUE",
 *   assistantId: "STRING_VALUE", // required
 *   aiAgentId: "STRING_VALUE", // required
 *   visibilityStatus: "STRING_VALUE", // required
 *   configuration: { // AIAgentConfiguration Union: only one key present
 *     manualSearchAIAgentConfiguration: { // ManualSearchAIAgentConfiguration
 *       answerGenerationAIPromptId: "STRING_VALUE",
 *       answerGenerationAIGuardrailId: "STRING_VALUE",
 *       associationConfigurations: [ // AssociationConfigurationList
 *         { // AssociationConfiguration
 *           associationId: "STRING_VALUE",
 *           associationType: "STRING_VALUE",
 *           associationConfigurationData: { // AssociationConfigurationData Union: only one key present
 *             knowledgeBaseAssociationConfigurationData: { // KnowledgeBaseAssociationConfigurationData
 *               contentTagFilter: { // TagFilter Union: only one key present
 *                 tagCondition: { // TagCondition
 *                   key: "STRING_VALUE", // required
 *                   value: "STRING_VALUE",
 *                 },
 *                 andConditions: [ // AndConditions
 *                   {
 *                     key: "STRING_VALUE", // required
 *                     value: "STRING_VALUE",
 *                   },
 *                 ],
 *                 orConditions: [ // OrConditions
 *                   { // OrCondition Union: only one key present
 *                     andConditions: [
 *                       "<TagCondition>",
 *                     ],
 *                     tagCondition: "<TagCondition>",
 *                   },
 *                 ],
 *               },
 *               maxResults: Number("int"),
 *               overrideKnowledgeBaseSearchType: "STRING_VALUE",
 *             },
 *           },
 *         },
 *       ],
 *       locale: "STRING_VALUE",
 *     },
 *     answerRecommendationAIAgentConfiguration: { // AnswerRecommendationAIAgentConfiguration
 *       intentLabelingGenerationAIPromptId: "STRING_VALUE",
 *       queryReformulationAIPromptId: "STRING_VALUE",
 *       answerGenerationAIPromptId: "STRING_VALUE",
 *       answerGenerationAIGuardrailId: "STRING_VALUE",
 *       associationConfigurations: [
 *         {
 *           associationId: "STRING_VALUE",
 *           associationType: "STRING_VALUE",
 *           associationConfigurationData: {//  Union: only one key present
 *             knowledgeBaseAssociationConfigurationData: {
 *               contentTagFilter: {//  Union: only one key present
 *                 tagCondition: "<TagCondition>",
 *                 andConditions: [
 *                   "<TagCondition>",
 *                 ],
 *                 orConditions: [
 *                   {//  Union: only one key present
 *                     andConditions: [
 *                       "<TagCondition>",
 *                     ],
 *                     tagCondition: "<TagCondition>",
 *                   },
 *                 ],
 *               },
 *               maxResults: Number("int"),
 *               overrideKnowledgeBaseSearchType: "STRING_VALUE",
 *             },
 *           },
 *         },
 *       ],
 *       locale: "STRING_VALUE",
 *       suggestedMessages: [ // SuggestedMessagesList
 *         "STRING_VALUE",
 *       ],
 *     },
 *     selfServiceAIAgentConfiguration: { // SelfServiceAIAgentConfiguration
 *       selfServicePreProcessingAIPromptId: "STRING_VALUE",
 *       selfServiceAnswerGenerationAIPromptId: "STRING_VALUE",
 *       selfServiceAIGuardrailId: "STRING_VALUE",
 *       associationConfigurations: [
 *         {
 *           associationId: "STRING_VALUE",
 *           associationType: "STRING_VALUE",
 *           associationConfigurationData: {//  Union: only one key present
 *             knowledgeBaseAssociationConfigurationData: {
 *               contentTagFilter: {//  Union: only one key present
 *                 tagCondition: "<TagCondition>",
 *                 andConditions: [
 *                   "<TagCondition>",
 *                 ],
 *                 orConditions: [
 *                   {//  Union: only one key present
 *                     andConditions: "<AndConditions>",
 *                     tagCondition: "<TagCondition>",
 *                   },
 *                 ],
 *               },
 *               maxResults: Number("int"),
 *               overrideKnowledgeBaseSearchType: "STRING_VALUE",
 *             },
 *           },
 *         },
 *       ],
 *     },
 *     emailResponseAIAgentConfiguration: { // EmailResponseAIAgentConfiguration
 *       emailResponseAIPromptId: "STRING_VALUE",
 *       emailQueryReformulationAIPromptId: "STRING_VALUE",
 *       locale: "STRING_VALUE",
 *       associationConfigurations: [
 *         {
 *           associationId: "STRING_VALUE",
 *           associationType: "STRING_VALUE",
 *           associationConfigurationData: {//  Union: only one key present
 *             knowledgeBaseAssociationConfigurationData: {
 *               contentTagFilter: {//  Union: only one key present
 *                 tagCondition: "<TagCondition>",
 *                 andConditions: "<AndConditions>",
 *                 orConditions: [
 *                   {//  Union: only one key present
 *                     andConditions: "<AndConditions>",
 *                     tagCondition: "<TagCondition>",
 *                   },
 *                 ],
 *               },
 *               maxResults: Number("int"),
 *               overrideKnowledgeBaseSearchType: "STRING_VALUE",
 *             },
 *           },
 *         },
 *       ],
 *     },
 *     emailOverviewAIAgentConfiguration: { // EmailOverviewAIAgentConfiguration
 *       emailOverviewAIPromptId: "STRING_VALUE",
 *       locale: "STRING_VALUE",
 *     },
 *     emailGenerativeAnswerAIAgentConfiguration: { // EmailGenerativeAnswerAIAgentConfiguration
 *       emailGenerativeAnswerAIPromptId: "STRING_VALUE",
 *       emailQueryReformulationAIPromptId: "STRING_VALUE",
 *       locale: "STRING_VALUE",
 *       associationConfigurations: [
 *         {
 *           associationId: "STRING_VALUE",
 *           associationType: "STRING_VALUE",
 *           associationConfigurationData: {//  Union: only one key present
 *             knowledgeBaseAssociationConfigurationData: {
 *               contentTagFilter: {//  Union: only one key present
 *                 tagCondition: "<TagCondition>",
 *                 andConditions: "<AndConditions>",
 *                 orConditions: [
 *                   {//  Union: only one key present
 *                     andConditions: "<AndConditions>",
 *                     tagCondition: "<TagCondition>",
 *                   },
 *                 ],
 *               },
 *               maxResults: Number("int"),
 *               overrideKnowledgeBaseSearchType: "STRING_VALUE",
 *             },
 *           },
 *         },
 *       ],
 *     },
 *     orchestrationAIAgentConfiguration: { // OrchestrationAIAgentConfiguration
 *       orchestrationAIPromptId: "STRING_VALUE", // required
 *       orchestrationAIGuardrailId: "STRING_VALUE",
 *       toolConfigurations: [ // ToolConfigurationList
 *         { // ToolConfiguration
 *           toolName: "STRING_VALUE", // required
 *           toolType: "STRING_VALUE", // required
 *           title: "STRING_VALUE",
 *           toolId: "STRING_VALUE",
 *           description: "STRING_VALUE",
 *           instruction: { // ToolInstruction
 *             instruction: "STRING_VALUE",
 *             examples: [ // ToolExampleList
 *               "STRING_VALUE",
 *             ],
 *           },
 *           overrideInputValues: [ // ToolOverrideInputValueList
 *             { // ToolOverrideInputValue
 *               jsonPath: "STRING_VALUE", // required
 *               value: { // ToolOverrideInputValueConfiguration Union: only one key present
 *                 constant: { // ToolOverrideConstantInputValue
 *                   type: "STRING_VALUE", // required
 *                   value: "STRING_VALUE", // required
 *                 },
 *               },
 *             },
 *           ],
 *           outputFilters: [ // ToolOutputFilterList
 *             { // ToolOutputFilter
 *               jsonPath: "STRING_VALUE", // required
 *               outputConfiguration: { // ToolOutputConfiguration
 *                 outputVariableNameOverride: "STRING_VALUE",
 *                 sessionDataNamespace: "STRING_VALUE",
 *               },
 *             },
 *           ],
 *           inputSchema: "DOCUMENT_VALUE",
 *           outputSchema: "DOCUMENT_VALUE",
 *           annotations: { // Annotation
 *             title: "STRING_VALUE",
 *             destructiveHint: true || false,
 *           },
 *           userInteractionConfiguration: { // UserInteractionConfiguration
 *             isUserConfirmationRequired: true || false,
 *           },
 *         },
 *       ],
 *       connectInstanceArn: "STRING_VALUE",
 *       locale: "STRING_VALUE",
 *     },
 *     noteTakingAIAgentConfiguration: { // NoteTakingAIAgentConfiguration
 *       noteTakingAIPromptId: "STRING_VALUE",
 *       noteTakingAIGuardrailId: "STRING_VALUE",
 *       locale: "STRING_VALUE",
 *     },
 *     caseSummarizationAIAgentConfiguration: { // CaseSummarizationAIAgentConfiguration
 *       caseSummarizationAIPromptId: "STRING_VALUE",
 *       caseSummarizationAIGuardrailId: "STRING_VALUE",
 *       locale: "STRING_VALUE",
 *     },
 *   },
 *   description: "STRING_VALUE",
 * };
 * const command = new UpdateAIAgentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateAIAgentResponse
 * //   aiAgent: { // AIAgentData
 * //     assistantId: "STRING_VALUE", // required
 * //     assistantArn: "STRING_VALUE", // required
 * //     aiAgentId: "STRING_VALUE", // required
 * //     aiAgentArn: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     type: "STRING_VALUE", // required
 * //     configuration: { // AIAgentConfiguration Union: only one key present
 * //       manualSearchAIAgentConfiguration: { // ManualSearchAIAgentConfiguration
 * //         answerGenerationAIPromptId: "STRING_VALUE",
 * //         answerGenerationAIGuardrailId: "STRING_VALUE",
 * //         associationConfigurations: [ // AssociationConfigurationList
 * //           { // AssociationConfiguration
 * //             associationId: "STRING_VALUE",
 * //             associationType: "STRING_VALUE",
 * //             associationConfigurationData: { // AssociationConfigurationData Union: only one key present
 * //               knowledgeBaseAssociationConfigurationData: { // KnowledgeBaseAssociationConfigurationData
 * //                 contentTagFilter: { // TagFilter Union: only one key present
 * //                   tagCondition: { // TagCondition
 * //                     key: "STRING_VALUE", // required
 * //                     value: "STRING_VALUE",
 * //                   },
 * //                   andConditions: [ // AndConditions
 * //                     {
 * //                       key: "STRING_VALUE", // required
 * //                       value: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   orConditions: [ // OrConditions
 * //                     { // OrCondition Union: only one key present
 * //                       andConditions: [
 * //                         "<TagCondition>",
 * //                       ],
 * //                       tagCondition: "<TagCondition>",
 * //                     },
 * //                   ],
 * //                 },
 * //                 maxResults: Number("int"),
 * //                 overrideKnowledgeBaseSearchType: "STRING_VALUE",
 * //               },
 * //             },
 * //           },
 * //         ],
 * //         locale: "STRING_VALUE",
 * //       },
 * //       answerRecommendationAIAgentConfiguration: { // AnswerRecommendationAIAgentConfiguration
 * //         intentLabelingGenerationAIPromptId: "STRING_VALUE",
 * //         queryReformulationAIPromptId: "STRING_VALUE",
 * //         answerGenerationAIPromptId: "STRING_VALUE",
 * //         answerGenerationAIGuardrailId: "STRING_VALUE",
 * //         associationConfigurations: [
 * //           {
 * //             associationId: "STRING_VALUE",
 * //             associationType: "STRING_VALUE",
 * //             associationConfigurationData: {//  Union: only one key present
 * //               knowledgeBaseAssociationConfigurationData: {
 * //                 contentTagFilter: {//  Union: only one key present
 * //                   tagCondition: "<TagCondition>",
 * //                   andConditions: [
 * //                     "<TagCondition>",
 * //                   ],
 * //                   orConditions: [
 * //                     {//  Union: only one key present
 * //                       andConditions: [
 * //                         "<TagCondition>",
 * //                       ],
 * //                       tagCondition: "<TagCondition>",
 * //                     },
 * //                   ],
 * //                 },
 * //                 maxResults: Number("int"),
 * //                 overrideKnowledgeBaseSearchType: "STRING_VALUE",
 * //               },
 * //             },
 * //           },
 * //         ],
 * //         locale: "STRING_VALUE",
 * //         suggestedMessages: [ // SuggestedMessagesList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       selfServiceAIAgentConfiguration: { // SelfServiceAIAgentConfiguration
 * //         selfServicePreProcessingAIPromptId: "STRING_VALUE",
 * //         selfServiceAnswerGenerationAIPromptId: "STRING_VALUE",
 * //         selfServiceAIGuardrailId: "STRING_VALUE",
 * //         associationConfigurations: [
 * //           {
 * //             associationId: "STRING_VALUE",
 * //             associationType: "STRING_VALUE",
 * //             associationConfigurationData: {//  Union: only one key present
 * //               knowledgeBaseAssociationConfigurationData: {
 * //                 contentTagFilter: {//  Union: only one key present
 * //                   tagCondition: "<TagCondition>",
 * //                   andConditions: [
 * //                     "<TagCondition>",
 * //                   ],
 * //                   orConditions: [
 * //                     {//  Union: only one key present
 * //                       andConditions: "<AndConditions>",
 * //                       tagCondition: "<TagCondition>",
 * //                     },
 * //                   ],
 * //                 },
 * //                 maxResults: Number("int"),
 * //                 overrideKnowledgeBaseSearchType: "STRING_VALUE",
 * //               },
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       emailResponseAIAgentConfiguration: { // EmailResponseAIAgentConfiguration
 * //         emailResponseAIPromptId: "STRING_VALUE",
 * //         emailQueryReformulationAIPromptId: "STRING_VALUE",
 * //         locale: "STRING_VALUE",
 * //         associationConfigurations: [
 * //           {
 * //             associationId: "STRING_VALUE",
 * //             associationType: "STRING_VALUE",
 * //             associationConfigurationData: {//  Union: only one key present
 * //               knowledgeBaseAssociationConfigurationData: {
 * //                 contentTagFilter: {//  Union: only one key present
 * //                   tagCondition: "<TagCondition>",
 * //                   andConditions: "<AndConditions>",
 * //                   orConditions: [
 * //                     {//  Union: only one key present
 * //                       andConditions: "<AndConditions>",
 * //                       tagCondition: "<TagCondition>",
 * //                     },
 * //                   ],
 * //                 },
 * //                 maxResults: Number("int"),
 * //                 overrideKnowledgeBaseSearchType: "STRING_VALUE",
 * //               },
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       emailOverviewAIAgentConfiguration: { // EmailOverviewAIAgentConfiguration
 * //         emailOverviewAIPromptId: "STRING_VALUE",
 * //         locale: "STRING_VALUE",
 * //       },
 * //       emailGenerativeAnswerAIAgentConfiguration: { // EmailGenerativeAnswerAIAgentConfiguration
 * //         emailGenerativeAnswerAIPromptId: "STRING_VALUE",
 * //         emailQueryReformulationAIPromptId: "STRING_VALUE",
 * //         locale: "STRING_VALUE",
 * //         associationConfigurations: [
 * //           {
 * //             associationId: "STRING_VALUE",
 * //             associationType: "STRING_VALUE",
 * //             associationConfigurationData: {//  Union: only one key present
 * //               knowledgeBaseAssociationConfigurationData: {
 * //                 contentTagFilter: {//  Union: only one key present
 * //                   tagCondition: "<TagCondition>",
 * //                   andConditions: "<AndConditions>",
 * //                   orConditions: [
 * //                     {//  Union: only one key present
 * //                       andConditions: "<AndConditions>",
 * //                       tagCondition: "<TagCondition>",
 * //                     },
 * //                   ],
 * //                 },
 * //                 maxResults: Number("int"),
 * //                 overrideKnowledgeBaseSearchType: "STRING_VALUE",
 * //               },
 * //             },
 * //           },
 * //         ],
 * //       },
 * //       orchestrationAIAgentConfiguration: { // OrchestrationAIAgentConfiguration
 * //         orchestrationAIPromptId: "STRING_VALUE", // required
 * //         orchestrationAIGuardrailId: "STRING_VALUE",
 * //         toolConfigurations: [ // ToolConfigurationList
 * //           { // ToolConfiguration
 * //             toolName: "STRING_VALUE", // required
 * //             toolType: "STRING_VALUE", // required
 * //             title: "STRING_VALUE",
 * //             toolId: "STRING_VALUE",
 * //             description: "STRING_VALUE",
 * //             instruction: { // ToolInstruction
 * //               instruction: "STRING_VALUE",
 * //               examples: [ // ToolExampleList
 * //                 "STRING_VALUE",
 * //               ],
 * //             },
 * //             overrideInputValues: [ // ToolOverrideInputValueList
 * //               { // ToolOverrideInputValue
 * //                 jsonPath: "STRING_VALUE", // required
 * //                 value: { // ToolOverrideInputValueConfiguration Union: only one key present
 * //                   constant: { // ToolOverrideConstantInputValue
 * //                     type: "STRING_VALUE", // required
 * //                     value: "STRING_VALUE", // required
 * //                   },
 * //                 },
 * //               },
 * //             ],
 * //             outputFilters: [ // ToolOutputFilterList
 * //               { // ToolOutputFilter
 * //                 jsonPath: "STRING_VALUE", // required
 * //                 outputConfiguration: { // ToolOutputConfiguration
 * //                   outputVariableNameOverride: "STRING_VALUE",
 * //                   sessionDataNamespace: "STRING_VALUE",
 * //                 },
 * //               },
 * //             ],
 * //             inputSchema: "DOCUMENT_VALUE",
 * //             outputSchema: "DOCUMENT_VALUE",
 * //             annotations: { // Annotation
 * //               title: "STRING_VALUE",
 * //               destructiveHint: true || false,
 * //             },
 * //             userInteractionConfiguration: { // UserInteractionConfiguration
 * //               isUserConfirmationRequired: true || false,
 * //             },
 * //           },
 * //         ],
 * //         connectInstanceArn: "STRING_VALUE",
 * //         locale: "STRING_VALUE",
 * //       },
 * //       noteTakingAIAgentConfiguration: { // NoteTakingAIAgentConfiguration
 * //         noteTakingAIPromptId: "STRING_VALUE",
 * //         noteTakingAIGuardrailId: "STRING_VALUE",
 * //         locale: "STRING_VALUE",
 * //       },
 * //       caseSummarizationAIAgentConfiguration: { // CaseSummarizationAIAgentConfiguration
 * //         caseSummarizationAIPromptId: "STRING_VALUE",
 * //         caseSummarizationAIGuardrailId: "STRING_VALUE",
 * //         locale: "STRING_VALUE",
 * //       },
 * //     },
 * //     modifiedTime: new Date("TIMESTAMP"),
 * //     description: "STRING_VALUE",
 * //     visibilityStatus: "STRING_VALUE", // required
 * //     tags: { // Tags
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     origin: "STRING_VALUE",
 * //     status: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateAIAgentCommandInput - {@link UpdateAIAgentCommandInput}
 * @returns {@link UpdateAIAgentCommandOutput}
 * @see {@link UpdateAIAgentCommandInput} for command's `input` shape.
 * @see {@link UpdateAIAgentCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the resource. For example, if you're using a <code>Create</code> API (such as <code>CreateAssistant</code>) that accepts name, a conflicting resource (usually with the same name) is being created or mutated.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link UnauthorizedException} (client fault)
 *  <p>You do not have permission to perform this action.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 *
 * @public
 */
export class UpdateAIAgentCommand extends $Command
  .classBuilder<
    UpdateAIAgentCommandInput,
    UpdateAIAgentCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WisdomService", "UpdateAIAgent", {})
  .n("QConnectClient", "UpdateAIAgentCommand")
  .sc(UpdateAIAgent$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateAIAgentRequest;
      output: UpdateAIAgentResponse;
    };
    sdk: {
      input: UpdateAIAgentCommandInput;
      output: UpdateAIAgentCommandOutput;
    };
  };
}
