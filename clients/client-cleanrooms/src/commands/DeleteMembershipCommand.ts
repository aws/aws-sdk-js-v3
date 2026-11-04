// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteMembershipInput, DeleteMembershipOutput } from "../models/models_1";
import { DeleteMembership$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteMembershipCommand}.
 */
export interface DeleteMembershipCommandInput extends DeleteMembershipInput {}
/**
 * @public
 *
 * The output of {@link DeleteMembershipCommand}.
 */
export interface DeleteMembershipCommandOutput extends DeleteMembershipOutput, __MetadataBearer {}

/**
 * Deletes a specified membership. All resources under a membership must be deleted.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, DeleteMembershipCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, DeleteMembershipCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // DeleteMembershipInput
 *   membershipIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteMembershipCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMembershipCommandInput - {@link DeleteMembershipCommandInput}
 * @returns {@link DeleteMembershipCommandOutput}
 * @see {@link DeleteMembershipCommandInput} for command's `input` shape.
 * @see {@link DeleteMembershipCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Caller does not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the specified constraints.
 *
 * @throws {@link CleanRoomsServiceException}
 *
 * Base exception class for all service exceptions from CleanRooms service.
 *
 * @public
 */
export class DeleteMembershipCommand extends command<DeleteMembershipCommandInput, DeleteMembershipCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMembership",
  DeleteMembership$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMembershipInput;
      output: {};
    };
    sdk: {
      input: DeleteMembershipCommandInput;
      output: DeleteMembershipCommandOutput;
    };
  };
}
