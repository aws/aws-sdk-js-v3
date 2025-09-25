// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListLensReviewsInput, ListLensReviewsOutput } from "../models/models_0";
import { ListLensReviews } from "../schemas/schemas_3_Lens";
import { ServiceInputTypes, ServiceOutputTypes, WellArchitectedClientResolvedConfig } from "../WellArchitectedClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLensReviewsCommand}.
 */
export interface ListLensReviewsCommandInput extends ListLensReviewsInput {}
/**
 * @public
 *
 * The output of {@link ListLensReviewsCommand}.
 */
export interface ListLensReviewsCommandOutput extends ListLensReviewsOutput, __MetadataBearer {}

/**
 * <p>List lens reviews for a particular workload.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WellArchitectedClient, ListLensReviewsCommand } from "@aws-sdk/client-wellarchitected"; // ES Modules import
 * // const { WellArchitectedClient, ListLensReviewsCommand } = require("@aws-sdk/client-wellarchitected"); // CommonJS import
 * // import type { WellArchitectedClientConfig } from "@aws-sdk/client-wellarchitected";
 * const config = {}; // type is WellArchitectedClientConfig
 * const client = new WellArchitectedClient(config);
 * const input = { // ListLensReviewsInput
 *   WorkloadId: "STRING_VALUE", // required
 *   MilestoneNumber: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListLensReviewsCommand(input);
 * const response = await client.send(command);
 * // { // ListLensReviewsOutput
 * //   WorkloadId: "STRING_VALUE",
 * //   MilestoneNumber: Number("int"),
 * //   LensReviewSummaries: [ // LensReviewSummaries
 * //     { // LensReviewSummary
 * //       LensAlias: "STRING_VALUE",
 * //       LensArn: "STRING_VALUE",
 * //       LensVersion: "STRING_VALUE",
 * //       LensName: "STRING_VALUE",
 * //       LensStatus: "CURRENT" || "NOT_CURRENT" || "DEPRECATED" || "DELETED" || "UNSHARED",
 * //       UpdatedAt: new Date("TIMESTAMP"),
 * //       RiskCounts: { // RiskCounts
 * //         "<keys>": Number("int"),
 * //       },
 * //       Profiles: [ // WorkloadProfiles
 * //         { // WorkloadProfile
 * //           ProfileArn: "STRING_VALUE",
 * //           ProfileVersion: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PrioritizedRiskCounts: {
 * //         "<keys>": Number("int"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLensReviewsCommandInput - {@link ListLensReviewsCommandInput}
 * @returns {@link ListLensReviewsCommandOutput}
 * @see {@link ListLensReviewsCommandInput} for command's `input` shape.
 * @see {@link ListLensReviewsCommandOutput} for command's `response` shape.
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
export class ListLensReviewsCommand extends $Command
  .classBuilder<
    ListLensReviewsCommandInput,
    ListLensReviewsCommandOutput,
    WellArchitectedClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: WellArchitectedClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("WellArchitectedApiServiceLambda", "ListLensReviews", {})
  .n("WellArchitectedClient", "ListLensReviewsCommand")
  .sc(ListLensReviews)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLensReviewsInput;
      output: ListLensReviewsOutput;
    };
    sdk: {
      input: ListLensReviewsCommandInput;
      output: ListLensReviewsCommandOutput;
    };
  };
}
