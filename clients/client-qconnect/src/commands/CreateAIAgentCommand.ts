// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAIAgentRequest, CreateAIAgentResponse } from "../models/models_0";
import { de_CreateAIAgentCommand, se_CreateAIAgentCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAIAgentCommand}.
 */
export interface CreateAIAgentCommandInput extends CreateAIAgentRequest {}
/**
 * @public
 *
 * The output of {@link CreateAIAgentCommand}.
 */
export interface CreateAIAgentCommandOutput extends CreateAIAgentResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Q in Connect AI Agent.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, CreateAIAgentCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, CreateAIAgentCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * const client = new QConnectClient(config);
 * const input = { // CreateAIAgentRequest
 *   clientToken: "STRING_VALUE",
 *   assistantId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   type: "STRING_VALUE", // required
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
 *   },
 *   visibilityStatus: "STRING_VALUE", // required
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   description: "STRING_VALUE",
 * };
 * const command = new CreateAIAgentCommand(input);
 * const response = await client.send(command);
 * // { // CreateAIAgentResponse
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
 * @param CreateAIAgentCommandInput - {@link CreateAIAgentCommandInput}
 * @returns {@link CreateAIAgentCommandOutput}
 * @see {@link CreateAIAgentCommandInput} for command's `input` shape.
 * @see {@link CreateAIAgentCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *       resource. For example, if you're using a <code>Create</code> API (such as
 *         <code>CreateAssistant</code>) that accepts name, a conflicting resource (usually with the
 *       same name) is being created or mutated.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You've exceeded your service quota. To perform the requested action, remove some of the
 *       relevant resources, or use service quotas to request a service quota increase.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by a service.</p>
 *
 * @throws {@link QConnectServiceException}
 * <p>Base exception class for all service exceptions from QConnect service.</p>
 *
 * @public
 */
export class CreateAIAgentCommand extends $Command
  .classBuilder<
    CreateAIAgentCommandInput,
    CreateAIAgentCommandOutput,
    QConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: QConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WisdomService", "CreateAIAgent", {})
  .n("QConnectClient", "CreateAIAgentCommand")
  .f(void 0, void 0)
  .ser(se_CreateAIAgentCommand)
  .de(de_CreateAIAgentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAIAgentRequest;
      output: CreateAIAgentResponse;
    };
    sdk: {
      input: CreateAIAgentCommandInput;
      output: CreateAIAgentCommandOutput;
    };
  };
}
