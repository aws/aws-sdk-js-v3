// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListAssignmentsForHITRequest, ListAssignmentsForHITResponse } from "../models/models_0";
import type { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { ListAssignmentsForHIT } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAssignmentsForHITCommand}.
 */
export interface ListAssignmentsForHITCommandInput extends ListAssignmentsForHITRequest {}
/**
 * @public
 *
 * The output of {@link ListAssignmentsForHITCommand}.
 */
export interface ListAssignmentsForHITCommandOutput extends ListAssignmentsForHITResponse, __MetadataBearer {}

/**
 * <p>
 *             The
 *             <code>ListAssignmentsForHIT</code>
 *             operation retrieves completed assignments for a HIT. You can use this
 *             operation to retrieve the results for a HIT.
 *         </p>
 *         <p> You can get assignments for a HIT at any time, even if the
 *             HIT is not yet Reviewable. If a HIT requested multiple assignments,
 *             and has received some results but has not yet become Reviewable, you
 *             can still retrieve the partial results with this operation.
 *         </p>
 *         <p> Use the AssignmentStatus parameter to control which set of
 *             assignments for a HIT are returned. The ListAssignmentsForHIT
 *             operation
 *             can return submitted assignments awaiting approval, or it can return
 *             assignments that have already been approved or rejected. You can set
 *             AssignmentStatus=Approved,Rejected to get assignments that have
 *             already been approved and rejected together in one result set.
 *         </p>
 *         <p> Only the Requester who created the HIT can retrieve the
 *             assignments for that HIT.
 *         </p>
 *         <p> Results are sorted and divided into numbered pages and the
 *             operation returns a single page of results. You can use the
 *             parameters
 *             of the operation to control sorting and pagination.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ListAssignmentsForHITCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ListAssignmentsForHITCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * // import type { MTurkClientConfig } from "@aws-sdk/client-mturk";
 * const config = {}; // type is MTurkClientConfig
 * const client = new MTurkClient(config);
 * const input = { // ListAssignmentsForHITRequest
 *   HITId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   AssignmentStatuses: [ // AssignmentStatusList
 *     "Submitted" || "Approved" || "Rejected",
 *   ],
 * };
 * const command = new ListAssignmentsForHITCommand(input);
 * const response = await client.send(command);
 * // { // ListAssignmentsForHITResponse
 * //   NextToken: "STRING_VALUE",
 * //   NumResults: Number("int"),
 * //   Assignments: [ // AssignmentList
 * //     { // Assignment
 * //       AssignmentId: "STRING_VALUE",
 * //       WorkerId: "STRING_VALUE",
 * //       HITId: "STRING_VALUE",
 * //       AssignmentStatus: "Submitted" || "Approved" || "Rejected",
 * //       AutoApprovalTime: new Date("TIMESTAMP"),
 * //       AcceptTime: new Date("TIMESTAMP"),
 * //       SubmitTime: new Date("TIMESTAMP"),
 * //       ApprovalTime: new Date("TIMESTAMP"),
 * //       RejectionTime: new Date("TIMESTAMP"),
 * //       Deadline: new Date("TIMESTAMP"),
 * //       Answer: "STRING_VALUE",
 * //       RequesterFeedback: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAssignmentsForHITCommandInput - {@link ListAssignmentsForHITCommandInput}
 * @returns {@link ListAssignmentsForHITCommandOutput}
 * @see {@link ListAssignmentsForHITCommandInput} for command's `input` shape.
 * @see {@link ListAssignmentsForHITCommandOutput} for command's `response` shape.
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
export class ListAssignmentsForHITCommand extends $Command
  .classBuilder<
    ListAssignmentsForHITCommandInput,
    ListAssignmentsForHITCommandOutput,
    MTurkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MTurkClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MTurkRequesterServiceV20170117", "ListAssignmentsForHIT", {})
  .n("MTurkClient", "ListAssignmentsForHITCommand")
  .sc(ListAssignmentsForHIT)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAssignmentsForHITRequest;
      output: ListAssignmentsForHITResponse;
    };
    sdk: {
      input: ListAssignmentsForHITCommandInput;
      output: ListAssignmentsForHITCommandOutput;
    };
  };
}
