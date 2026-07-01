// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateJobShipmentStateRequest, UpdateJobShipmentStateResult } from "../models/models_0";
import { UpdateJobShipmentState$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateJobShipmentStateCommand}.
 */
export interface UpdateJobShipmentStateCommandInput extends UpdateJobShipmentStateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateJobShipmentStateCommand}.
 */
export interface UpdateJobShipmentStateCommandOutput extends UpdateJobShipmentStateResult, __MetadataBearer {}

/**
 * <p>Updates the state when a shipment state changes to a different state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, UpdateJobShipmentStateCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, UpdateJobShipmentStateCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * // import type { SnowballClientConfig } from "@aws-sdk/client-snowball";
 * const config = {}; // type is SnowballClientConfig
 * const client = new SnowballClient(config);
 * const input = { // UpdateJobShipmentStateRequest
 *   JobId: "STRING_VALUE", // required
 *   ShipmentState: "RECEIVED" || "RETURNED", // required
 * };
 * const command = new UpdateJobShipmentStateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateJobShipmentStateCommandInput - {@link UpdateJobShipmentStateCommandInput}
 * @returns {@link UpdateJobShipmentStateCommandOutput}
 * @see {@link UpdateJobShipmentStateCommandInput} for command's `input` shape.
 * @see {@link UpdateJobShipmentStateCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link InvalidJobStateException} (client fault)
 *  <p>The action can't be performed because the job's current state doesn't allow that action
 *       to be performed.</p>
 *
 * @throws {@link InvalidResourceException} (client fault)
 *  <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 *
 * @public
 */
export class UpdateJobShipmentStateCommand extends command<UpdateJobShipmentStateCommandInput, UpdateJobShipmentStateCommandOutput>(
  _ep0,
  _mw0,
  "UpdateJobShipmentState",
  UpdateJobShipmentState$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateJobShipmentStateRequest;
      output: {};
    };
    sdk: {
      input: UpdateJobShipmentStateCommandInput;
      output: UpdateJobShipmentStateCommandOutput;
    };
  };
}
