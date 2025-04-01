// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribePortfolioInput, DescribePortfolioOutput } from "../models/models_0";
import { de_DescribePortfolioCommand, se_DescribePortfolioCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePortfolioCommand}.
 */
export interface DescribePortfolioCommandInput extends DescribePortfolioInput {}
/**
 * @public
 *
 * The output of {@link DescribePortfolioCommand}.
 */
export interface DescribePortfolioCommandOutput extends DescribePortfolioOutput, __MetadataBearer {}

/**
 * <p>Gets information about the specified portfolio.</p>
 *          <p>A delegated admin is authorized to invoke this command.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, DescribePortfolioCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, DescribePortfolioCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const input = { // DescribePortfolioInput
 *   AcceptLanguage: "STRING_VALUE",
 *   Id: "STRING_VALUE", // required
 * };
 * const command = new DescribePortfolioCommand(input);
 * const response = await client.send(command);
 * // { // DescribePortfolioOutput
 * //   PortfolioDetail: { // PortfolioDetail
 * //     Id: "STRING_VALUE",
 * //     ARN: "STRING_VALUE",
 * //     DisplayName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     CreatedTime: new Date("TIMESTAMP"),
 * //     ProviderName: "STRING_VALUE",
 * //   },
 * //   Tags: [ // Tags
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   TagOptions: [ // TagOptionDetails
 * //     { // TagOptionDetail
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //       Active: true || false,
 * //       Id: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Budgets: [ // Budgets
 * //     { // BudgetDetail
 * //       BudgetName: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribePortfolioCommandInput - {@link DescribePortfolioCommandInput}
 * @returns {@link DescribePortfolioCommandOutput}
 * @see {@link DescribePortfolioCommandInput} for command's `input` shape.
 * @see {@link DescribePortfolioCommandOutput} for command's `response` shape.
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
export class DescribePortfolioCommand extends $Command
  .classBuilder<
    DescribePortfolioCommandInput,
    DescribePortfolioCommandOutput,
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
  .s("AWS242ServiceCatalogService", "DescribePortfolio", {})
  .n("ServiceCatalogClient", "DescribePortfolioCommand")
  .f(void 0, void 0)
  .ser(se_DescribePortfolioCommand)
  .de(de_DescribePortfolioCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePortfolioInput;
      output: DescribePortfolioOutput;
    };
    sdk: {
      input: DescribePortfolioCommandInput;
      output: DescribePortfolioCommandOutput;
    };
  };
}
