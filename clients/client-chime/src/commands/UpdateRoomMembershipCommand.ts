// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateRoomMembershipRequest, UpdateRoomMembershipResponse } from "../models/models_0";
import { UpdateRoomMembership } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates room membership details, such as the member role, for a room in an Amazon Chime
 *             Enterprise account. The member role designates whether the member is a chat room
 *             administrator or a general chat room member. The member role can be updated only for
 *             user IDs.</p>
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
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
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
export class UpdateRoomMembershipCommand extends $Command
  .classBuilder<
    UpdateRoomMembershipCommandInput,
    UpdateRoomMembershipCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("UCBuzzConsoleService", "UpdateRoomMembership", {})
  .n("ChimeClient", "UpdateRoomMembershipCommand")
  .sc(UpdateRoomMembership)
  .build() {
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
