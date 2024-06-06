// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateProductWithPortfolioInput, AssociateProductWithPortfolioOutput } from "../models/models_0";
import {
  de_AssociateProductWithPortfolioCommand,
  se_AssociateProductWithPortfolioCommand,
} from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface AssociateProductWithPortfolioCommandOutput
  extends AssociateProductWithPortfolioOutput,
    __MetadataBearer {}

/**
 * <p>Associates the specified product with the specified portfolio.</p>
 *          <p>A delegated admin is authorized to invoke this command.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, AssociateProductWithPortfolioCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, AssociateProductWithPortfolioCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
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
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The current limits of the service would have been exceeded by this operation. Decrease your
 *          resource use or increase your service limits and retry the operation.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 * @public
 */
export class AssociateProductWithPortfolioCommand extends $Command
  .classBuilder<
    AssociateProductWithPortfolioCommandInput,
    AssociateProductWithPortfolioCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWS242ServiceCatalogService", "AssociateProductWithPortfolio", {})
  .n("ServiceCatalogClient", "AssociateProductWithPortfolioCommand")
  .f(void 0, void 0)
  .ser(se_AssociateProductWithPortfolioCommand)
  .de(de_AssociateProductWithPortfolioCommand)
  .build() {}
