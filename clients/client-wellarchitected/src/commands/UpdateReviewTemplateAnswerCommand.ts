// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateReviewTemplateAnswerInput, UpdateReviewTemplateAnswerOutput } from "../models/models_0";
import { de_UpdateReviewTemplateAnswerCommand, se_UpdateReviewTemplateAnswerCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateReviewTemplateAnswerCommand}.
 */
export interface UpdateReviewTemplateAnswerCommandInput extends UpdateReviewTemplateAnswerInput {}
/**
 * @public
 *
 * The output of {@link UpdateReviewTemplateAnswerCommand}.
 */
export interface UpdateReviewTemplateAnswerCommandOutput extends UpdateReviewTemplateAnswerOutput, __MetadataBearer {}

/**
 * <p>Update a review template answer.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpdateReviewTemplateAnswerCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpdateReviewTemplateAnswerCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * const client = new WellArchitectedClient(config);
 * const input = { // UpdateReviewTemplateAnswerInput
 *   TemplateArn: "STRING_VALUE", // required
 *   LensAlias: "STRING_VALUE", // required
 *   QuestionId: "STRING_VALUE", // required
 *   SelectedChoices: [ // SelectedChoices
 *     "STRING_VALUE",
 *   ],
 *   ChoiceUpdates: { // ChoiceUpdates
 *     "<keys>": { // ChoiceUpdate
 *       Status: "SELECTED" || "NOT_APPLICABLE" || "UNSELECTED", // required
 *       Reason: "OUT_OF_SCOPE" || "BUSINESS_PRIORITIES" || "ARCHITECTURE_CONSTRAINTS" || "OTHER" || "NONE",
 *       Notes: "STRING_VALUE",
 *     },
 *   },
 *   Notes: "STRING_VALUE",
 *   IsApplicable: true || false,
 *   Reason: "OUT_OF_SCOPE" || "BUSINESS_PRIORITIES" || "ARCHITECTURE_CONSTRAINTS" || "OTHER" || "NONE",
 * };
 * const command = new UpdateReviewTemplateAnswerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateReviewTemplateAnswerOutput
 * //   TemplateArn: "STRING_VALUE",
 * //   LensAlias: "STRING_VALUE",
 * //   Answer: { // ReviewTemplateAnswer
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
 * //     AnswerStatus: "UNANSWERED" || "ANSWERED",
 * //     Notes: "STRING_VALUE",
 * //     Reason: "OUT_OF_SCOPE" || "BUSINESS_PRIORITIES" || "ARCHITECTURE_CONSTRAINTS" || "OTHER" || "NONE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateReviewTemplateAnswerCommandInput - {@link UpdateReviewTemplateAnswerCommandInput}
 * @returns {@link UpdateReviewTemplateAnswerCommandOutput}
 * @see {@link UpdateReviewTemplateAnswerCommandInput} for command's `input` shape.
 * @see {@link UpdateReviewTemplateAnswerCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The resource has already been processed, was deleted, or is too large.</p>
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
 * @public
 */
export class UpdateReviewTemplateAnswerCommand extends $Command
  .classBuilder<
    UpdateReviewTemplateAnswerCommandInput,
    UpdateReviewTemplateAnswerCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("WellArchitectedApiServiceLambda", "UpdateReviewTemplateAnswer", {})
  .n("WellArchitectedClient", "UpdateReviewTemplateAnswerCommand")
  .f(void 0, void 0)
  .ser(se_UpdateReviewTemplateAnswerCommand)
  .de(de_UpdateReviewTemplateAnswerCommand)
  .build() {}
