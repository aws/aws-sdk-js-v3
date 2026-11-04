// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AcceptPortfolioShareInput, AcceptPortfolioShareOutput } from "../models/models_0";
import { AcceptPortfolioShare$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AcceptPortfolioShareCommand}.
 */
export interface AcceptPortfolioShareCommandInput extends AcceptPortfolioShareInput {}
/**
 * @public
 *
 * The output of {@link AcceptPortfolioShareCommand}.
 */
export interface AcceptPortfolioShareCommandOutput extends AcceptPortfolioShareOutput, __MetadataBearer {}

/**
 * Accepts an offer to share the specified portfolio.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, AcceptPortfolioShareCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, AcceptPortfolioShareCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // AcceptPortfolioShareInput
 *   AcceptLanguage: "STRING_VALUE",
 *   PortfolioId: "STRING_VALUE", // required
 *   PortfolioShareType: "IMPORTED" || "AWS_SERVICECATALOG" || "AWS_ORGANIZATIONS",
 * };
 * const command = new AcceptPortfolioShareCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AcceptPortfolioShareCommandInput - {@link AcceptPortfolioShareCommandInput}
 * @returns {@link AcceptPortfolioShareCommandOutput}
 * @see {@link AcceptPortfolioShareCommandInput} for command's `input` shape.
 * @see {@link AcceptPortfolioShareCommandOutput} for command's `response` shape.
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
export class AcceptPortfolioShareCommand extends command<AcceptPortfolioShareCommandInput, AcceptPortfolioShareCommandOutput>(
  _ep0,
  _mw0,
  "AcceptPortfolioShare",
  AcceptPortfolioShare$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptPortfolioShareInput;
      output: {};
    };
    sdk: {
      input: AcceptPortfolioShareCommandInput;
      output: AcceptPortfolioShareCommandOutput;
    };
  };
}
