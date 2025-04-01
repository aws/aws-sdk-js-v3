// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListPortfoliosForProductInput, ListPortfoliosForProductOutput } from "../models/models_0";
import { de_ListPortfoliosForProductCommand, se_ListPortfoliosForProductCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPortfoliosForProductCommand}.
 */
export interface ListPortfoliosForProductCommandInput extends ListPortfoliosForProductInput {}
/**
 * @public
 *
 * The output of {@link ListPortfoliosForProductCommand}.
 */
export interface ListPortfoliosForProductCommandOutput extends ListPortfoliosForProductOutput, __MetadataBearer {}

/**
 * <p>Lists all portfolios that the specified product is associated with.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListPortfoliosForProductCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListPortfoliosForProductCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // ListPortfoliosForProductInput
 *   AcceptLanguage: "STRING_VALUE",
 *   ProductId: "STRING_VALUE", // required
 *   PageToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new ListPortfoliosForProductCommand(input);
 * const response = await client.send(command);
 * // { // ListPortfoliosForProductOutput
 * //   PortfolioDetails: [ // PortfolioDetails
 * //     { // PortfolioDetail
 * //       Id: "STRING_VALUE",
 * //       ARN: "STRING_VALUE",
 * //       DisplayName: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       ProviderName: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPortfoliosForProductCommandInput - {@link ListPortfoliosForProductCommandInput}
 * @returns {@link ListPortfoliosForProductCommandOutput}
 * @see {@link ListPortfoliosForProductCommandInput} for command's `input` shape.
 * @see {@link ListPortfoliosForProductCommandOutput} for command's `response` shape.
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
export class ListPortfoliosForProductCommand extends $Command
  .classBuilder<
    ListPortfoliosForProductCommandInput,
    ListPortfoliosForProductCommandOutput,
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
  .s("AWS242ServiceCatalogService", "ListPortfoliosForProduct", {})
  .n("ServiceCatalogClient", "ListPortfoliosForProductCommand")
  .f(void 0, void 0)
  .ser(se_ListPortfoliosForProductCommand)
  .de(de_ListPortfoliosForProductCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPortfoliosForProductInput;
      output: ListPortfoliosForProductOutput;
    };
    sdk: {
      input: ListPortfoliosForProductCommandInput;
      output: ListPortfoliosForProductCommandOutput;
    };
  };
}
