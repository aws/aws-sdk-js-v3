// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ChimeSDKMessagingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMessagingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { GetChannelMembershipPreferencesRequest, GetChannelMembershipPreferencesResponse } from "../models/models_0";
import { GetChannelMembershipPreferences } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface GetChannelMembershipPreferencesCommandOutput
  extends GetChannelMembershipPreferencesResponse,
    __MetadataBearer {}

/**
 * <p>Gets the membership preferences of an <code>AppInstanceUser</code> or <code>AppInstanceBot</code>
 *          for the specified channel. A user or a bot must be a member of the channel and own the membership in order to retrieve membership preferences.
 *          Users or bots in the <code>AppInstanceAdmin</code> and channel moderator roles can't
 *          retrieve preferences for other users or bots. Banned users or bots can't retrieve membership preferences for the
 *          channel from which they are banned.</p>
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *          ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in
 *          the header.</p>
 *          </note>
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
 *  <p>The input parameters don't match the service's restrictions.</p>
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
export class GetChannelMembershipPreferencesCommand extends $Command
  .classBuilder<
    GetChannelMembershipPreferencesCommandInput,
    GetChannelMembershipPreferencesCommandOutput,
    ChimeSDKMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMessagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeMessagingService", "GetChannelMembershipPreferences", {})
  .n("ChimeSDKMessagingClient", "GetChannelMembershipPreferencesCommand")
  .sc(GetChannelMembershipPreferences)
  .build() {
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
