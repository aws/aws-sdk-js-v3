// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { RejectPortfolioShareInput, RejectPortfolioShareOutput } from "../models/models_0";
import { RejectPortfolioShare } from "../schemas/schemas_6_Portfolio";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RejectPortfolioShareCommand}.
 */
export interface RejectPortfolioShareCommandInput extends RejectPortfolioShareInput {}
/**
 * @public
 *
 * The output of {@link RejectPortfolioShareCommand}.
 */
export interface RejectPortfolioShareCommandOutput extends RejectPortfolioShareOutput, __MetadataBearer {}

/**
 * <p>Rejects an offer to share the specified portfolio.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, RejectPortfolioShareCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, RejectPortfolioShareCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // RejectPortfolioShareInput
 *   AcceptLanguage: "STRING_VALUE",
 *   PortfolioId: "STRING_VALUE", // required
 *   PortfolioShareType: "IMPORTED" || "AWS_SERVICECATALOG" || "AWS_ORGANIZATIONS",
 * };
 * const command = new RejectPortfolioShareCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RejectPortfolioShareCommandInput - {@link RejectPortfolioShareCommandInput}
 * @returns {@link RejectPortfolioShareCommandOutput}
 * @see {@link RejectPortfolioShareCommandInput} for command's `input` shape.
 * @see {@link RejectPortfolioShareCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
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
export class RejectPortfolioShareCommand extends $Command
  .classBuilder<
    RejectPortfolioShareCommandInput,
    RejectPortfolioShareCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "RejectPortfolioShare", {})
  .n("ServiceCatalogClient", "RejectPortfolioShareCommand")
  .sc(RejectPortfolioShare)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RejectPortfolioShareInput;
      output: {};
    };
    sdk: {
      input: RejectPortfolioShareCommandInput;
      output: RejectPortfolioShareCommandOutput;
    };
  };
}
