// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateRoomMembershipRequest, CreateRoomMembershipResponse } from "../models/models_0";
import { CreateRoomMembership$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateRoomMembershipCommand}.
 */
export interface CreateRoomMembershipCommandInput extends CreateRoomMembershipRequest {}
/**
 * @public
 *
 * The output of {@link CreateRoomMembershipCommand}.
 */
export interface CreateRoomMembershipCommandOutput extends CreateRoomMembershipResponse, __MetadataBearer {}

/**
 * Adds a member to a chat room in an Amazon Chime Enterprise account. A member can be either a user or a bot. The member role designates whether the member is a chat room administrator or a general chat room member.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreateRoomMembershipCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreateRoomMembershipCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // CreateRoomMembershipRequest
 *   AccountId: "STRING_VALUE", // required
 *   RoomId: "STRING_VALUE", // required
 *   MemberId: "STRING_VALUE", // required
 *   Role: "Administrator" || "Member",
 * };
 * const command = new CreateRoomMembershipCommand(input);
 * const response = await client.send(command);
 * // { // CreateRoomMembershipResponse
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
 * @param CreateRoomMembershipCommandInput - {@link CreateRoomMembershipCommandInput}
 * @returns {@link CreateRoomMembershipCommandOutput}
 * @see {@link CreateRoomMembershipCommandInput} for command's `input` shape.
 * @see {@link CreateRoomMembershipCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource.
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
 * @throws {@link ChimeServiceException}
 *
 * Base exception class for all service exceptions from Chime service.
 *
 * @public
 */
export class CreateRoomMembershipCommand extends command<CreateRoomMembershipCommandInput, CreateRoomMembershipCommandOutput>(
  _ep0,
  _mw0,
  "CreateRoomMembership",
  CreateRoomMembership$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateRoomMembershipRequest;
      output: CreateRoomMembershipResponse;
    };
    sdk: {
      input: CreateRoomMembershipCommandInput;
      output: CreateRoomMembershipCommandOutput;
    };
  };
}
