// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetLensReviewInput, GetLensReviewOutput } from "../models/models_0";
import { GetLensReview } from "../schemas/schemas_0";
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
 * The input for {@link GetLensReviewCommand}.
 */
export interface GetLensReviewCommandInput extends GetLensReviewInput {}
/**
 * @public
 *
 * The output of {@link GetLensReviewCommand}.
 */
export interface GetLensReviewCommandOutput extends GetLensReviewOutput, __MetadataBearer {}

/**
 * <p>Get lens review.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, GetLensReviewCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, GetLensReviewCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // GetLensReviewInput
 *   WorkloadId: "STRING_VALUE", // required
 *   LensAlias: "STRING_VALUE", // required
 *   MilestoneNumber: Number("int"),
 * };
 * const command = new GetLensReviewCommand(input);
 * const response = await client.send(command);
 * // { // GetLensReviewOutput
 * //   WorkloadId: "STRING_VALUE",
 * //   MilestoneNumber: Number("int"),
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
 * @param GetLensReviewCommandInput - {@link GetLensReviewCommandInput}
 * @returns {@link GetLensReviewCommandOutput}
 * @see {@link GetLensReviewCommandInput} for command's `input` shape.
 * @see {@link GetLensReviewCommandOutput} for command's `response` shape.
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
export class GetLensReviewCommand extends $Command
  .classBuilder<
    GetLensReviewCommandInput,
    GetLensReviewCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WellArchitectedApiServiceLambda", "GetLensReview", {})
  .n("WellArchitectedClient", "GetLensReviewCommand")
  .sc(GetLensReview)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLensReviewInput;
      output: GetLensReviewOutput;
    };
    sdk: {
      input: GetLensReviewCommandInput;
      output: GetLensReviewCommandOutput;
    };
  };
}
