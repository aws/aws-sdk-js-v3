// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SearchProvisionedProductsInput, SearchProvisionedProductsOutput } from "../models/models_0";
import { de_SearchProvisionedProductsCommand, se_SearchProvisionedProductsCommand } from "../protocols/Aws_json1_1";
import { ServiceCatalogClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ServiceCatalogClient";

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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWS242ServiceCatalogService", "SearchProvisionedProducts", {})
  .n("ServiceCatalogClient", "SearchProvisionedProductsCommand")
  .f(void 0, void 0)
  .ser(se_SearchProvisionedProductsCommand)
  .de(de_SearchProvisionedProductsCommand)
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
