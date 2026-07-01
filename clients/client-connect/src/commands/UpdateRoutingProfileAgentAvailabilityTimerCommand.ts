// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRoutingProfileAgentAvailabilityTimerRequest } from "../models/models_3";
import { UpdateRoutingProfileAgentAvailabilityTimer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRoutingProfileAgentAvailabilityTimerCommand}.
 */
export interface UpdateRoutingProfileAgentAvailabilityTimerCommandInput extends UpdateRoutingProfileAgentAvailabilityTimerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRoutingProfileAgentAvailabilityTimerCommand}.
 */
export interface UpdateRoutingProfileAgentAvailabilityTimerCommandOutput extends __MetadataBearer {}

/**
 * <p>Whether agents with this routing profile will have their routing order calculated based on <i>time since
 *     their last inbound contact</i> or <i>longest idle time</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateRoutingProfileAgentAvailabilityTimerCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateRoutingProfileAgentAvailabilityTimerCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateRoutingProfileAgentAvailabilityTimerRequest
 *   InstanceId: "STRING_VALUE", // required
 *   RoutingProfileId: "STRING_VALUE", // required
 *   AgentAvailabilityTimer: "TIME_SINCE_LAST_ACTIVITY" || "TIME_SINCE_LAST_INBOUND", // required
 * };
 * const command = new UpdateRoutingProfileAgentAvailabilityTimerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateRoutingProfileAgentAvailabilityTimerCommandInput - {@link UpdateRoutingProfileAgentAvailabilityTimerCommandInput}
 * @returns {@link UpdateRoutingProfileAgentAvailabilityTimerCommandOutput}
 * @see {@link UpdateRoutingProfileAgentAvailabilityTimerCommandInput} for command's `input` shape.
 * @see {@link UpdateRoutingProfileAgentAvailabilityTimerCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class UpdateRoutingProfileAgentAvailabilityTimerCommand extends command<UpdateRoutingProfileAgentAvailabilityTimerCommandInput, UpdateRoutingProfileAgentAvailabilityTimerCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRoutingProfileAgentAvailabilityTimer",
  UpdateRoutingProfileAgentAvailabilityTimer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRoutingProfileAgentAvailabilityTimerRequest;
      output: {};
    };
    sdk: {
      input: UpdateRoutingProfileAgentAvailabilityTimerCommandInput;
      output: UpdateRoutingProfileAgentAvailabilityTimerCommandOutput;
    };
  };
}
