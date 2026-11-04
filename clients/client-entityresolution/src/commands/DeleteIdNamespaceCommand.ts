// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteIdNamespaceInput, DeleteIdNamespaceOutput } from "../models/models_0";
import { DeleteIdNamespace$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteIdNamespaceCommand}.
 */
export interface DeleteIdNamespaceCommandInput extends DeleteIdNamespaceInput {}
/**
 * @public
 *
 * The output of {@link DeleteIdNamespaceCommand}.
 */
export interface DeleteIdNamespaceCommandOutput extends DeleteIdNamespaceOutput, __MetadataBearer {}

/**
 * Deletes the `IdNamespace` with a given name. This operation returns a `ResourceNotFoundException` if an ID namespace with the given name does not exist.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EntityResolutionClient, DeleteIdNamespaceCommand } from "@aws-sdk/client-entityresolution"; // ES Modules import
 * // const { EntityResolutionClient, DeleteIdNamespaceCommand } = require("@aws-sdk/client-entityresolution"); // CommonJS import
 * // import type { EntityResolutionClientConfig } from "@aws-sdk/client-entityresolution";
 * const config = {}; // type is EntityResolutionClientConfig
 * const client = new EntityResolutionClient(config);
 * const input = { // DeleteIdNamespaceInput
 *   idNamespaceName: "STRING_VALUE", // required
 * };
 * const command = new DeleteIdNamespaceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteIdNamespaceOutput
 * //   message: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteIdNamespaceCommandInput - {@link DeleteIdNamespaceCommandInput}
 * @returns {@link DeleteIdNamespaceCommandOutput}
 * @see {@link DeleteIdNamespaceCommandInput} for command's `input` shape.
 * @see {@link DeleteIdNamespaceCommandOutput} for command's `response` shape.
 * @see {@link EntityResolutionClientResolvedConfig | config} for EntityResolutionClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * This exception occurs when there is an internal failure in the Entity Resolution service.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource couldn't be found.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by Entity Resolution.
 *
 * @throws {@link EntityResolutionServiceException}
 *
 * Base exception class for all service exceptions from EntityResolution service.
 *
 * @public
 */
export class DeleteIdNamespaceCommand extends command<DeleteIdNamespaceCommandInput, DeleteIdNamespaceCommandOutput>(
  _ep0,
  _mw0,
  "DeleteIdNamespace",
  DeleteIdNamespace$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteIdNamespaceInput;
      output: DeleteIdNamespaceOutput;
    };
    sdk: {
      input: DeleteIdNamespaceCommandInput;
      output: DeleteIdNamespaceCommandOutput;
    };
  };
}
