// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListHITsRequest, ListHITsResponse } from "../models/models_0";
import type { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { ListHITs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListHITsCommand}.
 */
export interface ListHITsCommandInput extends ListHITsRequest {}
/**
 * @public
 *
 * The output of {@link ListHITsCommand}.
 */
export interface ListHITsCommandOutput extends ListHITsResponse, __MetadataBearer {}

/**
 * <p>
 *             The
 *             <code>ListHITs</code>
 *             operation returns all of a Requester's HITs. The operation returns
 *             HITs of any status, except for HITs that have been deleted of with
 *             the DeleteHIT operation or that have been auto-deleted.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListHITsCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListHITsCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * // import type { MTurkClientConfig } from "@aws-sdk/client-mturk";
 * const config = {}; // type is MTurkClientConfig
 * const client = new MTurkClient(config);
 * const input = { // ListHITsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListHITsCommand(input);
 * const response = await client.send(command);
 * // { // ListHITsResponse
 * //   NextToken: "STRING_VALUE",
 * //   NumResults: Number("int"),
 * //   HITs: [ // HITList
 * //     { // HIT
 * //       HITId: "STRING_VALUE",
 * //       HITTypeId: "STRING_VALUE",
 * //       HITGroupId: "STRING_VALUE",
 * //       HITLayoutId: "STRING_VALUE",
 * //       CreationTime: new Date("TIMESTAMP"),
 * //       Title: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Question: "STRING_VALUE",
 * //       Keywords: "STRING_VALUE",
 * //       HITStatus: "Assignable" || "Unassignable" || "Reviewable" || "Reviewing" || "Disposed",
 * //       MaxAssignments: Number("int"),
 * //       Reward: "STRING_VALUE",
 * //       AutoApprovalDelayInSeconds: Number("long"),
 * //       Expiration: new Date("TIMESTAMP"),
 * //       AssignmentDurationInSeconds: Number("long"),
 * //       RequesterAnnotation: "STRING_VALUE",
 * //       QualificationRequirements: [ // QualificationRequirementList
 * //         { // QualificationRequirement
 * //           QualificationTypeId: "STRING_VALUE", // required
 * //           Comparator: "LessThan" || "LessThanOrEqualTo" || "GreaterThan" || "GreaterThanOrEqualTo" || "EqualTo" || "NotEqualTo" || "Exists" || "DoesNotExist" || "In" || "NotIn", // required
 * //           IntegerValues: [ // IntegerList
 * //             Number("int"),
 * //           ],
 * //           LocaleValues: [ // LocaleList
 * //             { // Locale
 * //               Country: "STRING_VALUE", // required
 * //               Subdivision: "STRING_VALUE",
 * //             },
 * //           ],
 * //           RequiredToPreview: true || false,
 * //           ActionsGuarded: "Accept" || "PreviewAndAccept" || "DiscoverPreviewAndAccept",
 * //         },
 * //       ],
 * //       HITReviewStatus: "NotReviewed" || "MarkedForReview" || "ReviewedAppropriate" || "ReviewedInappropriate",
 * //       NumberOfAssignmentsPending: Number("int"),
 * //       NumberOfAssignmentsAvailable: Number("int"),
 * //       NumberOfAssignmentsCompleted: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListHITsCommandInput - {@link ListHITsCommandInput}
 * @returns {@link ListHITsCommandOutput}
 * @see {@link ListHITsCommandInput} for command's `input` shape.
 * @see {@link ListHITsCommandOutput} for command's `response` shape.
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
export class ListHITsCommand extends $Command
  .classBuilder<
    ListHITsCommandInput,
    ListHITsCommandOutput,
    MTurkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MTurkClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MTurkRequesterServiceV20170117", "ListHITs", {})
  .n("MTurkClient", "ListHITsCommand")
  .sc(ListHITs$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListHITsRequest;
      output: ListHITsResponse;
    };
    sdk: {
      input: ListHITsCommandInput;
      output: ListHITsCommandOutput;
    };
  };
}
