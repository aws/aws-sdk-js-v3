// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteServiceActionInput, DeleteServiceActionOutput } from "../models/models_0";
import { DeleteServiceAction$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteServiceActionCommand}.
 */
export interface DeleteServiceActionCommandInput extends DeleteServiceActionInput {}
/**
 * @public
 *
 * The output of {@link DeleteServiceActionCommand}.
 */
export interface DeleteServiceActionCommandOutput extends DeleteServiceActionOutput, __MetadataBearer {}

/**
 * <p>Deletes a self-service action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DeleteServiceActionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DeleteServiceActionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // DeleteServiceActionInput
 *   Id: "STRING_VALUE", // required
 *   AcceptLanguage: "STRING_VALUE",
 *   IdempotencyToken: "STRING_VALUE",
 * };
 * const command = new DeleteServiceActionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteServiceActionCommandInput - {@link DeleteServiceActionCommandInput}
 * @returns {@link DeleteServiceActionCommandOutput}
 * @see {@link DeleteServiceActionCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceActionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>A resource that is currently in use. Ensure that the resource is not in use and retry the operation.</p>
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
export class DeleteServiceActionCommand extends command<DeleteServiceActionCommandInput, DeleteServiceActionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteServiceAction",
  DeleteServiceAction$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteServiceActionInput;
      output: {};
    };
    sdk: {
      input: DeleteServiceActionCommandInput;
      output: DeleteServiceActionCommandOutput;
    };
  };
}
