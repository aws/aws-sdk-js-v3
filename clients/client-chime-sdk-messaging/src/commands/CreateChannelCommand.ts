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
import { CreateChannelRequest, CreateChannelResponse } from "../models/models_0";
import { CreateChannel } from "../schemas/schemas_4_Channel";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateChannelCommand}.
 */
export interface CreateChannelCommandInput extends CreateChannelRequest {}
/**
 * @public
 *
 * The output of {@link CreateChannelCommand}.
 */
export interface CreateChannelCommandOutput extends CreateChannelResponse, __MetadataBearer {}

/**
 * <p>Creates a channel to which you can add users and send messages.</p>
 *          <p>
 *             <b>Restriction</b>: You can't change a channel's
 *          privacy.</p>
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *               ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in
 *             the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, CreateChannelCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, CreateChannelCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // CreateChannelRequest
 *   AppInstanceArn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Mode: "UNRESTRICTED" || "RESTRICTED",
 *   Privacy: "PUBLIC" || "PRIVATE",
 *   Metadata: "STRING_VALUE",
 *   ClientRequestToken: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ChimeBearer: "STRING_VALUE", // required
 *   ChannelId: "STRING_VALUE",
 *   MemberArns: [ // ChannelMemberArns
 *     "STRING_VALUE",
 *   ],
 *   ModeratorArns: [ // ChannelModeratorArns
 *     "STRING_VALUE",
 *   ],
 *   ElasticChannelConfiguration: { // ElasticChannelConfiguration
 *     MaximumSubChannels: Number("int"), // required
 *     TargetMembershipsPerSubChannel: Number("int"), // required
 *     MinimumMembershipPercentage: Number("int"), // required
 *   },
 *   ExpirationSettings: { // ExpirationSettings
 *     ExpirationDays: Number("int"), // required
 *     ExpirationCriterion: "CREATED_TIMESTAMP" || "LAST_MESSAGE_TIMESTAMP", // required
 *   },
 * };
 * const command = new CreateChannelCommand(input);
 * const response = await client.send(command);
 * // { // CreateChannelResponse
 * //   ChannelArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateChannelCommandInput - {@link CreateChannelCommandInput}
 * @returns {@link CreateChannelCommandOutput}
 * @see {@link CreateChannelCommandInput} for command's `input` shape.
 * @see {@link CreateChannelCommandOutput} for command's `response` shape.
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
export class CreateChannelCommand extends $Command
  .classBuilder<
    CreateChannelCommandInput,
    CreateChannelCommandOutput,
    ChimeSDKMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMessagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeMessagingService", "CreateChannel", {})
  .n("ChimeSDKMessagingClient", "CreateChannelCommand")
  .sc(CreateChannel)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateChannelRequest;
      output: CreateChannelResponse;
    };
    sdk: {
      input: CreateChannelCommandInput;
      output: CreateChannelCommandOutput;
    };
  };
}
