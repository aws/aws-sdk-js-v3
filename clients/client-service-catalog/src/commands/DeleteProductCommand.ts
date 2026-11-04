// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteProductInput, DeleteProductOutput } from "../models/models_0";
import { DeleteProduct$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteProductCommand}.
 */
export interface DeleteProductCommandInput extends DeleteProductInput {}
/**
 * @public
 *
 * The output of {@link DeleteProductCommand}.
 */
export interface DeleteProductCommandOutput extends DeleteProductOutput, __MetadataBearer {}

/**
 * Deletes the specified product.
 *
 * You cannot delete a product if it was shared with you or is associated with a portfolio.
 *
 * A delegated admin is authorized to invoke this command.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DeleteProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DeleteProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // DeleteProductInput
 *   AcceptLanguage: "STRING_VALUE",
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteProductCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProductCommandInput - {@link DeleteProductCommandInput}
 * @returns {@link DeleteProductCommandOutput}
 * @see {@link DeleteProductCommandInput} for command's `input` shape.
 * @see {@link DeleteProductCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *
 * One or more parameters provided to the operation are not valid.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *
 * A resource that is currently in use. Ensure that the resource is not in use and retry the operation.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link TagOptionNotMigratedException} (client fault)
 *
 * An operation requiring TagOptions failed because the TagOptions migration process has not been performed for this account. Use the Amazon Web Services Management Console to perform the migration process before retrying the operation.
 *
 * @throws {@link ServiceCatalogServiceException}
 *
 * Base exception class for all service exceptions from ServiceCatalog service.
 *
 * @public
 */
export class DeleteProductCommand extends command<DeleteProductCommandInput, DeleteProductCommandOutput>(
  _ep0,
  _mw0,
  "DeleteProduct",
  DeleteProduct$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProductInput;
      output: {};
    };
    sdk: {
      input: DeleteProductCommandInput;
      output: DeleteProductCommandOutput;
    };
  };
}
