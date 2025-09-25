// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListPortfoliosInput, ListPortfoliosOutput } from "../models/models_0";
import { ListPortfolios } from "../schemas/schemas_19_Portfolio";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPortfoliosCommand}.
 */
export interface ListPortfoliosCommandInput extends ListPortfoliosInput {}
/**
 * @public
 *
 * The output of {@link ListPortfoliosCommand}.
 */
export interface ListPortfoliosCommandOutput extends ListPortfoliosOutput, __MetadataBearer {}

/**
 * <p>Lists all portfolios in the catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListPortfoliosCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListPortfoliosCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // ListPortfoliosInput
 *   AcceptLanguage: "STRING_VALUE",
 *   PageToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new ListPortfoliosCommand(input);
 * const response = await client.send(command);
 * // { // ListPortfoliosOutput
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
 * @param ListPortfoliosCommandInput - {@link ListPortfoliosCommandInput}
 * @returns {@link ListPortfoliosCommandOutput}
 * @see {@link ListPortfoliosCommandInput} for command's `input` shape.
 * @see {@link ListPortfoliosCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for ServiceCatalogClient's `config` shape.
 *
 * @throws {@link InvalidParametersException} (client fault)
 *  <p>One or more parameters provided to the operation are not valid.</p>
 *
 * @throws {@link ServiceCatalogServiceException}
 * <p>Base exception class for all service exceptions from ServiceCatalog service.</p>
 *
 *
 * @public
 */
export class ListPortfoliosCommand extends $Command
  .classBuilder<
    ListPortfoliosCommandInput,
    ListPortfoliosCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "ListPortfolios", {})
  .n("ServiceCatalogClient", "ListPortfoliosCommand")
  .sc(ListPortfolios)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPortfoliosInput;
      output: ListPortfoliosOutput;
    };
    sdk: {
      input: ListPortfoliosCommandInput;
      output: ListPortfoliosCommandOutput;
    };
  };
}
