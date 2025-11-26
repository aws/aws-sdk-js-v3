// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ChimeSDKMessagingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMessagingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListChannelBansRequest, ListChannelBansResponse } from "../models/models_0";
import { ListChannelBans } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListChannelBansCommand}.
 */
export interface ListChannelBansCommandInput extends ListChannelBansRequest {}
/**
 * @public
 *
 * The output of {@link ListChannelBansCommand}.
 */
export interface ListChannelBansCommandOutput extends ListChannelBansResponse, __MetadataBearer {}

/**
 * <p>Lists all the users and bots banned from a particular channel.</p>
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *             ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in
 *             the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, ListChannelBansCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, ListChannelBansCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // ListChannelBansRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ChimeBearer: "STRING_VALUE", // required
 * };
 * const command = new ListChannelBansCommand(input);
 * const response = await client.send(command);
 * // { // ListChannelBansResponse
 * //   ChannelArn: "STRING_VALUE",
 * //   NextToken: "STRING_VALUE",
 * //   ChannelBans: [ // ChannelBanSummaryList
 * //     { // ChannelBanSummary
 * //       Member: { // Identity
 * //         Arn: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListChannelBansCommandInput - {@link ListChannelBansCommandInput}
 * @returns {@link ListChannelBansCommandOutput}
 * @see {@link ListChannelBansCommandInput} for command's `input` shape.
 * @see {@link ListChannelBansCommandOutput} for command's `response` shape.
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
export class ListChannelBansCommand extends $Command
  .classBuilder<
    ListChannelBansCommandInput,
    ListChannelBansCommandOutput,
    ChimeSDKMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMessagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeMessagingService", "ListChannelBans", {})
  .n("ChimeSDKMessagingClient", "ListChannelBansCommand")
  .sc(ListChannelBans)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListChannelBansRequest;
      output: ListChannelBansResponse;
    };
    sdk: {
      input: ListChannelBansCommandInput;
      output: ListChannelBansCommandOutput;
    };
  };
}
