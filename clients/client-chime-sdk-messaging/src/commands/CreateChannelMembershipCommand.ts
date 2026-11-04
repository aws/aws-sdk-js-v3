// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateChannelMembershipRequest, CreateChannelMembershipResponse } from "../models/models_0";
import { CreateChannelMembership$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateChannelMembershipCommand}.
 */
export interface CreateChannelMembershipCommandInput extends CreateChannelMembershipRequest {}
/**
 * @public
 *
 * The output of {@link CreateChannelMembershipCommand}.
 */
export interface CreateChannelMembershipCommandOutput extends CreateChannelMembershipResponse, __MetadataBearer {}

/**
 * Adds a member to a channel. The `InvitedBy` field in `ChannelMembership` is derived from the request header. A channel member can:
 *
 * - List messages
 * - Send messages
 * - Receive messages
 * - Edit their own messages
 * - Leave the channel
 *
 * Privacy settings impact this action as follows:
 *
 * - Public Channels: You do not need to be a member to list messages, but you must be a member to send messages.
 * - Private Channels: You must be a member to list or send messages.
 *
 * > **Note:** The `x-amz-chime-bearer` request header is mandatory. Use the ARN of the `AppInstanceUserArn` or `AppInstanceBot` that makes the API call as the value in the header.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, CreateChannelMembershipCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, CreateChannelMembershipCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // CreateChannelMembershipRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   MemberArn: "STRING_VALUE", // required
 *   Type: "DEFAULT" || "HIDDEN", // required
 *   ChimeBearer: "STRING_VALUE", // required
 *   SubChannelId: "STRING_VALUE",
 * };
 * const command = new CreateChannelMembershipCommand(input);
 * const response = await client.send(command);
 * // { // CreateChannelMembershipResponse
 * //   ChannelArn: "STRING_VALUE",
 * //   Member: { // Identity
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //   },
 * //   SubChannelId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateChannelMembershipCommandInput - {@link CreateChannelMembershipCommandInput}
 * @returns {@link CreateChannelMembershipCommandOutput}
 * @see {@link CreateChannelMembershipCommandInput} for command's `input` shape.
 * @see {@link CreateChannelMembershipCommandOutput} for command's `response` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the resources in the request does not exist in the system.
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
export class CreateChannelMembershipCommand extends command<CreateChannelMembershipCommandInput, CreateChannelMembershipCommandOutput>(
  _ep0,
  _mw0,
  "CreateChannelMembership",
  CreateChannelMembership$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateChannelMembershipRequest;
      output: CreateChannelMembershipResponse;
    };
    sdk: {
      input: CreateChannelMembershipCommandInput;
      output: CreateChannelMembershipCommandOutput;
    };
  };
}
