// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteTagOptionInput, DeleteTagOptionOutput } from "../models/models_0";
import { DeleteTagOption$ } from "../schemas/schemas_0";
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
 * The input for {@link DeleteTagOptionCommand}.
 */
export interface DeleteTagOptionCommandInput extends DeleteTagOptionInput {}
/**
 * @public
 *
 * The output of {@link DeleteTagOptionCommand}.
 */
export interface DeleteTagOptionCommandOutput extends DeleteTagOptionOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified TagOption.</p>
 *          <p>You cannot delete a TagOption if it is associated with a product or portfolio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DeleteTagOptionCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DeleteTagOptionCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // DeleteTagOptionInput
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DeleteTagOptionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTagOptionCommandInput - {@link DeleteTagOptionCommandInput}
 * @returns {@link DeleteTagOptionCommandOutput}
 * @see {@link DeleteTagOptionCommandInput} for command's `input` shape.
 * @see {@link DeleteTagOptionCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link ResourceInUseException} (client fault)
 *  <p>A resource that is currently in use. Ensure that the resource is not in use and retry the operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link TagOptionNotMigratedException} (client fault)
 *  <p>An operation requiring TagOptions failed because the TagOptions migration process has
 *          not been performed for this account. Use the Amazon Web Services Management Console to perform the migration
 *          process before retrying the operation.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 *
 * @public
 */
export class DeleteTagOptionCommand extends $Command
  .classBuilder<
    DeleteTagOptionCommandInput,
    DeleteTagOptionCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "DeleteTagOption", {})
  .n("ServiceCatalogClient", "DeleteTagOptionCommand")
  .sc(DeleteTagOption$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTagOptionInput;
      output: {};
    };
    sdk: {
      input: DeleteTagOptionCommandInput;
      output: DeleteTagOptionCommandOutput;
    };
  };
}
