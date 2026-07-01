// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteConstraintInput, DeleteConstraintOutput } from "../models/models_0";
import { DeleteConstraint$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteConstraintCommand}.
 */
export interface DeleteConstraintCommandInput extends DeleteConstraintInput {}
/**
 * @public
 *
 * The output of {@link DeleteConstraintCommand}.
 */
export interface DeleteConstraintCommandOutput extends DeleteConstraintOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified constraint.</p>
 *          <p>A delegated admin is authorized to invoke this command.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DeleteConstraintCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DeleteConstraintCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // DeleteConstraintInput
 *   AcceptLanguage: "STRING_VALUE",
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteConstraintCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConstraintCommandInput - {@link DeleteConstraintCommandInput}
 * @returns {@link DeleteConstraintCommandOutput}
 * @see {@link DeleteConstraintCommandInput} for command's `input` shape.
 * @see {@link DeleteConstraintCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 *
 * @public
 */
export class DeleteConstraintCommand extends command<DeleteConstraintCommandInput, DeleteConstraintCommandOutput>(
  _ep0,
  _mw0,
  "DeleteConstraint",
  DeleteConstraint$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConstraintInput;
      output: {};
    };
    sdk: {
      input: DeleteConstraintCommandInput;
      output: DeleteConstraintCommandOutput;
    };
  };
}
