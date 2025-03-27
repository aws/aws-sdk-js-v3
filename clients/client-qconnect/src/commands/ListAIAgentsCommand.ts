// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAIAgentsRequest, ListAIAgentsResponse } from "../models/models_0";
import { de_ListAIAgentsCommand, se_ListAIAgentsCommand } from "../protocols/Aws_restJson1";
import { QConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../QConnectClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAIAgentsCommand}.
 */
export interface ListAIAgentsCommandInput extends ListAIAgentsRequest {}
/**
 * @public
 *
 * The output of {@link ListAIAgentsCommand}.
 */
export interface ListAIAgentsCommandOutput extends ListAIAgentsResponse, __MetadataBearer {}

/**
 * <p>Lists AI Agents.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { QConnectClient, ListAIAgentsCommand } from "@aws-sdk/client-qconnect"; // ES Modules import
 * // const { QConnectClient, ListAIAgentsCommand } = require("@aws-sdk/client-qconnect"); // CommonJS import
 * const client = new QConnectClient(config);
 * const input = { // ListAIAgentsRequest
 *   assistantId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   origin: "STRING_VALUE",
 * };
 * const command = new ListAIAgentsCommand(input);
 * const response = await client.send(command);
 * // { // ListAIAgentsResponse
 * //   aiAgentSummaries: [ // AIAgentSummaryList // required
 * //     { // AIAgentSummary
 * //       name: "STRING_VALUE", // required
 * //       assistantId: "STRING_VALUE", // required
 * //       assistantArn: "STRING_VALUE", // required
 * //       aiAgentId: "STRING_VALUE", // required
 * //       type: "STRING_VALUE", // required
 * //       aiAgentArn: "STRING_VALUE", // required
 * //       modifiedTime: new Date("TIMESTAMP"),
 * //       visibilityStatus: "STRING_VALUE", // required
 * //       configuration: { // AIAgentConfiguration Union: only one key present
 * //         manualSearchAIAgentConfiguration: { // ManualSearchAIAgentConfiguration
 * //           answerGenerationAIPromptId: "STRING_VALUE",
 * //           answerGenerationAIGuardrailId: "STRING_VALUE",
 * //           associationConfigurations: [ // AssociationConfigurationList
 * //             { // AssociationConfiguration
 * //               associationId: "STRING_VALUE",
 * //               associationType: "STRING_VALUE",
 * //               associationConfigurationData: { // AssociationConfigurationData Union: only one key present
 * //                 knowledgeBaseAssociationConfigurationData: { // KnowledgeBaseAssociationConfigurationData
 * //                   contentTagFilter: { // TagFilter Union: only one key present
 * //                     tagCondition: { // TagCondition
 * //                       key: "STRING_VALUE", // required
 * //                       value: "STRING_VALUE",
 * //                     },
 * //                     andConditions: [ // AndConditions
 * //                       {
 * //                         key: "STRING_VALUE", // required
 * //                         value: "STRING_VALUE",
 * //                       },
 * //                     ],
 * //                     orConditions: [ // OrConditions
 * //                       { // OrCondition Union: only one key present
 * //                         andConditions: [
 * //                           "<TagCondition>",
 * //                         ],
 * //                         tagCondition: "<TagCondition>",
 * //                       },
 * //                     ],
 * //                   },
 * //                   maxResults: Number("int"),
 * //                   overrideKnowledgeBaseSearchType: "STRING_VALUE",
 * //                 },
 * //               },
 * //             },
 * //           ],
 * //           locale: "STRING_VALUE",
 * //         },
 * //         answerRecommendationAIAgentConfiguration: { // AnswerRecommendationAIAgentConfiguration
 * //           intentLabelingGenerationAIPromptId: "STRING_VALUE",
 * //           queryReformulationAIPromptId: "STRING_VALUE",
 * //           answerGenerationAIPromptId: "STRING_VALUE",
 * //           answerGenerationAIGuardrailId: "STRING_VALUE",
 * //           associationConfigurations: [
 * //             {
 * //               associationId: "STRING_VALUE",
 * //               associationType: "STRING_VALUE",
 * //               associationConfigurationData: {//  Union: only one key present
 * //                 knowledgeBaseAssociationConfigurationData: {
 * //                   contentTagFilter: {//  Union: only one key present
 * //                     tagCondition: "<TagCondition>",
 * //                     andConditions: [
 * //                       "<TagCondition>",
 * //                     ],
 * //                     orConditions: [
 * //                       {//  Union: only one key present
 * //                         andConditions: [
 * //                           "<TagCondition>",
 * //                         ],
 * //                         tagCondition: "<TagCondition>",
 * //                       },
 * //                     ],
 * //                   },
 * //                   maxResults: Number("int"),
 * //                   overrideKnowledgeBaseSearchType: "STRING_VALUE",
 * //                 },
 * //               },
 * //             },
 * //           ],
 * //           locale: "STRING_VALUE",
 * //         },
 * //         selfServiceAIAgentConfiguration: { // SelfServiceAIAgentConfiguration
 * //           selfServicePreProcessingAIPromptId: "STRING_VALUE",
 * //           selfServiceAnswerGenerationAIPromptId: "STRING_VALUE",
 * //           selfServiceAIGuardrailId: "STRING_VALUE",
 * //           associationConfigurations: [
 * //             {
 * //               associationId: "STRING_VALUE",
 * //               associationType: "STRING_VALUE",
 * //               associationConfigurationData: {//  Union: only one key present
 * //                 knowledgeBaseAssociationConfigurationData: {
 * //                   contentTagFilter: {//  Union: only one key present
 * //                     tagCondition: "<TagCondition>",
 * //                     andConditions: [
 * //                       "<TagCondition>",
 * //                     ],
 * //                     orConditions: [
 * //                       {//  Union: only one key present
 * //                         andConditions: "<AndConditions>",
 * //                         tagCondition: "<TagCondition>",
 * //                       },
 * //                     ],
 * //                   },
 * //                   maxResults: Number("int"),
 * //                   overrideKnowledgeBaseSearchType: "STRING_VALUE",
 * //                 },
 * //               },
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       origin: "STRING_VALUE",
 * //       description: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAIAgentsCommandInput - {@link ListAIAgentsCommandInput}
 * @returns {@link ListAIAgentsCommandOutput}
 * @see {@link ListAIAgentsCommandInput} for command's `input` shape.
 * @see {@link ListAIAgentsCommandOutput} for command's `response` shape.
 * @see {@link QConnectClientResolvedConfig | config} for QConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource does not exist.</p>
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
 *
 * @public
 */
export class ListAIAgentsCommand extends $Command
  .classBuilder<
    ListAIAgentsCommandInput,
    ListAIAgentsCommandOutput,
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
  .s("WisdomService", "ListAIAgents", {})
  .n("QConnectClient", "ListAIAgentsCommand")
  .f(void 0, void 0)
  .ser(se_ListAIAgentsCommand)
  .de(de_ListAIAgentsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAIAgentsRequest;
      output: ListAIAgentsResponse;
    };
    sdk: {
      input: ListAIAgentsCommandInput;
      output: ListAIAgentsCommandOutput;
    };
  };
}
