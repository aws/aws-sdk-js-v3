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
  DescribeChannelMembershipForAppInstanceUserRequest,
  DescribeChannelMembershipForAppInstanceUserResponse,
  DescribeChannelMembershipForAppInstanceUserResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_DescribeChannelMembershipForAppInstanceUserCommand,
  se_DescribeChannelMembershipForAppInstanceUserCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeChannelMembershipForAppInstanceUserCommand}.
 */
export interface DescribeChannelMembershipForAppInstanceUserCommandInput
  extends DescribeChannelMembershipForAppInstanceUserRequest {}
/**
 * @public
 *
 * The output of {@link DescribeChannelMembershipForAppInstanceUserCommand}.
 */
export interface DescribeChannelMembershipForAppInstanceUserCommandOutput
  extends DescribeChannelMembershipForAppInstanceUserResponse,
    __MetadataBearer {}

/**
 * <p> Returns the details of a channel based on the membership of the specified
 *             <code>AppInstanceUser</code> or <code>AppInstanceBot</code>.</p>
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *             ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in
 *             the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, DescribeChannelMembershipForAppInstanceUserCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, DescribeChannelMembershipForAppInstanceUserCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // DescribeChannelMembershipForAppInstanceUserRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   AppInstanceUserArn: "STRING_VALUE", // required
 *   ChimeBearer: "STRING_VALUE", // required
 * };
 * const command = new DescribeChannelMembershipForAppInstanceUserCommand(input);
 * const response = await client.send(command);
 * // { // DescribeChannelMembershipForAppInstanceUserResponse
 * //   ChannelMembership: { // ChannelMembershipForAppInstanceUserSummary
 * //     ChannelSummary: { // ChannelSummary
 * //       Name: "STRING_VALUE",
 * //       ChannelArn: "STRING_VALUE",
 * //       Mode: "UNRESTRICTED" || "RESTRICTED",
 * //       Privacy: "PUBLIC" || "PRIVATE",
 * //       Metadata: "STRING_VALUE",
 * //       LastMessageTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //     AppInstanceUserMembershipSummary: { // AppInstanceUserMembershipSummary
 * //       Type: "DEFAULT" || "HIDDEN",
 * //       ReadMarkerTimestamp: new Date("TIMESTAMP"),
 * //       SubChannelId: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeChannelMembershipForAppInstanceUserCommandInput - {@link DescribeChannelMembershipForAppInstanceUserCommandInput}
 * @returns {@link DescribeChannelMembershipForAppInstanceUserCommandOutput}
 * @see {@link DescribeChannelMembershipForAppInstanceUserCommandInput} for command's `input` shape.
 * @see {@link DescribeChannelMembershipForAppInstanceUserCommandOutput} for command's `response` shape.
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
export class DescribeChannelMembershipForAppInstanceUserCommand extends $Command
  .classBuilder<
    DescribeChannelMembershipForAppInstanceUserCommandInput,
    DescribeChannelMembershipForAppInstanceUserCommandOutput,
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
  .s("ChimeMessagingService", "DescribeChannelMembershipForAppInstanceUser", {})
  .n("ChimeSDKMessagingClient", "DescribeChannelMembershipForAppInstanceUserCommand")
  .f(void 0, DescribeChannelMembershipForAppInstanceUserResponseFilterSensitiveLog)
  .ser(se_DescribeChannelMembershipForAppInstanceUserCommand)
  .de(de_DescribeChannelMembershipForAppInstanceUserCommand)
  .build() {}
