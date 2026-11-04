// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchCreateChannelMembershipRequest, BatchCreateChannelMembershipResponse } from "../models/models_0";
import { BatchCreateChannelMembership$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link BatchCreateChannelMembershipCommand}.
 */
export interface BatchCreateChannelMembershipCommandInput extends BatchCreateChannelMembershipRequest {}
/**
 * @public
 *
 * The output of {@link BatchCreateChannelMembershipCommand}.
 */
export interface BatchCreateChannelMembershipCommandOutput extends BatchCreateChannelMembershipResponse, __MetadataBearer {}

/**
 * Adds a specified number of users and bots to a channel.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, BatchCreateChannelMembershipCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, BatchCreateChannelMembershipCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // BatchCreateChannelMembershipRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   Type: "DEFAULT" || "HIDDEN",
 *   MemberArns: [ // MemberArns // required
 *     "STRING_VALUE",
 *   ],
 *   ChimeBearer: "STRING_VALUE", // required
 *   SubChannelId: "STRING_VALUE",
 * };
 * const command = new BatchCreateChannelMembershipCommand(input);
 * const response = await client.send(command);
 * // { // BatchCreateChannelMembershipResponse
 * //   BatchChannelMemberships: { // BatchChannelMemberships
 * //     InvitedBy: { // Identity
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //     },
 * //     Type: "DEFAULT" || "HIDDEN",
 * //     Members: [ // Members
 * //       {
 * //         Arn: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ChannelArn: "STRING_VALUE",
 * //     SubChannelId: "STRING_VALUE",
 * //   },
 * //   Errors: [ // BatchCreateChannelMembershipErrors
 * //     { // BatchCreateChannelMembershipError
 * //       MemberArn: "STRING_VALUE",
 * //       ErrorCode: "BadRequest" || "Conflict" || "Forbidden" || "NotFound" || "PreconditionFailed" || "ResourceLimitExceeded" || "ServiceFailure" || "AccessDenied" || "ServiceUnavailable" || "Throttled" || "Throttling" || "Unauthorized" || "Unprocessable" || "VoiceConnectorGroupAssociationsExist" || "PhoneNumberAssociationsExist",
 * //       ErrorMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchCreateChannelMembershipCommandInput - {@link BatchCreateChannelMembershipCommandInput}
 * @returns {@link BatchCreateChannelMembershipCommandOutput}
 * @see {@link BatchCreateChannelMembershipCommandInput} for command's `input` shape.
 * @see {@link BatchCreateChannelMembershipCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * The request exceeds the resource limit.
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
export class BatchCreateChannelMembershipCommand extends command<BatchCreateChannelMembershipCommandInput, BatchCreateChannelMembershipCommandOutput>(
  _ep0,
  _mw0,
  "BatchCreateChannelMembership",
  BatchCreateChannelMembership$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchCreateChannelMembershipRequest;
      output: BatchCreateChannelMembershipResponse;
    };
    sdk: {
      input: BatchCreateChannelMembershipCommandInput;
      output: BatchCreateChannelMembershipCommandOutput;
    };
  };
}
