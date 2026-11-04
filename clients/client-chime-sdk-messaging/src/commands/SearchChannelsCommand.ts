// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchChannelsRequest, SearchChannelsResponse } from "../models/models_0";
import { SearchChannels$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchChannelsCommand}.
 */
export interface SearchChannelsCommandInput extends SearchChannelsRequest {}
/**
 * @public
 *
 * The output of {@link SearchChannelsCommand}.
 */
export interface SearchChannelsCommandOutput extends SearchChannelsResponse, __MetadataBearer {}

/**
 * Allows the `ChimeBearer` to search channels by channel members. Users or bots can search across the channels that they belong to. Users in the `AppInstanceAdmin` role can search across all channels.
 *
 * The `x-amz-chime-bearer` request header is mandatory. Use the ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in the header.
 *
 * > **Note:** This operation isn't supported for `AppInstanceUsers` with a large number of memberships.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, SearchChannelsCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, SearchChannelsCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // SearchChannelsRequest
 *   ChimeBearer: "STRING_VALUE",
 *   Fields: [ // SearchFields // required
 *     { // SearchField
 *       Key: "MEMBERS", // required
 *       Values: [ // SearchFieldValues // required
 *         "STRING_VALUE",
 *       ],
 *       Operator: "EQUALS" || "INCLUDES", // required
 *     },
 *   ],
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new SearchChannelsCommand(input);
 * const response = await client.send(command);
 * // { // SearchChannelsResponse
 * //   Channels: [ // ChannelSummaryList
 * //     { // ChannelSummary
 * //       Name: "STRING_VALUE",
 * //       ChannelArn: "STRING_VALUE",
 * //       Mode: "UNRESTRICTED" || "RESTRICTED",
 * //       Privacy: "PUBLIC" || "PRIVATE",
 * //       Metadata: "STRING_VALUE",
 * //       LastMessageTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchChannelsCommandInput - {@link SearchChannelsCommandInput}
 * @returns {@link SearchChannelsCommandOutput}
 * @see {@link SearchChannelsCommandInput} for command's `input` shape.
 * @see {@link SearchChannelsCommandOutput} for command's `response` shape.
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
export class SearchChannelsCommand extends command<SearchChannelsCommandInput, SearchChannelsCommandOutput>(
  _ep0,
  _mw0,
  "SearchChannels",
  SearchChannels$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchChannelsRequest;
      output: SearchChannelsResponse;
    };
    sdk: {
      input: SearchChannelsCommandInput;
      output: SearchChannelsCommandOutput;
    };
  };
}
