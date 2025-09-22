// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetHITRequest, GetHITResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { GetHIT } from "../schemas/schemas_1_HIT";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetHITCommand}.
 */
export interface GetHITCommandInput extends GetHITRequest {}
/**
 * @public
 *
 * The output of {@link GetHITCommand}.
 */
export interface GetHITCommandOutput extends GetHITResponse, __MetadataBearer {}

/**
 * <p>
 *             The <code>GetHIT</code> operation retrieves the details of the specified HIT.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, GetHITCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, GetHITCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * // import type { MTurkClientConfig } from "@aws-sdk/client-mturk";
 * const config = {}; // type is MTurkClientConfig
 * const client = new MTurkClient(config);
 * const input = { // GetHITRequest
 *   HITId: "STRING_VALUE", // required
 * };
 * const command = new GetHITCommand(input);
 * const response = await client.send(command);
 * // { // GetHITResponse
 * //   HIT: { // HIT
 * //     HITId: "STRING_VALUE",
 * //     HITTypeId: "STRING_VALUE",
 * //     HITGroupId: "STRING_VALUE",
 * //     HITLayoutId: "STRING_VALUE",
 * //     CreationTime: new Date("TIMESTAMP"),
 * //     Title: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     Question: "STRING_VALUE",
 * //     Keywords: "STRING_VALUE",
 * //     HITStatus: "Assignable" || "Unassignable" || "Reviewable" || "Reviewing" || "Disposed",
 * //     MaxAssignments: Number("int"),
 * //     Reward: "STRING_VALUE",
 * //     AutoApprovalDelayInSeconds: Number("long"),
 * //     Expiration: new Date("TIMESTAMP"),
 * //     AssignmentDurationInSeconds: Number("long"),
 * //     RequesterAnnotation: "STRING_VALUE",
 * //     QualificationRequirements: [ // QualificationRequirementList
 * //       { // QualificationRequirement
 * //         QualificationTypeId: "STRING_VALUE", // required
 * //         Comparator: "LessThan" || "LessThanOrEqualTo" || "GreaterThan" || "GreaterThanOrEqualTo" || "EqualTo" || "NotEqualTo" || "Exists" || "DoesNotExist" || "In" || "NotIn", // required
 * //         IntegerValues: [ // IntegerList
 * //           Number("int"),
 * //         ],
 * //         LocaleValues: [ // LocaleList
 * //           { // Locale
 * //             Country: "STRING_VALUE", // required
 * //             Subdivision: "STRING_VALUE",
 * //           },
 * //         ],
 * //         RequiredToPreview: true || false,
 * //         ActionsGuarded: "Accept" || "PreviewAndAccept" || "DiscoverPreviewAndAccept",
 * //       },
 * //     ],
 * //     HITReviewStatus: "NotReviewed" || "MarkedForReview" || "ReviewedAppropriate" || "ReviewedInappropriate",
 * //     NumberOfAssignmentsPending: Number("int"),
 * //     NumberOfAssignmentsAvailable: Number("int"),
 * //     NumberOfAssignmentsCompleted: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetHITCommandInput - {@link GetHITCommandInput}
 * @returns {@link GetHITCommandOutput}
 * @see {@link GetHITCommandInput} for command's `input` shape.
 * @see {@link GetHITCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class GetHITCommand extends $Command
  .classBuilder<
    GetHITCommandInput,
    GetHITCommandOutput,
    MTurkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MTurkClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MTurkRequesterServiceV20170117", "GetHIT", {})
  .n("MTurkClient", "GetHITCommand")
  .sc(GetHIT)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetHITRequest;
      output: GetHITResponse;
    };
    sdk: {
      input: GetHITCommandInput;
      output: GetHITCommandOutput;
    };
  };
}
