// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteIdNamespaceAssociationInput, DeleteIdNamespaceAssociationOutput } from "../models/models_0";
import { DeleteIdNamespaceAssociation$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteIdNamespaceAssociationCommand}.
 */
export interface DeleteIdNamespaceAssociationCommandInput extends DeleteIdNamespaceAssociationInput {}
/**
 * @public
 *
 * The output of {@link DeleteIdNamespaceAssociationCommand}.
 */
export interface DeleteIdNamespaceAssociationCommandOutput extends DeleteIdNamespaceAssociationOutput, __MetadataBearer {}

/**
 * Deletes an ID namespace association.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CleanRoomsClient, DeleteIdNamespaceAssociationCommand } from "@aws-sdk/client-cleanrooms"; // ES Modules import
 * // const { CleanRoomsClient, DeleteIdNamespaceAssociationCommand } = require("@aws-sdk/client-cleanrooms"); // CommonJS import
 * // import type { CleanRoomsClientConfig } from "@aws-sdk/client-cleanrooms";
 * const config = {}; // type is CleanRoomsClientConfig
 * const client = new CleanRoomsClient(config);
 * const input = { // DeleteIdNamespaceAssociationInput
 *   idNamespaceAssociationIdentifier: "STRING_VALUE", // required
 *   membershipIdentifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteIdNamespaceAssociationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteIdNamespaceAssociationCommandInput - {@link DeleteIdNamespaceAssociationCommandInput}
 * @returns {@link DeleteIdNamespaceAssociationCommandOutput}
 * @see {@link DeleteIdNamespaceAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteIdNamespaceAssociationCommandOutput} for command's `response` shape.
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
export class DeleteIdNamespaceAssociationCommand extends command<DeleteIdNamespaceAssociationCommandInput, DeleteIdNamespaceAssociationCommandOutput>(
  _ep0,
  _mw0,
  "DeleteIdNamespaceAssociation",
  DeleteIdNamespaceAssociation$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIdNamespaceAssociationInput;
      output: {};
    };
    sdk: {
      input: DeleteIdNamespaceAssociationCommandInput;
      output: DeleteIdNamespaceAssociationCommandOutput;
    };
  };
}
