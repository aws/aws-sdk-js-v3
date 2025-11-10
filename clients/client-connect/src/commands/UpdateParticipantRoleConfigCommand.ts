// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateParticipantRoleConfigRequest, UpdateParticipantRoleConfigResponse } from "../models/models_3";
import { UpdateParticipantRoleConfig } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateParticipantRoleConfigCommand}.
 */
export interface UpdateParticipantRoleConfigCommandInput extends UpdateParticipantRoleConfigRequest {}
/**
 * @public
 *
 * The output of {@link UpdateParticipantRoleConfigCommand}.
 */
export interface UpdateParticipantRoleConfigCommandOutput
  extends UpdateParticipantRoleConfigResponse,
    __MetadataBearer {}

/**
 * <p>Updates timeouts for when human chat participants are to be considered idle, and when agents
 *    are automatically disconnected from a chat due to idleness. You can set four timers:</p>
 *          <ul>
 *             <li>
 *                <p>Customer idle timeout</p>
 *             </li>
 *             <li>
 *                <p>Customer auto-disconnect timeout</p>
 *             </li>
 *             <li>
 *                <p>Agent idle timeout</p>
 *             </li>
 *             <li>
 *                <p>Agent auto-disconnect timeout</p>
 *             </li>
 *          </ul>
 *          <p>For more information about how chat timeouts work, see
 *    <a href="https://docs.aws.amazon.com/connect/latest/adminguide/setup-chat-timeouts.html">Set up chat timeouts for human participants</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateParticipantRoleConfigCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateParticipantRoleConfigCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateParticipantRoleConfigRequest
 *   InstanceId: "STRING_VALUE", // required
 *   ContactId: "STRING_VALUE", // required
 *   ChannelConfiguration: { // UpdateParticipantRoleConfigChannelInfo Union: only one key present
 *     Chat: { // ChatParticipantRoleConfig
 *       ParticipantTimerConfigList: [ // ParticipantTimerConfigList // required
 *         { // ParticipantTimerConfiguration
 *           ParticipantRole: "CUSTOMER" || "AGENT", // required
 *           TimerType: "IDLE" || "DISCONNECT_NONCUSTOMER", // required
 *           TimerValue: { // ParticipantTimerValue Union: only one key present
 *             ParticipantTimerAction: "Unset",
 *             ParticipantTimerDurationInMinutes: Number("int"),
 *           },
 *         },
 *       ],
 *     },
 *   },
 * };
 * const command = new UpdateParticipantRoleConfigCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateParticipantRoleConfigCommandInput - {@link UpdateParticipantRoleConfigCommandInput}
 * @returns {@link UpdateParticipantRoleConfigCommandOutput}
 * @see {@link UpdateParticipantRoleConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateParticipantRoleConfigCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this action.</p>
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
export class UpdateParticipantRoleConfigCommand extends $Command
  .classBuilder<
    UpdateParticipantRoleConfigCommandInput,
    UpdateParticipantRoleConfigCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateParticipantRoleConfig", {})
  .n("ConnectClient", "UpdateParticipantRoleConfigCommand")
  .sc(UpdateParticipantRoleConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateParticipantRoleConfigRequest;
      output: {};
    };
    sdk: {
      input: UpdateParticipantRoleConfigCommandInput;
      output: UpdateParticipantRoleConfigCommandOutput;
    };
  };
}
