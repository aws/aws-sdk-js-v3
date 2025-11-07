// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ApproveAssignmentRequest, ApproveAssignmentResponse } from "../models/models_0";
import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { ApproveAssignment } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ApproveAssignmentCommand}.
 */
export interface ApproveAssignmentCommandInput extends ApproveAssignmentRequest {}
/**
 * @public
 *
 * The output of {@link ApproveAssignmentCommand}.
 */
export interface ApproveAssignmentCommandOutput extends ApproveAssignmentResponse, __MetadataBearer {}

/**
 * <p>
 *             The <code>ApproveAssignment</code> operation approves the results of a completed assignment.
 *         </p>
 *         <p>
 *             Approving an assignment initiates two payments from the Requester's Amazon.com account
 *         </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                     The Worker who submitted the results is paid the reward specified in the HIT.
 *                 </p>
 *             </li>
 *             <li>
 *                 <p>
 *                     Amazon Mechanical Turk fees are debited.
 *                 </p>
 *             </li>
 *          </ul>
 *         <p>
 *             If the Requester's account does not have adequate funds for these payments,
 *             the call to ApproveAssignment returns an exception, and the approval is not processed.
 *             You can include an optional feedback message with the approval,
 *             which the Worker can see in the Status section of the web site.
 *         </p>
 *         <p>
 *             You can also call this operation for assignments that were previous rejected
 *             and approve them by explicitly overriding the previous rejection.
 *             This only works on rejected assignments that were submitted within the previous 30 days
 *             and only if the assignment's related HIT has not been deleted.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, ApproveAssignmentCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, ApproveAssignmentCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * // import type { MTurkClientConfig } from "@aws-sdk/client-mturk";
 * const config = {}; // type is MTurkClientConfig
 * const client = new MTurkClient(config);
 * const input = { // ApproveAssignmentRequest
 *   AssignmentId: "STRING_VALUE", // required
 *   RequesterFeedback: "STRING_VALUE",
 *   OverrideRejection: true || false,
 * };
 * const command = new ApproveAssignmentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ApproveAssignmentCommandInput - {@link ApproveAssignmentCommandInput}
 * @returns {@link ApproveAssignmentCommandOutput}
 * @see {@link ApproveAssignmentCommandInput} for command's `input` shape.
 * @see {@link ApproveAssignmentCommandOutput} for command's `response` shape.
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
export class ApproveAssignmentCommand extends $Command
  .classBuilder<
    ApproveAssignmentCommandInput,
    ApproveAssignmentCommandOutput,
    MTurkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MTurkClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MTurkRequesterServiceV20170117", "ApproveAssignment", {})
  .n("MTurkClient", "ApproveAssignmentCommand")
  .sc(ApproveAssignment)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ApproveAssignmentRequest;
      output: {};
    };
    sdk: {
      input: ApproveAssignmentCommandInput;
      output: ApproveAssignmentCommandOutput;
    };
  };
}
