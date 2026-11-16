// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ApproveTimeOffRequest, ApproveTimeOffResponse } from "../models/models_0";
import { ApproveTimeOff$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ApproveTimeOffCommand}.
 */
export interface ApproveTimeOffCommandInput extends ApproveTimeOffRequest {}
/**
 * @public
 *
 * The output of {@link ApproveTimeOffCommand}.
 */
export interface ApproveTimeOffCommandOutput extends ApproveTimeOffResponse, __MetadataBearer {}

/**
 * <p>Approves a time off request. Evaluates agent time off balances and group time off allowances before approving. <code>RuleFailureAction</code> controls what happens when these evaluations fail. The request is rejected with <code>CONFLICTING_TIME_OFF_REQUEST</code> if it overlaps another time off request for the user that is <code>APPROVED</code> or being approved.</p> <p>The time off request is processed asynchronously, so a successful call doesn't indicate the final status. Read the resulting status with <code>GetTimeOff</code> or from the time off state-change events.</p> <p>Approving an <code>APPROVED</code> request succeeds without a change. Approving a <code>REJECTED</code> request evaluates the rules again, so it can end <code>APPROVED</code> or <code>REJECTED</code>, and repeating the call can give a different result. Check the status with <code>GetTimeOff</code> before you retry.</p> <p>Returns <code>ConflictException</code> if the request is <code>PENDING</code> or <code>CANCELLED</code>. <code>PENDING</code> means Connect Customer is still processing the request asynchronously. Wait until <code>GetTimeOff</code> returns a status other than <code>PENDING</code>, and then retry.</p> <important> <p>When the approval succeeds, Connect Customer cancels any overtime or voluntary time off activity that overlaps the approved window.</p> </important> <note> <p>Connect Customer doesn't check whether the principal that calls this operation supervises the user. The staffing group's approval settings also don't apply. IAM permissions are the only control. If you allow a principal to call this operation, that principal can send <code>RuleFailureAction</code> <code>OVERRIDE</code> and approve a request past failed rules. Grant permission for this operation only to principals that you trust to override time off rules.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectSchedulingClient, ApproveTimeOffCommand } from "@aws-sdk/client-connectscheduling"; // ES Modules import
 * // const { ConnectSchedulingClient, ApproveTimeOffCommand } = require("@aws-sdk/client-connectscheduling"); // CommonJS import
 * // import type { ConnectSchedulingClientConfig } from "@aws-sdk/client-connectscheduling";
 * const config = {}; // type is ConnectSchedulingClientConfig
 * const client = new ConnectSchedulingClient(config);
 * const input = { // ApproveTimeOffRequest
 *   InstanceId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 *   TimeOffId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   RuleFailureAction: "REJECT" || "OVERRIDE",
 * };
 * const command = new ApproveTimeOffCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ApproveTimeOffCommandInput - {@link ApproveTimeOffCommandInput}
 * @returns {@link ApproveTimeOffCommandOutput}
 * @see {@link ApproveTimeOffCommandInput} for command's `input` shape.
 * @see {@link ApproveTimeOffCommandOutput} for command's `response` shape.
 * @see {@link ConnectSchedulingClientResolvedConfig | config} for ConnectSchedulingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of a conflict with the current state of the resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link ConnectSchedulingServiceException}
 * <p>Base exception class for all service exceptions from ConnectScheduling service.</p>
 *
 *
 * @example To approve a time off request past a failed rule
 * ```javascript
 * // The following example approves a time off request with RuleFailureAction OVERRIDE, so a failed rule is recorded as a WARNING instead of rejecting the request.
 * const input = {
 *   Description: "Approved with coverage from the evening shift",
 *   InstanceId: "12345678-1234-1234-1234-123456789012",
 *   RuleFailureAction: "OVERRIDE",
 *   TimeOffId: "abcdef12-3456-7890-abcd-ef1234567890",
 *   UserId: "87654321-4321-4321-4321-210987654321"
 * };
 * const command = new ApproveTimeOffCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class ApproveTimeOffCommand extends command<ApproveTimeOffCommandInput, ApproveTimeOffCommandOutput>(
  _ep0,
  _mw0,
  "ApproveTimeOff",
  ApproveTimeOff$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ApproveTimeOffRequest;
      output: {};
    };
    sdk: {
      input: ApproveTimeOffCommandInput;
      output: ApproveTimeOffCommandOutput;
    };
  };
}
