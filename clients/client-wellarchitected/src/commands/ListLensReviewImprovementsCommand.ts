// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListLensReviewImprovementsInput, ListLensReviewImprovementsOutput } from "../models/models_0";
import { ListLensReviewImprovements$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * List the improvements of a particular lens review.
 *
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
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * There is a problem with the Well-Architected Tool API service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The requested resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The user input is not valid.
 *
 * @throws {@link WellArchitectedServiceException}
 *
 * Base exception class for all service exceptions from WellArchitected service.
 *
 * @public
 */
export class ListLensReviewImprovementsCommand extends command<ListLensReviewImprovementsCommandInput, ListLensReviewImprovementsCommandOutput>(
  _ep0,
  _mw0,
  "ListLensReviewImprovements",
  ListLensReviewImprovements$
) {
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
