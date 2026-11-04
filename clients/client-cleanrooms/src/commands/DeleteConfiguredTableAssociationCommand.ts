// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteConfiguredTableAssociationInput, DeleteConfiguredTableAssociationOutput } from "../models/models_0";
import { DeleteConfiguredTableAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteConfiguredTableAssociationCommand}.
 */
export interface DeleteConfiguredTableAssociationCommandInput extends DeleteConfiguredTableAssociationInput {}
/**
 * @public
 *
 * The output of {@link DeleteConfiguredTableAssociationCommand}.
 */
export interface DeleteConfiguredTableAssociationCommandOutput extends DeleteConfiguredTableAssociationOutput, __MetadataBearer {}

/**
 * Deletes a configured table association.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, DeleteConfiguredTableAssociationCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, DeleteConfiguredTableAssociationCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // DeleteConfiguredTableAssociationInput
 *   configuredTableAssociationIdentifier: "STRING_VALUE", // required
 *   membershipIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteConfiguredTableAssociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConfiguredTableAssociationCommandInput - {@link DeleteConfiguredTableAssociationCommandInput}
 * @returns {@link DeleteConfiguredTableAssociationCommandOutput}
 * @see {@link DeleteConfiguredTableAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteConfiguredTableAssociationCommandOutput} for command's `response` shape.
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
export class DeleteConfiguredTableAssociationCommand extends command<DeleteConfiguredTableAssociationCommandInput, DeleteConfiguredTableAssociationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteConfiguredTableAssociation",
  DeleteConfiguredTableAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConfiguredTableAssociationInput;
      output: {};
    };
    sdk: {
      input: DeleteConfiguredTableAssociationCommandInput;
      output: DeleteConfiguredTableAssociationCommandOutput;
    };
  };
}
