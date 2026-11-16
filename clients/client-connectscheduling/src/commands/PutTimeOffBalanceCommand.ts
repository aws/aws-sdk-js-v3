// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutTimeOffBalanceRequest, PutTimeOffBalanceResponse } from "../models/models_0";
import { PutTimeOffBalance$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutTimeOffBalanceCommand}.
 */
export interface PutTimeOffBalanceCommandInput extends PutTimeOffBalanceRequest {}
/**
 * @public
 *
 * The output of {@link PutTimeOffBalanceCommand}.
 */
export interface PutTimeOffBalanceCommandOutput extends PutTimeOffBalanceResponse, __MetadataBearer {}

/**
 * <p>Sets the time off balance for one user and shift activity. The value replaces the existing balance rather than adjusting it, so you can safely retry the call. This operation can't remove a balance. To remove one, upload a blank balance in the Connect Customer admin website. For more information, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/upload-timeoff-balance.html">Import an agent's time off balance</a> in the <i>Connect Customer Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectSchedulingClient, PutTimeOffBalanceCommand } from "@aws-sdk/client-connectscheduling"; // ES Modules import
 * // const { ConnectSchedulingClient, PutTimeOffBalanceCommand } = require("@aws-sdk/client-connectscheduling"); // CommonJS import
 * // import type { ConnectSchedulingClientConfig } from "@aws-sdk/client-connectscheduling";
 * const config = {}; // type is ConnectSchedulingClientConfig
 * const client = new ConnectSchedulingClient(config);
 * const input = { // PutTimeOffBalanceRequest
 *   InstanceId: "STRING_VALUE", // required
 *   UserId: "STRING_VALUE", // required
 *   ShiftActivityId: "STRING_VALUE", // required
 *   Balance: { // Duration
 *     Value: Number("int"), // required
 *     Unit: "MINUTES" || "HOURS" || "DAYS", // required
 *   },
 * };
 * const command = new PutTimeOffBalanceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutTimeOffBalanceCommandInput - {@link PutTimeOffBalanceCommandInput}
 * @returns {@link PutTimeOffBalanceCommandOutput}
 * @see {@link PutTimeOffBalanceCommandInput} for command's `input` shape.
 * @see {@link PutTimeOffBalanceCommandOutput} for command's `response` shape.
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
 * @example To set a user's time off balance
 * ```javascript
 * // The following example sets a user's balance for one time off activity to 80 hours, replacing any existing balance.
 * const input = {
 *   Balance: {
 *     Unit: "HOURS",
 *     Value: 80
 *   },
 *   InstanceId: "12345678-1234-1234-1234-123456789012",
 *   ShiftActivityId: "11112222-3333-4444-5555-666677778888",
 *   UserId: "87654321-4321-4321-4321-210987654321"
 * };
 * const command = new PutTimeOffBalanceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class PutTimeOffBalanceCommand extends command<PutTimeOffBalanceCommandInput, PutTimeOffBalanceCommandOutput>(
  _ep0,
  _mw0,
  "PutTimeOffBalance",
  PutTimeOffBalance$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutTimeOffBalanceRequest;
      output: {};
    };
    sdk: {
      input: PutTimeOffBalanceCommandInput;
      output: PutTimeOffBalanceCommandOutput;
    };
  };
}
