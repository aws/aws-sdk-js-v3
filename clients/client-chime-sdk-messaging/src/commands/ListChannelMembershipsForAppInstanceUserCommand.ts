// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListChannelMembershipsForAppInstanceUserRequest,
  ListChannelMembershipsForAppInstanceUserResponse,
} from "../models/models_0";
import { ListChannelMembershipsForAppInstanceUser$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListChannelMembershipsForAppInstanceUserCommand}.
 */
export interface ListChannelMembershipsForAppInstanceUserCommandInput extends ListChannelMembershipsForAppInstanceUserRequest {}
/**
 * @public
 *
 * The output of {@link ListChannelMembershipsForAppInstanceUserCommand}.
 */
export interface ListChannelMembershipsForAppInstanceUserCommandOutput extends ListChannelMembershipsForAppInstanceUserResponse, __MetadataBearer {}

/**
 * Lists all channels that an `AppInstanceUser` or `AppInstanceBot` is a part of. Only an `AppInstanceAdmin` can call the API with a user ARN that is not their own.
 *
 * > **Note:** The `x-amz-chime-bearer` request header is mandatory. Use the ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in the header.
 *
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
export class ListChannelMembershipsForAppInstanceUserCommand extends command<ListChannelMembershipsForAppInstanceUserCommandInput, ListChannelMembershipsForAppInstanceUserCommandOutput>(
  _ep0,
  _mw0,
  "ListChannelMembershipsForAppInstanceUser",
  ListChannelMembershipsForAppInstanceUser$
) {
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
