// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListChannelsAssociatedWithChannelFlowRequest,
  ListChannelsAssociatedWithChannelFlowResponse,
} from "../models/models_0";
import { ListChannelsAssociatedWithChannelFlow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListChannelsAssociatedWithChannelFlowCommand}.
 */
export interface ListChannelsAssociatedWithChannelFlowCommandInput extends ListChannelsAssociatedWithChannelFlowRequest {}
/**
 * @public
 *
 * The output of {@link ListChannelsAssociatedWithChannelFlowCommand}.
 */
export interface ListChannelsAssociatedWithChannelFlowCommandOutput extends ListChannelsAssociatedWithChannelFlowResponse, __MetadataBearer {}

/**
 * Lists all channels associated with a specified channel flow. You can associate a channel flow with multiple channels, but you can only associate a channel with one channel flow. This is a developer API.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, ListChannelsAssociatedWithChannelFlowCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, ListChannelsAssociatedWithChannelFlowCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // ListChannelsAssociatedWithChannelFlowRequest
 *   ChannelFlowArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListChannelsAssociatedWithChannelFlowCommand(input);
 * const response = await client.send(command);
 * // { // ListChannelsAssociatedWithChannelFlowResponse
 * //   Channels: [ // ChannelAssociatedWithFlowSummaryList
 * //     { // ChannelAssociatedWithFlowSummary
 * //       Name: "STRING_VALUE",
 * //       ChannelArn: "STRING_VALUE",
 * //       Mode: "UNRESTRICTED" || "RESTRICTED",
 * //       Privacy: "PUBLIC" || "PRIVATE",
 * //       Metadata: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListChannelsAssociatedWithChannelFlowCommandInput - {@link ListChannelsAssociatedWithChannelFlowCommandInput}
 * @returns {@link ListChannelsAssociatedWithChannelFlowCommandOutput}
 * @see {@link ListChannelsAssociatedWithChannelFlowCommandInput} for command's `input` shape.
 * @see {@link ListChannelsAssociatedWithChannelFlowCommandOutput} for command's `response` shape.
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
export class ListChannelsAssociatedWithChannelFlowCommand extends command<ListChannelsAssociatedWithChannelFlowCommandInput, ListChannelsAssociatedWithChannelFlowCommandOutput>(
  _ep0,
  _mw0,
  "ListChannelsAssociatedWithChannelFlow",
  ListChannelsAssociatedWithChannelFlow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListChannelsAssociatedWithChannelFlowRequest;
      output: ListChannelsAssociatedWithChannelFlowResponse;
    };
    sdk: {
      input: ListChannelsAssociatedWithChannelFlowCommandInput;
      output: ListChannelsAssociatedWithChannelFlowCommandOutput;
    };
  };
}
