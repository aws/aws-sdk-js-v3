// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRoomMembershipRequest } from "../models/models_0";
import { DeleteRoomMembership$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRoomMembershipCommand}.
 */
export interface DeleteRoomMembershipCommandInput extends DeleteRoomMembershipRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRoomMembershipCommand}.
 */
export interface DeleteRoomMembershipCommandOutput extends __MetadataBearer {}

/**
 * Removes a member from a chat room in an Amazon Chime Enterprise account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, DeleteRoomMembershipCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, DeleteRoomMembershipCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // import type { ChimeClientConfig } from "@aws-sdk/client-chime";
 * const config = {}; // type is ChimeClientConfig
 * const client = new ChimeClient(config);
 * const input = { // DeleteRoomMembershipRequest
 *   AccountId: "STRING_VALUE", // required
 *   RoomId: "STRING_VALUE", // required
 *   MemberId: "STRING_VALUE", // required
 * };
 * const command = new DeleteRoomMembershipCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRoomMembershipCommandInput - {@link DeleteRoomMembershipCommandInput}
 * @returns {@link DeleteRoomMembershipCommandOutput}
 * @see {@link DeleteRoomMembershipCommandInput} for command's `input` shape.
 * @see {@link DeleteRoomMembershipCommandOutput} for command's `response` shape.
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
export class DeleteRoomMembershipCommand extends command<DeleteRoomMembershipCommandInput, DeleteRoomMembershipCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRoomMembership",
  DeleteRoomMembership$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRoomMembershipRequest;
      output: {};
    };
    sdk: {
      input: DeleteRoomMembershipCommandInput;
      output: DeleteRoomMembershipCommandOutput;
    };
  };
}
