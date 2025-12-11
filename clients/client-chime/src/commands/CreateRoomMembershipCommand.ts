// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateRoomMembershipRequest, CreateRoomMembershipResponse } from "../models/models_0";
import { CreateRoomMembership } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Adds a member to a chat room in an Amazon Chime Enterprise account. A member can be either a user or a bot. The member role designates whether the member is a chat room administrator or a general chat room member.</p>
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
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 *
 * @public
 */
export class CreateRoomMembershipCommand extends $Command
  .classBuilder<
    CreateRoomMembershipCommandInput,
    CreateRoomMembershipCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("UCBuzzConsoleService", "CreateRoomMembership", {})
  .n("ChimeClient", "CreateRoomMembershipCommand")
  .sc(CreateRoomMembership)
  .build() {
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
