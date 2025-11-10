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
import { CreateChannelMembershipRequest, CreateChannelMembershipResponse } from "../models/models_0";
import { CreateChannelMembership } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateChannelMembershipCommand}.
 */
export interface CreateChannelMembershipCommandInput extends CreateChannelMembershipRequest {}
/**
 * @public
 *
 * The output of {@link CreateChannelMembershipCommand}.
 */
export interface CreateChannelMembershipCommandOutput extends CreateChannelMembershipResponse, __MetadataBearer {}

/**
 * <p>Adds a member to a channel. The <code>InvitedBy</code> field in <code>ChannelMembership</code>
 *          is derived from the request header. A channel member can:</p>
 *          <ul>
 *             <li>
 *                <p>List messages</p>
 *             </li>
 *             <li>
 *                <p>Send messages</p>
 *             </li>
 *             <li>
 *                <p>Receive messages</p>
 *             </li>
 *             <li>
 *                <p>Edit their own messages</p>
 *             </li>
 *             <li>
 *                <p>Leave the channel</p>
 *             </li>
 *          </ul>
 *          <p>Privacy settings impact this action as follows:</p>
 *          <ul>
 *             <li>
 *                <p>Public Channels: You do not need to be a member to list messages, but you must be
 *                a member to send messages.</p>
 *             </li>
 *             <li>
 *                <p>Private Channels: You must be a member to list or send messages.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *                ARN of the <code>AppInstanceUserArn</code> or <code>AppInstanceBot</code> that makes the API call
 *             as the value in the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, CreateChannelMembershipCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, CreateChannelMembershipCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // CreateChannelMembershipRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   MemberArn: "STRING_VALUE", // required
 *   Type: "DEFAULT" || "HIDDEN", // required
 *   ChimeBearer: "STRING_VALUE", // required
 *   SubChannelId: "STRING_VALUE",
 * };
 * const command = new CreateChannelMembershipCommand(input);
 * const response = await client.send(command);
 * // { // CreateChannelMembershipResponse
 * //   ChannelArn: "STRING_VALUE",
 * //   Member: { // Identity
 * //     Arn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //   },
 * //   SubChannelId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateChannelMembershipCommandInput - {@link CreateChannelMembershipCommandInput}
 * @returns {@link CreateChannelMembershipCommandOutput}
 * @see {@link CreateChannelMembershipCommandInput} for command's `input` shape.
 * @see {@link CreateChannelMembershipCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for ChimeSDKMessagingClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
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
export class CreateChannelMembershipCommand extends $Command
  .classBuilder<
    CreateChannelMembershipCommandInput,
    CreateChannelMembershipCommandOutput,
    ChimeSDKMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMessagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeMessagingService", "CreateChannelMembership", {})
  .n("ChimeSDKMessagingClient", "CreateChannelMembershipCommand")
  .sc(CreateChannelMembership)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateChannelMembershipRequest;
      output: CreateChannelMembershipResponse;
    };
    sdk: {
      input: CreateChannelMembershipCommandInput;
      output: CreateChannelMembershipCommandOutput;
    };
  };
}
