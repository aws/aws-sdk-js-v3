// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetAssignmentRequest, GetAssignmentResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { GetAssignment } from "../schemas/schemas_1_HIT";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAssignmentCommand}.
 */
export interface GetAssignmentCommandInput extends GetAssignmentRequest {}
/**
 * @public
 *
 * The output of {@link GetAssignmentCommand}.
 */
export interface GetAssignmentCommandOutput extends GetAssignmentResponse, __MetadataBearer {}

/**
 * <p>
 *             The <code>GetAssignment</code> operation retrieves the details of the specified Assignment.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, GetAssignmentCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, GetAssignmentCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * // import type { MTurkClientConfig } from "@aws-sdk/client-mturk";
 * const config = {}; // type is MTurkClientConfig
 * const client = new MTurkClient(config);
 * const input = { // GetAssignmentRequest
 *   AssignmentId: "STRING_VALUE", // required
 * };
 * const command = new GetAssignmentCommand(input);
 * const response = await client.send(command);
 * // { // GetAssignmentResponse
 * //   Assignment: { // Assignment
 * //     AssignmentId: "STRING_VALUE",
 * //     WorkerId: "STRING_VALUE",
 * //     HITId: "STRING_VALUE",
 * //     AssignmentStatus: "Submitted" || "Approved" || "Rejected",
 * //     AutoApprovalTime: new Date("TIMESTAMP"),
 * //     AcceptTime: new Date("TIMESTAMP"),
 * //     SubmitTime: new Date("TIMESTAMP"),
 * //     ApprovalTime: new Date("TIMESTAMP"),
 * //     RejectionTime: new Date("TIMESTAMP"),
 * //     Deadline: new Date("TIMESTAMP"),
 * //     Answer: "STRING_VALUE",
 * //     RequesterFeedback: "STRING_VALUE",
 * //   },
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
 * @param GetAssignmentCommandInput - {@link GetAssignmentCommandInput}
 * @returns {@link GetAssignmentCommandOutput}
 * @see {@link GetAssignmentCommandInput} for command's `input` shape.
 * @see {@link GetAssignmentCommandOutput} for command's `response` shape.
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
export class GetAssignmentCommand extends $Command
  .classBuilder<
    GetAssignmentCommandInput,
    GetAssignmentCommandOutput,
    MTurkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MTurkClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MTurkRequesterServiceV20170117", "GetAssignment", {})
  .n("MTurkClient", "GetAssignmentCommand")
  .sc(GetAssignment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAssignmentRequest;
      output: GetAssignmentResponse;
    };
    sdk: {
      input: GetAssignmentCommandInput;
      output: GetAssignmentCommandOutput;
    };
  };
}
