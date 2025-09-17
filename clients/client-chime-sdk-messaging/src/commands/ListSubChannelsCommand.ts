// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ChimeSDKMessagingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMessagingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListSubChannelsRequest,
  ListSubChannelsRequestFilterSensitiveLog,
  ListSubChannelsResponse,
  ListSubChannelsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListSubChannelsCommand, se_ListSubChannelsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists all the SubChannels in an elastic channel when given a channel ID. Available only to the app instance admins and channel moderators of elastic channels.</p>
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
export class ListSubChannelsCommand extends $Command
  .classBuilder<
    ListSubChannelsCommandInput,
    ListSubChannelsCommandOutput,
    ChimeSDKMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMessagingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeMessagingService", "ListSubChannels", {})
  .n("ChimeSDKMessagingClient", "ListSubChannelsCommand")
  .f(ListSubChannelsRequestFilterSensitiveLog, ListSubChannelsResponseFilterSensitiveLog)
  .ser(se_ListSubChannelsCommand)
  .de(de_ListSubChannelsCommand)
  .build() {
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
