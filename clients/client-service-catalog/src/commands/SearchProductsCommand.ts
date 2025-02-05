// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SearchProductsInput, SearchProductsOutput } from "../models/models_0";
import { de_SearchProductsCommand, se_SearchProductsCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @public
 */
export class SearchProductsCommand extends $Command
  .classBuilder<
    SearchProductsCommandInput,
    SearchProductsCommandOutput,
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
  .s("AWS242ServiceCatalogService", "SearchProducts", {})
  .n("ServiceCatalogClient", "SearchProductsCommand")
  .f(void 0, void 0)
  .ser(se_SearchProductsCommand)
  .de(de_SearchProductsCommand)
  .build() {
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
