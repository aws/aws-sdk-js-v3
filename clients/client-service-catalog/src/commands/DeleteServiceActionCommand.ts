// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteServiceActionInput, DeleteServiceActionOutput } from "../models/models_0";
import { DeleteServiceAction } from "../schemas/schemas_0";
import type {
  ServiceCatalogClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export class DeleteServiceActionCommand extends $Command
  .classBuilder<
    DeleteServiceActionCommandInput,
    DeleteServiceActionCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "DeleteServiceAction", {})
  .n("ServiceCatalogClient", "DeleteServiceActionCommand")
  .sc(DeleteServiceAction)
  .build() {
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
