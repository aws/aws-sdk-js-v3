// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ChimeSDKMessagingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMessagingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteChannelFlowRequest } from "../models/models_0";
import { de_DeleteChannelFlowCommand, se_DeleteChannelFlowCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteChannelFlowCommand}.
 */
export interface DeleteChannelFlowCommandInput extends DeleteChannelFlowRequest {}
/**
 * @public
 *
 * The output of {@link DeleteChannelFlowCommand}.
 */
export interface DeleteChannelFlowCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a channel flow, an irreversible process. This is a developer API.</p>
 *          <note>
 *             <p> This API works only when the channel flow is not associated with any channel. To get a list of all channels that a channel flow is associated with, use the
 *            <code>ListChannelsAssociatedWithChannelFlow</code> API. Use the <code>DisassociateChannelFlow</code> API to disassociate a channel flow from all channels. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, DeleteChannelFlowCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, DeleteChannelFlowCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // DeleteChannelFlowRequest
 *   ChannelFlowArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteChannelFlowCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteChannelFlowCommandInput - {@link DeleteChannelFlowCommandInput}
 * @returns {@link DeleteChannelFlowCommandOutput}
 * @see {@link DeleteChannelFlowCommandInput} for command's `input` shape.
 * @see {@link DeleteChannelFlowCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for ChimeSDKMessagingClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeSDKMessagingServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKMessaging service.</p>
 *
 *
 * @public
 */
export class DeleteChannelFlowCommand extends $Command
  .classBuilder<
    DeleteChannelFlowCommandInput,
    DeleteChannelFlowCommandOutput,
    ChimeSDKMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMessagingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeMessagingService", "DeleteChannelFlow", {})
  .n("ChimeSDKMessagingClient", "DeleteChannelFlowCommand")
  .f(void 0, void 0)
  .ser(se_DeleteChannelFlowCommand)
  .de(de_DeleteChannelFlowCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteChannelFlowRequest;
      output: {};
    };
    sdk: {
      input: DeleteChannelFlowCommandInput;
      output: DeleteChannelFlowCommandOutput;
    };
  };
}
