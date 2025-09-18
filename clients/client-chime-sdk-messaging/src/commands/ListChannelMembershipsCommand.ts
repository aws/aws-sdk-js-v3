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
  ListChannelMembershipsRequest,
  ListChannelMembershipsRequestFilterSensitiveLog,
  ListChannelMembershipsResponse,
  ListChannelMembershipsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_ListChannelMembershipsCommand, se_ListChannelMembershipsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListChannelMembershipsCommand}.
 */
export interface ListChannelMembershipsCommandInput extends ListChannelMembershipsRequest {}
/**
 * @public
 *
 * The output of {@link ListChannelMembershipsCommand}.
 */
export interface ListChannelMembershipsCommandOutput extends ListChannelMembershipsResponse, __MetadataBearer {}

/**
 * <p>Lists all channel memberships in a channel.</p>
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *             ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in
 *             the header.</p>
 *          </note>
 *          <p>If you want to list the channels to which a specific app instance user belongs, see the
 *          <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_messaging-chime_ListChannelMembershipsForAppInstanceUser.html">ListChannelMembershipsForAppInstanceUser</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, ListChannelMembershipsCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, ListChannelMembershipsCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // ListChannelMembershipsRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   Type: "DEFAULT" || "HIDDEN",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ChimeBearer: "STRING_VALUE", // required
 *   SubChannelId: "STRING_VALUE",
 * };
 * const command = new ListChannelMembershipsCommand(input);
 * const response = await client.send(command);
 * // { // ListChannelMembershipsResponse
 * //   ChannelArn: "STRING_VALUE",
 * //   ChannelMemberships: [ // ChannelMembershipSummaryList
 * //     { // ChannelMembershipSummary
 * //       Member: { // Identity
 * //         Arn: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListChannelMembershipsCommandInput - {@link ListChannelMembershipsCommandInput}
 * @returns {@link ListChannelMembershipsCommandOutput}
 * @see {@link ListChannelMembershipsCommandInput} for command's `input` shape.
 * @see {@link ListChannelMembershipsCommandOutput} for command's `response` shape.
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
export class ListChannelMembershipsCommand extends $Command
  .classBuilder<
    ListChannelMembershipsCommandInput,
    ListChannelMembershipsCommandOutput,
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
  .s("ChimeMessagingService", "ListChannelMemberships", {})
  .n("ChimeSDKMessagingClient", "ListChannelMembershipsCommand")
  .f(ListChannelMembershipsRequestFilterSensitiveLog, ListChannelMembershipsResponseFilterSensitiveLog)
  .ser(se_ListChannelMembershipsCommand)
  .de(de_ListChannelMembershipsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListChannelMembershipsRequest;
      output: ListChannelMembershipsResponse;
    };
    sdk: {
      input: ListChannelMembershipsCommandInput;
      output: ListChannelMembershipsCommandOutput;
    };
  };
}
