// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListConstraintsForPortfolioInput, ListConstraintsForPortfolioOutput } from "../models/models_0";
import { de_ListConstraintsForPortfolioCommand, se_ListConstraintsForPortfolioCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListConstraintsForPortfolioCommand}.
 */
export interface ListConstraintsForPortfolioCommandInput extends ListConstraintsForPortfolioInput {}
/**
 * @public
 *
 * The output of {@link ListConstraintsForPortfolioCommand}.
 */
export interface ListConstraintsForPortfolioCommandOutput extends ListConstraintsForPortfolioOutput, __MetadataBearer {}

/**
 * <p>Lists the constraints for the specified portfolio and product.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListConstraintsForPortfolioCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListConstraintsForPortfolioCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // ListConstraintsForPortfolioInput
 *   AcceptLanguage: "STRING_VALUE",
 *   PortfolioId: "STRING_VALUE", // required
 *   ProductId: "STRING_VALUE",
 *   PageSize: Number("int"),
 *   PageToken: "STRING_VALUE",
 * };
 * const command = new ListConstraintsForPortfolioCommand(input);
 * const response = await client.send(command);
 * // { // ListConstraintsForPortfolioOutput
 * //   ConstraintDetails: [ // ConstraintDetails
 * //     { // ConstraintDetail
 * //       ConstraintId: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //       ProductId: "STRING_VALUE",
 * //       PortfolioId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListConstraintsForPortfolioCommandInput - {@link ListConstraintsForPortfolioCommandInput}
 * @returns {@link ListConstraintsForPortfolioCommandOutput}
 * @see {@link ListConstraintsForPortfolioCommandInput} for command's `input` shape.
 * @see {@link ListConstraintsForPortfolioCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
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
export class ListConstraintsForPortfolioCommand extends $Command
  .classBuilder<
    ListConstraintsForPortfolioCommandInput,
    ListConstraintsForPortfolioCommandOutput,
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
  .s("AWS242ServiceCatalogService", "ListConstraintsForPortfolio", {})
  .n("ServiceCatalogClient", "ListConstraintsForPortfolioCommand")
  .f(void 0, void 0)
  .ser(se_ListConstraintsForPortfolioCommand)
  .de(de_ListConstraintsForPortfolioCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListConstraintsForPortfolioInput;
      output: ListConstraintsForPortfolioOutput;
    };
    sdk: {
      input: ListConstraintsForPortfolioCommandInput;
      output: ListConstraintsForPortfolioCommandOutput;
    };
  };
}
