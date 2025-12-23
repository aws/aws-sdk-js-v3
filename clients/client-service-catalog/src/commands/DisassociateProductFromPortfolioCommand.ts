// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DisassociateProductFromPortfolioInput, DisassociateProductFromPortfolioOutput } from "../models/models_0";
import { DisassociateProductFromPortfolio$ } from "../schemas/schemas_0";
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
 * The input for {@link DisassociateProductFromPortfolioCommand}.
 */
export interface DisassociateProductFromPortfolioCommandInput extends DisassociateProductFromPortfolioInput {}
/**
 * @public
 *
 * The output of {@link DisassociateProductFromPortfolioCommand}.
 */
export interface DisassociateProductFromPortfolioCommandOutput extends DisassociateProductFromPortfolioOutput, __MetadataBearer {}

/**
 * <p>Disassociates the specified product from the specified portfolio. </p>
 *          <p>A delegated admin is authorized to invoke this command.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DisassociateProductFromPortfolioCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DisassociateProductFromPortfolioCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // DisassociateProductFromPortfolioInput
 *   AcceptLanguage: "STRING_VALUE",
 *   ProductId: "STRING_VALUE", // required
 *   PortfolioId: "STRING_VALUE", // required
 * };
 * const command = new DisassociateProductFromPortfolioCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateProductFromPortfolioCommandInput - {@link DisassociateProductFromPortfolioCommandInput}
 * @returns {@link DisassociateProductFromPortfolioCommandOutput}
 * @see {@link DisassociateProductFromPortfolioCommandInput} for command's `input` shape.
 * @see {@link DisassociateProductFromPortfolioCommandOutput} for command's `response` shape.
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
export class DisassociateProductFromPortfolioCommand extends $Command
  .classBuilder<
    DisassociateProductFromPortfolioCommandInput,
    DisassociateProductFromPortfolioCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "DisassociateProductFromPortfolio", {})
  .n("ServiceCatalogClient", "DisassociateProductFromPortfolioCommand")
  .sc(DisassociateProductFromPortfolio$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateProductFromPortfolioInput;
      output: {};
    };
    sdk: {
      input: DisassociateProductFromPortfolioCommandInput;
      output: DisassociateProductFromPortfolioCommandOutput;
    };
  };
}
