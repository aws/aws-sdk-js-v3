// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateProductWithPortfolioInput, AssociateProductWithPortfolioOutput } from "../models/models_0";
import { AssociateProductWithPortfolio$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateProductWithPortfolioCommand}.
 */
export interface AssociateProductWithPortfolioCommandInput extends AssociateProductWithPortfolioInput {}
/**
 * @public
 *
 * The output of {@link AssociateProductWithPortfolioCommand}.
 */
export interface AssociateProductWithPortfolioCommandOutput extends AssociateProductWithPortfolioOutput, __MetadataBearer {}

/**
 * Associates the specified product with the specified portfolio.
 *
 * A delegated admin is authorized to invoke this command.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, AssociateProductWithPortfolioCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, AssociateProductWithPortfolioCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // AssociateProductWithPortfolioInput
 *   AcceptLanguage: "STRING_VALUE",
 *   ProductId: "STRING_VALUE", // required
 *   PortfolioId: "STRING_VALUE", // required
 *   SourcePortfolioId: "STRING_VALUE",
 * };
 * const command = new AssociateProductWithPortfolioCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateProductWithPortfolioCommandInput - {@link AssociateProductWithPortfolioCommandInput}
 * @returns {@link AssociateProductWithPortfolioCommandOutput}
 * @see {@link AssociateProductWithPortfolioCommandInput} for command's `input` shape.
 * @see {@link AssociateProductWithPortfolioCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *
 * One or more parameters provided to the operation are not valid.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * The current limits of the service would have been exceeded by this operation. Decrease your resource use or increase your service limits and retry the operation.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource was not found.
 *
 * @throws {@link ServiceCatalogServiceException}
 *
 * Base exception class for all service exceptions from ServiceCatalog service.
 *
 * @public
 */
export class AssociateProductWithPortfolioCommand extends command<AssociateProductWithPortfolioCommandInput, AssociateProductWithPortfolioCommandOutput>(
  _ep0,
  _mw0,
  "AssociateProductWithPortfolio",
  AssociateProductWithPortfolio$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateProductWithPortfolioInput;
      output: {};
    };
    sdk: {
      input: AssociateProductWithPortfolioCommandInput;
      output: AssociateProductWithPortfolioCommandOutput;
    };
  };
}
