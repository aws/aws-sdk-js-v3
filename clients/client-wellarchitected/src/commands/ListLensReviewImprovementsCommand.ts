// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListLensReviewImprovementsInput, ListLensReviewImprovementsOutput } from "../models/models_0";
import { ListLensReviewImprovements } from "../schemas/schemas_0";
import type {
  ServiceInputTypes,
  ServiceOutputTypes,
  WellArchitectedClientResolvedConfig,
} from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLensReviewImprovementsCommand}.
 */
export interface ListLensReviewImprovementsCommandInput extends ListLensReviewImprovementsInput {}
/**
 * @public
 *
 * The output of {@link ListLensReviewImprovementsCommand}.
 */
export interface ListLensReviewImprovementsCommandOutput extends ListLensReviewImprovementsOutput, __MetadataBearer {}

/**
 * <p>List the improvements of a particular lens review.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListLensReviewImprovementsCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListLensReviewImprovementsCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // ListLensReviewImprovementsInput
 *   WorkloadId: "STRING_VALUE", // required
 *   LensAlias: "STRING_VALUE", // required
 *   PillarId: "STRING_VALUE",
 *   MilestoneNumber: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   QuestionPriority: "PRIORITIZED" || "NONE",
 * };
 * const command = new ListLensReviewImprovementsCommand(input);
 * const response = await client.send(command);
 * // { // ListLensReviewImprovementsOutput
 * //   WorkloadId: "STRING_VALUE",
 * //   MilestoneNumber: Number("int"),
 * //   LensAlias: "STRING_VALUE",
 * //   LensArn: "STRING_VALUE",
 * //   ImprovementSummaries: [ // ImprovementSummaries
 * //     { // ImprovementSummary
 * //       QuestionId: "STRING_VALUE",
 * //       PillarId: "STRING_VALUE",
 * //       QuestionTitle: "STRING_VALUE",
 * //       Risk: "UNANSWERED" || "HIGH" || "MEDIUM" || "NONE" || "NOT_APPLICABLE",
 * //       ImprovementPlanUrl: "STRING_VALUE",
 * //       ImprovementPlans: [ // ChoiceImprovementPlans
 * //         { // ChoiceImprovementPlan
 * //           ChoiceId: "STRING_VALUE",
 * //           DisplayText: "STRING_VALUE",
 * //           ImprovementPlanUrl: "STRING_VALUE",
 * //         },
 * //       ],
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
 * @param ListLensReviewImprovementsCommandInput - {@link ListLensReviewImprovementsCommandInput}
 * @returns {@link ListLensReviewImprovementsCommandOutput}
 * @see {@link ListLensReviewImprovementsCommandInput} for command's `input` shape.
 * @see {@link ListLensReviewImprovementsCommandOutput} for command's `response` shape.
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
export class ListLensReviewImprovementsCommand extends $Command
  .classBuilder<
    ListLensReviewImprovementsCommandInput,
    ListLensReviewImprovementsCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WellArchitectedApiServiceLambda", "ListLensReviewImprovements", {})
  .n("WellArchitectedClient", "ListLensReviewImprovementsCommand")
  .sc(ListLensReviewImprovements)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLensReviewImprovementsInput;
      output: ListLensReviewImprovementsOutput;
    };
    sdk: {
      input: ListLensReviewImprovementsCommandInput;
      output: ListLensReviewImprovementsCommandOutput;
    };
  };
}
