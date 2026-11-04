// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteChannelFlowRequest } from "../models/models_0";
import { DeleteChannelFlow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes a channel flow, an irreversible process. This is a developer API.
 *
 * > **Note:** This API works only when the channel flow is not associated with any channel. To get a list of all channels that a channel flow is associated with, use the `ListChannelsAssociatedWithChannelFlow` API. Use the `DisassociateChannelFlow` API to disassociate a channel flow from all channels.
 *
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
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The service encountered an unexpected error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link ThrottledClientException} (client fault)
 *
 * The client exceeded its request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client is not currently authorized to make the request.
 *
 * @throws {@link ChimeSDKMessagingServiceException}
 *
 * Base exception class for all service exceptions from ChimeSDKMessaging service.
 *
 * @public
 */
export class DeleteChannelFlowCommand extends command<DeleteChannelFlowCommandInput, DeleteChannelFlowCommandOutput>(
  _ep0,
  _mw0,
  "DeleteChannelFlow",
  DeleteChannelFlow$
) {
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
