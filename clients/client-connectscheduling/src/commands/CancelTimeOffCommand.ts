// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelTimeOffRequest, CancelTimeOffResponse } from "../models/models_0";
import { CancelTimeOff$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelTimeOffCommand}.
 */
export interface CancelTimeOffCommandInput extends CancelTimeOffRequest {}
/**
 * @public
 *
 * The output of {@link CancelTimeOffCommand}.
 */
export interface CancelTimeOffCommandOutput extends CancelTimeOffResponse, __MetadataBearer {}

/**
 * <p>Cancels a time off request.</p> <p>Cancelling a <code>CANCELLED</code> request succeeds without a change. Returns <code>ConflictException</code> if the request is <code>PENDING</code>, which means Connect Customer is still processing the request asynchronously. Wait until <code>GetTimeOff</code> returns a status other than <code>PENDING</code>, and then retry.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectSchedulingClient, CancelTimeOffCommand } from "@aws-sdk/client-connectscheduling"; // ES Modules import
 * // const { ConnectSchedulingClient, CancelTimeOffCommand } = require("@aws-sdk/client-connectscheduling"); // CommonJS import
 * // import type { ConnectSchedulingClientConfig } from "@aws-sdk/client-connectscheduling";
 * const config = {}; // type is ConnectSchedulingClientConfig
 * const client = new ConnectSchedulingClient(config);
 * const input = { // CancelTimeOffRequest
 *   InstanceId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 *   TimeOffId: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 * };
 * const command = new CancelTimeOffCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelTimeOffCommandInput - {@link CancelTimeOffCommandInput}
 * @returns {@link CancelTimeOffCommandOutput}
 * @see {@link CancelTimeOffCommandInput} for command's `input` shape.
 * @see {@link CancelTimeOffCommandOutput} for command's `response` shape.
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
 * @example To cancel a time off request
 * ```javascript
 * // The following example cancels a time off request and records the reason on the cancellation.
 * const input = {
 *   Description: "Plans changed",
 *   InstanceId: "12345678-1234-1234-1234-123456789012",
 *   TimeOffId: "abcdef12-3456-7890-abcd-ef1234567890",
 *   UserId: "87654321-4321-4321-4321-210987654321"
 * };
 * const command = new CancelTimeOffCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class CancelTimeOffCommand extends command<CancelTimeOffCommandInput, CancelTimeOffCommandOutput>(
  _ep0,
  _mw0,
  "CancelTimeOff",
  CancelTimeOff$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelTimeOffRequest;
      output: {};
    };
    sdk: {
      input: CancelTimeOffCommandInput;
      output: CancelTimeOffCommandOutput;
    };
  };
}
