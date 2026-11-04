// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateLensReviewInput, UpdateLensReviewOutput } from "../models/models_0";
import { UpdateLensReview$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateLensReviewCommand}.
 */
export interface UpdateLensReviewCommandInput extends UpdateLensReviewInput {}
/**
 * @public
 *
 * The output of {@link UpdateLensReviewCommand}.
 */
export interface UpdateLensReviewCommandOutput extends UpdateLensReviewOutput, __MetadataBearer {}

/**
 * Update lens review for a particular workload.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, UpdateLensReviewCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, UpdateLensReviewCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // UpdateLensReviewInput
 *   WorkloadId: "STRING_VALUE", // required
 *   LensAlias: "STRING_VALUE", // required
 *   LensNotes: "STRING_VALUE",
 *   PillarNotes: { // PillarNotes
 *     "<keys>": "STRING_VALUE",
 *   },
 *   JiraConfiguration: { // JiraSelectedQuestionConfiguration
 *     SelectedPillars: [ // SelectedPillars
 *       { // SelectedPillar
 *         PillarId: "STRING_VALUE",
 *         SelectedQuestionIds: [ // SelectedQuestionIds
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 * };
 * const command = new UpdateLensReviewCommand(input);
 * const response = await client.send(command);
 * // { // UpdateLensReviewOutput
 * //   WorkloadId: "STRING_VALUE",
 * //   LensReview: { // LensReview
 * //     LensAlias: "STRING_VALUE",
 * //     LensArn: "STRING_VALUE",
 * //     LensVersion: "STRING_VALUE",
 * //     LensName: "STRING_VALUE",
 * //     LensStatus: "CURRENT" || "NOT_CURRENT" || "DEPRECATED" || "DELETED" || "UNSHARED",
 * //     PillarReviewSummaries: [ // PillarReviewSummaries
 * //       { // PillarReviewSummary
 * //         PillarId: "STRING_VALUE",
 * //         PillarName: "STRING_VALUE",
 * //         Notes: "STRING_VALUE",
 * //         RiskCounts: { // RiskCounts
 * //           "<keys>": Number("int"),
 * //         },
 * //         PrioritizedRiskCounts: {
 * //           "<keys>": Number("int"),
 * //         },
 * //       },
 * //     ],
 * //     JiraConfiguration: { // JiraSelectedQuestionConfiguration
 * //       SelectedPillars: [ // SelectedPillars
 * //         { // SelectedPillar
 * //           PillarId: "STRING_VALUE",
 * //           SelectedQuestionIds: [ // SelectedQuestionIds
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     UpdatedAt: new Date("TIMESTAMP"),
 * //     Notes: "STRING_VALUE",
 * //     RiskCounts: {
 * //       "<keys>": Number("int"),
 * //     },
 * //     NextToken: "STRING_VALUE",
 * //     Profiles: [ // WorkloadProfiles
 * //       { // WorkloadProfile
 * //         ProfileArn: "STRING_VALUE",
 * //         ProfileVersion: "STRING_VALUE",
 * //       },
 * //     ],
 * //     PrioritizedRiskCounts: {
 * //       "<keys>": Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateLensReviewCommandInput - {@link UpdateLensReviewCommandInput}
 * @returns {@link UpdateLensReviewCommandOutput}
 * @see {@link UpdateLensReviewCommandInput} for command's `input` shape.
 * @see {@link UpdateLensReviewCommandOutput} for command's `response` shape.
 * @see {@link WellArchitectedClientResolvedConfig | config} for WellArchitectedClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The resource has already been processed, was deleted, or is too large.
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
export class UpdateLensReviewCommand extends command<UpdateLensReviewCommandInput, UpdateLensReviewCommandOutput>(
  _ep0,
  _mw0,
  "UpdateLensReview",
  UpdateLensReview$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLensReviewInput;
      output: UpdateLensReviewOutput;
    };
    sdk: {
      input: UpdateLensReviewCommandInput;
      output: UpdateLensReviewCommandOutput;
    };
  };
}
