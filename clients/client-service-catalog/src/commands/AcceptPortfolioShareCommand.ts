// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AcceptPortfolioShareInput, AcceptPortfolioShareOutput } from "../models/models_0";
import { de_AcceptPortfolioShareCommand, se_AcceptPortfolioShareCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Accepts an offer to share the specified portfolio.</p>
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
 *
 * @public
 */
export class AcceptPortfolioShareCommand extends $Command
  .classBuilder<
    AcceptPortfolioShareCommandInput,
    AcceptPortfolioShareCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWS242ServiceCatalogService", "AcceptPortfolioShare", {})
  .n("ServiceCatalogClient", "AcceptPortfolioShareCommand")
  .f(void 0, void 0)
  .ser(se_AcceptPortfolioShareCommand)
  .de(de_AcceptPortfolioShareCommand)
  .build() {
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
