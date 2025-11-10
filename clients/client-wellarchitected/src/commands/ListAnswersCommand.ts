// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListAnswersInput, ListAnswersOutput } from "../models/models_0";
import { ListAnswers } from "../schemas/schemas_0";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAnswersCommand}.
 */
export interface ListAnswersCommandInput extends ListAnswersInput {}
/**
 * @public
 *
 * The output of {@link ListAnswersCommand}.
 */
export interface ListAnswersCommandOutput extends ListAnswersOutput, __MetadataBearer {}

/**
 * <p>List of answers for a particular workload and lens.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListAnswersCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListAnswersCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // ListAnswersInput
 *   WorkloadId: "STRING_VALUE", // required
 *   LensAlias: "STRING_VALUE", // required
 *   PillarId: "STRING_VALUE",
 *   MilestoneNumber: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   QuestionPriority: "PRIORITIZED" || "NONE",
 * };
 * const command = new ListAnswersCommand(input);
 * const response = await client.send(command);
 * // { // ListAnswersOutput
 * //   WorkloadId: "STRING_VALUE",
 * //   MilestoneNumber: Number("int"),
 * //   LensAlias: "STRING_VALUE",
 * //   LensArn: "STRING_VALUE",
 * //   AnswerSummaries: [ // AnswerSummaries
 * //     { // AnswerSummary
 * //       QuestionId: "STRING_VALUE",
 * //       PillarId: "STRING_VALUE",
 * //       QuestionTitle: "STRING_VALUE",
 * //       Choices: [ // Choices
 * //         { // Choice
 * //           ChoiceId: "STRING_VALUE",
 * //           Title: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //           HelpfulResource: { // ChoiceContent
 * //             DisplayText: "STRING_VALUE",
 * //             Url: "STRING_VALUE",
 * //           },
 * //           ImprovementPlan: {
 * //             DisplayText: "STRING_VALUE",
 * //             Url: "STRING_VALUE",
 * //           },
 * //           AdditionalResources: [ // AdditionalResourcesList
 * //             { // AdditionalResources
 * //               Type: "HELPFUL_RESOURCE" || "IMPROVEMENT_PLAN",
 * //               Content: [ // Urls
 * //                 {
 * //                   DisplayText: "STRING_VALUE",
 * //                   Url: "STRING_VALUE",
 * //                 },
 * //               ],
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //       SelectedChoices: [ // SelectedChoices
 * //         "STRING_VALUE",
 * //       ],
 * //       ChoiceAnswerSummaries: [ // ChoiceAnswerSummaries
 * //         { // ChoiceAnswerSummary
 * //           ChoiceId: "STRING_VALUE",
 * //           Status: "SELECTED" || "NOT_APPLICABLE" || "UNSELECTED",
 * //           Reason: "OUT_OF_SCOPE" || "BUSINESS_PRIORITIES" || "ARCHITECTURE_CONSTRAINTS" || "OTHER" || "NONE",
 * //         },
 * //       ],
 * //       IsApplicable: true || false,
 * //       Risk: "UNANSWERED" || "HIGH" || "MEDIUM" || "NONE" || "NOT_APPLICABLE",
 * //       Reason: "OUT_OF_SCOPE" || "BUSINESS_PRIORITIES" || "ARCHITECTURE_CONSTRAINTS" || "OTHER" || "NONE",
 * //       QuestionType: "PRIORITIZED" || "NON_PRIORITIZED",
 * //       JiraConfiguration: { // JiraConfiguration
 * //         JiraIssueUrl: "STRING_VALUE",
 * //         LastSyncedTime: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAnswersCommandInput - {@link ListAnswersCommandInput}
 * @returns {@link ListAnswersCommandOutput}
 * @see {@link ListAnswersCommandInput} for command's `input` shape.
 * @see {@link ListAnswersCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There is a problem with the Well-Architected Tool API service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The user input is not valid.</p>
 *
 * @throws {@link WellArchitectedServiceException}
 * <p>Base exception class for all service exceptions from WellArchitected service.</p>
 *
 *
 * @public
 */
export class ListAnswersCommand extends $Command
  .classBuilder<
    ListAnswersCommandInput,
    ListAnswersCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WellArchitectedApiServiceLambda", "ListAnswers", {})
  .n("WellArchitectedClient", "ListAnswersCommand")
  .sc(ListAnswers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAnswersInput;
      output: ListAnswersOutput;
    };
    sdk: {
      input: ListAnswersCommandInput;
      output: ListAnswersCommandOutput;
    };
  };
}
