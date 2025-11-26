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
import type { DescribeChannelModeratorRequest, DescribeChannelModeratorResponse } from "../models/models_0";
import { DescribeChannelModerator } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeChannelModeratorCommand}.
 */
export interface DescribeChannelModeratorCommandInput extends DescribeChannelModeratorRequest {}
/**
 * @public
 *
 * The output of {@link DescribeChannelModeratorCommand}.
 */
export interface DescribeChannelModeratorCommandOutput extends DescribeChannelModeratorResponse, __MetadataBearer {}

/**
 * <p>Returns the full details of a single ChannelModerator.</p>
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *                <code>AppInstanceUserArn</code> of the user that makes the API call as the value in
 *             the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, DescribeChannelModeratorCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, DescribeChannelModeratorCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // DescribeChannelModeratorRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   ChannelModeratorArn: "STRING_VALUE", // required
 *   ChimeBearer: "STRING_VALUE", // required
 * };
 * const command = new DescribeChannelModeratorCommand(input);
 * const response = await client.send(command);
 * // { // DescribeChannelModeratorResponse
 * //   ChannelModerator: { // ChannelModerator
 * //     Moderator: { // Identity
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
 * @param DescribeChannelModeratorCommandInput - {@link DescribeChannelModeratorCommandInput}
 * @returns {@link DescribeChannelModeratorCommandOutput}
 * @see {@link DescribeChannelModeratorCommandInput} for command's `input` shape.
 * @see {@link DescribeChannelModeratorCommandOutput} for command's `response` shape.
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
export class DescribeChannelModeratorCommand extends $Command
  .classBuilder<
    DescribeChannelModeratorCommandInput,
    DescribeChannelModeratorCommandOutput,
    ChimeSDKMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMessagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeMessagingService", "DescribeChannelModerator", {})
  .n("ChimeSDKMessagingClient", "DescribeChannelModeratorCommand")
  .sc(DescribeChannelModerator)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeChannelModeratorRequest;
      output: DescribeChannelModeratorResponse;
    };
    sdk: {
      input: DescribeChannelModeratorCommandInput;
      output: DescribeChannelModeratorCommandOutput;
    };
  };
}
