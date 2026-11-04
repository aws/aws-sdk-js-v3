// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeChannelMembershipRequest, DescribeChannelMembershipResponse } from "../models/models_0";
import { DescribeChannelMembership$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Returns the full details of a user's channel membership.
 *
 * > **Note:** The `x-amz-chime-bearer` request header is mandatory. Use the ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in the header.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, DescribeChannelMembershipCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, DescribeChannelMembershipCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
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
export class DescribeChannelMembershipCommand extends command<DescribeChannelMembershipCommandInput, DescribeChannelMembershipCommandOutput>(
  _ep0,
  _mw0,
  "DescribeChannelMembership",
  DescribeChannelMembership$
) {
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
