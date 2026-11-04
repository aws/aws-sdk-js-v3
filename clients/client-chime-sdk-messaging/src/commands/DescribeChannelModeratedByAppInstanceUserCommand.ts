// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  DescribeChannelModeratedByAppInstanceUserRequest,
  DescribeChannelModeratedByAppInstanceUserResponse,
} from "../models/models_0";
import { DescribeChannelModeratedByAppInstanceUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeChannelModeratedByAppInstanceUserCommand}.
 */
export interface DescribeChannelModeratedByAppInstanceUserCommandInput extends DescribeChannelModeratedByAppInstanceUserRequest {}
/**
 * @public
 *
 * The output of {@link DescribeChannelModeratedByAppInstanceUserCommand}.
 */
export interface DescribeChannelModeratedByAppInstanceUserCommandOutput extends DescribeChannelModeratedByAppInstanceUserResponse, __MetadataBearer {}

/**
 * Returns the full details of a channel moderated by the specified `AppInstanceUser` or `AppInstanceBot`.
 *
 * > **Note:** The `x-amz-chime-bearer` request header is mandatory. Use the ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in the header.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, DescribeChannelModeratedByAppInstanceUserCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, DescribeChannelModeratedByAppInstanceUserCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // DescribeChannelModeratedByAppInstanceUserRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   AppInstanceUserArn: "STRING_VALUE", // required
 *   ChimeBearer: "STRING_VALUE", // required
 * };
 * const command = new DescribeChannelModeratedByAppInstanceUserCommand(input);
 * const response = await client.send(command);
 * // { // DescribeChannelModeratedByAppInstanceUserResponse
 * //   Channel: { // ChannelModeratedByAppInstanceUserSummary
 * //     ChannelSummary: { // ChannelSummary
 * //       Name: "STRING_VALUE",
 * //       ChannelArn: "STRING_VALUE",
 * //       Mode: "UNRESTRICTED" || "RESTRICTED",
 * //       Privacy: "PUBLIC" || "PRIVATE",
 * //       Metadata: "STRING_VALUE",
 * //       LastMessageTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeChannelModeratedByAppInstanceUserCommandInput - {@link DescribeChannelModeratedByAppInstanceUserCommandInput}
 * @returns {@link DescribeChannelModeratedByAppInstanceUserCommandOutput}
 * @see {@link DescribeChannelModeratedByAppInstanceUserCommandInput} for command's `input` shape.
 * @see {@link DescribeChannelModeratedByAppInstanceUserCommandOutput} for command's `response` shape.
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
export class DescribeChannelModeratedByAppInstanceUserCommand extends command<DescribeChannelModeratedByAppInstanceUserCommandInput, DescribeChannelModeratedByAppInstanceUserCommandOutput>(
  _ep0,
  _mw0,
  "DescribeChannelModeratedByAppInstanceUser",
  DescribeChannelModeratedByAppInstanceUser$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeChannelModeratedByAppInstanceUserRequest;
      output: DescribeChannelModeratedByAppInstanceUserResponse;
    };
    sdk: {
      input: DescribeChannelModeratedByAppInstanceUserCommandInput;
      output: DescribeChannelModeratedByAppInstanceUserCommandOutput;
    };
  };
}
