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
import type {
  ListChannelMembershipsForAppInstanceUserRequest,
  ListChannelMembershipsForAppInstanceUserResponse,
} from "../models/models_0";
import { ListChannelMembershipsForAppInstanceUser } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListChannelMembershipsForAppInstanceUserCommand}.
 */
export interface ListChannelMembershipsForAppInstanceUserCommandInput
  extends ListChannelMembershipsForAppInstanceUserRequest {}
/**
 * @public
 *
 * The output of {@link ListChannelMembershipsForAppInstanceUserCommand}.
 */
export interface ListChannelMembershipsForAppInstanceUserCommandOutput
  extends ListChannelMembershipsForAppInstanceUserResponse,
    __MetadataBearer {}

/**
 * <p> Lists all channels that an <code>AppInstanceUser</code> or <code>AppInstanceBot</code> is a part of.
 *          Only an <code>AppInstanceAdmin</code> can call the API with a user ARN that is not their own. </p>
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *             ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in
 *             the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, ListChannelMembershipsForAppInstanceUserCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, ListChannelMembershipsForAppInstanceUserCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // ListChannelMembershipsForAppInstanceUserRequest
 *   AppInstanceUserArn: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   ChimeBearer: "STRING_VALUE", // required
 * };
 * const command = new ListChannelMembershipsForAppInstanceUserCommand(input);
 * const response = await client.send(command);
 * // { // ListChannelMembershipsForAppInstanceUserResponse
 * //   ChannelMemberships: [ // ChannelMembershipForAppInstanceUserSummaryList
 * //     { // ChannelMembershipForAppInstanceUserSummary
 * //       ChannelSummary: { // ChannelSummary
 * //         Name: "STRING_VALUE",
 * //         ChannelArn: "STRING_VALUE",
 * //         Mode: "UNRESTRICTED" || "RESTRICTED",
 * //         Privacy: "PUBLIC" || "PRIVATE",
 * //         Metadata: "STRING_VALUE",
 * //         LastMessageTimestamp: new Date("TIMESTAMP"),
 * //       },
 * //       AppInstanceUserMembershipSummary: { // AppInstanceUserMembershipSummary
 * //         Type: "DEFAULT" || "HIDDEN",
 * //         ReadMarkerTimestamp: new Date("TIMESTAMP"),
 * //         SubChannelId: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListChannelMembershipsForAppInstanceUserCommandInput - {@link ListChannelMembershipsForAppInstanceUserCommandInput}
 * @returns {@link ListChannelMembershipsForAppInstanceUserCommandOutput}
 * @see {@link ListChannelMembershipsForAppInstanceUserCommandInput} for command's `input` shape.
 * @see {@link ListChannelMembershipsForAppInstanceUserCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListChannelMembershipsForAppInstanceUserCommand extends $Command
  .classBuilder<
    ListChannelMembershipsForAppInstanceUserCommandInput,
    ListChannelMembershipsForAppInstanceUserCommandOutput,
    ChimeSDKMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMessagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeMessagingService", "ListChannelMembershipsForAppInstanceUser", {})
  .n("ChimeSDKMessagingClient", "ListChannelMembershipsForAppInstanceUserCommand")
  .sc(ListChannelMembershipsForAppInstanceUser)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListChannelMembershipsForAppInstanceUserRequest;
      output: ListChannelMembershipsForAppInstanceUserResponse;
    };
    sdk: {
      input: ListChannelMembershipsForAppInstanceUserCommandInput;
      output: ListChannelMembershipsForAppInstanceUserCommandOutput;
    };
  };
}
