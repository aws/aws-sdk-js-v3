// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteConnectionTypeRequest, DeleteConnectionTypeResponse } from "../models/models_1";
import { DeleteConnectionType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteConnectionTypeCommand}.
 */
export interface DeleteConnectionTypeCommandInput extends DeleteConnectionTypeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConnectionTypeCommand}.
 */
export interface DeleteConnectionTypeCommandOutput extends DeleteConnectionTypeResponse, __MetadataBearer {}

/**
 * Deletes a custom connection type in Glue.
 *
 * The connection type must exist and be registered before it can be deleted. This operation supports cleanup of connection type resources and helps maintain proper lifecycle management of custom connection types.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteConnectionTypeCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteConnectionTypeCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteConnectionTypeRequest
 *   ConnectionType: "STRING_VALUE", // required
 * };
 * const command = new DeleteConnectionTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConnectionTypeCommandInput - {@link DeleteConnectionTypeCommandInput}
 * @returns {@link DeleteConnectionTypeCommandOutput}
 * @see {@link DeleteConnectionTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectionTypeCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to a resource was denied.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A value could not be validated.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class DeleteConnectionTypeCommand extends command<DeleteConnectionTypeCommandInput, DeleteConnectionTypeCommandOutput>(
  _ep0,
  _mw0,
  "DeleteConnectionType",
  DeleteConnectionType$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConnectionTypeRequest;
      output: {};
    };
    sdk: {
      input: DeleteConnectionTypeCommandInput;
      output: DeleteConnectionTypeCommandOutput;
    };
  };
}
