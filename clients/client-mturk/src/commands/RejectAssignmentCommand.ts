// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RejectAssignmentRequest, RejectAssignmentResponse } from "../models/models_0";
import { RejectAssignment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RejectAssignmentCommand}.
 */
export interface RejectAssignmentCommandInput extends RejectAssignmentRequest {}
/**
 * @public
 *
 * The output of {@link RejectAssignmentCommand}.
 */
export interface RejectAssignmentCommandOutput extends RejectAssignmentResponse, __MetadataBearer {}

/**
 * <p>
 *             The <code>RejectAssignment</code> operation rejects the results of a completed assignment.
 *         </p>
 *         <p>
 *             You can include an optional feedback message with the rejection,
 *             which the Worker can see in the Status section of the web site.
 *             When you include a feedback message with the rejection,
 *             it helps the Worker understand why the assignment was rejected,
 *             and can improve the quality of the results the Worker submits in the future.
 *         </p>
 *         <p>
 *             Only the Requester who created the HIT can reject an assignment for the HIT.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, RejectAssignmentCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, RejectAssignmentCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * // import type { MTurkClientConfig } from "@aws-sdk/client-mturk";
 * const config = {}; // type is MTurkClientConfig
 * const client = new MTurkClient(config);
 * const input = { // RejectAssignmentRequest
 *   AssignmentId: "STRING_VALUE", // required
 *   RequesterFeedback: "STRING_VALUE", // required
 * };
 * const command = new RejectAssignmentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RejectAssignmentCommandInput - {@link RejectAssignmentCommandInput}
 * @returns {@link RejectAssignmentCommandOutput}
 * @see {@link RejectAssignmentCommandInput} for command's `input` shape.
 * @see {@link RejectAssignmentCommandOutput} for command's `response` shape.
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
export class RejectAssignmentCommand extends command<RejectAssignmentCommandInput, RejectAssignmentCommandOutput>(
  _ep0,
  _mw0,
  "RejectAssignment",
  RejectAssignment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RejectAssignmentRequest;
      output: {};
    };
    sdk: {
      input: RejectAssignmentCommandInput;
      output: RejectAssignmentCommandOutput;
    };
  };
}
