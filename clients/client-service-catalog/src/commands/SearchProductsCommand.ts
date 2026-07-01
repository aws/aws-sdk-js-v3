// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchProductsInput, SearchProductsOutput } from "../models/models_0";
import { SearchProducts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchProductsCommand}.
 */
export interface SearchProductsCommandInput extends SearchProductsInput {}
/**
 * @public
 *
 * The output of {@link SearchProductsCommand}.
 */
export interface SearchProductsCommandOutput extends SearchProductsOutput, __MetadataBearer {}

/**
 * <p>Gets information about the products to which the caller has access.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, SearchProductsCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, SearchProductsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // SearchProductsInput
 *   AcceptLanguage: "STRING_VALUE",
 *   Filters: { // ProductViewFilters
 *     "<keys>": [ // ProductViewFilterValues
 *       "STRING_VALUE",
 *     ],
 *   },
 *   PageSize: Number("int"),
 *   SortBy: "Title" || "VersionCount" || "CreationDate",
 *   SortOrder: "ASCENDING" || "DESCENDING",
 *   PageToken: "STRING_VALUE",
 * };
 * const command = new SearchProductsCommand(input);
 * const response = await client.send(command);
 * // { // SearchProductsOutput
 * //   ProductViewSummaries: [ // ProductViewSummaries
 * //     { // ProductViewSummary
 * //       Id: "STRING_VALUE",
 * //       ProductId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //       ShortDescription: "STRING_VALUE",
 * //       Type: "CLOUD_FORMATION_TEMPLATE" || "MARKETPLACE" || "TERRAFORM_OPEN_SOURCE" || "TERRAFORM_CLOUD" || "EXTERNAL",
 * //       Distributor: "STRING_VALUE",
 * //       HasDefaultPath: true || false,
 * //       SupportEmail: "STRING_VALUE",
 * //       SupportDescription: "STRING_VALUE",
 * //       SupportUrl: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ProductViewAggregations: { // ProductViewAggregations
 * //     "<keys>": [ // ProductViewAggregationValues
 * //       { // ProductViewAggregationValue
 * //         Value: "STRING_VALUE",
 * //         ApproximateCount: Number("int"),
 * //       },
 * //     ],
 * //   },
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchProductsCommandInput - {@link SearchProductsCommandInput}
 * @returns {@link SearchProductsCommandOutput}
 * @see {@link SearchProductsCommandInput} for command's `input` shape.
 * @see {@link SearchProductsCommandOutput} for command's `response` shape.
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
export class SearchProductsCommand extends command<SearchProductsCommandInput, SearchProductsCommandOutput>(
  _ep0,
  _mw0,
  "SearchProducts",
  SearchProducts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchProductsInput;
      output: SearchProductsOutput;
    };
    sdk: {
      input: SearchProductsCommandInput;
      output: SearchProductsCommandOutput;
    };
  };
}
