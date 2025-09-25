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
import { DescribeChannelBanRequest, DescribeChannelBanResponse } from "../models/models_0";
import { DescribeChannelBan } from "../schemas/schemas_6_Channel";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeChannelBanCommand}.
 */
export interface DescribeChannelBanCommandInput extends DescribeChannelBanRequest {}
/**
 * @public
 *
 * The output of {@link DescribeChannelBanCommand}.
 */
export interface DescribeChannelBanCommandOutput extends DescribeChannelBanResponse, __MetadataBearer {}

/**
 * <p>Returns the full details of a channel ban.</p>
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *             ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in
 *             the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, DescribeChannelBanCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, DescribeChannelBanCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // DescribeChannelBanRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   MemberArn: "STRING_VALUE", // required
 *   ChimeBearer: "STRING_VALUE", // required
 * };
 * const command = new DescribeChannelBanCommand(input);
 * const response = await client.send(command);
 * // { // DescribeChannelBanResponse
 * //   ChannelBan: { // ChannelBan
 * //     Member: { // Identity
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //     ChannelArn: "STRING_VALUE",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     CreatedBy: {
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeChannelBanCommandInput - {@link DescribeChannelBanCommandInput}
 * @returns {@link DescribeChannelBanCommandOutput}
 * @see {@link DescribeChannelBanCommandInput} for command's `input` shape.
 * @see {@link DescribeChannelBanCommandOutput} for command's `response` shape.
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
export class DescribeChannelBanCommand extends $Command
  .classBuilder<
    DescribeChannelBanCommandInput,
    DescribeChannelBanCommandOutput,
    ChimeSDKMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMessagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeMessagingService", "DescribeChannelBan", {})
  .n("ChimeSDKMessagingClient", "DescribeChannelBanCommand")
  .sc(DescribeChannelBan)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeChannelBanRequest;
      output: DescribeChannelBanResponse;
    };
    sdk: {
      input: DescribeChannelBanCommandInput;
      output: DescribeChannelBanCommandOutput;
    };
  };
}
