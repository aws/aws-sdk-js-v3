// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteChannelModeratorRequest } from "../models/models_0";
import { DeleteChannelModerator$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteChannelModeratorCommand}.
 */
export interface DeleteChannelModeratorCommandInput extends DeleteChannelModeratorRequest {}
/**
 * @public
 *
 * The output of {@link DeleteChannelModeratorCommand}.
 */
export interface DeleteChannelModeratorCommandOutput extends __MetadataBearer {}

/**
 * Deletes a channel moderator.
 *
 * > **Note:** The `x-amz-chime-bearer` request header is mandatory. Use the ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in the header.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, DeleteChannelModeratorCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, DeleteChannelModeratorCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // DeleteChannelModeratorRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   ChannelModeratorArn: "STRING_VALUE", // required
 *   ChimeBearer: "STRING_VALUE", // required
 * };
 * const command = new DeleteChannelModeratorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteChannelModeratorCommandInput - {@link DeleteChannelModeratorCommandInput}
 * @returns {@link DeleteChannelModeratorCommandOutput}
 * @see {@link DeleteChannelModeratorCommandInput} for command's `input` shape.
 * @see {@link DeleteChannelModeratorCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for ChimeSDKMessagingClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
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
export class DeleteChannelModeratorCommand extends command<DeleteChannelModeratorCommandInput, DeleteChannelModeratorCommandOutput>(
  _ep0,
  _mw0,
  "DeleteChannelModerator",
  DeleteChannelModerator$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteChannelModeratorRequest;
      output: {};
    };
    sdk: {
      input: DeleteChannelModeratorCommandInput;
      output: DeleteChannelModeratorCommandOutput;
    };
  };
}
