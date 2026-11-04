// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateRoomMembershipRequest, UpdateRoomMembershipResponse } from "../models/models_0";
import { UpdateRoomMembership$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateRoomMembershipCommand}.
 */
export interface UpdateRoomMembershipCommandInput extends UpdateRoomMembershipRequest {}
/**
 * @public
 *
 * The output of {@link UpdateRoomMembershipCommand}.
 */
export interface UpdateRoomMembershipCommandOutput extends UpdateRoomMembershipResponse, __MetadataBearer {}

/**
 * Updates room membership details, such as the member role, for a room in an Amazon Chime Enterprise account. The member role designates whether the member is a chat room administrator or a general chat room member. The member role can be updated only for user IDs.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, UpdateRoomMembershipCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, UpdateRoomMembershipCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // UpdateRoomMembershipRequest
 *   AccountId: "STRING_VALUE", // required
 *   RoomId: "STRING_VALUE", // required
 *   MemberId: "STRING_VALUE", // required
 *   Role: "Administrator" || "Member",
 * };
 * const command = new UpdateRoomMembershipCommand(input);
 * const response = await client.send(command);
 * // { // UpdateRoomMembershipResponse
 * //   RoomMembership: { // RoomMembership
 * //     RoomId: "STRING_VALUE",
 * //     Member: { // Member
 * //       MemberId: "STRING_VALUE",
 * //       MemberType: "User" || "Bot" || "Webhook",
 * //       Email: "STRING_VALUE",
 * //       FullName: "STRING_VALUE",
 * //       AccountId: "STRING_VALUE",
 * //     },
 * //     Role: "Administrator" || "Member",
 * //     InvitedBy: "STRING_VALUE",
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateRoomMembershipCommandInput - {@link UpdateRoomMembershipCommandInput}
 * @returns {@link UpdateRoomMembershipCommandOutput}
 * @see {@link UpdateRoomMembershipCommandInput} for command's `input` shape.
 * @see {@link UpdateRoomMembershipCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
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
 * @throws {@link ChimeServiceException}
 *
 * Base exception class for all service exceptions from Chime service.
 *
 * @public
 */
export class UpdateRoomMembershipCommand extends command<UpdateRoomMembershipCommandInput, UpdateRoomMembershipCommandOutput>(
  _ep0,
  _mw0,
  "UpdateRoomMembership",
  UpdateRoomMembership$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateRoomMembershipRequest;
      output: UpdateRoomMembershipResponse;
    };
    sdk: {
      input: UpdateRoomMembershipCommandInput;
      output: UpdateRoomMembershipCommandOutput;
    };
  };
}
