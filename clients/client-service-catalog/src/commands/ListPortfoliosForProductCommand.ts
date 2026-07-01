// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPortfoliosForProductInput, ListPortfoliosForProductOutput } from "../models/models_0";
import { ListPortfoliosForProduct$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
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
export class ListPortfoliosForProductCommand extends command<ListPortfoliosForProductCommandInput, ListPortfoliosForProductCommandOutput>(
  _ep0,
  _mw0,
  "ListPortfoliosForProduct",
  ListPortfoliosForProduct$
) {
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
