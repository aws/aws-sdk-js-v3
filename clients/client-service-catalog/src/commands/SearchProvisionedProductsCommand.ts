// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { SearchProvisionedProductsInput, SearchProvisionedProductsOutput } from "../models/models_0";
import { SearchProvisionedProducts } from "../schemas/schemas_0";
import type {
  ServiceCatalogClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ServiceCatalogClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SearchProvisionedProductsCommand}.
 */
export interface SearchProvisionedProductsCommandInput extends SearchProvisionedProductsInput {}
/**
 * @public
 *
 * The output of {@link SearchProvisionedProductsCommand}.
 */
export interface SearchProvisionedProductsCommandOutput extends SearchProvisionedProductsOutput, __MetadataBearer {}

/**
 * <p>Gets information about the provisioned products that meet the specified criteria.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, SearchProvisionedProductsCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, SearchProvisionedProductsCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * // import type { ServiceCatalogClientConfig } from "@aws-sdk/client-service-catalog";
 * const config = {}; // type is ServiceCatalogClientConfig
 * const client = new ServiceCatalogClient(config);
 * const input = { // SearchProvisionedProductsInput
 *   AcceptLanguage: "STRING_VALUE",
 *   AccessLevelFilter: { // AccessLevelFilter
 *     Key: "Account" || "Role" || "User",
 *     Value: "STRING_VALUE",
 *   },
 *   Filters: { // ProvisionedProductFilters
 *     "<keys>": [ // ProvisionedProductViewFilterValues
 *       "STRING_VALUE",
 *     ],
 *   },
 *   SortBy: "STRING_VALUE",
 *   SortOrder: "ASCENDING" || "DESCENDING",
 *   PageSize: Number("int"),
 *   PageToken: "STRING_VALUE",
 * };
 * const command = new SearchProvisionedProductsCommand(input);
 * const response = await client.send(command);
 * // { // SearchProvisionedProductsOutput
 * //   ProvisionedProducts: [ // ProvisionedProductAttributes
 * //     { // ProvisionedProductAttribute
 * //       Name: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Status: "AVAILABLE" || "UNDER_CHANGE" || "TAINTED" || "ERROR" || "PLAN_IN_PROGRESS",
 * //       StatusMessage: "STRING_VALUE",
 * //       CreatedTime: new Date("TIMESTAMP"),
 * //       IdempotencyToken: "STRING_VALUE",
 * //       LastRecordId: "STRING_VALUE",
 * //       LastProvisioningRecordId: "STRING_VALUE",
 * //       LastSuccessfulProvisioningRecordId: "STRING_VALUE",
 * //       Tags: [ // Tags
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       PhysicalId: "STRING_VALUE",
 * //       ProductId: "STRING_VALUE",
 * //       ProductName: "STRING_VALUE",
 * //       ProvisioningArtifactId: "STRING_VALUE",
 * //       ProvisioningArtifactName: "STRING_VALUE",
 * //       UserArn: "STRING_VALUE",
 * //       UserArnSession: "STRING_VALUE",
 * //     },
 * //   ],
 * //   TotalResultsCount: Number("int"),
 * //   NextPageToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchProvisionedProductsCommandInput - {@link SearchProvisionedProductsCommandInput}
 * @returns {@link SearchProvisionedProductsCommandOutput}
 * @see {@link SearchProvisionedProductsCommandInput} for command's `input` shape.
 * @see {@link SearchProvisionedProductsCommandOutput} for command's `response` shape.
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
export class SearchProvisionedProductsCommand extends $Command
  .classBuilder<
    SearchProvisionedProductsCommandInput,
    SearchProvisionedProductsCommandOutput,
    ServiceCatalogClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ServiceCatalogClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWS242ServiceCatalogService", "SearchProvisionedProducts", {})
  .n("ServiceCatalogClient", "SearchProvisionedProductsCommand")
  .sc(SearchProvisionedProducts)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchProvisionedProductsInput;
      output: SearchProvisionedProductsOutput;
    };
    sdk: {
      input: SearchProvisionedProductsCommandInput;
      output: SearchProvisionedProductsCommandOutput;
    };
  };
}
