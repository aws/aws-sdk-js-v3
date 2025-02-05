// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SearchProductsAsAdminInput, SearchProductsAsAdminOutput } from "../models/models_0";
import { de_SearchProductsAsAdminCommand, se_SearchProductsAsAdminCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchProductsAsAdminCommand}.
 */
export interface SearchProductsAsAdminCommandInput extends SearchProductsAsAdminInput {}
/**
 * @public
 *
 * The output of {@link SearchProductsAsAdminCommand}.
 */
export interface SearchProductsAsAdminCommandOutput extends SearchProductsAsAdminOutput, __MetadataBearer {}

/**
 * <p>Gets information about the products for the specified portfolio or all products.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, SearchProductsAsAdminCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, SearchProductsAsAdminCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ServiceCatalogClient(config);
 * const input = { // SearchProductsAsAdminInput
 *   AcceptLanguage: "STRING_VALUE",
 *   PortfolioId: "STRING_VALUE",
 *   Filters: { // ProductViewFilters
 *     "<keys>": [ // ProductViewFilterValues
 *       "STRING_VALUE",
 *     ],
 *   },
 *   SortBy: "Title" || "VersionCount" || "CreationDate",
 *   SortOrder: "ASCENDING" || "DESCENDING",
 *   PageToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 *   ProductSource: "ACCOUNT",
 * };
 * const command = new SearchProductsAsAdminCommand(input);
 * const response = await client.send(command);
 * // { // SearchProductsAsAdminOutput
 * //   ProductViewDetails: [ // ProductViewDetails
 * //     { // ProductViewDetail
 * //       ProductViewSummary: { // ProductViewSummary
 * //         Id: "STRING_VALUE",
 * //         ProductId: "STRING_VALUE",
 * //         Name: "STRING_VALUE",
 * //         Owner: "STRING_VALUE",
 * //         ShortDescription: "STRING_VALUE",
 * //         Type: "CLOUD_FORMATION_TEMPLATE" || "MARKETPLACE" || "TERRAFORM_OPEN_SOURCE" || "TERRAFORM_CLOUD" || "EXTERNAL",
 * //         Distributor: "STRING_VALUE",
 * //         HasDefaultPath: true || false,
 * //         SupportEmail: "STRING_VALUE",
 * //         SupportDescription: "STRING_VALUE",
 * //         SupportUrl: "STRING_VALUE",
 * //       },
 * //       Status: "AVAILABLE" || "CREATING" || "FAILED",
 * //       ProductARN: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       SourceConnection: { // SourceConnectionDetail
 * //         Type: "CODESTAR",
 * //         ConnectionParameters: { // SourceConnectionParameters
 * //           CodeStar: { // CodeStarParameters
 * //             ConnectionArn: "STRING_VALUE", // required
 * //             Repository: "STRING_VALUE", // required
 * //             Branch: "STRING_VALUE", // required
 * //             ArtifactPath: "STRING_VALUE", // required
 * //           },
 * //         },
 * //         LastSync: { // LastSync
 * //           LastSyncTime: new Date("TIMESTAMP"),
 * //           LastSyncStatus: "SUCCEEDED" || "FAILED",
 * //           LastSyncStatusMessage: "STRING_VALUE",
 * //           LastSuccessfulSyncTime: new Date("TIMESTAMP"),
 * //           LastSuccessfulSyncProvisioningArtifactId: "STRING_VALUE",
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchProductsAsAdminCommandInput - {@link SearchProductsAsAdminCommandInput}
 * @returns {@link SearchProductsAsAdminCommandOutput}
 * @see {@link SearchProductsAsAdminCommandInput} for command's `input` shape.
 * @see {@link SearchProductsAsAdminCommandOutput} for command's `response` shape.
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
 * @public
 */
export class SearchProductsAsAdminCommand extends $Command
  .classBuilder<
    SearchProductsAsAdminCommandInput,
    SearchProductsAsAdminCommandOutput,
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
  .s("AWS242ServiceCatalogService", "SearchProductsAsAdmin", {})
  .n("ServiceCatalogClient", "SearchProductsAsAdminCommand")
  .f(void 0, void 0)
  .ser(se_SearchProductsAsAdminCommand)
  .de(de_SearchProductsAsAdminCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchProductsAsAdminInput;
      output: SearchProductsAsAdminOutput;
    };
    sdk: {
      input: SearchProductsAsAdminCommandInput;
      output: SearchProductsAsAdminCommandOutput;
    };
  };
}
