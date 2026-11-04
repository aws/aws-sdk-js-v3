// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeChannelModeratorRequest, DescribeChannelModeratorResponse } from "../models/models_0";
import { DescribeChannelModerator$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns the full details of a single ChannelModerator.
 *
 * > **Note:** The `x-amz-chime-bearer` request header is mandatory. Use the `AppInstanceUserArn` of the user that makes the API call as the value in the header.
 *
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
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the resources in the request does not exist in the system.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The service encountered an unexpected error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link ThrottledClientException} (client fault)
 *
 * The client exceeded its request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client is not currently authorized to make the request.
 *
 * @throws {@link ChimeSDKMessagingServiceException}
 *
 * Base exception class for all service exceptions from ChimeSDKMessaging service.
 *
 * @public
 */
export class DescribeChannelModeratorCommand extends command<DescribeChannelModeratorCommandInput, DescribeChannelModeratorCommandOutput>(
  _ep0,
  _mw0,
  "DescribeChannelModerator",
  DescribeChannelModerator$
) {
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
