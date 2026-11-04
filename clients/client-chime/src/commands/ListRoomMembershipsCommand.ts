// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRoomMembershipsRequest, ListRoomMembershipsResponse } from "../models/models_0";
import { ListRoomMemberships$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists the membership details for the specified room in an Amazon Chime Enterprise account, such as the members' IDs, email addresses, and names.
 *
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
export class ListRoomMembershipsCommand extends command<ListRoomMembershipsCommandInput, ListRoomMembershipsCommandOutput>(
  _ep0,
  _mw0,
  "ListRoomMemberships",
  ListRoomMemberships$
) {
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
