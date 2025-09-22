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
import { SearchChannelsRequest, SearchChannelsResponse } from "../models/models_0";
import { SearchChannels } from "../schemas/schemas_2_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Allows the <code>ChimeBearer</code> to search channels by channel members. Users or bots can search
 *          across the channels that they belong to. Users in the <code>AppInstanceAdmin</code> role can search across
 *          all channels.</p>
 *          <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *          ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in
 *          the header.</p>
 *          <note>
 *             <p>This operation isn't supported for <code>AppInstanceUsers</code> with a large number of memberships.</p>
 *          </note>
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
export class SearchChannelsCommand extends $Command
  .classBuilder<
    SearchChannelsCommandInput,
    SearchChannelsCommandOutput,
    ChimeSDKMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMessagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeMessagingService", "SearchChannels", {})
  .n("ChimeSDKMessagingClient", "SearchChannelsCommand")
  .sc(SearchChannels)
  .build() {
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
