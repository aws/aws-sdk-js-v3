// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateChannelModeratorRequest, CreateChannelModeratorResponse } from "../models/models_0";
import { CreateChannelModerator$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateChannelModeratorCommand}.
 */
export interface CreateChannelModeratorCommandInput extends CreateChannelModeratorRequest {}
/**
 * @public
 *
 * The output of {@link CreateChannelModeratorCommand}.
 */
export interface CreateChannelModeratorCommandOutput extends CreateChannelModeratorResponse, __MetadataBearer {}

/**
 * Creates a new `ChannelModerator`. A channel moderator can:
 *
 * - Add and remove other members of the channel.
 * - Add and remove other moderators of the channel.
 * - Add and remove user bans for the channel.
 * - Redact messages in the channel.
 * - List messages in the channel.
 *
 * > **Note:** The `x-amz-chime-bearer` request header is mandatory. Use the ARN of the `AppInstanceUser` or `AppInstanceBot`of the user that makes the API call as the value in the header.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, CreateChannelModeratorCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, CreateChannelModeratorCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // CreateChannelModeratorRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   ChannelModeratorArn: "STRING_VALUE", // required
 *   ChimeBearer: "STRING_VALUE", // required
 * };
 * const command = new CreateChannelModeratorCommand(input);
 * const response = await client.send(command);
 * // { // CreateChannelModeratorResponse
 * //   ChannelArn: "STRING_VALUE",
 * //   ChannelModerator: { // Identity
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateChannelModeratorCommandInput - {@link CreateChannelModeratorCommandInput}
 * @returns {@link CreateChannelModeratorCommandOutput}
 * @see {@link CreateChannelModeratorCommandInput} for command's `input` shape.
 * @see {@link CreateChannelModeratorCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * The request exceeds the resource limit.
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
export class CreateChannelModeratorCommand extends command<CreateChannelModeratorCommandInput, CreateChannelModeratorCommandOutput>(
  _ep0,
  _mw0,
  "CreateChannelModerator",
  CreateChannelModerator$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateChannelModeratorRequest;
      output: CreateChannelModeratorResponse;
    };
    sdk: {
      input: CreateChannelModeratorCommandInput;
      output: CreateChannelModeratorCommandOutput;
    };
  };
}
