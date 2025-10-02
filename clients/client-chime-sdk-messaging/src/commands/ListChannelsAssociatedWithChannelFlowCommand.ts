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
  ListChannelsAssociatedWithChannelFlowRequest,
  ListChannelsAssociatedWithChannelFlowRequestFilterSensitiveLog,
  ListChannelsAssociatedWithChannelFlowResponse,
  ListChannelsAssociatedWithChannelFlowResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_ListChannelsAssociatedWithChannelFlowCommand,
  se_ListChannelsAssociatedWithChannelFlowCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListChannelsAssociatedWithChannelFlowCommand}.
 */
export interface ListChannelsAssociatedWithChannelFlowCommandInput
  extends ListChannelsAssociatedWithChannelFlowRequest {}
/**
 * @public
 *
 * The output of {@link ListChannelsAssociatedWithChannelFlowCommand}.
 */
export interface ListChannelsAssociatedWithChannelFlowCommandOutput
  extends ListChannelsAssociatedWithChannelFlowResponse,
    __MetadataBearer {}

/**
 * <p>Lists all channels associated with a specified channel flow. You can associate a channel flow with multiple channels, but you can only associate a channel with one channel flow. This is a developer API.</p>
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
export class ListChannelsAssociatedWithChannelFlowCommand extends $Command
  .classBuilder<
    ListChannelsAssociatedWithChannelFlowCommandInput,
    ListChannelsAssociatedWithChannelFlowCommandOutput,
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
  .s("ChimeMessagingService", "ListChannelsAssociatedWithChannelFlow", {})
  .n("ChimeSDKMessagingClient", "ListChannelsAssociatedWithChannelFlowCommand")
  .f(
    ListChannelsAssociatedWithChannelFlowRequestFilterSensitiveLog,
    ListChannelsAssociatedWithChannelFlowResponseFilterSensitiveLog
  )
  .ser(se_ListChannelsAssociatedWithChannelFlowCommand)
  .de(de_ListChannelsAssociatedWithChannelFlowCommand)
  .build() {
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
