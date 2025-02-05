// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateRoutingProfileAgentAvailabilityTimerRequest } from "../models/models_2";
import {
  de_UpdateRoutingProfileAgentAvailabilityTimerCommand,
  se_UpdateRoutingProfileAgentAvailabilityTimerCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateRoutingProfileAgentAvailabilityTimerCommand}.
 */
export interface UpdateRoutingProfileAgentAvailabilityTimerCommandInput
  extends UpdateRoutingProfileAgentAvailabilityTimerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRoutingProfileAgentAvailabilityTimerCommand}.
 */
export interface UpdateRoutingProfileAgentAvailabilityTimerCommandOutput extends __MetadataBearer {}

/**
 * <p>Whether agents with this routing profile will have their routing order calculated based on
 *     <i>time since their last inbound contact</i> or <i>longest idle
 *     time</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateRoutingProfileAgentAvailabilityTimerCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateRoutingProfileAgentAvailabilityTimerCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @public
 */
export class UpdateRoutingProfileAgentAvailabilityTimerCommand extends $Command
  .classBuilder<
    UpdateRoutingProfileAgentAvailabilityTimerCommandInput,
    UpdateRoutingProfileAgentAvailabilityTimerCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "UpdateRoutingProfileAgentAvailabilityTimer", {})
  .n("ConnectClient", "UpdateRoutingProfileAgentAvailabilityTimerCommand")
  .f(void 0, void 0)
  .ser(se_UpdateRoutingProfileAgentAvailabilityTimerCommand)
  .de(de_UpdateRoutingProfileAgentAvailabilityTimerCommand)
  .build() {
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
