// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListReviewPolicyResultsForHITRequest, ListReviewPolicyResultsForHITResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import {
  de_ListReviewPolicyResultsForHITCommand,
  se_ListReviewPolicyResultsForHITCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListReviewPolicyResultsForHITCommand}.
 */
export interface ListReviewPolicyResultsForHITCommandInput extends ListReviewPolicyResultsForHITRequest {}
/**
 * @public
 *
 * The output of {@link ListReviewPolicyResultsForHITCommand}.
 */
export interface ListReviewPolicyResultsForHITCommandOutput
  extends ListReviewPolicyResultsForHITResponse,
    __MetadataBearer {}

/**
 * <p>
 *             The <code>ListReviewPolicyResultsForHIT</code> operation retrieves the computed results
 *             and the actions taken in the course of executing your Review Policies for a given HIT.
 *             For information about how to specify Review Policies when you call CreateHIT,
 *             see Review Policies. The ListReviewPolicyResultsForHIT operation can return results for both
 *             Assignment-level and HIT-level review results.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListReviewPolicyResultsForHITCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListReviewPolicyResultsForHITCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const input = { // ListReviewPolicyResultsForHITRequest
 *   HITId: "STRING_VALUE", // required
 *   PolicyLevels: [ // ReviewPolicyLevelList
 *     "Assignment" || "HIT",
 *   ],
 *   RetrieveActions: true || false,
 *   RetrieveResults: true || false,
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListReviewPolicyResultsForHITCommand(input);
 * const response = await client.send(command);
 * // { // ListReviewPolicyResultsForHITResponse
 * //   HITId: "STRING_VALUE",
 * //   AssignmentReviewPolicy: { // ReviewPolicy
 * //     PolicyName: "STRING_VALUE", // required
 * //     Parameters: [ // PolicyParameterList
 * //       { // PolicyParameter
 * //         Key: "STRING_VALUE",
 * //         Values: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //         MapEntries: [ // ParameterMapEntryList
 * //           { // ParameterMapEntry
 * //             Key: "STRING_VALUE",
 * //             Values: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   HITReviewPolicy: {
 * //     PolicyName: "STRING_VALUE", // required
 * //     Parameters: [
 * //       {
 * //         Key: "STRING_VALUE",
 * //         Values: [
 * //           "STRING_VALUE",
 * //         ],
 * //         MapEntries: [
 * //           {
 * //             Key: "STRING_VALUE",
 * //             Values: [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   AssignmentReviewReport: { // ReviewReport
 * //     ReviewResults: [ // ReviewResultDetailList
 * //       { // ReviewResultDetail
 * //         ActionId: "STRING_VALUE",
 * //         SubjectId: "STRING_VALUE",
 * //         SubjectType: "STRING_VALUE",
 * //         QuestionId: "STRING_VALUE",
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ReviewActions: [ // ReviewActionDetailList
 * //       { // ReviewActionDetail
 * //         ActionId: "STRING_VALUE",
 * //         ActionName: "STRING_VALUE",
 * //         TargetId: "STRING_VALUE",
 * //         TargetType: "STRING_VALUE",
 * //         Status: "Intended" || "Succeeded" || "Failed" || "Cancelled",
 * //         CompleteTime: new Date("TIMESTAMP"),
 * //         Result: "STRING_VALUE",
 * //         ErrorCode: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   HITReviewReport: {
 * //     ReviewResults: [
 * //       {
 * //         ActionId: "STRING_VALUE",
 * //         SubjectId: "STRING_VALUE",
 * //         SubjectType: "STRING_VALUE",
 * //         QuestionId: "STRING_VALUE",
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ReviewActions: [
 * //       {
 * //         ActionId: "STRING_VALUE",
 * //         ActionName: "STRING_VALUE",
 * //         TargetId: "STRING_VALUE",
 * //         TargetType: "STRING_VALUE",
 * //         Status: "Intended" || "Succeeded" || "Failed" || "Cancelled",
 * //         CompleteTime: new Date("TIMESTAMP"),
 * //         Result: "STRING_VALUE",
 * //         ErrorCode: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListReviewPolicyResultsForHITCommandInput - {@link ListReviewPolicyResultsForHITCommandInput}
 * @returns {@link ListReviewPolicyResultsForHITCommandOutput}
 * @see {@link ListReviewPolicyResultsForHITCommandInput} for command's `input` shape.
 * @see {@link ListReviewPolicyResultsForHITCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for MTurkClient's `config` shape.
 *
 * @throws {@link RequestError} (client fault)
 *  <p>Your request is invalid.</p>
 *
 * @throws {@link ServiceFault} (server fault)
 *  <p>Amazon Mechanical Turk is temporarily unable to process your request. Try your call again.</p>
 *
 * @throws {@link MTurkServiceException}
 * <p>Base exception class for all service exceptions from MTurk service.</p>
 *
 * @public
 */
export class ListReviewPolicyResultsForHITCommand extends $Command
  .classBuilder<
    ListReviewPolicyResultsForHITCommandInput,
    ListReviewPolicyResultsForHITCommandOutput,
    MTurkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MTurkClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MTurkRequesterServiceV20170117", "ListReviewPolicyResultsForHIT", {})
  .n("MTurkClient", "ListReviewPolicyResultsForHITCommand")
  .f(void 0, void 0)
  .ser(se_ListReviewPolicyResultsForHITCommand)
  .de(de_ListReviewPolicyResultsForHITCommand)
  .build() {}
