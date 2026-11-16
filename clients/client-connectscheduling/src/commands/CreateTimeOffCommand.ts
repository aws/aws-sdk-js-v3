// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateTimeOffRequest, CreateTimeOffResponse } from "../models/models_0";
import { CreateTimeOff$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateTimeOffCommand}.
 */
export interface CreateTimeOffCommandInput extends CreateTimeOffRequest {}
/**
 * @public
 *
 * The output of {@link CreateTimeOffCommand}.
 */
export interface CreateTimeOffCommandOutput extends CreateTimeOffResponse, __MetadataBearer {}

/**
 * <p>Creates a time off request for a user. You don't provide a status, because Connect Customer owns the request lifecycle. To get the decided status, call <code>GetTimeOff</code> or use the time off state-change events.</p> <p> <code>ApprovalType</code> controls who approves the request. You can specify one of the following values:</p> <ul> <li> <p> <code>AWAIT_APPROVAL</code>: the request waits in <code>AWAITING_APPROVAL</code> until you call <code>ApproveTimeOff</code> or <code>RejectTimeOff</code>. Rule evaluation and the overlap check run at approval, not at creation. A waiting request doesn't reserve its window, so another request for the same window can be approved first.</p> </li> <li> <p> <code>AUTOMATIC</code>: Connect Customer evaluates the rules (time off balances and group allowances) and decides the request. The request can be <code>PENDING</code> while Connect Customer decides, and then ends <code>APPROVED</code> or <code>REJECTED</code>. If it overlaps another time off request for the user, the requested time off ends <code>REJECTED</code> with <code>CONFLICTING_TIME_OFF_REQUEST</code>. It also ends <code>REJECTED</code> if it overlaps overtime or voluntary time off. If the whole window is in the past, Connect Customer records failed rules as <code>WARNING</code> and doesn't reject the request, whatever the <code>RuleFailureAction</code>.</p> </li> </ul> <p>The staffing group's <i>Supervisor approval needed</i> setting doesn't apply to this operation. <code>ApprovalType</code> alone decides whether the request waits for approval. The operation fails with <code>ValidationException</code> on <code>UserId</code> in the following cases:</p> <ul> <li> <p>The user isn't in a staffing group, or the staffing group isn't associated with a forecast group.</p> </li> <li> <p>Time off isn't <a href="https://docs.aws.amazon.com/connect/latest/adminguide/enable-to.html">enabled</a> for the user's staffing group, or the user's staff rules don't allow time off.</p> </li> </ul> <p>To change the dates of a request, cancel it with <code>CancelTimeOff</code> and create a new request. The new request has a new <code>TimeOffId</code>.</p> <note> <p>Connect Customer doesn't check whether the principal that calls this operation supervises the user. The staffing group's approval settings also don't apply. IAM permissions are the only control. If you allow a principal to call this operation, that principal can send <code>ApprovalType</code> <code>AUTOMATIC</code> with <code>RuleFailureAction</code> <code>OVERRIDE</code> and approve a request past failed rules. Grant permission for this operation only to principals that you trust to override time off rules.</p> </note> <p>For information about time off in the Connect Customer admin website, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/scheduling-time-off.html">Time off management</a> in the <i>Connect Customer Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectSchedulingClient, CreateTimeOffCommand } from "@aws-sdk/client-connectscheduling"; // ES Modules import
 * // const { ConnectSchedulingClient, CreateTimeOffCommand } = require("@aws-sdk/client-connectscheduling"); // CommonJS import
 * // import type { ConnectSchedulingClientConfig } from "@aws-sdk/client-connectscheduling";
 * const config = {}; // type is ConnectSchedulingClientConfig
 * const client = new ConnectSchedulingClient(config);
 * const input = { // CreateTimeOffRequest
 *   InstanceId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 *   ShiftActivityId: "STRING_VALUE", // required
 *   StartAt: new Date("TIMESTAMP"), // required
 *   EndAt: new Date("TIMESTAMP"), // required
 *   Description: "STRING_VALUE",
 *   ApprovalType: "AWAIT_APPROVAL" || "AUTOMATIC", // required
 *   RuleFailureAction: "REJECT" || "OVERRIDE",
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new CreateTimeOffCommand(input);
 * const response = await client.send(command);
 * // { // CreateTimeOffResponse
 * //   TimeOffId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateTimeOffCommandInput - {@link CreateTimeOffCommandInput}
 * @returns {@link CreateTimeOffCommandOutput}
 * @see {@link CreateTimeOffCommandInput} for command's `input` shape.
 * @see {@link CreateTimeOffCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request would cause a service quota to be exceeded.</p>
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
 * @example To create a time off request that waits for approval
 * ```javascript
 * // The following example creates a time off request for one day. The request is created in AWAITING_APPROVAL until an ApproveTimeOff or RejectTimeOff call decides it.
 * const input = {
 *   ApprovalType: "AWAIT_APPROVAL",
 *   Description: "Family event",
 *   EndAt: 1795453200,
 *   InstanceId: "12345678-1234-1234-1234-123456789012",
 *   ShiftActivityId: "11112222-3333-4444-5555-666677778888",
 *   StartAt: 1795424400,
 *   UserId: "87654321-4321-4321-4321-210987654321"
 * };
 * const command = new CreateTimeOffCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   TimeOffId: "abcdef12-3456-7890-abcd-ef1234567890"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateTimeOffCommand extends command<CreateTimeOffCommandInput, CreateTimeOffCommandOutput>(
  _ep0,
  _mw0,
  "CreateTimeOff",
  CreateTimeOff$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateTimeOffRequest;
      output: CreateTimeOffResponse;
    };
    sdk: {
      input: CreateTimeOffCommandInput;
      output: CreateTimeOffCommandOutput;
    };
  };
}
