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
  DescribeChannelMembershipRequest,
  DescribeChannelMembershipResponse,
  DescribeChannelMembershipResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeChannelMembershipCommand, se_DescribeChannelMembershipCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeChannelMembershipCommand}.
 */
export interface DescribeChannelMembershipCommandInput extends DescribeChannelMembershipRequest {}
/**
 * @public
 *
 * The output of {@link DescribeChannelMembershipCommand}.
 */
export interface DescribeChannelMembershipCommandOutput extends DescribeChannelMembershipResponse, __MetadataBearer {}

/**
 * <p>Returns the full details of a user's channel membership.</p>
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *             ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in
 *             the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, DescribeChannelMembershipCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, DescribeChannelMembershipCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // DescribeChannelMembershipRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   MemberArn: "STRING_VALUE", // required
 *   ChimeBearer: "STRING_VALUE", // required
 *   SubChannelId: "STRING_VALUE",
 * };
 * const command = new DescribeChannelMembershipCommand(input);
 * const response = await client.send(command);
 * // { // DescribeChannelMembershipResponse
 * //   ChannelMembership: { // ChannelMembership
 * //     InvitedBy: { // Identity
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //     Type: "DEFAULT" || "HIDDEN",
 * //     Member: {
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //     ChannelArn: "STRING_VALUE",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     LastUpdatedTimestamp: new Date("TIMESTAMP"),
 * //     SubChannelId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeChannelMembershipCommandInput - {@link DescribeChannelMembershipCommandInput}
 * @returns {@link DescribeChannelMembershipCommandOutput}
 * @see {@link DescribeChannelMembershipCommandInput} for command's `input` shape.
 * @see {@link DescribeChannelMembershipCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for ChimeSDKMessagingClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
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
export class DescribeChannelMembershipCommand extends $Command
  .classBuilder<
    DescribeChannelMembershipCommandInput,
    DescribeChannelMembershipCommandOutput,
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
  .s("ChimeMessagingService", "DescribeChannelMembership", {})
  .n("ChimeSDKMessagingClient", "DescribeChannelMembershipCommand")
  .f(void 0, DescribeChannelMembershipResponseFilterSensitiveLog)
  .ser(se_DescribeChannelMembershipCommand)
  .de(de_DescribeChannelMembershipCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeChannelMembershipRequest;
      output: DescribeChannelMembershipResponse;
    };
    sdk: {
      input: DescribeChannelMembershipCommandInput;
      output: DescribeChannelMembershipCommandOutput;
    };
  };
}
