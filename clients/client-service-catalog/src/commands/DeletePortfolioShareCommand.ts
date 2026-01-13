// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeletePortfolioShareInput, DeletePortfolioShareOutput } from "../models/models_0";
import { DeletePortfolioShare$ } from "../schemas/schemas_0";
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
 * The input for {@link DeletePortfolioShareCommand}.
 */
export interface DeletePortfolioShareCommandInput extends DeletePortfolioShareInput {}
/**
 * @public
 *
 * The output of {@link DeletePortfolioShareCommand}.
 */
export interface DeletePortfolioShareCommandOutput extends DeletePortfolioShareOutput, __MetadataBearer {}

/**
 * <p>Stops sharing the specified portfolio with the specified account or organization
 *          node. Shares to an organization node can only be deleted by the management account of an
 *          organization or by a delegated administrator.</p>
 *          <p>Note that if a delegated admin is de-registered, portfolio shares created from that account are removed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DeletePortfolioShareCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DeletePortfolioShareCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // DeletePortfolioShareInput
 *   AcceptLanguage: "STRING_VALUE",
 *   PortfolioId: "STRING_VALUE", // required
 *   AccountId: "STRING_VALUE",
 *   OrganizationNode: { // OrganizationNode
 *     Type: "ORGANIZATION" || "ORGANIZATIONAL_UNIT" || "ACCOUNT",
 *     Value: "STRING_VALUE",
 *   },
 * };
 * const command = new DeletePortfolioShareCommand(input);
 * const response = await client.send(command);
 * // { // DeletePortfolioShareOutput
 * //   PortfolioShareToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeletePortfolioShareCommandInput - {@link DeletePortfolioShareCommandInput}
 * @returns {@link DeletePortfolioShareCommandOutput}
 * @see {@link DeletePortfolioShareCommandInput} for command's `input` shape.
 * @see {@link DeletePortfolioShareCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>An attempt was made to modify a resource that is in a state that is not valid.
 *          Check your resources to ensure that they are in valid states before retrying the operation.</p>
 *
 * @throws {@link OperationNotSupportedException} (client fault)
 *  <p>The operation is not supported.</p>
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
export class DeletePortfolioShareCommand extends $Command
  .classBuilder<
    DeletePortfolioShareCommandInput,
    DeletePortfolioShareCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "DeletePortfolioShare", {})
  .n("ServiceCatalogClient", "DeletePortfolioShareCommand")
  .sc(DeletePortfolioShare$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePortfolioShareInput;
      output: DeletePortfolioShareOutput;
    };
    sdk: {
      input: DeletePortfolioShareCommandInput;
      output: DeletePortfolioShareCommandOutput;
    };
  };
}
