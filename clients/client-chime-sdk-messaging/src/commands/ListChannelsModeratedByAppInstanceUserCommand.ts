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
  ListChannelsModeratedByAppInstanceUserRequest,
  ListChannelsModeratedByAppInstanceUserRequestFilterSensitiveLog,
  ListChannelsModeratedByAppInstanceUserResponse,
  ListChannelsModeratedByAppInstanceUserResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_ListChannelsModeratedByAppInstanceUserCommand,
  se_ListChannelsModeratedByAppInstanceUserCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListChannelsModeratedByAppInstanceUserCommand}.
 */
export interface ListChannelsModeratedByAppInstanceUserCommandInput
  extends ListChannelsModeratedByAppInstanceUserRequest {}
/**
 * @public
 *
 * The output of {@link ListChannelsModeratedByAppInstanceUserCommand}.
 */
export interface ListChannelsModeratedByAppInstanceUserCommandOutput
  extends ListChannelsModeratedByAppInstanceUserResponse,
    __MetadataBearer {}

/**
 * <p>A list of the channels moderated by an <code>AppInstanceUser</code>.</p>
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *             ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in
 *             the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, ListChannelsModeratedByAppInstanceUserCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, ListChannelsModeratedByAppInstanceUserCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // ListChannelsModeratedByAppInstanceUserRequest
 *   AppInstanceUserArn: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ChimeBearer: "STRING_VALUE", // required
 * };
 * const command = new ListChannelsModeratedByAppInstanceUserCommand(input);
 * const response = await client.send(command);
 * // { // ListChannelsModeratedByAppInstanceUserResponse
 * //   Channels: [ // ChannelModeratedByAppInstanceUserSummaryList
 * //     { // ChannelModeratedByAppInstanceUserSummary
 * //       ChannelSummary: { // ChannelSummary
 * //         Name: "STRING_VALUE",
 * //         ChannelArn: "STRING_VALUE",
 * //         Mode: "UNRESTRICTED" || "RESTRICTED",
 * //         Privacy: "PUBLIC" || "PRIVATE",
 * //         Metadata: "STRING_VALUE",
 * //         LastMessageTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListChannelsModeratedByAppInstanceUserCommandInput - {@link ListChannelsModeratedByAppInstanceUserCommandInput}
 * @returns {@link ListChannelsModeratedByAppInstanceUserCommandOutput}
 * @see {@link ListChannelsModeratedByAppInstanceUserCommandInput} for command's `input` shape.
 * @see {@link ListChannelsModeratedByAppInstanceUserCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListChannelsModeratedByAppInstanceUserCommand extends $Command
  .classBuilder<
    ListChannelsModeratedByAppInstanceUserCommandInput,
    ListChannelsModeratedByAppInstanceUserCommandOutput,
    ChimeSDKMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMessagingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeMessagingService", "ListChannelsModeratedByAppInstanceUser", {})
  .n("ChimeSDKMessagingClient", "ListChannelsModeratedByAppInstanceUserCommand")
  .f(
    ListChannelsModeratedByAppInstanceUserRequestFilterSensitiveLog,
    ListChannelsModeratedByAppInstanceUserResponseFilterSensitiveLog
  )
  .ser(se_ListChannelsModeratedByAppInstanceUserCommand)
  .de(de_ListChannelsModeratedByAppInstanceUserCommand)
  .build() {}
