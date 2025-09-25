// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListRoomMembershipsRequest, ListRoomMembershipsResponse } from "../models/models_0";
import { ListRoomMemberships } from "../schemas/schemas_19_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRoomMembershipsCommand}.
 */
export interface ListRoomMembershipsCommandInput extends ListRoomMembershipsRequest {}
/**
 * @public
 *
 * The output of {@link ListRoomMembershipsCommand}.
 */
export interface ListRoomMembershipsCommandOutput extends ListRoomMembershipsResponse, __MetadataBearer {}

/**
 * <p>Lists the membership details for the specified room in an Amazon Chime Enterprise account,
 *             such as the members' IDs, email addresses, and names.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListRoomMembershipsCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListRoomMembershipsCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // ListRoomMembershipsRequest
 *   AccountId: "STRING_VALUE", // required
 *   RoomId: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListRoomMembershipsCommand(input);
 * const response = await client.send(command);
 * // { // ListRoomMembershipsResponse
 * //   RoomMemberships: [ // RoomMembershipList
 * //     { // RoomMembership
 * //       RoomId: "STRING_VALUE",
 * //       Member: { // Member
 * //         MemberId: "STRING_VALUE",
 * //         MemberType: "User" || "Bot" || "Webhook",
 * //         Email: "STRING_VALUE",
 * //         FullName: "STRING_VALUE",
 * //         AccountId: "STRING_VALUE",
 * //       },
 * //       Role: "Administrator" || "Member",
 * //       InvitedBy: "STRING_VALUE",
 * //       UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRoomMembershipsCommandInput - {@link ListRoomMembershipsCommandInput}
 * @returns {@link ListRoomMembershipsCommandOutput}
 * @see {@link ListRoomMembershipsCommandInput} for command's `input` shape.
 * @see {@link ListRoomMembershipsCommandOutput} for command's `response` shape.
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
export class ListRoomMembershipsCommand extends $Command
  .classBuilder<
    ListRoomMembershipsCommandInput,
    ListRoomMembershipsCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("UCBuzzConsoleService", "ListRoomMemberships", {})
  .n("ChimeClient", "ListRoomMembershipsCommand")
  .sc(ListRoomMemberships)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRoomMembershipsRequest;
      output: ListRoomMembershipsResponse;
    };
    sdk: {
      input: ListRoomMembershipsCommandInput;
      output: ListRoomMembershipsCommandOutput;
    };
  };
}
