// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetChannelMembershipPreferencesRequest,
  GetChannelMembershipPreferencesResponse,
} from "../models/models_0";
import { GetChannelMembershipPreferences$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetChannelMembershipPreferencesCommand}.
 */
export interface GetChannelMembershipPreferencesCommandInput extends GetChannelMembershipPreferencesRequest {}
/**
 * @public
 *
 * The output of {@link GetChannelMembershipPreferencesCommand}.
 */
export interface GetChannelMembershipPreferencesCommandOutput extends GetChannelMembershipPreferencesResponse, __MetadataBearer {}

/**
 * Gets the membership preferences of an `AppInstanceUser` or `AppInstanceBot` for the specified channel. A user or a bot must be a member of the channel and own the membership in order to retrieve membership preferences. Users or bots in the `AppInstanceAdmin` and channel moderator roles can't retrieve preferences for other users or bots. Banned users or bots can't retrieve membership preferences for the channel from which they are banned.
 *
 * > **Note:** The `x-amz-chime-bearer` request header is mandatory. Use the ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in the header.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, GetChannelMembershipPreferencesCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, GetChannelMembershipPreferencesCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // GetChannelMembershipPreferencesRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   MemberArn: "STRING_VALUE", // required
 *   ChimeBearer: "STRING_VALUE", // required
 * };
 * const command = new GetChannelMembershipPreferencesCommand(input);
 * const response = await client.send(command);
 * // { // GetChannelMembershipPreferencesResponse
 * //   ChannelArn: "STRING_VALUE",
 * //   Member: { // Identity
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //   },
 * //   Preferences: { // ChannelMembershipPreferences
 * //     PushNotifications: { // PushNotificationPreferences
 * //       AllowNotifications: "ALL" || "NONE" || "FILTERED", // required
 * //       FilterRule: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetChannelMembershipPreferencesCommandInput - {@link GetChannelMembershipPreferencesCommandInput}
 * @returns {@link GetChannelMembershipPreferencesCommandOutput}
 * @see {@link GetChannelMembershipPreferencesCommandInput} for command's `input` shape.
 * @see {@link GetChannelMembershipPreferencesCommandOutput} for command's `response` shape.
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
export class GetChannelMembershipPreferencesCommand extends command<GetChannelMembershipPreferencesCommandInput, GetChannelMembershipPreferencesCommandOutput>(
  _ep0,
  _mw0,
  "GetChannelMembershipPreferences",
  GetChannelMembershipPreferences$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetChannelMembershipPreferencesRequest;
      output: GetChannelMembershipPreferencesResponse;
    };
    sdk: {
      input: GetChannelMembershipPreferencesCommandInput;
      output: GetChannelMembershipPreferencesCommandOutput;
    };
  };
}
