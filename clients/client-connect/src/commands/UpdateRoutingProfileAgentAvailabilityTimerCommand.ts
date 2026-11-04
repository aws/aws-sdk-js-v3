// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRoutingProfileAgentAvailabilityTimerRequest } from "../models/models_4";
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
 * Whether agents with this routing profile will have their routing order calculated based on *time since their last inbound contact* or *longest idle time*.
 *
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
 *
 * Request processing failed because of an error or failure with the service.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * One or more of the specified parameters are not valid.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *
 * The request is not valid.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The throttling limit has been exceeded.
 *
 * @throws {@link ConnectServiceException}
 *
 * Base exception class for all service exceptions from Connect service.
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
