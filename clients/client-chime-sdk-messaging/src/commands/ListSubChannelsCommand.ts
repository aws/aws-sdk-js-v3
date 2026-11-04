// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSubChannelsRequest, ListSubChannelsResponse } from "../models/models_0";
import { ListSubChannels$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListSubChannelsCommand}.
 */
export interface ListSubChannelsCommandInput extends ListSubChannelsRequest {}
/**
 * @public
 *
 * The output of {@link ListSubChannelsCommand}.
 */
export interface ListSubChannelsCommandOutput extends ListSubChannelsResponse, __MetadataBearer {}

/**
 * Lists all the SubChannels in an elastic channel when given a channel ID. Available only to the app instance admins and channel moderators of elastic channels.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, ListSubChannelsCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, ListSubChannelsCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // ListSubChannelsRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   ChimeBearer: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListSubChannelsCommand(input);
 * const response = await client.send(command);
 * // { // ListSubChannelsResponse
 * //   ChannelArn: "STRING_VALUE",
 * //   SubChannels: [ // SubChannelSummaryList
 * //     { // SubChannelSummary
 * //       SubChannelId: "STRING_VALUE",
 * //       MembershipCount: Number("int"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSubChannelsCommandInput - {@link ListSubChannelsCommandInput}
 * @returns {@link ListSubChannelsCommandOutput}
 * @see {@link ListSubChannelsCommandInput} for command's `input` shape.
 * @see {@link ListSubChannelsCommandOutput} for command's `response` shape.
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
export class ListSubChannelsCommand extends command<ListSubChannelsCommandInput, ListSubChannelsCommandOutput>(
  _ep0,
  _mw0,
  "ListSubChannels",
  ListSubChannels$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSubChannelsRequest;
      output: ListSubChannelsResponse;
    };
    sdk: {
      input: ListSubChannelsCommandInput;
      output: ListSubChannelsCommandOutput;
    };
  };
}
