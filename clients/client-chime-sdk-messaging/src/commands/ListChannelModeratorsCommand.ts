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
  ListChannelModeratorsRequest,
  ListChannelModeratorsRequestFilterSensitiveLog,
  ListChannelModeratorsResponse,
  ListChannelModeratorsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListChannelModeratorsCommand, se_ListChannelModeratorsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListChannelModeratorsCommand}.
 */
export interface ListChannelModeratorsCommandInput extends ListChannelModeratorsRequest {}
/**
 * @public
 *
 * The output of {@link ListChannelModeratorsCommand}.
 */
export interface ListChannelModeratorsCommandOutput extends ListChannelModeratorsResponse, __MetadataBearer {}

/**
 * <p>Lists all the moderators for a channel.</p>
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *             ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in
 *             the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, ListChannelModeratorsCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, ListChannelModeratorsCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // ListChannelModeratorsRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ChimeBearer: "STRING_VALUE", // required
 * };
 * const command = new ListChannelModeratorsCommand(input);
 * const response = await client.send(command);
 * // { // ListChannelModeratorsResponse
 * //   ChannelArn: "STRING_VALUE",
 * //   NextToken: "STRING_VALUE",
 * //   ChannelModerators: [ // ChannelModeratorSummaryList
 * //     { // ChannelModeratorSummary
 * //       Moderator: { // Identity
 * //         Arn: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListChannelModeratorsCommandInput - {@link ListChannelModeratorsCommandInput}
 * @returns {@link ListChannelModeratorsCommandOutput}
 * @see {@link ListChannelModeratorsCommandInput} for command's `input` shape.
 * @see {@link ListChannelModeratorsCommandOutput} for command's `response` shape.
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
export class ListChannelModeratorsCommand extends $Command
  .classBuilder<
    ListChannelModeratorsCommandInput,
    ListChannelModeratorsCommandOutput,
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
  .s("ChimeMessagingService", "ListChannelModerators", {})
  .n("ChimeSDKMessagingClient", "ListChannelModeratorsCommand")
  .f(ListChannelModeratorsRequestFilterSensitiveLog, ListChannelModeratorsResponseFilterSensitiveLog)
  .ser(se_ListChannelModeratorsCommand)
  .de(de_ListChannelModeratorsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListChannelModeratorsRequest;
      output: ListChannelModeratorsResponse;
    };
    sdk: {
      input: ListChannelModeratorsCommandInput;
      output: ListChannelModeratorsCommandOutput;
    };
  };
}
