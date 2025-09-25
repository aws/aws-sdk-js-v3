// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAnswerInput, GetAnswerOutput } from "../models/models_0";
import { GetAnswer } from "../schemas/schemas_1_Answer";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAnswerCommand}.
 */
export interface GetAnswerCommandInput extends GetAnswerInput {}
/**
 * @public
 *
 * The output of {@link GetAnswerCommand}.
 */
export interface GetAnswerCommandOutput extends GetAnswerOutput, __MetadataBearer {}

/**
 * <p>Get the answer to a specific question in a workload review.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetAnswerCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetAnswerCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // GetAnswerInput
 *   WorkloadId: "STRING_VALUE", // required
 *   LensAlias: "STRING_VALUE", // required
 *   QuestionId: "STRING_VALUE", // required
 *   MilestoneNumber: Number("int"),
 * };
 * const command = new GetAnswerCommand(input);
 * const response = await client.send(command);
 * // { // GetAnswerOutput
 * //   WorkloadId: "STRING_VALUE",
 * //   MilestoneNumber: Number("int"),
 * //   LensAlias: "STRING_VALUE",
 * //   LensArn: "STRING_VALUE",
 * //   Answer: { // Answer
 * //     QuestionId: "STRING_VALUE",
 * //     PillarId: "STRING_VALUE",
 * //     QuestionTitle: "STRING_VALUE",
 * //     QuestionDescription: "STRING_VALUE",
 * //     ImprovementPlanUrl: "STRING_VALUE",
 * //     HelpfulResourceUrl: "STRING_VALUE",
 * //     HelpfulResourceDisplayText: "STRING_VALUE",
 * //     Choices: [ // Choices
 * //       { // Choice
 * //         ChoiceId: "STRING_VALUE",
 * //         Title: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         HelpfulResource: { // ChoiceContent
 * //           DisplayText: "STRING_VALUE",
 * //           Url: "STRING_VALUE",
 * //         },
 * //         ImprovementPlan: {
 * //           DisplayText: "STRING_VALUE",
 * //           Url: "STRING_VALUE",
 * //         },
 * //         AdditionalResources: [ // AdditionalResourcesList
 * //           { // AdditionalResources
 * //             Type: "HELPFUL_RESOURCE" || "IMPROVEMENT_PLAN",
 * //             Content: [ // Urls
 * //               {
 * //                 DisplayText: "STRING_VALUE",
 * //                 Url: "STRING_VALUE",
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     SelectedChoices: [ // SelectedChoices
 * //       "STRING_VALUE",
 * //     ],
 * //     ChoiceAnswers: [ // ChoiceAnswers
 * //       { // ChoiceAnswer
 * //         ChoiceId: "STRING_VALUE",
 * //         Status: "SELECTED" || "NOT_APPLICABLE" || "UNSELECTED",
 * //         Reason: "OUT_OF_SCOPE" || "BUSINESS_PRIORITIES" || "ARCHITECTURE_CONSTRAINTS" || "OTHER" || "NONE",
 * //         Notes: "STRING_VALUE",
 * //       },
 * //     ],
 * //     IsApplicable: true || false,
 * //     Risk: "UNANSWERED" || "HIGH" || "MEDIUM" || "NONE" || "NOT_APPLICABLE",
 * //     Notes: "STRING_VALUE",
 * //     Reason: "OUT_OF_SCOPE" || "BUSINESS_PRIORITIES" || "ARCHITECTURE_CONSTRAINTS" || "OTHER" || "NONE",
 * //     JiraConfiguration: { // JiraConfiguration
 * //       JiraIssueUrl: "STRING_VALUE",
 * //       LastSyncedTime: new Date("TIMESTAMP"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAnswerCommandInput - {@link GetAnswerCommandInput}
 * @returns {@link GetAnswerCommandOutput}
 * @see {@link GetAnswerCommandInput} for command's `input` shape.
 * @see {@link GetAnswerCommandOutput} for command's `response` shape.
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
export class GetAnswerCommand extends $Command
  .classBuilder<
    GetAnswerCommandInput,
    GetAnswerCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WellArchitectedApiServiceLambda", "GetAnswer", {})
  .n("WellArchitectedClient", "GetAnswerCommand")
  .sc(GetAnswer)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAnswerInput;
      output: GetAnswerOutput;
    };
    sdk: {
      input: GetAnswerCommandInput;
      output: GetAnswerCommandOutput;
    };
  };
}
