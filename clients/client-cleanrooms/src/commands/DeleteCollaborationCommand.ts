// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCollaborationInput, DeleteCollaborationOutput } from "../models/models_0";
import { DeleteCollaboration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCollaborationCommand}.
 */
export interface DeleteCollaborationCommandInput extends DeleteCollaborationInput {}
/**
 * @public
 *
 * The output of {@link DeleteCollaborationCommand}.
 */
export interface DeleteCollaborationCommandOutput extends DeleteCollaborationOutput, __MetadataBearer {}

/**
 * Deletes a collaboration. It can only be called by the collaboration owner.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, DeleteCollaborationCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, DeleteCollaborationCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // DeleteCollaborationInput
 *   collaborationIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteCollaborationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCollaborationCommandInput - {@link DeleteCollaborationCommandInput}
 * @returns {@link DeleteCollaborationCommandOutput}
 * @see {@link DeleteCollaborationCommandInput} for command's `input` shape.
 * @see {@link DeleteCollaborationCommandOutput} for command's `response` shape.
 * @see {@link CleanRoomsClientResolvedConfig | config} for CleanRoomsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Caller does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
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
export class DeleteCollaborationCommand extends command<DeleteCollaborationCommandInput, DeleteCollaborationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCollaboration",
  DeleteCollaboration$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCollaborationInput;
      output: {};
    };
    sdk: {
      input: DeleteCollaborationCommandInput;
      output: DeleteCollaborationCommandOutput;
    };
  };
}
